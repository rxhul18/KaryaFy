import React, { useRef } from "react";
import "./InputField.scss";

interface PropType {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<PropType> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input-field"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur;
      }}
    >
      <input
        ref={inputRef}
        className="input-box"
        placeholder="Enter A Task: "
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input-submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
