const React = require("react");
const connect = require("react-redux").connect;
const actions = require("./actions.jsx");
class PhoneForm extends React.Component {
  constructor(props) {
    super(props);
    this.phoneInput = React.createRef();
  }
  onClick() {
    if (this.phoneInput.current.value !== "") {
      const itemText = this.phoneInput.current.value;
      this.phoneInput.current.value = "";
      return this.props.addPhone(itemText);
    }
  }
  render() {
    return (
      <div>
        <input ref={this.phoneInput} />
        <button onClick={this.onClick.bind(this)}>Add</button>
      </div>
    );
  }
}

class PhoneItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>
          <b>{this.props.text}</b>
          <br />
          <button onClick={() => this.props.deletePhone(this.props.text)}>
            Delete
          </button>
        </p>
      </div>
    );
  }
}

class PhoneList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.phones.map((item) => (
          <PhoneItem
            key={item}
            text={item}
            deletePhone={this.props.deletePhone}
          />
        ))}
      </div>
    );
  }
}

class AppView extends React.Component {
  render() {
    return (
      <div>
        <PhoneForm addPhone={this.props.addPhone} />
        <PhoneList {...this.props} />
      </div>
    );
  }
}

function mapStateProps(state) {
  return {
    phones: state.get("phones"),
  };
}

module.exports = connect(mapStateProps, actions)(AppView);
