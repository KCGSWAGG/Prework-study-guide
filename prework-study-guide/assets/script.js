var topics = [ 'HTML', 'CSS', 'Git', 'JavaScript'];

for (var x = 0; x < topics.length; x++){
    console.log(topics[x]);
}

/*
if (topic === 'HTML') {
    console.log("Lets study HTML!");
} else if (topic === 'CSS'){
    console.log("Let's study CSS!");
}else if (topic === 'Git'){
    console.log("Let's Study Git");
}else if (topic === 'Javascript'){
    console.log("Let's study Javascript");
}else{
    console.log('Please try again!');
}
*/


var topics = ['HTML', 'CSS', 'Git', 'Javascript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);

    }
}

function selectTopic() {
    if (randomTopic === 'HTML'){
        console.log("Lets study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Lets study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Lets study Git");
    } else if (randomTopic === 'Javascript') {
        console.log("Lets study Javascript");
    } else {
        console.log('Please try again');
    } 
}

console.log('Here are the topics we learned throught prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();
