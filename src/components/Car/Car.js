import React from 'react';

const Car = ({car}) => {

    const {brand,year,price}=car

    return (
        <div>
            <div>brand :{brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button>Update</button>
            <button>Delete</button>
        </div>
    );
};

export default Car;