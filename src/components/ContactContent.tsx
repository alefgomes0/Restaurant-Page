export const ContactContent = () => {
  return (
    <div className="contact-content">
      <form>
        <div className="contact-text">
          <h5>Do you have any critic or suggestion?</h5>
          <h5>Are you interested in working with us?</h5>
          <h5>Send a message below!</h5>
        </div>
        <div className="field">
          <label>Name</label>
          <input></input>
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
  );
};
