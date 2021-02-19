import styled from "styled-components";

export const AditionalsCardContainer = styled.div`
    width: 73%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;
    margin-bottom: 50px;
`;

export const StyledAditionalsCard = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    width: 300px;
    height: 100px;
    box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.73);
    border-radius: 10px;
    cursor: pointer;
    background: #f3f5f7; 
    &:hover {
        opacity: 0.7;
    }
`;

export const AddOnDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AddOnContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
`;
