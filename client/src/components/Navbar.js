import Wrapper from "../assets/wrappers/Navbar"
import {FaAlignLeft} from 'react-icons/fa'
import Logo from './Logo'
import { useAppContext } from "../context/appContext"
import { SocialIcon } from 'react-social-icons';

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
          <div>
            <SocialIcon url="https://www.linkedin.com/in/rowena-yu-4962b4100/" />
          </div>
        </div>
    </Wrapper>
  )
}

export default Navbar
