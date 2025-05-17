import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const contacts = [
  { title: 'Police/Fire Emergency', description: '911' },
  { title: 'Brick Township Police', description: '(732) 262-1100' },
  { title: 'Brick Township Fire', description: '(732) 458-4100' },
  { title: 'Urgent Care', description: 'AFC Urgent Care: (732) 262-9500' },
  { title: 'Poison Control', description: '1-800-222-1222' },
  { title: 'Utility Outage', description: 'JCP&L: 1-888-544-4877' },
];

const EmergencyInfo = () => (
  <Card sx={{ maxWidth: 600, margin: '0 auto', mb: 4 }}>
    <CardContent>
      <Typography variant="h5" gutterBottom>Emergency Contacts</Typography>
      <List>
        {contacts.map((item, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={item.title} secondary={item.description} />
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);
export default EmergencyInfo;
