import React from 'react'

const footer = () => {
  return (
    <footer className="section-p1">
        <div className="col">
            <img className="logo" src="../img/logo-2.jpg" alt=""/>
            <h4>Contact</h4>
            <p><strong>Address:</strong> 12345 Example Drive, Street 67, Charlotte</p>
            <p><strong>Phone:</strong> 123-456-7890</p>
            <div className="Follow">
                <h4>Follow us (Social Media Coming Soon)</h4>
                <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest-p"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </div>

        <div className="copyright">
            <p>© 2022, Aryan P etc - PreEatz</p>
        </div>
    </footer>
  )
}

export default footer