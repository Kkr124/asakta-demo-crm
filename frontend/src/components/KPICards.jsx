export default function KPICards({ rows }){
  const total = rows.length;
  const by = s => rows.filter(r=>r.status===s).length;
  const kpis = [
    { label:'Total', value: total },
    { label:'New', value: by('NEW') },
    { label:'Contacted', value: by('CONTACTED') },
    { label:'Qualified', value: by('QUALIFIED') },
    { label:'Won', value: by('WON') },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
      {kpis.map(k=> (
        <div key={k.label} className="card text-center">
          <div className="text-xs text-slate-500">{k.label}</div>
          <div className="text-2xl font-bold">{k.value}</div>
        </div>
      ))}
    </div>
  );
}
