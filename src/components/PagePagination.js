import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Pagination } from "react-bootstrap";
var PagePagination = function (_a) {
    var currentPage = _a.currentPage, setCurrentPage = _a.setCurrentPage;
    var totalPages = Array.from({ length: 10 }, function (_, index) { return index + 1; });
    return (_jsxs(Pagination, { className: "justify-content-center py-4", children: [_jsx(Pagination.Prev, { onClick: function () { return currentPage > 1 && setCurrentPage(currentPage - 1); }, disabled: currentPage === 1 }), totalPages.map(function (page) { return (_jsx(Pagination.Item, { active: page === currentPage, onClick: function () { return setCurrentPage(page); }, children: page }, page)); }), _jsx(Pagination.Next, { onClick: function () { return currentPage < 10 && setCurrentPage(currentPage + 1); }, disabled: currentPage === 10 })] }));
};
export default PagePagination;
