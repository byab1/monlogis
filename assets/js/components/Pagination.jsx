import React from 'react';

const Pagination = ({currentPage, itemsPerPage, length, onPageChange}) => {

    const pagesCount = Math.ceil(length / itemsPerPage);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
      
    }

    return ( 
    <ul class="pager top40 padding_bottom">
        {pages.map(page => 
        <li key={page} class={currentPage === page && " active"}>
            <button 
            onClick={()=> onPageChange(page)}>
                {page}
            </button>
        </li>
        )}
            
    </ul> );
}
 Pagination.getData = (items, currentPage, itemsPerPage) => {
    const start= currentPage * itemsPerPage - itemsPerPage;
    return items.slice(start, start + itemsPerPage);
};
export default Pagination;