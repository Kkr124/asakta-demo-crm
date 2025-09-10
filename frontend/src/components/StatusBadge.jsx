export default function StatusBadge({ status }){
  const map = {
    NEW: 'bg-slate-200 text-slate-700',
    CONTACTED: 'bg-blue-200 text-blue-800',
    QUALIFIED: 'bg-purple-200 text-purple-800',
    WON: 'bg-green-200 text-green-800',
    LOST: 'bg-red-200 text-red-800'
  };
  return <span className={`px-2 py-1 rounded-full text-xs font-semibold ${map[status]||'bg-slate-200'}`}>{status}</span>
}
