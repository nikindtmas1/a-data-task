import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core'; 
import {AddShoppingCart, SpaRounded} from '@material-ui/icons';

import useStyles from './styles';

const Issue = ({ issue, onAddToCart }) => {

  
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={issue.user.avatar_url} title={issue.title} /> 
            <CardContent>
            <Typography variant='h8' gutterBottom>
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <Typography>title:</Typography>
                    <Typography>author:</Typography>
                </div> 
            </Typography>
                <div className={classes.cardContent}>
                    <Typography component={Link} to='/comments' variant='outlined'>{issue.title}</Typography>
                    <Typography variant='h7'>{issue.user.login}</Typography>
                </div>
                {/* <Typography dangerouslySetInnerHTML={{ __html: issue.description }} variant='body2' color='textSecondary' /> */}
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions} >
            {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button component={Link} to='/cart' variant='outlined'>Back to Cart</Button>
                                <Button type='submit' variant='contained' color='primary'>Next</Button>
                    </div> */}
                <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(issue.id, 1)}>
                    {/* <AddShoppingCart  /> */}
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Issue;