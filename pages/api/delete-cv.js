async function handler(req, res) { 
    const response = await fetch('http://localhost:8000/deleteCV/${name}', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    console.log(JSON.stringify(data))
    res.json(data)
  }
  
  export default handler;