import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const Guestbook = () => {
  const [entries, setEntries] = useState([
    { name: 'Jane', message: 'Had a wonderful stay—sunsets were magical!' },
    { name: 'Mike', message: 'Loved kayaking from the backyard!' }
  ]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message) {
      setEntries([{ name, message }, ...entries]);
      setName('');
      setMessage('');
    }
  };

  return (
    <Card sx={{ maxWidth: 600, margin: '0 auto', mb: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>Guestbook</Typography>
        <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
          <TextField label="Name" value={name} onChange={e => setName(e.target.value)} size="small" required sx={{ mr: 2 }} />
          <TextField label="Message" value={message} onChange={e => setMessage(e.target.value)} size="small" required sx={{ mr: 2, width: 250 }} />
          <Button type="submit" variant="contained" color="primary">Sign</Button>
        </form>
        <List>
          {entries.map((entry, idx) => (
            <ListItem key={idx}>
              <ListItemText primary={entry.name} secondary={entry.message} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
export default Guestbook;
