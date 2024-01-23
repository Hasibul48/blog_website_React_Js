import React from 'react'

import BlogCard from './Component/BlogCard';
function Politics(props) {
    const { postData } = props;

    let items = [];
    let i = 0;
    items.push(<BlogCard title={postData[i].title} desc={postData[i].description} name={postData[i].personName} Pdate={postData[i].date} category={postData[i].category} />)
    let category = '';
    for (i = 0; i < postData.length; i++) {

        if (postData[i].category === 'Politics') {

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

export default Politics