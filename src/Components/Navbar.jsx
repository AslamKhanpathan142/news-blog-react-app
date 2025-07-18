import React, { useRef, useState } from 'react'

const Navbar = ({setcategory}) => {

  
  const click = useRef(null)
  const click1 = useRef(null)
  const click2 = useRef(null)
  const click3 = useRef(null)
  const click4 = useRef(null)
  const handle = (evt) => {
     
      if(evt.target.innerText == 'Technology') {
        click.current.style.borderBottom = '1px solid white'
        click1.current.style.borderBottom = 'none'
        click2.current.style.borderBottom = 'none'
        click3.current.style.borderBottom = 'none'
        click4.current.style.borderBottom = 'none'
        
      }
      else if (evt.target.innerText == 'Business') {
        click1.current.style.borderBottom = '1px solid white'
        click.current.style.borderBottom = 'none'
        click2.current.style.borderBottom = 'none'
        click3.current.style.borderBottom = 'none'
        click4.current.style.borderBottom = 'none'
      }
      else if (evt.target.innerText == 'Health') {
        click2.current.style.borderBottom = '1px solid white'
        click.current.style.borderBottom = 'none'
        click1.current.style.borderBottom = 'none'
        click3.current.style.borderBottom = 'none'
        click4.current.style.borderBottom = 'none'
       
      }
      else if (evt.target.innerText == 'Sports') {
        click3.current.style.borderBottom = '1px solid white'
        click.current.style.borderBottom = 'none'
        click1.current.style.borderBottom = 'none'
        click2.current.style.borderBottom = 'none'
        click4.current.style.borderBottom = 'none'
        
      }
      else if (evt.target.innerText == 'Entertainment') {
        click4.current.style.borderBottom = '1px solid white'
        click.current.style.borderBottom = 'none'
        click1.current.style.borderBottom = 'none'
        click2.current.style.borderBottom = 'none'
        click3.current.style.borderBottom = 'none'
       
      }
  }

  const values = useRef(null)

  const search = () => {
    
    let show = values.current.value;
    setcategory(show)
    values.current.value = ' ';
    click.current.style.borderBottom = 'none'
    click1.current.style.borderBottom = 'none'
    click2.current.style.borderBottom = 'none'
    click3.current.style.borderBottom = 'none'
     click4.current.style.borderBottom = 'none'
  }

  const [head, sethead] = useState({n1 : 'All News', m2 : 'All type of news here'})

  const Heading = {
    h1 : 'Technology',
    p1 : '"Exploring the latest advancements in AI and how they are reshaping the tech landscape. From smarter devices to enhanced cybersecurity, technology continues to evolve rapidly."',
    h2 : 'Business',
    p2 : '"Insights into current business trends, market shifts, and economic developments. Stay updated on the latest company news, investment opportunities, and financial strategies."',
    h3 : 'Health',
    p3 : '"Focus on the latest health research and wellness tips. Learn about breakthroughs in medicine, fitness advice, and strategies for maintaining a healthy lifestyle."',
    h4 : 'Sports',
    p4 : '"Highlighting recent sports achievements and major events. Discover the latest scores, player stats, and game analyses that keep fans on the edge of their seats."',
    h5 : 'Entertainment',
    p5 : '"Covering the newest releases in film, music, and TV. Get the latest updates on celebrity news, upcoming shows, and reviews of the hottest entertainment trends."',
    }

    

  const technology = () => {
   
    setcategory("technology");
    sethead({
     n1 : Heading.h1,
     m2 : Heading.p1,})
}

  const business = () => {
    
    setcategory("business")
    sethead({
      n1 : Heading.h2,
      m2 : Heading.p2,
    })
  }

  const health = () => {
    setcategory("health")
    sethead({
      n1 : Heading.h3,
      m2 : Heading.p3,
    })
  }

  const sports = () => {
    setcategory("sports")
    sethead({
      n1 : Heading.h4,
      m2 : Heading.p4,
    })
  }

  const entertainment = () => {
    setcategory("entertainment")
    sethead({
      n1 : Heading.h5,
      m2 : Heading.p5
    })
  }
  return (
    <>
   
<header className="p-3 text-bg-dark fixed">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <h3 className="mt-1 me-5">NEWS</h3>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li onClick={handle} ref={click}>
          <div className="nav-link  text-white" onClick={technology}  >Technology</div>
        </li>

        <li  onClick={handle} ref={click1}>
          <div className="nav-link  text-white" onClick={business}>Business</div>
        </li>

        <li onClick={handle} ref={click2}>
          <div className="nav-link text-white" onClick={health}>Health</div>
        </li>

        <li onClick={handle} ref={click3}>
          <div className="nav-link text-white" onClick={sports}>Sports</div>
        </li>

        <li onClick={handle} ref={click4}>
          <div className="nav-link text-white" onClick={entertainment}>Entertainment</div>
        </li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="text" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" ref={values}/>
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2" onClick={search}>Search</button>
         
        </div>
      </div>
    </div>
  </header>
  <div className="top bg-white mb-4">
  <h1 className="text-center">{head.n1}</h1>
  <p className='text-center fs-5'>{head.m2}</p>
  </div>
    </>
  )
}

export default Navbar
