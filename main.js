// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS
var insertx = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
var inserty = ["the soup kitchen", "Disneyland", "the White House"];
var insertz = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

function GetRandomStory(Name, Temperature, Weight){
    var Story;
    insertxTemp = randomValueFromArray(insertx);
    insertyTemp = randomValueFromArray(inserty);
    insertzTemp = randomValueFromArray(insertz);

    Story = "It was " + Temperature/*94 fahrenheit*/ + " outside, so " + insertxTemp + 
            " went for a walk. When they got to " + insertyTemp + 
            ", they stared in horror for a few moments, then " + insertzTemp + 
            ". " + Name + " saw the whole thing, but was not surprised — " +  insertxTemp + 
            " weighs " + Weight/*300 pounds*/ + ", and it was a hot day."

    return Story;
}

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {
    let name = "Bob";
    if(customName.value !== '') {
        name = customName.value;
    }

    let weight = "300 pounds";
    let temperature = "94 fahrenheit";
    if(document.getElementById("uk").checked) {
        weight = "21 stone";
        temperature = "34 centigrade";
    }

    story.textContent = GetRandomStory(name, temperature, weight);
    story.style.visibility = 'visible';
}