import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ControlPanel from './ControlPanel';
import * as controlPanelHook from './hooks/use-control-panel';

jest.mock('./components/BrightnessControl/BrightnessControl', () => () => <div data-testid="brightness-control" />);
jest.mock('./components/ToggleSwitch/ToggleSwitch', () => ({ label, checked }) => (
  <div data-testid={`toggle-${label.replace(/ /g, '-').toLowerCase()}`}>{`${label}: ${checked}`}</div>
));
jest.mock('./components/BrightnessIndicator/BrightnessIndicator', () => ({ brightness }) => (
  <div data-testid="progress-indicator">{`Brightness: ${brightness}`}</div>
));
jest.mock('./components/TimeLeft/TimeLeft', () => ({ timeLeft }) => (
  <div data-testid="time-left">{`Time Left: ${timeLeft}`}</div>
));

const mockUseControlPanel = {
  brightness: 40,
  setBrightness: jest.fn(),
  timeLeft: '12h',
  setTimeLeft: jest.fn(),
  nightVision: false,
  setNightVision: jest.fn(),
  duskTillDawn: true,
  setDuskTillDawn: jest.fn(),
  flashing: false,
  setFlashing: jest.fn(),
  increaseBrightness: jest.fn(),
  decreaseBrightness: jest.fn(),
  toggleNightVision: jest.fn(),
  toggleDuskTillDawn: jest.fn(),
  toggleFlashing: jest.fn(),
};

const fetchWidgetState = jest.fn(() =>
  Promise.resolve({
    brightness: 20,
    timeLeft: 12,
    nightVision: false,
    duskTillDawn: true,
    flashing: true,
  })
);

describe('ControlPanel component', () => {
  beforeEach(() => {
    jest.spyOn(controlPanelHook, 'default').mockImplementation(() => mockUseControlPanel);
  });

  test('renders the loading spinner initially', () => {
    render(<ControlPanel />);
    const spinner = screen.getByRole('progressbar');
    expect(spinner).toBeInTheDocument();
  });

  test('displays the overlay spinner and fetches data', async () => {
    render(<ControlPanel />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    await waitFor(() => expect(screen.queryByRole('progressbar')).not.toBeInTheDocument(), {
    timeout: 3000,
    });

    expect(screen.getByTestId('brightness-control')).toBeInTheDocument();
    expect(screen.getByTestId('progress-indicator')).toHaveTextContent('Brightness: 40');
    expect(screen.getByTestId('time-left')).toHaveTextContent('Time Left: 12h');
    expect(screen.getByTestId('toggle-night-vision')).toHaveTextContent('Night Vision: false');
    expect(screen.getByTestId('toggle-dusk-till-dawn')).toHaveTextContent('Dusk Till Dawn: true');
    expect(screen.getByTestId('toggle-flashing')).toHaveTextContent('Flashing: false');
  });

  test('displays updated brightness and switches after loading', async () => {
    render(<ControlPanel />);

    await waitFor(() => expect(screen.queryByRole('progressbar')).not.toBeInTheDocument(), {
      timeout: 3000,
    });

    expect(screen.getByTestId('progress-indicator')).toHaveTextContent('Brightness: 40');

    expect(screen.getByTestId('time-left')).toHaveTextContent('Time Left: 12h');

    expect(screen.getByTestId('toggle-night-vision')).toHaveTextContent('Night Vision: false');
    expect(screen.getByTestId('toggle-dusk-till-dawn')).toHaveTextContent('Dusk Till Dawn: true');
    expect(screen.getByTestId('toggle-flashing')).toHaveTextContent('Flashing: false');
  });
});
