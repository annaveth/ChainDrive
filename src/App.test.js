// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainDrive title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainDrive/i);
    expect(titleElement).toBeInTheDocument();
});
