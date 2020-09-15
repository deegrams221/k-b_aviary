import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import Content from '../src/components/Content';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
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
