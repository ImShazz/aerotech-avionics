import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Dashboard from './Dashboard';

describe('Panel de Administración', () => {
  it('muestra el título del panel', () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', {
        name: /panel de administración/i,
      })
    ).toBeInTheDocument();
  });

    it('muestra el acceso a gestion de clientes', () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('link', {
        name: /ver clientes/i,
      })
    ).toBeInTheDocument();
  });
});