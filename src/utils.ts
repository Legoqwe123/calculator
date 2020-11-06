import { Operation, OperationType, DecilmalTypeObject } from "./types"

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

export const transformToNumber = (
    value: string,
):
    | number
    | Error
    | {
          number: number
      } => {
    if (+value !== NaN) {
        return +value
    }

    throw new Error("This argument is not a number")
}

export const checkIsIntegerNumber = (value: string): boolean =>
    ((transformToNumber(value) as number) ^ 0) === transformToNumber(value)

export const transformToDecimalNumber = (value: string): DecilmalTypeObject => {
    const lengthAfterDot = value.slice(value.indexOf("."), value.length - 1)
        .length

    return {
        number: transformToNumber(value) as number,
        lengthAfterDot,
    }
}

export const getRandomNumber = (min: number, max: number): number =>
    min + Math.floor(Math.random() * (max + 1 - min))
