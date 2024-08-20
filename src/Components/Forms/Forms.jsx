import { useState, useEffect } from "react";

import "./Form.css";

export default function Forms() {
  const [text, setText] = useState("");

  const Handlesubmit = (e) => {
    e.preventDefault();
    // generateResponse(text)
  };

  return (
    <div>
      <form onSubmit={Handlesubmit}>
        <input type="text" onChange={(e) => setText(e.target.value)} required />
        <button type="submit">Ask</button>
      </form>
      <button>Save</button>
    </div>
  );
}
