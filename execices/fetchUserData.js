const fetchUserData = async () => {
    try {
        const response = await fetch("https://dummyjson.com/users");

        if (!response.ok) {
            throw new Error(`An error has occurred: ${response.status}`);
        }

        const data = await response.json();
        // processUserData(data.users); // Pass the users array to processUserData
        console.log("Users data:", data.users); // Log the users data
    } catch (error) {
        console.error("Error:", error.message);
    }
};
fetchUserData();