import { useState,useEffect } from "react";
import "./index.css";
const Contacts=({contacts,changeChat})=>{
  
    const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  console.log("contacts::",contacts);
  useEffect( () => {
    const data =  JSON.parse(
      localStorage.getItem('User')
    );
    setCurrentUserName(data.given_name);
    setCurrentUserImage(data.picture);
  }, []);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
    return<>
    {currentUserImage && currentUserImage && (
        <div className="contacts-container">
          <div className="brand">
            <img src="images/MSI_logo.png" alt="logo" />
            <h3>MSI Network</h3>
          </div>
          <div className="contacts">
            {/* {contacts.map((ele)=>{
              console.log(ele);
            })} */}
            {contacts.map((contact, index) => {
              console.log(contact.ImageLink,"image");
              console.log(typeof contact.ImageLink==="undefined"?"hello":"hii");
              return (
                <div
                //   key={contact._id}
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <img
                      src={typeof contact.ImageLink==="undefined"?"images/MSI_logo.png":contact.ImageLink}
                      alt=""
                    />
                  </div>
                  <div className="username">
                    <h3>{contact.UserName}</h3>
                  </div>
                </div>
              ); 
            })}
          </div>
          <div className="current-user">
            <div className="avatar">
              <img
                src={currentUserImage}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </div>
      )}
    </>
}

export default Contacts;