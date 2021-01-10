import React from "react";
import './Footer.css'
function Footer(){
    return(
        <div className='footerArea'>
           <div className="footerArea_top">
                <p>Back to top</p>
            </div>
            <div className="footerArea_links">
                <div className="footerArea_linkarea">
                    <span>test</span>
                </div>
                <div className="footerArea_linkarea">
                    <span>test1</span>
                </div>
                <div className="footerArea_linkarea">
                    <span>test2</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;