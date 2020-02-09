import React from 'react';
import './Form.css';

const Form = ({ selectedColor, value, onChange, onCreate, onKeyPress }) => {
    return (
        <div className="form">
            <input color={selectedColor} value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color: selectedColor}}/>
            <div className="create-button" onClick={onCreate}>
                Add
            </div>
        </div>
    );
};

export default Form;
