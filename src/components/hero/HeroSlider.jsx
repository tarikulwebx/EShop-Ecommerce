import { Avatar, Box, Link, Skeleton } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Adjust } from '@mui/icons-material';

import FashionImage1 from "../../images/fashion/fashion_1.jpg"
import FashionImage2 from "../../images/fashion/fashion_2.jpg"
import FashionImage3 from "../../images/fashion/fashion_3.jpg"

const SliderImages = [
	{
		image: FashionImage1,
		link: "https://google.com"
	},
	{
		image: FashionImage2,
		link: "https://google.com"
	},
	{
		image: FashionImage3,
		link: "https://google.com"
	},
	
];


const HeroSlider = () => {
	const SliderSettings = {
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendDots: (dots) => (
			<Box sx={{ bottom: { xs: 10, sm: 15 } }}>
				<Box
					component="ul"
					sx={{
						margin: 0,
						color: grey[300],
						".slick-active": { color: "primary.main" },
					}}
				>
					{dots}
				</Box>
			</Box>
		),
		customPaging: (i) => (
			<Box key={i}>
				<Adjust sx={{ fontSize: { xs: "0.9rem", sm: "1.1rem" } }} />
			</Box>
		),
	};

    return (
		<Box sx={{ width: "100%", overflow: "hidden" }}>
			<Slider {...SliderSettings}>
				{SliderImages &&
					SliderImages.map((slide, index) => (
						<Link href={slide.link} key={index}>
							<Avatar
								src={slide.image}
								alt="slider"
								variant="square"
								sx={{ width: "100%", height: "100%" }}
							/>
						</Link>
					))}

				{!SliderImages &&
					[1, 2].map((n) => (
						<Skeleton
							key={n}
							variant="rectangular"
							width="100%"
							height={400}
							animation="wave"
						/>
					))}
			</Slider>
		</Box>
	);
}

export default HeroSlider