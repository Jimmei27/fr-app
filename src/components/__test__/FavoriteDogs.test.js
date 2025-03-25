import { jsx as _jsx } from 'react/jsx-runtime';
import { render, screen, fireEvent } from '@testing-library/react';
import FavoriteDogs from '../FavoriteDogs';
describe('FavoriteDogs', function () {
  var mockOnMatchClick = vi.fn();
  var mockOnResetClick = vi.fn();
  test('renders the FavoriteDogs component with selected breeds', function () {
    var selectedBreeds = [
      { id: '1', breed: 'Bulldog' },
      { id: '2', breed: 'Beagle' },
    ];
    render(
      _jsx(FavoriteDogs, {
        selectedBreeds: selectedBreeds,
        onMatchClick: mockOnMatchClick,
        onResetClick: mockOnResetClick,
      })
    );
    // renders favorite breeds
    expect(screen.getByText('Bulldog')).toBeInTheDocument();
    expect(screen.getByText('Beagle')).toBeInTheDocument();
    // renders buttons
    expect(screen.getByText('Match')).toBeVisible();
    expect(screen.getByText('Reset')).toBeVisible();
  });
  test('calls onMatchClick when the Match button is clicked', function () {
    var selectedBreeds = [{ id: '1', breed: 'Bulldog' }];
    render(
      _jsx(FavoriteDogs, {
        selectedBreeds: selectedBreeds,
        onMatchClick: mockOnMatchClick,
        onResetClick: mockOnResetClick,
      })
    );
    fireEvent.click(screen.getByText('Match'));
    expect(mockOnMatchClick).toHaveBeenCalled();
  });
  test('calls onResetClick when the Reset button is clicked', function () {
    var selectedBreeds = [{ id: '1', breed: 'Bulldog' }];
    render(
      _jsx(FavoriteDogs, {
        selectedBreeds: selectedBreeds,
        onMatchClick: mockOnMatchClick,
        onResetClick: mockOnResetClick,
      })
    );
    fireEvent.click(screen.getByText('Reset'));
    expect(mockOnResetClick).toHaveBeenCalled();
  });
});
