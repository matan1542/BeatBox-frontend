import { useEffect, useState, useMemo, ReactNode } from "react"
import useWindowSize from './resize'

type ClickHandler = (e: React.MouseEvent) => void;
export function Header(): JSX.Element {
  const [toggle, setToggle] = useState(false)
  const [width, height] = useWindowSize()

  let matches = width > 800
  useEffect(() => {
    if (matches && toggle) {
      setToggle(false)
    }
  }, [matches])
  const toggleMenu = () => {
    setToggle(!toggle)
  }
  const onOutSideClick: ClickHandler = (ev) => {
    const target = ev.target as HTMLButtonElement
    if (target.classList.contains("header-page-container")) {
      toggleMenu()
    }
  }
  const clicked: ClickHandler= (ev) => {
    console.log(ev);
    
  }

  return (
    <div className="header">
      <div className="navbar-header ">
          <h1 className="logo">myTeam</h1>
          {/* <button onClick={clicked}>Click me</button> */}
          {/* {((matches && !toggle )||( toggle && !matches) || matches)&&
          
          <div className={`navbar-list-href flex `}>
          <ul className="nav-list clean-list flex">
            <li>home</li>
            <li>about</li>
          </ul>
          </div>}
          {!matches && <button onClick={toggleMenu} className="btn btn-open-menu"><i className="fas fa-bars"></i></button>} */}
      </div>
    </div>
  );
}

/* <div className="nav-right-side">
          <button className="contact-btn">Contact us</button>
        </div> */