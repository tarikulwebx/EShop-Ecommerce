import { ArrowDropDown, Menu as MenuIcon, ViewComfy } from '@mui/icons-material';
import { alpha, AppBar, Box, Button, Container, IconButton, ListItemIcon, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { grey } from '@mui/material/colors';
import React from 'react'
import { FaBaby, FaGamepad, FaGifts, FaPlug, FaTshirt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const pages = [
	{
		title: "Home",
		to: "/",
	},
	{
		title: "pages",
		to: "",
	},
	{
		title: "User Account",
		to: "",
	},
	{
		title: "Track My Order",
		to: "",
	},
	{
		title: "Contact",
		to: "",
	},
	{
		title: "About",
		to: "/about",
	},
];

const categories = [
    {
        name: "Fashion",
        icon: <FaTshirt />
    },
    {
        name: "Electronics",
        icon: <FaPlug />
    },
    {
        name: "Gadgets",
        icon: <FaGamepad />
    },
    
    {
        name: "Gifts",
        icon: <FaGifts />
    },
    {
        name: "Baby Toys",
        icon: <FaBaby />
    },
    
];

const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElCategory, setAnchorElCategory] = React.useState(null);

    const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

    const handleOpenCategoryMenu = (event) => {
		setAnchorElCategory(event.currentTarget);
	};

    const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

    const handleCloseCategoryMenu = () => {
            setAnchorElCategory(null);
    };

    return (
		<AppBar
			position="relative"
			elevation={0}
			component="div"
			sx={{
				backgroundColor: "white",
				pb: 1.5,
				boxShadow: "0 4px 4px -2px " + grey[100],
			}}
		>
			<Container maxWidth="xl">
				<Toolbar
					sx={{
						padding: "0 !important",
						minHeight: "auto !important",
						justifyContent: "space-between",
					}}
				>
					<Box>
						{/* Categories Menu */}
						<Box sx={{ flexGrow: 1, display: "flex" }}>
							<Button
								aria-label="categories menu control"
								aria-controls="menu-category"
								aria-haspopup="true"
								onClick={handleOpenCategoryMenu}
								disableElevation
								startIcon={<ViewComfy fontSize="large" />}
								endIcon={<ArrowDropDown />}
								sx={{
									backgroundColor: (theme) =>
										alpha(theme.palette.primary.main, 0.04),
								}}
							>
								Categories
							</Button>
							<Menu
								id="menu-category"
								anchorEl={anchorElCategory}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElCategory)}
								onClose={handleCloseCategoryMenu}
								sx={{
									display: "block",
									marginTop: 0.6,
								}}
							>
								{categories.map((category, i) => (
									<MenuItem
										key={i}
										onClick={handleCloseCategoryMenu}
										className={
											category.name === "Electronics"
												? "active"
												: ""
										}
										sx={{
											color: grey[700],
											textTransform: "capitalize",
											"&:hover, &.active": {
												color: "primary.main",
												backgroundColor: (theme) =>
													alpha(
														theme.palette.primary
															.main,
														0.04
													),
											},
										}}
									>
										<ListItemIcon>
											{category.icon}
										</ListItemIcon>
										<Typography
											sx={{ fontSize: "0.975rem" }}
										>
											{category.name}
										</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
					</Box>
					<Box>
						{/* Large Device Menu */}
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "none", md: "flex" },
							}}
						>
							{pages.map((page) => (
								<Button
									key={page.title}
									className={
										page.title === "Home" ? "active" : ""
									}
									onClick={handleCloseNavMenu}
									sx={{
										ml: 1,
										display: "block",
										textTransform: "capitalize",
										fontSize: "0.95rem",
										fontWeight: 400,
										py: "0.125rem",
										color: grey[700],
										"&:hover": {
											color: "primary.main",
										},
										"&.active": {
											backgroundColor: (theme) =>
												alpha(
													theme.palette.primary.main,
													0.04
												),
											color: "primary.main",
										},
									}}
									component={Link}
									to={page.to}
								>
									{page.title}
								</Button>
							))}
						</Box>

						{/* Mobile Menu */}
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "flex", md: "none" },
							}}
						>
							<IconButton
								// size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="primary"
							>
								<MenuIcon sx={{ fontSize: "2rem" }} />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}
							>
								{pages.map((page) => (
									<MenuItem
										key={page.title}
										onClick={handleCloseNavMenu}
										className={
											page.title === "Home"
												? "active"
												: ""
										}
										sx={{
											color: grey[700],
											textTransform: "capitalize",
											"&:hover, &.active": {
												color: "primary.main",
												backgroundColor: (theme) =>
													alpha(
														theme.palette.primary
															.main,
														0.04
													),
											},
										}}
										component={Link}
										to={page.to}
									>
										<Typography textAlign="center">
											{page.title}
										</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default Navbar