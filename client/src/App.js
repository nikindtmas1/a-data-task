import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { Navbar, Issues, Comments } from './components';
import IssueContext from './components/contexts/IssueContext';

const host = 'https://api.github.com/repos';


const App = () => {

    const [issues, setIssues] = useState([]);

    const fetchIssues = (owner, repo) => {

        fetch(host + `/${owner}/${repo}/issues`, { method: 'get' })
            .then((respons) => respons.json())
            .then((data) => setIssues(data))

    }

    const onSubmit = (e) => {
        e.preventDefault()

        let formData = new FormData(e.currentTarget);
        let owner = formData.get('firstName');
        let repo = formData.get('lastName');

        fetchIssues(owner, repo);

        owner = '';

    }

    return (
        <Router>
            <IssueContext.Provider value={{ items: issues }}>
                <div>
                    <Navbar />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Typography variant='h6' >Search Issues</Typography>
                    <form onSubmit={onSubmit}>
                        <br />
                        <label>Owner name:</label>
                        <br />
                        <input name='firstName' ></input>
                        <br />
                        <br />
                        <label>Repo name:</label>
                        <br />
                        <input name='lastName' ></input>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button type='submit' variant='outlined'>Search</button>
                        </div>
                    </form>
                    <Switch>
                        <Route exact path='/' component={Issues} />
                        <Route exact path='/issues' component={Issues} />
                        <Route exact path='/comments/:id' component={Comments} items={issues} />
                    </Switch>
                </div>
            </IssueContext.Provider>

        </Router>

    )
}

export default App;
