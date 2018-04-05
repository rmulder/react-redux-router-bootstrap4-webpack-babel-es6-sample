import React from 'react';

class Hello extends React.Component {

   render() {
      return (
        <div>
            <a className='btn btn-primary' onClick={ this.props.isLoggedIn ? this.props.logout.bind(null) : this.props.login.bind(null) }>
                { this.props.isLoggedIn ? "Logout" : "Login" }
            </a>
        </div>
      );
   }
}

export default Hello;