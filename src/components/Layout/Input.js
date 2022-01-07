import React from 'react'

const Input = ({title, text}) => {
    return (
        <div className="field">
            <label>{title}</label>
            <input type={text} {...props}/>
        </div>
    )
}

export default Input
