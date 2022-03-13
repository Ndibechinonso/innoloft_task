import MainWrapper from "../../../components/MainWrapper";
import "./style.scss";
import { get_nth_suffix } from '../../../components/dateFormater'
import CardGrid from "../../../components/Card/CardGrid";

const Loan = () => {
    const dayOfTheWeek = new Date().toLocaleDateString('en-us', { weekday:"long"}) 
    const day = new Date().toLocaleDateString('en-us', { day:"numeric"}) 
    const month = new Date().toLocaleDateString('en-us', {month:"short"}) 
    const year = new Date().toLocaleDateString('en-us', { year:"numeric"}) 

  return (
    <MainWrapper>
        <h2 className="loan-header">Loans</h2>
        <div className="font-16 date"><span className="day">{dayOfTheWeek}, </span><span>{get_nth_suffix(day)} </span><span>{month}, </span><span>{year}</span></div>
    <CardGrid />
    </MainWrapper>
  );
};

export default Loan;
