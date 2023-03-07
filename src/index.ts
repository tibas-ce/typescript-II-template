/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;
2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/

import { table } from "console";

enum Role {
  ADMIN = "Admin",
  NORMAL = "Normal"
};

type Person = {
  id: string,
  name: string,
  email: string,
  password: string,
  role: Role
};

type AdminAccount = {
  account: string,
  permission: boolean
};

type NormalAccount = {
  account: string,
  permission: boolean
};

type AdminUser = Person & AdminAccount;

type NormalUser = Person & NormalAccount;

const admins: AdminUser[] = [];

const common: NormalUser[] = [];

const user1: AdminUser = {
  id: "1",
  name: "Tibério",
  email: "tibas@email.com",
  password: "123456",
  role: Role.ADMIN,
  account: "001",
  permission: true
};

const user2: NormalUser = {
  id: "2",
  name: "Belchior",
  email: "Belchior@email.com",
  password: "123456",
  role: Role.NORMAL,
  account: "002",
  permission: false
};

function validateUser(usuario: AdminUser | NormalUser){
  if(usuario.role !== Role.NORMAL){
    admins.push(usuario)
  } else {
    common.push(usuario)
  }
};

validateUser(user1);
validateUser(user2);

console.table(admins);
console.table(common);

/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
4. Crie duas pessoas, uma com permissão normal e a outra admin;
5. Guarde essas pessoas no array de usuários.

*/

/* enum Role {
  ADMIN = "Admin",
  NORMAL = "Normal"
}; 

type AdminUser = Person & AdminAccount;

type NormalUser = Person & NormalAccount;
*/