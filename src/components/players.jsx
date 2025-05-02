/* import { useState } from "react"

export default function Player({ name, symbol }) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    function handleEditClick() {
        setIsEditing((prevState) => !prevState);
            setIsEditing(true)
    }
    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }
    return (
        <li>

            <span className="player">
                {isEditing ? (
                    <input type="text" value={playerName} onChange={handleNameChange} />
                ) : (

                    <span className="player-name">{playerName}</span>
                )}


                <span className="plarer-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}
 */
import { useState } from "react"

export default function Player({ name, symbol, isActive }) {

    const [isEditing, setIsEditing] = useState(false);
    const [isPlayerName, setPlayerName] = useState(name);

    // console.log("check this >>>>>>>>>>>",setPlayerName);


    // change the input name function 
    function inputNameChange(event) {
        setPlayerName(event.target.value)
    }
    // console.log(inputNameChange.event);
    // console.log(setPlayerName);


    function handleEditClick() {
        // setIsEditing(true)
        // setIsEditing(isEditing ? false : true)
        //  setIsEditing(!isEditing)
        setIsEditing(prevState => !prevState)

    }
    // console.log(prevState);



    let playerName = <span className="player-name">{isPlayerName}</span>;
    //   console.log(playerName);
    // let buttonEdit = "Edit"

    if (isEditing) {
        playerName = <input type="text" value={isPlayerName} onChange={inputNameChange} required />
        // buttonEdit = "Save"
    }
    // console.log(isEditing);



    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {playerName}

                <span className="plarer-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );

}
