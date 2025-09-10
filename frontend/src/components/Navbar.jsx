import { useState } from 'react';
import { Search } from 'lucide-react';

export default function Navbar({ onSearch }){
  const [q, setQ] = useState('');
  return (
    <div className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto p-3 flex items-center gap-3">
        <div className="text-xl font-bold">Asakta Demo CRM</div>
        <div className="ml-auto relative">
          <input value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=> e.key==='Enter' && onSearch(q)}
            placeholder="Search leads..." className="border rounded-xl pl-9 pr-3 py-2 w-64"/>
          <Search className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-slate-500"/>
        </div>
        <button className="btn bg-[color:var(--ec-secondary)] text-white" onClick={()=>onSearch(q)}>Search</button>
      </div>
    </div>
  );
}
