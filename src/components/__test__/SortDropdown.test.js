import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import { SortType } from '../../utils/interfaces';
import SortDropdown from '../SortDropDown';
import { vi } from 'vitest';
var mockHandleSort = vi.fn();
describe('SortDropdown', function () {
    beforeEach(function () {
        mockHandleSort.mockClear();
    });
    test('renders the SortDropdown with the correct items', function () {
        render(_jsx(SortDropdown, { handleSort: mockHandleSort }));
        // Check that the "Sort" button is rendered
        expect(screen.getByText('Sort')).toBeInTheDocument();
        fireEvent.click(screen.getByText('Sort'));
        // Check that all dropdown items are rendered
        expect(screen.getByText('Breed: A - Z')).toBeInTheDocument();
        expect(screen.getByText('Breed: Z - A')).toBeInTheDocument();
        expect(screen.getByText('Age: Young to Old')).toBeInTheDocument();
        expect(screen.getByText('Age: Old to Young')).toBeInTheDocument();
        expect(screen.getByText('Name: A - Z')).toBeInTheDocument();
        expect(screen.getByText('Name: Z - A')).toBeInTheDocument();
    });
    test('calls handleSort with the correct argument when an item is clicked', function () {
        render(_jsx(SortDropdown, { handleSort: mockHandleSort }));
        fireEvent.click(screen.getByText('Sort'));
        // Click each dropdown item and assert that handleSort is called with the correct value
        fireEvent.click(screen.getByText('Breed: A - Z'));
        expect(mockHandleSort).toHaveBeenCalledWith(SortType.ASC_BREED);
        fireEvent.click(screen.getByText('Breed: Z - A'));
        expect(mockHandleSort).toHaveBeenCalledWith(SortType.DESC_BREED);
        fireEvent.click(screen.getByText('Age: Young to Old'));
        expect(mockHandleSort).toHaveBeenCalledWith(SortType.ASC_AGE);
        fireEvent.click(screen.getByText('Age: Old to Young'));
        expect(mockHandleSort).toHaveBeenCalledWith(SortType.DESC_AGE);
        fireEvent.click(screen.getByText('Name: A - Z'));
        expect(mockHandleSort).toHaveBeenCalledWith(SortType.ASC_NAME);
        fireEvent.click(screen.getByText('Name: Z - A'));
        expect(mockHandleSort).toHaveBeenCalledWith(SortType.DESC_NAME);
    });
});
