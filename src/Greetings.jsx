import React from 'react';

class Greetings extends React.Component {

    render() {
        // eslint-disable-next-line react/prop-types
        const { name } = this.props;

        return (
            <div>
                Hello, {name}
            </div>
        )
    }

}

export default Greetings;