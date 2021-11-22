import Styles from '../../styles/scss/content.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Content() {
    const url = process.env.NODE_ENV == 'production' ? 'https://correioscep.vercel.app/api/cep/' : 'http://localhost:3000/api/cep/'

    return (
        <div className="container mt-4 mt-md-5 mb-4 mb-md-5 p-3 p-md-5 d-flex justify-content-center">
            <div className="row">
                <div className="col-12">
                    <div className={Styles.card + " p-5"}>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h1 className={Styles.name + " text-uppercase"}>Correios API - CEP</h1>
                            <h2 className={Styles.idd}>Busca de endereço pelo CEP</h2>
                            <code className={Styles.text + " w-100 my-4"}>
                                <p>Para usar a API basta acessar url <u>{url}</u> com o CEP no final.</p>
                                <p className="mb-0">
                                    Exemplo:
                                    <b>
                                        <a href={url + '39403400'} target="_blank" rel="noreferrer">
                                            {url + '39403400'}
                                        </a>
                                    </b>.
                                </p>
                            </code>
                            <div className="row w-100">
                                <div className="col p-0 d-flex justify-content-center">
                                    <div className={Styles.label + " d-inline-flex align-items-center justify-content-center"}>
                                        <span>Feito com</span>
                                        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                                            <Image
                                                src="/nextjs.png"
                                                alt="NextJS"
                                                width={100}
                                                height={40}
                                                className={Styles.image}
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="col p-0 d-flex justify-content-center">
                                    <div className={Styles.label + " d-inline-flex align-items-center justify-content-center"}>
                                        <span>Hospedado em</span>
                                        <a href="https://vercel.com/" target="_blank" rel="noreferrer">
                                            <Image
                                                src="/vercel.png"
                                                alt="Vercel"
                                                width={100}
                                                height={40}
                                                className={Styles.image}
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="col p-0 d-flex justify-content-center">
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
        </div>
    )
}