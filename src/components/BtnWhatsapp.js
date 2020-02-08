import React from "react";

import wa from "../assets/btn-whatsapp.png";

const BtnWhatsapp = () => (
    <div className="shadow rounded px-5 py-2 bg-white flex flex-col items-center mt-6 sm:mt-0 sm:flex-row">
        <img src={wa} alt="" />
        <div className="sm:ml-4">
            <h3 className="font-bold text-2xl">Orcar seu projeto</h3>
            <p className="text-xs">Projeto e orcamento sem compromisso</p>
            <p className="font-bold">+238 555 55 55</p>
        </div>
    </div>
);

export default BtnWhatsapp;
