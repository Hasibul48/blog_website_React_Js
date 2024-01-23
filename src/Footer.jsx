import React from 'react'

function Footer() {
    const NewDate = new Date();
    return (
        <>
            <div style={{ textAlign: 'center', fontSize: '18px', padding: '13px 0px', backgroundColor: 'rgb(204, 231, 192)', marginTop: '10px' }} className="copyright">
                <span>CopyRight {NewDate.getFullYear()} Made by <a style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/hm-hasibul-islam/">Hasibul Islam</a></span>
            </div>
        </>
    )
}

export default Footer