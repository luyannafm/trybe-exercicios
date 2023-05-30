/* 
()Novo cadastro de cliente
()Validações para fazer as aulas

--> A função studentRegister() recebe dois parâmetros: name, nome da pessoa que quer começar a fazer as aulas; e age, idade da pessoa no momento do cadastro.
--> Caso a função não receba name ou idade (ou ambos), lance uma exceção com a mensagem 'Todas as informações são necessárias'.
Caso a função receba o nome e uma idade inferior a 18 anos, lance uma exceção com a mensagem 'Ops, infelizmente nesse momento você não pode fazer as aulas'
--> Caso a função receba o nome e uma idade igual ou superior a 18 anos, retorne a string: 'Nome, seja bem-vindo(a) à AuTrybe!'
*/

// FAZER VALIDAÇÃO DOS PARÂMETROS
const valideInfos = (name, age) => {
  if (!name || !age) {
    throw new Error('Todas as informações são necessárias');
  }
};

const valideAge = (age) => {
  if (age < 18) {
    throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
  }
};

const studentRegister = (name, age) => {
  try {
    valideInfos(name, age); //chamar o error
    valideAge(age);
    return `${name}, boas-vindas à Autrybe`;
  } catch (error) {
    return error.message;
  }
};
// console.log(studentRegister('Luyanna', 18));
// console.log(studentRegister('luyanna'));
// console.log(studentRegister('luyanna', 17));