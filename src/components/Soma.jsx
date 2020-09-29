import React from 'react';
import { connect } from 'react-redux'
import Card from './Card'

function Soma(props) {

    const min = props.min
    const max = props.max
    return (
        <Card title="Soma dos Números" blue>
            <div className="Interval">
            <span>
                <span>Resultado:</span>
                <strong>{min + max}</strong>
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

export default connect(mapStateToProps) (Soma);