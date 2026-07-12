# English ↔ Português

Aplicativo gratuito de aprendizagem nos dois sentidos entre inglês americano e português brasileiro.

Versão 0.91.

[Abrir o aplicativo](https://denis-ostapenko.github.io/english-portuguese-learning-app/).

Criado por [Denis Ostapenko](https://denisostapenko.com).

## Como funciona

No primeiro acesso, o aluno escolhe o idioma que já conhece:

- Quem sabe inglês aprende português brasileiro.
- Quem sabe português aprende inglês americano.

A interface, as explicações e as traduções usam o idioma conhecido pelo aluno. Os únicos idiomas do curso são inglês e português brasileiro.

O curso oferece:

- 1.307 itens de português brasileiro;
- 1.467 itens de inglês americano, incluindo uma trilha profissional opcional;
- transcrição IPA;
- 5.954 áudios locais de alta qualidade;
- repetição espaçada em 1, 3, 7, 14 e 30 dias;
- revisão por reconhecimento, produção e compreensão auditiva;
- 1.100 conceitos visuais de vocabulário nas duas direções de aprendizagem;
- fundamentos para sons, sílabas, leitura, fala natural, construção de frases e linhas do tempo verbais;
- situações de diálogo do dia a dia;
- gramática compacta voltada para a fala;
- exportação e importação do progresso local;
- aviso visível quando uma gravação aprovada não existe ou não pode ser reproduzida;
- conexão opcional a um serviço de IA compatível com OpenAI, fornecido pelo usuário.

A estrutura e o texto do curso funcionam sem conta, chave de API ou internet depois do primeiro carregamento completo. Áudios e imagens são armazenados depois do uso. Mídias ainda não armazenadas ficam indisponíveis offline até a reconexão. O conteúdo predefinido nunca muda silenciosamente para a voz do navegador ou do sistema operacional.

## Execução local

Inicie um servidor web nesta pasta:

```bash
python3 -m http.server 4177 --bind 127.0.0.1
```

Depois abra `http://127.0.0.1:4177`.

## Privacidade e IA opcional

O repositório não inclui nenhuma chave privada. Curso, áudio, repetição, gramática e situações funcionam sem IA.

Um usuário avançado pode informar um endpoint de chat completions compatível com OpenAI, o nome do modelo e sua própria chave. A chave fica em `sessionStorage` e desaparece quando a sessão do navegador termina.

O aplicativo monta o prompt do tutor automaticamente. O aluno pode escolher conversa, dramatização, revisão de vocabulário, explicação ou prática de correção e usar registro neutro, casual ou educado.

## Documentação

- [User guide](USER_GUIDE.md)
- [Guia do usuário](USER_GUIDE.pt-BR.md)
- [Learning recommendations](RECOMMENDATIONS.md)
- [Recomendações de estudo](RECOMMENDATIONS.pt-BR.md)
- [Introdução](content/INTRODUCTION.md)
- [Política de segurança](SECURITY.md)
- [Proveniência dos recursos](ASSET_PROVENANCE.md)

## Licença

Código, dados do curso, áudio incluído e imagens criadas para o projeto usam a Licença MIT, salvo indicação explícita em algum arquivo. É permitido usar, copiar, publicar e modificar o projeto com a preservação do aviso de copyright e licença.

Copyright 2026 [Denis Ostapenko](https://denisostapenko.com).
