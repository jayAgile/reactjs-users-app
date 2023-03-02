import { createRef, useRef, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(10);

  const incrementBtn = () => {
    console.log("counter", counter);
    if (counter !== 20) {
      setCounter(counter + 1);
    }
  };

  const decrementBtn = () => {
    console.log("counter", counter);
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <p>Counter</p>
      <button
        type="button"
        onClick={incrementBtn}
        disabled={counter === 20 ? true : false}
      >
        +
      </button>
      <input type="number" value={counter} />
      <button
        type="button"
        onClick={decrementBtn}
        disabled={counter === 0 ? true : false}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
