import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'; 
import {AddShoppingCart} from '@material-ui/icons';

import useStyles from './styles';

const Issue = ({ issue, onAddToCart }) => {

  
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media}  title={issue.title} /> 
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {issue.title}
                    </Typography>
                    {/* <Typography variant='h5'>
                        {issue.price.formatted}
                    </Typography> */}
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: issue.description }} variant='body2' color='textSecondary' />
            </CardContent>
            {/* <CardActions disableSpacing className={classes.cardActions} >
                <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(issue.id, 1)}>
                    <AddShoppingCart  />
                </IconButton>
            </CardActions> */}
        </Card>
    )
}

export default Issue;