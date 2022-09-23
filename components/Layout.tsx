import * as React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({children}:JSX.ElementChildrenAttribute):JSX.Element {
  return (
    <>
    <Header/>
    {children}
      <Footer/>
    </>
  )
}