import React from 'react'

function Footer() {
    const NewDate = new Date();
    return (
        <>
            <br />
            <br />
            <div style={{ backgroundColor: 'rgb(233, 225, 225)', padding: '100px 0px' }} className="footerWrapper">
                <div className="container" >
                    <div className="row">
                        <div className="col-md-6">
                            <div className="texWrapper">
                                <h3>Newsletter Subscribe</h3>
                                <p style={{ width: '80%' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at debitis ipsam. Sit, vero ullam odit pariatur ipsa sequi. Ad explicabo quis tenetur natus numquam odio accusamus corporis?</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <br />
                            <br />
                            <div style={{
                                marginLeft: '150px'
                            }} className="row">
                                <div className="col-sm-8">
                                    <input style={{
                                        borderRadius: '50px',
                                        boxShadow: '0px 1px 8px black',
                                        padding: '8px 19px'
                                    }} type="text" className='form-control' placeholder='Enter Your Email' />
                                </div>
                                <div className="col-sm-4">
                                    <button style={{
                                        borderRadius: '50px',
                                        marginLeft: '-70px',
                                        boxShadow: '0px 0px 5px black',
                                        transform: 'scale(1.1)',
                                        marginTop: '2px'
                                    }} className='btn btn-primary'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div style={{ textAlign: 'center', fontSize: '18px', padding: '13px 0px', backgroundColor: 'rgb(204, 231, 192)', marginTop: '10px' }} className="copyright">
                <span>CopyRight {NewDate.getFullYear()} Made by <a style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/hm-hasibul-islam/">Hasibul Islam</a></span>
            </div>
        </>
    )
}

export default Footer