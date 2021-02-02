import React, {useState} from 'react';
import SliderData from '../components/SliderData';
import '../style/Slider.css';

const Slider = props => {
    const {slides} = props;
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1);
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className="slideshow">
            <a className="prev" onClick={prevSlide}>&#10094;</a>
            {
                SliderData.map((slide, i) => {
                return (
                    <div className={i === current ? 'slide active' : 'slide'} key={i}>
                        {i === current && (<img src={slide.image} alt='Amazon' className="myImages"/>)}
                        
                    </div>
                );
                })
            }
            <a className="next" onClick={nextSlide}>&#10095;</a>
        </div>
    );
}

export default Slider;