import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

export default function MainLayout() {
  return (
    <>
      <Header />
      {/* <Container maxWidth="lg"> */}
      <Outlet />
      {/* </Container> */}
      <Footer />
    </>
  );
}
