import React from 'react';
import Div from '../Div';
import './movingtext.scss';

export default function MovingImages({ text, variant }) {
  return (
    <Div
      className={`cs-moving_text_wrap cs-bold cs-primary_font ${
        variant ? variant : ''
      }`}
    >
      <Div className="cs-moving_text_in">
        <Div className="cs-moving_text">{text}</Div>
        <Div className="cs-moving_text">{text}</Div>
      </Div>
    </Div>
  );
}
