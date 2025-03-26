import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import SearchBar from '../components/SearchBar';

function Home() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const isAuthenticated = !!localStorage.getItem('user');
  const API_KEY =process.env.REACT_PUBLIC_API_KEY;
  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchNews = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=${category}&q=${searchQuery}&apiKey=${API_KEY}`
      );
      setNews(response.data.articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)));
    };
    fetchNews();
  }, [category, searchQuery, isAuthenticated]);

  if (!isAuthenticated) {
    return <p>Please log in to view news.</p>;
  }

  return (
    <div>
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="general">General</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
      </select>
      <SearchBar onSearch={setSearchQuery} />
      {news.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}

export default Home;