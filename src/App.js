
import React from "react";
import Navbar from "./components/Navbar";
import { useAuthState } from 'react-firebase-hooks/auth'
import Chat from "./components/Chat";
import { auth } from "./firebase";
import { useState,useRef } from "react";

const style = {
  appContainer: 'max-w-[720px] mx-auto text-center',
  sectionContainer: 'flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative',

  main: `sm:h-[300px] h-[200px] flex flex-col  bg-gray-800 justify-center items-center max-w-[600px] mx-auto text-center absolute top-[40%] sm:top-[35%] sm:left-[25%] left-[20%] rounded`,
  secondMain: `sm:w-[400px] flex flex-col justify-center items-center text-xl w-[300px]`,
  input: `text-xl p-3 bg-gray-900 text-white mb-3 outline-none border-none rounded `,
  header: `text-white rounded text-lg sm:text-xl mb-2 text-gray p-2 bg-gray-900 w-[150px] sm:w-[250px] h-[45px]`,
  button: `w-[30%] font-semibold sm:font-normal bg-green-500 text-sm sm:text-xl p-1 h-[38px] rounded`

}

function App() {
  const [room, setRoom] = useState(null);

    const roomInputRef = useRef(null);
  const [user] = useAuthState(auth);

  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        <Navbar setRoom={setRoom}/>
        {/* Chat Component */}
        {user && room ?
          
          <Chat room={room}/>
          : <div className={style.main}>
          <div className={style.secondMain}>
            <h1 className={style.header}>Enter Room</h1>
            <input ref={roomInputRef} className={style.input} type='text' placeholder='...' />
            <button onClick={() => setRoom(roomInputRef.current.value)} className={style.button}>Enter Chat</button>
          </div>

        </div>}

      </section>

    </div>
  );
}

export default App;
