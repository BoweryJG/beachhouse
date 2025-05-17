import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const favorites = [
  { title: 'Best Sunset Spot', description: 'The dock at 125 Shore Dr—bring a camera!' },
  { title: 'Favorite Restaurant', description: 'River Rock Restaurant for outdoor dining and live music.' },
  { title: 'Quietest Beach Time', description: 'Early mornings at Brick Beach 1.' },
  { title: 'Hidden Gem', description: 'Kayak to the sandbar just off Windward Beach Park.' },
];

const Favorites = () => (
  <Card sx={{ maxWidth: 600, margin: '0 auto', mb: 4 }}>
    <CardContent>
      <Typography variant="h5" gutterBottom>Our Family’s Favorites & Tips</Typography>
      <List>
        {favorites.map((item, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={item.title} secondary={item.description} />
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);
export default Favorites;
