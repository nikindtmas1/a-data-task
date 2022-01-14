import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import { Link } from 'react-router-dom';


import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit' >
                <Toolbar>
                    <Typography component={Link} to='/issues' variant='h6' className={classes.title} color='inherit'>
                        <img src='' alt='' height='25px' className={classes.image} />
                        Issues
                    </Typography>
                    <div className={classes.grow} />
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
