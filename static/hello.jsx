"use strict";

class Hello extends React.Component {
  render() {
    return <p>Hi World!</p>;
  }
}

ReactDOM.render(
  <Hello />,
  document.querySelector('#root')
);
