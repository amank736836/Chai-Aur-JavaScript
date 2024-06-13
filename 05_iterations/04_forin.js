const myObject ={
    js : "JavaScript",
    py : "Python",
    rb : "Ruby",
    cs : "C#",
    kt : "Kotlin",
    sw : "Swift",
    go : "Go",
    ts : "TypeScript",
    sc : "Scala",
    jp : "Java",
    rs : "Rust",
    ph : "PHP",
    ht : "HTML",
    cs : "CSS",
    jq : "jQuery",
    an : "Angular",
    rn : "React Native",
    vr : "Vue",
    an : "Angular"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb" , "py", "cs", "kt", "sw", "go", "ts", "sc", "jp", "rs", "ph", "ht", "cs", "jq", "an", "rn", "vr", "an"];

for (const index in programming) {
    // console.log(`Index: ${index} - Value: ${programming[index]}`);
}

const map = new Map();
map.set("IND", "India");
map.set("USA", "United States of America");
map.set("UK", "United Kingdom");
map.set("AUS", "Australia");

for (const key in map.keys()) {
    // console.log(`Key: ${key} - Value: ${map[key]}`);
}
