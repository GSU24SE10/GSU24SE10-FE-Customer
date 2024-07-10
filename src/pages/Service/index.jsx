import {
  ApartmentRounded,
  ArrowForwardIosRounded,
  BentoRounded,
  BuildRounded,
  CheckCircleRounded,
  HomeRounded,
  HouseSidingRounded,
  OtherHousesRounded,
} from '@mui/icons-material';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

export default function Service() {
  return (
    <Box component="div" sx={{ pt: 2 }}>
      <Container component="div">
        <Typography variant="h2" fontWeight="bold" sx={{ textAlign: 'center' }}>
          Chúng tôi cung cấp dịch vụ tốt nhất
        </Typography>
      </Container>

      <Container component="div">
        <Typography variant="h4" fontWeight="bold" sx={{ textAlign: 'center', mt: 20 }}>
          Dịch vụ tốt nhất của chúng tôi
        </Typography>
      </Container>

      <Box component="div">
        <Box sx={{ mt: 10, width: '100%' }}>
          <Container>
            <Box sx={{ flexGrow: 1, mt: 2 }}>
              <Grid container spacing={3}>
                {[
                  { title: 'Báo giá thi công', description: 'aaaa', icon: <HomeRounded sx={{ fontSize: 60 }} /> },
                  { title: 'Cải tạo nhà cửa', description: 'aaaa', icon: <BuildRounded sx={{ fontSize: 60 }} /> },
                  { title: 'Tư vấn xây dựng', description: 'aaaa', icon: <ApartmentRounded sx={{ fontSize: 60 }} /> },
                  {
                    title: 'Giám sát xây dựng',
                    description: 'aaaa',
                    icon: <HouseSidingRounded sx={{ fontSize: 60 }} />,
                  },
                  { title: 'Nhà xanh', description: 'aaaa', icon: <OtherHousesRounded sx={{ fontSize: 60 }} /> },
                  { title: 'Thi công hoàn thiện', description: 'aaaa', icon: <BentoRounded sx={{ fontSize: 60 }} /> },
                ].map((item, index) => (
                  <Grid item xs={4} md={4} key={index}>
                    <Box
                      sx={{
                        border: '2px solid',
                        height: 200,
                        p: 2,
                        backgroundColor: 'white',
                        borderRadius: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                      }}
                    >
                      <div>
                        {item.icon}
                        <Typography variant="h5" fontWeight="bold">
                          {item.title}
                        </Typography>
                        <Typography variant="body2">{item.description}</Typography>
                      </div>
                      <Button sx={{ mt: 2 }} endIcon={<ArrowForwardIosRounded />}>
                        Xem chi tiết dịch vụ
                      </Button>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>

      <Container component="div" sx={{ pt: 20 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ width: '60%' }}>
          Giải pháp xây dựng chất lượng cao & đáng tin cậy
        </Typography>
        <Box sx={{ flexGrow: 1, mt: 2 }}>
          <Grid container spacing={3}>
            {[
              {
                name: 'Báo giá kiến trúc',
                icon: <HomeRounded sx={{ fontSize: 60 }} />,
              },
              {
                name: 'Báo giá phần thô',
                icon: <BuildRounded sx={{ fontSize: 60 }} />,
              },
              {
                name: 'Báo giá hoàn thiện',
                icon: <ApartmentRounded sx={{ fontSize: 60 }} />,
              },
            ].map((value, index) => (
              <Grid item xs={4} md={4} key={index}>
                <Box
                  sx={{
                    border: '2px solid',
                    height: 150,
                    p: 2,
                    backgroundColor: 'white',
                    borderRadius: 2,
                  }}
                >
                  <CheckCircleRounded sx={{ fontSize: 60 }} />
                  <Typography variant="h5" fontWeight="bold">
                    {value.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Box component="div">
        <Box
          sx={{
            position: 'relative',
            backgroundColor: '#091020',
            top: 50,
            mt: 20,
            height: 800,
          }}
        >
          <Box sx={{ mt: 10, position: 'absolute', top: -250, width: '100%' }}>
            <Container>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  component="img"
                  src="https://static.spacet.vn/image-resized/1024x10240_max/img/blog/2023-04-24/top-29-mau-nha-cap-4-mai-thai-dep-kho-cuong-6445fa84dafc28da3398eae5.webp"
                  height={400}
                ></Box>
              </Box>
              <Typography variant="h4" color="white" fontWeight="bold" width={500} sx={{ pt: 2 }}>
                Biến dự án trong mơ của bạn thành hiện thực với Nhà Thầu Việt
              </Typography>
              <Button sx={{ mt: 2 }} variant="contained">
                Báo giá thi công
              </Button>
              <Box sx={{ mt: 5 }}>
                <Typography variant="h4" textAlign="center" color="white">
                  Đánh giá của khách hàng
                </Typography>
                <Box sx={{ flexGrow: 1, mt: 2 }}>
                  <Grid container spacing={3}>
                    {[
                      {
                        name: 'Khách hàng 1',
                        image:
                          'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg',
                        content: 'noi dung 1',
                      },
                      {
                        name: 'Khách hàng 2',
                        image:
                          'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg',
                        content: 'noi dung 2',
                      },
                      {
                        name: 'Khách hàng 3',
                        image:
                          'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg',
                        content: 'noi dung 3',
                      },
                    ].map((value, index) => (
                      <Grid item xs={4} md={4} key={index}>
                        <Box
                          sx={{
                            border: '2px solid',
                            height: 'max-content',
                            p: 2,
                            backgroundColor: 'white',
                            borderRadius: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                          }}
                        >
                          <Box component="img" src={value.image} sx={{ borderRadius: '50%', width: 50 }} />
                          <Typography sx={{ mt: 1 }} variant="subtitle2">
                            {value.content}
                          </Typography>
                          <Typography sx={{ mt: 1 }} variant="body1" fontWeight="bold">
                            {value.name}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                <Box component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button variant="contained" sx={{ mt: 5 }}>
                    Xem thêm đánh giá
                  </Button>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
