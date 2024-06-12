import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '@mui/material';

describe("Test ButtonMui", () => {
  test('renders MuiButton with correct text', () => {
    render(<Button>Click me</Button>); // Renderiza el componente boton
    const button = screen.getByRole('button', { name: /click me/i }); // Busca un elemento <button></button> con el texto click me (i significa que es no sensitive, es decir que no distinge entre mayusculas y minusculas)
    expect(button).toBeInTheDocument(); // comprueba que el boton existe en el dom
  });

  test('calls onClick prop when MuiButton is clicked', () => {
    const handleClick = vi.fn(console.log('click'));
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button', { name: /Click me/i });
    expect(button).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalledTimes(0); // Verifica que la función onClick nunca se hizo
    fireEvent.click(button); // Simula un clic en el botón
    expect(handleClick).toHaveBeenCalledTimes(1); // Verifica que la función onClick fue llamada una vez
  })

  test('renders MuiButton with correct styles', () => {
    render(<Button fullWidth style={{ backgroundColor: 'red' }}>Styled Button</Button>);
    const button = screen.getByRole('button', { name: /styled button/i });
    expect(button).toBeInTheDocument();
    expect(button.style.backgroundColor).toBe('red');
    expect(button.style.backgroundColor).toBe('red');
    expect(button).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(button).toHaveStyle('background-color: #ff0000');
    expect(button).toHaveStyle('width: 100%');
  });

  test('does not call onClick prop when MuiButton is disabled', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick} disabled>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled(); // comprueba que el elemento esta deshabilitado
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(0); // comprueba que el evento no se ha lanzado nunca
  });
})