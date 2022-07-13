import { AddShoppingCartSharp, FavoriteBorder } from '@mui/icons-material';
import { alpha, Box, Card, CardContent, CardMedia, IconButton, Stack, styled, Tooltip, tooltipClasses, Typography } from '@mui/material'
import React from 'react'


const CustomToolTip = styled(({ className, ...props }) => (
	<Tooltip {...props} arrow classes={{ popper: className }}/>
))(({ theme }) => ({
	[`& .${tooltipClasses.arrow}`]: {
		color: alpha(theme.palette.secondary.main, 0.75),
	},
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: alpha(theme.palette.secondary.main, 0.75),
	},
}));

const NewProductItem = ({product}) => {
    return (
		<Card
			elevation={0}
			sx={{
				position: "relative",
				borderRadius: "0.5rem",
				"&:hover": {
					".wishlistToolTip": { opacity: "1", visibility: "visible" },
				},
			}}
		>
			<CardMedia
				component="img"
				image={product.thumbnail}
				alt="product thumbnail"
				sx={{ mb: 1 }}
			/>
			<CardContent sx={{ p: 0 }}>
				<Typography
					variant="h6"
					color="initial"
					noWrap
					sx={{ fontSize: "1.05rem", mb: 0.15 }}
				>
					{product.name}
				</Typography>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Typography
						variant="body1"
						color="primary"
						fontWeight={500}
					>
						{product.price}$
					</Typography>
					<IconButton aria-label="" color="primary" size="small">
						<AddShoppingCartSharp fontSize="small" />
					</IconButton>
				</Stack>
			</CardContent>
			<Box
				className="wishlistToolTip"
				sx={{
					position: "absolute",
					top: 10,
					right: 10,
					opacity: "0",
					visibility: "hidden",
					transition: "0.2s",
				}}
			>
				<CustomToolTip title="Wishlist" placement="left" arrow>
					<IconButton color="secondary" size="small">
						<FavoriteBorder />
					</IconButton>
				</CustomToolTip>
			</Box>
		</Card>
	);
}

export default NewProductItem