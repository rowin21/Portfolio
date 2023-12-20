import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/udemy.png'
import IMG2 from '../../assets/library.jpg'
import IMG3 from '../../assets/contacts.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="img not found" />
          </div>
          <h3>Udemy Clone</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/rowin21/Edemy-UdemyClone#register-page" className='btn btn-primary'>Github</a>
         </div>

        </article>
      </div>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="img not found" />
          </div>
          <h3>Library Management</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/rowin21/Library_Management_System_BCA?tab=readme-ov-file#admin-side-software'className='btn btn-primary'>Github</a>
          </div>
        </article>
        </div>

        <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="img not found" />
          </div>
          <h3>Contact Application</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/rowin21/Contacts_app'className='btn btn-primary'>Github</a>
          </div>
        </article>
        </div>
 
    

      </section>
  )
}

export default Portfolio