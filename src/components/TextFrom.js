import React, {useState} from 'react'


export default function TextFrom(props) {
    const [text, setText] = useState("");

    const handleUpperClick = () => {
        // console.log('Handling upper click')
        let upperCaseText = text.toUpperCase();
        setText(upperCaseText);
    }

    const handleOnChange = (event) => {
        // console.log('Handle on change')
        setText(event.target.value)
    }
    return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myTextBox" className="form-label">Enter Text</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myTextBox" rows="9" placeholder='Enter text here and transfrom to UPPERCASE'></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperClick} >Convert to UPPERCASE</button>
  </div>
  )
}