import { FlashOn } from '@mui/icons-material';
import { alpha, Box, Container, Typography } from '@mui/material'
import { blue } from '@mui/material/colors';
import React from 'react'
import Slider from 'react-slick';
import SectionHead from "../../common/section_head/SectionHead"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const FlashSells = () => {

    const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		// initialSlide: 0,
		// autoplay: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};


    return (
		<Box
			component="section"
			sx={{ backgroundColor: alpha(blue[100], 0.15), mt: 2, py: 3 }}
		>
			<SectionHead
				title="Flash Sells"
				icon={<FlashOn color="primary" />}
				viewLink="about"
			/>
			<Container maxWidth="xl">
				{/* <Box sx={{ position: "relative", ".slick-slider": {margin: "0 -15px"}, ".slick-slide>div": {margin: "0 15px"}, ".slick-prev": {left: 0, zIndex: "1"}, ".slick-next": {right: 0} }}>
					<Slider {...settings}>
						<Box>
                            <Typography variant="h1" color="initial" sx={{ backgroundColor: "red" }}>1</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h1" color="initial" sx={{ backgroundColor: "green" }}>1</Typography>
                        </Box>
						<Box>
                            <Typography variant="h1" color="initial" sx={{ backgroundColor: "red" }}>1</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h1" color="initial" sx={{ backgroundColor: "green" }}>1</Typography>
                        </Box>
						<Box>
                            <Typography variant="h1" color="initial" sx={{ backgroundColor: "red" }}>1</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h1" color="initial" sx={{ backgroundColor: "green" }}>1</Typography>
                        </Box>
						<Box>
                            <Typography variant="h1" color="initial" sx={{ backgroundColor: "red" }}>1</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h1" color="initial" sx={{ backgroundColor: "green" }}>1</Typography>
                        </Box>

                        
                        
					</Slider>
				</Box> */}
			</Container>
		</Box>
	);
}

export default FlashSells