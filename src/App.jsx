import { useState } from "react";
import Pages from "./pages/Pages";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Pages />
        </div>
    );
}

export default App;
