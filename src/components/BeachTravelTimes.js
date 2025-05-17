import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Chip,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Tooltip,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { 
  DirectionsWalk, 
  DirectionsBike, 
  DirectionsCar, 
  AccessTime,
  BeachAccess,
  Info as InfoIcon,
  LocalParking,
  WaterDrop
} from '@mui/icons-material';

// Beach data with travel times from 125 Shore Drive, Brick Township, NJ
const beaches = [
  {
    id: 1,
    name: "Brick Beach I",
    address: "310 Route 35 North, Brick Township, NJ",
    description: "Large parking lot, outdoor showers, concessions, lockers, and restrooms.",
    features: "Oceanfront, family-friendly, lifeguards",
    parkingInfo: "Large lot, paid parking (badge purchase may include parking)",
    link: "https://www.bricknj.gov/departments/recreation/beaches.php",
    travelTimes: {
      walking: {
        time: 35,
        distance: "1.7 miles",
        seasonalNotes: "Pleasant walk in summer, follow Rt 35 North"
      },
      biking: {
        time: 10,
        distance: "1.7 miles",
        seasonalNotes: "Easy bike ride, bike lanes available on most of route"
      },
      driving: {
        time: 6,
        distance: "1.9 miles",
        seasonalNotes: "5-10 min longer during summer weekends due to beach traffic"
      }
    },
    waterType: "Ocean",
    bestFor: "Families, swimming, sunbathing"
  },
  {
    id: 2,
    name: "Brick Beach II",
    address: "350 Route 35 North, Brick Township, NJ",
    description: "Direct beach access, lifeguards, showers, restrooms, and concessions.",
    features: "Oceanfront, less crowded than Beach I",
    parkingInfo: "Limited parking, fills up quickly on weekends",
    link: "https://www.bricknj.gov/departments/recreation/beaches.php",
    travelTimes: {
      walking: {
        time: 40,
        distance: "2.0 miles",
        seasonalNotes: "Moderate walk, follow Rt 35 North"
      },
      biking: {
        time: 12,
        distance: "2.0 miles",
        seasonalNotes: "Easy bike ride, some busy sections during summer"
      },
      driving: {
        time: 7,
        distance: "2.2 miles",
        seasonalNotes: "Parking can be difficult on summer weekends"
      }
    },
    waterType: "Ocean",
    bestFor: "Quieter beach experience, swimming"
  },
  {
    id: 3,
    name: "Brick Beach III",
    address: "440 Route 35 North, Brick Township, NJ",
    description: "Large parking lot, showers, restrooms, concessions. Wide sandy area.",
    features: "Oceanfront, well-marked, easily accessible from Route 35",
    parkingInfo: "Large lot, paid parking, more availability than other beaches",
    link: "https://www.bricknj.gov/departments/recreation/beaches.php",
    travelTimes: {
      walking: {
        time: 45,
        distance: "2.2 miles",
        seasonalNotes: "Long walk, better options available"
      },
      biking: {
        time: 13,
        distance: "2.2 miles",
        seasonalNotes: "Moderate ride, follow Rt 35 North"
      },
      driving: {
        time: 8,
        distance: "2.4 miles",
        seasonalNotes: "Usually 5-15 min longer during peak summer season"
      }
    },
    waterType: "Ocean",
    bestFor: "Families, swimming, sunbathing, ample parking"
  },
  {
    id: 4,
    name: "Windward Beach Park",
    address: "265 Princeton Avenue, Brick Township, NJ",
    description: "Riverfront beach, great for picnics, playgrounds, and events.",
    features: "Hosts Brick's Summerfest concerts and fireworks",
    parkingInfo: "Free parking, large lot",
    link: "https://www.bricknj.gov/departments/recreation/parks-playgrounds.php",
    travelTimes: {
      walking: {
        time: 20,
        distance: "1.0 mile",
        seasonalNotes: "Easy walk year-round, good sidewalks"
      },
      biking: {
        time: 6,
        distance: "1.0 mile",
        seasonalNotes: "Quick and easy bike ride on residential streets"
      },
      driving: {
        time: 4,
        distance: "1.1 miles",
        seasonalNotes: "Quick drive, ample parking except during special events"
      }
    },
    waterType: "River/Bay",
    bestFor: "Families, picnics, events, dog walks"
  },
  {
    id: 5,
    name: "Bay Beach",
    address: "Baywood Boulevard, Brick Township, NJ",
    description: "Calm waters, great for kids and families.",
    features: "Bay swimming, quieter than ocean beaches",
    parkingInfo: "Limited street parking",
    link: "https://www.bricknj.gov/departments/recreation/beaches.php",
    travelTimes: {
      walking: {
        time: 15,
        distance: "0.7 miles",
        seasonalNotes: "Pleasant short walk through residential area"
      },
      biking: {
        time: 4,
        distance: "0.7 miles",
        seasonalNotes: "Very quick bike ride on quiet streets"
      },
      driving: {
        time: 3,
        distance: "0.8 miles",
        seasonalNotes: "Quick drive, limited parking so consider walking/biking"
      }
    },
    waterType: "Bay",
    bestFor: "Families with small children, calm water swimming"
  }
];

// Helper function to get color based on travel time
const getTimeColor = (minutes) => {
  if (minutes <= 10) return 'success.main';
  if (minutes <= 20) return 'info.main';
  if (minutes <= 30) return 'warning.main';
  return 'error.main';
};

// Helper function to get icon based on water type
const getWaterTypeIcon = (type) => {
  switch (type.toLowerCase()) {
    case 'ocean':
      return <WaterDrop sx={{ color: 'primary.main' }} />;
    case 'bay':
      return <WaterDrop sx={{ color: 'info.main' }} />;
    case 'river/bay':
      return <WaterDrop sx={{ color: 'secondary.main' }} />;
    default:
      return <WaterDrop />;
  }
};

// Season-based advice component
const SeasonalNote = ({ note }) => (
  <Tooltip title={note} arrow placement="top">
    <InfoIcon fontSize="small" color="action" sx={{ ml: 1, cursor: 'help' }} />
  </Tooltip>
);

const BeachTravelTimes = () => {
  // State for selected beach
  const [selectedBeach, setSelectedBeach] = useState('');
  
  // Current season based on current date
  const getCurrentSeason = () => {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return 'Spring';
    if (month >= 5 && month <= 7) return 'Summer';
    if (month >= 8 && month <= 10) return 'Fall';
    return 'Winter';
  };
  
  const currentSeason = getCurrentSeason();
  
  // Find the selected beach object
  const beach = beaches.find(b => b.id.toString() === selectedBeach);
  
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Beach Travel Times from 125 Shore Drive
      </Typography>
      
      <Typography paragraph>
        Planning your beach day? Here's how long it takes to reach Brick Township beaches from the house by different transportation methods. Times may vary based on traffic, weather, and season.
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
        <Chip 
          icon={<AccessTime />} 
          label={`Current Season: ${currentSeason}`} 
          color="primary" 
          variant="outlined" 
        />
        
        <FormControl sx={{ minWidth: 250 }}>
          <InputLabel id="beach-select-label">Select a Beach</InputLabel>
          <Select
            labelId="beach-select-label"
            id="beach-select"
            value={selectedBeach}
            label="Select a Beach"
            onChange={(e) => setSelectedBeach(e.target.value)}
          >
            <MenuItem value=""><em>Choose a beach</em></MenuItem>
            {beaches.map((b) => (
              <MenuItem key={b.id} value={b.id.toString()}>
                {b.name} ({b.waterType})
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      
      {beach ? (
        <Card elevation={2}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <BeachAccess sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6">
                {beach.name}
              </Typography>
              <Chip 
                size="small" 
                label={beach.waterType} 
                color={beach.waterType.toLowerCase() === 'ocean' ? 'primary' : 'info'} 
                variant="outlined" 
                sx={{ ml: 2 }}
              />
            </Box>
            
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {beach.address} • {beach.bestFor}
            </Typography>
            
            <Typography variant="body2" paragraph>
              {beach.description}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocalParking sx={{ mr: 1, color: 'action.active' }} />
              <Typography variant="body2" color="text.secondary">
                <strong>Parking:</strong> {beach.parkingInfo}
              </Typography>
            </Box>
            
            <Divider sx={{ my: 2 }} />
            
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: getTimeColor(beach.travelTimes.walking.time) }}>
                    <DirectionsWalk />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary={`Walking: ${beach.travelTimes.walking.time} min (${beach.travelTimes.walking.distance})`}
                  secondary={
                    <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                      <span>Best in good weather</span>
                      <SeasonalNote note={beach.travelTimes.walking.seasonalNotes} />
                    </Box>
                  }
                />
              </ListItem>
              
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: getTimeColor(beach.travelTimes.biking.time) }}>
                    <DirectionsBike />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary={`Biking: ${beach.travelTimes.biking.time} min (${beach.travelTimes.biking.distance})`}
                  secondary={
                    <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                      <span>Moderate effort</span>
                      <SeasonalNote note={beach.travelTimes.biking.seasonalNotes} />
                    </Box>
                  }
                />
              </ListItem>
              
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: getTimeColor(beach.travelTimes.driving.time) }}>
                    <DirectionsCar />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary={`Driving: ${beach.travelTimes.driving.time} min (${beach.travelTimes.driving.distance})`}
                  secondary={
                    <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                      <span>Traffic varies by season</span>
                      <SeasonalNote note={beach.travelTimes.driving.seasonalNotes} />
                    </Box>
                  }
                />
              </ListItem>
            </List>
            
            <Box sx={{ mt: 2, textAlign: 'right' }}>
              <Typography variant="body2">
                <a href={beach.link} target="_blank" rel="noopener noreferrer">
                  More Information
                </a>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ) : (
        <Box sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', borderRadius: 1 }}>
          <Typography variant="body1" color="text.secondary">
            Select a beach from the dropdown to see travel times
          </Typography>
        </Box>
      )}
      
      <Box sx={{ mt: 4, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
        <Typography variant="subtitle2" gutterBottom>
          <BeachAccess fontSize="small" sx={{ mr: 1, verticalAlign: 'middle' }} />
          Beach Travel Notes:
        </Typography>
        <Typography variant="body2">
          • Summer (Memorial Day-Labor Day): Beach badges required for all beaches. Add 5-15 minutes to driving times on weekends due to beach traffic.
          <br />
          • Parking: Ocean beaches have paid parking lots that can fill up by mid-morning on summer weekends.
          <br />
          • Bay Beach and Windward Beach Park are closest to 125 Shore Drive and ideal for quick trips.
          <br />
          • Consider biking to avoid parking issues during peak summer season.
        </Typography>
      </Box>
    </Box>
  );
};

export default BeachTravelTimes;
