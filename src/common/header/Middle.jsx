import { AppBar, styled, Toolbar, Typography, alpha, InputBase, Container, Box, IconButton, Badge, Avatar, Menu, MenuItem } from "@mui/material";
import React from 'react'
import {
	Search as SearchIcon,
	ShoppingCart,
	Favorite,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";

const userMenuItems = ["Profile", "Account", "Dashboard", "Logout"];


const Search = styled("div")(({ theme }) => ({
	position: "relative",
    color: '#333',
    border: '1px solid #ccc',
    borderRadius: '10rem',
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		width: "100%",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
    color: '#777'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1.25, 1.25, 1.25, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
}));




const Middle = () => {
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

    return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				elevation={0}
				sx={{ backgroundColor: "white", py: 1 }}
			>
				<Container maxWidth="xl">
					<Toolbar
						sx={{
							padding: "0 !important",
							gap: { xs: 3, md: 4, lg: 5 },
						}}
					>
						{/* Brand */}
						<Typography
							variant="h5"
							component="h1"
							sx={{
								color: "primary.main",
								fontWeight: 700,
								fontSize: "2rem",
								fontStyle: "italic",
								pr: "0.1rem",
							}}
						>
							EShop
						</Typography>

						{/* Search */}
						<Search>
							<SearchIconWrapper>
								<SearchIcon />
							</SearchIconWrapper>
							<StyledInputBase
								placeholder="Search…"
								inputProps={{ "aria-label": "search" }}
							/>
						</Search>

						{/* Cart, Wishlist, Profile */}
						<Box sx={{ display: "flex", color: "#999" }}>
							<Box sx={{ flexGrow: 1, display: "flex" }}>
								<IconButton
									size="large"
									color="inherit"
									sx={{
										padding: 0,
										marginRight: "0.5rem",
										"&:hover": {
											backgroundColor:
												"transparent !important",
										},
									}}
									aria-controls="menu-category"
									aria-haspopup="true"
									onClick={handleOpenUserMenu}
								>
									<Avatar
										alt="Cindy Baker"
										src="https://mui.com/static/images/avatar/3.jpg"
										sx={{ width: 40, height: 40 }}
									/>
								</IconButton>
								<Menu
									sx={{ mt: "45px" }}
									id="menu-appbar"
									anchorEl={anchorElUser}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									open={Boolean(anchorElUser)}
									onClose={handleCloseUserMenu}
								>
									{userMenuItems.map((item, i) => (
										<MenuItem
											key={i}
											onClick={handleCloseUserMenu}
											sx={{
												fontSize: '0.975rem',
												color: grey[700],
												textTransform: "capitalize",
												"&:hover, &.active": {
													color: "primary.main",
													backgroundColor: (theme) =>
														alpha(
															theme.palette
																.primary.main,
															0.04
														),
												},
											}}
										>
											<Typography textAlign="center" fontSize="inherit">
												{item}
											</Typography>
										</MenuItem>
									))}
								</Menu>
							</Box>
							<IconButton
								size="large"
								aria-label="show 4 new mails"
								color="inherit"
							>
								<Badge badgeContent={2} color="error">
									<ShoppingCart />
								</Badge>
							</IconButton>
							<IconButton
								size="large"
								aria-label="show 17 new notifications"
								color="inherit"
								sx={{
									display: { xs: "none", md: "inline-flex" },
								}}
							>
								<Badge badgeContent={8} color="error">
									<Favorite />
								</Badge>
							</IconButton>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
}

export default Middle