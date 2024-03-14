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
                                    <div class="">
                                        <a href="#">
                                            <img src={require(".//assets/image9.avif")} class="px-1" alt=""></img>
                                        </a> 
                                        <div class="cart-body px-2">
                                            <div class="trending-category">
                                                <a href="#" class="link">
                                                    Web Development 
                                                </a>
                                            </div>
                                            <a href="#" class="text-title display-2 text-dark">
                                                In web development, their are different things a person can learn. A person can also specialise i either fron or backend.
                                            </a>
                                            <p class="secondary-title text-secondary display-2">
                                                <span>
                                                    <i class="far fa-clock"></i>
                                                    Clock Tue 28, 2024.
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div class="post-item py-1">
                                <article class="article">
                                    <div class="">
                                        <a href="#">
                                            <img src={require(".//assets/image5.avif")} class="px-1" alt=""></img>
                                        </a> 
                                        <div class="cart-body px-2">
                                            <div class="trending-category">
                                                <a href="#" class="link text-primary">
                                                     Cyber Security
                                                </a>
                                            </div>
                                            <a href="#" class="text-title display-2 text-dark">
                                            Cybersecurity is the practice of protecting internet-connected systems such as hardware, software and data from cyberthreats. It's used by individuals and enterprises to protect against unauthorized access to data centers and other computerized systems.
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
                                    <div class="">
                                        <a href="#">
                                            <img src={require(".//assets/image7.avif")} class="px-1" alt=""></img>
                                        </a> 
                                        <div class="cart-body px-2">
                                            <div class="trending-category">
                                                <a href="#" class="link text-primary">
                                                     Data Analyses
                                                </a>
                                            </div>
                                            <a href="#" class="text-title display-2 text-dark">
                                            Data analysis is the process of cleaning, analyzing, interpreting, and visualizing data using various techniques and business intelligence tools. Data analysis tools help you discover relevant insights that lead to smarter and more effective decision-making. In data analytics and data science, there are four main types of data analysis: Descriptive, diagnostic, predictive, and prescriptive. In this post, we'll explain each of the four and consider why they're useful.
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
                                    <div class="">
                                        <a href="#">
                                            <img src={require(".//assets/image6.avif")} class="px-1" alt=""></img>
                                        </a> 
                                        <div class="cart-body px-2">
                                            <div class="trending-category">
                                                <a href="#" class="link text-primary">
                                                    Project Management
                                                </a>
                                            </div>
                                            <a href="#" class="text-title display-2 text-dark">
                                                Project management involves the planning and organization of a company's resources to move a specific task, event, or duty toward completion. It can involve a one-time project or an ongoing activity, and resources managed include personnel, finances, technology, and intellectual property.
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