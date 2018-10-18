import React, { Component } from 'react';
import styled from 'styled-components';

export class Label extends Component {
  render(props) {
    return (
      <LabelColored {...this.props}>Hello</LabelColored>
    );
  }
}

const LabelColored = styled.div`
  color: #fff;
  width: 200px;
  text-align: center;
  background-color: ${(props) => {
    return props.type === 'alert' ? 'red' : 'green'
  }};
`;
