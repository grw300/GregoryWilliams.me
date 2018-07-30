import React, { Component } from 'react';
import { Grid, ListGroup, ListGroupItem } from 'react-bootstrap';
import Remarkable from 'remarkable';

export class Home extends Component {
    displayName = Home.name

    componentDidMount() {
        this.api = this.props.api;
        this.api.getPosts()
        .then(response => {
            this.setState({ posts: response.data, loading: false });
        });
    }

    constructor(props) {
        super(props);
        this.state = { posts: [], loading: true };
    }

    static getRawMarkup(content) {
        const md = new Remarkable();
        return { __html: md.render(content) };
    }

    static renderPosts(posts) {
        return (
            <ListGroup>
                {posts.map((post) =>
                    <ListGroupItem key={post.id} href="#" header={post.title}>
                        <span dangerouslySetInnerHTML={this.getRawMarkup(post.content)} />
                    </ListGroupItem>
                )}
            </ListGroup>
        );
    }

    render() {
        let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : Home.renderPosts(this.state.posts);
        return (
            <Grid>
                {contents}
                <div>Next Page &rarr;</div>
            </Grid>
        );
    }
}
