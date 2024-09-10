import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
import { withRouter } from 'reactor-router-dom';

class SearchBar extends Component {

    handleFormSubmit = function({query}) {
        console.log('trying to handle submit for query', query);
        //navigate to a new route.
    }
    
    renderInput(field) {
        return <input type="text" placeholder="Search DailySmarty"/>
    }
    
    render() {
        const { handleSubmit } = this.props;
        return (
        <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >
            {/* <input placeholder="Search DailySmarty"/> */}
            <Field name="query" component={this.renderInput}/>
        </form>
        );
    }
}

SearchBar = reduxForm({
    form: 'searchBar'
  })(SearchBar);

SearchBar = withRouter(SearchBar);
export default SearchBar;

// another end for redux but we are not using "SearchBar = reduxForm({""
// export default reduxForm()(SearchBar);;