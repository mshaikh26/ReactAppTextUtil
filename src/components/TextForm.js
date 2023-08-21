import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    // console.log("Change fired");
    setText(event.target.value);
  };

  const handleUpClick = () => {
    setText(Text.toUpperCase());
    // console.log("click fired");
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Textbox has been cleared.", "warning");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(Text);
    props.showAlert("Textbox has been copied.", "danger");
  };

  const [Text, setText] = useState("Enter the text here3");
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container" style={{color:props.mode === "light" ? "black" : "white"}}>
      <h1>
        {props.Heading} - {count}
      </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={Text}
          onChange={handleOnChange}
          rows="8"
          style={{
            backgroundColor: props.mode === "light" ? "light" : "grey",
            color: props.mode === "light" ? "black" : "white",
          }}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to Upper Case
      </button>
      <button
        className="btn btn-primary mx-1"
        onClick={() => setCount(count + 1)}
      >
        Count
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClear}>
        Clear
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>
        Copy
      </button>

      <div className="container my-2">
        <p>
          {Text !== "" ? Text.split(" ").length : 0} - words and {Text.length} -
          characters
        </p>
      </div>
      </div>
    </>
  );
}
