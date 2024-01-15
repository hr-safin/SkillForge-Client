import { useWindowSize } from "@react-hook/window-size";
import React from "react";

import Confetti from "react-confetti";

const SuccesfulPayment = () => {


    return (
        <div className=' h-screen flex justify-center items-center '>
            <h2 className=' text-5xl font-bold'>Payment Successful</h2>
        </div>
    );
};

export default SuccesfulPayment;