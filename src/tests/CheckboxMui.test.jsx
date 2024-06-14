import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Checkbox } from '@mui/material';
import { useState } from 'react';

describe("Checkbox tests", () => {
  test('renders unchecked checkbox correctly', () => {
    render(<Checkbox checked={false} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  test('renders checked checkbox correctly', () => {
    render(<Checkbox checked={true} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
  });

  test('renders disabled checkbox correctly', () => {
    render(<Checkbox checked={false} disabled />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeDisabled();
  });

  test('checkbox toggles state correctly', () => {
    const TestComponent = () => {
      const [checked, setChecked] = useState(false);
      return <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
    };

    render(<TestComponent />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
