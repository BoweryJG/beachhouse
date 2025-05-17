import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const houseInfo = [
  { title: 'WiFi', description: 'Network: BeachHouse125, Password: ask owner' },
  { title: 'Garbage Day', description: 'Monday & Thursday (put bins out by 7am)' },
  { title: 'Recycling Day', description: 'Thursday (blue bin)' },
  { title: 'Grill', description: 'Propane tank in shed, turn off after use.' },
  { title: 'TV', description: 'Smart TV with Netflix, Hulu, Disney+ (use guest profile)' },
  { title: 'Check-out', description: 'Please leave keys on kitchen counter.' },
];

const HouseManual = () => (
  <Card sx={{ maxWidth: 600, margin: '0 auto', mb: 4 }}>
    <CardContent>
      <Typography variant="h5" gutterBottom>House Manual</Typography>
      <List>
        {houseInfo.map((item, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={item.title} secondary={item.description} />
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);
export default HouseManual;
