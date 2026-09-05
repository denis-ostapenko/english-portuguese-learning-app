# English ↔ Português

Aplicativo gratuito de aprendizagem nos dois sentidos entre inglês americano e português brasileiro.

Versão 0.91.

[Abrir o aplicativo](https://denis-ostapenko.github.io/english-portuguese-learning-app/).

Criado por [Denis Ostapenko](https://denisostapenko.com).

[Read in American English](README.md)

## Para quem é

O aplicativo foi feito para adultos que já sabem inglês ou português brasileiro e querem desenvolver vocabulário, compreensão auditiva e hábitos de fala no outro idioma. Ele combina sessões curtas de estudo, exemplos gravados, vocabulário visual e revisões programadas.

## Sua primeira sessão

1. Abra o aplicativo e escolha o idioma que você já conhece.
2. Siga a página Hoje: faça as revisões pendentes, estude um pequeno conjunto de itens novos e ouça uma situação.
3. Repita as falas em voz alta e escolha a próxima revisão conforme o que conseguiu lembrar.
4. Volte nos dias seguintes para a repetição espaçada. Em Ajustes, ajuste a meta diária ou mude o idioma de estudo; cada direção mantém seu próprio progresso.

Consulte o [guia do usuário](USER_GUIDE.pt-BR.md) para conhecer os controles e as [recomendações de estudo](RECOMMENDATIONS.pt-BR.md) para organizar sua rotina. Não é preciso usar um serviço de IA para seguir esse percurso.

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
git clone https://github.com/denis-ostapenko/english-portuguese-learning-app.git
cd english-portuguese-learning-app
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
