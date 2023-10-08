import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import './css/index.css'

const index = () => {
    return (
        <div className='h-screen bg-white'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Autoplay, Pagination, Navigation]}
                navigation={true}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                className='my-52 swiper-btn'
            >
                <SwiperSlide>
                    <div className='flex flex-row justify-between bg-white px-60 self-center'>
                        <div className='car-details'>
                            <span className='text-4xl font-black'>2023</span>
                            <br />
                            <span className='text-4xl font-black'>All New XUV700</span>
                            <br />
                            <span className='text-xl font-bold'>starts from Rs 12.49 lakhs</span>
                            <br />
                            <button className="inline-flex w-auto mb-6 text-white font-bold bg-red border-0 py-2 px-6 mt-8 shadow shadow-red focus:outline-none hover:bg-hoverRed rounded-lg text-xl">
                                More Details
                            </button>
                        </div>
                        <div className='car-img'>
                            <img className=' w-[450px] h-[300px]' src='https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV700/10797/1690277045969/exterior-image-169.jpg?imwidth=420&impolicy=resize' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-row justify-between bg-white px-60 self-center'>
                        <div className='car-details'>
                            <span className='text-4xl font-black'>2023</span>
                            <br />
                            <span className='text-4xl font-black'>All New XUV700</span>
                            <br />
                            <span className='text-xl font-bold'>starts from Rs 12.49 lakhs</span>
                            <br />
                            <button className="inline-flex w-auto mb-6 text-white font-bold bg-red border-0 py-2 px-6 shadow shadow-red focus:outline-none hover:bg-hoverRed rounded-lg text-xl">
                                More Details
                            </button>
                        </div>
                        <div className='car-img'>
                            <img className=' w-[450px] h-[300px]' src='https://images.hindustantimes.com/auto/img/2023/03/08/1600x900/Mahindra_XUV300_price_hike_1678248950881_1678248951083_1678248951083.jpg' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-row justify-between bg-white px-60 self-center'>
                        <div className='car-details'>
                            <span className='text-4xl font-black'>2023</span>
                            <br />
                            <span className='text-4xl font-black'>All New XUV700</span>
                            <br />
                            <span className='text-xl font-bold'>starts from Rs 12.49 lakhs</span>
                            <br />
                            <button className="inline-flex w-auto mb-6 text-white font-bold bg-red border-0 py-2 px-6 shadow shadow-red focus:outline-none hover:bg-hoverRed rounded-lg text-xl">
                                More Details
                            </button>
                        </div>
                        <div className='car-img'>
                            <img className=' w-[450px] h-[300px]' src='https://static.toiimg.com/thumb/msid-78442814,width-1280,height-720,resizemode-4/78442814.jpg' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-row justify-between bg-white px-60 self-center'>
                        <div className='car-details'>
                            <span className='text-4xl font-black'>2023</span>
                            <br />
                            <span className='text-4xl font-black'>All New XUV700</span>
                            <br />
                            <span className='text-xl font-bold'>starts from Rs 12.49 lakhs</span>
                            <br />
                            <button className="inline-flex w-auto mb-6 text-white font-bold bg-red border-0 py-2 px-6 shadow shadow-red focus:outline-none hover:bg-hoverRed rounded-lg text-xl">
                                More Details
                            </button>
                        </div>
                        <div className='car-img'>
                            <img className=' w-[450px] h-[300px]' src='https://cars.tatamotors.com/images/safari/iconic-design-2023.jpg' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-row justify-between bg-white px-60 self-center'>
                        <div className='car-details'>
                            <span className='text-4xl font-black'>2023</span>
                            <br />
                            <span className='text-4xl font-black'>All New XUV700</span>
                            <br />
                            <span className='text-xl font-bold'>starts from Rs 12.49 lakhs</span>
                            <br />
                            <button className="inline-flex w-auto mb-6 text-white font-bold bg-red border-0 py-2 px-6 shadow shadow-red focus:outline-none hover:bg-hoverRed rounded-lg text-xl">
                                More Details
                            </button>
                        </div>
                        <div className='car-img'>
                            <img className=' w-[450px] h-[300px]' src='https://imgd.aeplcdn.com//642x361//n/cw/ec/154225/honda-elevate-right-front-three-quarter18.jpeg?isig=0&wm=1&q=75' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-row justify-between bg-white px-60 self-center'>
                        <div className='car-details'>
                            <span className='text-4xl font-black'>2023</span>
                            <br />
                            <span className='text-4xl font-black'>All New XUV700</span>
                            <br />
                            <span className='text-xl font-bold'>starts from Rs 12.49 lakhs</span>
                            <br />
                            <button className="inline-flex w-auto mb-6 text-white font-bold bg-red border-0 py-2 px-6 shadow shadow-red focus:outline-none hover:bg-hoverRed rounded-lg text-xl">
                                More Details
                            </button>
                        </div>
                        <div className='car-img'>
                            <img className=' w-[450px] h-[300px]' src='https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/130583/hector-exterior-left-front-three-quarter.jpeg?isig=0&q=80' />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default index;