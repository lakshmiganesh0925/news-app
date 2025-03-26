import { Link } from 'react-router-dom';

function NewsCard({ article }) {
  return (
    <div className="news-card">
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <Link to={`/news/${encodeURIComponent(article.url)}`}>Read More</Link>
    </div>
  );
}

export default NewsCard;