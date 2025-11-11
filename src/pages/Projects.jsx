import { useEffect, useMemo, useState } from 'react';
import { Plus, Trash2, CheckCircle2, Calendar, Tag, Search } from 'lucide-react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Projects() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const [query, setQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const loadTasks = async () => {
    setLoading(true);
    setError('');
    try {
      const params = new URLSearchParams();
      if (filterCategory) params.set('category', filterCategory);
      if (query) params.set('q', query);
      const res = await fetch(`${API_BASE}/api/tasks?${params.toString()}`);
      const data = await res.json();
      setTasks(data);
    } catch (e) {
      setError('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      loadTasks();
    }, 400);
    return () => clearTimeout(t);
  }, [query, filterCategory]);

  const categories = useMemo(() => {
    const all = Array.from(new Set(tasks.map(t => t.category).filter(Boolean)));
    return all;
  }, [tasks]);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      const payload = {
        title: title.trim(),
        description: description.trim() || undefined,
        category: category.trim() || undefined,
        due_date: dueDate ? new Date(dueDate).toISOString() : undefined,
        priority: priority || undefined,
      };
      const res = await fetch(`${API_BASE}/api/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed to create');
      setTitle('');
      setDescription('');
      setCategory('');
      setDueDate('');
      setPriority('');
      loadTasks();
    } catch (e) {
      setError('Could not create task');
    }
  };

  const toggleComplete = async (task) => {
    try {
      await fetch(`${API_BASE}/api/tasks/${task.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !task.completed })
      });
      loadTasks();
    } catch (e) {
      setError('Update failed');
    }
  };

  const removeTask = async (id) => {
    try {
      await fetch(`${API_BASE}/api/tasks/${id}`, { method: 'DELETE' });
      setTasks(t => t.filter(x => x.id !== id));
    } catch (e) {
      setError('Delete failed');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-slate-800">Tasks</h1>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tasks..." className="pl-8 pr-3 py-2 rounded-lg border border-slate-200 bg-white text-sm" />
            </div>
            <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm">
              <option value="">All</option>
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <form onSubmit={handleAdd} className="grid md:grid-cols-6 gap-3 mb-6">
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" className="md:col-span-2 px-3 py-2 rounded-lg border border-slate-200 bg-white" />
          <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="md:col-span-2 px-3 py-2 rounded-lg border border-slate-200 bg-white" />
          <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" className="px-3 py-2 rounded-lg border border-slate-200 bg-white" />
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="px-3 py-2 rounded-lg border border-slate-200 bg-white" />
          <select value={priority} onChange={(e) => setPriority(e.target.value)} className="px-3 py-2 rounded-lg border border-slate-200 bg-white">
            <option value="">Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700">
            <Plus className="h-4 w-4" /> Add
          </button>
        </form>

        {error && <div className="mb-4 rounded-lg bg-red-50 text-red-700 px-3 py-2 text-sm">{error}</div>}

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid gap-3">
            {tasks.map((t) => (
              <div key={t.id} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-start gap-3">
                  <button onClick={() => toggleComplete(t)} className={`mt-1 rounded-full border w-5 h-5 flex items-center justify-center ${t.completed ? 'bg-green-500 border-green-500' : 'border-slate-300'}`}>
                    {t.completed && <CheckCircle2 className="h-4 w-4 text-white" />}
                  </button>
                  <div>
                    <div className={`font-medium ${t.completed ? 'line-through text-slate-400' : 'text-slate-800'}`}>{t.title}</div>
                    {t.description && <div className="text-sm text-slate-600">{t.description}</div>}
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      {t.category && <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5"><Tag className="h-3 w-3" />{t.category}</span>}
                      {t.due_date && <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(t.due_date).toLocaleDateString()}</span>}
                      {t.priority && <span className="inline-flex items-center gap-1">Priority: {t.priority}</span>}
                    </div>
                  </div>
                </div>
                <button onClick={() => removeTask(t.id)} className="rounded-lg p-2 hover:bg-red-50 text-red-600">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
            {tasks.length === 0 && (
              <div className="text-center text-slate-500 py-10">No tasks yet. Add your first task above.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
