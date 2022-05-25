import React, {useState} from 'react'

export default function (props) {
    function handleUpClick(){
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    function handleLowClick(){
        console.log("Lowercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
    }
    function handleClear(){
      console.log("Clear Text was clicked");
      setText(" ");
    }
    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text,setText] = useState("");
    
  return (
    <>
    <div className="container" style={{color : props.mode==='dark'?'white':'black'}}> 
      <h1>{props.heading}</h1> 
      <div className="mb-3">
      <textarea className="form-control" value={text} style={{backgroundColor : props.mode==='dark'?'grey':'white' , color : props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter text here'></textarea>
      </div>
      <button className="btn btn-danger" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-warning" onClick={handleClear}>Clear Text</button>
    </div>
    <div className="container my-4 " style={{color : props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters.</p>
      <p>{0.008 * text.split(" ").length} minutes taken to read the text.</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter something in the Text-Box above to preview it here"}</p>
    </div>
    </>
  )
}
