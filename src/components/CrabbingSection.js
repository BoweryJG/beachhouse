import React from 'react';
import { Box, Typography, Link, List, ListItem } from '@mui/material';

const CrabbingSection = () => (
  <Box sx={{ my: 4, p: 3, background: 'rgba(255,255,255,0.93)', borderRadius: 4, boxShadow: 2 }}>
    <Typography variant="h4" gutterBottom>
      🦀 Why 125 Shore Dr. is a Crabbing Hotspot
    </Typography>
    <Typography paragraph>
      <strong>Prime Location:</strong> 125 Shore Dr. sits at the mouth of the Metedeconk River, where it meets Barnegat Bay—one of the top blue crab habitats on the Jersey Shore. The unique mix of saltwater from the bay and freshwater from the river creates the perfect brackish environment for blue crabs to thrive.
    </Typography>
    <Typography paragraph>
      <strong>Abundant Marshes, Creeks, & Tidal Flow:</strong> The shoreline here is lined with marshes, tidal creeks, and submerged grass beds—ideal habitats for crabs to hide, feed, and molt. Incoming and outgoing tides bring nutrients and bait, attracting both crabs and the small fish they prey on. Docks, bulkheads, and pilings provide additional shelter and structure.
    </Typography>
    <Typography paragraph>
      <strong>Consistent Water Quality & Food Supply:</strong> The Metedeconk River watershed is well-known for its productivity and clean water, supporting a healthy crab population. The blend of natural and residential shorelines means plenty of food scraps and organic matter, which blue crabs love.
    </Typography>
    <Typography paragraph>
      <strong>Local Tradition:</strong> Families at 125 Shore Dr. and throughout Brick have crabbed these waters for generations, passing down tips and favorite spots. The area is recognized in local guides and reports as a consistent producer of keeper-sized blue crabs, especially in late summer.
    </Typography>
    <Typography paragraph>
      <strong>Easy Access & Safe Crabbing:</strong> The bulkheaded shoreline, private dock, and shallow water make it easy and safe for guests of all ages to set traps or use hand lines right from the property—no boat needed!
    </Typography>
    <Typography variant="h6" gutterBottom>Learn More</Typography>
    <List>
      <ListItem><Link href="https://barnegatbaypartnership.org/learn/watershed-map/metedeconk-river-watershed/" target="_blank" rel="noopener">Barnegat Bay Partnership: Metedeconk River Watershed</Link></ListItem>
      <ListItem><Link href="https://bestofnj.com/features/family/the-best-crabbing-spots-in-new-jersey/" target="_blank" rel="noopener">Best of NJ: The Best Crabbing Spots in New Jersey</Link></ListItem>
      <ListItem><Link href="https://bbshellfish.org/crab/" target="_blank" rel="noopener">Barnegat Bay Shellfish: Crabs</Link></ListItem>
      <ListItem><Link href="https://njmonthly.com/articles/jersey-shore/net-benefits-catching-crabs/" target="_blank" rel="noopener">NJ Monthly: Net Benefits—Catching Crabs</Link></ListItem>
    </List>

    <Typography variant="h4" gutterBottom>
      🦀 Barnegat Bay Crabbing: A Local Tradition
    </Typography>
    <Typography paragraph>
      Barnegat Bay, including the waters near Brick, NJ, is famous for its blue crabs. The bay's mix of salt and fresh water, abundant marshes, and tidal creeks create the perfect habitat for blue crabs to thrive. Many local families—including at this very house—have set and tended crab traps for generations, making crabbing a beloved tradition and a source of fresh summer feasts.
    </Typography>
    <Typography variant="h5" gutterBottom>Crabbing Cycles & Best Times</Typography>
    <List>
      <ListItem>Season: Late spring through early fall (April–December).</ListItem>
      <ListItem>Best Months: August and September for the biggest, meatiest crabs.</ListItem>
      <ListItem>Best Times: Early morning (4:30–8:30 a.m.) when crabs are most active.</ListItem>
      <ListItem>Tides: Incoming and outgoing tides are best for setting traps.</ListItem>
    </List>
    <Typography variant="h5" gutterBottom>Soft Shell Crabs</Typography>
    <List>
      <ListItem>Soft shell crabs are blue crabs that have recently molted (shed their hard shell) and are entirely edible.</ListItem>
      <ListItem>Peak season: Late spring and early summer, but can occur throughout the season.</ListItem>
      <ListItem>Check traps frequently—soft shells are vulnerable and can be eaten by other crabs if left too long.</ListItem>
    </List>
    <Typography variant="h5" gutterBottom>Tips for Guests</Typography>
    <List>
      <ListItem>Place traps near marsh edges, docks, or tidal creeks for best results.</ListItem>
      <ListItem>Chicken necks, fish heads, or bunker are the best bait.</ListItem>
      <ListItem>Check NJ Fish & Wildlife rules for size and daily limits. Most blue crabs must be at least 4.5" point-to-point to keep.</ListItem>
      <ListItem>Crabbing is easy and fun for all ages—just check traps every hour or so and enjoy!</ListItem>
    </List>
    <Typography variant="h6" gutterBottom>More Resources</Typography>
    <List>
      <ListItem>
        <Link href="https://bbshellfish.org/crab/" target="_blank" rel="noopener">Barnegat Bay Shellfish: Crabs</Link>
      </ListItem>
      <ListItem>
        <Link href="https://www.bluecrab.info/forum/index.php?board=87.0" target="_blank" rel="noopener">NJ Crabbing Guide & Reports</Link>
      </ListItem>
      <ListItem>
        <Link href="https://dep.nj.gov/wp-content/uploads/njfw/digest-marine-2023-segment-20-24.pdf" target="_blank" rel="noopener">NJ State Regulations PDF</Link>
      </ListItem>
    </List>
  </Box>
);

export default CrabbingSection;
