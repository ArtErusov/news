import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews";

import NewsBanner from "../../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import NewsList from "../../components/NewsList/NewsList";
import Sceleton from "../../components/Sceleton/Sceleton";
import Pagination from "../../components/Pagination/Pagination";

function Main() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


// ============Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handlePageClick = (pageNumber) => setCurrentPage(pageNumber)
  
// ==========


  const fetchNews = async (currentPage) => {
        try {
          setIsLoading(false);
          const response = await getNews(currentPage, pageSize);
          setNews(response.news);
          setIsLoading(true);
        } catch (error) {
          console.log("Не удалось получить новости (Main):", error);
        }
      };

  useEffect(() => {
    
    fetchNews(currentPage);
  }, [currentPage]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.banners}>
        {isLoading ? (
            <>
            {/* Сделать массив, в который передавать новости и в NewsBanner отрисовывать их */}
            <NewsBanner item={news[0]} />
            <NewsBanner item={news[1]} />
             </>
        ) : (
            <Sceleton count = {2}/> 
        )
      }
      </div>
    </div>
    <div className={styles.divider}></div>
    <div className={styles.container}>
      <Pagination 
        totalPages={totalPages} 
        currentPage={currentPage}
        handleNextPage={handleNextPage} 
        handlePreviousPage={handlePreviousPage} 
        handlePageClick={handlePageClick}
      />
     {isLoading ? <NewsList news={news} /> : <Sceleton count = {10}/> }
    </div>
    </>
  );
}

export default Main;