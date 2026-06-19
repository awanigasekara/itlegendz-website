import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the ITLEGENDZ hero headline', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /smart software, ai & automation solutions for growing businesses/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /solutions designed for growth/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByText(/custom software development/i)).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /why businesses choose itlegendz/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /helping businesses across multiple industries/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByText(/professional services/i)).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /how we deliver success/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByText(/discover/i)).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /transform your business with ai/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByText(/workflow automation/i)).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /let's build something great together/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
});
