import { Box, Container, Typography } from '@mui/material'
import { grey } from '@mui/material/colors';
import React from 'react'

const CopyrightFooter = () => {
  return (
		<Box sx={{ boxShadow: "0 -5px 5px -5px rgba(0, 0, 0, 0.15)", py: 3 }}>
			<Container sx={{ textAlign: "center" }}>
				<Typography variant="body1" sx={{ color: grey[300] }}>
					Copyright &copy;{new Date().getFullYear()} All Rights
					Reserved
				</Typography>
			</Container>
		</Box>
  );
}

export default CopyrightFooter