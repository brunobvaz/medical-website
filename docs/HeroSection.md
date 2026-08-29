# HeroSection

## Visão geral

A `HeroSection` é a secção principal da página inicial. Apresenta um carousel de destaques com imagem, título, descrição e ações, seguido de uma faixa com indicadores da clínica.

A implementação está dividida em quatro partes:

| Ficheiro | Responsabilidade |
| --- | --- |
| `src/Sections/Hero/HeroSection.jsx` | Compõe a hero, obtém o conteúdo, faz preload das imagens e aplica o efeito parallax. |
| `src/Sections/Hero/HeroBackground.jsx` | Renderiza a imagem responsiva de um slide. |
| `src/Sections/Hero/HeroStats.jsx` | Renderiza a faixa semântica de estatísticas. |
| `src/Sections/Hero/useHeroCarousel.js` | Gere o estado, a navegação, o teclado, o swipe e a transição do carousel. |
| `src/Sections/Hero/index.js` | Expõe a `HeroSection` como ponto de entrada público da feature. |

Todos os ficheiros da feature estão agrupados em `src/Sections/Hero`. Os estilos estão separados entre `HeroSection.css`, para o carousel, e `HeroStats.css`, para a faixa de estatísticas.

## Utilização

Na utilização normal, a hero não precisa de propriedades:

```jsx
<HeroSection />
```

Neste caso, o idioma vem de `useI18n()` e o conteúdo vem de `getHeroContent(language)`.

Também é possível substituir o idioma, os slides ou receber notificações de navegação:

```jsx
<HeroSection
  language="pt"
  slides={customSlides}
  onPrevious={(index) => console.log('Slide anterior:', index)}
  onNext={(index) => console.log('Slide seguinte:', index)}
/>
```

### Propriedades

| Propriedade | Tipo | Obrigatória | Descrição |
| --- | --- | --- | --- |
| `language` | `string` | Não | Substitui o idioma ativo do contexto de internacionalização. |
| `slides` | `array` | Não | Substitui os slides definidos nos dados da homepage. Um array vazio usa os slides predefinidos. |
| `onPrevious` | `function` | Não | É chamada após navegar para o slide anterior e recebe o novo índice. |
| `onNext` | `function` | Não | É chamada após navegar para o slide seguinte e recebe o novo índice. |

## Formato dos dados

Cada slide deve seguir esta estrutura:

```js
{
  eyebrow: 'Cirurgia Oculoplástica',
  title: 'Cuidado especializado para a saúde do seu olhar',
  titleLines: ['Cuidado especializado', 'para a saúde do seu olhar'],
  description: 'Descrição do destaque.',
  buttonLabel: 'Conhecer a especialidade',
  buttonTo: '/cirurgia-oculoplastica',
  buttonHref: undefined,
  image: desktopImage,
  mobileImage: mobileImage,
}
```

- `titleLines` é opcional. Permite controlar as quebras do título em ecrãs maiores.
- `buttonTo` é usado para navegação interna através do router.
- `buttonHref` permite um destino externo, caso seja necessário.
- `mobileImage` é opcional. Sem ela, o browser usa `image` em todos os tamanhos.

As estatísticas vêm de `content.stats`:

```js
{
  value: '15+',
  label: 'Anos de experiência',
  shortLabel: undefined,
  accessibleValue: undefined,
}
```

- `shortLabel` fornece uma legenda mais curta para ecrãs muito pequenos.
- `accessibleValue` fornece uma descrição adequada a leitores de ecrã. É usada, por exemplo, para converter `★★★★★` em “5 estrelas”.

## Estrutura HTML

O código é escrito em JSX, mas produz aproximadamente a seguinte árvore HTML:

```html
<div class="medical-hero-block">
  <section class="site-section medical-hero ..." tabindex="0">
    <picture>
      <source media="(max-width: 767px)" srcset="..." />
      <img src="..." alt="" aria-hidden="true" />
    </picture>

    <div class="medical-hero__overlay" aria-hidden="true"></div>

    <p class="type-sr-only">Instruções de utilização</p>
    <p class="type-sr-only" role="status" aria-live="polite">
      Slide atual
    </p>

    <button aria-label="Slide anterior">...</button>

    <div class="medical-hero__content">
      <p class="type-eyebrow">...</p>
      <h1>...</h1>
      <span class="medical-hero__rule"></span>
      <p class="medical-hero__description">...</p>
      <div class="medical-hero__actions">...</div>
      <div class="medical-hero__progress">...</div>
    </div>

    <button aria-label="Slide seguinte">...</button>
  </section>

  <aside class="medical-hero-stats">
    <ul>
      <li>...</li>
    </ul>
  </aside>
</div>
```

### Contentor exterior

```jsx
<div className="medical-hero-block">
```

Agrupa o carousel e as estatísticas. Este elemento permite que a faixa de métricas seja posicionada visualmente sobre a extremidade inferior da hero em desktop.

### Elemento `Section`

O componente `Section` renderiza um elemento HTML `<section>` e acrescenta automaticamente a classe `site-section`.

```jsx
<Section
  className={`medical-hero medical-hero--slide-${currentIndex} ...`}
  ref={heroRef}
  aria-roledescription="carrossel"
  aria-label={content.ariaLabel}
  tabIndex={hasMultipleSlides ? 0 : undefined}
  {...interactionProps}
>
```

As classes dinâmicas têm funções diferentes:

- `medical-hero--slide-${currentIndex}` permite ajustar visualmente slides específicos, sobretudo o overlay.
- `medical-hero--compact-mobile` reduz a altura em mobile quando o botão principal do slide já aponta para a marcação.
- `tabIndex="0"` torna a secção focável quando existem vários slides, permitindo navegação com as setas do teclado.
- `interactionProps` adiciona os eventos de teclado, pointer e swipe produzidos pelo hook.

### Imagens de fundo

`HeroBackground` usa `<picture>` para o browser escolher a imagem correta:

```jsx
<picture>
  <source media="(max-width: 767px)" srcSet={slide.mobileImage} />
  <img src={slide.image} alt="" aria-hidden="true" />
</picture>
```

A imagem é decorativa, por isso utiliza `alt=""` e `aria-hidden="true"`. A informação relevante já está presente no título e na descrição.

Durante uma mudança de slide podem existir duas imagens simultaneamente:

1. `previousSlide` mantém a imagem anterior visível durante a transição.
2. `currentSlide` recebe `medical-hero__background--enter` e entra com a animação CSS.
3. Após 700 ms, o hook limpa `previousSlide` e a imagem anterior deixa de ser renderizada.

No primeiro slide, `priority` ativa `fetchPriority="high"` e `loading="eager"`, dando prioridade à imagem acima da dobra.

### Overlay

```jsx
<div className="medical-hero__overlay" aria-hidden="true" />
```

Aplica gradientes sobre a imagem para manter o texto legível. É decorativo e não aparece na árvore de acessibilidade.

### Conteúdo invisível para leitores de ecrã

A primeira mensagem explica como controlar o carousel. A segunda usa uma live region:

```jsx
<p role="status" aria-live="polite" aria-atomic="true">
  Slide 2 de 3: Título do slide
</p>
```

Quando o índice muda, leitores de ecrã recebem uma atualização não intrusiva com a posição e o título do novo slide.

### Conteúdo do slide

O título possui um `aria-label` completo, enquanto as linhas visuais estão escondidas da árvore de acessibilidade:

```jsx
<h1 aria-label={currentSlide.title}>
  {titleLines.map((line) => (
    <span aria-hidden="true">{line}</span>
  ))}
</h1>
```

Isto permite controlar visualmente as quebras de linha sem fazer o leitor de ecrã pronunciar cada linha como conteúdo separado.

A propriedade `key={`${language}-${currentIndex}`}` no contentor recria o bloco quando muda o idioma ou o slide. Essa recriação reinicia a animação de entrada dos seus elementos.

### Ações

A hero pode apresentar dois botões em mobile:

- Um botão fixo para marcar consulta.
- O botão específico do slide atual.

Quando o botão do slide já aponta para `/booking`, a classe `medical-hero__cta--duplicate` esconde a ação duplicada nos ecrãs mais pequenos.

### Indicadores de progresso

Os indicadores só são renderizados quando existe mais de um slide. Cada botão:

- chama `showSlide(index)`;
- recebe uma descrição localizada através de `showSlideLabel`;
- usa `aria-current="true"` quando representa o slide atual.

Os números antes e depois dos indicadores são decorativos para tecnologias de assistência, pois a live region já comunica a posição completa.

### Estatísticas

`HeroStats` usa `<aside>` porque contém informação complementar à mensagem principal da hero. Dentro do aside, uma lista `<ul>` representa corretamente um conjunto de métricas relacionadas.

As cores alternam através do índice:

```js
index % 2 === 0 ? 'gold' : 'grey'
```

O componente é específico da hero. Não tenta ser um `Aside` genérico, pois conhece a estrutura, as classes e o comportamento responsivo destas métricas.

## Hook `useHeroCarousel`

O hook recebe a lista final de slides e callbacks opcionais:

```js
useHeroCarousel(safeSlides, { onPrevious, onNext })
```

### Estado e referências

```js
const [activeIndex, setActiveIndex] = useState(0)
const [previousIndex, setPreviousIndex] = useState(null)
const swipeStartRef = useRef(null)
```

- `activeIndex` identifica o slide pedido pelo utilizador.
- `previousIndex` conserva temporariamente o índice anterior para a animação entre imagens.
- `swipeStartRef` guarda as coordenadas iniciais do gesto sem provocar uma nova renderização.

O índice atual é normalizado com o operador módulo:

```js
const currentIndex = activeIndex % slides.length
```

Isto mantém o índice dentro dos limites da coleção.

### `changeSlide(nextIndex)`

É a função central de alteração:

1. Ignora pedidos para o slide que já está ativo.
2. Guarda o índice atual em `previousIndex`.
3. Atualiza `activeIndex`.

Guardar primeiro o índice anterior permite renderizar as duas imagens durante a animação.

### `showPrevious()`

Calcula o índice anterior. Se o utilizador estiver no primeiro slide, regressa ao último, criando navegação circular. Depois chama opcionalmente `onPrevious` com o novo índice.

### `showNext()`

Calcula o índice seguinte através de módulo. Depois do último slide, regressa ao primeiro. Chama opcionalmente `onNext` com o novo índice.

### `showSlide(index)`

É uma referência pública para `changeSlide`. Permite aos indicadores selecionar diretamente qualquer slide.

### `handleKeyDown(event)`

Responde a `ArrowLeft` e `ArrowRight` apenas quando:

- existem vários slides;
- o evento pertence à própria secção e não a um botão ou link descendente.

`preventDefault()` evita que as setas provoquem comportamentos de navegação ou scroll concorrentes.

### `handlePointerDown(event)`

Regista a posição inicial de um pointer primário. Interações iniciadas sobre links ou botões são ignoradas, evitando que um clique numa ação seja interpretado como swipe.

### `handlePointerUp(event)`

Compara a posição final com a inicial:

```js
const deltaX = event.clientX - start.x
const deltaY = event.clientY - start.y
```

O gesto só muda de slide quando:

- percorre pelo menos 48 px na horizontal;
- a distância horizontal é superior a `1.25 ×` a distância vertical.

Assim, o scroll vertical normal em dispositivos móveis não é confundido com navegação lateral.

### Limpeza da transição

Quando existe um slide anterior, um efeito agenda a sua remoção após 700 ms:

```js
const timeoutId = window.setTimeout(() => setPreviousIndex(null), 700)
```

O cleanup cancela o timeout anterior se houver uma nova renderização ou se o componente for desmontado.

### Valor devolvido

O hook devolve os dados necessários à apresentação e as funções de interação:

```js
{
  currentIndex,
  currentSlide,
  previousSlide,
  hasMultipleSlides,
  showPrevious,
  showNext,
  showSlide,
  interactionProps,
}
```

`interactionProps` pode ser espalhado diretamente no elemento da hero, mantendo os detalhes dos eventos fora do JSX principal.

## Efeitos da `HeroSection`

### Preload das imagens

O primeiro `useEffect` carrega antecipadamente as imagens dos restantes slides. Em mobile escolhe `mobileImage`; em desktop usa `image`.

O trabalho é agendado com `requestIdleCallback`, quando disponível, para não competir com a renderização inicial. Como fallback, usa um timeout de 700 ms. O cleanup cancela o agendamento quando necessário.

### Parallax

O segundo `useEffect` aplica um pequeno deslocamento vertical à imagem durante o scroll.

O efeito é desativado:

- em ecrãs até 767 px;
- quando o utilizador ativou `prefers-reduced-motion: reduce`.

`requestAnimationFrame` limita as atualizações ao ritmo de pintura do browser. O valor calculado é escrito na variável CSS `--hero-parallax-y`, consumida por `HeroSection.css` no `object-position` da imagem.

Ao desmontar, o efeito remove os listeners de `scroll` e `resize` e cancela qualquer frame pendente.

## Fluxo de uma mudança de slide

1. O utilizador clica numa seta ou indicador, usa o teclado ou faz swipe.
2. O hook calcula o próximo índice.
3. O índice atual é guardado como `previousIndex`.
4. `activeIndex` é atualizado.
5. A hero renderiza a imagem anterior e a nova imagem em simultâneo.
6. A nova imagem recebe a animação de entrada.
7. O conteúdo textual é recriado e volta a executar a sua animação escalonada.
8. A live region anuncia o novo slide.
9. Após 700 ms, a imagem anterior é removida.

## Responsividade e movimento reduzido

Os breakpoints principais são:

- `1024px`: ajusta a altura da hero para desktop.
- `767px`: muda o layout, posiciona controlos no fundo, ativa `touch-action: pan-y` e reorganiza as estatísticas em duas colunas.
- `479px`: empilha os botões.
- `359px`: reduz tipografia, espaçamento e algumas legendas das métricas.

Com `prefers-reduced-motion: reduce`, as animações da imagem e do conteúdo são removidas. O parallax também não é inicializado pelo JavaScript.

## Ficheiros de conteúdo

Os textos localizados são definidos em `src/data/hero.js`. `src/data/homepage.js` combina esses textos com as imagens importadas por `src/data/media.js`.

Para alterar apenas texto ou destinos dos botões, editar `hero.js`. Para trocar imagens, editar `media.js`. A estrutura e o comportamento visual devem permanecer na pasta `src/Sections/Hero`.
