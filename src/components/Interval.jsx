import './Interval.css'
import React from 'react';
import { connect } from 'react-redux';
import Card from './Card'
import {changeMin, changeMax} from '../store/actions/numbers'

function Interval(props) {

    const min = props.min
    const max = props.max
    return (
        <Card title="Intervalo de Numeros" red>
            <div className="Interval">
            <span>
                <strong>Mínimo</strong>
                <input type="number" value={min}
                    onChange={e => props.mudaMin(parseInt(e.target.value))}/>
            </span>
            <span>
                <strong>Máximo</strong>
                <input type="number" value={max}
                    onChange={e => props.mudaMax(+e.target.value)}/>
            </span>
            </div>
        </Card>
    );
}
function mapStateToProps(state) {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

function mapDispatchToProp(dispatch) {
    return {
        mudaMin(newNumber) {
            const action = changeMin(newNumber)
            dispatch(action)
        },
        mudaMax(newNumber) {
            const action = changeMax(newNumber)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp) (Interval);