import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Pagination(props) {
    const [crrPage, setCrrPage] = useState(1);
    const [blogsPerPage, setBlogsPerPage] = useState(15);
    const { postData, handlePageNumber, handleBlogsPerPage } = props;
    handlePageNumber(crrPage);
    handleBlogsPerPage(blogsPerPage);
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item" onClick={() => {
                            if (crrPage !== 1) {
                                setCrrPage((crrPage) => crrPage - 1)
                            }
                        }}>
                            <Link className="page-link" aria-label="Previous">
                                <span aria-hidden="true"><img src="img/arrowKeys/arrow-left.svg" alt="" /></span>
                                <span className="sr-only"></span>
                            </Link>
                        </li>

                        <li onClick={() => {
                            setCrrPage(1)
                        }} className="page-item"><Link className="page-link">1</Link></li>

                        <li onClick={() => {
                            setCrrPage(2)
                        }} className="page-item"><Link className="page-link">2</Link></li>

                        <li onClick={() => {
                            setCrrPage(3)
                        }} className="page-item"><Link className="page-link">3</Link></li>

                        <li onClick={() => {
                            setCrrPage(4)
                        }} className="page-item"><Link className="page-link">4</Link></li>

                        <li className="page-item" onClick={() => {
                            if (crrPage !== Math.ceil(postData.length / blogsPerPage)) {
                                setCrrPage((crrPage) => crrPage + 1)
                            }
                        }}>
                            <Link className="page-link" aria-label="Next">
                                <span aria-hidden="true"></span>
                                <span className="sr-only"><img src="img/arrowKeys/arrow-right.svg" alt="" /></span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p>Showing {crrPage} page out of {Math.ceil(postData.length / blogsPerPage)}</p></div>

        </>
    )
}

export default Pagination