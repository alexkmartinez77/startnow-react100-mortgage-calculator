import React from 'react';
import {render} from 'react-dom';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(){
    super();
    this.state = {
      balance: 315000,
      rate: 4.25,
      term: 30,
      period: 360,
      monthlyPayment:1500,
    }
  }


  onChange(e){


      if (this.refs.balance.value === ''){            //refs.title points to the input tag with ref="title"
        alert('Loan balance is required.');
      } else if (this.refs.rate.value === ''){
        alert('Rate is required.')
      } else {
        var x = this.calculate(this.refs.balance.value, this.refs.rate.value, this.refs.term.value, this.refs.term.value*12).toFixed(2);

        this.setState({                               //setState is a method
          balance: this.refs.balance.value,
          rate: this.refs.rate.value,                 //this state is a local state in AddProject.js
          term: this.refs.term.value,
          period: this.refs.term.value*12,                 //have to pass it to app.js to "pass up" the state
          monthlyPayment: x,
        }, function(){                                //setState takes 2 parameters including this "callback function"

       }); 
      } 
      e.preventDefault();
  }

  calculate(balance, rate, term, period){
    console.log(balance);
    console.log(rate);
    console.log(term);
    console.log(period);
    console.log(rate/1200);
 
    return (balance*((rate/1200) * Math.pow((1 + (rate/1200)), period)))/(Math.pow((1 + (rate/1200)), period) - 1);
   }

  render() {
    return (
      <div className = "container">
        <h1> Mortgage Calculator</h1>
        <hr></hr>
        <form onSubmit = {this.onChange.bind(this)}>
          <strong>Loan Balance</strong> <input name="balance" type="number" ref="balance" /><br/><br/>
          <strong>Interest Rate (%)</strong> <input name="rate" type="number" step=".01" ref="rate" /><br/><br/>
          <strong>Loan Term (years)</strong> <select name="term" ref="term">
                                                <option>15</option>
                                                <option>30</option>
                                              </select><br/><br/>
          <button name="submit" onClick="">CALCULATE</button><br/><br/>
          <div name="output">With a balance of {this.state.balance}, an interest rate of {this.state.rate} and 
          a term of {this.state.term} years, your monthly payment will be: {this.state.monthlyPayment} which will be paid in {this.state.period} months.</div>
      </form>
      </div>
    );
  }
}

