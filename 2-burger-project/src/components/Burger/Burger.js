import React from 'react';
import css from './Burger.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(i => {
        return [...Array(props.ingredients[i])].map((_,k) => {
            return <BurgerIngredient type={i} key={i+k} />
        })
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if ( transformedIngredients.length === 0 ){
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return (
        <div className={css.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;