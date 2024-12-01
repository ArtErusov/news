import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css';
import { getNews } from '../../api/apiNews';

function Main() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
        try {
            const response = await getNews();
           setNews(response.news);
        } catch (error) {
            console.log('Не удалось получить новости (Main):', error);
        }
    };

    fetchNews();
}, []); 

return (
  <div className={styles.container}>
    {news.length > 0 && (
      <div className={styles.banners}>
        <NewsBanner item={news[0]} />
        <NewsBanner item={news[3]} />
      </div>
    )}
  </div>
)
}

export default Main