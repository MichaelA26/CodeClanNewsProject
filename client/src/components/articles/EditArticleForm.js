import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class EditArticleForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headline: this.props.article.headline,
            date: this.props.article.date,
            journalist: this.props.article.journalist,
            story: this.props.article.story,
            summary: this.props.article.summary,
            category: this.props.article.category
        }
        this.handleHeadlineChange = this.handleHeadlineChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleStoryChange = this.handleStoryChange.bind(this);
        this.handleSummaryChange = this.handleSummaryChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const id = this.props.article.id
        const headline = this.state.headline.trim();
        const date = this.state.date.trim();
        const journalist = this.state.journalist;
        const story = this.state.story.trim();
        const summary = this.state.summary.trim();
        const category = this.state.category.trim();

        this.props.onArticleEdit({
            id: id,
            headline: headline,
            date: date,
            journalist: journalist,
            story: story,
            summary: summary,
            category: category
        })
    }

    handleHeadlineChange(event) {
        this.setState({ headline: event.target.value })
    }

    handleDateChange(event) {
        this.setState({ date: event.target.value })
    }

    handleStoryChange(event) {
        this.setState({ story: event.target.value })
    }

    handleSummaryChange(event) {
        this.setState({ summary: event.target.value })
    }

    handleCategoryChange(event) {
        this.setState({ category: event.target.value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                Headline:
                <input type="text" value={this.state.headline} onChange={this.handleHeadlineChange} />
                Date:
                <input type="date" value={this.state.date} onChange={this.handleDateChange} />
                Story:
                <input type="text" value={this.state.story} onChange={this.handleStoryChange} />
                Summary:
                <input type="text" value={this.state.summary} onChange={this.handleSummaryChange} />
                Category:
                <input type="text" value={this.state.category} onChange={this.handleCategoryChange} />
                <button type="submit" value="Post" >Submit changes</button>
            </form>
        )
    }
}

export default EditArticleForm