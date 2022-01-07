import React from 'react'

const Loading = () => {
    return (
        <div className='loading' style={{
            position:'absolute',
            top:'40%',
            left:'45%'
        }}>
            <img src='./images/Ripple-1s-200px.gif' alt='loading...'/>
        </div>
    )
}

export default Loading
