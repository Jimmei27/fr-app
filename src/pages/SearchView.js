var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useGetBreeds, useLogout, useMatchDog, useSearchDogs } from '../hooks/requests';
import SearchForm from '../components/SearchForm';
import SearchDogCard from '../components/SearchDogCard';
import FavoriteDogs from '../components/FavoriteDogs';
import MatchedModal from '../components/MatchedModal';
import SortDropdown from '../components/SortDropDown';
import PagePagination from '../components/PagePagination';
import { SortType } from '../utils/interfaces';
var SearchView = function () {
    var _a = useState([]), dogData = _a[0], setDogData = _a[1];
    var _b = useState([]), favoriteBreeds = _b[0], setFavoriteBreeds = _b[1];
    var _c = useState(1), currentPage = _c[0], setCurrentPage = _c[1];
    var _d = useState({}), filter = _d[0], setFilter = _d[1];
    var navigate = useNavigate();
    var _e = useLogout(), logout = _e.mutate, isSuccess = _e.isSuccess;
    var breeds = useGetBreeds().data;
    var dogDatas = useSearchDogs(filter).dogDatas;
    var _f = useMatchDog(), matchDog = _f.mutate, matchDogSuccess = _f.isSuccess, matchData = _f.data;
    useEffect(function () {
        if (isSuccess) {
            navigate('/login');
        }
    }, [isSuccess, navigate]);
    useEffect(function () {
        if (dogDatas != null) {
            setDogData(dogDatas);
        }
    }, [dogDatas]);
    useEffect(function () {
        setFilter(function (prevFilter) { return (__assign(__assign({}, prevFilter), { from: (currentPage * 25).toString() })); });
    }, [currentPage]);
    var onSelectDogBreed = function (id, breed) {
        setFavoriteBreeds(function (prevBreeds) {
            var isSelected = prevBreeds.some(function (breed) { return breed.id === id; });
            if (isSelected) {
                return prevBreeds.filter(function (breed) { return breed.id !== id; });
            }
            else {
                return __spreadArray(__spreadArray([], prevBreeds, true), [{ id: id, breed: breed }], false);
            }
        });
    };
    var onMatchDogClick = function () {
        matchDog(favoriteBreeds.map(function (breed) { return breed.id; }));
    };
    var handleSort = function (action) {
        var data = __spreadArray([], dogData, true);
        switch (action) {
            case SortType.ASC_BREED:
                setDogData(data.sort(function (a, b) { return a.breed.localeCompare(b.breed); }));
                break;
            case SortType.DESC_BREED:
                setDogData(data.sort(function (a, b) { return b.breed.localeCompare(a.breed); }));
                break;
            case SortType.ASC_AGE:
                setDogData(data.sort(function (a, b) { return a.age - b.age; }));
                break;
            case SortType.DESC_AGE:
                setDogData(data.sort(function (a, b) { return b.age - a.age; }));
                break;
            case SortType.ASC_NAME:
                setDogData(data.sort(function (a, b) { return a.name.localeCompare(b.name); }));
                break;
            case SortType.DESC_NAME:
                setDogData(data.sort(function (a, b) { return b.name.localeCompare(a.name); }));
                break;
            default:
                break;
        }
    };
    var handleSubmit = function (formData) {
        setFilter(__assign(__assign({}, formData), { from: '25', size: '25' }));
        setCurrentPage(1);
    };
    return (_jsxs("div", { className: 'vh-100 d-flex flex-rows', children: [_jsxs(Col, { md: 3, className: 'bg-light p-4', children: [_jsx("h4", { children: "Search Fields" }), _jsx(SearchForm, { breeds: breeds, setFilter: handleSubmit }), _jsx(FavoriteDogs, { selectedBreeds: favoriteBreeds, onMatchClick: onMatchDogClick, onResetClick: function () { return setFavoriteBreeds([]); } })] }), _jsxs(Col, { md: 9, className: 'flex-fill', children: [_jsxs("div", { className: 'd-flex justify-content-end p-4', children: [_jsx(SortDropdown, { handleSort: handleSort }), _jsx(Button, { onClick: function () { return logout(); }, size: 'sm', className: 'fr-button', children: "Log Out" })] }), dogData.length > 0 ? (_jsxs(_Fragment, { children: [_jsx(Row, { className: 'g-3 mx-3 row-cols-5', children: dogData === null || dogData === void 0 ? void 0 : dogData.map(function (dog) { return (_jsx(SearchDogCard, { dog: dog, onSelectDogBreed: onSelectDogBreed }, dog.id)); }) }), _jsx(PagePagination, { currentPage: currentPage, setCurrentPage: function (page) { return setCurrentPage(page); } })] })) : _jsx("div", { className: 'd-flex justify-content-center mt-5', children: _jsx("h5", { children: "Please change the search fields and search again." }) })] }), matchDogSuccess && matchData != null ? (_jsx(MatchedModal, { dogId: matchData })) : null] }));
};
export default SearchView;
