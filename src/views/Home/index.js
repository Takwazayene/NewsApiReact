import React from 'react';
import HomeLayout from '../Shared/layouts/Home';
import News from './subComponents/News';

export default function Home() {
  return (
    <HomeLayout>
      <News title="Home Page" />
    </HomeLayout>
  );
}
