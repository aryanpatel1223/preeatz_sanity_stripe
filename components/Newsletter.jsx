import React from 'react'

const newsletter = () => {
  return (
    <section id="newsletter" class="section-p1 section-m1">
        <div class="newstext">
            <h4>Sign Up For Our Weekly Newsletters</h4>
            <p>Get Weekly Emails about our <span>latest offers or new items</span> that we will be bringing</p>

        </div>
        <div class="form">
            <input type="text" placeholder="Your Email"/>
            <button class="normal">Sign Up</button>
        </div>
    </section>

  )
}

export default newsletter