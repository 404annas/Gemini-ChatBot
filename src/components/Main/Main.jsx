import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { GemContext } from "../../context/GemContext";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(GemContext);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello,</span>
              </p>
              <p>How Can I Help You Today ?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>What’s the best way to structure my React project?</p>
                <img src={assets.code_icon} alt="Code Icon" />
              </div>
              <div className="card">
                <p>Can you suggest some productivity tips for busy days?</p>
                <img src={assets.bulb_icon} alt="Bulb Icon" />
              </div>
              <div className="card">
                <p>How do I start with Firebase for my app?</p>
                <img src={assets.message_icon} alt="Message Icon" />
              </div>
              <div className="card">
                <p>
                  Can you recommend a good book or resource for personal growth?
                </p>
                <img src={assets.compass_icon} alt="Comapass Icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="User Icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Gemini Icon" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Message Gemini"
            />
            <div>
              <img src={assets.gallery_icon} alt="Gallery Icon" />
              <img src={assets.mic_icon} alt="Mic Icon" />
              {input ? <img
                onClick={() => onSent()}
                src={assets.send_icon}
                alt="Send Icon"
              /> : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;