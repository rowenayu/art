import Wrapper from "../assets/wrappers/Navbar"
import {FaAlignLeft} from 'react-icons/fa'
import Logo from './Logo'
import { useAppContext } from "../context/appContext"

const Navbar = () => {
  const {toggleSidebar} = useAppContext()
  return (
    <Wrapper>
        <div className="nav-center">
          <button className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignLeft/>
          </button>
          <div>
            <Logo/>
          </div>
        </div>
    </Wrapper>
  )
}

export default Navbar
