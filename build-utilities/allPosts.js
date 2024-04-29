const fs = require('fs');
const path = require('path');

const postsDirectory = path.join(process.cwd(), 'posts');

// Function to get all posts from the posts directory
const getAllPosts = () => {
    // Get all file names in the posts directory
    const fileNames = fs.readdirSync(postsDirectory);

    // Filter out non-Markdown files
    const postFileNames = fileNames.filter(fileName => fileName.endsWith('.md'));

    // Read content of each Markdown file and return as an array of objects
    const posts = postFileNames.map(fileName => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Parse fileContents to extract relevant data (e.g., title, content)
        // Example: parse front matter if present in Markdown files
        // const { data, content } = matter(fileContents);
        
        // Return an object with relevant data
        return {
            id: fileName.replace(/\.md$/, ''), // Assuming your file names are unique identifiers
            // Add other properties as needed (e.g., title, content, date)
        };
    });

    return posts;
};

module.exports = { getAllPosts };
