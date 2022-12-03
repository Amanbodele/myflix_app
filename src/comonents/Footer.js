function Footer() {
    return (
        <div className="footer-container">
            < div className="container my-4 mt-0 mb-1">

                <footer className="text-center text-lg-start" >
                    <div className="container d-flex justify-content-center py-5">

                        <a href="https://www.facebook.com/aman.bodele.18" target="_blank">
                            <button type="button" className="btn btn-primary btn-lg btn-floating mx-2"  >
                                <i className="fab fa-facebook-f"></i>
                            </button>
                        </a>
                        <a href="https://github.com/Amanbodele/" target="_blank">
                            <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
                                <i className="fab fa-github"></i>
                            </button>
                        </a>
                        <a href="https://www.instagram.com/bodele_a_man" target="_blank">
                            <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
                                <i className="fab fa-instagram"></i>
                            </button>
                        </a>

                        <a href="https://www.linkedin.com/in/aman-bodele-3009b3233" target="_blank">
                            <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
                                <i className="fab fa-linkedin"></i>
                            </button>
                        </a>


                    </div>
                    <div className="text-center text-white p-3 copyright">
                        &copy; Copyright 2022 | All Rights Reserved | Design & Managed By Aman Bodele :) |
                        <a className="text-white" href="https://www.google.com" target="_blank"> About Us</a>
                    </div>
                </footer>
            </div>
        </div>
    )
}
export default Footer;