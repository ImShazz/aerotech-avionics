import { describe, it, expect, vi } from 'vitest';
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

    it('muestra los proyectos registrados en la tabla', () => {
    const proyectosPrueba = [
      {
        id: 999,
        nombre: 'Modernización de aviónica',
        cliente: 'AeroSur Ingeniería',
        estado: 'En ejecución',
      },
    ];

    const obtenerDatosOriginal = Storage.prototype.getItem;

    const almacenamientoSimulado = vi
      .spyOn(Storage.prototype, 'getItem')
      .mockImplementation(function (clave) {
        if (clave === 'aerotech-proyectos') {
          return JSON.stringify(proyectosPrueba);
        }

        return obtenerDatosOriginal.call(this, clave);
      });

    try {
      render(<Proyectos />);

      expect(
        screen.getByText('Modernización de aviónica')
      ).toBeInTheDocument();
    } finally {
      almacenamientoSimulado.mockRestore();
    }
  });

    it('cierra el formulario al presionar Cancelar', () => {
    render(<Proyectos />);

    const botonNuevo = screen.getByRole('button', {
      name: /nuevo proyecto/i,
    });

    fireEvent.click(botonNuevo);

    expect(
      screen.getByText(/registrar nuevo proyecto/i)
    ).toBeInTheDocument();

    const botonCancelar = screen.getByRole('button', {
      name: /cancelar/i,
    });

    fireEvent.click(botonCancelar);

    expect(
      screen.queryByText(/registrar nuevo proyecto/i)
    ).not.toBeInTheDocument();
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