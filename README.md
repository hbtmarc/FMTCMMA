# FMTCMMA
Plano digital para a Federacao de Muay Thai Chaiya e Artes Marciais Mistas do Estado de Minas Gerais

[https://hbtmarc.github.io/fmtcmma](https://hbtmarc.github.io/FMTCMMA/)

## Mapa de rotas — Artes Marciais

- `#/artes/muay-thai`
- `#/artes/boxe-chines`
- `#/artes/boxe`
- `#/artes/capoeira`
- `#/artes/defesa-pessoal`
- `#/artes/judo`
- `#/artes/jiu-jitsu`
- `#/artes/kick-boxing`
- `#/artes/kung-fu`
- `#/artes/mma`
- `#/artes/taekwondo`

## Mapeamento de fontes por modalidade

- Base institucional e conteúdos textuais das modalidades:
	- `extracted/SITE DA FMTC-MMA 0002.txt`
- Relações reais de professores, atletas e equipes:
	- `script.js` (`ATHLETES`)
	- `extracted/REGISTRO GERAL DE ALUNOS.txt`
	- `extracted/NOVOS ASSOCIADOS FMTC-MMA.txt`
- Locais de treino:
	- `script.js` (`GYMS`)
- Contexto federativo e departamentos:
	- `script.js` (`DEPARTMENTS`, `MARTIAL_ARTS`)
	- `extracted/SITE DA FMTC-MMA 0002.txt`

### Observação sobre Taekwondo

O detalhamento ampliado (origem e contexto, princípios, faixas/gubs/dans, sistema de pontos, condições de vitória, categorias olímpicas, juramentos, números e comandos) foi estruturado com base no bloco de Taekwondo presente em `extracted/SITE DA FMTC-MMA 0002.txt`.

## Changelog

- Implementado sistema de detalhe reutilizável por hash route em `#/artes/:slug`.
- Limitado o grid de cards às 11 modalidades solicitadas.
- Adicionadas seções padrão por modalidade: hero, visão geral, vínculo, professores/mestres, atletas/equipes, onde treinar, departamento relacionado e CTAs.
- Enriquecido o conteúdo de Taekwondo com blocos temáticos completos extraídos dos arquivos base.
- Adicionado fallback elegante `Conteúdo em atualização.` para lacunas de conteúdo.
- Melhorado affordance dos cards de modalidade (hover, foco visível, área de toque mínima e ajustes mobile).

## Diretórios federativos

### Rotas de listagem

- `#/professores`
- `#/arbitros`
- `#/atletas`
- `#/onde-treinar`

### Rotas de perfil

- `#/professores/:slug`
- `#/arbitros/:slug`
- `#/atletas/:slug`

### Estrutura normalizada usada

As listas e perfis usam objetos normalizados no `script.js` com o formato:

```js
{
	tipo,            // atleta | professor | arbitro
	slug,
	nome,
	funcao,
	modalidade,      // array de modalidades
	equipe,
	academia,
	registro,
	cidade,
	contato,
	bio,
	resumo
}
```

### Fontes de dados aplicadas

- `script.js`: `ATHLETES`, `REFEREES`, `GYMS`, `DIRECTORS`
- `extracted/SITE DA FMTC-MMA 0002.txt`
- `extracted/REGISTRO GERAL DE ALUNOS.txt`
- `extracted/NOVOS ASSOCIADOS FMTC-MMA.txt`

### Changelog — diretórios

- Criadas buscas e filtros em `#/professores`, `#/arbitros`, `#/atletas` e `#/onde-treinar`.
- Adicionados filtros por modalidade, equipe, cidade e função conforme suporte do dado.
- Incluídos campo de busca com `label`, botão `Limpar` e estado vazio.
- Implementadas rotas de perfil por slug para professores, árbitros e atletas.
- Ligadas relações entre pessoas e locais de treino quando disponíveis na base.
- Adicionado fallback visual `Perfil em atualização` em perfis com dados incompletos.

### Checklist de QA mobile

- [ ] Campo de busca e botão `Limpar` com toque confortável (mínimo ~44px).
- [ ] Filtros empilham em coluna sem overflow horizontal.
- [ ] Cards de listagem e links de perfil são clicáveis sem zoom acidental.
- [ ] Estado vazio é legível em telas pequenas.
- [ ] Paginação de atletas funciona com scroll suave no mobile.
- [ ] Perfis exibem layout em uma coluna em telas estreitas.

## Seção institucional operacional

### Mapa de rotas

- `#/filiacao`
- `#/documentos`
- `#/departamentos`
- `#/contato`

### Mapeamento de fontes

- Filiação (benefícios, procedimento, campos, declaração e anexos):
	- `extracted/SITE DA FMTC-MMA 0002.txt` (bloco “FILIE-SE”)
- Hub de documentos (disponíveis e citados em atualização):
	- `script.js` (`DOCUMENT_HUB` + arquivos em `arq/`)
	- `extracted/SITE DA FMTC-MMA 0002.txt` (referências documentais)
- Departamentos e responsáveis:
	- `script.js` (`DEPARTMENTS`)
	- `extracted/SITE DA FMTC-MMA 0002.txt` (Jurídico, Odontológico, Contábil, Marketing e Nutrição)
- Contato institucional:
	- `script.js` (emails/telefones institucionais)
	- `extracted/SITE DA FMTC-MMA 0002.txt` (procedimento de envio por e-mail e referências de contato)

### Changelog

- Reestruturada rota `#/filiacao` com CTA institucional, trilha de atleta e trilha de equipe/clube/academia.
- Inseridos campos obrigatórios, documentos exigidos, texto de declaração oficial e contexto de registro/atualização cadastral.
- Reconstruída rota `#/documentos` como hub com categorias e status (`Disponível` / `Disponível em atualização`).
- Atualizada rota `#/departamentos` com responsáveis nomeados quando há base documental e fallback `Em atualização`.
- Atualizada rota `#/contato` com apresentação institucional, cidade/estado, e-mail e referências relevantes.
- Mantidos padrões de acessibilidade visual: hierarquia clara, foco visível e alvos de toque confortáveis.

### Checklist de QA mobile (institucional)

- [ ] CTA de filiação e cartões de trilha legíveis em largura reduzida.
- [ ] Bloco de declaração oficial não gera overflow horizontal.
- [ ] Cartões do hub de documentos mantêm status visível em telas pequenas.
- [ ] Botões e links de download têm alvo de toque confortável.
- [ ] Cards de departamentos preservam legibilidade e espaçamento no mobile.
- [ ] Formulário/contatos da rota `#/contato` ficam em coluna única sem quebra visual.
