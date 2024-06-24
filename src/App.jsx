import { useState } from "react"

function App() {

  const [color,setColor] = useState();
  return (
    <>
      <div className="h-screen duration-200 w-full " style={{backgroundColor:color}}>

      <div className="fixed flex flex-wrap inset-x-0  justify-center bottom-12 rounded-lg" style={{backgroundColor:"white"}}>


        <button  onClick={() => setColor("red")} className="mx-8 rounded-full px-2 shadow-md" style={{backgroundColor:"red"}}>Red</button>
        <button  onClick={() => setColor("blue")} className="mx-8 rounded-full px-2 shadow-md" style={{backgroundColor:"blue"}}>Blue</button>
        <button  onClick={() => setColor("green")} className="mx-8 rounded-full px-2 shadow-md" style={{backgroundColor:"green"}}>Green</button>
        <button  onClick={() => setColor("olive")} className="mx-8 rounded-full px-2 shadow-md" style={{backgroundColor:"Olive"}}>Olive</button>
        <button  onClick={() => setColor("gray")} className="mx-8 rounded-full px-2 shadow-md" style={{backgroundColor:"Gray"}}>Gray</button>
        <button  onClick={() => setColor("pink")} className="mx-8 rounded-full px-2 shadow-md" style={{backgroundColor:"Pink"}}>Pink</button>
        <button  onClick={() => setColor("lavender")} className="mx-8 rounded-full px-2 shadow-md" style={{backgroundColor:"Lavender"}}>Lavender</button>
        <button  onClick={() => setColor("white")} className="mx-8 rounded-full px-2 shadow-md" style={{backgroundColor:"White"}}>White</button>
        <button  onClick={() => setColor("black")} className="mx-8 rounded-full px-2 shadow-md" style={{backgroundColor:"Black",color:"white"}}>Black</button>
      </div>


      </div>
    </>
  )
}

export default App
