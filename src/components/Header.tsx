import { useEffect, useState, useMemo, ReactNode } from "react"
import useWindowSize from './resize'

type ClickHandler = (e: React.MouseEvent) => void;
export function Header(): JSX.Element {
  const [toggle, setToggle] = useState(false)
  const [width, height] = useWindowSize()

  let matches = width < 800
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


  return (
    <div className="header">
      <div className="navbar-header ">
        <h1 className="logo">BeatBox</h1>
        {((matches && !toggle) || (toggle && !matches) || matches) && (
          <>
            <div className="navbar-list-href flex ">
              <ul className="nav-list clean-list flex">
                <li>
                  <a href="#" className="decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="decoration-none">
                    Favorites
                  </a>
                </li>
              </ul>
            </div>
            {!matches && (
              <div
                className="header-page-container"
                onClick={onOutSideClick}>
                  
                </div>
            )}
          </>
        )}
        {!matches && (
          <button onClick={toggleMenu} className="btn btn-open-menu">
            <i className="fas fa-bars"></i>
          </button>
        )}
      </div>
    </div>
  )
}
