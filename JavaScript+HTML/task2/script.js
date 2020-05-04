for (let i = 0; i < 60; i++){
    let str = "";
    for (let j = 0; j < 80; j ++) {
        str += "O";
    }
    if (i < 20) {
        console.log("%c%s", "color: lightgray; font-weight: bolder;", str);
    } else if (i >= 20 && i < 40) {
        console.log("%c%s", "color: blue; font-weight: bolder", str);
    } else {
        console.log("%c%s", "color: red; font-weight: bolder", str);
    }    
}