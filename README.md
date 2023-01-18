# manga-brasil-back-end

back-end para a <a href= "https://github.com/yorigcs/manga-brasil-front-end">aplicação react manga-brasil</a>.

## Sobre

manga-brasil é um projeto em andamento para testar possíveis soluções para a hospedagem e leitura de mangas, manhwas e afins.

## Como rodar o projeto localmente

1. clone este repositório
2. Instale todas as depêndencias

```bash
npm i
```

3. Crie uma database postgres com um nome de sua escolha
4. Tenha certeza de popular o arquivo `.env` baseado no `.env.example`.
5. Prepare o banco de dados rodando o comando

```bash
npm run prisma:prepare
```

6. Inicie em modo de desenvolvimento:

```bash
npm run dev
```



## Building e starting para produção

```bash
npm run build
npm start
```


# Rotas

## Cadastro
```yml
POST /sign-up
    - headers: {}
    - body:{
       name: "any_name",
       email: "valid_email@email.com",
       password: "any_password",
       confirmPassword: "any_password"	
    }
RESPOSTA CASO SUCESSO
    - status: 201
    - body: {
        id: string,
        name: string,
        email: string,
        role: string,
      }
    }

RESPOSTA CASOS DE ERRO
  - CORPO DO PEDIDO MAL FORMATADO
    - status: 422
    - body: { error: 'Campo X específico'}
    
  - EMAIL JÁ CADASTRADO
    - status: 409
    - body: { error: 'Este usuário já está cadastrado!'}
```

## Login
```yml
POST /sign-in
    - headers: {}
    - body:{
      email: "valid_email@email.com",
      password: "valid_password"	
    }
RESPOSTA CASO SUCESSO
    - status: 200
    - body: {
        user:{
          id: string,
          name: string,
          email: string,
          profilePicture: string,
          role: string,
          },
          token: string,
      }
      
RESPOSTA CASOS DE ERRO
 - CORPO DO PEDIDO MAL FORMATADO
    - status: 422
    - body: { error: 'Campo X específico'}
    
  - USUÁRIO NÃO CADASTRADO || EMAIL OU SENHA INCORRETOS
    - status: 401
    - body:{ error: 'Email ou senha incorretos!' }
```

## Criação de manga
```yml
POST /create-manga
    - headers: {
        Content-Type: "multipart/form-data",
        x-acess-token: 'Bearer token'
    }
    - body: {
      images: File[],
      name: string,
      description: string,
      author: string,
    }
    
RESPOSTA CASO SUCESSO
    - status: 201
    - body:{
         id: string,
         cover_picture: string,
         name: string,
         description: string,
         author: string,
         posted_by: string,
         followed_by: number | null,
         status: string | null,
         rating: number | null,
         created_at: Date,
         updated_at: Date
      }

RESPOSTA CASOS DE ERRO
  - CORPO DO PEDIDO MAL FORMATADO
    - status: 422
    - body: { error: 'Campo X específico'}
    
  - ERRO NO UPLOAD DA IMAGEM
    - status: 400
    - body: { error: 'Você deve enviar pelo menos uma imagem!' || 'Apenas imagens nos formatos png,jpeg e jpg são permitidas!'}
    
  - TOKEN INVÁLIDO OU NÃO FORNECIDO
    - status: 401
    - body: [{ error: 'Token inválido!' }
    
  - NÃO TEM AUTORIZAÇÃO
    - status: 403
    - body: [{ error: 'Você não tem permissão para acessar essa rota!' }
   
  - MANGA JÁ CADASTRADO
    - status: 409
    - body: [{ error: 'Este manga já está cadastrado!' }
]
```

## Adicionar gêneros ao manga
```yml
POST /add-genre-to-manga
    - headers: {x-acess-token: 'Bearer token'}
     - body: {
      mangaId: string,
      genres: string[],
    }
RESPOSTA CASO SUCESSO
    - status: 201
    - body:{}

RESPOSTA CASOS DE ERRO
  - CORPO DO PEDIDO MAL FORMATADO
    - status: 422
    - body: { error: 'Campo X específico'}
    
  - TOKEN INVÁLIDO OU NÃO FORNECIDO
    - status: 401
    - body: [{ error: 'Token inválido!' }
    
  - NÃO TEM AUTORIZAÇÃO
    - status: 403
    - body: [{ error: 'Você não tem permissão para acessar essa rota!' }
   
  - MANGA NÃO ENCONTRADO
    - status: 404
    - body: [{ error: 'Este manga não existe!' }
    
  - GêNERO NÃO ENCONTRADO
    - status: 404
    - body: [{ error: 'Este gênero não existe!' }
   
   - ESSE MANGA JÁ CONTEM ESSE GÊNERO
    - status: 409
    - body: [{ error: 'Este manga já possuí o gênero X' }
]
```

## Criação de capítulo
```yml
POST /create-chapter
    - headers: {x-acess-token: 'Bearer token'}
     - body: {
      name: string,
      chapterNum: number,
      mangaId: string,
    }
RESPOSTA CASO SUCESSO
    - status: 201
    - body:{
         id: string
         name: string
         price?: number
         chapter_num: number
         created_at: Date
         updated_at: Date
         manga_id: string
      }

RESPOSTA CASOS DE ERRO
  - CORPO DO PEDIDO MAL FORMATADO
    - status: 422
    - body: { error: 'Campo X específico'}
    
  - ERRO NO UPLOAD DA IMAGEM
    - status: 400
    - body: { error: 'Você deve enviar pelo menos uma imagem!' || 'Apenas imagens nos formatos png,jpeg e jpg são permitidas!'}
    
  - TOKEN INVÁLIDO OU NÃO FORNECIDO
    - status: 401
    - body: [{ error: 'Token inválido!' }
    
  - NÃO TEM AUTORIZAÇÃO
    - status: 403
    - body: [{ error: 'Você não tem permissão para acessar essa rota!' }
   
  - MANGA NÃO ENCONTRADO
    - status: 404
    - body: [{ error: 'Este manga não existe!' }
   
   - NOME OU NÚMERO DO CAPÍTULO JÁ EXISTENTES PARA ESSE MANGA
    - status: 409
    - body: [{ error: 'Este (número || nome) de capítulo já existe nessa obra!' }
]
```

## Criação de páginas
```yml
POST /create-page
    - headers: {
        Content-Type: "multipart/form-data",
        x-acess-token: 'Bearer token'
    }
    - body: {
      images: File[],
      chapter_id: string,
    }
RESPOSTA CASO SUCESSO
    - status: 201
    - body:{}

RESPOSTA CASOS DE ERRO
  - CORPO DO PEDIDO MAL FORMATADO
    - status: 422
    - body: { error: 'Campo X específico'}
    
  - ERRO NO UPLOAD DA IMAGEM
    - status: 400
    - body: { error: 'Você deve enviar pelo menos uma imagem!' || 'Apenas imagens nos formatos png,jpeg e jpg são permitidas!'}
    
  - TOKEN INVÁLIDO OU NÃO FORNECIDO
    - status: 401
    - body: [{ error: 'Token inválido!' }
    
  - NÃO TEM AUTORIZAÇÃO
    - status: 403
    - body: [{ error: 'Você não tem permissão para acessar essa rota!' }
   
  - CAPÍTULO NÃO ENCONTRADO
    - status: 404
    - body: [{ error: 'Este capítulo não existe' }
   
   - CAPÍTULO JÁ POSSUI PAGINAS
    - status: 409
    - body: [{ error: 'Este capítulo já possui páginas' }
]
```
...


