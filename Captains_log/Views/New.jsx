const React = require("react");
const DefaultLayout = require("./layouts/default");
class New extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New Log Entry"}>
        <div>
          <form action="/logs" method="POST">
            Title: <input type="text" name="Title" required/>
            <br />
            Date: <input type="text" name="Date" required/>
            <br />
            Entry: <input type="text" name="Entry" required/>
            <br />
            shipIsBroken: <input type="checkbox" name="Is Ship Broken?"/>
            <br />
            <input type="submit" name="" value="Add Log Entry" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = New;