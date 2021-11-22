async function handler (req, res) {
  const { cep } = req.query

  try {
    const cepCheck = await cepValidate(cep)
    const result = await getAddress(cepCheck)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send({ error: 'Invalid CEP' })
  }
}

async function getAddress (cep) {
  const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  const data = await res.json()
  
  if (data) {
    return {
      'cep': data.cep,
      'logradouro': data.logradouro,
      'complemento': data.complemento,
      'bairro': data.bairro,
      'cidade': data.localidade,
      'uf': data.uf
    }
  }

  return false
}

async function cepValidate (cep) {
  cep = cep.replace(/[A-Za-z]/g, "")
  return cep
}

export default handler