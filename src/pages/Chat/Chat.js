import { useEffect, useState } from "react";
import "./chat.css";
import Contacts from "../../components/ChatComponents/Contacts";
import { useNavigate } from "react-router-dom";
import Welcome from "../../components/ChatComponents/Welcome";
import ChatContainer from "../../components/ChatComponents/ChatContainer";
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
                    <ChatContainer currentChat={currentChat} currentUser={currentUser}/>
                    // <div></div> socket={socket}
                )}
            </div>
        </div>
    </>
}

export default Chat;