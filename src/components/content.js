import Styles from '../../styles/scss/content.module.scss'
import Image from 'next/image'

export default function Content() {
    return (
        <div className="container mt-4 mt-md-5 mb-4 mb-md-5 p-3 p-md-5 d-flex justify-content-center">
            <div className={Styles.card + " p-5"}>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className={Styles.name}>Correios API - CEP</h1>
                    <h2 className={Styles.idd}>Busca de endereço pelo CEP</h2>
                    <code className={Styles.text + " my-4"}>
                        Para usar a API basta acessar url <u>https://buscacep.vercel.app/cep/</u> com o CEP no final, 
                        por exemplo <b>https://buscacep.vercel.app/cep/39400000</b>.
                    </code>
                    <div className="mt-0"> 
                        <span className={Styles.label}>Feito com <b>Flutter</b></span>
                        <span className={Styles.label}>Hospedado em <b>Vercel</b></span>
                        <span className={Styles.label}>Criado por <b>Vinícius Sizílio</b></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*
<Image
                        src="/vinicius-sizilio.jpg"
                        alt="Vinícius Sizílio"
                        width={120}
                        height={120}
                        className={Styles.image}
                    />*/