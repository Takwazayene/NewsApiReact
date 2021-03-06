import '../../layouts/_style.scss';
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../header';
import Footer from '../../footer';

export default function Home(props) {
  const { children, title } = props;
  
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>


      <div className="outer-container">
        <Header />
        <div className="container-root mainWrap ">{children}</div>
        <Footer />
      </div>
    </>
  );
}
