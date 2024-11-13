import React, { useState } from "react";
import Div from "../Div";
import api from "../../utils/api";

export default function Newsletter({ title, subtitle, placeholder }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const handleClickSend = async (e) => {
    e.preventDefault();
    if (!email?.trim()) {
      return;
    }
    let data = {
      email,
    };

    try {
      setLoading(true);
      await api.post("/contactform/email", data);
      setLoading(false);
      setEmail("");
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <Div className="cs-newsletter cs-style1">
        <form action="#" className="cs-newsletter_form">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="cs-newsletter_input"
            placeholder={placeholder}
          />
          <button onClick={handleClickSend} className="cs-newsletter_btn">
            <span>{loading ? "Sending..." : "Send"}</span>
          </button>
        </form>
        <Div className="cs-newsletter_text">{subtitle}</Div>
      </Div>
    </>
  );
}
