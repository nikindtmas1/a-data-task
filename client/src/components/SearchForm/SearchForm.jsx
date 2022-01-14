import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './CustomTextField';



const SearchForm = () => {

    const methods = useForm();


    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <Typography variant='h6' >Search Repo</Typography>
            <FormProvider {...methods}>
                <form>
                    <br />
                    <label>Owner name:</label>
                    <br />
                    <input name='firstName' label='Owner name'></input>
                    <br />
                    <br />
                    <label>Repo name:</label>
                    <br />
                    <input name='lastName' label='Owner name'></input>
                    {/* <Grid>
                        <FormInput required name='firstName' label='Owner name' />
                        <FormInput required name='lastName' label='Repo name' />
                    </Grid> */}
                    <br />
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
