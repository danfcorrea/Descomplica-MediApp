# 🏥 MediApp — Sistema Web Full Stack de Gestão Clínica

Aplicação web Full Stack desenvolvida para digitalizar e automatizar o fluxo de atendimento médico, permitindo o gerenciamento de médicos, pacientes, agendamentos de consultas e emissão automatizada de prescrições médicas em PDF.

---

## 🚀 Funcionalidades Principais

- **Autenticação e Segurança:** Login de médicos com criptografia de senha (`bcrypt`) e proteção de rotas via token **JWT** (`jsonwebtoken`).
- **Gestão de Médicos (`Doctor`):** Cadastro, listagem, atualização, exclusão e autenticação de profissionais de saúde.
- **Gestão de Pacientes (`Pacient`):** Controle completo de prontuário e dados cadastrais de pacientes.
- **Agendamento de Consultas (`Appointment`):** Marcação, reagendamento e controle de status de consultas médicas.
- **Prescrições e Automação de Documentos (`Prescription`):** Registro de receitas médicas, upload de arquivos (`multer`) e geração automatizada de receituários em **PDF** (`pdfkit`).

---

## 🏗️ Arquitetura do Projeto

O projeto é dividido em **Back-End (API REST)** na raiz e **Front-End (SPA/SSR)** no diretório `mediapp/`, seguindo a separação de responsabilidades em camadas:

```text
├── database/        # Configuração e conexão com o banco de dados
├── middleware/      # Middleware de autenticação e validação de token JWT (authMiddleware.js)
├── models/          # Modelagem de dados (Doctor, Pacient, Appointment, Prescription)
├── repositories/    # Camada de acesso e persistência de dados
├── services/        # Regras de negócio e orquestração da aplicação
├── routes/          # Controladores HTTP e definição de endpoints REST
├── mediapp/         # Aplicação Front-End em Next.js (React + TypeScript + Tailwind CSS)
└── index.js         # Ponto de entrada do servidor Express
```

---

## 🛠️ Tecnologias Utilizadas

### Back-End
- **Node.js** & **Express.js**
- **MongoDB** & **Mongoose**
- **JWT (JSON Web Token)** & **Bcrypt** (Autenticação e Hash de senhas)
- **PDFKit** (Geração dinâmica de prescrições em PDF)
- **Multer** (Upload e manipulação de arquivos)

### Front-End (`/mediapp`)
- **Next.js 15** & **React 19**
- **TypeScript**
- **Tailwind CSS**

---

## ⚙️ Como Executar o Projeto

### 1. Back-End (API)
Na raiz do projeto, instale as dependências e inicie o servidor:
```bash
npm install
node index.js
```

### 2. Front-End (Interface Web)
Em outro terminal, acesse a pasta `mediapp`, instale as dependências e rode o ambiente de desenvolvimento:
```bash

cd mediapp
npm install
npm run dev
```
