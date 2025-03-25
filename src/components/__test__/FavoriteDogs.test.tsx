import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FavoriteDogs from '../FavoriteDogs';
import { vi } from 'vitest';

describe('FavoriteDogs', () => {
  
  const mockOnMatchClick = vi.fn();
  const mockOnResetClick = vi.fn();
  
  test('renders the FavoriteDogs component with selected breeds', () => {
    const selectedBreeds = [
      { id: '1', breed: 'Bulldog' },
      { id: '2', breed: 'Beagle' },
    ];

    render(
      <FavoriteDogs 
        selectedBreeds={selectedBreeds} 
        onMatchClick={mockOnMatchClick} 
        onResetClick={mockOnResetClick} 
      />
    );
    
    // renders favorite breeds
    expect(screen.getByText('Bulldog')).toBeInTheDocument();
    expect(screen.getByText('Beagle')).toBeInTheDocument();
    
    // renders buttons
    expect(screen.getByText('Match')).toBeVisible();
    expect(screen.getByText('Reset')).toBeVisible();
  });

  test('calls onMatchClick when the Match button is clicked', () => {
    const selectedBreeds = [
      { id: '1', breed: 'Bulldog' },
    ];

    render(
      <FavoriteDogs 
        selectedBreeds={selectedBreeds} 
        onMatchClick={mockOnMatchClick} 
        onResetClick={mockOnResetClick} 
      />
    );
    
    fireEvent.click(screen.getByText('Match'));
    expect(mockOnMatchClick).toHaveBeenCalled();
  });

  test('calls onResetClick when the Reset button is clicked', () => {
    const selectedBreeds = [
      { id: '1', breed: 'Bulldog' },
    ];

    render(
      <FavoriteDogs 
        selectedBreeds={selectedBreeds} 
        onMatchClick={mockOnMatchClick} 
        onResetClick={mockOnResetClick} 
      />
    );
    
    fireEvent.click(screen.getByText('Reset'));
    expect(mockOnResetClick).toHaveBeenCalled();
  });

});
