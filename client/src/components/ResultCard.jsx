import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { CardActions } from '@mui/material';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { CardContent } from '@mui/material';
import { Stack } from '@mui/material';
import { Divider } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

const ResultCard = () => {
  return (
    <div>
      <Card>
        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
          <div sx={{ width: 1 / 4 }}>
            <CardHeader
              avatar={
                <Avatar
                  src="https://aptapproviderlogos.s3.eu-west-2.amazonaws.com/circular/plusnet.png"
                  aria-label="recipe"
                />
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <h2>info</h2>
                </Grid>
                <Grid item xs={6}>
                  <h2>info</h2>
                </Grid>
                <Grid item xs={6}>
                  <h2>info</h2>
                </Grid>
                <Grid item xs={6}>
                  <h2>info</h2>
                </Grid>
              </Grid>
            </CardContent>
          </div>
          <div>
            <ul>
              <li>One</li>
              <li>One</li>
            </ul>
            <Grid container>
              <CardActions></CardActions>
              <Grid item xs={12}>
                <CardActions>
                  <Button size="small">More</Button>
                </CardActions>
              </Grid>
              <Grid item xs={12}>
                <CardActions>
                  <Button size="small">Things</Button>
                </CardActions>
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Card>
    </div>
  );
};

export default ResultCard;
