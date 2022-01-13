import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';//MenuItem, Menu, IconButton, Badge,
// import { InsertLink } from '@material-ui/icons';
import { Link } from 'react-router-dom';//, useLocation


import useStyles from './styles';

const Navbar = () => {//{ totalItems }
    const classes = useStyles();
    // const location = useLocation();

    
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit' >
                <Toolbar>
                    <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
                        <img src='' alt='' height='25px' className={classes.image} />
                        Home
                    </Typography>
                    <Typography component={Link} to='/issues' variant='h6' className={classes.title} color='inherit'>
                        <img src='' alt='' height='25px' className={classes.image} />
                        Issues
                    </Typography>
                    <div className={classes.grow} />
                    {/* {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit'>
                            <Badge badgeContent={totalItems} color='secondary'>
                                <InsertLink />
                            </Badge>
                        </IconButton>
                    </div>
                    )} */}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
