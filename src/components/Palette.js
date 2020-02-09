import React, { Component } from 'react';
import './Palette.css';

class Palette extends Component {
    render() {
        const { textColors, selectedColor, onChangeColor } = this.props;

        const palettes = textColors.map((color, index) => (
            <div
                className={`palette-item ${selectedColor === textColors[index] ? 'active' : ''}`}
                onClick={() => onChangeColor(index)}
                style={{ background: color }}
                key={index}
            />
        ));

        return (
            <div className="palette-wrapper">
                <div className="palette-list">{palettes}</div>
            </div>
        );
    }
}

export default Palette;
