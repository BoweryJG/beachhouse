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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery
} from '@mui/material';
import { 
  BeachAccess, 
  Restaurant, 
  LocalGroceryStore, 
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
import RestaurantTravelTimes from './components/RestaurantTravelTimes';
import BeachTravelTimes from './components/BeachTravelTimes';
import DarkModeToggle from './components/DarkModeToggle';
import CrabbingSection from './components/CrabbingSection';
import BeachesSection from './components/BeachesSection';
import DiningSection from './components/DiningSection';
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
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Commented out as it's currently unused

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
            <Button color="inherit" onClick={() => setTabValue(3)}>Crabbing</Button>
            <Button color="inherit" onClick={() => setTabValue(4)}>Local Info</Button>
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
            <Tab label="Crabbing" />
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
            {/* Crabbing section moved to its own tab */}
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
          <BeachesSection />
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <DiningSection />
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <CrabbingSection />
        </TabPanel>

        <TabPanel value={tabValue} index={4}>
          <Typography variant="h4" gutterBottom>
            📍 Local Info & Essentials
          </Typography>

          {/* Quick Links */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
            <Button variant="outlined" color="primary" href="#events" size="small">Events</Button>
            <Button variant="outlined" color="primary" href="#transport" size="small">Transport</Button>
            <Button variant="outlined" color="primary" href="#shops" size="small">Shops</Button>
            <Button variant="outlined" color="primary" href="#emergency" size="small">Emergency</Button>
            <Button variant="outlined" color="primary" href="#services" size="small">Services</Button>
            <Button variant="outlined" color="primary" href="#weather" size="small">Weather</Button>
            <Button variant="outlined" color="primary" href="#tips" size="small">Insider Tips</Button>
            <Button variant="outlined" color="primary" href="#faqs" size="small">FAQs</Button>
            <Button variant="outlined" color="primary" href="#manual" size="small">House Manual</Button>
            <Button variant="outlined" color="primary" href="#map" size="small">Map</Button>
            <Button variant="outlined" color="primary" href="#guestbook" size="small">Guestbook</Button>
            <Button variant="outlined" color="primary" href="#feedback" size="small">Feedback</Button>
            <Button variant="outlined" color="primary" href="#seasonal" size="small">Seasonal Guides</Button>
          </Box>

          {/* Accordions for each section */}
          <Box>
            {/* Events Calendar */}
            <Accordion id="events" defaultExpanded>
              <AccordionSummary expandIcon={<span>📅</span>}>
                <Typography variant="h6">Events Calendar & Highlights</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <strong>Spring/Summer:</strong> Brick Farmers Market (Saturdays at Windward Beach), Summerfest Concerts & Fireworks, Brick Beach Bonfire Night, local art fairs.<br/>
                  <strong>Fall:</strong> Harvest Fest, Food Truck Festival, Halloween Parade.<br/>
                  <strong>Winter:</strong> Holiday Tree Lighting, Winterfest on the Bay.<br/>
                  <a href="https://www.bricktownship.net/events/" target="_blank" rel="noopener">See Full Events Calendar</a>
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* Transportation & Parking */}
            <Accordion id="transport">
              <AccordionSummary expandIcon={<span>🚌</span>}>
                <Typography variant="h6">Transportation & Parking</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <strong>Public Transit:</strong> NJ Transit buses serve Brick and connect to Point Pleasant, Toms River, and the shore. Nearest train: Point Pleasant Beach NJ Transit station.<br/>
                  <strong>Ride-shares:</strong> Uber, Lyft, and local taxis available.<br/>
                  <strong>Parking:</strong> Free and paid lots at beaches and parks. Beach badge may include parking. Street parking is limited during summer weekends.<br/>
                  <a href="https://www.njtransit.com/" target="_blank" rel="noopener">NJ Transit Info</a>
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* Shops & Essentials */}
            <Accordion id="shops">
              <AccordionSummary expandIcon={<span>🛒</span>}>
                <Typography variant="h6">Shops & Essentials</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <strong>Groceries:</strong> ShopRite (Route 70), Stop & Shop, Lidl, Jersey Shore Farmers Market.<br/>
                  <strong>Pharmacies:</strong> CVS, Walgreens, Rite Aid (24hr options nearby).<br/>
                  <strong>Liquor:</strong> Brick Liquors, Spirits Unlimited.<br/>
                  <strong>Bait & Tackle:</strong> Jersey Hooker Outfitters, Fisherman’s Supply.<br/>
                  <strong>Surf Shops:</strong> Brave New World, Surf Unlimited.<br/>
                  <strong>Markets:</strong> Windward Beach Farmers Market (seasonal).<br/>
                  <a href="https://www.shoprite.com/sm/planning/rsid/141/" target="_blank" rel="noopener">ShopRite Brick</a>
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* Emergency & Health */}
            <Accordion id="emergency">
              <AccordionSummary expandIcon={<span>🚑</span>}>
                <Typography variant="h6">Emergency & Health</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <strong>Urgent Care:</strong> AFC Urgent Care (732-262-9500), Hackensack Meridian Urgent Care.<br/>
                  <strong>Hospitals:</strong> Ocean Medical Center (Brick), Community Medical Center (Toms River).<br/>
                  <strong>Pharmacy (24hr):</strong> Walgreens, CVS (check location).<br/>
                  <strong>Emergency:</strong> 911 (Police, Fire, Ambulance).<br/>
                  <strong>Non-Emergency:</strong> Brick Police (732-262-1100), Poison Control (1-800-222-1222).<br/>
                  <a href="https://www.hackensackmeridianhealth.org/en/Locations/Ocean-Medical-Center" target="_blank" rel="noopener">Ocean Medical Center</a>
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* Local Services */}
            <Accordion id="services">
              <AccordionSummary expandIcon={<span>🛠️</span>}>
                <Typography variant="h6">Local Services</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <strong>Babysitters:</strong> Local recommendations available upon request.<br/>
                  <strong>Pet Sitters:</strong> Rover.com, local pet care agencies.<br/>
                  <strong>Boat/Kayak Rentals:</strong> Jersey Boat Rentals, Brick Kayak Company.<br/>
                  <strong>Fishing Charters:</strong> Reel Life Charters, Jersey Shore Guide Service.<br/>
                  <strong>Cleaning Services:</strong> Brick Cleaning Pros, Maid Brigade.<br/>
                  <a href="https://www.rover.com/" target="_blank" rel="noopener">Find a Pet Sitter</a>
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* Weather & Tides */}
            <Accordion id="weather">
              <AccordionSummary expandIcon={<span>🌦️</span>}>
                <Typography variant="h6">Weather & Tides</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <WeatherWidget />
                <Typography sx={{ mt: 2 }}>
                  <strong>Tide Charts:</strong> <a href="https://www.tideschart.com/United-States/New-Jersey/Ocean-County/Barnegat-Bay/" target="_blank" rel="noopener">Barnegat Bay Tides</a><br/>
                  <strong>Surf Report:</strong> <a href="https://www.surfline.com/surf-report/point-pleasant-nj/5842041f4e65fad6a77088e5" target="_blank" rel="noopener">Surfline Point Pleasant</a>
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* Insider Tips */}
            <Accordion id="tips">
              <AccordionSummary expandIcon={<span>💡</span>}>
                <Typography variant="h6">Insider Tips</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <li><strong>Best Sunset Spot:</strong> Dock at 125 Shore Dr or Windward Beach Park.</li>
                    <li><strong>Quietest Beach Time:</strong> Early mornings at Brick Beach 1.</li>
                    <li><strong>Hidden Gem:</strong> Kayak to the sandbar off Windward Beach Park.</li>
                    <li><strong>Best Crabbing:</strong> Use chicken necks for bait, check traps often.</li>
                    <li><strong>Rainy Day:</strong> Jenkinson’s Aquarium, Ocean County Mall, Escape Room Toms River.</li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* FAQs */}
            <Accordion id="faqs">
              <AccordionSummary expandIcon={<span>❓</span>}>
                <Typography variant="h6">FAQs</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <li><strong>Trash Pickup:</strong> Monday & Thursday (put bins out by 7am).</li>
                    <li><strong>Recycling:</strong> Thursday (blue bin).</li>
                    <li><strong>Grill:</strong> Propane tank in shed, turn off after use.</li>
                    <li><strong>WiFi:</strong> Network: BeachHouse125, Password: ask owner.</li>
                    <li><strong>Check-out:</strong> Please leave keys on kitchen counter.</li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* House Manual */}
            <Accordion id="manual">
              <AccordionSummary expandIcon={<span>📖</span>}>
                <Typography variant="h6">House Manual</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <HouseManual />
              </AccordionDetails>
            </Accordion>

            {/* Safety & Rules */}
            <Accordion id="safety">
              <AccordionSummary expandIcon={<span>🚨</span>}>
                <Typography variant="h6">Safety & Local Rules</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <li><strong>Beach Rules:</strong> No alcohol, no fires, no glass containers, no dogs in summer.</li>
                    <li><strong>Fireworks:</strong> Only permitted on July 4th at designated locations.</li>
                    <li><strong>Noise Ordinance:</strong> Quiet hours: 10pm–7am.</li>
                    <li><strong>Pet Policy:</strong> Dogs allowed on bay beach off-season; check for leash laws.</li>
                  </ul>
                  <a href="https://www.bricktownship.net/ordinances/" target="_blank" rel="noopener">Town Ordinances</a>
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* Interactive Map */}
            <Accordion id="map">
              <AccordionSummary expandIcon={<span>🗺️</span>}>
                <Typography variant="h6">Interactive Map</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Map />
                <Typography sx={{ mt: 2 }}>
                  Click markers to see info on beaches, restaurants, and attractions.
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* Guestbook */}
            <Accordion id="guestbook">
              <AccordionSummary expandIcon={<span>📝</span>}>
                <Typography variant="h6">Guestbook</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Guestbook />
                <Typography sx={{ mt: 2 }}>
                  Share your favorite memories, tips, and reviews for future guests!
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* Feedback Form */}
            <Accordion id="feedback">
              <AccordionSummary expandIcon={<span>💬</span>}>
                <Typography variant="h6">Feedback & Suggestions</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Have a suggestion or question? Email us at <a href="mailto:owner@beachhouse.com">owner@beachhouse.com</a> or leave a note in the guestbook!
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* Seasonal & Thematic Guides */}
            <Accordion id="seasonal">
              <AccordionSummary expandIcon={<span>🌻</span>}>
                <Typography variant="h6">Seasonal & Thematic Guides</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <strong>Spring/Summer:</strong> Kayaking, paddleboarding, outdoor concerts, farmers markets.<br/>
                  <strong>Fall:</strong> Pumpkin picking, hiking at Allaire State Park, Harvest Fest.<br/>
                  <strong>Winter:</strong> Holiday lights, ice skating, cozy cafes.<br/>
                  <strong>Rainy Day:</strong> Jenkinson’s Aquarium, arcades, movie theaters.<br/>
                  <strong>Family & Kids:</strong> Mini-golf, playgrounds, splash pads.<br/>
                  <strong>Dog-Friendly:</strong> Windward Beach Park (off-season), BringFido listings.
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* Visuals & Links */}
            <Accordion id="visuals">
              <AccordionSummary expandIcon={<span>📸</span>}>
                <Typography variant="h6">Photos & Useful Links</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Gallery />
                <Typography sx={{ mt: 2 }}>
                  <a href="https://www.bricktownship.net/" target="_blank" rel="noopener">Town Website</a> | 
                  <a href="https://www.facebook.com/BrickTownship/" target="_blank" rel="noopener">Facebook</a> | 
                  <a href="https://www.app.com/news/ocean/brick/" target="_blank" rel="noopener">Local News</a>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        
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
