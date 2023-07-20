import React, {useState} from 'react'
import Outdoor1 from '@Images/outdoor1.jpg'
import Outdoor2 from '@Images/outdoor2.jpg'
import Outdoor3 from '@Images/outdoor3.jpg'
import Outdoor4 from '@Images/outdoor4.jpg'
import Outdoor5 from '@Images/outdoor5.jpg'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

function Slider() {
    const slides = [
        {
            url: Outdoor1,
            title: 'Outdoor 1'
        },
        {
            url: Outdoor2,
            title: 'Outdoor 2'
        },
        {
            url: Outdoor3,
            title: 'Outdoor 3'
        },
        {
            url: Outdoor4,
            title: 'Outdoor 4'
        },
        {
            url: Outdoor5,
            title: 'Outdoor 5'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto px-4 relative group'>
        <div 
        className='2-full h-full rounded-2xl bg-center bg-cover duration-500' 
        style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
        {/* Left Arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2
         group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2
         group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
                <div 
                className='text-2xl cursor-pointer' 
                key={slideIndex} 
                onClick={() => goToSlide(slideIndex)}> 
                    <RxDotFilled />
                </div>
            ))}
        </div>

    </div>
  )
}

export default Slider