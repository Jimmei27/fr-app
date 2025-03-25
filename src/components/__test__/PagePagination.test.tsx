import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import PagePagination from '../PagePagination';
import { vi } from 'vitest';

describe('PagePagination', () => {

  const mockSetCurrentPage = vi.fn();

  beforeEach(() => {
    mockSetCurrentPage.mockClear();
  });

  test('renders pagination items correctly', () => {
    render(<PagePagination currentPage={1} setCurrentPage={mockSetCurrentPage} />);
    for (let i = 1; i <= 10; i++) {
      expect(screen.getByText(i)).toBeInTheDocument();
    }
  });

  test('calls setCurrentPage when a pagination item is clicked', () => {
    render(<PagePagination currentPage={1} setCurrentPage={mockSetCurrentPage} />);

    fireEvent.click(screen.getByText('5'));

    expect(mockSetCurrentPage).toHaveBeenCalledWith(5);
  });

  test('calls setCurrentPage when "Prev" is clicked and currentPage > 1', () => {
    render(<PagePagination currentPage={5} setCurrentPage={mockSetCurrentPage} />);

    fireEvent.click(screen.getByRole('button', { name: /previous/i }));

    expect(mockSetCurrentPage).toHaveBeenCalledWith(4);
  });

  test('calls setCurrentPage when "Next" is clicked and currentPage < 10', () => {
    render(<PagePagination currentPage={5} setCurrentPage={mockSetCurrentPage} />);

    fireEvent.click(screen.getByRole('button', { name: /next/i }));

    expect(mockSetCurrentPage).toHaveBeenCalledWith(6);
  });
});
