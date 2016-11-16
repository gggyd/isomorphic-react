import React, { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

class ContactsApp extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      contacts: this.props.initialData || [],
      filterText: ''
    }
  }

  componentDidMount() {
    if (!this.props.initialData) {
      ContactsApp.requestInitialData().then(contacts => {
        this.setState({ contacts });
      });
    }
  }

  handleUserInput(searchTerm) {
    this.setState({
      filterText: searchTerm
    })
  }

  handleClickButton() {
    ContactsApp.requestInitialData().then(contacts => {
      this.setState({ contacts, filterText: '' });
    });
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText}
                   onUserInput={this.handleUserInput.bind(this)} 
                   onReload={this.handleClickButton.bind(this)} />
        <ContactList contacts={this.state.contacts}
                     filterText={this.state.filterText} />
      </div>
    )
  }
};

ContactsApp.propTypes = {
  initialData: PropTypes.any
};

ContactsApp.requestInitialData = () => {
  return fetch(`http://local.domestore.cn:3000/contacts.json`)
    .then((response) => response.json());
}

export default ContactsApp;