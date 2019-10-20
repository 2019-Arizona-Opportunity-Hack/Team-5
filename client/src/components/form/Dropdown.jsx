import React, { useState } from "react";

export default function Dropdown(props) {
    const { width = 6, onChange = () => null, label, children } = props;
    const [value, setValue] = useState("");
    return (
        <div className={"input-field col s" + width}>
            <select
                value={value}
                onChange={event => {
                    setValue(event.target.value);
                    onChange(event.target.value);
                }}
            >
                <option value="" disabled>
                    Choose your option
                </option>
                {children}
            </select>
            <label>{label}</label>
        </div>
    );
}

export function Option(props) {
    const { value } = props;
    return <option value={value}>{value}</option>;
}
