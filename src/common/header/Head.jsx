import { Phone, Email, Tour } from "@mui/icons-material";
import { Box, Button, Container, Grid, styled } from '@mui/material'
import React from 'react'

const CustomNavItem = styled(Button)(({ theme }) => ({
	color: "white",
	textTransform: "none",
	fontWeight: "400",
    marginRight: '0.5rem',
    minWidth: 'auto',
	".MuiButton-startIcon": { marginRight: "0.25rem" },
    "&:hover": {
        color: "#ccc"
    },
    "&:last-child": {
        marginRight: 0
    }
}));

const Head = () => {
    return (
		<Box
			sx={{
				backgroundColor: "secondary.light",
				color: "white",
				py: "0.3rem",
				fontSize: "0.85rem",
				display: { xs: "none", md: "block" },
			}}
		>
			<Container maxWidth="xxl">
				<Grid container>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							width: "100%",
						}}
					>
						<Box>
							<CustomNavItem
								variant="text"
								size="small"
								startIcon={<Phone />}
								mr={5}
								href="tel:0123456789"
							>
								+88012 3456 789
							</CustomNavItem>
							<CustomNavItem
								variant="text"
								size="small"
								startIcon={<Email />}
								href="mailto:example@mail.com"
							>
								example@mail.com
							</CustomNavItem>
						</Box>
						<Box>
							<CustomNavItem
								variant="text"
								size="small"
							>
								FAQs
							</CustomNavItem>
                            <CustomNavItem
								variant="text"
								size="small"
							>
								Helps
							</CustomNavItem>
                            <CustomNavItem
								variant="text"
								size="small"
							>
								Contact
							</CustomNavItem>
                            
                            <CustomNavItem
								variant="text"
								size="small"
                                startIcon= {<Tour />}
							>
								BD
							</CustomNavItem>
                            
						</Box>
					</Box>
				</Grid>
			</Container>
		</Box>
	);
}

export default Head