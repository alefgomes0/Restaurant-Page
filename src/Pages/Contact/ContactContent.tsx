import { useEffect, useRef } from "react";


export const ContactContent = () => {
  const inputElement = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputElement.current.focus();
  }, [])
  
  return (
    <main>
      <div className="contact-content">
        <form>
          <div className="contact-text">
            <h4>Do you have any critic or suggestion?</h4>
            <h4>Are you interested in working with us?</h4>
            <h4>Send a message below!</h4>
          </div>
          <div className="field">
            <label>Name</label>
            <input ref={inputElement}></input>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email"></input>
          </div>
          <div className="field">
            <label>Subject</label>
            <input></input>
          </div>
          <div className="field">
            <label>Message</label>
            <textarea rows={10}></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </main>
  );
};
