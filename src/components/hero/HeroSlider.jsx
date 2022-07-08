import { Box, Button, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Adjust } from '@mui/icons-material';
import ShoppingImage2 from "../../images/fashion/shopping-2.png"
import ShoppingImage3 from "../../images/fashion/shopping-3.png"
import ShoppingImage5 from "../../images/fashion/shopping-5.png"

const SliderItems = [
	{
		title: "Womans Collection",
		description:
			"Et aliquyam justo dolore ea lorem, gubergren sit dolore at et amet dolor. Gubergren sadipscing accusam lorem nonumy et. Amet consetetur vero et elitr, duo.",
		image: ShoppingImage5,
		link: "https://google.com",
	},
	{
		title: "Gents Collection",
		description:
			"Et aliquyam justo dolore ea lorem, gubergren sit dolore at et amet dolor. Gubergren sadipscing accusam lorem nonumy et. Amet consetetur vero et elitr, duo.",
		image: ShoppingImage2,
		link: "https://google.com",
	},

	{
		title: "Big Deal Offers",
		description:
			"Et aliquyam justo dolore ea lorem, gubergren sit dolore at et amet dolor. Gubergren sadipscing accusam lorem nonumy et. Amet consetetur vero et elitr, duo.",
		image: ShoppingImage3,
		link: "https://google.com",
	},
];


const HeroSlider = () => {

    const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		// autoplay: true,
		appendDots: (dots) => (
			<Box sx={{ bottom: 0 }}>
				<Box component="ul" sx={{ margin: 0, color: grey[600], ".slick-active": {color: "primary.main"} }}> {dots} </Box>
			</Box>
		),
		customPaging: (i) => (
			<Box key={i}>
				<Adjust fontSize="small" />
			</Box>
		),
	};

    return (
		<Box
			sx={{
				overflow: "hidden",
				".slick-slider": { height: "450px" },
				".slick-list": { height: "100%" },
				".slick-track": { height: "100%" },
				".slick-slide > div": {
					height: "100%",
				},
			}}
		>
			<Slider {...settings}>
				{SliderItems.map((item, index) => (
					<Box
						key={index}
						sx={{ height: "400px", overflow: "hidden" }}
					>
						<Box
							sx={{
								height: "100%",
								width: "100%",
								display: "flex",
								alignItems: "center",
								backgroundImage: 'url('+item.image+')',
								backgroundRepeat: "no-repeat",
								backgroundSize: "300px auto",
								backgroundPosition: "right, center"
							}}
						>
							<Box sx={{ mr: {xs: "0", sm: "300px"} }}>
								<Typography
									variant="h3"
									color="initial"
									sx={{
										fontWeight: 700,
										mb: 2,
										color: grey[800],
										fontSize: "2.75rem",
									}}
								>
									{item.title}
								</Typography>
								<Typography
									variant="body1"
									color="initial"
									sx={{ mb: 2.75, color: grey[800] }}
								>
									{item.description}
								</Typography>
								<div>
									<Button variant="contained">
										View Collection
									</Button>
								</div>
							</Box>
						</Box>
					</Box>
				))}
			</Slider>
		</Box>
	);
}

export default HeroSlider