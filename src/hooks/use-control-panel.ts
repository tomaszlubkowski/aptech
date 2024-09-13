import { useState } from "react";

const useControlPanel = () => {
  const [brightness, setBrightness] = useState(40);
  const [timeLeft, setTimeLeft] = useState("8h");
  const [nightVision, setNightVision] = useState(false);
  const [duskTillDawn, setDuskTillDawn] = useState(false);
  const [flashing, setFlashing] = useState(false);

  const increaseBrightness = () => setBrightness((prev) => Math.min(prev + 20, 100));
  const decreaseBrightness = () => setBrightness((prev) => Math.max(prev - 20, 0));

  const toggleNightVision = () => setNightVision((prev) => !prev);
  const toggleDuskTillDawn = () => setDuskTillDawn((prev) => !prev);
  const toggleFlashing = () => setFlashing((prev) => !prev);

  return {
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
  };
};

export default useControlPanel;
