import { useEffect, useState } from "react";
import "./chat.css";
import Contacts from "../../components/ChatComponents/Contacts";
import { alumniData } from "../../Resorce/data";
import { useNavigate } from "react-router-dom";
import Welcome from "../../components/ChatComponents/Welcome";
const Chat = ({data}) => {
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);
    const [currentChat, setCurrentChat] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    console.log("dataji=>",data);
    const checkLogin = async () => {
        if (!localStorage.getItem('User')) {
            navigate("/login");
            return () => { }
        } else {
            setCurrentUser(
                await JSON.parse(
                    localStorage.getItem('User')
                )
            );

        }
    }
    useEffect(() => {
        checkLogin();
    }, []);
    // useEffect(() => {
    //     if (currentUser) {
    //       socket.current = io(host);
    //       socket.current.emit("add-user", currentUser._id);
    //     }
    //   }, [currentUser]);
    const contactset = async () => {
        if (currentUser) {
            // console.log("user",currentUser);
            // const apiToCall = `http://localhost:5000/user/alluser/${currentUser.id}`;
            // const resp = await fetch(`${apiToCall}`);
            // const res = await resp.json();
            setContacts(data);
        }
    }
    console.log("dataContacts",contacts);
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
                    // <ChatContainer currentChat={currentChat} socket={socket} />
                    <div></div>
                )}
            </div>
        </div>
    </>
}

export default Chat;