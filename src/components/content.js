import Styles from '../../styles/scss/content.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Content() {
    return (
        <div className="container mt-4 mt-md-5 mb-4 mb-md-5 p-3 p-md-5 d-flex justify-content-center">
            <div className={Styles.card + " p-5"}>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className={Styles.name}>Correios API - CEP</h1>
                    <h2 className={Styles.idd}>Busca de endereço pelo CEP</h2>
                    <code className={Styles.text + " my-4"}>
                        <p>Para usar a API basta acessar url <u>https://correioscep.vercel.app/api/cep/</u> com o CEP no final.</p>
                        <p className="mt-0">
                            Exemplo: 
                            <b><a href="https://correioscep.vercel.app/api/cep/39403440" target="_blank">https://correioscep.vercel.app/api/cep/39403440</a></b>.
                        </p>
                    </code>
                    <div className="mt-0"> 
                        <div className={Styles.label + " d-inline-flex align-items-center justify-content-center"}>
                            <span>Feito com</span>
                            <a href="https://nextjs.org/" target="_blank">
                                <Image
                                    src="/nextjs.png"
                                    alt="NextJS"
                                    width={100}
                                    height={40}
                                    className={Styles.image}
                                />
                            </a>
                        </div>
                        <div className={Styles.label + " d-inline-flex align-items-center justify-content-center"}>
                            <span>Hospedado em</span>
                            <a href="https://vercel.com/" target="_blank">
                                <Image
                                    src="/vercel.png"
                                    alt="Vercel"
                                    width={100}
                                    height={40}
                                    className={Styles.image}
                                />
                            </a>   
                        </div>
                        <div className={Styles.label + " d-inline-flex align-items-center justify-content-center"}>
                            <span>Criado por</span>
                            Vinícius Sizílio
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*
*/