import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
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
  Restaurant as RestaurantIcon,
  Info as InfoIcon
} from '@mui/icons-material';

// Restaurant data with travel times from 125 Shore Drive, Brick Township, NJ
const restaurants = [
  {
    id: 1,
    name: "River Rock Restaurant & Marina Bar",
    category: "American, Seafood",
    address: "1600 NJ-70, Brick Township, NJ 08724",
    description: "Tiki bar energy meets classic Jersey Shore fun—live music, big portions, and a deck that's always buzzing.",
    bestFor: "Happy hour, sunsets, and casual family meals",
    link: "https://riverrockbricknj.com/",
    travelTimes: {
      walking: {
        time: 45,
        distance: "2.2 miles",
        seasonalNotes: "Pleasant walk in summer, not recommended in winter"
      },
      biking: {
        time: 12,
        distance: "2.2 miles",
        seasonalNotes: "Good option spring through fall, bike lanes available on most of route"
      },
      driving: {
        time: 8,
        distance: "2.5 miles",
        seasonalNotes: "5-10 min longer during summer weekends and rush hour"
      }
    }
  },
  {
    id: 2,
    name: "Beacon 70",
    category: "American, Sports Bar",
    address: "799 NJ-70, Brick Township, NJ 08723",
    description: "A modern marina hangout with a sprawling menu and giant TVs—think burgers, sushi, and craft brews.",
    bestFor: "Lively nights and water views",
    link: "https://beacon70.com/",
    travelTimes: {
      walking: {
        time: 55,
        distance: "2.7 miles",
        seasonalNotes: "Scenic route along water, but far for walking"
      },
      biking: {
        time: 15,
        distance: "2.7 miles",
        seasonalNotes: "Nice ride in good weather, some busy sections"
      },
      driving: {
        time: 10,
        distance: "3.0 miles",
        seasonalNotes: "Add 5-15 min during summer tourist season"
      }
    }
  },
  {
    id: 3,
    name: "The Brownstone Pancake Factory",
    category: "Breakfast, Brunch",
    address: "865 Mantoloking Rd, Brick Township, NJ 08723",
    description: "Instagram-worthy pancakes, wild toppings, and a fun, bustling crowd.",
    bestFor: "Family brunch and sweet tooths",
    link: "https://www.brownstonepancakefactory.com/",
    travelTimes: {
      walking: {
        time: 25,
        distance: "1.2 miles",
        seasonalNotes: "Walkable year-round, good sidewalks"
      },
      biking: {
        time: 7,
        distance: "1.2 miles",
        seasonalNotes: "Quick and easy bike ride"
      },
      driving: {
        time: 4,
        distance: "1.4 miles",
        seasonalNotes: "Busy on weekend mornings, parking can be limited"
      }
    }
  },
  {
    id: 4,
    name: "Via Veneto Italian Ristorante",
    category: "Italian",
    address: "2410 Adamston Rd, Brick Township, NJ 08723",
    description: "Old-school Italian with a loyal following—expect classic red sauce, big portions, and a bustling dining room.",
    bestFor: "Traditionalists and family gatherings",
    link: "https://www.viavenetoristorante.com/",
    travelTimes: {
      walking: {
        time: 35,
        distance: "1.7 miles",
        seasonalNotes: "Reasonable walk in good weather"
      },
      biking: {
        time: 10,
        distance: "1.7 miles",
        seasonalNotes: "Easy bike ride, some hills"
      },
      driving: {
        time: 6,
        distance: "1.9 miles",
        seasonalNotes: "Quick drive, ample parking available"
      }
    }
  },
  {
    id: 5,
    name: "Jersey Shore BBQ",
    category: "BBQ",
    address: "77 Brick Blvd, Brick Township, NJ 08723",
    description: "Casual, beachy smokehouse with brisket, ribs, and all the fixings—plus outdoor seating.",
    bestFor: "BBQ fans and big appetites",
    link: "https://www.jerseyshorebbq.com/",
    travelTimes: {
      walking: {
        time: 40,
        distance: "2.0 miles",
        seasonalNotes: "Long walk, better options available"
      },
      biking: {
        time: 12,
        distance: "2.0 miles",
        seasonalNotes: "Moderate ride, some busy roads"
      },
      driving: {
        time: 7,
        distance: "2.2 miles",
        seasonalNotes: "Easy drive, traffic minimal except during peak summer"
      }
    }
  }
];

// Helper function to get color based on travel time
const getTimeColor = (minutes) => {
  if (minutes <= 10) return 'success.main';
  if (minutes <= 20) return 'info.main';
  if (minutes <= 30) return 'warning.main';
  return 'error.main';
};

// Season-based advice component
const SeasonalNote = ({ note }) => (
  <Tooltip title={note} arrow placement="top">
    <InfoIcon fontSize="small" color="action" sx={{ ml: 1, cursor: 'help' }} />
  </Tooltip>
);

const RestaurantTravelTimes = () => {
  // State for selected restaurant
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  
  // Current season based on current date
  const getCurrentSeason = () => {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return 'Spring';
    if (month >= 5 && month <= 7) return 'Summer';
    if (month >= 8 && month <= 10) return 'Fall';
    return 'Winter';
  };
  
  const currentSeason = getCurrentSeason();
  
  // Find the selected restaurant object
  const restaurant = restaurants.find(r => r.id.toString() === selectedRestaurant);
  
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Travel Times from 125 Shore Drive
      </Typography>
      
      <Typography paragraph>
        Planning your dining adventure? Here's how long it takes to reach popular restaurants from the beach house by different transportation methods. Times may vary based on traffic, weather, and season.
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
        <Chip 
          icon={<AccessTime />} 
          label={`Current Season: ${currentSeason}`} 
          color="primary" 
          variant="outlined" 
        />
        
        <FormControl sx={{ minWidth: 250 }}>
          <InputLabel id="restaurant-select-label">Select a Restaurant</InputLabel>
          <Select
            labelId="restaurant-select-label"
            id="restaurant-select"
            value={selectedRestaurant}
            label="Select a Restaurant"
            onChange={(e) => setSelectedRestaurant(e.target.value)}
          >
            <MenuItem value=""><em>Choose a restaurant</em></MenuItem>
            {restaurants.map((r) => (
              <MenuItem key={r.id} value={r.id.toString()}>{r.name} ({r.category})</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      
      {restaurant ? (
        <Card elevation={2}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {restaurant.name}
            </Typography>
            
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {restaurant.category} • {restaurant.bestFor}
            </Typography>
            
            <Typography variant="body2" paragraph>
              {restaurant.description}
            </Typography>
            
            <Divider sx={{ my: 2 }} />
            
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: getTimeColor(restaurant.travelTimes.walking.time) }}>
                    <DirectionsWalk />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary={`Walking: ${restaurant.travelTimes.walking.time} min (${restaurant.travelTimes.walking.distance})`}
                  secondary={
                    <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                      <span>Best in good weather</span>
                      <SeasonalNote note={restaurant.travelTimes.walking.seasonalNotes} />
                    </Box>
                  }
                />
              </ListItem>
              
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: getTimeColor(restaurant.travelTimes.biking.time) }}>
                    <DirectionsBike />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary={`Biking: ${restaurant.travelTimes.biking.time} min (${restaurant.travelTimes.biking.distance})`}
                  secondary={
                    <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                      <span>Moderate effort</span>
                      <SeasonalNote note={restaurant.travelTimes.biking.seasonalNotes} />
                    </Box>
                  }
                />
              </ListItem>
              
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: getTimeColor(restaurant.travelTimes.driving.time) }}>
                    <DirectionsCar />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary={`Driving: ${restaurant.travelTimes.driving.time} min (${restaurant.travelTimes.driving.distance})`}
                  secondary={
                    <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                      <span>Traffic varies by season</span>
                      <SeasonalNote note={restaurant.travelTimes.driving.seasonalNotes} />
                    </Box>
                  }
                />
              </ListItem>
            </List>
            
            <Box sx={{ mt: 2, textAlign: 'right' }}>
              <Typography variant="body2">
                <a href={restaurant.link} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ) : (
        <Box sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', borderRadius: 1 }}>
          <Typography variant="body1" color="text.secondary">
            Select a restaurant from the dropdown to see travel times
          </Typography>
        </Box>
      )}
      
      <Box sx={{ mt: 4, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
        <Typography variant="subtitle2" gutterBottom>
          <RestaurantIcon fontSize="small" sx={{ mr: 1, verticalAlign: 'middle' }} />
          Travel Time Notes:
        </Typography>
        <Typography variant="body2">
          • Summer (June-August): Add 5-15 minutes to driving times on weekends and holidays due to tourist traffic.
          <br />
          • Winter (December-February): Walking and biking not recommended during inclement weather.
          <br />
          • Spring/Fall: Ideal seasons for walking or biking to nearby restaurants.
          <br />
          • All times are estimates and may vary based on walking speed, traffic conditions, and exact route taken.
        </Typography>
      </Box>
    </Box>
  );
};

export default RestaurantTravelTimes;
