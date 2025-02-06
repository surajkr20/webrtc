/* eslint-disable no-unused-vars */
import React, { useCallback, useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { useSocket } from "../context/SocketProvider";

const Lobby = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", {email, room});
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback((data)=>{
    const { email, room } = data;
    console.log(email, room)
  }, [])

  useEffect(()=>{
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    }
  }, [socket, handleJoinRoom])

  return (
    <div className="p-8">
      <h2 className="font-semibold text-2xl">Lobby</h2>
      <form className="flex flex-row gap-3 mt-2" onSubmit={submitHandler}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Room No"
          variant="outlined"
          value={room}
          onChange={(e) => {
            setRoom(e.target.value);
          }}
        />
        <Button variant="contained" type="submit">
          Join
        </Button>
      </form>
    </div>
  );
};

export default Lobby;
