import React from "react";

export default function Greeting() {
  const [count, setCount] = React.useState(1);

  return (
    <>
      <br /><br />
      <button onClick={() => setCount(prev => prev+1)}>Sumar +</button>
      <h1>Este es el componente de Marketing: {count}.</h1>
    </>
  )
};
