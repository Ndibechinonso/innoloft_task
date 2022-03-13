import CardComponent from "./index";
import loans from "../../mockData/loans";

const cardGrid = () => {
    return(
        <div style={{ width: "100%" }} className="card-grid">
        {loans.map((item, i) => (
          <CardComponent
            key={i}
            cardImg={item.cardImg}
            cardTitle={item.cardTitle}
            cardBody={item.cardBody}
          />
        ))}
      </div>
    )
}
export default cardGrid