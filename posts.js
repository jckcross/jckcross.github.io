// This file contains all of your posts data
// Add new posts to this array when you want to add more content

const posts = [
    {
        id: 'masters-thesis',
        title: "Master's Thesis",
        date: "April 6, 2025",
        excerpt: "This is my master's thesis. Click 'View More' to check it out.",
        content: "", // Empty because this post links to an external resource
        externalLink: "https://vtechworks.lib.vt.edu/items/f9c7c090-ecd5-4d00-8de2-522eaf4c3df4"
    },
    {
        id: 'sample-post',
        title: "Sample Blog Post",
        date: "April 13, 2025",
        excerpt: "This is a sample blog post that demonstrates how you can add more content to your website.",
        content: `
            <p>This is a full blog post that demonstrates how you can add more detailed content to your website.</p>
            
            <p>You can include multiple paragraphs, <strong>formatting</strong>, and even <a href="#">links</a> in your content.</p>
            
            <h4>Subheadings are supported too</h4>
            
            <p>Structure your content however you like. You can add code samples, images, or any other HTML content here.</p>
            
            <pre><code>
// Example code block
function helloWorld() {
    console.log("Hello, World!");
}
            </code></pre>
            
            <p>When you want to add a new post, simply add a new object to the posts array in the posts.js file.</p>
        `,
        externalLink: null
    }
    // Add more posts here in the same format
];
