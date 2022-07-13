import { alpha, Avatar, Box, Chip, Grid, Paper } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react'

const CategoryItem = ({category}) => {
	const images = category.images;

    return (
		<Paper sx={{ p: 2, borderRadius: "0.5rem" }}>
			<Box sx={{ position: "relative" }}>
				<Grid container>
					{images.map((image, i) => (
						<Grid item xs={4} key={i}>
							<Avatar
								src={image}
								alt="product-thumb"
								variant="square"
								sx={{ width: "100%", height: "100%" }}
							/>
						</Grid>
					))}
				</Grid>
				<Chip
					label={category.name}
					color="secondary"
					size="small"
					sx={{
						position: "absolute",
						top: 10,
						left: 10,
						textTransform: "lowercase",
					}}
				/>
				<Chip
					label={category.total_monthly_order + " orders this month"}
					size="small"
					sx={{
						position: "absolute",
						top: 10,
						right: 10,
						textTransform: "lowercase",
						backgroundColor: (theme) =>
							alpha(blue[50], 1),
					}}
				/>
			</Box>
		</Paper>
	);
};

export default CategoryItem