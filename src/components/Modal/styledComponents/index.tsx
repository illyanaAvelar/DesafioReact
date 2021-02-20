import styled from 'styled-components';


export const ModalContainer = styled.div`
  width: 900px;
  height: 300px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.73);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 20px;
  padding:50px;
  cursor: pointer;
  transition: all 0.5s ease;
  background: #ffffff;
  position: absolute;
  z-index: 1;
  margin-bottom: -700px;
`;