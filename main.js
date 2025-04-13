// Main JavaScript file for personal website

document.addEventListener('DOMContentLoaded', function() {
    // Get the container where posts will be displayed
    const postsContainer = document.querySelector('.posts');
    const postTemplate = document.getElementById('post-template');
    
    // Function to create and display all posts
    function displayPosts() {
        // Reverse the array to show newest posts first
        const sortedPosts = [...posts].reverse();
        
        sortedPosts.forEach(post => {
            // Clone the template
            const postNode = document.importNode(postTemplate.content, true);
            
            // Fill in the content
            postNode.querySelector('.post-title').textContent = post.title;
            postNode.querySelector('.post-date').textContent = post.date;
            postNode.querySelector('.post-excerpt').textContent = post.excerpt;
            
            // Get the view more button
            const viewMoreBtn = postNode.querySelector('.view-more-btn');
            
            // Add event listener to button
            viewMoreBtn.addEventListener('click', function() {
                if (post.externalLink) {
                    // If it's an external link, open it in a new tab
                    window.open(post.externalLink, '_blank');
                } else {
                    // Otherwise, open the full post in a new tab
                    openFullPost(post);
                }
            });
            
            // Add the post to the page
            postsContainer.appendChild(postNode);
        });
    }
    
    // Function to create and open a full post page
    function openFullPost(post) {
        // Create a new HTML document
        const fullPostHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${post.title} - Jack Cross</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    background-color: #f9f9f9;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    width: 90%;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                }
                header {
                    background-color: #ffffff;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    padding: 15px 0;
                }
                .header-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo h1 {
                    font-size: 1.8rem;
                    margin: 0;
                }
                .logo a {
                    color: #333;
                    text-decoration: none;
                }
                .post {
                    background-color: #fff;
                    border-radius: 5px;
                    padding: 30px;
                    margin: 40px 0;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                }
                .post h1 {
                    font-size: 2rem;
                    margin-bottom: 10px;
                }
                .post-date {
                    color: #666;
                    font-size: 0.9rem;
                    margin-bottom: 20px;
                }
                .post-content {
                    line-height: 1.8;
                }
                .back-link {
                    display: inline-block;
                    margin-top: 20px;
                    color: #2a7ae2;
                }
                pre {
                    background-color: #f5f5f5;
                    padding: 15px;
                    border-radius: 5px;
                    overflow-x: auto;
                }
                code {
                    font-family: monospace;
                }
            </style>
        </head>
        <body>
            <header>
                <div class="container header-container">
                    <div class="logo">
                        <h1><a href="index.html">Jack Cross</a></h1>
                    </div>
                </div>
            </header>
            <main class="container">
                <article class="post">
                    <h1>${post.title}</h1>
                    <p class="post-date">${post.date}</p>
                    <div class="post-content">
                        ${post.content}
                    </div>
                    <a href="index.html" class="back-link">← Back to All Posts</a>
                </article>
            </main>
        </body>
        </html>
        `;
        
        // Open a new tab and write the HTML content
        const newTab = window.open('', '_blank');
        newTab.document.write(fullPostHTML);
        newTab.document.close();
    }
    
    // Call the function to display posts
    displayPosts();
});
