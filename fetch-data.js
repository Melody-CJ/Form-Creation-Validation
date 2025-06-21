// Step 1: Define the async function
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 2: Fetch data from the API
        const response = await fetch(apiUrl);

        // Step 3: Convert response to JSON
        const users = await response.json();

        // Step 4: Clear loading message
        dataContainer.innerHTML = '';

        // Step 5: Create a <ul> to hold user names
        const userList = document.createElement('ul');

        // Step 6: Loop through users and add them to the list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Step 7: Add the list to the page
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 8: Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error("Error fetching data:", error);
    }
}

// Step 9: Run fetchUserData when the page finishes loading
document.addEventListener('DOMContentLoaded', fetchUserData);
