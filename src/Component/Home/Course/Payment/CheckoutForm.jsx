import React from 'react';

const CheckoutForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}></form>
        </div>
    );
};

export default CheckoutForm;