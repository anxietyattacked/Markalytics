import React from 'react'
import ShareLinks from '../components/ShareLinks'

const BlogVideo = ({width, src}) => {
    return (
        <div>
            <div className="blog-article-container">
              <div className="blog-article-hero-container">
                    <div className="blog-article-video-container">
                    <iframe className="blog-article-image" width="560" height="315" src={src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
               </div>
               <div className="article-and-link-container">
                <ShareLinks width={width}/>
                <article className="blog-article">
                <h2>Markalytics: Our Story</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae unde perspiciatis quidem veritatis maiores aliquid suscipit vero deserunt, odio eaque qui cum recusandae cupiditate in vel animi expedita excepturi ullam magni laboriosam corrupti eos itaque ex? Corporis explicabo tempora quisquam aliquid voluptatum dicta, vitae quasi aliquam magni, maiores harum atque aperiam. Quaerat, dolorem. Non alias, soluta officia repellendus eos rerum nisi, nostrum dicta libero dignissimos, veritatis modi magni dolore sint eveniet voluptate incidunt! Nulla nesciunt nemo officia cum facilis quos aut sapiente voluptatem perferendis praesentium quaerat consequatur necessitatibus distinctio excepturi accusamus itaque porro vitae saepe animi ex, sequi atque. Sequi nemo veniam temporibus. Reprehenderit iste mollitia, cum impedit ipsa, fuga repellendus nihil dicta asperiores saepe nisi ea enim quidem magnam doloribus in numquam! Quaerat, sint quam sunt autem nemo vel ex suscipit neque error fuga, a doloremque illo id ipsum consequatur enim laborum facilis aperiam minima corporis voluptate aliquid? Aut?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quos, dicta unde aperiam atque libero. Consequatur quod eos optio laboriosam maiores dignissimos fugiat vitae dolor enim, numquam velit illo ullam tenetur eum, aut magnam unde! At rem ratione maiores! Eum dignissimos necessitatibus incidunt repellat, nisi quaerat qui. Voluptatibus perspiciatis minus dolorem laudantium totam hic optio commodi pariatur culpa ut repellendus fuga dignissimos, provident vel itaque ipsum vero et doloremque similique facilis veritatis quos reiciendis. Debitis dicta recusandae dignissimos maiores ducimus error, amet quia nam eius reprehenderit! Illum vitae ullam culpa repudiandae officiis obcaecati aut, dignissimos voluptatum! Repudiandae excepturi magni eaque deserunt ad cumque omnis molestias quam minima doloribus, unde, dignissimos debitis, perferendis earum non porro hic iure optio impedit ullam blanditiis recusandae amet. Corporis explicabo nulla impedit perferendis, doloribus fugit temporibus, unde eveniet nobis voluptate numquam. Fuga consectetur tenetur a iste necessitatibus! Ducimus dolorem ad doloribus hic, necessitatibus sunt praesentium.</p>
                </article>
                </div>
            </div>
           
        </div>
    )
}

export default BlogVideo
