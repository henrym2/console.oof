const colors = [
    "red", "blue", "green", "purple", "pink", "orange", "powderBlue", "grey", "black", "white", ""
]

const borders = [
    "none", "hidden", "outset", "dashed", "dotted", "groove"
]

const phrases = [
    "%c Roses are red\n%c Violets are blue\n%c This code is broken\n%c Fuck you",
    "%c Welp, that didn't work did it?",
    "%c Maybe next time buddy",
    "%c Javascript really has you in a headlock doesn't it?",
    "%c I hear git reset --hard is handy",
    "%c rm -rf / \n %c Erase all records of this",
    "%c Are you sure you're not an engineer?",
    "%c Ah yes, a stack overflow copy and paste job",
    "%c Wrote this last week and don't remember what it does anymore?\n%c Too bad",
    `%c/*
    ${String.fromCodePoint(0x1F525)} WARNING!!
    You broke it.
    */
    `
]

const seed = () => Math.floor(Math.random() * 100)

function genStyle(phrase) {
    const styleCount = phrase.split("\%c").length-1
    let styles = []
    for (let i = 0; i < styleCount; i++) {
        styles.push(
            [
                `color: ${colors[seed() % colors.length]}`,
                'mix-blend-mode: difference',
                `padding: ${seed()/70}rem`,
                `font-size: ${(seed()/30) + 1.2}rem`,
                //`border: ${borders[seed() % borders.length]}`
            ].join(';')
        )
    }
    return styles
}

function oof() {
    const phrase = phrases[seed() % phrases.length]
    const style = genStyle(phrase)

    return console.log(phrase, ...style)
}

module.exports = oof