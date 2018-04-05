import React from 'react';

class Secret extends React.Component {

    render() {
        return (
            <div>
                <h1>{ this.props.isLoggedIn ? "SECRET STUFF" : "Please login to see the secret stuff" }</h1>
            </div>
        );
   }
}

export default Secret;