import {
  AdbRounded,
  EmailRounded,
  FacebookRounded,
  Instagram,
  LinkedIn,
  LocationOnRounded,
  PhoneRounded,
} from '@mui/icons-material';
import { Box, Grid, Link, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="div" sx={{ backgroundColor: '#091020', pt: 10, pb: 5 }}>
      <Grid container spacing={3} columns={15} sx={{ px: 5, }}>
        <Grid item xs={3} md={3} sx={{ display: 'flex', alignItems: 'flex-start' }}>
          <AdbRounded sx={{ display: { xs: 'none', md: 'flex' } }} color="success" fontSize="large" />
          <Typography variant="h4" color="white" fontWeight="bold" sx={{ pl: 1 }}>
            Nhà Thầu Việt
          </Typography>
        </Grid>
        <Grid item xs={3} md={3}>
          <Typography color="white" variant="h5" fontWeight="bold">
            Useful Links
          </Typography>
          <Link sx={{ color: 'white' }} href="#">
            <Typography color="white" sx={{ pt: 1 }} variant="body1" fontWeight="bold">
              Thông tin
            </Typography>
          </Link>
          <Link sx={{ color: 'white' }} href="#">
            <Typography color="white" sx={{ pt: 1 }} variant="body1" fontWeight="bold">
              Dự án
            </Typography>
          </Link>
          <Link sx={{ color: 'white' }} href="#">
            <Typography color="white" sx={{ pt: 1 }} variant="body1" fontWeight="bold">
              Dịch vụ
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={3} md={3}>
          <Typography color="white" variant="h5" fontWeight="bold">
            Support
          </Typography>
          <Link sx={{ color: 'white' }} href="#">
            <Typography color="white" sx={{ pt: 1 }} variant="body1" fontWeight="bold">
              Blog
            </Typography>
          </Link>
          <Link sx={{ color: 'white' }} href="#">
            <Typography color="white" sx={{ pt: 1 }} variant="body1" fontWeight="bold">
              FAQ
            </Typography>
          </Link>
          <Link sx={{ color: 'white' }} href="#">
            <Typography color="white" sx={{ pt: 1 }} variant="body1" fontWeight="bold">
              Liên hệ
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={3} md={3}>
          <Typography color="white" variant="h5" fontWeight="bold">
            Get in Touch
          </Typography>
          <Link sx={{ color: 'white', display: 'flex', alignItems: 'center' }} href="#">
            <LocationOnRounded color="primary" />
            <Typography color="white" sx={{ pt: 1, pl: 1 }} variant="body1" fontWeight="bold">
              Domino Street, District 456, Los Angeles USA
            </Typography>
          </Link>
          <Link sx={{ color: 'white', display: 'flex', alignItems: 'center' }} href="#">
            <PhoneRounded color="primary" />
            <Typography color="white" sx={{ pt: 1, pl: 1 }} variant="body1" fontWeight="bold">
              +44 652 762 887
            </Typography>
          </Link>
          <Link sx={{ color: 'white', display: 'flex', alignItems: 'center' }} href="#">
            <EmailRounded color="primary" />
            <Typography color="white" sx={{ pt: 1, pl: 1 }} variant="body1" fontWeight="bold">
              hello@mandor.com
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={3} md={3}>
          <Typography color="white" variant="h5" fontWeight="bold">
            Stay Connect
          </Typography>
          <Box component="div" sx={{ display: 'flex', pt: 1 }}>
            <Link sx={{ color: 'white', display: 'flex', alignItems: 'center' }} href="#">
              <FacebookRounded color="primary" fontSize="large" />
            </Link>
            <Link sx={{ color: 'white', display: 'flex', alignItems: 'center', pl: 1 }} href="#">
              <Instagram color="primary" fontSize="large" />
            </Link>
            <Link sx={{ color: 'white', display: 'flex', alignItems: 'center', pl: 1 }} href="#">
              <LinkedIn color="primary" fontSize="large" />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
