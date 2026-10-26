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

   it('registra un nuevo proyecto y lo muestra en la tabla', () => {
  const clientesPrueba = [
    {
      id: 999,
      empresa: 'AeroSur Ingeniería',
    },
  ];

  const obtenerDatosOriginal = Storage.prototype.getItem;

  const almacenamientoSimulado = vi
    .spyOn(Storage.prototype, 'getItem')
    .mockImplementation(function (clave) {
      if (clave === 'aerotech-clientes') {
        return JSON.stringify(clientesPrueba);
      }

      return obtenerDatosOriginal.call(this, clave);
    });

  try {
    render(<Proyectos />);

    fireEvent.click(
      screen.getByRole('button', { name: /nuevo proyecto/i })
    );

    fireEvent.change(
      screen.getByLabelText(/nombre del proyecto/i),
      {
        target: { value: 'Proyecto de prueba Vitest' },
      }
    );

    fireEvent.change(
      screen.getByLabelText(/empresa cliente/i),
      {
        target: { value: 'AeroSur Ingeniería' },
      }
    );

    fireEvent.click(
      screen.getByRole('button', { name: /guardar proyecto/i })
    );

    expect(
      screen.getByText('Proyecto de prueba Vitest')
    ).toBeInTheDocument();
  } finally {
    almacenamientoSimulado.mockRestore();
  }
});

    it('permite seleccionar una empresa cliente registrada', () => {
    const clientesPrueba = [
      {
        id: 999,
        empresa: 'Andes Aerospace',
      },
    ];

    const obtenerDatosOriginal = Storage.prototype.getItem;

    const almacenamientoSimulado = vi
      .spyOn(Storage.prototype, 'getItem')
      .mockImplementation(function (clave) {
        if (clave === 'aerotech-clientes') {
          return JSON.stringify(clientesPrueba);
        }

        return obtenerDatosOriginal.call(this, clave);
      });

    try {
      render(<Proyectos />);

      const botonNuevo = screen.getByRole('button', {
        name: /nuevo proyecto/i,
      });

      fireEvent.click(botonNuevo);

      const selectorCliente = screen.getByLabelText(/empresa cliente/i);

      expect(
        screen.getByRole('option', { name: 'Andes Aerospace' })
      ).toBeInTheDocument();

      fireEvent.change(selectorCliente, {
        target: { value: 'Andes Aerospace' },
      });

      expect(selectorCliente).toHaveValue('Andes Aerospace');
    } finally {
      almacenamientoSimulado.mockRestore();
    }
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