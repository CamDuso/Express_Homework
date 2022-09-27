const React = require("react");
const DefaultLayout = require("./layouts/default");

class Edit extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit Page">
         <form
          action={`/logs/${this.props.log._id}?_method=PUT`}
          method="POST"
        >
          Title:{" "}
          <input
            type="text"
            name="Title"
            defaultValue={this.props.log.title}
            required
          />
          <br />
          Entry:{" "}
          <input
            type="text"
            name="Entry"
            defaultValue={this.props.log.entry}
            required
          />
          <br />
          Date:{" "}
          <input type="text" 
          name="Date" 
          defaultValue={this.props.log.date} 
          required />
          
          <br />
          Is Broken:
          {this.props.log.shipIsBroken ? (
            <input type="checkbox" 
            name="shipIsBroken" 
            defaultChecked />
          ) : (
            <input type="checkbox" 
            name="shipIsBroken"  />
          )}
          <br />
          <input type="submit" 
          value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;