const React = require("react");
const DefaultLayout = require("./layouts/default");
class Show extends React.Component {
  render() {
    const {log}= this.props;
      return (
      <DefaultLayout title={"Log Entry"}>
        <div>
            <nav>

            </nav>
          {log.Title} ,  {log.Date}
          <br />{" "}
          {log.Entry}, <br></br>
          {log.shipIsBroken
            ? "This ship was destroyed today, we can't sail anymore"
            : "The ship stays seaworthy another day"} <br></br><br></br>
                            <a href="/logs"> Return to Home Page</a>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;