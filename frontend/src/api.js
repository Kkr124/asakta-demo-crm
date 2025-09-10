const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";
export async function getLeads(params={}){
  const qs = new URLSearchParams(params).toString();
  const res = await fetch(`${API_BASE}/leads${qs?`?${qs}`:''}`);
  return res.json();
}
export async function createLead(data){
  const res = await fetch(`${API_BASE}/leads`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data)});
  return res.json();
}
export async function updateLead(id, data){
  const res = await fetch(`${API_BASE}/leads/${id}`, { method:'PUT', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data)});
  return res.json();
}
export async function deleteLead(id){
  await fetch(`${API_BASE}/leads/${id}`, { method:'DELETE' });
}
