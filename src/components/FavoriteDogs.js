import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { ListGroup, Button } from 'react-bootstrap';
var FavoriteDogs = function (_a) {
  var selectedBreeds = _a.selectedBreeds,
    onMatchClick = _a.onMatchClick,
    onResetClick = _a.onResetClick;
  return _jsxs('div', {
    className: 'mt-3',
    children: [
      _jsx('h4', { className: 'border-top pt-3', children: 'Favorite Breeds' }),
      _jsx('div', {
        style: { height: '10rem' },
        className: 'overflow-auto bg-white border rounded px-3 py-2',
        children: selectedBreeds.map(function (breed) {
          return _jsx(ListGroup.Item, { children: breed.breed }, breed.id);
        }),
      }),
      _jsx(Button, {
        size: 'sm',
        className: 'fr-button w-100 mt-4',
        hidden: selectedBreeds.length === 0,
        onClick: onMatchClick,
        children: 'Match',
      }),
      _jsx(Button, {
        size: 'sm',
        className: 'fr-button w-100 mt-4',
        hidden: selectedBreeds.length === 0,
        onClick: onResetClick,
        children: 'Reset',
      }),
    ],
  });
};
export default FavoriteDogs;
