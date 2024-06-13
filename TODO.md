# Todos

## Design patterns
- There shouldn't be business logic in App.js — break it down to the essential pieces
- 

## Performance
- If the game was live, introduce websockets or streaming in general
- If player is competing with a computer, could be either a client lib or a server connection (point of discussion)
- Validation loop (eg. array.every()) could probably be optimized
- What if we wanted to play on a board that's 1000x1000 large?
- What if the board was 3D?

## Features/Implementations
- Validating moves
- Do moves need to be saved to a server? Async move outcomes. Error handling.
- Add unit tests (RTL)
- Add smoke tests (Storybook)
- Add e2e tests (Playwright)

## Accessibility
- Each cell should be focusable with key press to make a selection

## UX & UI
- Colors are too primary, could use a theme
- Black should be changed to off-black for aesthetics
- Dark mode?
- Who's turn is it? Make that more obvious (design choice)
- Theming for CSS (colors, etc.)
- Better shapes / icons

## Code style and DX
- Typescript (adopt incrementally using type references, or file by file)
- Introduce linting and formatting (prettier, eslint)
- React scripts is obsolete, React now recommends Next.js
- Component names should be uppercase (cell.js)