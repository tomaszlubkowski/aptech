import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BrightnessIndicator from './BrightnessIndicator';

describe('BrightnessIndicator component', () => {
  test('renders the correct number of active bars based on brightness', () => {
    const { container } = render(<BrightnessIndicator brightness={40} />);

    const progressBars = container.querySelectorAll('.MuiLinearProgress-bar');
    expect(progressBars.length).toBe(5);

    expect(progressBars[0]).toHaveStyle('background-color: rgb(25, 118, 210)'); 
    expect(progressBars[1]).toHaveStyle('background-color: rgb(25, 118, 210)'); 

    expect(progressBars[2]).toHaveStyle('background-color: #254a6b');
    expect(progressBars[3]).toHaveStyle('background-color: #254a6b');
    expect(progressBars[4]).toHaveStyle('background-color: #254a6b');
  });

  test('renders all bars inactive when brightness is 0%', () => {
    const { container } = render(<BrightnessIndicator brightness={0} />);

    const inactiveBars = container.querySelectorAll('.MuiLinearProgress-bar');
    inactiveBars.forEach((bar) => {
      expect(bar).toHaveStyle('background-color: #254a6b');
    });
  });

  test('renders all bars active when brightness is 100%', () => {
    const { container } = render(<BrightnessIndicator brightness={100} />);

    const activeBars = container.querySelectorAll('.MuiLinearProgress-bar');
    activeBars.forEach((bar) => {
      expect(bar).toHaveStyle('background-color: rgb(25, 118, 210)');
    });
  });

  test('renders partial active bars correctly when brightness is 60%', () => {
    const { container } = render(<BrightnessIndicator brightness={60} />);

    const activeBars = container.querySelectorAll('.MuiLinearProgress-bar');
    expect(activeBars[0]).toHaveStyle('background-color: rgb(25, 118, 210)'); 
    expect(activeBars[1]).toHaveStyle('background-color: rgb(25, 118, 210)'); 
    expect(activeBars[2]).toHaveStyle('background-color: rgb(25, 118, 210)');
    expect(activeBars[3]).toHaveStyle('background-color: #254a6b');
    expect(activeBars[4]).toHaveStyle('background-color: #254a6b');
  });
});
