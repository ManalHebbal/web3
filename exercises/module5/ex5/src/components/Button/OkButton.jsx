import { Context } from "../../contexts/countersContext"
import { useContext } from "react"

function OkButton() {
  
    const { increaseOk, ok } = useContext(Context);

    return (
      <>
        <div className="card">
            <p>Ok : {ok} </p>
            <button onClick={increaseOk}>
            Increase Ok
            </button>
        </div>
      </>
    )
  }

  export default OkButton 