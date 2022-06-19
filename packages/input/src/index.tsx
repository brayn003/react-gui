import React, { ForwardedRef, forwardRef, ForwardRefExoticComponent } from 'react';
import styled from 'styled-components';
import { InputProps } from './index.types';

const DISABLED_TEXT = '#BBBBBB';

/**
 * @name Input
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
}, ref) => {
  return (
    <Container style={style}>
      {prefix && (
        <SideContainer>
          {prefix}
        </SideContainer>
      )}
      <InputContainer>
        <StyledInput
          size={1} // necessary to cope up with input min width issue
          ref={ref}
          onChange={(e) => { onChange(e.target.value); }}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
        />
      </InputContainer>
      {suffix && (
      <SideContainer>
        {suffix}
      </SideContainer>
      )}
    </Container>
  );
});


const Container = styled.div`
  width: 100%;
  display: flex;
  border-style: solid;
  border-width: 1px;
  border-color: #000;
  will-change: border-color;
  transition: border-color 0.1s linear;

  &:hover {
    border-color: #333;
  }
`;

const StyledInput = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding: 0;
  color: inherit;
  font-size: inherit;

  &:active, &:focus {
    outline: 0;
  }

  &::placeholder {
    color: #DDDDDD;
  }

  :disabled {
    color: ${DISABLED_TEXT};
  }
`;


const SideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
`;

const InputContainer = styled.div`
  position: relative;
  align-items: center;
  flex: 1;
`;

export default Input;