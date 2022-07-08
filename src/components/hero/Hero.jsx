import { Box, Container
 } from '@mui/material'
import React from 'react'
import CategoryMenu from './CategoryMenu';
import HeroSlider from './HeroSlider';

const Hero = () => {
    return (
		<Box component="section" sx={{ py: 3 }}>
			<Container maxWidth="xl">
				<Box sx={{ display: "flex", gap: 3 }}>
					<CategoryMenu />
					<HeroSlider />
				</Box>
			</Container>
		</Box>
	);
}

export default Hero