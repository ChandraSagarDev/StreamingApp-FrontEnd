import React from 'react'
import BottomNav from './BottomNav'
import Nav from './Nav'

const Home = () => {
    return (
        <div>

            <Nav />
            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <br />

                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="card text-bg-primary mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Basic</h5>
                                <p class="card-text">A great way to enjoy all your favourite shows and movies on a budget.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="card text-bg-success mb-3" >
                            <div class="card-body">
                                <h5 class="card-title">Standard</h5>
                                <p class="card-text">All the entertainment you love, in Full HD video quality.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="card text-bg-secondary mb-3" >
                            <div class="card-body">
                                <h5 class="card-title">Mobile</h5>
                                <p class="card-text">A travel-friendly option for your mobile devices.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="card text-bg-warning mb-3" >
                            <div class="card-body">
                                <h5 class="card-title">Premium</h5>
                                <p class="card-text">A cinematic experience with the best picture and audio quality.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Region</button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">India</a></li>
                            <li><a class="dropdown-item" href="#">Australia</a></li>
                            <li><a class="dropdown-item" href="#">France</a></li>
                        </ul>
                    </div>
                    <br />
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Movies</a></li>
                                <li><a class="dropdown-item" href="#">TV Shows</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br />

                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="card">
                            <img src="https://upload.wikimedia.org/wikipedia/en/9/90/Animal_%282023_film%29_poster.jpg" class="card-img-top" alt="..." height="400px" />
                            <div class="card-body">
                                <h5 class="card-title">Animal</h5>
                                <a href="#" class="btn btn-primary">Watch Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3"><div class="card">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/220px-Dune_%282021_film%29.jpg" class="card-img-top" alt="..." height="400px" />
                        <div class="card-body">
                            <h5 class="card-title">Dune</h5>
                            <a href="#" class="btn btn-primary">Watch Now</a>
                        </div>
                    </div>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">                        <div class="card">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Manjummel_Boys_poster.jpg/220px-Manjummel_Boys_poster.jpg" class="card-img-top" alt="..." height="400px" />
                        <div class="card-body">
                            <h5 class="card-title">Manjummel Boys</h5>
                            <a href="#" class="btn btn-primary">Watch Now</a>
                        </div>
                    </div>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">                        <div class="card">
                        <img src="https://upload.wikimedia.org/wikipedia/en/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg" class="card-img-top" alt="..." height="400px" />
                        <div class="card-body">
                            <h5 class="card-title">Salaar</h5>
                            <a href="#" class="btn btn-primary">Watch Now</a>
                        </div>
                    </div>
                    </div>
                </div>




            </div>

            <br />
            <BottomNav />
        </div>
    )
}

export default Home