import React, { Component } from "react";
import "./Calculator.css"
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expression: ""
        }
    }
    handleClick = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === "number"||name==="operator") {
            if(this.state.expression === 0){
                this.setState({
                    expression : value
                })
            }else{
                this.setState({
                    expression : this.state.expression + value
                })
            }
        }
        else if(name==="clear"){
            this.setState({
                expression:""
            })
        }
        else if(name==="eval"){
            let result;
            try {
                //eslint-disable-next-line
                result = eval(this.state.expression);
                this.setState({
                    expression:result
                })
            } catch (error) {
                result = "ERROR"
                this.setState({
                    expression:result
                })
            }
        }
    }
    render() {
        return (
            <div className="calculator card">

                <input type="text" className="calculator-screen z-depth-1" value={this.state.expression} placeholder="0." disabled />

                <div className="calculator-keys">

                    <button name="operator" type="button" value="+" onClick={this.handleClick}>+</button>
                    <button name="operator" type="button" value="-" onClick={this.handleClick}>-</button>
                    <button name="operator" type="button" value="*" onClick={this.handleClick}>&times;</button>
                    <button name="operator" type="button" value="/" onClick={this.handleClick}>&divide;</button>

                    <button name="number" type="button" value="7" onClick={this.handleClick}>7</button>
                    <button name="number" type="button" value="8" onClick={this.handleClick}>8</button>
                    <button name="number" type="button" value="9" onClick={this.handleClick}>9</button>


                    <button name="number" type="button" value="4" onClick={this.handleClick}>4</button>
                    <button name="number" type="button" value="5" onClick={this.handleClick}>5</button>
                    <button name="number" type="button" value="6" onClick={this.handleClick}>6</button>

                    <button name="number" type="button" value="1" onClick={this.handleClick}>1</button>
                    <button name="number" type="button" value="2" onClick={this.handleClick}>2</button>
                    <button name="number" type="button" value="3" onClick={this.handleClick}>3</button>

                    <button name="number" type="button" value="0" onClick={this.handleClick}>0</button>
                    <button name="number" type="button" value="." onClick={this.handleClick}>.</button>
                    <button name="clear" type="button" value="all-clear" onClick={this.handleClick}>AC</button>

                    <button name="eval" type="button" className="equal-sign" value="=" onClick={this.handleClick}>=</button>

                </div>
            </div>
        );
    }
}
export default Calculator;