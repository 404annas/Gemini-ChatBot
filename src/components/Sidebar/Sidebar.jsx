import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { GemContext } from "../../context/GemContext";

const Sidebar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const { previousPrompts, setRecentPrompt, onSent, newChat } =
    useContext(GemContext);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setToggleSidebar((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt="Menu Icon"
        />
        <div className="new-chat">
          <img
            onClick={() => newChat()}
            src={assets.plus_icon}
            alt="Plus Icon"
          />
          {toggleSidebar ? <p>New Chat</p> : null}
        </div>
        {toggleSidebar ? (
          <div className="recent-chats">
            <p className="recent-title">Recent</p>
            {previousPrompts.map((prompt, idx) => {
              return (
                <div
                  onClick={() => loadPrompt(prompt)}
                  key={idx}
                  className="recent-entry"
                >
                  <img src={assets.message_icon} alt="Message Icon" />
                  <p>{prompt.slice(0, 18)}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-items recent-entry">
          <img src={assets.question_icon} alt="Question Icon" />
          {toggleSidebar ? <p>Help</p> : null}
        </div>
        <div className="bottom-items recent-entry">
          <img src={assets.history_icon} alt="History Icon" />
          {toggleSidebar ? <p>Activity</p> : null}
        </div>
        <div className="bottom-items recent-entry">
          <img src={assets.setting_icon} alt="Setting Icon" />
          {toggleSidebar ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
