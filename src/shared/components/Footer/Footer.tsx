import React from "react";
import * as S from "./styledComponents/index";
import iconWhatsapp from "./assets/whatsapp-icon.png";
import iconTelefone from "./assets/telefone-icon.png";
import iconCarta from "./assets/carta-icon.png";
import iconDuvida from "./assets/duvida-icon.png";
import logoLocaliza from "./assets/localiza-logo.png";
import logoGestaoVeiculos from "./assets/gestao-frotas-logo.png";
import logoSeminovos from "./assets/seminovos-logo.png";

function Footer() {
  return (
    <S.Container>
      <S.FooterContatos>
        <S.PerguntasFrequentes>
          <img
            src={iconDuvida}
            alt="ícone de interrogação para tirar dúvidas"
          />
          <span>
            PERGUNTAS <br />
            FREQUENTES
          </span>
          <a>0800 979 2000</a>
        </S.PerguntasFrequentes>

        <S.EnvieMensagem>
          <img src={iconCarta} alt="ícone de carta para contato" />
          <span>
            ENVIE SUA <br />
            MENSAGEM
          </span>
          <a>0800 979 2000</a>
        </S.EnvieMensagem>

        <S.CentralReservas>
          <img src={iconTelefone} alt="ícone de telefone para contato" />
          <span>
            CENTRAL <br /> DE RESERVAS
          </span>
          <a>0800 979 2000</a>
        </S.CentralReservas>

        <S.AssistenciaClientes>
          <img src={iconWhatsapp} alt="ícone de whatsapp para contato" />
          <span>
            ASSISTÊNCIA <br /> A CLIENTES 24H
          </span>
          <a>0800 979 2020</a>
        </S.AssistenciaClientes>
      </S.FooterContatos>

      <S.FooterEmpresa>
        <S.FooterInstitucional>
          <h3>INSTITUCIONAL</h3>
          <ul>
            <li>
              <a href="#">Sobre a Localiza</a>
            </li>
            <li>
              <a href="#">Relação com Investidor</a>
            </li>
            <li>
              <a href="#">Sala de Imprensa</a>
            </li>
            <li>
              <a href="#">Trabalhe Conosco</a>
            </li>
          </ul>
        </S.FooterInstitucional>

        <S.FooterNegocios>
          <h3>NEGÓCIOS</h3>
          <ul>
            <li>
              <a href="#">Para empresas</a>
            </li>
            <li>
              <a href="#">Agências de viagem</a>
            </li>
            <li>
              <a href="#">Seguradoras</a>
            </li>
            <li>
              <a href="#">Seja um franqueado</a>
            </li>
          </ul>
        </S.FooterNegocios>

        <S.FooterPraVoce>
          <h3>PARA VOCÊ</h3>
          <ul>
            <li>
              <a href="#">Minhas reservas</a>
            </li>
            <li>
              <a href="#">Roteiros de Viagem</a>
            </li>
            <li>
              <a href="#">Fidelidade</a>
            </li>
            <li>
              <a href="#">Cadastre-se</a>
            </li>
          </ul>
        </S.FooterPraVoce>
      </S.FooterEmpresa>

      <S.FooterFinal>
        <S.FooterTexto>
          <img src={logoLocaliza} alt="Logo da Localiza" />
          <p>
            Informações ao consumidor: Localiza Rent a Car S/A - CNPJ nº
            16.670.085/0001-55 </p>
            <p>Sede: Avenida Bernardo Vasconcelos, n° 377 -
            Cachoeirinha - CEP: 31.150-000 - Belo Horizonte - MG</p>
            <p>Central de Reservas 24h: 0800 979 2000 | Assistência a Clientes 24h: 0800 979
            2020</p>
            <p> E-mail: centraldereservas@localiza.com</p>
          <span id="links">Mapa do site | Termos de uso | Portal da privacidade | Contrato de Aluguel de Carros </span>
          <span id="copyright">©Localiza - Todos direitos reservados </span>
        </S.FooterTexto>

        <S.FooterVejaTambem>
          <p>VEJA TAMBÉM:</p>
          
          <div><img src={logoGestaoVeiculos} alt="logo da gestão de frotas da localiza"/><p>Gestão de Frotas</p></div>
          <div><img src={logoSeminovos} alt="logo dos seminovos da localiza"/><p>Seminovos</p></div>
        </S.FooterVejaTambem>

      </S.FooterFinal>
    </S.Container>
  );
}

export default Footer;