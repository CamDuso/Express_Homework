
const React = require('react')
const pokemon = require('../models/pokemon')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};

class Show extends React.Component {
    render() {
        const id = this.props.id;
        return (
            <div>
                <h1 style={myStyle}>Gotta Catch 'Em All</h1>
                <h2>{pokemon[id].name}</h2>
                <img src={pokemon[id].img + ".jpg"} alt="" />
                <a href="/pokemon">back to index</a>
            </div>
        )
    }
}

module.exports = Show;