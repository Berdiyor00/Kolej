import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { articleId } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const apiUrl = `https://cors-anywhere.herokuapp.com/https://newsdata.io/api/1/news/${articleId}?apikey=pub_3759981b2c813ee49cd564e7f5b3c867dfe87`;
        const response = await axios.get(apiUrl);
        setArticle(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {article && (
        <>
          <h2>{article.title}</h2>
          <img src={article.image_url} alt={article.title} />
          <p>{article.pubDate}</p>
          <p>{article.description}</p>
          {/* Add more details as needed */}
        </>
      )}
    </div>
  );
};

export default ArticleDetail;
