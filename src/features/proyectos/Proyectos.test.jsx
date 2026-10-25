import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Proyectos from './Proyectos';

describe('Gestión de Proyectos', () => {
  it('muestra el título de gestión de proyectos', () => {
    render(<Proyectos />);

    expect(
      screen.getByRole('heading', {
        name: /gestión de proyectos/i,
      })
    ).toBeInTheDocument();
  });
  it('abre el formulario al presionar Nuevo proyecto', () => {
  render(<Proyectos />);

  const botonNuevo = screen.getByRole('button', {
    name: /nuevo proyecto/i,
  });

  fireEvent.click(botonNuevo);

  expect(
    screen.getByText(/registrar nuevo proyecto/i)
  ).toBeInTheDocument();
});
});