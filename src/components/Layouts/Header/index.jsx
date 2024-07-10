import AdbIcon from '@mui/icons-material/Adb';
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import { ROUTE_PATH } from '../../../config/route_paths';

const pages = [
  { pathName: ROUTE_PATH.HOME, name: 'Trang chủ' },
  { pathName: ROUTE_PATH.SERVICE, name: 'Dịch vụ' },
  { pathName: '/', name: 'Dự án' },
  { pathName: '/', name: 'Thông tin' },
  { pathName: '/', name: 'Liên hệ' },
  { pathName: '/', name: 'Blog' },
  { pathName: '/', name: 'Nhân viên' },
];

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="success" style={{ background: 'transparent', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} color="success" />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                sx={{ my: 2, color: location.pathname === page.pathName ? 'white' : 'black', display: 'block' }}
                onClick={() => navigate(page.pathName)}
                variant={location.pathname === page.pathName ? 'contained' : 'text'}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button variant="contained" sx={{ mr: 1 }} color="success">
              Báo giá thi công
            </Button>
            <Button variant="outlined">Đăng ký</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
