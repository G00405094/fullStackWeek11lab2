// Lets do all database stuff here and just share this global context with the rest of the App
// - so no database code anywhere else in our App
// - every CRUD function the App needs to do is in here, in one place
// - makes debugging etc so much easier
// - all external connections still have to go through /api routes 

import { createContext, useState, useEffect } from 'react'

const GlobalContext = createContext()

export function GlobalContextProvider(props) {
    const [globals, setGlobals] = useState({ aString: 'init val', count: 0, hideHamMenu: true, cvs: [], dataLoaded: false })
    
    useEffect(() => {
        getAllCvs()
    }, []);

    async function getAllCvs() {
        const response = await fetch('/api/get-cvs', {
            method: 'POST',
            body: JSON.stringify({ cvInfo: 'all' }),
            headers: {
                'Content-Type': 'application/json'
                
            }
            
        });
        let data = await response.json();
        setGlobals((previousGlobals) => { const newGlobals = JSON.parse(JSON.stringify(previousGlobals)); newGlobals.cvs = data.cv || []; newGlobals.dataLoaded = true;  return newGlobals })
    }
    async function deleteCV() {
    if (command.cmd === 'deleteCv') {
      const response = await fetch('/api/delete-cv', {
        method: 'DELETE',
        body: JSON.stringify(command.newVal),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      
      setGlobals((previousGlobals) => {
        const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
        newGlobals.cvs = newGlobals.cvs.filter((cv) => cv.id !== command.newVal.id);
        return newGlobals;
      });
    }
}
    

    async function editGlobalData(command) { // {cmd: someCommand, newVal: 'new text'}
        if (command.cmd == 'hideHamMenu') { // {cmd: 'hideHamMenu', newVal: false} 
            //  WRONG (globals object reference doesn't change) and react only looks at its 'value' aka the reference, so nothing re-renders:
            //    setGlobals((previousGlobals) => { let newGlobals = previousGlobals; newGlobals.hideHamMenu = command.newVal; return newGlobals })
            // Correct, we create a whole new object and this forces a re-render:
            setGlobals((previousGlobals) => {
                const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
                console.log('Updated Globals:', globals.cvs);
                newGlobals.hideHamMenu = command.newVal; return newGlobals
            })
        }
        if (command.cmd == 'addCv') {
            const response = await fetch('/api/new-cv', {
                method: 'POST',
                body: JSON.stringify(command.newVal),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json(); // Should check here that it worked OK
            setGlobals((previousGlobals) => {
                const newGlobals = JSON.parse(JSON.stringify(previousGlobals))
                newGlobals.cvs.push(command.newVal); return newGlobals
            })
            
        }
        
    }

    const context = {
        updateGlobals: editGlobalData,
        theGlobalObject: globals
    }

    return <GlobalContext.Provider value={context}>
        {props.children}
    </GlobalContext.Provider>
}


export default GlobalContext
