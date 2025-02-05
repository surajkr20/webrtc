/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from "react";
import { TextField, Button } from '@mui/material';

const Lobby = () => {

    const [email, setEmail] = useState("");
    const [room, setRoom] = useState("");

    const submitHandler = useCallback((e)=>{
        e.preventDefault();
        console.log(email, room)
    }, [email, room])

  return (
    <div className="p-8">
      <h2 className="font-semibold text-2xl">Lobby</h2>
      <form className="flex flex-row gap-3 mt-2" onSubmit={submitHandler}>
        <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e)=>{
            setEmail(e.target.value);
        }}/>
        <TextField id="outlined-basic" label="Room No" variant="outlined" value={room} onChange={(e)=>{
            setRoom(e.target.value)
        }}/>
        <Button variant="contained" type="submit">Join</Button>
      </form>
    </div>
  );
};

export default Lobby;
