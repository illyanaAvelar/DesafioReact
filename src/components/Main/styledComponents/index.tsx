import styled from 'styled-components';
import { ISliderContent, IStyledSlide, IStyledArrow } from '../types/index'

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const StyledSlider = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;
`;

export const SliderContent = styled.div`
  transform: translateX(-${(props: ISliderContent) => props.translate}px);
  transition: transform ease-out ${(props: ISliderContent) => props.transition}s;
  height: 100%;
  width: ${(props: ISliderContent) => props.width}px;
  display: flex;
`

export const StyledSlide = styled.div`
    height: 100;
    width: 100%;
    background-image: url('${(props: IStyledSlide) => props.content}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const StyledArrow = styled.div`
      display: flex;
      position: absolute;
      top: 50%;
      ${(props: IStyledArrow) => props.direction === 'right' ? `right: 25px` : `left: 25px`};
      height: 50px;
      width: 50px;
      justify-content: center;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      img {
        transform: translateX(${(props: IStyledArrow) => props.direction === 'left' ? '-2' : '2'}px);
        &:focus {
          outline: 0;
        }
      }
`;

export const StyledDot = styled.span`
    padding: 10px;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 50%;
`;

export const StyledDots = styled.div`
    position: absolute;
    bottom: 25px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const DateTimeContainer = styled.div`
  width: 70%;
  height: 150px;
  background-color: gold;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 370px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.label`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 15px;
    color: white;
`;
