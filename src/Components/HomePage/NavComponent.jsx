import React, { useState } from 'react'
import NavComp1 from './NavComp1'
import NavComp2 from './NavComp2'

const NavComponent = () => {

  const [toggleNavMenu, setToggleNavMenu] = useState(false)

  const onToggle = () => {
    setToggleNavMenu(!toggleNavMenu)
  }

  return (
    <>
      <div className='Navbar__Div'>
        <NavComp1 />
        <NavComp2 />
        <div className='Navbar__Div__Hamburger'>
          <button onClick={()=>onToggle()}>
            <i className="fa fa-align-justify"></i>
          </button>
          {
            toggleNavMenu && (
              <div className='toggledropdown'>
                <ul>
                  <li><a
                    href="#"
                    
                  >
                    AI Powered
                  </a></li>
                  <li

                  >
                    <a
                      href="#"
                      
                    >
                      Advisory Board
                    </a>
                  </li>
                  <li><a
                    href="#"
                    
                  >
                    Patents
                  </a></li>
                  <li><a
                    href="#"
                  >
                    Concept Based
                  </a></li>
                </ul>
                <div className='dropdown-btns'>
                <button>
                  Singup
                </button>
                <button>Login</button>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default NavComponent
