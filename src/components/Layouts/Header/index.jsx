import AdbIcon from '@mui/icons-material/Adb';
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar
} from '@mui/material';

const pages = [
  'Trang chủ',
  'Dịch vụ',
  'Dự án',
  'Thông tin',
  'Liên hệ',
  'Blog',
  'Nhân viên',
];

function Header() {

  return (
    <AppBar
      position="static"
      color="success"
      style={{ background: 'transparent', boxShadow: 'none' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            color="success"
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
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
