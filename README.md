# Paraíso Phone Store

<p align="center">
  <strong>Uma experiência digital premium para uma loja especializada em produtos Apple.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Status-Em_desenvolvimento-orange?style=for-the-badge" alt="Status">
</p>

---

## Sobre o projeto

O **Paraíso Phone Store** é um projeto de desenvolvimento web criado para apresentar digitalmente uma loja especializada em produtos Apple, com uma identidade visual sofisticada e uma experiência de navegação moderna.

O objetivo é desenvolver uma página institucional que valorize a apresentação da marca, seus produtos e seus diferenciais, facilitando o contato entre a loja e seus clientes.

O projeto utiliza tecnologias fundamentais do desenvolvimento front-end, com HTML para estruturação, CSS para estilização e responsividade e JavaScript para interatividade e animações.

Além da apresentação comercial, o projeto também possui possibilidades de expansão para funcionalidades que envolvam armazenamento de dados e consulta de orçamentos.

## Objetivos

- Desenvolver uma presença digital profissional para a loja.
- Criar uma interface moderna, intuitiva e responsiva.
- Apresentar os diferenciais e serviços oferecidos.
- Facilitar o contato com clientes por meio do WhatsApp.
- Aplicar conceitos de desenvolvimento front-end.
- Preparar a estrutura para futuras integrações com serviços externos.

## Funcionalidades

### Interface e navegação

- Layout adaptável para computadores, tablets e smartphones.
- Menu de navegação responsivo.
- Navegação por seções da página.
- Botões de contato e chamadas para ação.
- Elementos visuais com identidade própria.

### Recursos interativos

- Animações de entrada dos elementos durante a rolagem.
- Efeitos visuais em elementos da interface.
- Barra de progresso de leitura.
- Efeito de parallax em elementos selecionados.
- Contador animado.
- Menu mobile com suporte à navegação pelo teclado.
- Respeito à preferência do usuário por movimento reduzido.

### Apresentação comercial

- Seção principal de apresentação da loja.
- Apresentação dos diferenciais.
- Exibição dos produtos e serviços.
- Etapas de atendimento.
- Galeria de imagens.
- Seção de contato.

## Tecnologias utilizadas

| Tecnologia | Aplicação |
|---|---|
| HTML5 | Estrutura e organização do conteúdo |
| CSS3 | Identidade visual, layout e responsividade |
| JavaScript | Interatividade, animações e comportamento da interface |
| Git | Controle de versão |
| GitHub | Hospedagem do código e acompanhamento do projeto |

### Recursos e conceitos aplicados

- CSS Grid e Flexbox.
- Media Queries.
- Variáveis CSS.
- Intersection Observer API.
- Manipulação do DOM.
- Event Listeners.
- Animações e transições CSS.
- Acessibilidade e navegação por teclado.
- `prefers-reduced-motion`.

## Identidade visual

A interface foi desenvolvida com uma proposta visual premium, utilizando uma combinação de cores escuras e detalhes dourados.

| Elemento | Característica |
|---|---|
| Fundo principal | Tons escuros e sofisticados |
| Destaques | Dourado |
| Tipografia de títulos | Cormorant Garamond |
| Tipografia de conteúdo | Manrope |
| Estilo | Minimalista, elegante e moderno |

A proposta visual busca transmitir sofisticação sem comprometer a legibilidade e a facilidade de navegação.

## Estrutura do projeto

A organização planejada dos arquivos é:

```text
Paraiso-Store/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
└── README.md
```

**Responsabilidade de cada arquivo:**

- `index.html`: estrutura semântica e conteúdo da página.
- `css/style.css`: estilos, identidade visual, animações e responsividade.
- `js/main.js`: funcionalidades interativas e comportamentos da interface.
- `README.md`: documentação do projeto.

## Como executar o projeto

Por ser um projeto desenvolvido com HTML, CSS e JavaScript puro, não é necessário instalar dependências ou configurar um ambiente complexo.

1. Clone o repositório:

```bash
git clone https://github.com/guelwy/Paraiso-Store-.git
```

2. Entre na pasta:

```bash
cd Paraiso-Store-
```

3. Abra o arquivo `index.html` no navegador.

Também é possível utilizar a extensão **Live Server** no Visual Studio Code para executar o projeto em um servidor local durante o desenvolvimento.

## Próximas implementações

O projeto possui possibilidades de expansão para além de uma página institucional.

### Integração com Supabase

Uma das evoluções planejadas é a integração com o Supabase, permitindo implementar funcionalidades como:

- Cadastro e armazenamento de orçamentos.
- Registro de solicitações de clientes.
- Consulta de orçamentos por meio de uma área específica.
- Autenticação para acesso administrativo.
- Gerenciamento de informações armazenadas no banco de dados.

A implementação deverá utilizar políticas de segurança, autenticação e controle de acesso para proteger os dados dos clientes.

### Outras melhorias planejadas

- Aprimoramento da experiência mobile.
- Otimização de imagens e carregamento.
- Melhorias de acessibilidade.
- Refinamento de SEO.
- Evolução da estrutura para facilitar futuras manutenções.

## Segurança

Caso a integração com Supabase seja implementada, as credenciais deverão ser utilizadas de acordo com suas permissões e finalidades.

As operações no banco de dados deverão contar com políticas de Row Level Security (RLS), evitando que usuários tenham acesso indevido a informações de outros clientes.

Chaves administrativas e credenciais privilegiadas não devem ser expostas no código executado pelo navegador.

## Status do projeto

**Em desenvolvimento.**

A versão atual concentra-se na apresentação institucional, identidade visual e funcionalidades de interface. As integrações com banco de dados e os recursos administrativos fazem parte das possibilidades de evolução do projeto.

## Autor

**Guelwy**

Estudante de programação, com interesse em desenvolvimento de software e criação de aplicações web.

- GitHub: [@guelwy](https://github.com/guelwy)

---

<p align="center">
  Desenvolvido com dedicação e aprendizado contínuo.
</p>
