# Resultados

## Resultados esperados
- Sucesso nos endpoints válidos:
  - `/breeds/list/all` retorna 200 e objeto com raças (incluindo `hound`, `akita`, `retriever`).
  - `/breeds/image/random` retorna 200 e URL de imagem.
  - `/breed/hound/images` retorna 200 e array de URLs.
- Erro controlado:
  - `/breed/xpto123/images` retorna 404 com status `error` e mensagem contendo `Breed not found`.

## Como ler o relatório Mochawesome
- Após `npx cypress run`, abra `cypress/results/*.html` no navegador.
- Cada spec mostra casos, asserts e erros. Os arquivos `.json` correspondentes permitem agregação via `mochawesome-merge`/`marge` se necessário.

## Comportamento da API Dog CEO
- API pública, sem autenticação.
- Respostas podem variar em quantidade de imagens ou URLs, mas estrutura e códigos de status devem permanecer consistentes.

## Observações importantes
- Dependência externa: instabilidade ou rate limits da Dog CEO API podem causar falhas transitórias.
- Execuções em rede restrita podem precisar de acesso outbound liberado para `https://dog.ceo/api`.
