import React, { useState } from 'react'
import { StyledSlider, SliderContent } from '../styledComponents'
import Slide from './Slide'
import Arrow from '../temporary/Arrow'

const Slider = (props:any) => {
    const getWidth = () => window.innerWidth

    const [state, setState] = useState({
        translate: 0,
        transition: 0.45,
        activeIndex: 0
    })

    const { translate, transition, activeIndex } = state

    const nextSlide = () => {
        if (activeIndex === props.slides.length - 1) {
        return setState({
            ...state,
            translate: 0,
            activeIndex: 0
        })
        }

        setState({
        ...state,
        activeIndex: activeIndex + 1,
        translate: (activeIndex + 1) * getWidth()
        })
    }

    const prevSlide = () => {
        if (activeIndex === 0) {
        return setState({
            ...state,
            translate: (props.slides.length - 1) * getWidth(),
            activeIndex: props.slides.length - 1
        })
        }

        setState({
        ...state,
        activeIndex: activeIndex - 1,
        translate: (activeIndex - 1) * getWidth()
        })
    }

    return (
        <StyledSlider>
            <SliderContent
            translate={translate}
            transition={transition}
            width={getWidth() * props.slides.length}
            >
                {props.slides.map((slide:number, i:number) => (
                <Slide key={slide + i} content={slide} />
                ))}
            </SliderContent>    
            <Arrow direction="left" handleClick={prevSlide} />
            <Arrow direction="right" handleClick={nextSlide} />
        </StyledSlider>
    )
}

export default Slider
