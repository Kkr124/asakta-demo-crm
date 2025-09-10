import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import KPICards from './components/KPICards';
import LeadForm from './components/LeadForm';
import LeadTable from './components/LeadTable';
import FunnelChart from './components/FunnelChart';
import { getLeads, createLead, updateLead, deleteLead } from './api';

export default function App(){
  const [rows, setRows] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [q, setQ] = useState('');

  const load = async (params={}) => setRows(await getLeads(params));
  useEffect(()=>{ load(); }, []);

  const onSave = async (data)=>{
    if(editing){ await updateLead(editing.id, data); }
    else { await createLead(data); }
    setShowForm(false); setEditing(null); load({ q });
  };

  return (
    <div>
      <Navbar onSearch={(value)=>{ setQ(value); load({ q:value }); }}/>
      <div className="max-w-6xl mx-auto p-4 space-y-4">
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}}>
          <div className="flex gap-2">
            <button className="btn bg-[color:var(--ec-primary)] text-white" onClick={()=>{ setEditing(null); setShowForm(true); }}>Add Lead</button>
          </div>
        </motion.div>
        {showForm && <LeadForm initial={editing} onSave={onSave} onCancel={()=>{ setShowForm(false); setEditing(null); }}/>}
        <KPICards rows={rows}/>
        <FunnelChart rows={rows}/>
        <LeadTable rows={rows} onEdit={(r)=>{ setEditing(r); setShowForm(true); }} onDelete={async(id)=>{ await deleteLead(id); load({ q }); }}/>
      </div>
    </div>
  );
}
