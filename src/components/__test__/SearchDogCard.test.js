import { jsx as _jsx } from 'react/jsx-runtime';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchDogCard from '../SearchDogCard';
import { vi } from 'vitest';
// Mock Dog data
var mockDog = {
  id: '1',
  name: 'Buddy',
  breed: 'Golden Retriever',
  age: 3,
  zip_code: '12345',
  img: 'https://test.com/dog.jpg',
};
var mockOnSelectDogBreed = vi.fn();
describe('SearchDogCard', function () {
  beforeEach(function () {
    mockOnSelectDogBreed.mockClear();
  });
  test('renders dog details correctly', function () {
    render(
      _jsx(SearchDogCard, {
        dog: mockDog,
        onSelectDogBreed: mockOnSelectDogBreed,
      })
    );
    expect(screen.getByText('Buddy')).toBeInTheDocument();
    expect(screen.getByText(/Golden Retriever/)).toBeInTheDocument();
    expect(screen.getByText(/3/)).toBeInTheDocument();
    expect(screen.getByText(/12345/)).toBeInTheDocument();
  });
  test('calls onSelectDogBreed with correct arguments when card is clicked', function () {
    render(
      _jsx(SearchDogCard, {
        dog: mockDog,
        onSelectDogBreed: mockOnSelectDogBreed,
      })
    );
    fireEvent.click(screen.getByTestId('Buddy-card'));
    expect(mockOnSelectDogBreed).toHaveBeenCalledWith(
      mockDog.id,
      mockDog.breed
    );
  });
  test('sets correct image source for the dog image', function () {
    render(
      _jsx(SearchDogCard, {
        dog: mockDog,
        onSelectDogBreed: mockOnSelectDogBreed,
      })
    );
    var dogImage = screen.getByRole('img');
    expect(dogImage).toHaveAttribute('src', mockDog.img);
  });
});
