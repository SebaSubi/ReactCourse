import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})
  useEffect(() => {
    // console.log('Efect')
    const handleMove = (event) => {
      const {clientX, clientY} = event
      setPosition({x: clientX, y: clientY} )
      
    }

    if(enabled){
      window.addEventListener('pointermove', handleMove) //the eventlistener 'pointermove' gives you the x and y coordinates of the mouse
    }

    return () => {
      window.removeEventListener('pointermove', handleMove) //We remove the event listener evey time enable changes so it,
      //dosent continue to follow the mouse even when the button is in its deactivated state
      //With the command getEventListeners(window(for example)), you can return all the events that you are subscribed to,
      //this is very handy to debug, it only woeks in chronium tho

      setPosition({x: 0, y: 0 }) //Reset the position of the mouse follower so it dosent say over the button
    } 
    // --> You can add "Cleaners" to the useEffect.
    // --> This return executes every time ether the component stopr rendering, OR when the dependency changes <-- this is what we want
    // --> An example of the first case would be if all this logic would be in a seperate component, and the App() would just
    //render that component. Here, every time the App would stop rendering that component, this return would execute.
    // --> This is a very good practice, if we dirint do this, every time th ebutton is presed, a new event listener would be created, 
    //and it would start inporperly working and lagging
   
  }, [enabled]) //Never add a useEffect, inside a conditional

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }
      }/>
      <h3>Proyecto 3</h3>
      <button onClick={() => (setEnabled(!enabled))}>
        {enabled ? 'Deactivate' : 'Activate'} mouse follower
      </button>
    </main>
  )
}
export default App
