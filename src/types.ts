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
    "SQRT" = "SQRT",
    "POW" = "POW",
}

export type onlyArithmeticOperationType =
    | Operation.MINUS
    | Operation.MULTIPLY
    | Operation.PLUS
    | Operation.DIVIDE
    | Operation.SQRT
    | Operation.POW

export type OperationType =
    | onlyArithmeticOperationType
    | Operation.DEL
    | Operation.DELALL
    | Operation.EQUALLY
