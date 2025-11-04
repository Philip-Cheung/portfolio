import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import WorkExperienceCards from '../WorkExperienceCards';

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// Mock portfolioData
vi.mock('../../../data/portfolioData', () => ({
  portfolioData: {
    workExperiences: [
      {
        id: 'test-project-1',
        company: 'Test Company',
        role: 'Senior Designer',
        dates: '2023 - 2024',
        location: 'San Francisco, CA',
        description: 'Test description of the work',
        tags: ['Design', 'UX', 'Testing'],
        companyUrl: 'https://test.com',
        link: '/project/test-project-1'
      }
    ]
  }
}));

describe('WorkExperienceCards', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders work experience cards correctly', () => {
    render(
      <BrowserRouter>
        <WorkExperienceCards />
      </BrowserRouter>
    );

    expect(screen.getByText('Test Company')).toBeInTheDocument();
    expect(screen.getByText('Senior Designer')).toBeInTheDocument();
    expect(screen.getByText('2023 - 2024')).toBeInTheDocument();
    expect(screen.getByText('San Francisco, CA')).toBeInTheDocument();
    expect(screen.getByText('Test description of the work')).toBeInTheDocument();
  });

  it('renders all tags', () => {
    render(
      <BrowserRouter>
        <WorkExperienceCards />
      </BrowserRouter>
    );

    expect(screen.getByText('Design')).toBeInTheDocument();
    expect(screen.getByText('UX')).toBeInTheDocument();
    expect(screen.getByText('Testing')).toBeInTheDocument();
  });

  it('company link has correct attributes', () => {
    render(
      <BrowserRouter>
        <WorkExperienceCards />
      </BrowserRouter>
    );

    const companyLink = screen.getByText('Test Company').closest('a');
    expect(companyLink).toHaveAttribute('href', 'https://test.com');
    expect(companyLink).toHaveAttribute('target', '_blank');
    expect(companyLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('clicking card navigates to project page', () => {
    render(
      <BrowserRouter>
        <WorkExperienceCards />
      </BrowserRouter>
    );

    const card = screen.getByText('Test description of the work').closest('.group');
    fireEvent.click(card);

    expect(mockNavigate).toHaveBeenCalledWith('/project/test-project-1');
  });

  it('clicking company link does not navigate to project page', () => {
    render(
      <BrowserRouter>
        <WorkExperienceCards />
      </BrowserRouter>
    );

    const companyLink = screen.getByText('Test Company').closest('a');
    fireEvent.click(companyLink);

    // Navigation should not be called because stopPropagation prevents it
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('does not have nested anchor tags', () => {
    const { container } = render(
      <BrowserRouter>
        <WorkExperienceCards />
      </BrowserRouter>
    );

    // Find all anchor tags
    const anchors = container.querySelectorAll('a');
    
    // Check that no anchor has another anchor as a descendant
    anchors.forEach(anchor => {
      const nestedAnchors = anchor.querySelectorAll('a');
      expect(nestedAnchors.length).toBe(0);
    });
  });

  it('card has cursor-pointer class', () => {
    render(
      <BrowserRouter>
        <WorkExperienceCards />
      </BrowserRouter>
    );

    const card = screen.getByText('Test description of the work').closest('.group');
    expect(card.className).toContain('cursor-pointer');
  });
});

