import { FlashOn } from '@mui/icons-material';
import {  alpha, Box, Container } from '@mui/material'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SectionHead from "../../common/section_head/SectionHead"
import ProductItem from "./ProductItem";

import ProductImg1 from "../../images/products/product_1.jpg"
import ProductImg2 from "../../images/products/product_2.jpg"
import ProductImg7 from "../../images/products/product_7.jpg"
import ProductImg8 from "../../images/products/product_8.jpg"


import PrevIcon from "../../images/icons/prev_icon.svg"
import NextIcon from "../../images/icons/next_icon.svg"

const products = [
	{
		name: "Ipsum takimata amet ut et",
		thumbnail: ProductImg1,
		avg_rating: "2.5",
		price: "200",
		off_percent: "50"
	},
	{
		name: "Et et est invidunt",
		thumbnail: ProductImg2,
		avg_rating: "5",
		price: "180",
		off_percent: "70"
	},
	{
		name: "Et et est invidunt",
		thumbnail: ProductImg7,
		avg_rating: "5",
		price: "180",
		off_percent: "70"
	},
	{
		name: "Et et est invidunt",
		thumbnail: ProductImg8,
		avg_rating: "5",
		price: "180",
		off_percent: "70"
	},
	{
		name: "Et et est invidunt",
		thumbnail: ProductImg2,
		avg_rating: "5",
		price: "180",
		off_percent: "70"
	},
	{
		name: "Et et est invidunt",
		thumbnail: ProductImg7,
		avg_rating: "5",
		price: "180",
		off_percent: "70"
	},
	{
		name: "Et et est invidunt",
		thumbnail: ProductImg8,
		avg_rating: "5",
		price: "180",
		off_percent: "70"
	},
	
];


function SliderPrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<Box
			className={className}
			style={{ ...style }}
			onClick={onClick}
			sx={{
				left: "-20px",
				zIndex: 1,
				display: "block",
				backgroundColor: (theme) =>
					alpha(theme.palette.primary.main, 0.2),
				borderRadius: "50%",
				width: "40px",
				height: "40px",
				"&:before": {
					opacity: 1,
					content: '""',
					display: "block",
					backgroundImage: "url(" + PrevIcon + ")",
					backgroundSize: "15px 15px",
					height: "100%",
					width: "100%",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				},
				"&:hover": {
					backgroundColor: (theme) =>
						alpha(theme.palette.primary.main, 0.7),
				},
			}}
		/>
	);
}

function SliderNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<Box
			className={className}
			style={{ ...style }}
			onClick={onClick}
			sx={{
				right: "-20px",
				zIndex: 1,
				display: "block",
				backgroundColor: (theme) =>
					alpha(theme.palette.primary.main, 0.2),
				borderRadius: "50%",
				width: "40px",
				height: "40px",
				"&:before": {
					opacity: 1,
					content: '""',
					display: "block",
					backgroundImage: "url(" + NextIcon + ")",
					backgroundSize: "15px 15px",
					height: "100%",
					width: "100%",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				},
				"&:hover": {
					backgroundColor: (theme) =>
						alpha(theme.palette.primary.main, 0.7),
				},
			}}
		/>
	);
}


const settings = {
	dots: false,
	arrows: true,
	infinity: true,
	autoplay: true,
	speed: 1500,
	autoplaySpeed: 2500,
	slidesToShow: 4,
	slidesToScroll: 1,
	prevArrow: <SliderPrevArrow />,
	nextArrow: <SliderNextArrow />,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 900,
			settings: {
				arrows: false,
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				slidesToShow: 1,
			},
		},
	],
};


const FlashSells = () => {

    return (
		<Box component="section">
			<SectionHead
				title="Flash Sells"
				icon={<FlashOn color="primary" />}
				viewLink="about"
			/>
			<Container maxWidth="xl">
				<Box
					sx={{
						".slick-slide > div": { margin: "0 10px" },
						".slick-list": {
							margin: "0 -10px",
							overflow: "hidden",
						},
						".slick-arrow": {
							opacity: 0,
							visibility: "hidden",
							transition: "0.23s",
						},
						"&:hover": {
							".slick-arrow": {
								opacity: 1,
								visibility: "visible",
							},
						},
					}}
				>
					<Slider {...settings}>
						{products.map((product, index) => (
							<Box key={index}>
								<ProductItem product={product} />
							</Box>
						))}
					</Slider>
				</Box>
			</Container>
		</Box>
	);
}

export default FlashSells