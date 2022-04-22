import React, {useState} from 'react'

export default function AddShow(props) {
  
    let [userShow, setUserShow] = useState("");
    let [userCharacter, setUserCharacter] = useState("");

    return(
        <>
            <h2>It's your turn to add a show!</h2>
            <form>
                <label>Enter your favorite show.</label>
                <input
                    type="text"
                    value={userShow}
                    onChange={(event) => setUserShow(event.target.value)}
                />
                <br></br>
                    <label>Enter your favorite character.</label>
                <input
                    type="text"
                    value={userCharacter}
                    onChange={(event) => setUserCharacter(event.target.value)}
                />
            </form>
            <p>My favorite show is {userShow}, and my favorite character from it is {userCharacter}.</p>
        </>
    )
}