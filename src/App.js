import './App.css';
import { AiOutlineSend } from "react-icons/ai";
import io from "socket.io-client"
import Message from './components/Message/Message';
import { useEffect, useState, } from 'react';

const socket = io.connect('http://localhost:5000')


function App() {

  const [mess, setMessage] = useState("")
  const [messageReceived, setMessageReceived] = useState('')
  const [components, setComponent] = useState([])
  const [toggle, setTottle] = useState(true)

  useEffect(() => {
    socket.on("received_message", (data) => {
      setMessageReceived(data.message)
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    setTottle(!toggle)
    const m = event.target.message.value;
    setMessage(m)
    setComponent([...components, <Message msg={toggle ? m : messageReceived} own={toggle} />]);
    socket.emit("send_message", { message: m })


  }




  return (
    <div className=' max-w-lg mx-auto pb-4 bg-slate-100 shadow-lg '>
      <div className='message-box max-w-lg p-4   '>

        {components.map((component, index) => (
          <div key={index}>{component}</div>
        ))}

        {/* <Message msg={messageReceived}></Message>
        <Message msg={mess} own={true}></Message> */}


      </div>
      <div>
        <form onSubmit={sendMessage} className=''>
          <div className=" flex px-2">
            <textarea name='message' placeholder="Write your message" className="p-2 h-[42px] w-full rounded-md focus:ring outline-none focus:ring-opacity-75 focus:ring-violet-400 "></textarea>

            <div className='flex justify-end'>
              <button type="submit" className="px-3 py-1 font-semibold rounded  bg-blue-800 text-white text-[24px]"><AiOutlineSend className=' inline-flex pb-[4px]'></AiOutlineSend></button>
            </div>
          </div>
        </form>
      </div>

    </div>
  );
}

export default App;
