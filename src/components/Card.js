import "./Card.css";

import emaillogo from "../assets/email.svg";
import locationlogo from "../assets/location.svg";
import phonelogo from "../assets/phone.svg";

const Card = ({ user }) => {
  const {
    picture: { medium },
    name: { title, first, last },
    email,
    cell,
    location: { city, country },
    dob: { age },
    registered: { date },
  } = user;

  return (
    <div className="bigContainer">
      <div className="cardContainer">
        <div>
          <img className="imgStyle" src={medium} alt="img" />
        </div>
        <div>
          <h3>
            <span>{title} </span>
            <span>{first} </span>
            <span>{last}</span>
          </h3>
        </div>
        <div>
          {" "}
          <img style={{ width: "40px" }} src={emaillogo} alt="" />
        </div>
        <div>
          <h3>{email}</h3>
        </div>
        <div>
          {" "}
          <img style={{ width: "40px" }} src={phonelogo} alt="" />
        </div>
        <div>
          <h3>{cell}</h3>
        </div>
        <div>
          {" "}
          <img style={{ width: "40px" }} src={locationlogo} alt="" />
        </div>
        <div>
          <h3>
            <span>{city} / </span>
            <span>{country}</span>
          </h3>
        </div>
        <div className="block">
          <h3>Age : {age}</h3>
        </div>
        <div className="block">
          <h3>Register Date : {date.substring(0, 10)}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
