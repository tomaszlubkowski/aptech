import { renderHook, act } from '@testing-library/react-hooks';
import useControlPanel from './use-control-panel';

describe('useControlPanel hook', () => {
  test('should initialize with default values', () => {
    const { result } = renderHook(() => useControlPanel());

    expect(result.current.brightness).toBe(40);
    expect(result.current.timeLeft).toBe("8h");
    expect(result.current.nightVision).toBe(false);
    expect(result.current.duskTillDawn).toBe(false);
    expect(result.current.flashing).toBe(false);
  });

  test('should increase brightness when increaseBrightness is called', () => {
    const { result } = renderHook(() => useControlPanel());

    act(() => {
      result.current.increaseBrightness();
    });

    expect(result.current.brightness).toBe(60);
  });

  test('should decrease brightness when decreaseBrightness is called', () => {
    const { result } = renderHook(() => useControlPanel());

    act(() => {
      result.current.decreaseBrightness();
    });

    expect(result.current.brightness).toBe(20);
  });

  test('should not increase brightness above 100%', () => {
    const { result } = renderHook(() => useControlPanel());

    act(() => {
      result.current.setBrightness(100);  
      result.current.increaseBrightness();
    });

    expect(result.current.brightness).toBe(100);
  });

  test('should not decrease brightness below 0%', () => {
    const { result } = renderHook(() => useControlPanel());

    act(() => {
      result.current.setBrightness(0);
      result.current.decreaseBrightness();
    });

    expect(result.current.brightness).toBe(0);
  });

  test('should toggle nightVision state when toggleNightVision is called', () => {
    const { result } = renderHook(() => useControlPanel());

    act(() => {
      result.current.toggleNightVision();
    });

    expect(result.current.nightVision).toBe(true);

    act(() => {
      result.current.toggleNightVision();
    });

    expect(result.current.nightVision).toBe(false);
  });

  test('should toggle duskTillDawn state when toggleDuskTillDawn is called', () => {
    const { result } = renderHook(() => useControlPanel());

    act(() => {
      result.current.toggleDuskTillDawn();
    });

    expect(result.current.duskTillDawn).toBe(true);

    act(() => {
      result.current.toggleDuskTillDawn();
    });

    expect(result.current.duskTillDawn).toBe(false);
  });

  test('should toggle flashing state when toggleFlashing is called', () => {
    const { result } = renderHook(() => useControlPanel());

    act(() => {
      result.current.toggleFlashing();
    });

    expect(result.current.flashing).toBe(true);

    act(() => {
      result.current.toggleFlashing();
    });

    expect(result.current.flashing).toBe(false);
  });

  test('should update timeLeft when setTimeLeft is called', () => {
    const { result } = renderHook(() => useControlPanel());

    act(() => {
      result.current.setTimeLeft('12h');
    });

    expect(result.current.timeLeft).toBe('12h');
  });
});
