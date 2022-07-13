import { Box, Grid } from '@mui/material'
import React from 'react'
import FlashSellSection from '../components/flash_sell_section/FlashSell_section'
import Hero from "../components/hero/Hero"
import NewArrivals from '../components/new_arrival_section/NewArrivals'
import TopCategories from '../components/top_categories_section/TopCategories'
const Home = () => {
  return (
		<>
			<Box component="main" sx={{ mb: 5.5 }}>
				<Grid container spacing={5.5}>
					<Grid item xs={12}>
						<Hero />
					</Grid>
					<Grid item xs={12}>
						<FlashSellSection />
					</Grid>
					<Grid item xs={12}>
						<TopCategories />
					</Grid>
					<Grid item xs={12}>
						<NewArrivals />
					</Grid>
					
				</Grid>
			</Box>
		</>
  );
}

export default Home