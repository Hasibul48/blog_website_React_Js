import React from 'react'

import Carousel from './Component/Carousel'
import BlogCard from './Component/BlogCard'
import Newsletter from './Component/Newsletter';
import HowDoesItWork from './Component/HowDoesItWork';


function Home(props) {
    const { postData } = props;

    let items = [];
    let i = 0;
    for (i = 0; i < 9; i++) {
        items.push(<BlogCard title={postData[i].title} desc={postData[i].description} name={postData[i].personName} Pdate={postData[i].date} category={postData[i].category} />)
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
                </div>
            </div>

            <Newsletter />
        </>
    )
}

export default Home