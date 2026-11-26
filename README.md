# Fatto a Mano · Uniformes Corporativos Femininos 2026

Catálogo digital folheável da Fatto a Mano para os uniformes corporativos femininos. Mesmo motor do catálogo masculino (`Luanaereio/FattoamanoCatalogo`): no computador a página vira em 3D; no celular a folha vira como papel acompanhando o dedo e a página rola por dentro.

Site estático, sem build. Publicado pela Vercel.

## Páginas

1. Capa: foto do conjunto off-white, "Uniformes corporativos / Coleção feminina 2026" e índice que leva a cada peça
2. Camisa social feminina
3. Colete e calça de alfaiataria
4. Calça de alfaiataria
5. Polo feminina
6. Conjunto de alfaiataria
7. Costume feminino
8. Personalização (bordado, silk, sublimação, DTF)
9. Contato (WhatsApp e e-mail)

Toda peça mostra "Valores sob consulta" e um botão "Pedir orçamento" que abre o WhatsApp com o nome da peça e a cor escolhida.

## Onde mexer

- **Textos, cores, contato:** `js/produtos.js` (`LOJA`, `PRODUTOS`, `CONSULTA`, `CAPA`, `PERSONALIZACAO`, `FINAL`).
- **Visual:** `css/estilo.css` (o fim do arquivo traz o que é próprio dos uniformes).
- **Fotos:** `fotos/grande/<id>-modelo|detalhe-1|detalhe-2.webp`, versões menores em `fotos/media/`, foto ampliada em `fotos/zoom/`, miniaturas da barra em `fotos/mini/u-pNN.webp`. As fotos saíram do PDF de atacado. Ao trocar uma foto, troque também o nome do arquivo (o `vercel.json` guarda `/fotos/` por uma semana no navegador).
