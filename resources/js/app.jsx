import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
    const [command, setCommand] = useState("");
    const [output, setOutput] = useState("");

    const handleSubmitCommand = async () => {
        const response = await fetch("/api/execute-command", {
            method: "POST",
            body: JSON.stringify({ command }),
            headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setOutput(data.output);
    };

    return (
        <div className="relative w-full h-screen">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source
                    src="/video/bg_vido.mp4" // Path relative to the 'public' folder
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <div className="relative flex justify-center h-56 items-center">
                <input
                    type="text"
                    onChange={(e) => setCommand(e.target.value)}
                    placeholder="Enter command"
                    className="placeholder:italic bg-blue-300 placeholder:text-black ring-1 ring-blue-500 w-96 max-w-full px-3 py-3 rounded-sm hover:ring-0 hover:bg-blue-500 hover:placeholder:text-black focus:bg-black focus:text-gray-200 focus:ring-2 focus:ring-blue-600 focus:font-semibold focus:placeholder:text-gray-200"
                />
                <button
                    className="px-7 py-3 bg-blue-500 rounded-md font-bold ml-4 hover:bg-black hover:text-white hover:border-2 hover:border-white"
                    onClick={handleSubmitCommand}
                >
                    Execute
                </button>
            </div>
            <div className="relative flex justify-center items-center">
                <div className="text-white bg-blue-500 bg-opacity-70 w-9/12 rounded-md px-5 py-5">
                    {output ? output : <span className="font-semibold">Here the output will be shown</span>}
                </div>
            </div>
        </div>
    );
}

// Wrap the App component with <Router> at the root level
const rootElement = document.getElementById("app");

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<App />);
}
