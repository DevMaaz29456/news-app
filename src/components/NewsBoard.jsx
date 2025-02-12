import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY; // Ensure this is correctly set in .env
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.articles) {
          setArticles(data.articles.slice(0, 16)); // Get only the first 16 articles
        } else {
          console.error("No articles found in response:", data);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {articles.length > 0 ? (
        <div className="row">
          {articles.map((news, index) => (
            <div key={index} className="col-md-3 d-flex justify-content-center">
              <NewsItem
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No news available.</p>
      )}
    </div>
  );
};

export default NewsBoard;
