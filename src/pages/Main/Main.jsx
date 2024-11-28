import { useEffect } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css';
import { getNews } from '../../api/apiNews';

function Main() {

  useEffect(() => {
    const fetchNews = async () => {
        try {
            const news = await getNews();
            console.log(news);
        } catch (error) {
            console.log('Не удалось получить новости (Main):', error);
        }
    };

    fetchNews();
}, []); 

  return (
 <>
<NewsBanner />
 </>
  )
}

export default Main