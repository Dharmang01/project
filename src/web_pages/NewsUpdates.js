import React, { useState, useEffect } from "react";
import NewsItem from './NewsItem';

const NewsUpdates = ({ data }) => {
  // State to store the fetched articles
  const [articles, setArticles] = useState([]);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    // Function to fetch articles asynchronously
    const getArticles = async () => {
      try {
        // Fetch data from the News API
        const response = await fetch(
          'https://newsapi.org/v2/everything?q=football&apiKey=c899019ca1a342068c0ea3d5995fcc36'
        );

        // Check if the response is successful (status code 200)
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        // Parse the JSON response
        const data = await response.json();

        // Set the articles state with the fetched data
        setArticles(data.articles);
      } catch (error) {
        // Handle errors by setting an error state
        console.error('Error fetching data:', error);
      }
    };

    // Call the getArticles function when the component mounts
    getArticles();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="container my-5">
      {/* Display the heading */}
      <h1 className="display-4 mb-2">News Updates</h1>

      {/* Display articles in a row */}
      <div className='row'>
        {/* Map over articles and render NewsItem component for each */}
        {articles.map(article => (
          <NewsItem 
            key={article.url} // Unique key for React rendering optimization
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage} 
          />
        ))}
      </div>
    </div>
  );
}

export default NewsUpdates;
