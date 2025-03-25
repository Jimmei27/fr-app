import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoginView from './pages/LoginView';
import SearchView from './pages/SearchView';
import './App.css';
function App() {
    var queryClient = new QueryClient();
    return (_jsx(QueryClientProvider, { client: queryClient, children: _jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: '/login', element: _jsx(LoginView, {}) }), _jsx(Route, { path: '/search', element: _jsx(SearchView, {}) }), _jsx(Route, { path: '*', element: _jsx(Navigate, { to: '/login' }) })] }) }) }));
}
export default App;
