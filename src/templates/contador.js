import React from "react";

// import { Container } from './styles';

const Contador = ({ pageContext }) => {
    return (
        <div>
            <p>Contador</p>
            <pre>{JSON.stringify(pageContext, null, 4)}</pre>
        </div>
    );
};

export default Contador;
