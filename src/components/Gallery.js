import React from 'react';
import { Card, CardMedia, CardContent, Typography, ImageList, ImageListItem } from '@mui/material';

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
  <ImageList cols={3} gap={8} sx={{ width: '100%', height: 300 }}>
    {images.map((img, idx) => (
      <ImageListItem key={idx}>
        <img src={img.url} alt={img.caption || `Gallery image ${idx + 1}`} loading="lazy" style={{ width: '100%', height: 'auto' }} />
      </ImageListItem>
    ))}
  </ImageList>
);

export default Gallery;
