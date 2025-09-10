import { useState, useEffect } from 'react';

export default function LeadForm({ initial, onSave, onCancel }){
  const [form, setForm] = useState({ name:'', email:'', phone:'', source:'', status:'NEW' });
  useEffect(()=>{ if(initial) setForm(initial); }, [initial]);
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-3">{initial? 'Edit Lead':'Add Lead'}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {['name','email','phone','source'].map(k=> (
          <input key={k} value={form[k]||''} onChange={e=>setForm({...form,[k]:e.target.value})}
            placeholder={k.charAt(0).toUpperCase()+k.slice(1)} className="border rounded-xl px-3 py-2"/>
        ))}
        <select value={form.status} onChange={e=>setForm({...form,status:e.target.value})} className="border rounded-xl px-3 py-2">
          {['NEW','CONTACTED','QUALIFIED','WON','LOST'].map(s=> <option key={s}>{s}</option>)}
        </select>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="btn bg-[color:var(--ec-primary)] text-white" onClick={()=>onSave(form)}>Save</button>
        <button className="btn" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}
