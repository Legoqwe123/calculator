export type TypeButton = { operation: string | null; content: string }

export type TypeButtons = TypeButton[]

export enum Operation {
    "DEL" = "del",
    "DELALL" = "delAll",
    "DIVIDE" = "divide",
    "MULTIPLY" = "multiply",
    "MINUS" = "minus",
    "PLUS" = "plus",
    "EQUALLY" = "equally",
}

export type OperationType =
    | Operation.MINUS
    | Operation.MULTIPLY
    | Operation.PLUS
    | Operation.DIVIDE
    | Operation.DEL
    | Operation.DELALL
    | Operation.EQUALLY
