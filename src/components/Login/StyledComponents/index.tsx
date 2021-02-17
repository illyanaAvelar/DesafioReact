import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
    justifyItems: space-between;
`;

export const SideImage = styled.img`
    height: 100%; 
    width: 700; 
    src: ${props => props.theme};
    alt: login
`;

export const Input = styled.input`
    placeholder {placeholder}
`;