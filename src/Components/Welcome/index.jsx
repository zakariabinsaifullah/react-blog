import { React } from "react";

import Article from './../Article'; 
import Banner from './../Banner'; 

const Welcome = () => {
    return (
        <div>
            <Banner 
                backgroundImage = 'url(assets/img/bg-gift.jpg)'
                title = 'Latest Blog Posts'
                subtitle = 'Read and get updated on how we progress.'
            />
            <main class="main-content bg-gray">
                <div class="row">
                    <div class="col-12 col-lg-6 offset-lg-3">
                        <Article />
                        <hr/>
                        <Article />
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Welcome;