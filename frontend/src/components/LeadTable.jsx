import StatusBadge from './StatusBadge';

export default function LeadTable({ rows, onEdit, onDelete }){
  return (
    <div className="card overflow-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left text-slate-500">
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Source</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r=> (
            <tr key={r.id} className="border-t">
              <td className="p-3 font-medium">{r.name}</td>
              <td className="p-3">{r.email}</td>
              <td className="p-3">{r.phone||'-'}</td>
              <td className="p-3">{r.source||'-'}</td>
              <td className="p-3"><StatusBadge status={r.status}/></td>
              <td className="p-3 flex gap-2">
                <button className="btn bg-slate-800 text-white" onClick={()=>onEdit(r)}>Edit</button>
                <button className="btn bg-red-600 text-white" onClick={()=>onDelete(r.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
