import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
    const [command, setCommand] = useState("");
    const [output, setOutput] = useState("");
    const [loading,setLoading] = useState(false);

    const handleSubmitCommand = async () => {
        setLoading(true);
        const response = await fetch("/api/execute-command", {
            method: "POST",
            body: JSON.stringify({ command }),
            headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setOutput(data.output);
        setLoading(false);
    };

    return (
        <div className="relative w-full h-full min-h-screen pt-10 bg-[url('https://t3.ftcdn.net/jpg/03/83/81/80/360_F_383818080_RyXyzgCAq9C2Kn6IZkBbt4iU1KGHDYhU.jpg')] bg-cover bg-center bg-fixed">
            <div className="relative">
                <div className="flex justify-center items-center">
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
                <div>
                    <div className="text-white text-center pt-10 pb-2 font-semibold text-lg">Here are some available commands</div>
                    <div className="flex flex-wrap">
                        <button
                            className="px-3 py-3 bg-blue-500 rounded-md mb-2 font-bold ml-4 hover:bg-black hover:text-white hover:border-2 hover:border-white"
                            onClick={(e) => {
                                setCommand(e.target.innerText);
                                handleSubmitCommand();
                            }}
                        >
                            ping www.washington.edu
                        </button>
                        <button
                            className="px-3 py-3 bg-blue-500 rounded-md mb-2 font-bold ml-4 hover:bg-black hover:text-white hover:border-2 hover:border-white"
                            onClick={(e) => {
                                setCommand(e.target.innerText);
                                handleSubmitCommand();
                            }}
                        >
                            ping www.cornell.edu
                        </button>
                        <button
                            className="px-3 py-3 bg-blue-500 rounded-md mb-2 font-bold ml-4 hover:bg-black hover:text-white hover:border-2 hover:border-white"
                            onClick={(e) => {
                                setCommand(e.target.innerText);
                                handleSubmitCommand();
                            }}
                        >
                            ping www.berkelys.edu
                        </button>
                        <button
                            className="px-3 py-3 bg-blue-500 rounded-md mb-2 font-bold ml-4 hover:bg-black hover:text-white hover:border-2 hover:border-white"
                            onClick={(e) => {
                                setCommand(e.target.innerText);
                                handleSubmitCommand();
                            }}
                        >
                            ping www.uchicago.edu
                        </button>
                        <button
                            className="px-3 py-3 bg-blue-500 rounded-md mb-2 font-bold ml-4 hover:bg-black hover:text-white hover:border-2 hover:border-white"
                            onClick={(e) => {
                                setCommand(e.target.innerText);
                                handleSubmitCommand();
                            }}
                        >
                            ping www.ox.ac.uk
                        </button>
                        <button
                            className="px-3 py-3 bg-blue-500 rounded-md mb-2 font-bold ml-4 hover:bg-black hover:text-white hover:border-2 hover:border-white"
                            onClick={(e) => {
                                setCommand(e.target.innerText);
                                handleSubmitCommand();
                            }}
                        >
                            ping www.u-tokyo.ac.jp
                        </button>
                        <button
                            className="px-3 py-3 bg-blue-500 rounded-md mb-2 font-bold ml-4 hover:bg-black hover:text-white hover:border-2 hover:border-white"
                            onClick={(e) => {
                                setCommand(e.target.innerText);
                                handleSubmitCommand();
                            }}
                        >
                            nslookup www.berkeley.edu
                        </button>
                        <button
                            className="px-3 py-3 bg-blue-500 rounded-md mb-2 font-bold ml-4 hover:bg-black hover:text-white hover:border-2 hover:border-white"
                            onClick={(e) => {
                                setCommand(e.target.innerText);
                                handleSubmitCommand();
                            }}
                        >
                            nslookup www.u-tokyo.ac.jp
                        </button>
                        <button
                            className="px-3 py-3 bg-blue-500 rounded-md mb-2 font-bold ml-4 hover:bg-black hover:text-white hover:border-2 hover:border-white"
                            onClick={(e) => {
                                setCommand(e.target.innerText);
                                handleSubmitCommand();
                            }}
                        >
                            nslookup www.ox.ac.uk
                        </button>
                        <button
                            className="px-3 py-3 bg-blue-500 rounded-md mb-2 font-bold ml-4 hover:bg-black hover:text-white hover:border-2 hover:border-white"
                            onClick={(e) => {
                                setCommand(e.target.innerText);
                                handleSubmitCommand();
                            }}
                        >
                            nslookup www.uchicago.edu
                        </button>
                        <button
                            className="px-3 py-3 bg-blue-500 rounded-md mb-2 font-bold ml-4 hover:bg-black hover:text-white hover:border-2 hover:border-white"
                            onClick={(e) => {
                                setCommand(e.target.innerText);
                                handleSubmitCommand();
                            }}
                        >
                            nslookup www.washington.edu
                        </button>
                        <button
                            className="px-3 py-3 bg-blue-500 rounded-md mb-2 font-bold ml-4 hover:bg-black hover:text-white hover:border-2 hover:border-white"
                            onClick={(e) => {
                                setCommand(e.target.innerText);
                                handleSubmitCommand();
                            }}
                        >
                            nslookup www.cornell.edu
                        </button>
                        <button
                            className="px-3 py-3 bg-blue-500 rounded-md mb-2 font-bold ml-4 hover:bg-black hover:text-white hover:border-2 hover:border-white"
                            onClick={(e) => {
                                setCommand(e.target.innerText);
                                handleSubmitCommand();
                            }}
                        >
                            ifconfig
                        </button>
                        <button
                            className="px-3 py-3 bg-blue-500 rounded-md mb-2 font-bold ml-4 hover:bg-black hover:text-white hover:border-2 hover:border-white"
                            onClick={(e) => {
                                setCommand(e.target.innerText);
                                handleSubmitCommand();
                            }}
                        >
                            ifconfig -a
                        </button>
                        <button
                            className="px-3 py-3 bg-blue-500 rounded-md mb-2 font-bold ml-4 hover:bg-black hover:text-white hover:border-2 hover:border-white"
                            onClick={(e) => {
                                setCommand(e.target.innerText);
                                handleSubmitCommand();
                            }}
                        >
                            ifconfig -v
                        </button>
                        <button
                            className="px-3 py-3 bg-blue-500 rounded-md mb-2 font-bold ml-4 hover:bg-black hover:text-white hover:border-2 hover:border-white"
                            onClick={(e) => {
                                setCommand(e.target.innerText);
                                handleSubmitCommand();
                            }}
                        >
                            netstat
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative flex justify-center mt-16">
                <div className="text-white bg-blue-500 bg-opacity-70 w-9/12 rounded-md px-3 py-5">
                    {loading ? (
                        <span className="font-semibold">Loading...</span> // Show loading message
                    ) : output ? (
                        output
                    ) : (
                        <span className="font-semibold">
                            Here the output will be shown
                        </span>
                    )}
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
