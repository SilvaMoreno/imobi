import React from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import "./styles.css";
// import "./output.css";

import img from "../assets/img.png";
import selo from "../assets/selo.png";

import BtnWhatsapp from "../components/BtnWhatsapp";
import Logo from "../components/Logo";

const Header = ({ children }) => (
    <div className="p-4 bg-indigo-800 sm:flex justify-between items-center">
        {children}
    </div>
);

const Footer = ({ children }) => (
    <div className="p-4 bg-gray-200 sm:flex justify-between items-center">
        {children}
    </div>
);

const Hero = () => (
    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="p-8">
            <h2 className="font-bold text-2xl">Moveis planejados</h2>
            <p className="text-xl">
                Comerciais e resedenciais para todos os ambientes
            </p>
            <p className="text-gray-700">
                Atendemos na cidade da Praia e Mindelo
            </p>
        </div>
        <div>
            <img src={img} alt="img" />
        </div>
    </div>
);

const Index = () => {
    const { site } = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    const selos = [1, 2, 3, 4];
    const projetos = [1, 2, 3, 4];
    return (
        <div>
            <Helmet>
                <title>{site.siteMetadata.title}</title>
            </Helmet>
            <Header>
                <Logo />
                <div>
                    <BtnWhatsapp />
                </div>
            </Header>
            <Hero />
            <div className="flex flex-col items-center sm:flex-row sm:justify-around">
                {selos.map((_, idx) => (
                    <img className="my-4" alt="ola" src={selo} key={idx} />
                ))}
            </div>
            <div className="">
                <h2 className="px-8 py-4 text-2xl font-bold">
                    Projetos de moveis planeados
                </h2>
                <div className="flex flex-wrap">
                    {projetos.map((_, idx) => (
                        <div className="max-w-sm" key={idx}>
                            <div className="m-2 rounded shadom-xl">
                                <img src={img} alt="" />
                                <div className="px-6 py-4">
                                    <p className="font-bold text-xl mb-2">
                                        Projeto
                                    </p>
                                    <p>Descricao</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer>
                <div>
                    <h5>Imobi Moveis</h5>
                    <p>Rua 5 julho, Plateu</p>
                </div>
                <BtnWhatsapp />
            </Footer>
        </div>
    );
};

export default Index;
