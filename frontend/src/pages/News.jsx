import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getNews } from '../services/api';
import './news.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.data);
      } catch (err) {
        setError('Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Navbar />
      <section className="news-hero">
        <h1>Latest News</h1>
        <p>Stay updated with our activities and achievements.</p>
      </section>
      <section className="news-list">
        {news.map((item) => (
          <article key={item.id} className="news-article">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <small>{item.date}</small>
          </article>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default News;