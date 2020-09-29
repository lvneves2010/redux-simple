import React from 'react';
import Card from './Card'
import { connect } from 'react-redux';

function Sorteio(props) {

    const min = props.min
    const max = props.max
    return (
        <Card title="Sorteio dos Números" purple>
            <div className="Interval">
            <span>
                <span>Resultado:</span>
                <strong>{Math.floor((Math.random() * (max - min)) + min)}</strong>
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

export default connect(mapStateToProps) (Sorteio);