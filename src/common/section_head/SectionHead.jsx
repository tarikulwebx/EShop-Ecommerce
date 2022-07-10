import { ArrowRight } from '@mui/icons-material';
import { Box, Container, Link as MuiLink, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors';
import React from 'react'
import { Link } from 'react-router-dom';

const SectionHead = ({title="", icon="", viewLink=""}) => {
    return (
		<Container maxWidth="xl" sx={{ mb: 1 }}>
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="space-between"
			>
				<Box>
					<Stack direction="row" alignItems="center" spacing={0.5}>
						{icon}
						<Typography variant="h5" sx={{ fontWeight: "600" }}>
							{title}
						</Typography>
					</Stack>
				</Box>
				<Box>
					<Stack direction="row" alignItems="center" spacing={0.25}>
						<MuiLink
							component={Link}
							to={viewLink}
							underline="none"
							sx={{
								fontWeight: "500",
								"&:hover": { opacity: "0.75" },
							}}
						>
							View all
						</MuiLink>
						<ArrowRight sx={{ color: grey[600] }} />
					</Stack>
				</Box>
			</Stack>
		</Container>
	);
}

export default SectionHead