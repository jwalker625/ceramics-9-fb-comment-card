import App from '../App';
import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";

describe('App', () => {
  it('renders a comment card', () => {
    render(<App />);

    const commentCardElement = screen.getByText(/Billy Bob/i);

    expect(commentCardElement).toBeInTheDocument();
  })
});
