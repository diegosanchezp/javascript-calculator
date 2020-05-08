import React  from 'react';
import './App.css';

class App extends React.Component{
 constructor(props) {
    super(props);
    this.state = {
      result: '0',
      expression: [],
      errorMsg: '',
    }
  }
  // Expression is a stack of string
  addToExpr(event){
    // Add to the extring expression
    event.persist();
    this.setState(state=> ({
      expression: [...state.expression, event.target.value]
    }));
  }

  // Todo delete from expression
  deleteFromExpr(sym){
    // Filter from array and update ui
    this.setState(({expression})=>({
      expression: expression.filter(elem => elem !== sym),
    }));
  }

  evalExpr(){
    // Convert expression into a number
    this.setState(state => {
      try{
        return {
          result: eval(state.expression.join('')),
          errorMsg: ''
        }
      }catch(e){
        // "Evaluation error: don't put zeros at the beginning of the numbers"
        console.log(e.name);
        return {
          errorMsg: e.message
        }
      }
    });
  }

  resetExpr(){
    // Reset back to inital state
    this.setState({
      result: '0',
      expression: [],
      errorMsg: ''
    });
  }

  render(){
    return (
      <div id="container">
        <form id="calculator">
          <div className="display-container">
            <p className="display" id="expr-display">
             {this.state.expression.join('')}
            </p>
            <p className="display" id="result-display">
              {this.state.result}
            </p>
          </div>
          <input type="button" id="zero" value="0" onClick={this.addToExpr.bind(this)}/>
          <input type="button" id="one" value="1" onClick={this.addToExpr.bind(this)}/>
          <input type="button" id="two" value="2" onClick={this.addToExpr.bind(this)}/>
          <input type="button" id="three" value="3" onClick={this.addToExpr.bind(this)}/>
          <input type="button" id="four" value="4" onClick={this.addToExpr.bind(this)}/>
          <input type="button" id="five" value="5" onClick={this.addToExpr.bind(this)}/>
          <input type="button" id="six" value="6" onClick={this.addToExpr.bind(this)}/>
          <input type="button" id="seven" value="7" onClick={this.addToExpr.bind(this)}/>
          <input type="button" id="eight" value="8" onClick={this.addToExpr.bind(this)}/>
          <input type="button" id="nine" value="9" onClick={this.addToExpr.bind(this)}/>
          <input type="button" id="add" value="+" onClick={this.addToExpr.bind(this)}/>
          <input type="button" id="subtract" value="-" onClick={this.addToExpr.bind(this)}/>
          <input type="button" id="multiply" value="*" onClick={this.addToExpr.bind(this)}/>
          <input type="button" id="divide" value="/" onClick={this.addToExpr.bind(this)}/>
          <input type="button" id="decimal" value="." onClick={this.addToExpr.bind(this)}/>
          <input type="button" id="clear" value="AC" onClick={this.resetExpr.bind(this)}/>
          <input type="button" id="equals" value="=" onClick={this.evalExpr.bind(this)}/>
          <input type="button" id="delete" value="DEL" 
            onClick={this.deleteFromExpr.bind(this, this.state.expression[this.state.expression.length -1])}/>
        </form>
        <p style={{color: "red"}}>{this.state.errorMsg}</p>
      </div>
    );
  }
}

export default App;
