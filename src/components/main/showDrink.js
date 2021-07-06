import React from 'react';
import drinkCard from './DrinkCard';
import { Row } from 'react-bootstrap';

export class showDrink extends component {

    render() {

        const DrinkCard = this.props.characters.map((data, index) => {

            return (

                <DrinkCard data={data} key={index}>
                    )

        })

        return (

            <row>
                {DrinkCard}
        )
    }
}