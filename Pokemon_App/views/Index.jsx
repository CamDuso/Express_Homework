
const React = require('react')
const pokemon = require('../models/pokemon')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};

class Index extends React.Component {
    render() {
        return (
            <div>
                <h1 style={myStyle}>See All The Pokemon!</h1>
                <ul>
                    {pokemon.map((pok, i) => (
                    <a href={`pokemon/${i}`}><li>{pok.name.charAt(0).toUpperCase() + pok.name.slice(1)}</li></a>
                    ))}
                </ul>
            </div>
        )
    }
}

module.exports = Index;