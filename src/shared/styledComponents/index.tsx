import styled from 'styled-components';
import { IButton, IInput } from '../types/index'

export const Input = styled.input`
    width: ${(props: IInput) => props.width}px;
    height: 30px;
    border-radius: 6px;
    border: 2px solid gray;
    opacity: ${(props: IInput) => props.opacity};
    padding: 5px;
    margin: ${(props: IInput) => props.margin}px;
    margin-top: -${(props: IInput) => props.margin/6}px;
`;

export const Button = styled.button`
    width: ${(props: IButton) => props.width}px;
    height: 33px;
    color: white;
    border-radius: 8px;
    padding: 2px 24px;
    border: 3px solid green;
    background: green;
    cursor: pointer;
    outline: 0;
    position: relative;
    transition: all 0.2s;
    margin: 20px;
    margin-top: -${(props: IButton) => props.negativeMargin}px;

    &:hover {
        background: yellowgreen;
        border-color: yellowgreen;
    }
    &:active {
        background: yellowgreen;
        border-color: yellowgreen;
    }
    &:focus {
        box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.25);
    }
`;