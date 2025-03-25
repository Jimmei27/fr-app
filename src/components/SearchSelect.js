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
import { jsx as _jsx } from 'react/jsx-runtime';
import Select from 'react-select';
var SearchSelect = function (_a) {
  var breeds = _a.breeds,
    selectedBreeds = _a.selectedBreeds,
    setSelectedBreeds = _a.setSelectedBreeds;
  var options =
    (breeds === null || breeds === void 0
      ? void 0
      : breeds.map(function (breed) {
          return { value: breed, label: breed };
        })) || [];
  return _jsx(Select, {
    isMulti: true,
    options: options,
    value: options.filter(function (option) {
      return selectedBreeds === null || selectedBreeds === void 0
        ? void 0
        : selectedBreeds.includes(option.value.toString());
    }),
    onChange: function (selectedOptions) {
      return setSelectedBreeds(
        selectedOptions === null || selectedOptions === void 0
          ? void 0
          : selectedOptions.map(function (option) {
              return option.value.toString();
            })
      );
    },
    closeMenuOnSelect: false,
    hideSelectedOptions: false,
    className: 'basic-multi-select',
    classNamePrefix: 'select',
    'data-testid': 'search-select',
    placeholder: 'Select Dog Breeds',
    styles: {
      control: function (base) {
        return __assign(__assign({}, base), {
          minHeight: '6rem',
          maxHeight: '6rem',
          overflowY: 'auto',
        });
      },
    },
  });
};
export default SearchSelect;
