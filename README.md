# Uber Serra do Cipó — site

Site estático responsivo em HTML, CSS e JavaScript, preparado para GitHub Pages ou Cloudflare Pages.

## Estrutura
- `index.html` — conteúdo e estrutura
- `styles.css` — identidade visual, responsividade e animações
- `script.js` — menu mobile, filtros de cachoeiras, galeria e links personalizados de WhatsApp
- `assets/` — logo, carro e fotografias extraídas do PDF de referência

## Publicar
1. Envie todos os arquivos e a pasta `assets` para a raiz do repositório GitHub.
2. No Cloudflare Pages, conecte o repositório.
3. Configure `Framework preset: None`, `Build command` vazio e `Build output directory: /`.
4. Faça o deploy.

Não há dependências de build. As fontes usam Google Fonts; o restante é local.

## WhatsApp
Todos os botões usam o número encontrado nos links do PDF: `+55 31 98302-7511`.
Os botões das cachoeiras geram uma mensagem específica para cada atração.

## Observação sobre as imagens
As fotos das cachoeiras foram extraídas do PDF fornecido. O próprio material informa que são referências fotográficas externas e não necessariamente registros da equipe.
