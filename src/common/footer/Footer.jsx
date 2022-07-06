import { Avatar, Box, Button, Container, Grid, Link as MuiLink, List, ListItem, ListItemButton, ListItemText, styled, Typography } from '@mui/material'
import { grey } from '@mui/material/colors';
import React from 'react'
import PlayStoreImageIcon from "../../images/playstore-icon.png";
import AppStoreImageIcon from "../../images/apple_appstore_icon.png";

const shop_menu_items = [
    {
        name: 'Careers',
        to: '',
    },
    {
        name: 'Our Stores',
        to: '',
    },
    {
        name: 'Terms & Conditions',
        to: '',
    },
    {
        name: 'Privacy Policy',
        to: '',
    },
    {
        name: 'About Us',
        to: '',
    },
    
];


const customer_care_menu_items = [
    {
        name: 'Help Center',
        to: '',
    },
    {
        name: 'How to Busy',
        to: '',
    },
    {
        name: 'Track your order',
        to: '',
    },
    {
        name: 'Returns & Refunds',
        to: '',
    },
    {
        name: 'Payments Security',
        to: '',
    },
    
];




const ColumnTitle = styled(Typography)(({ theme }) => ({
    fontWeight: '600',
    color: grey[100],
	marginBottom: "0.5rem"
}))

const Footer = () => {
    return (
		<Box
			component="footer"
			sx={{ backgroundColor: "secondary.light", color: "white", py: 7 }}
		>
			<Container maxWidth="xl">
				<Grid container rowSpacing={4} columnSpacing={3}>
					{/* Grid 1 */}
					<Grid item xs={12} sm={6} lg={3}>
						<Typography
							variant="h4"
							component="h1"
							color="primary.main"
							sx={{
								fontWeight: "700",
								fontStyle: "italic",
								mb: 2,
							}}
						>
							EShop
						</Typography>
						<Typography
							variant="body1"
							sx={{ color: grey[400], fontSize: "0.9rem", mb: 3 }}
						>
							Sit et sanctus accusam dolores erat sadipscing.
							Aliquyam elitr duo accusam et, magna dolores
							gubergren rebum consetetur sanctus tempor diam, sed
							et gubergren invidunt at amet, elitr amet ea
							consetetur.
						</Typography>
						<Button
							variant="contained"
							color="secondary"
							startIcon={
								<Avatar
									src={PlayStoreImageIcon}
									variant="square"
								/>
							}
							sx={{
								textTransform: "capitalize",
								color: grey[100],
								mr: 2,
								py: 1,
								mb: 1.25
							}}
						>
							Google Play
						</Button>
						<Button
							variant="contained"
							color="secondary"
							startIcon={
								<Avatar
									src={AppStoreImageIcon}
									variant="square"
								/>
							}
							sx={{
								textTransform: "capitalize",
								color: grey[100],
								py: 1,
								mb: 1.25
							}}
						>
							App Store
						</Button>
					</Grid>

					{/* Grid 2 */}
					<Grid item xs={12} sm={6} lg={3}>
						<ColumnTitle variant="h5" component="h1">
							Shop Info
						</ColumnTitle>
						<List>
							{shop_menu_items.map((item, index) => (
								<ListItem
									key={index}
									disablePadding
									sx={{
										"&:hover": { color: "primary.light" },
									}}
								>
									<ListItemButton
										color="secondary.light"
										sx={{
											p: "0.2rem 0.5rem",
											borderRadius: 1,
											".MuiTypography-root": {
												fontSize: "0.95rem !important",
											},
										}}
									>
										<ListItemText primary={item.name} />
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Grid>

					{/* Grid 3 */}
					<Grid item xs={12} sm={6} lg={3}>
						<ColumnTitle variant="h5" component="h1">
							Customer Care
						</ColumnTitle>
						<List>
							{customer_care_menu_items.map((item, index) => (
								<ListItem
									key={index}
									disablePadding
									sx={{
										"&:hover": { color: "primary.light" },
									}}
								>
									<ListItemButton
										color="secondary.light"
										sx={{
											p: "0.2rem 0.5rem",
											borderRadius: 1,
											".MuiTypography-root": {
												fontSize: "0.95rem !important",
											},
										}}
									>
										<ListItemText primary={item.name} />
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Grid>

					{/* Grid 4 */}
					<Grid item xs={12} sm={6} lg={3}>
						<ColumnTitle variant="h5" component="h1">
							Contact Info
						</ColumnTitle>
						<Box sx={{ mt: 2.25, ml: 1 }}>
							<Typography
								variant="body1"
								sx={{
									color: grey[300],
									fontSize: "0.95rem",
								}}
							>
								Rangpur-5400, Rangpur,{" "}
							</Typography>
							<Typography
								variant="body1"
								sx={{
									color: grey[300],
									fontSize: "0.95rem",
									mb: 1.5,
								}}
							>
								Bangladesh
							</Typography>
							<Typography
								variant="body1"
								sx={{
									color: grey[300],
									fontSize: "0.95rem",
									mb: 1.5,
								}}
							>
								Email:{" "}
								<MuiLink
									href="mailto:example@mail.com"
									sx={{
										textDecoration: "none",
										color: grey[300],
										fontWeight: "500",
										"&:hover": { color: "primary.light" },
									}}
								>
									example@mail.com
								</MuiLink>
							</Typography>
							<Typography
								variant="body1"
								sx={{ color: grey[300], fontSize: "0.95rem" }}
							>
								Phone:{" "}
								<MuiLink
									href="tel:012345678"
									sx={{
										textDecoration: "none",
										color: grey[300],
										fontWeight: "500",
										"&:hover": { color: "primary.light" },
									}}
								>
									+88012 345 678
								</MuiLink>
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default Footer