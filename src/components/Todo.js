import React, { useState } from 'react'

const Todo = ({ title, completed, removeTodo, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(title)
    const [tempValue, setTempValue] = useState(title)
    const [completedStat, setCompleted] = useState(completed)


    const handleDoubleClick = () => {
        setIsEditing(true);
    };
    const handleKeyDown = (e) => {
        const key = e.keyCode;
        if (key === 13) {
            editTodo({ title: tempValue });
            setValue(tempValue);
            setIsEditing(false);


        } else if (key === 27) {
            setTempValue(value)
            setIsEditing(false)
        }
    };
    const handleOnChange = (e) => {
        setTempValue(e.target.value)
    }

    const handleButtonClick = () => {
        setCompleted((oldCompleted) => {
            const newState = !oldCompleted
            editTodo({ completed:newState});
            return newState;

        });

    }

    return (
        <div className="row" >
            {isEditing ?

                <div className="column seven wide">
                    <div className="ui input fluid">
                        <input
                            onChange={handleOnChange}
                            onKeyDown={handleKeyDown}
                            autoFocus={true}
                            value={tempValue}
                        />
                    </div>
                </div>
                :
                <>
                    <div className="column six wide" onDoubleClick={handleDoubleClick}>
                        <h2 className={"ui header " + (completedStat ? "green" : " ")}>{value}</h2>
                    </div>

                    <div className="column one wide">
                        <button
                            className={"ui button circular icon" + (completedStat ? " blue" : " green")}
                            onClick={handleButtonClick}
                        >
                            <i className="check icon white"></i>
                        </button>
                    </div>
                    <div className="column one wide">
                        <button className="ui button circular icon red" onClick={removeTodo}><i className="remove icon white"></i></button>
                    </div>
                </>
            }
        </div>
    )
}

export default Todo
