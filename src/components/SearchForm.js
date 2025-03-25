var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import SearchSelect from './SearchSelect';
var SearchForm = function (_a) {
  var _b;
  var breeds = _a.breeds,
    setFilter = _a.setFilter;
  var _c = useState({
      ageMin: '',
      ageMax: '',
      zipCodes: '',
      breeds: [],
    }),
    formData = _c[0],
    setFormData = _c[1];
  var handleChange = function (e) {
    var _a = e.target,
      name = _a.name,
      value = _a.value;
    setFormData(function (prev) {
      var _a;
      return __assign(
        __assign({}, prev),
        ((_a = {}), (_a[name] = value ? value : ''), _a)
      );
    });
  };
  var handleSelectChange = function (selectedValue) {
    setFormData(function (prev) {
      return __assign(__assign({}, prev), { breeds: selectedValue || [] });
    });
  };
  var onSubmit = function (e) {
    e.preventDefault();
    setFilter(formData);
  };
  return _jsxs(Form, {
    className: 'p-3 mt-3 border rounded bg-white',
    onSubmit: onSubmit,
    children: [
      _jsxs(Form.Group, {
        className: 'mb-2',
        children: [
          _jsx(Form.Label, { children: 'Minimum Age' }),
          _jsx(Form.Control, {
            'data-testid': 'age-min-input',
            type: 'number',
            name: 'ageMin',
            min: '0',
            value: formData.ageMin,
            onChange: handleChange,
            placeholder: 'Enter Minimum Age',
          }),
        ],
      }),
      _jsxs(Form.Group, {
        className: 'mb-2',
        children: [
          _jsx(Form.Label, { children: 'Maximum Age' }),
          _jsx(Form.Control, {
            'data-testid': 'age-max-input',
            type: 'number',
            name: 'ageMax',
            min: '0',
            value: formData.ageMax,
            onChange: handleChange,
            placeholder: 'Enter Maximum Age',
          }),
        ],
      }),
      _jsxs(Form.Group, {
        className: 'mb-2',
        children: [
          _jsx(Form.Label, { children: 'Zip code' }),
          _jsx(Form.Control, {
            'data-testid': 'zipcode-input',
            type: 'text',
            name: 'zipCodes',
            pattern: '\\d{5}',
            value: formData.zipCodes,
            onChange: handleChange,
            placeholder: 'Enter Zip Code',
          }),
        ],
      }),
      _jsxs(Form.Group, {
        children: [
          _jsx(Form.Label, { children: 'Select Breeds' }),
          _jsx(SearchSelect, {
            breeds: breeds !== null && breeds !== void 0 ? breeds : [],
            selectedBreeds:
              (_b = formData.breeds) !== null && _b !== void 0 ? _b : [],
            setSelectedBreeds: handleSelectChange,
          }),
        ],
      }),
      _jsx(Button, {
        size: 'sm',
        className: 'fr-button mt-4 w-100',
        type: 'submit',
        children: 'Search',
      }),
    ],
  });
};
export default SearchForm;
