import React from 'react';
import logo from './logo.svg';
import Home from './components/Home'
import { Header } from './components/Header'
import './style/style.scss'
// import {HashRouter as Router, Switch,Route} from 'react-router-dom'
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
