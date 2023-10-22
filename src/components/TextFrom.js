import React, {useState} from 'react'


export default function TextFrom(props) {
    const [text, setText] = useState("");
    const wordReadTimeMin = 0.008;

    let wordLength = text.split(" ").filter(word => word.trim() !== "").length; // filter is applied since useState has given an empty space
    let characterLength = text.length;


    const handleUpperClick = () => {
        // console.log('Handling upper click')
        let upperCaseText = text.toUpperCase();
        setText(upperCaseText);
    }
    
    const handleLowerClick =() => {
        let lowerCaseText = text.toLowerCase();
        setText(lowerCaseText)
    }

    const handleclearClick  =() => {
        let clearText = '';
        setText(clearText);
    }

    const handleOnChange = (event) => {
        // console.log('Handle on change')
        setText(event.target.value)
    }
    return (
    <>
    <div className='container1'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myTextBox" className="form-label">Enter Text</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myTextBox" rows="9" placeholder='Enter text here'></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperClick} >Convert to UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick} >Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick} >Clear text</button>

  </div>
  <div className="container2 my-3" >
        <h2>Your text summary</h2>
        <p>{wordLength} words and {characterLength} charactes</p>
        <p>{wordReadTimeMin * wordLength} Minutes to read</p>
        <h3>Your text Preview</h3>
        <p>{text}</p>
  </div>
    </>
  )
}