"use client"

import React from 'react'
import Slider from "react-slick";
import Image from 'next/image'

import estate from "./../../images/estate1.png";
import fire from './../../images/fire.png';
import home from './../../images/home.png';
import discount from './../../images/discount.png'

//style
import './style.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Estates() {
    const estates = [
        {
            image: estate,
            price: '$ 5,970',
            title: 'Tranquil Haven in the Woods',
            location: '103 Wright CourtBurien, WA 98168',
            type: 'Popular',
        },
        {
            image: estate,
            price: '$ 1,970',
            title: 'Serene Retreat by the Lake',
            location: '1964 Jehovah Drive, VA 22408',
            type: 'New Listing',
        },
        {
            image: estate,
            price: '$ 3,450',
            title: 'Charming Cottage in the Meadow',
            location: '1508 Centennial Farm RoadHarlan, 51537',
            type: 'Discounted Price',
        },
        {
            image: estate,
            price: '$ 2,389',
            title: 'Grand Estate on the Hilltop',
            location: '103 Wright CourtBurien, WA 98168',
            type: 'Popular',
        },
        {
            image: estate,
            price: '$ 3,450',
            title: 'Charming Cottage in the Meadow',
            location: '1508 Centennial Farm RoadHarlan, 51537',
            type: 'Discounted Price',
        },
    ]

    const types = [
        {
            type: 'Popular',
            image: fire,
            class: "popular",
        },
        {
            type: 'New Listing',
            image: home,
            class: 'new-listing'
        },
        {
            type: 'Discounted Price',
            image: discount,
            class: 'discounted-price',
        }
    ]
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScrol: 1,
        autoplay: true,
        speed: 1250,
        centerMode: false,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",
        initialSlide: 0,
        lazyLoad: false,
        swipeToSlide: true,
        responsive: [
            {

                breakpoint: 1000,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <div className='estates'>
            <div className="container">
                <div className='text'>
                    <div>
                        <h4>
                            CHECKOUT OUR NEW
                        </h4>
                        <h3>
                            Best Real Estate
                        </h3>
                        <p>
                            Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum has been the industry's standard dummy text ever since
                        </p>
                    </div>
                    <div className='button'>
                        All
                    </div>
                </div>

                <Slider
                    {...settings}
                >
                    {estates.map(estate => {
                        return (
                            <div key={estate.title} className='estate'>
                                <div className="image">
                                    <Image
                                        src={estate.image}
                                        alt=""
                                        priority
                                    />
                                    {types.map(type => {
                                        if (type.type === estate.type) {
                                            return (
                                                <div className={`type  ${type.class}`}>
                                                    <Image
                                                        src={type.image}
                                                        alt=""
                                                        width={20}
                                                        height={20}
                                                        priority
                                                    />
                                                    <p>
                                                        {type.type}
                                                    </p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className='estateInfo'>
                                    <p>{estate.price}</p>
                                    <h3>{estate.title}</h3>
                                    <h4>{estate.location}</h4>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default Estates