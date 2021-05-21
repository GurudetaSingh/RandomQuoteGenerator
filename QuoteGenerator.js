import React from "react";

class QuoteGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            quotes: null
        }
        this.getQuote = this.getQuote.bind(this);
    }

    componentDidMount() {
      this.getQuote();
    }

    getQuote() {
        fetch("https://api.quotable.io/random")
          .then(response => response.json())
          .then(data => {
            this.setState({
              quotes: data
            });
        })
    }

    
    
    render() {
        const {quotes} = this.state
        if (!quotes) return null;

        return(
          <div className="container">
            <form onSubmit={this.getQuote}>
              <p className="quote">"{quotes.content}"</p>
              <p className="author">— {quotes.author}</p>
              <button className="button">Generate</button>
            </form>
          </div>
        )
    }
}

export default QuoteGenerator;