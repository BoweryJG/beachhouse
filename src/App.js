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
            🍽️ Dining in Brick: Zagat-Style Local Guide
          </Typography>
          <Typography paragraph>
            Welcome to your Zagat-style dining guide for Brick Township! Each capsule review below highlights cuisine, atmosphere, and what makes each spot memorable—so you can dine like a local, whether you're craving a sunset dinner or a family-friendly brunch.
          </Typography>

          <Box sx={{ my: 3 }}>
            <Typography variant="h5" gutterBottom>Waterfront Wonders</Typography>
            <ul>
              <li><strong>Beacon 70</strong> (American, Sports Bar): "A modern marina hangout with a sprawling menu and giant TVs—think burgers, sushi, and craft brews. The outdoor deck is a summer magnet for groups and boaters. <em>Best for: lively nights and water views.</em> <a href="https://www.yelp.com/biz/beacon-70-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>River Rock Restaurant & Marina Bar</strong> (American, Seafood): "Tiki bar energy meets classic Jersey Shore fun—live music, big portions, and a deck that’s always buzzing. <em>Best for: happy hour, sunsets, and casual family meals.</em> <a href="https://www.tripadvisor.com/Restaurant_Review-g46321-d2316813-Reviews-River_Rock_Restaurant_and_Marina_Bar-Brick_New_Jersey.html" target="_blank" rel="noopener">TripAdvisor</a>"</li>
              <li><strong>Harpoon Willy’s</strong> (Seafood, American): "Riverfront tables, fresh catch, and live tunes—this laid-back spot is a local legend for its friendly vibe and sunset cocktails. <em>Best for: relaxed dinners and music lovers.</em> <a href="https://www.opentable.com/r/harpoon-willys-manahawkin" target="_blank" rel="noopener">OpenTable</a>"</li>
              <li><strong>Jersey Shore BBQ</strong> (BBQ): "Casual, beachy smokehouse with brisket, ribs, and all the fixings—plus outdoor seating. <em>Best for: BBQ fans and big appetites.</em> <a href="https://www.yelp.com/biz/jersey-shore-bbq-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Pier 281</strong> (Seafood, American): "Dockside dining with classic seafood, burgers, and cocktails. <em>Best for: boaters and sunset lovers.</em> <a href="https://www.yelp.com/biz/pier-281-marina-bar-and-grill-brick" target="_blank" rel="noopener">Yelp</a>"</li>
            </ul>

            <Typography variant="h5" gutterBottom>Italian & Pizza</Typography>
            <ul>
              <li><strong>Via Veneto Italian Ristorante</strong> (Italian): "Old-school Italian with a loyal following—expect classic red sauce, big portions, and a bustling dining room. <em>Best for: traditionalists and family gatherings.</em> <a href="https://www.yelp.com/biz/via-veneto-italian-restaurant-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Vinnie's Pizzeria & Restaurant</strong> (Pizza, Italian): "Neighborhood pizza joint with a crispy crust and friendly faces. <em>Best for: a quick slice or takeout night.</em> <a href="https://www.yelp.com/biz/vinnies-pizzeria-and-restaurant-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Cordi’s Italian Gourmet</strong> (Italian, Steak, Seafood): "White-tablecloth charm, gluten-free options, and a wine list to match. Homemade pastas and steaks impress regulars. <em>Best for: date night or a celebratory meal.</em> <a href="https://wanderlog.com/list/geoCategory/204544/where-to-eat-best-restaurants-in-brick" target="_blank" rel="noopener">See more</a>"</li>
              <li><strong>Manera’s Restaurant</strong> (American, Italian): "Neighborhood favorite for steaks, seafood, and Italian classics. Friendly staff and generous portions keep families coming back. <em>Best for: comfort food and casual dinners.</em> <a href="https://www.yelp.com/biz/maneras-restaurant-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Denino’s South Pizzeria</strong> (Pizza, Italian): "NY-style pies, crisp and cheesy, in a lively, family-friendly space. <em>Best for: pizza night and big groups.</em> <a href="https://www.yelp.com/biz/deninos-south-pizzeria-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Villa Vittoria</strong> (Italian): "Classic Italian with a romantic vibe, homemade pasta, and attentive service. <em>Best for: special occasions and pasta lovers.</em> <a href="https://www.yelp.com/biz/villa-vittoria-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Joe’s Rotisseria</strong> (Pizza, Italian): "Home of the triple-threat pizza—part pizza, part garlic knot, part calzone. <em>Best for: adventurous eaters and Instagram foodies.</em> <a href="https://www.yelp.com/biz/joes-rotisseria-brick" target="_blank" rel="noopener">Yelp</a>"</li>
            </ul>

            <Typography variant="h5" gutterBottom>Sushi & Asian</Typography>
            <ul>
              <li><strong>Golden Cheung</strong> (Chinese): "A local favorite for takeout classics—egg rolls, lo mein, and speedy service. <em>Best for: Friday night cravings and family feasts.</em> <a href="https://www.yelp.com/biz/golden-cheung-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Hibachi Grill & Supreme Buffet</strong> (Japanese, Buffet): "All-you-can-eat sushi, hibachi, and more in a festive, family-friendly setting. <em>Best for: big appetites and indecisive eaters.</em> <a href="https://www.yelp.com/biz/hibachi-grill-and-supreme-buffet-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Ikko Sushi</strong> (Japanese, Sushi): "Creative rolls, fresh fish, and a stylish, modern setting. <em>Best for: sushi dates and sake fans.</em> <a href="https://www.yelp.com/biz/ikko-japanese-steak-house-and-sushi-bar-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Osaka Sushi</strong> (Japanese, Sushi): "Cozy, family-run spot with generous portions and friendly service. <em>Best for: casual sushi nights.</em> <a href="https://www.yelp.com/biz/osaka-japanese-restaurant-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Chopstick House</strong> (Chinese): "Classic takeout and dine-in with all your favorites—fast, reliable, and tasty. <em>Best for: quick Chinese cravings.</em> <a href="https://www.yelp.com/biz/chopstick-house-brick" target="_blank" rel="noopener">Yelp</a>"</li>
            </ul>

            <Typography variant="h5" gutterBottom>Breakfast & Brunch Standouts</Typography>
            <ul>
              <li><strong>The Brownstone Pancake Factory</strong> (Breakfast, Brunch): "Instagram-worthy pancakes, wild toppings, and a fun, bustling crowd. Kids (and adults) love the over-the-top creations. <em>Best for: family brunch and sweet tooths.</em> <a href="https://www.yelp.com/biz/the-brownstone-pancake-factory-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Taylor Sam’s</strong> (Breakfast, Lunch): "Classic Jersey breakfast joint—think big omelets, friendly service, and a local crowd. <em>Best for: hearty starts and no-frills comfort.</em> <a href="https://www.yelp.com/biz/taylor-sams-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Shore Good Pancake House</strong> (Breakfast): "Pancake paradise with dozens of options and fast, cheerful service. <em>Best for: early risers and pancake connoisseurs.</em> <a href="https://www.yelp.com/biz/shore-good-pancake-house-brick" target="_blank" rel="noopener">Yelp</a>"</li>
            </ul>

            <Typography variant="h5" gutterBottom>Global & Casual Eats</Typography>
            <ul>
              <li><strong>Shut Up and Eat</strong> (American, Diner): "Breakfast in pajamas? Yes, please! Quirky, fun, and full of comfort food. <em>Best for: breakfast lovers and families with a sense of humor.</em> <a href="https://www.yelp.com/biz/shut-up-and-eat-toms-river" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Jersey Shore Greek Grill</strong> (Greek, Mediterranean): "Gyros, souvlaki, and all the Greek classics in a sunny, casual space. <em>Best for: Mediterranean cravings and healthy lunches.</em> <a href="https://www.yelp.com/biz/jersey-shore-greek-grill-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Spice Grill</strong> (Indian): "Aromatic curries, fresh naan, and a welcoming staff—spice levels for every palate. <em>Best for: curry nights and adventurous eaters.</em> <a href="https://www.yelp.com/biz/spice-grill-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Surf Taco</strong> (Mexican, Surf): "Baja-style tacos, burritos, and surfer vibes. <em>Best for: casual lunches and post-beach bites.</em> <a href="https://www.yelp.com/biz/surf-taco-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Windward Deli</strong> (Deli, Sandwiches): "Classic Jersey deli with overstuffed subs and homemade salads. <em>Best for: picnic lunches and hungry crowds.</em> <a href="https://www.yelp.com/biz/windward-deli-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Tacos Los Compas</strong> (Mexican): "A hidden gem for authentic tacos, burritos, and homemade salsas. Fast, friendly, and perfect for takeout. <em>Best for: quick bites and flavor seekers.</em> <a href="https://www.yelp.com/biz/tacos-los-compas-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>El Ranchero</strong> (Mexican): "Festive, family-run spot with sizzling fajitas and margaritas. <em>Best for: group dinners and Tex-Mex cravings.</em> <a href="https://www.yelp.com/biz/el-ranchero-mexican-restaurant-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Panera Bread</strong> (Cafe, Bakery): "Reliable chain for soups, salads, and sandwiches—plus free WiFi. <em>Best for: lunch meetings and laptop time.</em> <a href="https://www.yelp.com/biz/panera-bread-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Jersey Mike’s Subs</strong> (Subs, Sandwiches): "Beloved sub shop with fresh-sliced meats and classic Jersey attitude. <em>Best for: beach picnic takeout.</em> <a href="https://www.yelp.com/biz/jersey-mikes-subs-brick" target="_blank" rel="noopener">Yelp</a>"</li>
            </ul>

            <Typography variant="h5" gutterBottom>Healthy & Vegetarian</Typography>
            <ul>
              <li><strong>Seed to Sprout</strong> (Vegan, Vegetarian): "Plant-based cafe with inventive bowls, sandwiches, and smoothies. <em>Best for: vegans, vegetarians, and the health-conscious.</em> <a href="https://www.yelp.com/biz/seed-to-sprout-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Gluten Free Gloriously</strong> (Bakery, Gluten-Free): "Dedicated gluten-free bakery—cupcakes, breads, and sweet treats for everyone. <em>Best for: gluten-free guests and dessert lovers.</em> <a href="https://www.yelp.com/biz/gluten-free-gloriously-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Playa Bowls</strong> (Acai Bowls, Juice Bar): "Beachy chain for acai bowls, smoothies, and fresh juices. <em>Best for: post-beach refreshment and healthy cravings.</em> <a href="https://www.yelp.com/biz/playa-bowls-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Green Leaf Smoothie & Juice Bar</strong> (Smoothies, Healthy): "Locally owned, super fresh smoothies and wraps. <em>Best for: a quick, healthy lunch.</em> <a href="https://www.yelp.com/biz/green-leaf-smoothie-and-juice-bar-brick" target="_blank" rel="noopener">Yelp</a>"</li>
            </ul>

            <Typography variant="h5" gutterBottom>Coffee & Bakeries</Typography>
            <ul>
              <li><strong>Rook Coffee</strong> (Coffee): "Trendy regional chain with strong cold brew and a cult following. <em>Best for: coffee aficionados and morning commuters.</em> <a href="https://www.yelp.com/biz/rook-coffee-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Revolutionary Lounge & Cafe</strong> (Coffeehouse): "Hip, artsy spot with creative lattes, pastries, and live music. <em>Best for: coffee dates and late-night hangs.</em> <a href="https://www.yelp.com/biz/revolutionary-lounge-and-cafe-toms-river" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Mueller’s Bakery</strong> (Bakery): "Old-school bakery with legendary crumb cake and fresh breads. <em>Best for: morning treats and picnic desserts.</em> <a href="https://www.yelp.com/biz/muellers-bakery-bay-head" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Dunkin’</strong> (Coffee, Donuts): "America runs on Dunkin’—and so does Brick! <em>Best for: drive-thru caffeine and donut runs.</em> <a href="https://www.yelp.com/biz/dunkin-donuts-brick-3" target="_blank" rel="noopener">Yelp</a>"</li>
            </ul>

            <Typography variant="h5" gutterBottom>Ice Cream & Sweets</Typography>
            <ul>
              <li><strong>Hoffman’s Ice Cream</strong> (Ice Cream): "Legendary Jersey ice cream parlor—huge scoops, homemade flavors, and a line out the door in summer. <em>Best for: classic cones and family outings.</em> <a href="https://www.yelp.com/biz/hoffmans-ice-cream-point-pleasant-beach" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Coney Waffle</strong> (Ice Cream, Sweets): "Over-the-top shakes and wild desserts—bring your camera and your sweet tooth. <em>Best for: Instagram moments and sugar highs.</em> <a href="https://www.yelp.com/biz/coney-waffle-belmar" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Jersey Freeze</strong> (Ice Cream): "Classic roadside stand for cones, sundaes, and shakes. <em>Best for: summer nights and sweet tooths.</em> <a href="https://www.yelp.com/biz/jersey-freeze-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Ralph’s Italian Ices</strong> (Ices, Ice Cream): "Dozens of flavors, super refreshing, and open late. <em>Best for: after-dinner treats and kids’ birthdays.</em> <a href="https://www.yelp.com/biz/ralphs-famous-italian-ices-and-ice-cream-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Kohr’s Frozen Custard</strong> (Frozen Custard): "Boardwalk classic—creamy, swirled cones that taste like summer. <em>Best for: beach days and nostalgia.</em> <a href="https://www.yelp.com/biz/kohrs-the-original-frozen-custard-point-pleasant-beach" target="_blank" rel="noopener">Yelp</a>"</li>
            </ul>

            <Typography variant="h5" gutterBottom>Deli & Subs</Typography>
            <ul>
              <li><strong>Jersey Mike’s Subs</strong> (Subs, Sandwiches): "Beloved sub shop with fresh-sliced meats and classic Jersey attitude. <em>Best for: beach picnic takeout.</em> <a href="https://www.yelp.com/biz/jersey-mikes-subs-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Windward Deli</strong> (Deli, Sandwiches): "Classic Jersey deli with overstuffed subs and homemade salads. <em>Best for: picnic lunches and hungry crowds.</em> <a href="https://www.yelp.com/biz/windward-deli-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Bagel Exchange</strong> (Bagels, Deli): "Fresh bagels, breakfast sandwiches, and deli favorites—perfect for beach mornings. <em>Best for: quick breakfast or lunch on the go.</em> <a href="https://www.yelp.com/biz/bagel-exchange-brick" target="_blank" rel="noopener">Yelp</a>"</li>
            </ul>

            <Typography variant="h5" gutterBottom>BBQ & Smokehouse</Typography>
            <ul>
              <li><strong>Jersey Shore BBQ</strong> (BBQ): "Casual, beachy smokehouse with brisket, ribs, and all the fixings—plus outdoor seating. <em>Best for: BBQ fans and big appetites.</em> <a href="https://www.yelp.com/biz/jersey-shore-bbq-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Smokies Craft BBQ</strong> (BBQ): "Low-and-slow smoked meats, creative sides, and a rustic vibe. <em>Best for: carnivores and comfort food lovers.</em> <a href="https://www.yelp.com/biz/smokies-craft-bbq-brick" target="_blank" rel="noopener">Yelp</a>"</li>
            </ul>

            <Typography variant="h5" gutterBottom>Fast Food & Chains</Typography>
            <ul>
              <li><strong>Chick-fil-A</strong> (Fast Food): "Friendly service, crispy chicken, and a drive-thru that moves fast. <em>Best for: quick bites and family meals.</em> <a href="https://www.yelp.com/biz/chick-fil-a-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Five Guys</strong> (Burgers, Fast Food): "Juicy burgers, endless toppings, and peanut-shell floors. <em>Best for: burger cravings and takeout.</em> <a href="https://www.yelp.com/biz/five-guys-brick" target="_blank" rel="noopener">Yelp</a>"</li>
              <li><strong>Shake Shack</strong> (Burgers, Shakes): "Trendy chain with crinkle fries, shakes, and smash burgers. <em>Best for: a quick, tasty fix.</em> <a href="https://www.yelp.com/biz/shake-shack-brick" target="_blank" rel="noopener">Yelp</a>"</li>
            </ul>

            <Typography variant="h5" gutterBottom>Family & Dog-Friendly</Typography>
            <ul>
              <li>Most restaurants welcome kids. For dog-friendly patios, check <a href="https://www.bringfido.com/restaurant/city/brick-nj-us/" target="_blank" rel="noopener">BringFido</a>.</li>
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
