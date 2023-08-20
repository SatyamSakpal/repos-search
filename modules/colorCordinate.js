const colorObj = {
    "C":'rgb(85, 85, 85)',
    "C#":'rgb(23, 134, 0)',
    "C++":'rgb(243, 75, 125)',
    "CoffeeScript":'rgb(36, 71, 118)',
    "CSS":'rgb(36, 71, 118)',
    "Dart":'rgb(0, 180, 171)',
    "DM":'rgb(68, 114, 101)',
    "Elixir":'rgb(110, 74, 126)',
    "Go":'rgb(0, 173, 216)',
    "Groovy":'rgb(66, 152, 184)',
    "HTML":'rgb(227, 76, 38)',
    "Java":'rgb(176, 114, 25)',
    "JavaScript":'rgb(241, 224, 90)',
    "Kotlin":'rgb(169, 123, 255)',
    "Objective-C":'rgb(67, 142, 255)',
    "Perl":'rgb(2, 152, 195)',
    "PHP":'rgb(79, 93, 149)',
    "PowerShell":'rgb(1, 36, 86)',
    "Python":'rgb(53, 114, 165)',
    "Ruby":'rgb(112, 21, 22)',
    "Rust":'rgb(222, 165, 132)',
    "Scala":'rgb(194, 45, 64)',
    "Shell":'rgb(137, 224, 81)',
    "Swift":'rgb(240, 81, 56)',
    "TypeScript":'rgb(49, 120, 198)',
}



const colorCordinate = (language) => {
    if(`${language}` in colorObj) {
        return colorObj[`${language}`]
    } else {
        return 'rgb(42, 204, 168)'
    }
}

module.exports = colorCordinate
