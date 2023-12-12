/*const forestStory = `Once upon a time, in a mystical forest, there lived a courageous adventurer named ${name}. ${name} was known far and wide for their extraordinary ${trait}. One day, while ${ing} through the woods, they stumbled upon a hidden ${noun}, which emitted a strange ${adj} glow.

Curiosity piqued, ${name} approached the mysterious ${noun}. As they reached out to touch it, the forest came alive with a soft, melodic hum. Suddenly, a ${adj} portal appeared before them, leading to a world filled with ${pNoun}.

Without hesitation, ${name} stepped through the portal, embarking on a remarkable adventure. Along the way, they encountered ${noun}, befriended ${pNoun}, and solved puzzles using their ${trait}.

With each challenge they faced, ${name} grew wiser and more ${trait}. After a series of thrilling escapades, they discovered a hidden treasure chest filled with ${pNoun}. It was a reward well-deserved.

With their newfound treasures, ${name} returned to their world, forever cherishing the memories of their enchanting forest quest.`*/
document.addEventListener('DOMContentLoaded', function () {
    // Get references to form elements and story box
    const charNameInput = document.getElementById('charName');
    const nounInput = document.getElementById('noun');
    const adjectiveInput = document.getElementById('adjective');
    const ingVerbInput = document.getElementById('ingVerb');
    const plNounInput = document.getElementById('plNoun');
    const traitInput = document.getElementById('trait');
    const storyBox = document.querySelector('.story-box');
    const colorSelect = document.getElementById('colors');

    // Handle form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get user inputs
        const charName = charNameInput.value.trim();
        const noun = nounInput.value.trim();
        const adjective = adjectiveInput.value.trim();
        const ingVerb = ingVerbInput.value.trim();
        const plNoun = plNounInput.value.trim();
        const trait = traitInput.value.trim();
        const selectedColor = colorSelect.value;

        // Create a story using user inputs
        const story = `Once upon a time, in a ${adjective} forest, there lived a young adventurer named ${charName}. ${charName} had always dreamed of ${ingVerb} the world beyond the trees. One sunny morning, they decided it was time to embark on a grand ${noun}.

With a heart full of ${trait}, ${charName} set off into the forest. The towering trees whispered secrets, and the leaves crunched beneath their feet as they journeyed deeper and deeper. Soon, they stumbled upon a hidden ${noun}. Inside, they discovered a magical ${plNoun}. As they touched it, the world around them transformed into brilliant shades of ${selectedColor}.

The forest had granted ${charName}'s deepest wish, and their adventure had only just begun.`;

        // Display the story in the story box
        storyBox.textContent = story;

        // Change the background color based on user selection
        document.body.style.backgroundColor = selectedColor;

        // Alert box to show the story has been successfully created!
        window.alert("Story created successfully!");
    });
    // Handle input validation for Character Name input
    charNameInput.addEventListener('input', function () {
        if(charNameInput.value.length < 3) {
            charNameInput.setCustomValidity("Character name must be at least 3 characters long");
        } else {
            charNameInput.setCustomValidity("");
        }
    });

    // Handle form reset
    form.addEventListener('reset', function () {
        // Clear the story and reset the background color
        document.querySelectorAll('input[type="text"]').forEach(input => input.value = '');
        storyBox.textContent = '';
        document.body.style.backgroundColor = '';
    });
});