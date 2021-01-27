import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import Content from '../landingpage/Content';
import Footer from '../landingpage/Footer';
import Header from '../landingpage/Header';

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Content />
      <Footer />
    </>
  );
}
