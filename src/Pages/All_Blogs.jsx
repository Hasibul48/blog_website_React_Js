import React, { useState } from 'react'
import BlogCard from './Component/BlogCard'
import Pagination from './Component/Pagination'

function All_Blogs(props) {
    const { postData } = props;

    const [pageNumber, setPagenumber] = useState(null);
    const [blogsPerPage, setBlogsPerpage] = useState(null);


    let items = [];
    for (let i = (pageNumber * blogsPerPage) - blogsPerPage; i < pageNumber * blogsPerPage; i++) {
        postData[i] && items.push(<BlogCard key={i} title={postData[i].title} desc={postData[i].description} name={postData[i].personName} Pdate={postData[i].date} category={postData[i].category} />)
    };

    const handlePageNumber = (e) => {
        setPagenumber(e)
    }
    const handleBlogsPerPage = (e) => {
        setBlogsPerpage(e)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    {items}
                </div>
                <div className="row">
                    <Pagination handlePageNumber={handlePageNumber} handleBlogsPerPage={handleBlogsPerPage} postData={postData} />
                </div>
            </div>
        </>
    )
}

export default All_Blogs