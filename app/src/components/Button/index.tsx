import React from "react"
import './index.css'

const Button = (
    { text, onClick, blue }:
    { text: string, onClick: React.MouseEventHandler<HTMLButtonElement>, blue?: boolean }) => {

    let color = "var(--dark4)"
    let backgroundColor = "var(--dark0)"
    let fontWeight = 400

    if (blue) {
        backgroundColor = "var(--blue)"
        color = "var(--dark0)"
        fontWeight = 600
    }

    return (
        <button onClick={onClick} className="button"
            style={{ backgroundColor, color, fontWeight }}>
            {text}
        </button>
    )
}

export default Button