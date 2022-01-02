import React, { Fragment } from 'react';
// import logo from './logo.svg';
import Home from './pages/Home'
import { Header } from './components/Header'
import SideBar from './components/SideBar';
import PlayerBar from './components/player-cmps/PlayerBar';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
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
    <RecoilRoot>
      <div className="App">
        {/* <header>
        <Header />
      </header> */}
        <Fragment>
          <main className="layout-main-container">
            <section className="layout-page-container">
              <SideBar />
              <Routes>
                <Route path="/home" element={<Home />}></Route>
              </Routes>
            </section>
            <PlayerBar />
          </main>
        </Fragment>
      </div>
    </RecoilRoot>
  );
}

export default App;
