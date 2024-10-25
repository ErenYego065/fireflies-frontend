import Image from 'next/image'
import React, { HTMLAttributes, useState } from 'react'
import Slider from 'react-slick'
import { TicketDetails } from '@/app/content/rewards/global-explorer/page'

interface ImagesSliderProps { ticketDetails: TicketDetails }

const ImagesSlider = ({ ticketDetails }: ImagesSliderProps) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    return (
        <div className="w-full">
            <Image
                src={ticketDetails?.imgUrls[selectedImageIndex]}
                alt="hero"
                className="w-full aspect-[4/3] object-cover rounded-xl"
                height={500}
                width={700}
            />
            {ticketDetails?.imgUrls?.length > 1 && <div className="px-6 py-4">
                <div className="slider-container">
                    <Slider arrows nextArrow={<SampleNextArrow />}
                        prevArrow={<SamplePrevArrow />} infinite={true} slidesToScroll={1} speed={500} slidesToShow={4} responsive={[{
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 3,
                            }
                        }, {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 2,
                            }
                        }]}
                        afterChange={(currentSlide) => setSelectedImageIndex(currentSlide)}>
                        {ticketDetails?.imgUrls?.map((url, index) =>
                            <div>
                                <Image
                                    style={{ border: selectedImageIndex === index ? "1px solid" : "", boxSizing: "border-box" }}
                                    onClick={() => setSelectedImageIndex(index)}
                                    src={url}
                                    key={"thumbnail " + index}
                                    alt={"thumbnail " + index}
                                    className="w-full aspect-video object-cover rounded-md pointer border-secondary-900"
                                    height={90}
                                    width={120}
                                />
                            </div>
                        )}
                    </Slider></div>
            </div>}
        </div>
    )
}


function SampleNextArrow(props: HTMLAttributes<HTMLDivElement>) {
    const { onClick } = props;
    return (
        <div
            className={"w-6 h-6 text-secondary-900 bg-white absolute top-1/2 -right-6 border border-primary-500 rounded-full -translate-y-1/2 pointer flex items-center justify-center"}
            onClick={onClick}
        >
            <Image alt="left arrow" src="/images/rewards/global-explorer/arrow-right.svg" height={18} width={18} />
        </div>
    );
}

function SamplePrevArrow(props: HTMLAttributes<HTMLDivElement>) {
    const { onClick } = props;
    return (
        <div
            className={"w-6 h-6 text-secondary-900 bg-white absolute top-1/2 -left-6 border border-primary-500 rounded-full -translate-y-1/2 pointer flex items-center justify-center"}
            onClick={onClick}
        >
            <Image alt="left arrow" src="/images/rewards/global-explorer/arrow-left.svg" height={18} width={18} />
        </div>
    );
}


export default ImagesSlider
