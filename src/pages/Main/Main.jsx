import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews";

import NewsBanner from "../../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import NewsList from "../../components/NewsList/NewsList";
import Sceleton from "../../components/Sceleton/Sceleton";

function Main() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(false);
        const response = await getNews();
        setNews(response.news);
        setIsLoading(true);
      } catch (error) {
        console.log("Не удалось получить новости (Main):", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <div className={styles.container}>
      {isLoading ? (
      <div className={styles.banners}>
      <NewsBanner item={news[0]} />
      <NewsBanner item={news[1]} />
    </div>
      )
     : (<div className={styles.banners}>
      <Sceleton />
      <Sceleton />
      </div>)
     
     }
        

      

      </div>
      <div className={styles.divider}></div>
      <div className={styles.container}>
        <NewsList news={news} />
      </div>
    </>
  );
}

export default Main;
  {/* {news.length > 0 && (
          <div className={styles.banners}>
            <NewsBanner item={news[0]} />
            <NewsBanner item={news[1]} />
          </div>
        )} */}