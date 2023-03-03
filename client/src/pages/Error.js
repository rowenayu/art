import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
  return (
    <Wrapper>
        <div>
            <img src={img} alt="not-found" />
            <h3>Oh! Page not found</h3>
            <p>It appears that the page you are searching for cannot be located</p>
            <Link to="/">back home</Link>
        </div>
    </Wrapper>
  )
}

export default Error
