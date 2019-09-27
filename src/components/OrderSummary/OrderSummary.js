import React, { Fragment } from 'react';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map( ingredientKey =>{
            return (
                <li key={ingredientKey}>
                    <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span> { props.ingredients[ingredientKey]}
                </li>
            )
        })

    return (
        <Fragment>
            <h1>Your Order</h1>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to check</p>
        </Fragment>
    )
};

export default orderSummary;