import React from 'react'

function BlogCard(props) {
    const { title, desc, name, Pdate, category } = props;


    let conditional;
    if (category === 'Politics') {
        conditional = 'red'
    } else if (category === 'Entertainment') {
        conditional = 'tomato'
    } else if (category === 'Travel') {
        conditional = 'orange'
    } else if (category === 'Sports') {
        conditional = 'blue'
    } else if (category === 'Tech') {
        conditional = 'gray'
    }

    return (
        <>


            <div className="col-md-4" style={{ transform: 'scale(.9)' }}>
                <div class="card" style={{
                    width: '100%',
                    marginTop: '2.2rem'
                }}>
                    <img src="img/Card_Images/cardImg.jpg" class="card-img-top" />
                    <div class="card-body">
                        <h3 class="card-title">{title}</h3>
                        <div className="userId mb-2 mt-4" style={{ display: 'flex' }}>

                            <h5>{name}</h5><span>{` -  ${Pdate}`}</span>
                        </div>
                        <div className="row">
                            <div className="col-sm-5" style={{ marginLeft: '-17px' }}>
                                <div style={{ padding: '5px 0px', backgroundColor: conditional, textAlign: 'center', color: 'white', marginBottom: '10px', borderRadius: '13px', transform: 'scale(.8)' }}>
                                    {category}
                                </div>
                            </div>
                        </div>
                        <p className="card-text">{desc}</p>

                        <a href="#">Read More</a>

                    </div>
                </div>
            </div >

        </>
    )
}

export default BlogCard