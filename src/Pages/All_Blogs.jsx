import React from 'react'
import BlogCard from './Component/BlogCard'

function All_Blogs(props) {

    const { postData } = props;

    let items = [];
    let i;
    for (i = 0; i < postData.length; i++) {
        items.push(<BlogCard title={postData[i].title} desc={postData[i].description} name={postData[i].personName} Pdate={postData[i].date} category={postData[i].category} />)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    {items}
                </div>
            </div>
        </>
    )
}

export default All_Blogs