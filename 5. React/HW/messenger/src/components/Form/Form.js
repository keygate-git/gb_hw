import { useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import './Form.css';

function Form(props) {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current?.focus();
    })
    return <form className="form" onSubmit={props.onSubmit} ref={props.ref}>
        <textarea ref={inputRef} id='input' type='text'></textarea>
        <div className="buttonArea">
            {/* <button type='submit'>Send</button> */}
            <Button type='submit'>Send</Button>
        </div>
    </form>
}

export default Form;