"use strict";

class Hello extends React.Component {
  render() {
    return (
      <p>
        Hi {this.props.to}
        from {this.props.from}
      </p>
    );
  }
}

ReactDOM.render(
  <Hello to="you" from="Balloonicorn" />,
  document.querySelector('#root')
);
