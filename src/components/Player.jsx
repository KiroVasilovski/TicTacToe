import { useState } from 'react'

export default function Player({ name, symbol, isActive, onChangeName }) {
    const [editing, setEditing] = useState(false)
    const [playerName, setPlayerName] = useState(name)

    function handleEdit() {
        setEditing((editing) => !editing)

        if (editing) {
            onChangeName(symbol, playerName)
        }
    }

    function handleChange(e) {
        setPlayerName(e.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (editing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{editing ? 'Save' : 'Edit'}</button>
        </li>
    )
}
