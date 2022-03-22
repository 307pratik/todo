import React from "react";
import { useState } from "react";

const FizzBuzz = () => {
  const [count, setcount] = useState(0);
  const [fizzBuzz, setfizzBuzz] = useState("");

  const display = (num) => {
    if (num % 15 === 0) {
      setfizzBuzz("FizzBuzz");
    } else if (num % 5 === 0) {
      setfizzBuzz("Buzz");
    } else if (num % 3 === 0) {
      setfizzBuzz("Fizz");
    } else {
      setfizzBuzz(num);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setcount(count - 1);
      display(count);
    }
  };

  const increment = () => {
    if (count < 100) {
      setcount(count + 1);
      display(count);
    }
  };

  return (
    <React.Fragment>
      <div>
        <h2>{fizzBuzz}</h2>
      </div>

      <div>
        <button onClick={decrement}>DECREMENT</button>
        <button onClick={increment}>INCREMENT</button>
      </div>
    </React.Fragment>
  );
};
export default FizzBuzz;
