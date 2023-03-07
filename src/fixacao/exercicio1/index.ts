/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

type Person = {
  name: string,
  age: number,
  favoriteColour: Rainbow
};

enum Rainbow {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  ANIL = "Anil",
  VIOLETA = "Violeta"
};

const user1: Person = {
  name:"Tibério",
  age: 30,
  favoriteColour: Rainbow.VERDE
};

const user2: Person = {
  name:"Galadriel",
  age: 3400,
  favoriteColour: Rainbow.VIOLETA
};

const user3: Person = {
  name:"Aragorn",
  age: 87,
  favoriteColour: Rainbow.ANIL
};

console.table(user1);
console.table(user2);
console.table(user3);