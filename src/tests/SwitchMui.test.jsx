import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Switch } from '@mui/material';
import { useState } from 'react';

describe("Test SwitchMui", () => {
  test('renders Switch correctly', () => {
    render(<Switch />);
    const switchElement = screen.getByRole('checkbox');
    expect(switchElement).toBeInTheDocument();
  });

  test('calls onChange prop when state changes', () => {
    const handleChange = vi.fn();
    render(<Switch onChange={handleChange} />);
    const switchElement = screen.getByRole('checkbox');
    fireEvent.click(switchElement);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('renders Switch with checked state', () => {
    render(<Switch checked />);
    const switchElement = screen.getByRole('checkbox');
    expect(switchElement).toBeChecked();
  });

  test('renders Switch with unchecked state', () => {
    render(<Switch checked={false} />);
    const switchElement = screen.getByRole('checkbox');
    expect(switchElement).not.toBeChecked();
  });

  test('renders Switch as disabled', () => {
    render(<Switch disabled />);
    const switchElement = screen.getByRole('checkbox');
    expect(switchElement).toBeDisabled();
  });

  test('updates state when value changes', () => {
    const TestComponent = () => {
      const [checked, setChecked] = useState(false);
      return (
        <Switch
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      );
    };

    render(<TestComponent />);
    const switchElement = screen.getByRole('checkbox');
    expect(switchElement).not.toBeChecked();
    fireEvent.click(switchElement);
    expect(switchElement).toBeChecked();
  });
});
