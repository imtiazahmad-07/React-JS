import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
  const [count, setCount] = useState(0);

  //Variation 1 : On every render
  useEffect(() => {
    alert("I'll run on every render!");
  });
  //Variation 2 : On first render
  useEffect(() => {
    alert("I'll run on only First render!");
  },[]);
  //Variation 3 : On render
  useEffect(() => {
    alert("I'll run when count is updated !");
  },[count]);

  function handleClick() {
    setCount(count+1)
  }
  return( 
  <div>
    <button onClick={handleClick}>
        CLick me
    </button>
    <br />
    Count is : {count}
  </div>);
};

export default HookUseEffect;
