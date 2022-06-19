import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { mergeClassNames } from '@react-gui/core';

import { InputProps } from './index.types';

/**
 * Input Component
 * @description Component to render field for textual input
 * @param props - Input Props
 * @param ref - HTMLInputElement ref
 */
const Input = forwardRef<HTMLInputElement, InputProps>(({
  placeholder,
  value,
  onChange = () => {},
  prefix = null,
  suffix = null,
  disabled = false,
  style,
  className,
}, ref) => {
  return (
    <Container className={mergeClassNames('rui--input-container', className)} style={style}>
      {prefix && (
        <SideContainer className='rui--input-side-container'>
          {prefix}
        </SideContainer>
      )}
      <StyledInput
        ref={ref}
        className='rui--input-control'
        size={1} // necessary to cope up with input min width issue
        onChange={(e) => { onChange(e.target.value); }}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
      />
      {suffix && (
        <SideContainer className='rui--input-side-container'>
          {suffix}
        </SideContainer>
      )}
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  /* debug */
  border: 1px dashed #AEAEAE;
`;

const StyledInput = styled.input`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  padding: 0;
  flex: 1;
  height: 100%;
  background-color: transparent;
  outline: 0;
  
  /* debug */
  border: 1px dashed #BEBEBE;

`;


const SideContainer = styled.div`
  /* debug */
  border: 1px dashed #BEBEBE;
`;


export default Input;