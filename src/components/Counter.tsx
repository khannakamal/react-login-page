import React, { FC, useState } from "react";
type countProps = {
  initialCount: number;
};

const Counter: FC<countProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const switchSigns = () => {
    setCount((prev) => prev * -1);
  };
  return (
    <div>
      count: <h1 data-testid="count">{count}</h1>
      <div className="flex items-center gap-3">
        <button onClick={increment}>Inc</button>
        <button onClick={decrement}>dec</button>
        <button onClick={reset}>reset</button>
        <button onClick={switchSigns}>switch</button>
      </div>
    </div>
  );
};

export default Counter;
