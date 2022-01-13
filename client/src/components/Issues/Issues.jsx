import React from "react";
import { Grid } from "@material-ui/core";

import Issue from './Issue/Issue';

import useStyles from './styles';

const Issues = ({ issues, onAddToCart }) => {

    const classes = useStyles();

    return (

    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justifyContent='center' spacing={4}>
            {issues.map((issue) => (
                <Grid item key={issue.id} xs={12} sm={6} md={4} lg={3}>
                    <Issue issue={issue} onAddToCart={onAddToCart} />
                </Grid>
            ))}
        </Grid>
    </main>

    )
};

export default Issues;