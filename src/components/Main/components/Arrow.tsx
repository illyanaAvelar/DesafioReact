import leftArrow from '../../../shared/assets/images/left-arrow.png'
import rightArrow from '../../../shared/assets/images/right-arrow.png'
import { StyledArrow } from '../styledComponents'

const Arrow = (direction: any, handleClick: any) => (
  <StyledArrow
    onClick={handleClick}
    direction={direction}
  >
    {direction === 'right' ? <img src={rightArrow} /> : <img src={leftArrow} />}
  </StyledArrow>
)

export default Arrow