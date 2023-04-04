import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import EXPERIENCE from '../../info/experience';
import { Button } from '@mui/material';

export default function Experience() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
	<Box sx={{ width: '100%',  borderRadius:'16px' }}>
		<Box sx={{ width: '100%', borderRadius:'16px'}}>
		<Tabs value={value} onChange={handleChange}>
			{EXPERIENCE.map((item) => (
				<Tab label={item.company} key={item.id} />
			))}
		</Tabs>
		</Box>
		<Box sx={{ padding: 2 }}>
		{EXPERIENCE.map((item) => (
			value === item.id-1 && (
				<Box key={item.id}>
					<Box>
						<Typography variant="body" fontSize={"22px"} component="div">
							{item.position}
						</Typography>
						<Typography variant="body2" color="text.secondary" >
							{item.date}
						</Typography><br/>
						{item.link?
						<Button variant="outlined" href={item.link} target="_blank" sx={{
							borderRadius: 4,
							textTransform: 'none',
							borderColor: '#000',
							color: '#000',
							fontFamily: 'Roboto, sans-serif',
						  }} style={{fontFamily:'Roboto'}}>
							<Typography variant="button" style={{ fontFamily: 'Roboto', fontWeight: 400, letterSpacing: '-0.5px' }}>
								Featured link
							</Typography>
					  	</Button>
						: null}
					</Box><br/>
				<Typography style={{whiteSpace: 'pre-line'}} key={item.id}>
					{item.desc}
				</Typography>
				</Box>)
		))}
	</Box>
  </Box>
  
  );
}