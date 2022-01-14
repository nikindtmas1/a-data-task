import { Card, CardContent, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import IssueContext from '../contexts/IssueContext';
import useStyles from './styles';

const Comments = ({
    match
}) => {
    const issueId = match.params.id;
    const value = useContext(IssueContext);
    const data = value.items;
    const classes = useStyles();

    const result = data.filter((x) => x.id == issueId);

    return (
        <Card>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h6'>Comment:</Typography>
                    {result[0].body
                        ? <Typography variant='subtitle1'>{result[0].body}</Typography>
                        : <Typography>This issue don't have comment</Typography>
                    }
                </div>
            </CardContent>
        </Card>
    )
}

export default Comments
