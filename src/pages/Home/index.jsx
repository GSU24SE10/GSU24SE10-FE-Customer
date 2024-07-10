import {
  ApartmentRounded,
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
  BuildRounded,
  CheckCircleRounded,
  CloudUploadOutlined,
  HomeRounded,
  PercentRounded,
} from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Container, Grid, TextField, Typography, styled } from '@mui/material';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function Home() {
  return (
    <Box component="div" sx={{ pt: 2 }}>
      <Container component="div">
        <Typography variant="h2" fontWeight="bold" sx={{ textAlign: 'center' }}>
          Chúng tôi là Tập đoàn xây dựng hàng đầu
        </Typography>
        <>
          <img
            style={{ marginRight: 20 }}
            src="https://cdn.thuvienphapluat.vn/uploads/tintuc/2023/05/03/giam-dinh-xay-dung.jpg"
            height={230}
          />
          <img
            style={{ marginRight: 20 }}
            src="https://cdn.vietnambiz.vn/2019/12/1/photo-1-1575201255304457023286-crop-15752014571171076541059.jpg?width=600"
            height={230}
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShIsl7IJvdaVqlEk-Q0y52YtVd-FmHxs7zhQ&s"
            height={230}
          />
        </>
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
              <Typography sx={{ width: 500 }} variant="h4" fontWeight="bold">
                Giải pháp xây dựng chất lượng cao & đáng tin cậy
              </Typography>

              <Box sx={{ flexGrow: 1, mt: 2 }}>
                <Grid container spacing={3}>
                  {['Báo giá kiến trúc', 'Báo giá phần thô', 'Báo giá hoàn thiện'].map((name, index) => (
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
                          {name}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Container>
          </Box>
          <Box
            sx={{
              width: '100%',
              position: 'absolute',
              top: 140,
            }}
          >
            <Typography variant="h4" fontWeight="bold" color="white" textAlign="center">
              Báo giá ngay để nhận ngay ưu đãi giảm giá 15% trong hôm nay
            </Typography>
          </Box>
          <Box sx={{ position: 'absolute', top: 250, width: '100%' }}>
            <Container>
              <Typography variant="h4" fontWeight="bold" color="white">
                BÁO GIÁ THI CÔNG
              </Typography>
              <Box sx={{ flexGrow: 2 }}>
                <Grid container spacing={3}>
                  <Grid item xs={8} md={8}>
                    <Box
                      sx={{
                        backgroundColor: 'white',
                        p: 5,
                        mt: 2,
                        borderRadius: 2,
                        border: '2px solid',
                        flexGrow: 2,
                      }}
                    >
                      <Grid container spacing={3}>
                        <Grid item xs={6} md={6}>
                          <TextField sx={{ width: '100%' }} label="Họ Tên Khách Hàng" />
                          <TextField sx={{ mt: 2, width: '100%' }} label="Số Điện Thoại" />
                          <TextField sx={{ mt: 2, width: '100%' }} label="Địa Chỉ Công Trình" />
                          <TextField sx={{ mt: 2, width: '100%' }} label="Loại Công Trình" />
                          <TextField sx={{ mt: 2, width: '100%' }} label="Diện Tích" />
                        </Grid>
                        <Grid item xs={6} md={6}>
                          <Typography>Hình ảnh hiện trạng mặt bằng</Typography>
                          <Button
                            sx={{ mt: 3 }}
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadOutlined />}
                          >
                            Upload file
                            <VisuallyHiddenInput type="file" />
                          </Button>
                          <TextField sx={{ mt: 16, width: '100%' }} label="Mã giảm" />
                          <Box
                            sx={{
                              mt: 2,
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            <LoadingButton variant="contained">Gửi</LoadingButton>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <Typography color="white" sx={{ pt: 10 }}>
                      Bảng dự toán đã được đúc kết từ nhiều công trình được thực hiện bởi Nhà Thầu Việt. Từ bảng dự
                      toán, khách hàng có thể ước lượng được chi phí thực hiện công trình.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>

      <Container component="div" sx={{ pt: 10 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold">
          Dịch Vụ
        </Typography>
        <Box sx={{ flexGrow: 1, mt: 2 }}>
          <Grid container spacing={3}>
            {[
              {
                name: 'Báo giá thi công',
                icon: <HomeRounded sx={{ fontSize: 60 }} />,
              },
              {
                name: 'Cải tạo nhà cửa',
                icon: <BuildRounded sx={{ fontSize: 60 }} />,
              },
              {
                name: 'Tư vấn xây dựng',
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
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <div>
                    {value.icon}
                    <Typography variant="h5" fontWeight="bold">
                      {value.name}
                    </Typography>
                  </div>
                  <Button sx={{ mt: 2 }} endIcon={<ArrowForwardIosRounded />}>
                    Thông tin chi tiết
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" sx={{ mt: 5 }}>
            Xem thêm dịch vụ
          </Button>
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
                  src="https://kientrucauchau.vn/wp-content/uploads/2022/05/top-10-biet-thu-dep-nhat-viet-nam-hai-phong.webp"
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

      <Box component="div" sx={{ pt: 15 }}>
        <Typography textAlign="center" variant="h4" fontWeight="bold">
          Mẫu Nhà
        </Typography>
        <Box sx={{ flexGrow: 1, mt: 2 }}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={1.5}
              md={1.5}
              sx={{
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'center',
              }}
            >
              <ArrowBackIosNewRounded
                sx={{
                  backgroundColor: '#8F95B2',
                  fontSize: 20,
                  p: 1,
                  borderRadius: '50%',
                  opacity: 1,
                  color: 'white',
                  ':hover': {
                    cursor: 'pointer',
                  },
                }}
              />
            </Grid>
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
              <Grid item xs={3} md={3} key={index}>
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
            <Grid
              item
              xs={1.5}
              md={1.5}
              sx={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'center',
              }}
            >
              <ArrowForwardIosRounded
                sx={{
                  backgroundColor: '#8F95B2',
                  fontSize: 20,
                  p: 1,
                  borderRadius: '50%',
                  opacity: 1,
                  color: 'white',
                  ':hover': {
                    cursor: 'pointer',
                  },
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" sx={{ mt: 5 }}>
            Xem thêm mẫu nhà
          </Button>
        </Box>
      </Box>

      <Box component="div" sx={{ pt: 15 }}>
        <Typography textAlign="center" variant="h4" fontWeight="bold">
          Dự án
        </Typography>
        <Box sx={{ flexGrow: 1, mt: 2 }}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={1.5}
              md={1.5}
              sx={{
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'center',
              }}
            >
              <ArrowBackIosNewRounded
                sx={{
                  backgroundColor: '#8F95B2',
                  fontSize: 20,
                  p: 1,
                  borderRadius: '50%',
                  opacity: 1,
                  color: 'white',
                  ':hover': {
                    cursor: 'pointer',
                  },
                }}
              />
            </Grid>
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
              <Grid item xs={3} md={3} key={index}>
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
            <Grid
              item
              xs={1.5}
              md={1.5}
              sx={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'center',
              }}
            >
              <ArrowForwardIosRounded
                sx={{
                  backgroundColor: '#8F95B2',
                  fontSize: 20,
                  p: 1,
                  borderRadius: '50%',
                  opacity: 1,
                  color: 'white',
                  ':hover': {
                    cursor: 'pointer',
                  },
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" sx={{ mt: 5 }}>
            Xem thêm dự án
          </Button>
        </Box>
      </Box>

      <Container component="div" sx={{ pt: 15 }}>
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

      <Box component="div" sx={{ pt: 15 }}>
        <Box sx={{ backgroundColor: '#091020', p: 5 }}>
          <Grid container spacing={3}>
            <Grid item xs={8} md={8}>
              <Typography variant="h2" fontWeight="bold" color="white">
                Có một dự án trong tâm trí?
              </Typography>
            </Grid>
            <Grid item xs={4} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
              <Button variant="contained">Tạo báo giá ngay</Button>
              <PercentRounded
                sx={{
                  backgroundColor: 'red',
                  p: 1,
                  color: 'white',
                  borderRadius: '50%',
                  ml: 1,
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
