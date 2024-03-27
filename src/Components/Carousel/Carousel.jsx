// import React from 'react';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"
import breadImg from "../../assets/bg1.png"
import strawImg from "../../assets/bg2.png"
import leafImg from "../../assets/bg3.png"

const Carousel = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <div ref={sliderRef} className="h-4/5 keen-slider mx-18 pt-28">
            <div className="keen-slider__slide number-slide1 flex justify-between items-center ">
                <div className='ml-16 w-1/2'>
                    <h2 className='uppercase font-semibold text-2xl text-[#96AE00]'>Top Seller In the Week</h2>
                    <h1 className='capitalize font-["Quicksand"] text-[#2D2A6E] font-bold text-6xl mt-5'>Fresh Bread <br/>Oatmeal Crumble.</h1>
                    <p className='text-[#2D2A6E] text-xl my-5 '>Presentation matters.Our Fresh Viatenames vegetable rolls look good and taste even better. </p>
                    <button className='bg-[#96AE00] hover:bg-[#2D2A6E] text-white uppercase font-semibold px-8 rounded-full py-3 mt-3 transition-colors duration-300'>Shop Now</button>
                </div>
                <div className='w-1/2'>
                    <img src={breadImg} alt="this is the header image" />
                </div>
            </div>
            <div className="keen-slider__slide number-slide1 flex justify-between items-center">
                <div className='ml-16 w-1/2'>
                    <h2 className='uppercase font-semibold text-2xl text-[#96AE00]'>Top Seller In the Week</h2>
                    <h1 className='capitalize font-["Quicksand"] text-[#2D2A6E] font-bold text-6xl mt-5'>The Best <br/>Health Fresh.</h1>
                    <p className='text-[#2D2A6E] text-xl my-5 '>Presentation matters.Our Fresh Viatenames vegetable rolls look good and taste even better. </p>
                    <button className='bg-[#96AE00] hover:bg-[#2D2A6E] text-white uppercase font-semibold px-8 rounded-full py-3 mt-3 transition-colors duration-300'>Shop Now</button>
                </div>
                <div className='w-1/2'>
                    <img src={strawImg} alt="this is the header image" />
                </div>
            </div>
            <div className="keen-slider__slide number-slide1 flex justify-between items-center">
                <div className='ml-16 w-1/2'>
                    <h2 className='uppercase font-semibold text-2xl text-[#96AE00]'>Top Seller In the Week</h2>
                    <h1 className='capitalize font-["Quicksand"] text-[#2D2A6E] font-bold text-6xl mt-5'>Choose Your <br/>Healthy Lifestyle.</h1>
                    <p className='text-[#2D2A6E] text-xl my-5 '>Presentation matters.Our Fresh Viatenames vegetable rolls look good and taste even better. </p>
                    <button className='bg-[#96AE00] hover:bg-[#2D2A6E] text-white uppercase font-semibold px-8 rounded-full py-3 mt-3 transition-colors duration-300'>Shop Now</button>
                </div>
                <div className='w-1/2'>
                    <img src={leafImg} alt="this is the header image" />
                </div>
            </div>
           
        </div>
    );
};

export default Carousel;