import Styles from '../../styles/scss/content.module.scss'
import Image from 'next/image'

export default function Content() {
    const url = process.env.NODE_ENV == 'production' ? 'https://correioscep.vercel.app/api/cep/' : 'http://localhost:3000/api/cep/'

    return (
        <div className="container mt-4 mt-md-5 mb-4 mb-md-5 p-3 p-md-5">
            <div className="row">
                <div className="col-12 col-md-6 offset-md-3">
                    <div className={Styles.card + " shadow"}>
                        <div className="pt-5 px-3 px-md-5 text-center">
                            <Image
                                src="/correios.png"
                                alt="Correios"
                                width={241}
                                height={50}
                                className={Styles.image}
                            />
                            <h1 className={Styles.name + " mt-4 text-uppercase"}>Correios API - CEP</h1>
                            <h2 className={Styles.idd + " mb-0"}>Busca de endereço pelo CEP</h2>
                            <code className={Styles.text + " d-block w-100 my-5"}>
                                <p>API gratuita e de alto desempenho para consultar <b>Códigos de Endereçamento Postal (CEP)</b> do Brasil.</p>
                                <p>O endereço é procurado em três banco de dados (webservices) diferentes, o primeiro que retornar é exibido na requisição.</p>
                                <p>Para receber dados da API, um CEP no formato de 8 dígitos deve ser fornecido.</p>
                                <p className="mb-0">
                                    Exemplo: 
                                    <a href={url + '39400001'} target="_blank" rel="noreferrer">
                                        {url + '39400001'}
                                    </a>
                                </p>
                            </code>
                        </div>
                        <div className="d-flex flex-column flex-md-row w-100">
                            <div className="col-12 col-md-4 p-0 d-flex justify-content-center">
                                <div className={Styles.label + " d-inline-flex align-items-center justify-content-center"}>
                                    <span>Feito com</span>
                                    <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                                        <Image
                                            src="/nextjs.png"
                                            alt="NextJS"
                                            width={67}
                                            height={40}
                                            className={Styles.image}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 p-0 d-flex justify-content-center">
                                <div className={Styles.label + " d-inline-flex align-items-center justify-content-center"}>
                                    <span>Hospedado em</span>
                                    <a href="https://vercel.com/" target="_blank" rel="noreferrer">
                                        <Image
                                            src="/vercel.png"
                                            alt="Vercel"
                                            width={110}
                                            height={40}
                                            className={Styles.image}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 p-0 d-flex justify-content-center">
                                <div className={Styles.label + " d-inline-flex align-items-center justify-content-center"}>
                                    <span>Criado por</span>
                                    <a href="https://sizilio.vercel.app" target="_blank" rel="noreferrer">
                                        Vinícius Sizílio
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}