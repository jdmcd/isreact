import React, { Component } from 'react';

class Base extends Component {
  componentDidMount() {
    if (this.props.pageTitle) {
      document.title = `${this.props.pageTitle}`;
    }
  }

  render() {
    return (
        <div>
            {this.props.children}
        </div>
    );
  }
}

export default Base;
