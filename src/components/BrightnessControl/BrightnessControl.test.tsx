import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BrightnessControl from './BrightnessControl';

jest.mock('@mui/icons-material/Add', () => () => <span data-testid="add-icon" />);
jest.mock('@mui/icons-material/Remove', () => () => <span data-testid="remove-icon" />);

describe('BrightnessControl component', () => {
  const mockOnIncrease = jest.fn();
  const mockOnDecrease = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  test('renders the brightness control with the correct initial value', () => {
    render(<BrightnessControl brightness={50} onIncrease={mockOnIncrease} onDecrease={mockOnDecrease} />);

    expect(screen.getByTestId('add-icon')).toBeInTheDocument();
    expect(screen.getByTestId('remove-icon')).toBeInTheDocument();

    const brightnessValue = screen.getByText(/50%/i);
    expect(brightnessValue).toBeInTheDocument();
  });

  test('calls onIncrease when the increase button is clicked', () => {
    render(<BrightnessControl brightness={50} onIncrease={mockOnIncrease} onDecrease={mockOnDecrease} />);

    const increaseButton = screen.getByTestId('increase-button');
    fireEvent.click(increaseButton);

    expect(mockOnIncrease).toHaveBeenCalledTimes(1);
  });

  test('calls onDecrease when the decrease button is clicked', () => {
    render(<BrightnessControl brightness={50} onIncrease={mockOnIncrease} onDecrease={mockOnDecrease} />);

    const decreaseButton = screen.getByTestId('decrease-button');
    fireEvent.click(decreaseButton);

    expect(mockOnDecrease).toHaveBeenCalledTimes(1);
  });

  test('renders the correct brightness value', () => {
    render(<BrightnessControl brightness={80} onIncrease={mockOnIncrease} onDecrease={mockOnDecrease} />);

    const brightnessValue = screen.getByText(/80%/i);
    expect(brightnessValue).toBeInTheDocument();
  });
});
