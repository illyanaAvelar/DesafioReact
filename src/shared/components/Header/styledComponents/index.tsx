import styled from "styled-components";

export const Container = styled.div`
   
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  background: #00974a;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const LadoEsquerdo = styled.div`
  
  img {
    width: 120px;
    height: 40px;
    padding-left: 20px;
  }
`;

export const LadoDireito = styled.div`
    display: flex;
    align-items: center;
    margin-right: 30px;
    #minhasReservas,
    #perfil {
      display: flex;
      align-items:center;
      
        
      span {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content:center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #fff;
        margin: 10px;
      }
      a{
          text-decoration: none;
          color: #fff;
          font-size:18px;
          margin-right: 10px;
          
          &:hover {
              text-decoration: underline;
              color:#000;
          }
      }
    }
  
`;