import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
export default function FunnelChart({ rows }){
  const data = ['NEW','CONTACTED','QUALIFIED','WON','LOST'].map(s=>({ status:s, count: rows.filter(r=>r.status===s).length }));
  return (
    <div className="card h-64">
      <div className="text-sm text-slate-500 mb-2">Leads by Status</div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="status"/>
          <YAxis allowDecimals={false}/>
          <Tooltip/>
          <Bar dataKey="count"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
