export  interface Associado {
    id ? : String
    nome ? : String
    cpf ? : String
    idade ? : String
    endereco ? : String
    numero ? : String
    CEP ? : String
    cidade ? : String
    uf ? : String
    clube_ID ? : Object
    tipo_usuario ? : Object
    titulo ? : String
    aulas ? : Object
    resevado ? : Object
    bloqueado ? : Boolean
    liberadoAte ? : Date
    valor_mensalidade ? : Number
    parcelas ? : Number
    titular ? : Boolean
    dependentes ? : Object
    createdAt ? : Date
    updatedAt ? : Date
    deleteAt ? : Date

}