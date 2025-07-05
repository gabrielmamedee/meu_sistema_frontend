# Meus sistema Front-end

Projeto front-end em ReactJS do Curso Presencial Programação Fullstack

## Bibliotecas

- react-router-dom
- axios
- json-server
- react-bootstrap bootstrap
- react-icons
- react-input-mask

```
npm i react-router-dom axios json-server react-bootstrap bootstrap react-icons react-input-mask
```


### Lembre-se, é necessario importar o bootstrap no arquivo main.jsx

```
import 'bootstrap/dist/css/bootstrap.min.css'
```


### Configuração do JSON-SERVER:

- No package.json, insira um script novo:

  ```
  "server": "json-server --watch data/db.json"
  ```
- Crie uma pasta e arquivo data/db.json na raiz do projeto
- Dentro do arquivo inicialize as tablelas do banco de dados facke

  ```j
  {
  	"fornecedores": [],
  	"produtos": [],
  	"clientes": []
  }
  ```
