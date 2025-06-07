import GitHubIcon from "@mui/icons-material/GitHub";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  image: string;
  link: string;
  desc: string;
  tags: string[];
  date: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        ":hover": {
          boxShadow: "0 10px 2px -2px gray",
        },
      }}
    >
      <CardMedia component="img" image={project.image} alt={project.title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {project.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="github"
          component={project.link ? Link : "button"}
          to={project.link}
          target="_blank"
          rel="noopener noreferrer"
          disabled={!project.link}
        >
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
