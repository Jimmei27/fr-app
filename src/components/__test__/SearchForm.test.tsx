import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from '../SearchForm';
import { vi } from 'vitest';

const mockSetFilter = vi.fn();

const mockBreeds = [
  { value: 'golden-retriever', label: 'Golden Retriever' },
  { value: 'bulldog', label: 'Bulldog' },
];

describe('SearchForm Input Fields', () => {

  beforeEach(() => {
    mockSetFilter.mockClear();
  });

  test('renders input fields with the correct labels and placeholders', () => {
    render(<SearchForm breeds={mockBreeds} setFilter={mockSetFilter} />);

    expect(screen.getByText(/Minimum Age/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter Minimum Age/i)).toBeInTheDocument();
    
    expect(screen.getByText(/Maximum Age/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter Maximum Age/i)).toBeInTheDocument();
    
    expect(screen.getByText(/Zip code/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter Zip Code/i)).toBeInTheDocument();
  });

  test('allows input for Minimum Age', () => {
    render(<SearchForm breeds={mockBreeds} setFilter={mockSetFilter} />);

    const ageMinInput = screen.getByTestId('age-min-input');
    
    fireEvent.change(ageMinInput, { target: { value: '5' } });

    expect(ageMinInput).toHaveValue(5);
  });

  test('allows input for Maximum Age', () => {
    render(<SearchForm breeds={mockBreeds} setFilter={mockSetFilter} />);

    const ageMaxInput = screen.getByTestId('age-max-input');
    
    fireEvent.change(ageMaxInput, { target: { value: '10' } });

    expect(ageMaxInput).toHaveValue(10);
  });

  test('allows input for Zip Code', () => {
    render(<SearchForm breeds={mockBreeds} setFilter={mockSetFilter} />);

    const zipCodeInput = screen.getByTestId('zipcode-input');
    
    fireEvent.change(zipCodeInput, { target: { value: '12345' } });

    expect(zipCodeInput).toHaveValue('12345');
  });

  test('calls setFilter on submit', () => {
    render(<SearchForm breeds={mockBreeds} setFilter={mockSetFilter} />);

    fireEvent.change(screen.getByTestId('age-min-input'), { target: { value: '5' } });
    fireEvent.change(screen.getByTestId('age-max-input'), { target: { value: '10' } });
    fireEvent.change(screen.getByTestId('zipcode-input'), { target: { value: '12345' } });

    fireEvent.click(screen.getByText('Search'));

    expect(mockSetFilter).toHaveBeenCalledWith({
      ageMin: '5',
      ageMax: '10',
      zipCodes: '12345',
      breeds: [],
    });
  });
});
