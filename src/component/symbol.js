import React from 'react';
import {connect} from 'react-redux';
import './symbol.css'
import { actADD_SYMBOL, actEVEN , actDELETE_SYMBOL, actCLEAR_SYMBOL } from '../action/index';

function Symbol(props) {
    const val = [0,".", 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const symbol = ["+", "-", "*", "/"];
    return(
        <div className = "container">
            <div className = "col-value">
                {val.map((val, index) =>{
                    return (<button key={index} value={val} className="value" onClick={() => props.addSymbol(val + "")}>{val}</button>);
                })}
                <button onClick={() => props.clearSymbol()} className="value" id="clear-symbol"> AC </button>
                <button onClick={() => props.deleteSymbol()} className="value" id="delete-symbol"> DEL </button>
                <button value="%" className="value" onClick={() => props.addSymbol("%")}>%</button>
            </div>
            <div className = "col-symbol">
                {symbol.map((symbol, index) =>{
                    return(
                            <button key={index} value={symbol} className="symbol" onClick={() => props.addSymbol(symbol)}>{symbol}</button>
                    )
                })}
                <button onClick={() => props.even()} className="symbol" value={'='}> = </button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSymbol : (value) => {
            dispatch(actADD_SYMBOL(value));
        },
        even : () => {
            dispatch(actEVEN());
        },
        deleteSymbol : () => {
            dispatch(actDELETE_SYMBOL())
        },
        clearSymbol : () => {
            dispatch(actCLEAR_SYMBOL())
        }
    }
}

export default connect(null,mapDispatchToProps)(Symbol);