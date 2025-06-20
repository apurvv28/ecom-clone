import { Box, Typography, Button, styled, useTheme, useMediaQuery } from '@mui/material';
import { Masonry } from '@mui/lab';

const ProductCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  minWidth: '280px', // Fixed width for mobile scroll
  '&:hover .image-overlay, &.active .image-overlay': {
    opacity: 1,
  },
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const ImageOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: theme.spacing(2),
  opacity: 0,
  transition: 'opacity 0.3s ease',
  color: 'white',
  [theme.breakpoints.down('sm')]: {
    opacity: 1, // Always show on mobile
    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
  },
}));

const products = [
  { name: 'Zurich Vision 60×60', originalPrice: '44209 SAR', salePrice: '237.99 SAR', image: 'img1' },
  { name: 'Zurich Pearl 60×60', originalPrice: '44209 SAR', salePrice: '312.49 SAR', image: 'img2' },
  { name: 'Zurich Grey 60×60', originalPrice: '44209 SAR', salePrice: '312.49 SAR', image: 'img3' },
  { name: 'Zurich Dark Grey 60×60', originalPrice: '44209 SAR', salePrice: '312.49 SAR', image: 'img4' },
  { name: 'Windsor White Oak', originalPrice: '44900 SAR', salePrice: '312.49 SAR', image: 'img5' },
  { name: 'Sicily Grey Décor 30×60', originalPrice: '44900 SAR', salePrice: '312.49 SAR', image: 'img6' },
  { name: 'Sardinia White', originalPrice: '44900 SAR', salePrice: '312.49 SAR', image: 'img7' },
  { name: 'Sicily Grey 30×60', originalPrice: '44900 SAR', salePrice: '312.49 SAR', image: 'img8' },
];

const ProductGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTouchStart = (e) => {
    e.currentTarget.classList.add('active');
  };

  const handleTouchEnd = (e) => {
    setTimeout(() => {
      e.currentTarget.classList.remove('active');
    }, 500);
  };

  if (isMobile) {
    return (
      <Box sx={{ px: 2, py: 4 }}>
        <Box sx={{ 
          display: 'flex',
          overflowX: 'auto',
          gap: 2,
          py: 1,
          scrollSnapType: 'x mandatory',
          '& > *': {
            scrollSnapAlign: 'start',
          },
          '::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}>
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <Box
                component="img"
                src={`/${product.image}.jpg`}
                alt={product.name}
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
              <ImageOverlay className="image-overlay">
                <Typography variant="h6" fontWeight="bold">
                  {product.name}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                  <Typography variant="body2" sx={{ textDecoration: 'line-through' }}>
                    {product.originalPrice}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    {product.salePrice}
                  </Typography>
                </Box>
                <Button 
                  variant="contained" 
                  size="small" 
                  sx={{ mt: 2, alignSelf: 'flex-start' }}
                >
                  View Details
                </Button>
              </ImageOverlay>
            </ProductCard>
          ))}
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: 4 }}>
      <Masonry
        columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        spacing={3}
      >
        {products.map((product, index) => (
          <ProductCard key={index}>
            <Box
              component="img"
              src={`/${product.image}.jpg`}
              alt={product.name}
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
            <ImageOverlay className="image-overlay">
              <Typography variant="h6" fontWeight="bold">
                {product.name}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                <Typography variant="body2" sx={{ textDecoration: 'line-through' }}>
                  {product.originalPrice}
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  {product.salePrice}
                </Typography>
              </Box>
              <Button 
                variant="contained" 
                size="small" 
                sx={{ mt: 2, alignSelf: 'flex-start' }}
              >
                View Details
              </Button>
            </ImageOverlay>
          </ProductCard>
        ))}
      </Masonry>
    </Box>
  );
};

export default ProductGrid;