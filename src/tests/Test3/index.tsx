import { useEffect, useRef, useState } from "react";

/*
  Find and fix the error in this component
*/

export default function TestThree() {
  const ref = useRef(null);
  const [x, y] = useState(0);

  const hello = () => {
    y((r) => r + 1);
    window.alert("hello!");
  };

  useEffect(() => {
    // @ts-ignore
    ref?.current.addEventListener("click", hello);
  }, []);

  return (
    <div>
      <h2>Test Three</h2>
      <button ref={ref} className={String(x)}>
        Click me
      </button>
    </div>
  );
}
