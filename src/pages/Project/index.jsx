import { ArrowForwardIosRounded } from '@mui/icons-material';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

export default function Project() {
  return (
    <Box component="div" sx={{ pt: 2 }}>
      <Container component="div">
        <Typography variant="h4" fontWeight="bold" sx={{ textAlign: 'center' }}>
          Chúng tôi cung cấp đội ngũ và kết quả làm việc tốt nhất
        </Typography>
      </Container>

      <Container component="div" sx={{ pt: 15 }}>
        <Typography textAlign="center" variant="h4" fontWeight="bold">
          Dự án của chúng tôi
        </Typography>
        <Box sx={{ flexGrow: 1, mt: 2 }}>
          <Grid container spacing={3}>
            {[
              {
                name: 'Nhà thiết kế hiện đại',
                image:
                  'https://bizweb.dktcdn.net/100/369/827/files/50271371-759755064399890-6462199697548247040-n5.jpg?v=1620638792735',
              },
              {
                name: 'Căn hộ',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs3VdzX3r2mw8C6UmiCb07xeaw3sHKnRyoEA&s',
              },
              {
                name: 'Biệt thự',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBPUAvMPTEM__omk0Bf3GMf0sfZdm6GlE5w&s',
              },
            ].map((value, index) => (
              <Grid item xs={6} md={6} key={index}>
                <Box
                  sx={{
                    border: '2px solid',
                    height: 'max-content',
                    p: 2,
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <Box component="img" src={value.image} height={300} />
                    <Typography sx={{ mt: 1, textAlign: 'center' }} variant="h5" fontWeight="bold">
                      {value.name}
                    </Typography>
                  </div>
                  <Box component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button endIcon={<ArrowForwardIosRounded />} sx={{ mt: 1 }}>
                      Chi tiết
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Container component="div" sx={{ py: 15 }}>
        <Grid container spacing={3}>
          <Grid item xs={4} md={4}>
            <Typography variant="h4" fontWeight="bold">
              $812+
              <br />
              Tiền lời
            </Typography>
          </Grid>
          <Grid item xs={4} md={4}>
            <Typography variant="h4" fontWeight="bold">
              150+
              <br />
              Khách hàng
            </Typography>
          </Grid>
          <Grid item xs={4} md={4}>
            <Typography variant="h4" fontWeight="bold">
              400+
              <br />
              Dự án hoàn thành
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
