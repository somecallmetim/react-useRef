import { useEffect, useRef, useState } from "react";

function App() {
    const [name, setName] = useState("");
    
    // useRef returns an object with a 'current' property.
        // ie the below yields renderCount = {current: 0}
    // useRef does not cause the entire component to re-render
    const renderCount = useRef(0);

    useEffect(() => {
      renderCount.current = renderCount.current + 1
    }, [name])

    return (
        <>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <div>My name is {name}</div>
            <div>I rendered {renderCount.current} times</div>
        </>
    );
}

export default App;
