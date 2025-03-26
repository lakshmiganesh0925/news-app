import { useNavigate } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

function NewsDetails({ article }) {
  const navigate = useNavigate();

  const handleDownloadPDF = () => {
    const element = document.getElementById('news-content');
    html2pdf().from(element).save(`${article.title}.pdf`);
  };

  return (
    <div className="news-details">
      <div id="news-content">
        <h1>{article.title}</h1>
        <p>{article.content || article.description}</p>
        <p><strong>Source:</strong> {article.source.name}</p>
        <p><strong>Published:</strong> {new Date(article.publishedAt).toLocaleString()}</p>
        {article.urlToImage && <img src={article.urlToImage} alt={article.title} style={{ maxWidth: '100%' }} />}
      </div>
      <button onClick={handleDownloadPDF}>Download as PDF</button>
      <button onClick={() => navigate('/')}>Back to News</button>
    </div>
  );
}

export default NewsDetails;