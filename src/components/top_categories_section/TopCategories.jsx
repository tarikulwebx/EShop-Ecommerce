import { Apps } from '@mui/icons-material'
import { alpha, Box, Container } from '@mui/material'
import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHead from "../../common/section_head/SectionHead"
import CategoryItem from './CategoryItem';

import PrevIcon from "../../images/icons/prev_icon.svg";
import NextIcon from "../../images/icons/next_icon.svg";

import ProductImg1 from "../../images/products/product_7.jpg"
import ProductImg2 from "../../images/products/product_5.jpg"
import ProductImg3 from "../../images/products/product_4.jpg"


const categories = [
	{
		name: "Diamond",
		total_monthly_order: "3k",
		images: [ProductImg1, ProductImg2, ProductImg3],
	},
	{
		name: "Shoe",
		total_monthly_order: "4k",
		images: [ProductImg1, ProductImg2, ProductImg3],
	},
	{
		name: "Beauty",
		total_monthly_order: "10k",
		images: [ProductImg1, ProductImg2, ProductImg3],
	},
    {
		name: "Cloth",
		total_monthly_order: "10k",
		images: [ProductImg1, ProductImg2, ProductImg3],
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
	autoplaySpeed: 2800,
	prevArrow: <SliderPrevArrow />,
	nextArrow: <SliderNextArrow />,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				arrows: false,
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 900,
			settings: {
				arrows: false,
				slidesToShow: 1,
			},
		},
	],
};

const TopCategories = () => {
    return (
		<Box component="section">
			<SectionHead
				title="Top Categories"
				icon={<Apps color="primary" />}
				viewLink=""
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
                            transition: "0.23s"
                        },
                        "&:hover": {
                            ".slick-arrow": {
                                opacity: 1,
                                visibility: "visible"
                            }
                        }
					}}
				>
					<Slider {...settings}>
						{categories.map((category, index) => (
							<Box key={index}>
								<CategoryItem category={category} />
							</Box>
						))}
					</Slider>
				</Box>
			</Container>
		</Box>
	);
}

export default TopCategories