import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";

import Issue from './Issue/Issue';
import IssueContext from "../contexts/IssueContext";
import useStyles from './styles';

const Issues = ({ onAddToCart }) => {

    const value = useContext(IssueContext);
    let items = value.items;

    const classes = useStyles();

    return (

        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent='center' spacing={4}>
                {items.length === 0
                    ? <Typography>Not Issues </Typography>
                    : items.map((issue) => (
                        <Grid item key={issue.id} xs={12} sm={6} md={4} lg={3}>
                            <Issue issue={issue} onAddToCart={onAddToCart} />
                        </Grid>
                    ))
                }
            </Grid>
        </main>

    )
};

export default Issues;