import React, { useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen () {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {

            name: "Mark",
            image: "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",
            message: "Whats up"
        },
        {
            name: "Mark",
            image: "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",
            message: "Yo man"
        },
        {
            message: "Yo man"
        }
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input}]);
        setInput('');
    }

    return (
        <div className={"ChatScreen"}>
            <p className={"chatScreen_timestamp"}>YOU MATCHED WITH MARK ON 10/08/20</p>
            {messages.map(message => (
                message.name ? (
                    <div className={"chatScreen_message"}>
                        <Avatar
                            className={"chatScreen_image"}
                            alt={message.name}
                            src={message.image}
                        />
                        <p className={"chatScreen_text"}>{message.message}</p>
                    </div>
                ) : (
                    <div className={"chatScreen_message"}>
                        <p className={"chatScreen_textUser"}>{message.message}</p>
                    </div>
                )
            ))}

            <form className={"chatScreen_input"}>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className={"chatScreen_inputField"}
                    placeholder={"Type a message..."}
                    type={"text"}
                />
                <button onClick={handleSend} type={"submit"} className={"chatScreen_inputButton"}>SEND</button>
            </form>

        </div>
    );
}

export default ChatScreen;
