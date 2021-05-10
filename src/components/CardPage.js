import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Lizard from '../assets/img/lizard.jpg'
// import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles({
  root: {
    maxWidth: 1200,
  },
  media: {
    height: 627,
    width: 1200,
    opacity: 0.3,
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'black',
 },
});


const MediaCard = ({props}) => {
  const classes = useStyles();
  // console.log(props.data)
  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src={Lizard}
          component="img"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.overlay}>
          <Typography gutterBottom variant="h3" component="h2">{props.name}</Typography>
            <Typography gutterBottom color="primary" variant="h4" component="h2"><b>{"Problem Statement :"}</b>{props.data[0].problem}</Typography>
            <Typography gutterBottom color="textPrimary" variant="h5" component="h2"><b>{"Purpose Statement :"}</b>{props.data[0].purpose}</Typography>
            <Typography gutterBottom color="primary" variant="h5" component="h2"><b>{"Scope Statement :"}</b>{props.data[0].scope}</Typography>
            <Typography gutterBottom color="textPrimary" variant="h5" component="h2"><b>{"Efforts Statement :"}</b>{props.data[0].Efforts}</Typography>
            <Typography gutterBottom color="textSecondary" variant="h5" component="h2"><b>{"Build Statement :"}</b>{props.data[0].Build}</Typography>
            <Typography gutterBottom color="error" variant="h5" component="h2"><b>{"Additional Info :"}</b>{props.data[0].Additional}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {props.data[0].Developed}
        </Button>
      </CardActions>
    </Card>
  )
}

export default MediaCard