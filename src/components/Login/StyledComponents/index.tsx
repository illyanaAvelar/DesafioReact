import styled from 'styled-components';
import sideImageSrc from '../../../shared/assets/images/temporary.png';

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
    margin-left: 100px;
`;

export const LoginFields = styled.div`
    height: 450px;
    width: 370px;      
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 3px 6px #00000012;
    margin-right: 150px;
    border-radius: 10px;
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