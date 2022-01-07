import React from 'react'
import classes from './Hero.module.css'
const Hero = () => {
    return (
        <section className={classes.heroContainer}>
  <div className={classes.heroHeader}>
    <h1>Social Connection with Developer</h1>
    <h2>Boost network and productivity with the ultimate knowlegde and sharing experience between them that love and IT admins trust.</h2>
    <div className={classes.heroFooter}>
      <a href="#">Try free for 30 days</a>
      <span>or <a href="/signup">Sign up</a></span>
    </div>
  </div>
</section>
    )
}

export default Hero;
