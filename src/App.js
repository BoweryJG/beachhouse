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
            Beaches & Water Access
          </Typography>
          {/* ... */}
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
