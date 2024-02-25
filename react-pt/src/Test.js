import { forwardRef, useRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input ref={ref} type="text" {...props} />;
});

export default function Component() {
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <h1>useRef()---forwardRef()</h1>
      <Input ref={inputRef} />
      <button onClick={focusInput}>Focusla</button>
    </>
  );
}
