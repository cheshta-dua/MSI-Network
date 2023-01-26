import { useEffect, useState } from "react";
import "./chat.css";
import Contacts from "../../components/ChatComponents/Contacts";
import { useNavigate } from "react-router-dom";
import Welcome from "../../components/ChatComponents/Welcome";
import ChatContainer from "../../components/ChatComponents/ChatContainer";

import io from "socket.io-client";
const socket = io("http://localhost:5001");
const Chat = () => {
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);
    const [currentChat, setCurrentChat] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    // console.log("dataku=>",data);
    const checkLogin = async () => {
        if (!localStorage.getItem('User')) {
            navigate("/login");
            return () => { }
        } else {
            const data = await JSON.parse(
                localStorage.getItem('User')
            );
            setCurrentUser(data);   //add [0] to get the main object

        }
    }
    useEffect(() => {
        checkLogin();
    }, []);
    useEffect(() => {
        socket.on("receive_message", (data) => {
            
            console.log("data", data);
            
            // console.log("data", data);
            // setMessages((oldMsg) => [...oldMsg, data]);
        });
        socket.on("connection", (data) => {
            // we get socket id from here
            console.log("data", data);
            fetch(`http://localhost:5000/user/socket}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    socketId: data,
                    id: currentUser[0].id,
                }),
            }).then((res) => res.json())
            .then((data) => {
                console.log("data", data);
            }).catch((err) => {
                console.log(err);
            });
            // console.log("data", data);
            // setMessages((oldMsg) => [...oldMsg, data]);
        });
    }, [socket])
    // useEffect(() => {
    //     if (currentUser) {
    //       socket.current = io(host);
    //       socket.current.emit("add-user", currentUser._id);
    //     }
    //   }, [currentUser]);
    const contactset = async () => {
        if (currentUser) {
            const apiToCall = `http://localhost:5000/user/alluser/${currentUser[0].id}`;
            const resp = await fetch(`${apiToCall}`);
            const res = await resp.json();
            setContacts(res);
        }
    }
    console.log("dataContacts", contacts);
    useEffect(() => {
        contactset();
    }, [currentUser]);

    const handleChatChange = (chat) => {
        setCurrentChat(chat);
    };
    return <>
        <div className="chatMainConatiner">
            <div className="chatSubcontainer">

                <Contacts contacts={contacts} changeChat={handleChatChange} />
                {currentChat === undefined ? (
                    <Welcome />
                ) : (
                    <ChatContainer currentChat={currentChat} currentUser={currentUser} socket = {socket}/>
                    // <div></div> socket={socket}
                )}
            </div>
        </div>
    </>
}

export default Chat;