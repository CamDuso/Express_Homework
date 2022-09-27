const React = require('react');
const DefaultLayout = require('./Layouts/Default')

class Index extends React.Component{
    render(){
        const {logs} = this.props;
        console.log(logs);
            return(
                
                <DefaultLayout title = {"Captains Log"}>
                    <a href = {`/logs/new`}> New Entry</a>
                    <ul>
                    {logs.map((log, i) => {
                        return (
                        <li key = {i}>
                            
                            <a href = {`/logs/${log.id}`}> {log.Title}</a> -  {log.Date}<br>
                            </br> 

                            {/* -----------EDIT */}
                                <br></br>
                             <a href = {`logs/${log._id}/edit`}> Edit Log Entry</a>
                             
                            {/* -----------DELETE */}
            
                            <form action = {`/logs/${log._id}?_method=DELETE`} method = "POST"> 
                                <input type = 'submit' value = 'ERASE FROM THE ARCHIVES'></input>
                                
                            </form>
                            <br></br>
                        </li>)
                    })}
                    </ul>
                </DefaultLayout>
        )
    }
}
module.exports = Index