import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Tabs, 
  Tab, 
  Card, 
  CardContent,
  Grid,
  Link
} from '@mui/material';
import RestaurantTravelTimes from './RestaurantTravelTimes';

// TabPanel component for tab content
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`dining-tabpanel-${index}`}
      aria-labelledby={`dining-tab-${index}`}
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

function a11yProps(index) {
  return {
    id: `dining-tab-${index}`,
    'aria-controls': `dining-tabpanel-${index}`,
  };
}

export default function DiningSection() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" gutterBottom>
        🍽️ Dining Guide: Brick & Beyond
      </Typography>
      
      <Typography paragraph>
        Welcome to your Zagat-style dining guide for Brick Township! Each capsule review highlights cuisine, atmosphere, and what makes each spot memorable—so you can dine like a local, whether you're craving a sunset dinner or a family-friendly brunch.
      </Typography>
      
      <RestaurantTravelTimes />
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 4 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          aria-label="dining categories"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Waterfront Dining" {...a11yProps(0)} />
          <Tab label="Italian & Pizza" {...a11yProps(1)} />
          <Tab label="Sushi & Asian" {...a11yProps(2)} />
          <Tab label="Breakfast & Brunch" {...a11yProps(3)} />
          <Tab label="Global & Casual" {...a11yProps(4)} />
          <Tab label="Healthy & Vegetarian" {...a11yProps(5)} />
          <Tab label="Coffee & Sweets" {...a11yProps(6)} />
        </Tabs>
      </Box>
      
      {/* Waterfront Dining Tab */}
      <TabPanel value={tabValue} index={0}>
        <Typography variant="h5" gutterBottom>Waterfront Wonders</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Beacon 70</Typography>
                <Typography variant="subtitle2" color="text.secondary">American, Sports Bar</Typography>
                <Typography variant="body2" paragraph>
                  A modern marina hangout with a sprawling menu and giant TVs—think burgers, sushi, and craft brews. The outdoor deck is a summer magnet for groups and boaters.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: lively nights and water views.
                </Typography>
                <Link href="https://www.yelp.com/biz/beacon-70-brick" target="_blank" rel="noopener">Yelp</Link>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">River Rock Restaurant & Marina Bar</Typography>
                <Typography variant="subtitle2" color="text.secondary">American, Seafood</Typography>
                <Typography variant="body2" paragraph>
                  Tiki bar energy meets classic Jersey Shore fun—live music, big portions, and a deck that's always buzzing.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: happy hour, sunsets, and casual family meals.
                </Typography>
                <Link href="https://www.tripadvisor.com/Restaurant_Review-g46321-d2316813-Reviews-River_Rock_Restaurant_and_Marina_Bar-Brick_New_Jersey.html" target="_blank" rel="noopener">TripAdvisor</Link>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Harpoon Willy's</Typography>
                <Typography variant="subtitle2" color="text.secondary">Seafood, American</Typography>
                <Typography variant="body2" paragraph>
                  Riverfront tables, fresh catch, and live tunes—this laid-back spot is a local legend for its friendly vibe and sunset cocktails.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: relaxed dinners and music lovers.
                </Typography>
                <Link href="https://www.opentable.com/r/harpoon-willys-manahawkin" target="_blank" rel="noopener">OpenTable</Link>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Jersey Shore BBQ</Typography>
                <Typography variant="subtitle2" color="text.secondary">BBQ</Typography>
                <Typography variant="body2" paragraph>
                  Casual, beachy smokehouse with brisket, ribs, and all the fixings—plus outdoor seating.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: BBQ fans and big appetites.
                </Typography>
                <Link href="https://www.yelp.com/biz/jersey-shore-bbq-brick" target="_blank" rel="noopener">Yelp</Link>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Pier 281</Typography>
                <Typography variant="subtitle2" color="text.secondary">Seafood, American</Typography>
                <Typography variant="body2" paragraph>
                  Dockside dining with classic seafood, burgers, and cocktails.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: boaters and sunset lovers.
                </Typography>
                <Link href="https://www.yelp.com/biz/pier-281-marina-bar-and-grill-brick" target="_blank" rel="noopener">Yelp</Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* Italian & Pizza Tab */}
      <TabPanel value={tabValue} index={1}>
        <Typography variant="h5" gutterBottom>Italian & Pizza</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Via Veneto Italian Ristorante</Typography>
                <Typography variant="subtitle2" color="text.secondary">Italian</Typography>
                <Typography variant="body2" paragraph>
                  Old-school Italian with a loyal following—expect classic red sauce, big portions, and a bustling dining room.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: traditionalists and family gatherings.
                </Typography>
                <Link href="https://www.yelp.com/biz/via-veneto-italian-restaurant-brick" target="_blank" rel="noopener">Yelp</Link>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Vinnie's Pizzeria & Restaurant</Typography>
                <Typography variant="subtitle2" color="text.secondary">Pizza, Italian</Typography>
                <Typography variant="body2" paragraph>
                  Neighborhood pizza joint with a crispy crust and friendly faces.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: a quick slice or takeout night.
                </Typography>
                <Link href="https://www.yelp.com/biz/vinnies-pizzeria-and-restaurant-brick" target="_blank" rel="noopener">Yelp</Link>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Cordi's Italian Gourmet</Typography>
                <Typography variant="subtitle2" color="text.secondary">Italian, Steak, Seafood</Typography>
                <Typography variant="body2" paragraph>
                  White-tablecloth charm, gluten-free options, and a wine list to match. Homemade pastas and steaks impress regulars.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: date night or a celebratory meal.
                </Typography>
                <Link href="https://wanderlog.com/list/geoCategory/204544/where-to-eat-best-restaurants-in-brick" target="_blank" rel="noopener">See more</Link>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Joe's Rotisseria</Typography>
                <Typography variant="subtitle2" color="text.secondary">Pizza, Italian</Typography>
                <Typography variant="body2" paragraph>
                  Home of the triple-threat pizza—part pizza, part garlic knot, part calzone.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: adventurous eaters and Instagram foodies.
                </Typography>
                <Link href="https://www.yelp.com/biz/joes-rotisseria-brick" target="_blank" rel="noopener">Yelp</Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* Sushi & Asian Tab */}
      <TabPanel value={tabValue} index={2}>
        <Typography variant="h5" gutterBottom>Sushi & Asian</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Golden Cheung</Typography>
                <Typography variant="subtitle2" color="text.secondary">Chinese</Typography>
                <Typography variant="body2" paragraph>
                  A local favorite for takeout classics—egg rolls, lo mein, and speedy service.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: Friday night cravings and family feasts.
                </Typography>
                <Link href="https://www.yelp.com/biz/golden-cheung-brick" target="_blank" rel="noopener">Yelp</Link>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Hibachi Grill & Supreme Buffet</Typography>
                <Typography variant="subtitle2" color="text.secondary">Japanese, Buffet</Typography>
                <Typography variant="body2" paragraph>
                  All-you-can-eat sushi, hibachi, and more in a festive, family-friendly setting.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: big appetites and indecisive eaters.
                </Typography>
                <Link href="https://www.yelp.com/biz/hibachi-grill-and-supreme-buffet-brick" target="_blank" rel="noopener">Yelp</Link>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Ikko Sushi</Typography>
                <Typography variant="subtitle2" color="text.secondary">Japanese, Sushi</Typography>
                <Typography variant="body2" paragraph>
                  Creative rolls, fresh fish, and a stylish, modern setting.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: sushi dates and sake fans.
                </Typography>
                <Link href="https://www.yelp.com/biz/ikko-japanese-steak-house-and-sushi-bar-brick" target="_blank" rel="noopener">Yelp</Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* Breakfast & Brunch Tab */}
      <TabPanel value={tabValue} index={3}>
        <Typography variant="h5" gutterBottom>Breakfast & Brunch Standouts</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">The Brownstone Pancake Factory</Typography>
                <Typography variant="subtitle2" color="text.secondary">Breakfast, Brunch</Typography>
                <Typography variant="body2" paragraph>
                  Instagram-worthy pancakes, wild toppings, and a fun, bustling crowd. Kids (and adults) love the over-the-top creations.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: family brunch and sweet tooths.
                </Typography>
                <Link href="https://www.yelp.com/biz/the-brownstone-pancake-factory-brick" target="_blank" rel="noopener">Yelp</Link>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Taylor Sam's</Typography>
                <Typography variant="subtitle2" color="text.secondary">Breakfast, Lunch</Typography>
                <Typography variant="body2" paragraph>
                  Classic Jersey breakfast joint—think big omelets, friendly service, and a local crowd.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: hearty starts and no-frills comfort.
                </Typography>
                <Link href="https://www.yelp.com/biz/taylor-sams-brick" target="_blank" rel="noopener">Yelp</Link>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Shore Good Pancake House</Typography>
                <Typography variant="subtitle2" color="text.secondary">Breakfast</Typography>
                <Typography variant="body2" paragraph>
                  Pancake paradise with dozens of options and fast, cheerful service.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: early risers and pancake connoisseurs.
                </Typography>
                <Link href="https://www.yelp.com/biz/shore-good-pancake-house-brick" target="_blank" rel="noopener">Yelp</Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* Global & Casual Tab */}
      <TabPanel value={tabValue} index={4}>
        <Typography variant="h5" gutterBottom>Global & Casual Eats</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Shut Up and Eat</Typography>
                <Typography variant="subtitle2" color="text.secondary">American, Diner</Typography>
                <Typography variant="body2" paragraph>
                  Breakfast in pajamas? Yes, please! Quirky, fun, and full of comfort food.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: breakfast lovers and families with a sense of humor.
                </Typography>
                <Link href="https://www.yelp.com/biz/shut-up-and-eat-toms-river" target="_blank" rel="noopener">Yelp</Link>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Jersey Shore Greek Grill</Typography>
                <Typography variant="subtitle2" color="text.secondary">Greek, Mediterranean</Typography>
                <Typography variant="body2" paragraph>
                  Gyros, souvlaki, and all the Greek classics in a sunny, casual space.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: Mediterranean cravings and healthy lunches.
                </Typography>
                <Link href="https://www.yelp.com/biz/jersey-shore-greek-grill-brick" target="_blank" rel="noopener">Yelp</Link>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Surf Taco</Typography>
                <Typography variant="subtitle2" color="text.secondary">Mexican, Surf</Typography>
                <Typography variant="body2" paragraph>
                  Baja-style tacos, burritos, and surfer vibes.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: casual lunches and post-beach bites.
                </Typography>
                <Link href="https://www.yelp.com/biz/surf-taco-brick" target="_blank" rel="noopener">Yelp</Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* Healthy & Vegetarian Tab */}
      <TabPanel value={tabValue} index={5}>
        <Typography variant="h5" gutterBottom>Healthy & Vegetarian</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Seed to Sprout</Typography>
                <Typography variant="subtitle2" color="text.secondary">Vegan, Vegetarian</Typography>
                <Typography variant="body2" paragraph>
                  Plant-based cafe with inventive bowls, sandwiches, and smoothies.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: vegans, vegetarians, and the health-conscious.
                </Typography>
                <Link href="https://www.yelp.com/biz/seed-to-sprout-brick" target="_blank" rel="noopener">Yelp</Link>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Gluten Free Gloriously</Typography>
                <Typography variant="subtitle2" color="text.secondary">Bakery, Gluten-Free</Typography>
                <Typography variant="body2" paragraph>
                  Dedicated gluten-free bakery—cupcakes, breads, and sweet treats for everyone.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: gluten-free guests and dessert lovers.
                </Typography>
                <Link href="https://www.yelp.com/biz/gluten-free-gloriously-brick" target="_blank" rel="noopener">Yelp</Link>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Playa Bowls</Typography>
                <Typography variant="subtitle2" color="text.secondary">Acai Bowls, Juice Bar</Typography>
                <Typography variant="body2" paragraph>
                  Beachy chain for acai bowls, smoothies, and fresh juices.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: post-beach refreshment and healthy cravings.
                </Typography>
                <Link href="https://www.yelp.com/biz/playa-bowls-brick" target="_blank" rel="noopener">Yelp</Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* Coffee & Sweets Tab */}
      <TabPanel value={tabValue} index={6}>
        <Typography variant="h5" gutterBottom>Coffee & Sweets</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Rook Coffee</Typography>
                <Typography variant="subtitle2" color="text.secondary">Coffee</Typography>
                <Typography variant="body2" paragraph>
                  Trendy regional chain with strong cold brew and a cult following.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: coffee aficionados and morning commuters.
                </Typography>
                <Link href="https://www.yelp.com/biz/rook-coffee-brick" target="_blank" rel="noopener">Yelp</Link>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Hoffman's Ice Cream</Typography>
                <Typography variant="subtitle2" color="text.secondary">Ice Cream</Typography>
                <Typography variant="body2" paragraph>
                  Legendary Jersey ice cream parlor—huge scoops, homemade flavors, and a line out the door in summer.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: classic cones and family outings.
                </Typography>
                <Link href="https://www.yelp.com/biz/hoffmans-ice-cream-point-pleasant-beach" target="_blank" rel="noopener">Yelp</Link>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Mueller's Bakery</Typography>
                <Typography variant="subtitle2" color="text.secondary">Bakery</Typography>
                <Typography variant="body2" paragraph>
                  Old-school bakery with legendary crumb cake and fresh breads.
                </Typography>
                <Typography variant="body2" fontStyle="italic">
                  Best for: morning treats and picnic desserts.
                </Typography>
                <Link href="https://www.yelp.com/biz/muellers-bakery-bay-head" target="_blank" rel="noopener">Yelp</Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* Tips & Resources */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>Tips & Resources</Typography>
        <ul>
          <li>Reservations recommended for waterfront and popular spots, especially in summer.</li>
          <li>Many offer takeout and delivery—great for beach picnics or boat days.</li>
          <li>See more reviews and photos: <Link href="https://www.tripadvisor.com/Restaurants-g46321-Brick_New_Jersey.html" target="_blank" rel="noopener">TripAdvisor: Brick Restaurants</Link></li>
        </ul>
      </Box>
    </Box>
  );
}
