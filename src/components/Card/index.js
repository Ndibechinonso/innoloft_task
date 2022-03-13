import "./style.scss";

const CardComponent = ({ cardImg, cardTitle, cardBody }) => {
  return (
    <div className="card-container">
      <img className="card-img" src={cardImg} alt="card" />
      <div className="card_header">{cardTitle}</div>
      <div className="card_body">{cardBody}</div>
    </div>
  );
};

export default CardComponent;
