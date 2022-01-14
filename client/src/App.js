import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';

import  { Navbar, Issues, Comments }  from './components';

const host = 'https://api.github.com/repos/octocat/hello-world/issues';


const App = () => {

    const [issues, setIssues] = useState([]);

    const fetchIssues =  () => {
        //const { data } = await commerce.products.list();
        fetch(host, {method:'get'})
        .then((respons) => respons.json())
        .then((data) => setIssues(data))
        // const data = await octokit.request('GET /repos/{owner}/{repo}/issues', {
        //     owner: 'octocat',
        //     repo: 'hello-world'
        //   })

        // setIssues(data);
    }

    useEffect(() => {
        fetchIssues();
    },[])
    console.log(issues);
  
    const onClick = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const owner = formData.get('firstName');

        console.log(owner);
    }

    return (
        <Router>
            <div>
                <Navbar />
                <br />
                <br />
                <br />
                <br />
                <Typography variant='h6' >Search Repo</Typography>
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
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button variant='outlined' onClick={onClick}>Search</button> 
                    </div>
                </form>
                <Switch>
                    <Route exact path='/issues'>
                        <Issues items={issues}/>
                    </Route>
                    <Route exact path='/comments'>
                        <Comments items={issues}/>
                    </Route>
                </Switch>
            </div>
        </Router>

    )
}
//component={Link} to='/issues'
export default App;
