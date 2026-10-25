import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
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
});