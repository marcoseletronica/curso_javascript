const nome = 'Marcos '
const concatenacao = 'Olá ' + nome + 'Tudo bem'

const template = `
Olá 
${nome}!`
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)