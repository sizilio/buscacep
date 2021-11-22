async function handler (req, res) {
  const { cep } = req.query

  try {
    const cepCheck = await cepValidate(cep)
    const result = await getAddress(cepCheck)
    
    if (!result) throw new Error();
    
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send({ erro: 'CEP inválido' })
  }
}

async function getAddress (cep) {
  const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  const data = await res.json()

  if (typeof data.erro !== 'undefined') 
    return false
  else
    return {
      'cep': data.cep,
      'logradouro': data.logradouro,
      'complemento': data.complemento,
      'bairro': data.bairro,
      'cidade': data.localidade,
      'uf': data.uf
    }
}

async function cepValidate (cep) {
  cep = cep.replace(/[A-Za-z]/g, "")
  return cep
}

export default handler