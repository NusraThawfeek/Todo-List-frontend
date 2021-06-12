import React, { useState } from 'react'

export default function Form({ addTodo }) {
    const [inputValue, setInputValue] = useState("");

    const handleInputchange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim()==="") return;
        addTodo({
            title: inputValue,
            completed: false
        })
    }
    return (
        <div>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="ui grid center aligned">
                    <div className="row">
                        <div className="column six wide">
                            <input
                                value={inputValue}
                                onChange={handleInputchange}
                                type="text"
                                placeholder="Enter the list item"
                            />
                        </div>
                        <div className="column one wide">
                            <button type="submit" className="ui button circular icon green"><i className="plus icon white"></i></button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}
