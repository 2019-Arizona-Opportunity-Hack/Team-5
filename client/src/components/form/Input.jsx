import React, { useState } from "react";

export default function TextInput(props) {
    const {
        id,
        label,
        width = 6,
        initialValue = "",
        type = "text",
        onChange = () => null,
        required = false,
    } = props;
    const [value, setValue] = useState(initialValue);

    return (
        <div className={"input-field col s" + width}>
            <input
                id={id}
                type={type}
                value={value}
                min="0"
                step="1"
                onChange={event => {
                    setValue(event.target.value);
                    onChange(event.target.value);
                }}
                required={required}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}
