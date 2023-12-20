import React from 'react'
import './about.css'
import ME from '../../assets/photo.jpg'
import { MdWork } from "react-icons/md"
import { HiUsers } from "react-icons/hi"
import { FiAward } from "react-icons/fi"

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About ME</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Img' />
          </div>
        </div>

        <div className='about__content'>
         <div className='about__cards'>
          <article className='about__card'>
          <MdWork className='about__icon' />
            <h5>Experience</h5>
            <small>3 months work Experience</small>
            </article>
            

            <article className='about__card'>
            <HiUsers className='about__icon' />
            <h5>Clients</h5>
            <small>clients</small>
            </article>

            <article className='about__card'>
            <FiAward className='about__icon' />
            <h5>Projects</h5>
            <small>4 projects</small>
            </article>

          </div>

          <p>
          As an enthusiastic IT graduate, my portfolio showcases a solid foundation in programming languages and relevant coursework. I highlight hands-on experiences through impactful projects, emphasizing the technologies employed and achieved results. Committed to continuous learning, I outline specific growth areas, supported by proactive pursuit of courses and certifications. My problem-solving skills, adaptability, and collaborative spirit shine through various team projects.
          </p>

          <a href='#contact' className='btn btn-primary'>'Let's Talk</a>



        </div>
      </div>
      </section>
  )
}

export default about