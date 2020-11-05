import { TypeButtons, Operation } from "./types"

export const buttons: TypeButtons = [
    { content: "CE", operation: Operation.DEL },
    { content: "C", operation: Operation.DELALL },
    { content: "/", operation: Operation.DIVIDE },
    { content: "*", operation: Operation.MULTIPLY },
    { content: "1", operation: null },
    { content: "2", operation: null },
    { content: "3", operation: null },
    { content: "-", operation: Operation.MINUS },
    { content: "4", operation: null },
    { content: "5", operation: null },
    { content: "6", operation: null },
    { content: "+", operation: Operation.PLUS },
    { content: "7", operation: null },
    { content: "8", operation: null },
    { content: "9", operation: null },
    { content: "^", operation: Operation.POW },
    { content: "0", operation: null },
    { content: ".", operation: null },
    { content: "=", operation: Operation.EQUALLY },
    { content: "&#8730", operation: Operation.SQRT },
]
