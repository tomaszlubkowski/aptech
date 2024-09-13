import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TimeLeft from './TimeLeft';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';

jest.mock('@mui/icons-material/BatteryChargingFull', () => () => <span data-testid="battery-icon" />);

describe('TimeLeft component', () => {
  test('renders TimeLeft component with correct text and icon', () => {
    render(<TimeLeft timeLeft="12h" />);

    const icon = screen.getByTestId('battery-icon');
    expect(icon).toBeInTheDocument();

    const label = screen.getByText(/Time left/i);
    expect(label).toBeInTheDocument();

    const timeValue = screen.getByText(/12h/i);
    expect(timeValue).toBeInTheDocument();
  });

  test('renders with different timeLeft values', () => {
    render(<TimeLeft timeLeft="5h" />);

    const timeValue = screen.getByText(/5h/i);
    expect(timeValue).toBeInTheDocument();
  });
});
