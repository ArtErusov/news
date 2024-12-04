import styles from "./styles.module.css";

function Pagination({totalPages, currentPage, handleNextPage, handlePreviousPage, handlePageClick}) {
  return (
    <div>
     <button onClick={handlePreviousPage}>{"<"}</button>

     <div>
      {[...Array(totalPages)].map((_, index) => {
        return <button onClick={() => handlePageClick(index + 1)} key={index}>{index + 1}</button>
      })}
     </div>

     <button onClick={handleNextPage}>{">"}</button>
    </div>
  );
}

export default Pagination;
