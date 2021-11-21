import React, { useState } from 'react';
import DealCardFooter from './DealCardFooter';
import DetailsGrid from './DetailsGrid';
// MUI
import { Card, CardHeader, CardContent } from '@mui/material/';
import { Grid, Container, Button, Avatar, Typography, Checkbox } from '@mui/material';
import { List, ListItem } from '@mui/material';

// Icons
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';

// insert semantic components for card i.e card actopm, content etc.
const ResultCard = ({ deal, onCompare }) => {
  const { provider_name, deal_name, provider_rating, provider_logo_image_url, deal_id } = deal;
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    onCompare(deal_id, event.target.checked);
  };

  return (
    <Container>
      <Card>
        <Grid container>
          <Grid item xs={8}>
            <CardHeader
              avatar={<Avatar src={provider_logo_image_url} aria-label="recipe" />}
              title={provider_name}
              subheader={deal_name}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1">Compare</Typography>
            <Checkbox
              {...label}
              checked={checked}
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={8}>
            <CardContent>
              <DetailsGrid deal={deal}></DetailsGrid>
            </CardContent>
          </Grid>
          {/* 4 size as its 1/3 of the second row */}
          <Grid item xs={4} display="flex" flexDirection="column">
            <List>
              <ListItem>
                <Button color="success" variant="contained">
                  Visit Now
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  color="primary"
                  variant="contained"
                  endIcon={<ArrowForwardIosTwoToneIcon />}
                >
                  More info
                </Button>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <DealCardFooter rating={provider_rating}></DealCardFooter>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default ResultCard;
