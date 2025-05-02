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

export default function Player({ name, symbol }) {

    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // setIsEditing(true)
        // setIsEditing(isEditing ? false : true)
         setIsEditing(!isEditing)
    }

    let playerName = <span className="player-name">{name}</span>;
    // let buttonEdit = "Edit"

    if (isEditing) {
        playerName = <input type="text" value={name} required/>
        // buttonEdit = "Save"
    }


    return (
        <li>
            <span className="player">
                {playerName}
                <span className="plarer-symbol">{symbol}</span>
            </span>
       
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}
