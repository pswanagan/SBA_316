// Javascript 
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
    // Function to save the story to local storage
    function saveStoryToLocalStorage(story) {
        // Check if 'stories' array exists in local storage
        let stories = localStorage.getItem('stories');
        if (!stories) {
            stories = [];
        } else {
            stories = JSON.parse(stories);
        }

        // Add the new story to the array
        stories.push(story);

        // Save the updated array back to local storage
        localStorage.setItem('stories', JSON.stringify(stories));
    }

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

    console.log(ingVerb);


        // Create a story using user inputs
        const story = `Once upon a time, in a ${adjective} forest, there lived a young adventurer named ${charName}. ${charName} had always dreamed of ${ingVerb} the world beyond the trees. One sunny morning, they decided it was time to embark on a grand ${noun}.

With a heart full of ${trait}, ${charName} set off into the forest. The towering trees whispered secrets, and the leaves crunched beneath their feet as they journeyed deeper and deeper. Soon, they stumbled upon a hidden ${noun}. Inside, they discovered a magical ${plNoun}. As they touched it, the world around them transformed into brilliant shades of ${selectedColor}.

The forest had granted ${charName}'s deepest wish, and their adventure had only just begun.`;
    
        

        // Create a new image element
    const randomImage = document.createElement('img');
    randomImage.src = getRandomImageUrl();
    randomImage.alt = 'Random Reward Image';

    // Append the new image next to the forest image
    const forestImageParent = document.getElementById('forestImage').parentNode;
    forestImageParent.appendChild(randomImage);

    // Select and clone the template
    const template = document.querySelector('#the-end').content;
    const clone = template.cloneNode(true);

    // Create a DocumentFragment
    const fragment = document.createDocumentFragment();

    // Append the cloned content to the fragment
    fragment.appendChild(clone);

    // Append the fragment to the desired location in the document
    const appendToElement = document.querySelector("#box-story");
    appendToElement.appendChild(fragment);


        // Add a border around the story in story-box
        storyBox.style.border = "2px solid black";
        
        // Display the story in the story-box
        storyBox.textContent = story;

        // Save the story to local storage
        saveStoryToLocalStorage(story);

        // Change the background color based on user selection
        document.body.style.backgroundColor = selectedColor;

        // Alert box to show the story has been successfully created!
        window.alert("Story created successfully!");
        // Alert box to show that the image appended behind the forest image is their reward.
        window.alert("Here's your reward!!!");
    });

    // Function to generate a random image URL
function getRandomImageUrl() {
    const imageUrls = ['crown.jpg', 'book.jpg', 'sword.jpg']; 
    return imageUrls[Math.floor(Math.random() * imageUrls.length)];
}
    // Handle input validation for Character Name input
    charNameInput.addEventListener('input', function () {
        if(charNameInput.value.length < 3) {
            charNameInput.setCustomValidity("Character name must be at least 3 characters long");
        } else {
            charNameInput.setCustomValidity("");
        }
    });
    ingVerbInput.addEventListener('input', function() {
        if (!/ing$/i.test(ingVerbInput.value.trim())) {
            ingVerbInput.setCustomValidity("Please enter a verb ending in 'ing'");
        } else {
            ingVerbInput.setCustomValidity("");
        }
    });
    // Handle form reset
    form.addEventListener('reset', function () {
        // Clear the story and reset the background color
        document.querySelectorAll('input[type="text"]').forEach(input => input.value = '');
         // Select the parent element of the forest image
    const forestImageParent = document.getElementById('forestImage').parentNode;

    // Remove all appended images except the forest image
    const images = forestImageParent.querySelectorAll('img');
    images.forEach(img => {
        if (img.id !== 'forestImage') {
            forestImageParent.removeChild(img);
        }
    });
    const boxStory = document.getElementById('box-story');
    const addedTemps = boxStory.getElementsByTagName('h1');
    Array.from(addedTemps).forEach(item => {
        boxStory.removeChild(item);
    });
        storyBox.style.border = '';
        storyBox.textContent = '';
        document.body.style.backgroundColor = '';
    });
});