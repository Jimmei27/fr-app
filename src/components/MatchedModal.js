import {
  jsx as _jsx,
  jsxs as _jsxs,
  Fragment as _Fragment,
} from 'react/jsx-runtime';
import { useEffect, useState } from 'react';
import { Button, Image, Modal, Spinner } from 'react-bootstrap';
import { useGetDogs } from '../hooks/requests';
var MatchedModal = function (_a) {
  var dogId = _a.dogId;
  var _b = useGetDogs(),
    getDog = _b.mutate,
    dogData = _b.data;
  var _c = useState(true),
    showModal = _c[0],
    setShowModal = _c[1];
  useEffect(
    function () {
      if (dogId.match != null) {
        getDog([dogId.match]);
      }
    },
    [dogId, getDog]
  );
  var closeModal = function () {
    return setShowModal(false);
  };
  return _jsx(Modal, {
    show: showModal,
    onHide: closeModal,
    centered: true,
    children:
      dogData != null
        ? _jsxs(_Fragment, {
            children: [
              _jsx(Modal.Header, {
                closeButton: true,
                children: _jsx(Modal.Title, { children: 'Dog Matched!' }),
              }),
              _jsx(Modal.Body, {
                children: _jsxs('div', {
                  className: 'd-flex',
                  children: [
                    _jsx(Image, {
                      src: dogData[0].img,
                      thumbnail: true,
                      className: 'w-50',
                      style: { height: '13rem' },
                    }),
                    _jsxs('div', {
                      className: 'px-4 d-inline-block align-content-center',
                      children: [
                        _jsxs('h4', { children: ['Name: ', dogData[0].name] }),
                        _jsx('strong', { children: 'Breed:' }),
                        ' ',
                        dogData[0].breed,
                        ' ',
                        _jsx('br', {}),
                        _jsx('strong', { children: 'Age:' }),
                        ' ',
                        dogData[0].age,
                        ' ',
                        _jsx('br', {}),
                        _jsx('strong', { children: 'Zip Code:' }),
                        ' ',
                        dogData[0].zip_code,
                        ' ',
                        _jsx('br', {}),
                        _jsx(Button, {
                          size: 'sm',
                          className: 'fr-button mt-3 w-100',
                          children: 'Pick Me',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        : _jsx(Spinner, { animation: 'border' }),
  });
};
export default MatchedModal;
