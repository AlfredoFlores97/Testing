import { render, screen, fireEvent, waitForElement } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import '@testing-library/jest-dom';
import { Select } from "../components/Select";

const animals = [
  { value: "dog", label: "Dog" },
  { value: "cat", label: "Cat" },
  { value: "lion", label: "Lion" },
  { value: "tiger", label: "Tiger" },
  { value: "elephant", label: "Elephant" },
  { value: "giraffe", label: "Giraffe" },
  { value: "zebra", label: "Zebra" },
  { value: "penguin", label: "Penguin" },
  { value: "panda", label: "Panda" },
  { value: "koala", label: "Koala" },
];

describe("Test Select component", () => {
  test('renders Select correctly', () => {
    render(<Select options={animals}/>);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
  });

  test("should render with default value selected", async() => {
    const value = 'cat'
    render(<Select options={animals} value={value}/>);
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(screen.getByText('Cat').selected).toBe(true);
  });

  test("should render with default value selected", async() => {
    let value = 'cat'
    render(<Select options={animals} value={value}/>);
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(screen.getByText('Cat').selected).toBe(true);
    expect(screen.getByText('Lion').selected).toBe(false);
    expect(screen.getByText('Dog').selected).toBe(false);
    fireEvent.change(select, { target: { value: 'dog' } });
    expect(screen.getByText('Dog').selected).toBe(true);
    expect(screen.getByText('Cat').selected).toBe(false);
    fireEvent.change(select, { target: { value: 'cat' } });
    expect(screen.getByText('Dog').selected).toBe(false);
    expect(screen.getByText('Cat').selected).toBe(true);
    fireEvent.change(select, { target: { value: 'penguin' } });
    expect(screen.getByRole("option", { name: "Penguin" }).selected).toBe(true);
    expect(screen.getByText('Cat').selected).toBe(false);
  });
});