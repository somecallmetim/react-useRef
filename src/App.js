import { useEffect, useRef, useState } from "react";

function App() {
    const [name, setName] = useState("");
    
    // useRef returns an object with a 'current' property.
        // ie the const testRef = useRef(0) yields testRef = {current: 0}
    // useRef does not cause the entire component to re-render
    const inputRef = useRef()
    const focus = () => {
      console.log(inputRef)
      inputRef.current.focus()
    }

    return (
        <>
            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
            {console.log(inputRef)}
            <div>My name is {name}</div>
            <button onClick={focus}>Focus</button>
        </>
    );
}

export default App;
