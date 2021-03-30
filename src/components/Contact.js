import "./Contact.css";

const Contact = (props) => (
  <div className="Contact">
    <img src={props.avatar} alt="avatar" className="avatar" />
    <div className="status">
      <h3 className="name">{props.name}</h3>
      <div className={props.online ? "status-online" : "status-offline"}></div>
      <p className="status-text">{props.online ? "online" : "offline"}</p>
    </div>
  </div>
);

export default Contact;
