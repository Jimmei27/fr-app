import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { Card, Col } from 'react-bootstrap';
var SearchDogCard = function (_a) {
  var dog = _a.dog,
    onSelectDogBreed = _a.onSelectDogBreed;
  return _jsx(Col, {
    onClick: function () {
      return onSelectDogBreed(dog.id, dog.breed);
    },
    'data-testid': ''.concat(dog.name, '-card'),
    children: _jsxs(Card, {
      className: 'h-100',
      style: { minWidth: '7rem' },
      children: [
        _jsx(Card.Img, {
          variant: 'top',
          src: dog.img,
          style: { objectFit: 'cover', height: '12.5rem' },
        }),
        _jsxs(Card.Body, {
          children: [
            _jsx(Card.Title, { children: dog.name }),
            _jsx('strong', { children: 'Breed:' }),
            ' ',
            dog.breed,
            ' ',
            _jsx('br', {}),
            _jsx('strong', { children: 'Age:' }),
            ' ',
            dog.age,
            ' ',
            _jsx('br', {}),
            _jsx('strong', { children: 'Zip Code:' }),
            ' ',
            dog.zip_code,
          ],
        }),
      ],
    }),
  });
};
export default SearchDogCard;
