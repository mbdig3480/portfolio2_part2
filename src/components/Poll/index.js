import React, {useState} from 'react'

export default function Poll(props) {
  
    let [userSelected, setUserSelected] = useState([]);

    let handleChange = (event) => {
        setUserSelected(event.target.value)
    }

    return(
        <>
            <h2>User Poll</h2>
            <p>Which one of these posts were the best?</p>

            <select onChange={handleChange}>
                <option value="Post 1">Post 1</option>
                <option value="Post 2">Post 2</option>
                <option value="Post 3">Post 3</option>
                <option value="Post 4">Post 4</option>
            </select>
            
            <p>You have chosen: {userSelected}</p>
        </>
    )
}