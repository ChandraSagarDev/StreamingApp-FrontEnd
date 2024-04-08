import React from 'react'

const BottomNav = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><nav class="nav flex-column">
                        <a class="nav-link" href="#">Help Centre</a>
                        <a class="nav-link" href="#">Jobs</a>
                        <a class="nav-link" href="#">Privacy</a>
                        <a class="nav-link" href="">Corporate Information</a>
                    </nav>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><nav class="nav flex-column">
                        <a class="nav-link" href="#">Media Centre</a>
                        <a class="nav-link" href="#">Terms of Use</a>
                        <a class="nav-link" href="#">Contact Us</a>
                        <a class="nav-link">Cookie Preferences</a>
                    </nav>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BottomNav