import React, { useState, useRef, useReducer } from "react";

interface IProps {
  name: string;
  label?: string;
  description?: string;
  onSmthHappen: (name: string) => void;
}

interface CountNode {
  age: number | string;
}

interface Note {
  content: string;
}

type Actions = { type: "add", content: string } | {type: "remove", id: number}

const NotesReducer = (state: Note[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [...state, { content: action.content }];
    case "remove":
      return state.filter((_, i) => action.id !== i);
    default:
      return [...state];
  }
};

const Hello: React.FC<IProps> = ({ name, description = "Desc" }) => {
  const handleChange = (event: React.FormEvent<HTMLDivElement>): void => {
    // event.target.value
  };
  const [count, setCount] = useState<
    number | string | null | undefined | CountNode
  >({ age: 43 });
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  setCount({ age: 46 });

  const [notes, dispatch] = useReducer(NotesReducer, [])
  return (
    <div ref={divRef}>
      <h1>
        Hello {name} {description}
      </h1>
      <div onChange={handleChange} />
      <input type="text" ref={inputRef} />
      <button ref={buttonRef} />
      <button onClick={()=>{
        dispatch({
          type: "add",
          content: "Note 1"
        })
      }}/>
    </div>
  );
};

export default Hello;
