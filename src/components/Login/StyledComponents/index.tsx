import styled from 'styled-components';
import sideImageSrc from '../../../shared/assets/images/temporary.png'

export const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const BackgroundImage = styled.div`
    background-image: url(${sideImageSrc});
    background-repeat: no-repeat;
    background-size: auto;
    width: 500px;
    height: 100%;
    margin-top: 110px;
    margin-left: 50px;
`;

export const Input = styled.input`
    width: 250px;
    height: 30px;
    border-radius: 6px;
    border: 2px solid gray;
    opacity: 0.5;
    padding: 5px;
`;

export const LoginFields = styled.div`
    height: 430px;
    width: 350px;      
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 3px 6px #00000015;
    margin-right: 140px;
    margin-top: 80px;
`;

export const Button = styled.button`
    width: 250px;
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

export const Label = styled.label`
    font-weight: bold;
    font-size: 14px;
    margin-right: 200px;
    margin-top: 15px;
    margin-bottom: 2px;
`;

export const StyledLink = styled.label`
    font-size: 14px;
    cursor: pointer;
    text-decoration: underline;
    &:hover {
        color: green;
    }
`;