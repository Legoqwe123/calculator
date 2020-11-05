/* eslint-disable @typescript-eslint/no-non-null-assertion, security/detect-object-injection */
import { onlyArithmeticOperationType, Operation, OperationType } from "./types"
import { translateOperation, transformToNumber } from "./utils"
import { buttons } from "./constant"

export class Calculator {
    private buttons = buttons

    private operationObjectFunction = {
        [Operation.DELALL]: () => (this.clearAll = ""),
        [Operation.DEL]: () => (this.clear = ""),
        [Operation.MINUS]: this.calculate.bind(this, Operation.MINUS),
        [Operation.PLUS]: this.calculate.bind(this, Operation.PLUS),
        [Operation.EQUALLY]: this.calculate.bind(this, Operation.EQUALLY),
        [Operation.DIVIDE]: this.calculate.bind(this, Operation.DIVIDE),
        [Operation.MULTIPLY]: this.calculate.bind(this, Operation.MULTIPLY),
        [Operation.SQRT]: this.calculate.bind(this, Operation.SQRT),
        [Operation.POW]: this.calculate.bind(this, Operation.POW),
    }

    private accum = ""
    private temporary = ""
    private sum: undefined | number | null
    private operation: OperationType | null = null
    private $operation: HTMLDivElement | null = null

    constructor(
        private $container: HTMLDivElement,
        private $input: HTMLDivElement,
        private $tempoInput: HTMLDivElement,
    ) {
        this.$container.addEventListener("click", this.handleChange.bind(this))
    }

    init(): void {
        const $div = document.createElement("div")
        const $input = document.querySelector(".input")

        $div.className = "operation"

        $input?.append($div)

        this.$operation = $div

        this.$container.innerHTML = this.buttons
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

    private handleChange(event: Event): void {
        const target = event.target as HTMLDivElement

        if (target.className !== "container") {
            if (
                !target.dataset.operation ||
                (target.dataset.operation === Operation.MINUS &&
                    !this.accum &&
                    !this.accum.includes(Operation.MINUS))
            ) {
                if (target.textContent === "." && !this.accum) {
                    this.accum += 0 + (target.textContent as string)
                } else {
                    this.accum +=
                        target.textContent === "." && this.accum.includes(".")
                            ? ""
                            : (target.textContent as string)
                }

                this.$input.innerHTML = this.accum
                    .split("")
                    .map((item) => `<span>${item}</span>`)
                    .join("")
            } else {
                if (
                    isFinite(transformToNumber(this.accum) as number) ||
                    (this.accum === "-" &&
                        target.dataset.operation === Operation.DELALL) ||
                    target.dataset.operation === Operation.DEL
                ) {
                    this.operationObjectFunction[
                        target.dataset.operation as OperationType
                    ]()
                }
            }
        }
    }

    private calculate(operation: OperationType): void {
        if (operation !== Operation.EQUALLY && !this.operation) {
            this.temporary = this.accum
            this.operation = operation

            if (this.operation === Operation.SQRT) {
                this.calculateValue = this.operation

                return
            }

            this.$operation!.innerHTML = this.temporary
                ? (translateOperation(this.operation) as string)
                : ""
            this.$tempoInput.textContent = this.temporary

            this.clear = ""
        }
        if (this.operation && this.temporary && this.accum) {
            this.calculateValue = this.operation as onlyArithmeticOperationType
        }
    }

    private set calculateValue(value: onlyArithmeticOperationType) {
        const calculateObjectFunction = {
            [Operation.MINUS]:
                (transformToNumber(this.temporary) as number) -
                (transformToNumber(this.accum) as number),
            [Operation.PLUS]:
                (transformToNumber(this.temporary) as number) +
                (transformToNumber(this.accum) as number),
            [Operation.DIVIDE]:
                (transformToNumber(this.temporary) as number) /
                (transformToNumber(this.accum) as number),
            [Operation.MULTIPLY]:
                (transformToNumber(this.temporary) as number) *
                (transformToNumber(this.accum) as number),
            [Operation.SQRT]: Math.sqrt(
                transformToNumber(this.accum) as number,
            ),
            [Operation.POW]:
                (transformToNumber(this.temporary) as number) **
                (transformToNumber(this.accum) as number),
        }

        const sum = calculateObjectFunction[value]

        this.clearAll = ""

        this.sum = sum

        this.accum = this.sum + ""

        this.$input.textContent = this.accum
    }

    private set clearAll(value: string) {
        this.accum = value
        this.operation = null
        this.temporary = value

        this.$input.textContent = this.accum
        this.$tempoInput.textContent = this.temporary

        this.$operation!.textContent = value
    }

    private set clear(value: string) {
        this.accum = value

        this.$input.textContent = this.accum
    }
}
