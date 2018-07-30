import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { PostEditor } from './components/PostEditor';
import ApiService from './components/Api/ApiService';

const api = new ApiService();

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path='/' render={(props) => <Home {...props} api={api} />} />
                    <Route exact path='/post-editor' render={(props) => <PostEditor {...props} api={api} />} />
                </Switch>
            </Layout>
        );
    }
}
