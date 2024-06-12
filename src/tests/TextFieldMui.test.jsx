import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TextField } from '@mui/material';
import { useState } from "react";

describe("Test TextFieldMui", () => {
  test('renders TextField with correct label', () => {
    render(<TextField label="Username" />);
    const textField2 = screen.getByRole('textbox', { name: /username/i });
    const textField = screen.getByLabelText(/username/i);
    expect(textField).toBeInTheDocument();
    expect(textField2).toBeInTheDocument();
  });

  test('updates state when value changes', () => {
    const TestComponent = () => {
      const [value, setValue] = useState('');
      return (
        <TextField
          label="Username"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      );
    };

    render(<TestComponent />);
    const textField = screen.getByLabelText(/username/i);
    fireEvent.change(textField, { target: { value: 'John Doe' } });
    expect(textField).toHaveValue('John Doe');
  });

  test('renders TextField with correct placeholder', () => {
    render(<TextField placeholder="Enter your username" />);
    const textField = screen.getByPlaceholderText(/enter your username/i);
    expect(textField).toBeInTheDocument();
  });

  test('renders TextField with correct value', () => {
    render(<TextField value="John Doe" onChange={() => {}} />);
    const textField = screen.getByDisplayValue(/john doe/i);
    expect(textField).toBeInTheDocument();
  });

  test('renders TextField as disabled', () => {
    render(<TextField label="Username" disabled />);
    const textField = screen.getByLabelText(/username/i);
    expect(textField).toBeDisabled();
  });

  test('renders TextField with error state', () => {
    render(<TextField label="Username" error helperText="Username is required" />);
    const textField = screen.getByLabelText(/username/i);
    expect(textField).toBeInTheDocument();
    expect(textField).toHaveAttribute('aria-invalid', 'true');
    const helperText = screen.getByText(/username is required/i);
    expect(helperText).toBeInTheDocument();
  });
});