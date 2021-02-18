import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow:auto;
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction:column;
  justify-content: center;
  margin-top: 200px;
`;

export const FooterContatos = styled.div`
  width: 100%;
  height: 150px;
  background: #f3f5f7;
  
  display: flex;
  align-items: center;
  justify-content: space-evenly;
 
  img{
      width: 50px;
      height: 50px;
      padding-bottom: 10px;
  }
  a {
      line-height: 1.0rem;
      color: #00974a;
      font-weight: bold;
      text-decoration:none;
    }
    span {
    padding: 0px 10px;
    color: #00974a;
    font-weight: 800;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
  }
`;

export const PerguntasFrequentes = styled.div`
display: flex;
flex-direction: column;
align-items: center;
a{
    visibility: hidden;
}
`;

export const EnvieMensagem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
img{
    width:60px;
    height: 60px;
}
a{
    visibility: hidden;
}
`;

export const CentralReservas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AssistenciaClientes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterEmpresa = styled.div`
    width: 100%;
    background: #333;
    display:flex;
    align-items: center;
    justify-content: space-evenly;
    
    
    h3{
      color: #d4db26;
      font-size:1.2rem;
      font-weight:700;  
      margin-top:50px;
      margin-bottom:10px;    
    }
    a, li{
      text-decoration:none;
      color:#ffffff;
      font-size:1rem;
      font-weight:300;
      margin-bottom:30px;
      align-self:start;
      &:hover{
        text-decoration: underline;
      }
    }
`;

export const FooterInstitucional = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterNegocios = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const FooterPraVoce = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const FooterFinal = styled.div`
display: flex;
background:#00974a;
align-items: center;
justify-content:space-around;
padding: 60px;
padding-top: 40px;
`;

export const FooterTexto = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content:space-around;
p{
  text-align: justify;
  color: #fff;
  margin:0px;
  font-size:14px;
}
img{
  width: 25%;
  height: 25%;
}
#links, #copyright{
  color: #fff;
  margin-top:30px;
  font-size:14px;
}
`;

export const FooterVejaTambem = styled.div`
display: flex;
flex-direction: column;
align-items: start;
p{
  color: #fff;
}
div{
  display: flex;
  align-items: center;
  img{
    margin:10px 10px;
  }
}
`;