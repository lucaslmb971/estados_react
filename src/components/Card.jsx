import { useState } from "react";

export const Card = ({ initialCount, name, price, description }) => {
  const [count, setCount] = useState(initialCount);
  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="price">{price}</p>
      <p>{description}</p>
      <p className="stock">
        {count > 0 ? (
          <>
            En Stock: <span>{count}</span>
          </>
        ) : (
          <span style={{ color: 'red' }}>Agotado</span>
        )}
      </p>
      <button onClick={() => setCount(count - 1)}>Comprar </button>
    </div>
  );
};
