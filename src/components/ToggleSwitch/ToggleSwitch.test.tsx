import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToggleSwitch from './ToggleSwitch';

describe('ToggleSwitch component', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  test('renders the toggle switch with the correct label', () => {
    render(<ToggleSwitch label="Night Vision" checked={false} onChange={mockOnChange} />);

    const labelElement = screen.getByText(/Night Vision/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('renders the switch in checked state', () => {
    render(<ToggleSwitch label="Dusk Till Dawn" checked={true} onChange={mockOnChange} />);

    const switchElement = screen.getByRole('checkbox');
    expect(switchElement).toBeChecked();
  });

  test('renders the switch in unchecked state', () => {
    render(<ToggleSwitch label="Flashing" checked={false} onChange={mockOnChange} />);

    const switchElement = screen.getByRole('checkbox');
    expect(switchElement).not.toBeChecked();
  });

  test('calls onChange when the switch is toggled', () => {
    render(<ToggleSwitch label="Night Vision" checked={false} onChange={mockOnChange} />);

    const switchElement = screen.getByRole('checkbox');
    fireEvent.click(switchElement);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test('applies correct checked state for track color simulation (checked)', () => {
    render(<ToggleSwitch label="Dusk Till Dawn" checked={true} onChange={mockOnChange} />);

    const switchElementChecked = screen.getByRole('checkbox');
    expect(switchElementChecked).toBeChecked();
  });

  test('applies correct checked state for track color simulation (unchecked)', () => {
    render(<ToggleSwitch label="Dusk Till Dawn" checked={false} onChange={mockOnChange} />);

    const switchElementUnchecked = screen.getByRole('checkbox');
    expect(switchElementUnchecked).not.toBeChecked();
  });
});
