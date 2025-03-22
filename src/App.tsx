import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoginView from './pages/LoginView'
import SearchView from './SearchPage/SearchView';

import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginView/>} />
          <Route path='/search' element={<SearchView/>} />
          <Route path='*' element={<Navigate to={isLoggedIn ? "/search" : '/login'} />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
