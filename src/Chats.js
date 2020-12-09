import React from "react";
import "./Chats.css"
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Mark"
                message="Holala!"
                timestamp="40 seconds ago"
                profilePic="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
            />

            <Chat
                name="Roman"
                message="What's up!"
                timestamp="10 seconds ago"
                profilePic="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />

            <Chat
                name="Sharon"
                message="Hi, how are you!"
                timestamp="1 week ago"
                profilePic="data:image/jpeg;base64,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"
            />

            <Chat
                name="Noran"
                message="Hahaha!"
                timestamp="2 days ago"
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
            />
        </div>
    );
}

export default Chats;