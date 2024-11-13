import React from 'react';
import Div from '../Div';
import './movingtext.scss';

export default function NormalText({ text, variant }) {
  return (
    <Div
      className={`cs-moving_text_wrap cs-bold cs-primary_font ${
        variant ? variant : ''
      }`}
    >
      <Div className="cs-moving_text_in2">
        <Div className="normaltext">{text}</Div>
      </Div>
    </Div>
  );
}
