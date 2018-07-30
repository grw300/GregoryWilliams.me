import React, { Component } from "react";
import { Button, Col, ControlLabel, Form, FormGroup, FormControl, Grid, Panel, Row } from 'react-bootstrap';
import Remarkable from 'remarkable';

export class PostEditor extends Component {
    componentDidMount() {
        this.api = this.props.api;
    }

    constructor(props) {
        super(props);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSummaryChange = this.handleSummaryChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            title: 'New Post',
            summary: 'New Post Summary',
            content: 'Hello, **world**!'
        };
    }

    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }

    handleSummaryChange(e) {
        this.setState({ summary: e.target.value });
    }

    handleContentChange(e) {
        this.setState({ content: e.target.value });
    }

    handleSubmit() {
        this.api.postPost({
            title: this.state.title,
            summary: this.state.summary,
            content: this.state.content
        })
            .then(this.props.history.push('/'));
    }

    getRawMarkup() {
        const md = new Remarkable();
        return { __html: md.render(this.state.content) };
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={6}>
                        <Form horizontal onSubmit={this.handleSubmit}>
                            <FormGroup bsSize="large">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Title
                                </Col>
                                <Col sm={10}>
                                    <FormControl
                                        id="post-title"
                                        type="text"
                                        onChange={this.handleTitleChange}
                                        placeholder={this.state.title} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col sm={2} componentClass={ControlLabel}>
                                    Summary
                                </Col>
                                <Col sm={10}>
                                    <FormControl
                                        id="markdown-content"
                                        bsClass="form-control vresize"
                                        componentClass="textarea"
                                        rows={3}
                                        onChange={this.handleSummaryChange}
                                        placeholder={this.state.summary} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col sm={2} componentClass={ControlLabel}>
                                    Post
                                </Col>
                                <Col sm={10}>
                                    <FormControl
                                        id="markdown-content"
                                        bsClass="form-control vresize"
                                        componentClass="textarea"
                                        rows={10}
                                        onChange={this.handleContentChange}
                                        placeholder={this.state.content} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col sm={2} />
                                <Col sm={10}>
                                    <Button type="submit">Post</Button>
                                </Col>
                                <Col sm={2} />
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col sm={6}>
                        <Panel>
                            <Panel.Heading>
                                <Panel.Title toggle>{this.state.title}</Panel.Title>
                            </Panel.Heading>
                            <Panel.Collapse>
                                <Panel.Body>{this.state.summary}</Panel.Body>
                            </Panel.Collapse>
                            <Panel.Body
                                dangerouslySetInnerHTML={this.getRawMarkup()}>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
}