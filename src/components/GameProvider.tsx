import { createContext, type PropsWithChildren } from 'react'

// '' = empty cell
type Cell = 'x' | 'o' | ''

type GameContext = {
    board: Cell[]
}

const GameContext: GameContext = createContext({})

type GameProviderProps = {
    boardSize: number
}

export default function GameProvider({ boardSize = 3 }: PropsWithChildren<GameProviderProps>) {
    const numCells = boardSize * boardSize // assumes square board
    const initialBoard = new Array(numCells)

    return <GameContext.Provider value={{ board: initialBoard }}>{children}</GameContext.Provider>
}