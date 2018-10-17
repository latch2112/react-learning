import React, { Component } from 'react';

import Listing from './Listing';

const App = () => (

    <Amount
        render={amount => (
        <div>
            <h2>My currency converter</h2>
            <Pound amount={amount} />
            <Euro amount={amount} />
        </div>
        )}
    />
);

const Euro = ({ amount }) => (<p>Euro: {amount * 0.86}</p>);
const Pound = ({ amount }) => (<p>Pound: {amount * 0.76}</p>);

const List = props => <ul>{props.children}</ul>;

const ListItem = props => <li>{props.text}</li>;

const HeaderListItem = props => (
    <li style={{background: "red"}}>
        {props.text}
    </li>
);


const Random = props => props.render( Math.random() );

const Text = props => <p>{props.children}</p>;


class Amount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
    };
  }

  onIncrement = () => {
    this.setState(state => ({ amount: state.amount + 1 }));
  };

  onDecrement = () => {
    this.setState(state => ({ amount: state.amount - 1 }));
  };


  render() {
    return (
      <div>
        <span>US Dollar: {this.state.amount} </span>

        <button type="button" onClick={this.onIncrement}>
          +
        </button>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
          {this.props.render(this.state.amount)}

          <List>
              <HeaderListItem text="Header!"/>
              { ["Hello", "World"].map(i => <ListItem text={i}/>)}
          </List>
          <Random render={number => <Text>{number}</Text>} />
          <Random render={number => <List>{number}</List>} />
          <Random render={number => <ListItem text={number}/>} />

          <Listing/>

      </div>
    );
  }
}

export default App;
