import { Calculator } from "./calculator"
import { buttons } from "./constant"
import { getRandomNumber } from "./utils"

document.addEventListener("DOMContentLoaded", (): void => {
    const container: HTMLDivElement | null = document.querySelector(
        ".container",
    )

    const input: HTMLDivElement | null = document.querySelector(".enter-input")

    const temporaryInput: HTMLDivElement | null = document.querySelector(
        ".temporary-input",
    )

    const background = document.querySelector(".background") as HTMLDivElement

    function drawBackground() {
        const width = background.clientWidth
        const height = background.clientHeight

        const rectText = buttons.map((item) => item.content)

        background.style.gridTemplateRows = `200px `.repeat(height / 200)
        background.style.gridTemplateColumns = `205.8px `.repeat(
            Math.round(width / 200),
        )

        background.innerHTML = new Array(
            Math.floor((height / 200) * (width / 200)),
        )
            .fill("")
            .map(
                () =>
                    `<div class = "background-rect">${
                        rectText[getRandomNumber(0, rectText.length - 1)]
                    }</div>`,
            )
            .join("")
    }

    const calculator = new Calculator(
        container as HTMLDivElement,
        input as HTMLDivElement,
        temporaryInput as HTMLDivElement,
    )

    drawBackground()

    calculator.init()

    setInterval(drawBackground, 2000)
})
