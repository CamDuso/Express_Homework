const React = require('react')
const DefaultLayout = require('./Layouts/Default')

class Index extends React.Component{
    render(){
        const {artists} = this.props;
        console.log(artists);
            return(
                
                <DefaultLayout title = {"Home Page"}>
                    <ul>
                        {artists.map((artist, i) =>{
                            return(
                                <ul key = {i}> 
                                <a href = {`/artists/${artist.id}`}> {artist.Name}</a>
                                



                                </ul>
                            )
                        })}
                    </ul>

                </DefaultLayout>
        )
    }
}
module.exports = Index