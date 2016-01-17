var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({
  onSubmit: function(e){
    if (!this.refs.fieldEmail.state.valid) {
      alert("Email is required");
    } else {
      var httpRequestBody = {
        email: this.refs.fieldName.state.value,
        firstName: this.refs.fieldName.state.value
      };
      alert(httpRequestBody);

      this.refs.fieldName.clear();
      this.refs.fieldEmail.clear();
    }
  },
  render: function() {
    return (
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-body">
            <NameField type="first" ref="fieldName" />
            <EmailField ref="fieldEmail" />
            <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeadCapture;
