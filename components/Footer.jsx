import React from 'react'

const footer = () => {
  return (
    <footer class="section-p1">
        <div class="col">
            <img class="logo" src="../img/logo-2.jpg" alt=""/>
            <h4>Contact</h4>
            <p><strong>Address:</strong> 12345 Example Drive, Street 67, Charlotte</p>
            <p><strong>Phone:</strong> 123-456-7890</p>
            <div class="Follow">
                <h4>Follow us (Social Media Coming Soon)</h4>
                <div class="icon">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-pinterest-p"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
        </div>

        <div class="copyright">
            <p>© 2022, Aryan P etc - PreEatz</p>
        </div>
    </footer>
  )
}

export default footer