import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNum, decNum } from "./Redux/actions/actions";

const App = () => {
  const mystate = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  return (
    <>
      <div className="App" style={{ marginTop: "300px" }}>
        <button
          style={{ width: "100px", height: "50px", marginRight: "10px" }}
          onClick={() => dispatch(decNum())}
        >
          Subtract
        </button>
        {mystate}
        <button
          style={{ width: "100px", height: "50px", marginLeft: "10px" }}
          onClick={() => dispatch(incNum())}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default App;
