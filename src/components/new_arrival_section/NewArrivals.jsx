import { NewReleases } from '@mui/icons-material';
import { alpha, Box, Container, Paper } from '@mui/material';
import React from 'react'
import SectionHead from '../../common/section_head/SectionHead';
import NewProductItem from "./NewProductItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PrevIcon from "../../images/icons/prev_icon.svg";
import NextIcon from "../../images/icons/next_icon.svg";

import ProductImg1 from "../../images/products/product_1.jpg";
import ProductImg2 from "../../images/products/product_2.jpg";
import ProductImg3 from "../../images/products/product_3.jpg";
import ProductImg4 from "../../images/products/product_4.jpg";
import ProductImg5 from "../../images/products/product_5.jpg";
import ProductImg6 from "../../images/products/product_6.jpg";



const NewProducts = [
	{
		name: "Dolores sea",
		thumbnail: ProductImg1,
		price: Math.floor(1 + Math.random() * (300 - 1)),
	},
	{
		name: "Sanctus lorem",
		thumbnail: ProductImg2,
		price: Math.floor(1 + Math.random() * (300 - 1)),
	},
	{
		name: "Labore sit",
		thumbnail: ProductImg3,
		price: Math.floor(1 + Math.random() * (300 - 1)),
	},
	{
		name: "Elitr vero dolores",
		thumbnail: ProductImg4,
		price: Math.floor(1 + Math.random() * (300 - 1)),
	},
	{
		name: "Sanctus lorem",
		thumbnail: ProductImg5,
		price: Math.floor(1 + Math.random() * (300 - 1)),
	},
	{
		name: "Aliquyam at ipsum",
		thumbnail: ProductImg6,
		price: Math.floor(1 + Math.random() * (300 - 1)),
	},
	{
		name: "Dolores sea",
		thumbnail: ProductImg1,
		price: Math.floor(1 + Math.random() * (300 - 1)),
	},
	{
		name: "Sanctus lorem",
		thumbnail: ProductImg2,
		price: Math.floor(1 + Math.random() * (300 - 1)),
	},
	{
		name: "Labore sit",
		thumbnail: ProductImg3,
		price: Math.floor(1 + Math.random() * (300 - 1)),
	},
	{
		name: "Elitr vero dolores",
		thumbnail: ProductImg4,
		price: Math.floor(1 + Math.random() * (300 - 1)),
	},
	{
		name: "Sanctus lorem",
		thumbnail: ProductImg5,
		price: Math.floor(1 + Math.random() * (300 - 1)),
	},
	{
		name: "Aliquyam at ipsum",
		thumbnail: ProductImg6,
		price: Math.floor(1 + Math.random() * (300 - 1)),
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
				left: "-44px",
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
				right: "-44px",
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
	speed: 2000,
	autoplaySpeed: 6000,
	prevArrow: <SliderPrevArrow />,
	nextArrow: <SliderNextArrow />,
	slidesToShow: 6,
	slidesToScroll: 6,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				arrows: true,
				slidesToShow: 4,
				slidesToScroll: 4,
			},
		},
		{
			breakpoint: 900,
			settings: {
				arrows: false,
				slidesToShow: 3,
				slidesToScroll: 3,
			},
		},
		{
			breakpoint: 600,
			settings: {
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		
	],
};


const NewArrivals = () => {
    return (
		<Box component="section">
			<SectionHead
				title="New Arrivals"
				icon={<NewReleases color="primary" />}
				viewLink=""
			/>
			<Container maxWidth="xl">
				<Paper
					sx={{
						backgroundColor: "#fff",
						p: 3,
						borderRadius: "0.5rem",
					}}
				>
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
							{NewProducts.map((product, index) => (
								<Box key={index}>
									<NewProductItem product={product} />
								</Box>
							))}
						</Slider>
					</Box>
				</Paper>
			</Container>
		</Box>
	);
}

export default NewArrivals