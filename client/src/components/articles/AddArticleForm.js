import React, { Component } from 'react'

class AddArticleForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headline: "",
            date: "",
            journalist: "",
            story: "",
            summary: "",
            category: ""
        }
        this.handleHeadlineChange = this.handleHeadlineChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleJournalistChange = this.handleJournalistChange.bind(this);
        this.handleStoryChange = this.handleStoryChange.bind(this);
        this.handleSummaryChange = this.handleSummaryChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const headline = this.state.headline.trim();
        const date = this.state.date.trim();
        const journalist = this.state.journalist;
        const story = this.state.story.trim();
        const summary = this.state.summary.trim();
        const category = this.state.category.trim();
        if (!headline || !date || !journalist || !story || !summary || !category) {
            return
        }
        this.props.onArticleSubmit({
            headline: headline,
            date: date,
            journalist: journalist,
            story: story,
            summary: summary,
            category: category
        })
        this.setState({
            headline: "",
            date: "",
            journalist: "",
            story: "",
            summary: "",
            category: ""
        })
    }

    handleHeadlineChange(event) {
        this.setState({ headline: event.target.value })
    }

    handleDateChange(event) {
        this.setState({ date: event.target.value })
    }

    handleJournalistChange(event) {
        const id = event.target.value
        const journalist = `https://localhost:8080/journalists/${id}`
        this.setState({ journalist: journalist })
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
        const journalistNodes =
        this.props.journalists.map((journalist) => {
            return (
                <option key={journalist.id} value={journalist.id}>
                    {journalist.firstName} {journalist.lastName}
                </option>
            )
        })
        return (
            <form onSubmit={this.handleSubmit} >
                Headline:
                <input type="text" value={this.state.headline} onChange={this.handleHeadlineChange} />
                Date:
                <input type="date" value={this.state.date} onChange={this.handleDateChange} />
                Journalist:
                <select onChange={this.handleJournalistChange}>
                    {journalistNodes}
                </select>
                Story:
                <input type="text" value={this.state.story} onChange={this.handleStoryChange} />
                Summary:
                <input type="text" value={this.state.summary} onChange={this.handleSummaryChange} />
                Category:
                <input type="text" value={this.state.category} onChange={this.handleCategoryChange} />
                <button type="submit" value="Post" >Add Article</button>
            </form>
        )
    }
}

export default AddArticleForm