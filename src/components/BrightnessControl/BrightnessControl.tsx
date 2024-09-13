import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { grey } from '@mui/material/colors';

interface BrightnessControlProps {
  brightness: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const BrightnessControl: React.FC<BrightnessControlProps> = ({ brightness, onIncrease, onDecrease }) => {
  return (
    <Box display="flex" flexDirection={'column'} justifyContent="space-between" alignItems="center" mb={2}>
      <Button
        variant="contained"
        sx={{ minWidth: 80, minHeight: 50, backgroundColor: "#2C81F6" }}
        onClick={onIncrease}
        data-testid="increase-button"
      >
        <AddIcon fontSize='large'/>
      </Button>

      <Box
        display="flex"
        justifyContent="center"
        sx={{ fontWeight: "bold", border: 1, padding: 1, borderRadius: 2, borderColor: grey, marginY: 2, minWidth: 60 }}
      >
        <Typography variant="h5">
          {brightness}%
        </Typography>
      </Box>

      <Button
        variant="contained"
        sx={{ minWidth: 80, minHeight: 50, backgroundColor: "#2C81F6" }}
        onClick={onDecrease}
        data-testid="decrease-button"
      >
        <RemoveIcon fontSize='large'/>
      </Button>
    </Box>
  );
};

export default BrightnessControl;
