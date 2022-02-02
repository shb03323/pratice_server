// array 형태로 들고옴
const members = require("./members")["members"];


// yb, ob 구분
let ob = [];
let yb = [];

members.forEach(member => {
    if(member.group == "YB") {
        yb.push(member)
    }
    else {
        ob.push(member)
    }
});


// 섞기
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(yb);
shuffle(ob);


// 배치
const group_count = Math.floor(members.length / 4);
let group = new Array(group_count);
for (let i = 0; i < group.length; i++) {
    group[i] = new Array();
}

let index = 0;

for (let single_ob of ob) {
    group[index % group_count].push(single_ob.name);
    index++;
}

for (let single_yb of yb) {
    group[index % group_count].push(single_yb.name);
    index++;
}

console.log(group)