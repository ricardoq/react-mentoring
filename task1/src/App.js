import React from 'react';
import logo from './logo.svg';
import './App.css';

const createEl = React.createElement('h2', {className: 'create-element'}, 'Create element component!');

const FuncComponent = (props) => (<h2>Create function component: "{props.message}"</h2>);

class ClassComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (<h2>Create class component: "{this.props.message}"</h2>);
  }
}

class ClassComponentPure extends React.PureComponent {
  render () {
    return (<h2>Create pure component: "{this.props.message}"</h2>);
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      {createEl}
      <FuncComponent message="prop message"/>
      <ClassComponent message="prop message"/>
      <ClassComponentPure message="prop message"/>
    </div>
  );
}

export default App;
