import { css } from '@emotion/core'
import { StyledDot, StyledDots } from '../styledComponents'


const Dot = (key: any, active: boolean) => (
  <StyledDot
    css={css`
      background: ${active ? 'green' : 'yellowgreen'};
    `}
  />
)

const Dots = (slides: any, activeIndex: number) => (
  <StyledDots>
    {slides.map((slide:number, i:number) => (
      <Dot key={slide} active={activeIndex === i} />
    ))}
  </StyledDots>
)

export default Dots