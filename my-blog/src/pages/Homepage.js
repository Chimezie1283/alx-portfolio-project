import React from "react";

const HomePage = () => {
    return (
    <>
        <main>

            <h1>Technocrat Blog</h1>

            <h5>Technocrat Blog is a platform for techies in the industry, where they can post articles, read articles and upvote articles of their choice</h5>

            
            

            <button className="github socials"><a href="">Navigate to App</a></button>


            <section class="trending-post mt-3">
                            <h2 class="text-center text-dark py-2">Featured Posts</h2>

                            <div class="post-item py-1">
                                <article class="article">
                                    <div class="d-flex">
                                        <a href="#">
                                            <img src="./assets/image10.avif" class="rounded px-1" alt=""></img>
                                        </a> 
                                        <div class="cart-body px-2">
                                            <div class="trending-category">
                                                <a href="#" class="link text-primary">
                                                    Fashion 
                                                </a>
                                            </div>
                                            <a href="#" class="text-title display-2 text-dark">
                                                Lorem ipsum dolor sit amet consectetur.
                                            </a>
                                            <p class="secondary-title text-secondary display-2">
                                                <span>
                                                    <i class="far fa-clock text-primary"></i>
                                                    Clock Tue 28, 2024.
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div class="post-item py-1">
                                <article class="article">
                                    <div class="d-flex">
                                        <a href="#">
                                            <img src="./assets/image9.avif" class="rounded px-1" alt=""></img>
                                        </a> 
                                        <div class="cart-body px-2">
                                            <div class="trending-category">
                                                <a href="#" class="link text-primary">
                                                    Fashion 
                                                </a>
                                            </div>
                                            <a href="#" class="text-title display-2 text-dark">
                                                Lorem ipsum dolor sit amet consectetur.
                                            </a>
                                            <p class="secondary-title text-secondary display-2">
                                                <span>
                                                    <i class="far fa-clock text-primary"></i>
                                                    Clock Tue 28, 2024.
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div class="post-item py-1">
                                <article class="article">
                                    <div class="d-flex">
                                        <a href="#">
                                            <img src="./assets/image8.avif" class="rounded px-1" alt=""></img>
                                        </a> 
                                        <div class="cart-body px-2">
                                            <div class="trending-category">
                                                <a href="#" class="link text-primary">
                                                    Fashion 
                                                </a>
                                            </div>
                                            <a href="#" class="text-title display-2 text-dark">
                                                Lorem ipsum dolor sit amet consectetur.
                                            </a>
                                            <p class="secondary-title text-secondary display-2">
                                                <span>
                                                    <i class="far fa-clock text-primary"></i>
                                                    Clock Tue 28, 2024.
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div class="post-item py-1">
                                <article class="article">
                                    <div class="d-flex">
                                        <a href="#">
                                            <img src="./assets/image4.avif" class="rounded px-1" alt=""></img>
                                        </a> 
                                        <div class="cart-body px-2">
                                            <div class="trending-category">
                                                <a href="#" class="link text-primary">
                                                    Fashion 
                                                </a>
                                            </div>
                                            <a href="#" class="text-title display-2 text-dark">
                                                Lorem ipsum dolor sit amet consectetur.
                                            </a>
                                            <p class="secondary-title text-secondary display-2">
                                                <span>
                                                    <i class="far fa-clock text-primary"></i>
                                                    Clock Tue 28, 2024.
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>

                        </section>
        </main>

        <footer>
        <div class="row mb-3">
                <div class="col-3">
                    <h2 class="footer-title secondary-title">About The Programmer</h2>

                    <div className="h5">
                        <p>
                            My names are Chimezie Emmanuel Agbo, I'm a full stack software engineering studen at Holberton Schools popularly known as ALX. This is my portfolio project.
                        </p>
                        
                        <address>
                            <i class="fas fa-map-marker-alt text-primary"></i>
                            No.10 St.Martins School, New Nyanya, Nasarawa State.
                        </address>

                        <div class="phone">
                            <i class="fas fa-mobile text-primary"></i>
                            +2347068357496
                        </div>

                        <div class="email">
                            <i class="fas fa-envelope text-primary"></i>
                            agbo.chimezie1283@gmail.com
                        </div>
                    </div>
                </div>
                
                <div class="col-3">
                    <h2 class="footer-title secondary-title">Tags</h2>

                    <div class="tags">
                        <div class="d-flex flex-wrap">
                            <a href="#" class="nav-link btn bg-light">Frontend</a>
                            <a href="#" class="nav-link btn bg-light">Backend</a>
                            <a href="#" class="nav-link btn bg-light">Cyber-Security</a>
                            <a href="#" class="nav-link btn bg-light">UI/UX</a>
                            <a href="#" class="nav-link btn bg-light">Data-analyst</a>
                        </div>
                    </div>

                                        
                </div>
            </div>
        </footer>
        
    </>
);
}



export default HomePage;