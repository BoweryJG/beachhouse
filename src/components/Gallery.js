import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const images = [
  {
    url: 'https://ssl.cdn-redfin.com/photo/235/bigphoto/866/NJOC2032866_2.jpg',
    caption: 'Front of 125 Shore Dr, Brick, NJ'
  },
  {
    url: 'https://ssl.cdn-redfin.com/photo/235/mbphotov3/866/genMid.NJOC2032866_16_2.jpg',
    caption: 'Bayfront View from the Property'
  },
  {
    url: 'https://ssl.cdn-redfin.com/photo/235/mbphotov3/866/genMid.NJOC2032866_48_2.jpg',
    caption: 'Luxury Interior'
  },
  {
    url: 'https://ssl.cdn-redfin.com/photo/235/mbphotov3/866/genMid.NJOC2032866_25_2.jpg',
    caption: 'Brick Beach Nearby'
  },
  {
    url: 'https://ssl.cdn-redfin.com/photo/235/mbphotov3/866/genMid.NJOC2032866_38_2.jpg',
    caption: 'Private Bayfront Access'
  }
];

const Gallery = () => (
  <Carousel autoPlay={false} navButtonsAlwaysVisible>
    {images.map((img, idx) => (
      <Card key={idx} sx={{ maxWidth: 800, margin: '0 auto' }}>
        <CardMedia component="img" height="400" image={img.url} alt={img.caption} />
        <CardContent>
          <Typography variant="subtitle1" align="center">{img.caption}</Typography>
        </CardContent>
      </Card>
    ))}
  </Carousel>
);

export default Gallery;
