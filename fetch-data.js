// Step 1: Create an async function (because fetching data takes time)
async function fetchUserData() {
    // Step 2: Store the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Get the place in the HTML where we’ll put the names
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Ask the API for data and wait until it replies
        const response = await fetch(apiUrl);

        // Step 5: Change the reply into real usable data (JavaScript object)
        const users = await response.json();

        // Step 6: Clear the "Loading user data..." text
        dataContainer.innerHTML = '';

        // Step 7: Create a list element <ul> to hold the names
        const userList = document.createElement('ul');

        // Step 8: Go through every user in the data
        users.forEach(function(user) {
            // Step 8a: For each user, make a <li> item
            const listItem = document.createElement('li');

            // Step 8b: Set the text inside <li> to the user's name
            listItem.textContent = user.name;

            // Step 8c: Add the <li> to the <ul>
            userList.appendChild(listItem);
        });

        // Step 9: Add the <ul> to the page (inside the #api-data div)
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 10: If something goes wrong, clear previous message
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Step 11: When the page finishes loading, run the function
document.addEventListener('DOMContentLoaded', fetchUserData);
