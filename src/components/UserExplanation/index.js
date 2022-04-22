import React, {useState} from 'react'

export default function UserExplanation(props) {
  
    let [userText, setUserText] = useState("");

    const handleChange = (event) => {
        setUserText(event.target.value)
    }

    return(
        <>
            <h3>Why was this the best post?</h3>
            <form>
                <textarea value={userText} onChange={handleChange}/>
            </form>
        </>
    )
}