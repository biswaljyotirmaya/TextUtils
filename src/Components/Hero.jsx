
import react from 'react';

const Hero = (props) => {
    const [text, setText] = react.useState("");
    
    const toPrevious = () => {
       history.back();
        props.sendAlert("Moved to prevoius step", "success");
    }

    function toUppercase() {
        let newText = text.toUpperCase();
        setText(newText);
        props.sendAlert("Text changed into uppercase successfully", "success");
    }
    function toLowercase() {
        let newText = text.toLowerCase();
        setText(newText);
        props.sendAlert("Text changed into lowercase successfully", "success");
    }
    function clearText() {
        setText("");
        props.sendAlert("Text cleared successfully", "success");
    }
    const speak = () => {
        const toggle = document.getElementById('toggle');

        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
            toggle.innerHTML = "Speak";
        } else {
            let msg = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(msg);
            toggle.innerHTML = "Stop";
        }
    }
    const handleCopy = () => {
        let copyText = text;
        navigator.clipboard.writeText(copyText);
        props.sendAlert("Text copied to clipbord", "success");
    }
    const handleExtraSpace = () => {
       setText(text.replace(/\s+/g, ' ').trim());
       props.sendAlert("Extra spaces are removed successfully ", "success");
    }
    function handleChange(event) {
        let newText = event.target.value;
        setText(newText);
    }
  return (
    <div className="container my-2" style={{color:props.theme==='dark'?'white':'black'}}>
    <h3 className='fs-1'>Enter the text to analize below</h3>
    <textarea className="form-control" rows={8} style={{backgroundColor:props.theme==='light'?'white':'grey',color: props.theme === 'dark' ? 'white' : 'black'}} placeholder="Enter what you want" id="floatingTextarea" onChange={handleChange} value={text}>
        {text}
    </textarea>
    <button type="button" className="btn btn-primary m-1" onClick={toPrevious}>Previous</button>
    <button type="button" className="btn btn-primary m-1" onClick={toUppercase}>UpperCase</button>
    <button type="button" className="btn btn-primary m-1" onClick={toLowercase}>LowerCase</button>
    <button type="button" className="btn btn-primary m-1" onClick={clearText}>Clear</button>
    <button type="button" className="btn btn-warning m-1" onClick={speak}>Speak</button>
    <button type="button" className="btn btn-primary m-1" onClick={handleCopy}>Copy Text</button>
    <button type="button" className="btn btn-primary m-1" onClick={handleExtraSpace}>Remove Spaces</button>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length - 1} word {text.length} cheracters</p>
    <p>{Math.round((((text.split(" ").length - 1) * 0.4) / 60) * 10000) / 10000} minute read</p>
    <h4>Preview</h4>
    <p>{text.length>0?text:"Enter something in the text box above to preview here"}</p>

</div>
  )
}

export default Hero