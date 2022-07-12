import { FlashOn } from '@mui/icons-material';
import {  alpha, Box, Container, Grid } from '@mui/material'
import React from 'react'
import SectionHead from "../../common/section_head/SectionHead"
import ProductItem from "./ProductItem";

import ProductImg1 from "../../images/products/product_1.jpg"
import ProductImg2 from "../../images/products/product_2.jpg"
import ProductImg7 from "../../images/products/product_7.jpg"
import ProductImg8 from "../../images/products/product_8.jpg"
import Slider from 'react-slick';

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
	autoplaySpeed: 2000,
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
		<Box
			component="section"
			sx={{ backgroundColor: "blue_background.main", mt: 2, py: 5 }}
		>
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
					}}
				>
					<Slider {...settings}>
						{products.map((product, index) => (
							<Grid item xs={12} sm={6} md={3} key={index}>
								<ProductItem product={product} />
							</Grid>
						))}
					</Slider>
				</Box>
			</Container>
		</Box>
	);
}

export default FlashSells