import React from "react";
import { Grid, LinearProgress } from "@mui/material";

interface ProgressIndicatorsProps {
  brightness: number;
}

const BrightnessIndicator: React.FC<ProgressIndicatorsProps> = ({ brightness }) => {

  const activeBars = Math.floor(brightness / 20); 

  return (
    <Grid container spacing={1} sx={{ marginBottom: 2, marginTop: 1 }}>
      {[1, 2, 3, 4, 5].map((_, index) => (
        <Grid item key={index} sx={{}}>
          <LinearProgress
            variant="determinate"
            value={100}
            sx={{
              width: 70,
              height: 10,
              backgroundColor: "#254a6b",
              "& .MuiLinearProgress-bar": {
                backgroundColor: index < activeBars ? "#50b9f9" : "#254a6b",
              },
            }}
            data-testid="linear-progress-bar"
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default BrightnessIndicator;
