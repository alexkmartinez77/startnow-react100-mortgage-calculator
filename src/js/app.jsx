import React from 'react';
import { render } from 'react-dom';

export default class App extends React.Component {
  // your Javascript goes here
  constructor() {
    super();
    this.state = {
      balance: '',
      rate: '',
      term: 30,
      period: 360,
      monthlyPayment: 0,
    },

    this.handleChangeBalance = this.handleChangeBalance.bind(this);
    this.handleChangeRate = this.handleChangeRate.bind(this);
    this.handleChangeTerm = this.handleChangeTerm.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleChangeBalance(evt1) {
    this.setState({ balance: evt1.target.value });
  };

  handleChangeRate(evt2) {
    this.setState({ rate: evt2.target.value });
  };

  handleChangeTerm(evt3) {
    this.setState({ 
      term: evt3.target.value, 
      period: evt3.target.value * 12
    });

  };

  calculate() {
    let balance = parseFloat(this.state.balance);
    let rate = parseFloat(this.state.rate);
    let term = parseFloat(this.state.term);
    let monthlyPayment = parseFloat((balance * ((rate / 1200.0) * Math.pow((1.0 + (rate / 1200.0)), term * 12.0))) / (Math.pow((1.0 + (rate / 1200.0)), term * 12.0) - 1.0)).toFixed(2);
    this.setState({ monthlyPayment: String(monthlyPayment) });
    console.log(typeof monthlyPayment);
  }

  render() {
    return (
      <div className="container">
        <h1>Mortgage Calculator</h1>
        <hr></hr>
        <div>
          <strong>Loan Balance</strong> <input name="balance" type="number" defaultValue={this.state.balance} onChange={this.handleChangeBalance} /><br /><br />
          <strong>Interest Rate (%)</strong> <input name="rate" type="number" step=".01" defaultValue={this.state.rate} onChange={this.handleChangeRate} /><br /><br />
          <strong>Loan Term (years)</strong> <select name="term" defaultValue={this.state.term} onChange={this.handleChangeTerm}>
            <option value ="15.0">15</option>
            <option value ="30.0">30</option>
          </select><br /><br />
          <button name="submit" onClick={this.calculate}>CALCULATE</button><br /><br />
          <div id="output">
          With a balance of {this.state.balance}, an interest rate of {this.state.rate} and
          a term of {this.state.term} years, your monthly payment will be: {this.state.monthlyPayment} which will be paid in {this.state.period} months.
          
          </div>
        </div>
      </div>
    );
  }
}
