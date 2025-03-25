import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dropdown } from "react-bootstrap";
import { SortType } from "../utils/interfaces";
var SortDropdown = function (_a) {
    var handleSort = _a.handleSort;
    return (_jsxs(Dropdown, { className: 'me-3', children: [_jsx(Dropdown.Toggle, { className: 'fr-button', children: "Sort" }), _jsxs(Dropdown.Menu, { children: [_jsx(Dropdown.Item, { onClick: function () { return handleSort(SortType.ASC_BREED); }, children: "Breed: A - Z" }), _jsx(Dropdown.Item, { onClick: function () { return handleSort(SortType.DESC_BREED); }, children: "Breed: Z - A" }), _jsx(Dropdown.Item, { onClick: function () { return handleSort(SortType.ASC_AGE); }, children: "Age: Young to Old" }), _jsx(Dropdown.Item, { onClick: function () { return handleSort(SortType.DESC_AGE); }, children: "Age: Old to Young" }), _jsx(Dropdown.Item, { onClick: function () { return handleSort(SortType.ASC_NAME); }, children: "Name: A - Z" }), _jsx(Dropdown.Item, { onClick: function () { return handleSort(SortType.DESC_NAME); }, children: "Name: Z - A" })] })] }));
};
export default SortDropdown;
