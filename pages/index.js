import Head from '../src/patterns/head'
import Content from '../src/components/content'

function Home() {
  return (
    <div>
      <Head title="Busca CEP Correios" description="API para busca de CEP dos Correios." />
      <Content />
    </div>
  )
}

export default Home