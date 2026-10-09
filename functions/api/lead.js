export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();
    if (data.website) return new Response(JSON.stringify({ok:true}), {headers:{'content-type':'application/json'}});
    const required = ['name','phone','area','service','message'];
    for (const key of required) if (!data[key] || String(data[key]).trim().length < 2) return new Response(JSON.stringify({ok:false,error:'Missing required field'}), {status:400,headers:{'content-type':'application/json'}});
    const lead = {id: crypto.randomUUID(), created_at:new Date().toISOString(), ...data};
    if (env.LEADS) await env.LEADS.put(`lead:${lead.id}`, JSON.stringify(lead));
    return new Response(JSON.stringify({ok:true,id:lead.id}), {headers:{'content-type':'application/json'}});
  } catch (e) { return new Response(JSON.stringify({ok:false,error:'Invalid request'}), {status:400,headers:{'content-type':'application/json'}}); }
}
