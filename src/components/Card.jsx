import { useState } from "react";

export const Card = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  return (
    <div className="card">
      <h2>Laptop</h2>
      <p className="price">$1500</p>
      <p>Una potente laptop para trabajar y jugar.</p>
      <p className="stock">
        En Stock: <span>{count}</span>
      </p>
      <button onClick={() => setCount(count - 1)}>Comprar </button>
    </div>
  );
};
