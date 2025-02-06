/* eslint-disable no-unused-vars */
import "./App.css";
import { io } from "socket.io-client";
import { Routes, Route } from "react-router-dom";
import Lobby from "./screens/Lobby";

const App = () => {

  return (
    <div className="p-6">

      <Routes>
        <Route path="/" element={<Lobby />} />
      </Routes>

    </div>
  );

};

export default App;
