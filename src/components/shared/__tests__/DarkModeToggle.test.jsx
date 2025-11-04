import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import DarkModeToggle from '../DarkModeToggle';

describe('DarkModeToggle', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    // Remove dark class from document
    document.documentElement.classList.remove('dark');
  });

  it('renders the toggle button', () => {
    render(<DarkModeToggle />);
    const button = screen.getByRole('button', { name: /toggle dark mode/i });
    expect(button).toBeInTheDocument();
  });

  it('shows moon icon in light mode by default', () => {
    render(<DarkModeToggle />);
    const button = screen.getByRole('button', { name: /toggle dark mode/i });
    // Moon icon should be visible
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('toggles to dark mode when clicked', () => {
    render(<DarkModeToggle />);
    const button = screen.getByRole('button', { name: /toggle dark mode/i });
    
    // Click to enable dark mode
    fireEvent.click(button);
    
    // Check if dark class is added to document
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    
    // Check if localStorage is updated
    expect(localStorage.getItem('darkMode')).toBe('true');
  });

  it('toggles back to light mode when clicked twice', () => {
    render(<DarkModeToggle />);
    const button = screen.getByRole('button', { name: /toggle dark mode/i });
    
    // Click to enable dark mode
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    
    // Click again to disable dark mode
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('darkMode')).toBe('false');
  });

  it('initializes from localStorage preference', () => {
    // Set dark mode preference in localStorage
    localStorage.setItem('darkMode', 'true');
    
    render(<DarkModeToggle />);
    
    // Should start in dark mode
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('does not apply dark mode when no localStorage value', () => {
    // With simplified implementation, no localStorage means light mode
    render(<DarkModeToggle />);
    
    // Should default to light mode when no saved preference
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('has proper hover styling', () => {
    render(<DarkModeToggle />);
    const button = screen.getByRole('button', { name: /toggle dark mode/i });
    
    // Check if button has hover classes
    expect(button.className).toContain('hover:shadow-xl');
    expect(button.className).toContain('hover:scale-110');
  });
});

