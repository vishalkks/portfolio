import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  
  return (
    <Card sx={{ borderRadius: '16px', ':hover': {
		boxShadow: '0 10px 2px -2px gray'
	  },}}>
      
      <CardMedia
        component="img"
        image={project.image}
        alt={project.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {project.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="github" component={project.link ? Link : 'button'} to={project.link} target="_blank" rel="noopener noreferrer" disabled={!project.link}>
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
