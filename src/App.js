import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import Content from '../src/components/landingpage/Content';
import Footer from '../src/components/landingpage/Footer';
import Header from '../src/components/landingpage/Header';
import './App.css';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  );
}
