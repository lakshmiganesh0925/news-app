import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NewsDetails from '../components/NewsDetails';

function NewsPage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const API_KEY =process.env.REACT_PUBLIC_API_KEY;

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${decodeURIComponent(id)}&apiKey=${API_KEY}`
      );
      setArticle(response.data.articles[0]);
    };
    fetchArticle();
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return <NewsDetails article={article} />;
}

export default NewsPage;