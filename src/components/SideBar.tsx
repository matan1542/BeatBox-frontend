import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SideBar() {
    return (
        <div className='management-side-bar-container'>
            <div className='side-bar-navigation-container'>
                <NavLink to="/home"> <img src="imgs/side-bar/home.svg" alt="home" /> Home</NavLink>
                <NavLink to="/search"> <img src="imgs/side-bar/search.svg" alt="search" />Search</NavLink>
                <NavLink to="/library"> <img src="imgs/side-bar/library.svg" alt="library" />Library</NavLink>
            </div>

        </div>
    )
}
