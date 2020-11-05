/* eslint-disable security/detect-object-injection */
import { TypeButtons, Operation, OperationType } from "./types"

export class Calculator {
    private buttons: TypeButtons = [
        { content: "CE", operation: Operation.DELALL },
        { content: "C", operation: Operation.DEL },
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
        { content: "=", operation: Operation.EQUALLY },
        { content: "0", operation: null },
        { content: ".", operation: null },
    ]

    private operationObjectFunction = {
        [Operation.DELALL]: this.clearAll.bind(this),
        [Operation.DEL]: this.clearAll.bind(this),
        [Operation.MINUS]: this.calculate.bind(this, Operation.MINUS),
        [Operation.PLUS]: this.calculate.bind(this, Operation.PLUS),
        [Operation.EQUALLY]: this.calculate.bind(this, Operation.EQUALLY),
        [Operation.DIVIDE]: this.calculate.bind(this, Operation.DIVIDE),
        [Operation.MULTIPLY]: this.calculate.bind(this, Operation.MULTIPLY),
    }

    private accum = ""
    private temporary = ""
    private operation: OperationType | null = null

    constructor(
        private container: HTMLDivElement | null,
        private input: HTMLDivElement | null,
        private tempoInput: HTMLDivElement | null,
    ) {
        this.container?.addEventListener("click", this.handleChange.bind(this))
    }

    init(): void {
        if (this.container && this.input) {
            this.container.innerHTML = this.buttons
                .map(
                    (item, idx) =>
                        `<div class = '${
                            !item.operation
                                ? "button button-num"
                                : "button button-operation"
                        }' data-id = '${idx}' ${
                            item.operation
                                ? `data-operation = "${item.operation}"`
                                : null
                        }>${item.content}</div>`,
                )
                .join("")
        }
    }

    handleChange(event: Event): void {
        const target = event.target as HTMLDivElement

        if (target.className !== "container") {
            if (!target.dataset.operation) {
                if (target.textContent === "." && !this.accum) {
                    this.accum += 0 + target.textContent
                } else {
                    this.accum += target.textContent as string
                }

                if (this.input) {
                    this.input.textContent = this.accum
                }
            } else {
                this.operationObjectFunction[
                    target.dataset.operation as Operation.DELALL | Operation.DEL
                ]()
            }
        }
    }

    clearAll(): void {
        this.accum = ""
        this.operation = null
        this.temporary = ""

        if (this.input && this.tempoInput) {
            this.input.textContent = this.accum
            this.tempoInput.textContent = this.temporary
        }
    }

    clear(): void {
        this.accum = ""

        if (this.input) {
            this.input.textContent = this.accum
        }
    }

    calculate(operation: OperationType): void {
        if (operation !== Operation.EQUALLY && !this.operation) {
            this.temporary = this.accum
            this.operation = operation

            if (this.tempoInput) {
                this.tempoInput.textContent = this.temporary
            }

            this.clear()
        } else {
            if (this.operation && this.temporary) {
            }
        }
    }
}
