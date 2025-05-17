import React, { useState } from 'react';
import { 
  CssBaseline, 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Box, 
  Tabs, 
  Tab, 
  Paper, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Button, 
  List, 
  ListItem, 
  ListItemText, 
  Divider,
  useMediaQuery
} from '@mui/material';
import { 
  BeachAccess, 
  Restaurant, 
  LocalGroceryStore, 
  DirectionsBoat, 
  Park, 
  Delete
} from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Map from './components/Map';
import Gallery from './components/Gallery';
import WeatherWidget from './components/WeatherWidget';
import Favorites from './components/Favorites';
import Guestbook from './components/Guestbook';
import EmergencyInfo from './components/EmergencyInfo';
import HouseManual from './components/HouseManual';
import DarkModeToggle from './components/DarkModeToggle';
import CrabbingSection from './components/CrabbingSection';
import './App.css';

// Create a custom theme with beach colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#006994', // Deep ocean blue
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffbe76', // Sandy gold
      contrastText: '#00334e',
    },
    background: {
      default: '#e6f2ff', // Light aqua
      paper: '#ffffff',
    },
    info: {
      main: '#13c4a3', // Aqua accent
    },
    warning: {
      main: '#ff7675', // Coral accent
    },
  },
  typography: {
    fontFamily: '"Open Sans", Arial, sans-serif',
    h1: {
      fontFamily: 'Montserrat, "Open Sans", Arial, sans-serif',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h2: {
      fontFamily: 'Montserrat, "Open Sans", Arial, sans-serif',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
    h3: {
      fontFamily: 'Montserrat, "Open Sans", Arial, sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'Montserrat, "Open Sans", Arial, sans-serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: 'Montserrat, "Open Sans", Arial, sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: 'Montserrat, "Open Sans", Arial, sans-serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: 'Open Sans, Arial, sans-serif',
    },
    body2: {
      fontFamily: 'Open Sans, Arial, sans-serif',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #e6f2ff 0%, #fffbe6 100%)',
          boxShadow: '0 4px 24px 0 rgba(0, 105, 148, 0.08)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          boxShadow: '0 8px 24px 0 rgba(0, 105, 148, 0.08)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, #006994 70%, #13c4a3 100%)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

// Tab panel component
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function App() {
  const [tabValue, setTabValue] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Dynamically switch theme based on dark mode
  const appliedTheme = React.useMemo(() => {
    return createTheme({
      ...theme,
      palette: {
        ...theme.palette,
        mode: darkMode ? 'dark' : 'light',
        background: {
          default: darkMode ? '#222e36' : '#e6f2ff',
          paper: darkMode ? '#293845' : '#ffffff',
        },
      },
    });
  }, [darkMode]);

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <BeachAccess sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Brick Township Beach House
          </Typography>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button color="inherit" onClick={() => setTabValue(0)}>Home</Button>
            <Button color="inherit" onClick={() => setTabValue(1)}>Beaches</Button>
            <Button color="inherit" onClick={() => setTabValue(2)}>Dining</Button>
            <Button color="inherit" onClick={() => setTabValue(3)}>Local Info</Button>
          </Box>
        </Toolbar>
        <Box sx={{ display: { md: 'none' } }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
          >
            <Tab label="Home" />
            <Tab label="Beaches" />
            <Tab label="Dining" />
            <Tab label="Local Info" />
          </Tabs>
        </Box>
      </AppBar>

      <Box 
        sx={{ 
          backgroundImage: 'url(https://ssl.cdn-redfin.com/photo/235/bigphoto/866/NJOC2032866_2.jpg)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          padding: 4
        }}
      >
        <Paper elevation={3} sx={{ p: 3, maxWidth: '80%', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            125 Shore Drive • Brick, NJ
          </Typography>
          <Typography variant="h6" gutterBottom align="center">
            Your Complete Guide to Brick Township's Coastal Paradise
          </Typography>
        </Paper>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <TabPanel value={tabValue} index={0}>
          <Typography variant="h4" gutterBottom>
            Welcome to Your Bayfront Paradise
          </Typography>
          <Typography paragraph>
            Congratulations on your stunning new home at 125 Shore Dr. in Brick Township, New Jersey! This custom-built 4-bedroom, 3.5-bathroom waterfront masterpiece, built in 2020, offers breathtaking unobstructed bay views and luxurious living. This guide provides essential information about your new coastal community, from beaches and parks to restaurants and local services.
          </Typography>

          {/* Home Essentials: Most used features up front */}
          <Box sx={{ my: 4 }}>
            <WeatherWidget />
          </Box>
          <Box sx={{ my: 4 }}>
            <Map />
          </Box>
          {/* Unique Local Experience */}
          <Box sx={{ my: 4 }}>
            <CrabbingSection />
          </Box>
          {/* Visual Gallery and Family Favorites */}
          <Box sx={{ my: 4 }}>
            <Gallery />
          </Box>
          <Box sx={{ my: 4 }}>
            <Favorites />
          </Box>
          {/* Community & Memories */}
          <Box sx={{ my: 4 }}>
            <Guestbook />
          </Box>
          {/* End home feature flow */}

          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                Your Beautiful Property
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://ssl.cdn-redfin.com/photo/235/mbphotov3/866/genMid.NJOC2032866_16_2.jpg"
                  alt="Bayfront View"
                />
                <CardContent>
                  <Typography variant="h6">Spectacular Bayfront Views</Typography>
                  <Typography paragraph>
                    Wake up to stunning, unobstructed bay views and enjoy spectacular sunsets right from your backyard.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://ssl.cdn-redfin.com/photo/235/mbphotov3/866/genMid.NJOC2032866_48_2.jpg"
                  alt="Luxury Interior"
                />
                <CardContent>
                  <Typography variant="h6">Luxury Waterfront Living</Typography>
                  <Typography paragraph>
                    This custom built masterpiece offers an unparalleled waterfront lifestyle with endless amenities designed for comfort, entertainment, and relaxation.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <BeachAccess sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                  <Typography variant="h6" component="div">
                    Beaches & Parks
                  </Typography>
                  <Typography variant="body2">
                    Explore Brick's three ocean beaches, Windward Beach Park, and nearby state parks.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Restaurant sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                  <Typography variant="h6" component="div">
                    Dining Options
                  </Typography>
                  <Typography variant="body2">
                    Discover local favorites and waterfront dining experiences.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <LocalGroceryStore sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                  <Typography variant="h6" component="div">
                    Shopping & Services
                  </Typography>
                  <Typography variant="body2">
                    Find supermarkets, shops, and essential services near your home.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Delete sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                  <Typography variant="h6" component="div">
                    Trash & Recycling
                  </Typography>
                  <Typography variant="body2">
                    Learn about local waste management schedules and services.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Typography variant="h4" gutterBottom>
            🏖️ Brick Township Beaches: What Guests Need to Know
          </Typography>
          <Typography paragraph>
            Brick Township is home to several beautiful, family-friendly beaches along both the ocean and Barnegat Bay. Here’s everything you need to know for a perfect beach day.
          </Typography>
          <Box sx={{ my: 3 }}>
            <Typography variant="h5" gutterBottom>Main Beaches & Locations</Typography>
            <ul>
              <li><strong>Brick Beach I:</strong> 310 Route 35 North (Oceanfront). Large parking lot, outdoor showers, concessions, lockers, and restrooms.</li>
              <li><strong>Brick Beach II & III:</strong> Easily accessible along Route 35. Both have direct beach access, lifeguards, showers, restrooms, and concessions.</li>
              <li><strong>Bay Beach:</strong> Calm waters, great for kids and families.</li>
            </ul>
            <Typography variant="h5" gutterBottom>Hours & Lifeguards</Typography>
            <ul>
              <li><strong>Lifeguard Coverage:</strong> Weekends only from Memorial Day to mid-June, then daily through Labor Day.</li>
              <li><strong>Hours:</strong> 9:30am – 5:30pm (weather permitting).</li>
            </ul>
            <Typography variant="h5" gutterBottom>Badges & Access</Typography>
            <ul>
              <li><strong>Beach Badges:</strong> Required for all beaches. Purchase at the beach or online via the Brick Township website.</li>
              <li><strong>Parking:</strong> Large, convenient lots at each beach. Paid parking; badge purchase may include parking.</li>
            </ul>
            <Typography variant="h5" gutterBottom>Amenities</Typography>
            <ul>
              <li>Outdoor showers, restrooms, and food concessions at all main beaches.</li>
              <li>Lockers available for day use.</li>
              <li>Wide, clean sand with plenty of space—even in the off-season.</li>
            </ul>
            <Typography variant="h5" gutterBottom>Rules & Tips</Typography>
            <ul>
              <li><strong>No Alcohol:</strong> Prohibited on beaches and parking lots. Coolers may be inspected.</li>
              <li><strong>Family Friendly:</strong> Calm bay beach for kids, ocean beaches for swimming and sunbathing.</li>
              <li><strong>Dog Policy:</strong> Dogs are not allowed on ocean beaches during the summer season. For dog-friendly beaches, check local listings.</li>
              <li><strong>Best Times:</strong> Arrive early for best parking and less crowded sand.</li>
              <li><strong>Accessibility:</strong> Beaches are well-marked and easy to find along Route 35.</li>
            </ul>
            <Typography variant="h6" gutterBottom>More Resources</Typography>
            <ul>
              <li><a href="https://www.bricknj.gov/departments/recreation/beaches.php" target="_blank" rel="noopener">Official Brick Township Beaches Info</a></li>
              <li><a href="https://www.tripadvisor.com/Attraction_Review-g46321-d1726533-Reviews-Brick_Beach_1-Brick_New_Jersey.html" target="_blank" rel="noopener">TripAdvisor: Brick Beach 1 Reviews</a></li>
              <li><a href="https://www.bringfido.com/attraction/beaches/city/brick-nj-us/" target="_blank" rel="noopener">Dog Friendly Beaches</a></li>
            </ul>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Typography variant="h4" gutterBottom>
            🍽️ Dining in Brick: Local Favorites & Waterfront Gems
          </Typography>
          <Typography paragraph>
            Brick Township offers a diverse dining scene—enjoy everything from fresh seafood and waterfront views to classic Italian, hearty breakfasts, and family-friendly favorites. Here are some of the best spots, plus tips for every taste and occasion.
          </Typography>
          <Box sx={{ my: 3 }}>
            <Typography variant="h5" gutterBottom>Top Picks & Local Classics</Typography>
            <ul>
              <li><strong>Beacon 70:</strong> Modern sports bar and grill on the water. Great for groups, outdoor seating, big menu, and lively vibe. <a href="https://www.yelp.com/biz/beacon-70-brick" target="_blank" rel="noopener">Yelp</a></li>
              <li><strong>River Rock Restaurant & Marina Bar:</strong> Waterfront dining with a tiki bar, live music, and a big outdoor deck. <a href="https://www.tripadvisor.com/Restaurant_Review-g46321-d2316813-Reviews-River_Rock_Restaurant_and_Marina_Bar-Brick_New_Jersey.html" target="_blank" rel="noopener">TripAdvisor</a></li>
              <li><strong>Harpoon Willy’s:</strong> Friendly, casual seafood with spectacular river views and live music. <a href="https://www.opentable.com/r/harpoon-willys-manahawkin" target="_blank" rel="noopener">OpenTable</a></li>
              <li><strong>Cordi’s Italian Gourmet:</strong> Family-owned Italian, steak, and seafood—upscale atmosphere, gluten-free options. <a href="https://wanderlog.com/list/geoCategory/204544/where-to-eat-best-restaurants-in-brick" target="_blank" rel="noopener">See more</a></li>
              <li><strong>Manera’s Restaurant:</strong> Local favorite for American fare, steaks, and seafood. <a href="https://www.yelp.com/biz/maneras-restaurant-brick" target="_blank" rel="noopener">Yelp</a></li>
              <li><strong>The Brownstone Pancake Factory:</strong> Famous for creative pancakes, breakfast, and brunch. Fun for families! <a href="https://www.yelp.com/biz/the-brownstone-pancake-factory-brick" target="_blank" rel="noopener">Yelp</a></li>
              <li><strong>Taylor Sam’s:</strong> Classic breakfast and lunch spot with a local vibe. <a href="https://www.yelp.com/biz/taylor-sams-brick" target="_blank" rel="noopener">Yelp</a></li>
              <li><strong>Tacos Los Compas:</strong> Authentic Mexican, highly rated for takeout and casual dining. <a href="https://www.yelp.com/biz/tacos-los-compas-brick" target="_blank" rel="noopener">Yelp</a></li>
            </ul>
            <Typography variant="h5" gutterBottom>Waterfront & Outdoor Dining</Typography>
            <ul>
              <li>Many restaurants offer decks, patios, or marina views—perfect for sunset dinners or cocktails by the water.</li>
            </ul>
            <Typography variant="h5" gutterBottom>Family & Dog-Friendly Options</Typography>
            <ul>
              <li>Most spots welcome families and kids. For dog-friendly patios, check listings on <a href="https://www.bringfido.com/restaurant/city/brick-nj-us/" target="_blank" rel="noopener">BringFido</a>.</li>
            </ul>
            <Typography variant="h5" gutterBottom>Tips & Resources</Typography>
            <ul>
              <li>Reservations recommended for waterfront and popular spots, especially in summer.</li>
              <li>Many offer takeout and delivery—great for beach picnics or boat days.</li>
              <li>See more reviews and photos: <a href="https://www.tripadvisor.com/Restaurants-g46321-Brick_New_Jersey.html" target="_blank" rel="noopener">TripAdvisor: Brick Restaurants</a></li>
            </ul>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Typography variant="h4" gutterBottom>
            Local Information
          </Typography>

          {/* Award-winning practical info and emergency sections */}
          <Box sx={{ my: 4 }}>
            <EmergencyInfo />
          </Box>
          <Box sx={{ my: 4 }}>
            <HouseManual />
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" gutterBottom>
                  <LocalGroceryStore sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Grocery Shopping
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="ShopRite of Bricktown" secondary="Full-service supermarket" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Stop & Shop" secondary="Neighborhood grocer with wide assortment" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Trader Joe's" secondary="Located in Brick (08723)" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Lidl" secondary="Located on Hooper Ave" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="ALDI" secondary="Budget-friendly grocery option" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Caldino's Italian Market" secondary="Specialty Italian groceries" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" gutterBottom>
                  <Delete sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Waste Management
                </Typography>
                <Typography variant="h6" gutterBottom>Garbage & Recycling</Typography>
                <Typography paragraph>
                  Collection schedules vary by street. You can check your specific collection day by 
                  entering your street name on the township's website (bricknj.gov).
                </Typography>
                <Typography paragraph>
                  Recycling Center is located at 836 Ridge Road, open Monday through Saturday, 8AM-3:30PM.
                </Typography>
                <Typography paragraph>
                  Residents are limited to 12 drop-offs per calendar year (excluding recyclables and household trash).
                </Typography>
                <Typography paragraph>
                  Leaf Collection: Leaves may be brought to the Brick Township Recycling Center or 
                  the Ocean County Recycling Center in Lakewood Township.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  <Park sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Parks & Outdoor Recreation
                </Typography>
                <Typography paragraph>
                  <strong>Windward Beach Park:</strong> Besides the beach, offers green spaces and recreational facilities.
                </Typography>
                <Typography paragraph>
                  <strong>Trader's Cove Marina & Park:</strong> Popular for boating and outdoor activities.
                </Typography>
                <Typography paragraph>
                  <strong>Island Beach State Park:</strong> Features outstanding plant communities, dunes, maritime forest, 
                  tidal marshes, and significant wildlife.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Additional Resources
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="Township Website" 
                      secondary="bricknj.gov"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Bricktown Online" 
                      secondary="bricktownonline.com - Local news source"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Beach Information" 
                      secondary="bricktownonline.com/brick-beaches/"
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </TabPanel>
      </Container>
      
      <Box 
        component="footer" 
        sx={{ 
          bgcolor: theme.palette.primary.main,
          color: 'white',
          p: 6,
          mt: 4 
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h6" gutterBottom>
            Brick Township Beach House Guide
          </Typography>
          <Typography variant="body2">
            Created for 125 Shore Dr, Brick, NJ
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            © {new Date().getFullYear()} BeachHouse Guide
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
