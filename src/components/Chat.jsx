import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';

import { db } from '../firebase';
import { query,where, collection, orderBy, onSnapshot } from 'firebase/firestore';
import SendMessage from './SendMessage';

const style = {
  main: `flex flex-col p-[10px]`,
};

const Chat = ({room}) => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  const messagesRef = collection(db,"messages");

  useEffect(() => {
    const q = query(messagesRef,where("room","==",room), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className={style.main}>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />

          ))}
      </main>
      {/* Send Message Compoenent */}
      <SendMessage scroll={scroll} room={room} />
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;