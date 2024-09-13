import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import useControlPanel from "./hooks/use-control-panel";
import BrightnessControl from "./components/BrightnessControl/BrightnessControl";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
import ProgressIndicators from "./components/BrightnessIndicator/BrightnessIndicator";
import TimeLeft from "./components/TimeLeft/TimeLeft";

const fetchWidgetState = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        brightness: 20, // %
        timeLeft: 12, // h
        nightVision: false,
        duskTillDawn: true,
        flashing: true,
      });
    }, 2000);
  });

const ControlPanel: React.FC = () => {
  const {
    brightness,
    setBrightness,
    timeLeft,
    setTimeLeft,
    nightVision,
    setNightVision,
    duskTillDawn,
    setDuskTillDawn,
    flashing,
    setFlashing,
    increaseBrightness,
    decreaseBrightness,
    toggleNightVision,
    toggleDuskTillDawn,
    toggleFlashing,
  } = useControlPanel();

  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    fetchWidgetState().then((data: any) => {
      setBrightness(data.brightness);
      setTimeLeft(`${data.timeLeft}h`);
      setNightVision(data.nightVision);
      setDuskTillDawn(data.duskTillDawn);
      setFlashing(data.flashing);
      setLoading(false); 
    });
  }, [setBrightness, setTimeLeft, setNightVision, setDuskTillDawn, setFlashing]);

  return (
    <Box
      sx={{
        width: 500,
        height: 240, 
        backgroundColor: "#10243e",
        padding: 2,
        borderRadius: 2,
        position: "relative",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "10%",
        }}
      >
        <Box sx={{ width: "20%", display: "flex", alignItems: "center", marginLeft: 1, }}>
          <Typography variant="h6" noWrap>
            THR 08
          </Typography>
        </Box>

        <Box sx={{ width: "80%", display: "flex", alignItems: "center" }}>
          <ProgressIndicators brightness={brightness} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "90%", 
          marginTop: 2,
        }}
      >
        <Box sx={{ width: "20%", display: "flex", alignItems: "center" }}>
          <BrightnessControl
            brightness={brightness}
            onIncrease={increaseBrightness}
            onDecrease={decreaseBrightness}
          />
        </Box>

        <Box
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingLeft: 2,
          }}
        >
          <TimeLeft 
            timeLeft={timeLeft}
          />

          <ToggleSwitch label="Night Vision" checked={nightVision} onChange={toggleNightVision} />
          <ToggleSwitch label="Dusk Till Dawn" checked={duskTillDawn} onChange={toggleDuskTillDawn} />
          <ToggleSwitch label="Flashing" checked={flashing} onChange={toggleFlashing} />
        </Box>
      </Box>
      {loading && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2, 
          }}
        >
          <CircularProgress />
        </Box>
      )}

    </Box>
  );
};

export default ControlPanel;
