import { useContext } from "react";
import { Context } from "../../contexts/countersContext";

function BadButton() {

  const { increaseBad, bad } = useContext(Context);

    return (
      <>
        <div className="card">
            <p>Bad : {bad} </p>
            <button onClick={increaseBad}>
            Increase Bad
            </button>
        </div>
      </>
    )
  }

  export default BadButton