import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './CustomTextField';

const SearchForm = () => {

    const methods = useForm();

    return (
        <>
            <Typography variant='h6' gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form>
                    <Grid>
                        <FormInput required name='firstName' label='Owner name' />
                        <FormInput required name='lastName' label='Repo name' />
                    </Grid>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button component={Link} to='/issues' variant='outlined'>Search</Button>
                                
                    </div>
                </form>
            </FormProvider>
        </>
    )
}

export default SearchForm
