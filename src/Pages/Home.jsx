import React from 'react'

import Carousel from './Component/Carousel'
import BlogCard from './Component/BlogCard'
import Newsletter from './Component/Newsletter';
import HowDoesItWork from './Component/HowDoesItWork';
import { Link } from 'react-router-dom';


function Home(props) {
    const { postData } = props;

    let items = [];
    let i;
    for (i = 0; i < 9; i++) {
        items.push(<BlogCard key={i} title={postData[i].title} desc={postData[i].description} name={postData[i].personName} Pdate={postData[i].date} category={postData[i].category} />)
    }
    return (
        <>

            <br />
            <br />
            <Carousel />
            <br />
            <br />
            <HowDoesItWork />
            <div className="container">
                <div className="row">
                    {/* {postData && postData.map((item) => <BlogCard key={postData.it} title={item.title} desc={item.body} />)} */}
                    {items}
                    <div className="buttonDiv" style={{ marginLeft: '20px' }}>
                        <Link to='/all_blogs' className='btn btn-primary'>See More <img src="img/arrowKeys/arrow-right copy.svg" alt="" /></Link>
                    </div>
                </div>
            </div>

            <Newsletter />
        </>
    )
}

export default Home