import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import  { Navbar, Issues, Comments, Search }  from './components';

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
  

    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path='/issues'>
                        <Issues items={issues}/>
                    </Route>
                    <Route exact path='/comments'>
                        <Comments items={issues}/>
                    </Route>
                    <Route exact path='/search'>
                        <Search items={issues}/>
                    </Route>
                </Switch>
            </div>
        </Router>

    )
}

export default App;
