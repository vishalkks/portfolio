import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import React from "react";
import EXPERIENCE from "../../info/experience.json";

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  date: string;
  desc: string;
  link?: string;
}

const Experience: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const experienceData: ExperienceItem[] = EXPERIENCE;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", borderRadius: "16px" }}>
      <Box sx={{ width: "100%", borderRadius: "16px" }}>
        <Tabs value={value} onChange={handleChange}>
          {experienceData.map((item) => (
            <Tab label={item.company} key={item.id} />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>
        {experienceData.map(
          (item) =>
            value === item.id - 1 && (
              <Box key={item.id}>
                <Box>
                  <Typography variant="body1" fontSize={"22px"} component="div">
                    {item.position}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.date}
                  </Typography>
                  <br />
                  {item.link ? (
                    <Button
                      variant="outlined"
                      href={item.link}
                      target="_blank"
                      sx={{
                        borderRadius: 4,
                        textTransform: "none",
                        borderColor: "#000",
                        color: "#000",
                        fontFamily: "Roboto, sans-serif",
                      }}
                      style={{ fontFamily: "Roboto" }}
                    >
                      <Typography
                        variant="button"
                        style={{
                          fontFamily: "Roboto",
                          fontWeight: 400,
                          letterSpacing: "-0.5px",
                        }}
                      >
                        Featured link
                      </Typography>
                    </Button>
                  ) : null}
                </Box>
                <br />
                <Typography style={{ whiteSpace: "pre-line" }} key={item.id}>
                  {item.desc}
                </Typography>
              </Box>
            )
        )}
      </Box>
    </Box>
  );
};

export default Experience;
