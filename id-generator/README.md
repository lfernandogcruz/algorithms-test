<div id='top'></div>

[English](#en) | [Português](#pt)

---

<div id='en'></div>

# ID Generator Function

This is a function that generates a random ID with a hash of 16 random characters, separated into 4 groups.

The generated ID is a string with the pattern `XXXX-AAAA-BBBB-CCCC`.

The characters are generated randomly from the following array:

```js
'abcdefghijklmnopqrstuvwxyz0123456789'
```

The function generates a random number between 0 and 35 and uses it as an index to get a character from the array.

The function generates 4 groups of 4 characters each, separated by a dash.

The function returns the generated ID, stored in a variable.

```js
const id = generateId();
```

[Back to top ↑](#top)

---
---

<div id='pt'></div>

# Função Geradora de ID

Esta é uma função que gera um ID aleatório com um hash de 16 caracteres aleatórios, separados em 4 grupos.

O ID gerado é uma string com o padrão `XXXX-AAAA-BBBB-CCCC`.

Os caracteres são gerados aleatoriamente a partir do seguinte array:

```js
'abcdefghijklmnopqrstuvwxyz0123456789'
```

A função gera um número aleatório entre 0 e 35 e usa-o como índice para obter um caractere do array.

A função gera 4 grupos de 4 caracteres cada, separados por um hífen.

A função retorna o ID gerado, armazenado em uma variável.

```js
const id = generateId();
```

[Voltar ao topo ↑](#top)

---
---