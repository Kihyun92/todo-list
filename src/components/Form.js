import React from 'react';
import './Form.css';

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
    return (
        <div class="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
            <div className="create-button" onClick={onCreate}>
                Add
            </div>
        </div>
    );
};

export default Form;
