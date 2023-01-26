import { useEffect,useState } from "react";
import ChatInput from "./ChatInput";
const ChatContainer = ({ currentChat, currentUser }) => {
    const [messages, setMessages] = useState([]);
    //getting previous messages of user from a person
    const getmssg=async()=>{
        const apiToCall = "http://localhost:5000/mssg/getmsg/";
        const data = {
            from: currentUser[0].id,
            to: currentChat._id,
        };
        const resp = await fetch(`${apiToCall}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const res = await resp.json();
        console.log("mssgs ",res); //console
        setMessages(res);

    }
    useEffect(()=>{
        getmssg();
    },[currentChat]);
    const handleSendMsg = async (msg) => {
        //send mssgs to database
        // console.log("mssg ", currentUser[0], " to", currentChat);
        const apiToCall = "http://localhost:5000/mssg/addmsg/";
        const data = {
            from: currentUser[0].id,
            to: currentChat._id,
            message: msg,
        };
        
        const resp = await fetch(`${apiToCall}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const res = await resp.json();
        alert(msg);
    }
    return <>
        <div className="ChatContainer">
            <div className="chat-header">
                <div className="user-details">
                    <div className="avatar">
                        <img
                            src={currentChat.ImageLink || "images/dummy_profile.webp"}
                            alt=""
                            onError={(e) =>
                                (e.target.onerror = null)(
                                    (e.target.src =
                                        "images/dummy_profile.webp")
                                )
                            }
                        />
                    </div>
                    <div className="username">
                        <h3>{currentChat.UserName}</h3>
                    </div>
                </div>
                {/* <Logout /> */}
            </div>
            <div className="chat-messages">
                {messages.map((message) => {
                    return (
                         <div  > 
                            <div
                                className={`message ${message.fromSelf ? "sended" : "recieved"
                                    }`}
                            >
                                <div className="content ">
                                    <p>{message.message}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <ChatInput handleSendMsg={handleSendMsg} />
        </div>
    </>
}
export default ChatContainer;

//ref={scrollRef} key={uuidv4()}