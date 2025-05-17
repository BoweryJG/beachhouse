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
import BeachTravelTimes from './BeachTravelTimes';

// TabPanel component for tab content
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`beach-tabpanel-${index}`}
      aria-labelledby={`beach-tab-${index}`}
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
    id: `beach-tab-${index}`,
    'aria-controls': `beach-tabpanel-${index}`,
  };
}

export default function BeachesSection() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" gutterBottom>
        🏖️ Brick Township Beaches: Expanded Guide
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2 }}>
        Brick Township operates three ocean beaches (Brick Beach I, II, III) on the Barnegat Peninsula, plus a riverfront beach at Windward Beach Park. All are open Memorial Day–Labor Day, 9:30am–5:30pm, with lifeguards and amenities.
      </Typography>
      
      <BeachTravelTimes />
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 4 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          aria-label="beach categories"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Beach Highlights" {...a11yProps(0)} />
          <Tab label="Amenities & Tips" {...a11yProps(1)} />
          <Tab label="Local Insights" {...a11yProps(2)} />
          <Tab label="Resources" {...a11yProps(3)} />
        </Tabs>
      </Box>
      
      {/* Beach Highlights Tab */}
      <TabPanel value={tabValue} index={0}>
        <Typography variant="h5" gutterBottom>Beach Highlights</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Brick Beach I</Typography>
                <Typography variant="subtitle2" color="text.secondary">310 Route 35 North</Typography>
                <Typography variant="body2" paragraph>
                  Large parking lot ($10/day, often with open spots even on busy weekends).
                  Snack stand, showers, restrooms, attentive lifeguards.
                  Not overly crowded, family-friendly.
                </Typography>
                <Link href="https://www.tripadvisor.com/Attraction_Review-g46321-d1726533-Reviews-Brick_Beach_1-Brick_New_Jersey.html" target="_blank" rel="noreferrer noopener">TripAdvisor Reviews</Link>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Brick Beach II</Typography>
                <Typography variant="subtitle2" color="text.secondary">354 Route 35 North</Typography>
                <Typography variant="body2" paragraph>
                  No concessions, bathrooms, or parking directly at this beach.
                  Park at Beach I or III and walk.
                  Known for community events (like lifeguard camp).
                </Typography>
                <Link href="https://www.tripadvisor.com/Attraction_Review-g46321-d273133-Reviews-Brick_Beach_2-Brick_New_Jersey.html" target="_blank" rel="noreferrer noopener">TripAdvisor Reviews</Link>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Brick Beach III</Typography>
                <Typography variant="subtitle2" color="text.secondary">440 Route 35 North</Typography>
                <Typography variant="body2" paragraph>
                  Large parking lot, showers, restrooms, concessions.
                  Direct beach access, wide sandy area.
                  Well-marked and easily accessible from Route 35.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Windward Beach Park</Typography>
                <Typography variant="subtitle2" color="text.secondary">Riverfront Beach</Typography>
                <Typography variant="body2" paragraph>
                  Riverfront beach, great for picnics, playgrounds, and events.
                  Popular for dog walks and family outings.
                  Hosts Brick's Summerfest concerts and fireworks.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* Amenities & Tips Tab */}
      <TabPanel value={tabValue} index={1}>
        <Typography variant="h5" gutterBottom>Amenities & Tips</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Beach Badges</Typography>
                <Typography variant="body2" paragraph>
                  Required for all beaches (purchase at beach or online).
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Parking</Typography>
                <Typography variant="body2" paragraph>
                  Paid lots at Beach I & III; badge may include parking.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Facilities</Typography>
                <Typography variant="body2" paragraph>
                  Showers, restrooms, and food concessions at main beaches.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Accessibility</Typography>
                <Typography variant="body2" paragraph>
                  All ocean beaches are well-marked along Route 35.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Rules</Typography>
                <Typography variant="body2" paragraph>
                  No alcohol, no dogs (in summer), no fires, no glass containers.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* Local Insights Tab */}
      <TabPanel value={tabValue} index={2}>
        <Typography variant="h5" gutterBottom>Local Insights</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Best for Families</Typography>
                <Typography variant="body2" paragraph>
                  Brick Beach I (calm, not too crowded).
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Best for Events</Typography>
                <Typography variant="body2" paragraph>
                  Windward Beach Park (concerts, fireworks, farmers market).
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Hidden Gem</Typography>
                <Typography variant="body2" paragraph>
                  Early mornings or off-season for peaceful walks.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Surfcasting</Typography>
                <Typography variant="body2" paragraph>
                  Good patch of sand for fishing on the Barrier Island.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* Resources Tab */}
      <TabPanel value={tabValue} index={3}>
        <Typography variant="h5" gutterBottom>Resources & Links</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Official Information</Typography>
                <Typography variant="body2" paragraph>
                  <Link href="https://www.bricknj.gov/departments/recreation/beaches.php" target="_blank" rel="noreferrer noopener">Official Brick Beaches Info</Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Reviews & Guides</Typography>
                <Typography variant="body2" paragraph>
                  <Link href="https://www.thefisherman.com/article/brick-beaches/" target="_blank" rel="noreferrer noopener">Brick Beaches - The Fisherman</Link>
                  <br />
                  <Link href="https://newjersey.news12.com/best-beaches-checking-out-ocean-beaches-brick-township-nj" target="_blank" rel="noreferrer noopener">Local News Beach Feature</Link>
                  <br />
                  <Link href="https://www.thecitypulse.com/post/brick-beaches-badges-parking-good-deal-unassuming-beaches-separated-from-brick-where-is-brick-ii" target="_blank" rel="noreferrer noopener">Brick Beaches Guide (CityPulse)</Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Dog-Friendly Options</Typography>
                <Typography variant="body2" paragraph>
                  <Link href="https://www.bringfido.com/attraction/beaches/city/brick-nj-us/" target="_blank" rel="noopener">Dog Friendly Beaches</Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Hours & Lifeguards</Typography>
                <Typography variant="body2" paragraph>
                  <strong>Lifeguard Coverage:</strong> Weekends only from Memorial Day to mid-June, then daily through Labor Day.
                  <br />
                  <strong>Hours:</strong> 9:30am – 5:30pm (weather permitting).
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* Additional Information */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>Main Beaches & Locations</Typography>
        <ul>
          <li><strong>Brick Beach I:</strong> 310 Route 35 North (Oceanfront). Large parking lot, outdoor showers, concessions, lockers, and restrooms.</li>
          <li><strong>Brick Beach II & III:</strong> Easily accessible along Route 35. Both have direct beach access, lifeguards, showers, restrooms, and concessions.</li>
          <li><strong>Bay Beach:</strong> Calm waters, great for kids and families.</li>
        </ul>
      </Box>
    </Box>
  );
}
