import { useContext } from "react";
import { Context } from "../../contexts/countersContext";

function GoodButton() {

    const { increaseGood, good } = useContext(Context);
  
    return (
      <>
        <div className="card">
            <p>Good : {good} </p>
            <button onClick={increaseGood}>
            Increase Good
            </button>
        </div>
      </>
    )
  }

  export default GoodButton