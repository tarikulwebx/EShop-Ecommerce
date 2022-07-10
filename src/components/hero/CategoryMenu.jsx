import { alpha, List, ListItem, ListItemButton, ListItemIcon, Paper, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react'
import { FaBaby, FaGamepad, FaGifts, FaPlug, FaTshirt } from "react-icons/fa";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";


const categories = [
	{
		name: "Fashion",
		icon: <FaTshirt />,
	},
	{
		name: "Electronics",
		icon: <FaPlug />,
	},
	{
		name: "Gadgets",
		icon: <FaGamepad />,
	},

	{
		name: "Gifts",
		icon: <FaGifts />,
	},
	{
		name: "Baby Toys",
		icon: <FaBaby />,
	},
    {
		name: "Gadgets",
		icon: <FaGamepad />,
	},

	{
		name: "Gifts",
		icon: <FaGifts />,
	},
	{
		name: "Baby Toys",
		icon: <FaBaby />,
	},
    {
		name: "Gifts",
		icon: <FaGifts />,
	},
	{
		name: "Baby Toys",
		icon: <FaBaby />,
	},
    {
		name: "Gifts",
		icon: <FaGifts />,
	},
	{
		name: "Baby Toys",
		icon: <FaBaby />,
	},
    {
		name: "Gifts",
		icon: <FaGifts />,
	},
	{
		name: "Baby Toys",
		icon: <FaBaby />,
	},
    {
		name: "Gifts",
		icon: <FaGifts />,
	},
	{
		name: "Baby Toys",
		icon: <FaBaby />,
	},
    
];

const CategoryMenu = () => {
    return (
		<Paper
			elevation={2}
			sx={{
				borderRadius: 3,
				minWidth: "240px",
				".simplebar-track.simplebar-vertical": {
					width: "8px",
				},
				".simplebar-scrollbar:before": {
					backgroundImage: (theme) =>
						"linear-gradient(" +
						theme.palette.primary.light +
						", " +
						theme.palette.secondary.light +
						")",
				},
				display: { xs: "none", md: "block", position: 'relative' },
			}}
		>
			<SimpleBar style={{ height: "100%", position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}>
				<List
					sx={{
						minWidth: "220px",
						height: "100%",
					}}
				>
					{categories.map((category, i) => (
						<ListItem
							key={i}
							sx={{
								p: 0,
							}}
						>
							<ListItemButton
								sx={{
									color: grey[700],
									textTransform: "capitalize",
									"&:hover, &.active": {
										color: "primary.main",
										backgroundColor: (theme) =>
											alpha(
												theme.palette.primary.main,
												0.04
											),
									},
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: 2.5,
										fontSize: "1.125rem",
										color: "primary.light",
									}}
								>
									{category.icon}
								</ListItemIcon>
								<Typography sx={{ fontSize: "0.975rem" }}>
									{category.name}
								</Typography>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</SimpleBar>
		</Paper>
	);
}

export default CategoryMenu