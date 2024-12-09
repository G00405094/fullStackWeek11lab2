async function handler(req, res) { 
    const response = await fetch('http://localhost:8000/deleteCV', {
      method: 'DELETE',
      body: JSON.stringify({ cmd: 'all' }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    console.log(JSON.stringify(data))
    res.json(data)
  }
  
  export default handler;