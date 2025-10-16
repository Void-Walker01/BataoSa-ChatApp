import { io } from "socket.io-client";
import { use, useEffect } from "react";

function App(){
  
  useEffect(()=>{
    const socket=io("http://localhost:8000");
    return()=>{
      socket.disconnect();
    }
  },[]);

  return(
    <h1>Frontend</h1>
  );
}

export default App;
