import { Operation, OperationType } from "./types"

export const translateOperation = (
    operation: OperationType,
): string | undefined => {
    switch (operation) {
        case Operation.MINUS:
            return "-"
        case Operation.PLUS:
            return "+"
        case Operation.MULTIPLY:
            return "*"
        case Operation.DIVIDE:
            return "/"
        case Operation.POW:
            return "^"
        case Operation.SQRT:
            return "&#8730"
    }
}

export const transformToNumber = (value: string): number | Error => {
    if (+value !== NaN) {
        return +value
    }

    throw new Error("This is argument is not a number")
}
