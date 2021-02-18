import leftArrow from '../img/left-arrow.svg'
import rightArrow from '../img/right-arrow.svg'
import { StyledArrow } from '../styledComponents'

const Arrow = ({ direction, handleClick }) => (
  <StyledArrow
    onClick={handleClick}
    direction={direction}
  >
    {direction === 'right' ? <img src={rightArrow} /> : <img src={leftArrow} />}
  </StyledArrow>
)

export default Arrow