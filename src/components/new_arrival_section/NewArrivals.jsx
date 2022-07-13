import { FiberNew, NewReleases } from '@mui/icons-material';
import { Box, Container, Grid, Paper } from '@mui/material';
import React from 'react'
import SectionHead from '../../common/section_head/SectionHead';
import NewProductItem from "./NewProductItem";

import ProductImg1 from "../../images/products/product_1.jpg";
import ProductImg2 from "../../images/products/product_2.jpg";
import ProductImg3 from "../../images/products/product_3.jpg";
import ProductImg4 from "../../images/products/product_4.jpg";
import ProductImg5 from "../../images/products/product_5.jpg";
import ProductImg6 from "../../images/products/product_6.jpg";
import ProductImg7 from "../../images/products/product_7.jpg";
import ProductImg8 from "../../images/products/product_8.jpg";
import ProductImg9 from "../../images/products/product_9.jpg";
import ProductImg10 from "../../images/products/product_10.jpg";


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
];


const NewArrivals = () => {
    return (
		<Box component="section">
			<SectionHead
				title="New Arrivals"
				icon={<NewReleases color="primary" />}
				viewLink=""
			/>
			<Container maxWidth="xl">
				<Paper sx={{ backgroundColor: "#fff", p: 3, borderRadius: "0.5rem" }}>
					<Grid container spacing={3}>
						{NewProducts.map((product, i) => (
							<Grid item xs={12} sm={6} lg={3} xl={2} key={i}>
                                <NewProductItem product={product} />
                            </Grid>
						))}
					</Grid>
				</Paper>
			</Container>
		</Box>
	);
}

export default NewArrivals