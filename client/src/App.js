import React, {useState, useEffect} from 'react';
import './App.css';
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:3001";

function App() {

    const [board, setBoard] = useState([]);

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on('NextGeneration', data => {
            setBoard(data);
        });
    }, []);

    return (
        <div className="container">
            <h2 className="title">Conway's game of life</h2>
            <div
                className="board"
            >
                {board.map((rows, i) =>
                    rows.map((col, k) => (
                        <div
                            key={`${i + ' ' + k}`}
                            className="cells"
                            style={{
                                backgroundColor: board[i][k] ? "#FBAB7E;" : null,
                                backgroundImage: board[i][k] ? "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)" : null
                            }}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default App;
