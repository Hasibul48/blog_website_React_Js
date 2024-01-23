import React from 'react'

import BlogCard from './Component/BlogCard';
function Sports(props) {

    const { postData } = props;

    let items = [];
    let i = 0;
    let category = '';
    for (i = 0; i < postData.length; i++) {

        if (postData[i].category === 'Sports') {

            items.push(<BlogCard title={postData[i].title} desc={postData[i].description} name={postData[i].personName} Pdate={postData[i].date} category={postData[i].category} />);

            category = postData[i].category;
        }
    }

    return (
        <>
            <div className="container">
                <div className="goMiddle">
                    <h2 className='topHeading'>All Posts About {category}</h2>
                </div>
                <div className="row">
                    {items}
                </div>
            </div>
        </>
    )
}

export default Sports