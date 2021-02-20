import styled from "styled-components";

export const Container = styled.div`
width:100%;
  
`;
export const Content = styled.div`
  width: 300px;
  height: auto;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.73);
  border-radius: 10px;
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 20px;
  padding:10px;
  cursor: pointer;
  transition: all 0.5s ease;
  background: #ffffff;
  &:hover {
    opacity: 0.7;
  }
`;


export const TopCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  img {
    width: 100%;
    height: 100%px;
    padding-top: 10px;
  }
`;
export const BottomCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items:center;
  text-align: justify;
  .msg{
    margin:0px;
  }
  button{
    margin-top: 20px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;