import { Calculator } from "./calculator"

document.addEventListener("DOMContentLoaded", (): void => {
    const container: HTMLDivElement | null = document.querySelector(
        ".container",
    )

    const input: HTMLDivElement | null = document.querySelector(".enter-input")

    const temporaryInput: HTMLDivElement | null = document.querySelector(
        ".temporary-input",
    )

    const calculator = new Calculator(container, input, temporaryInput)

    calculator.init()
})