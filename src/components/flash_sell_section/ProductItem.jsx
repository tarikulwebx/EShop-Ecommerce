import { AddShoppingCartSharp, FavoriteBorder, Star, StarHalf, StarOutline } from '@mui/icons-material';
import { alpha, Box, Card, CardContent, CardMedia, Chip, IconButton, Stack, styled, Tooltip, tooltipClasses, Typography } from '@mui/material';
import { yellow } from '@mui/material/colors';
import React from 'react'


const CustomToolTip = styled(({ className, ...props }) => (
	<Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.arrow}`]: {
		color: alpha(theme.palette.secondary.main, 0.75),
	},
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: alpha(theme.palette.secondary.main, 0.75),
	},
}));

const CardVertical = ({ product }) => {

	const fillStarsCount = Math.floor(product.avg_rating);
	const emptyStarsCount = 5-Math.ceil(product.avg_rating);
	const halfStarsCount = 5 - (fillStarsCount + emptyStarsCount);


	return (
		<Card
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
			/>
			<CardContent sx={{ pb: "1rem !important" }}>
				<Typography
					variant="h6"
					color="initial"
					noWrap
					sx={{ fontSize: "1.1rem", mb: 0.25 }}
				>
					{product.name}
				</Typography>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="end"
				>
					<div>
						<Stack
							direction="row"
							sx={{ color: yellow[800], mb: 0.25 }}
						>
							{[...Array(fillStarsCount)].map((e, i) => (
								<Star key={i} sx={{ fontSize: "1.15rem" }} />
							))}

							{[...Array(halfStarsCount)].map((e, i) => (
								<StarHalf
									key={i}
									sx={{ fontSize: "1.15rem" }}
								/>
							))}

							{[...Array(emptyStarsCount)].map((e, i) => (
								<StarOutline
									key={i}
									sx={{ fontSize: "1.15rem" }}
								/>
							))}

							<Typography
								variant="body2"
								color={yellow[900]}
								fontWeight={500}
								ml={0.75}
							>
								({product.avg_rating})
							</Typography>
						</Stack>
						<Typography
							variant="body1"
							color="primary"
							fontWeight={500}
						>
							{product.price}$
						</Typography>
					</div>
					<IconButton aria-label="" color="primary">
						<AddShoppingCartSharp />
					</IconButton>
				</Stack>
			</CardContent>

			<Chip
				label={product.off_percent + "% Off"}
				color="primary"
				size="small"
				sx={{
					position: "absolute",
					top: 10,
					left: 10,
					p: "0.25rem",
					fontWeight: "500",
					fontSize: "0.75rem",
				}}
			/>

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
					<IconButton color="secondary">
						<FavoriteBorder />
					</IconButton>
				</CustomToolTip>
			</Box>
		</Card>
	);
};

export default CardVertical