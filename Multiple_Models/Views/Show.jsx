const React = require('react');
const Tattoo = require('../Models/tattoos');
const DefaultLayout = require("./Layouts/Default")
class Show extends React.Component{
    render(){
        const {artist} = this.props;
        return(
            <DefaultLayout title = {`${artist.Name} portfolio`}>
                <br></br>
                {Tattoo.Description}
                
                jhuifdasj

                


            </DefaultLayout>
        )
    }
}
module.exports = Show;