import art from '../../assets/images/art.png'
import Wrapper from '../../assets/wrappers/LandingPage'

const Landing = () => {
  return (
    <Wrapper>
        <div className="container page">
            <div className="info">
                <h1>rowena <span>yu</span></h1>
                <p>
                    I’m Rowena, a full-time software developer and an 
                    exploring digital artist. If you would like to get 
                    in contact, feel free to send me an email :)
                </p>
            </div>
            <img src={art} alt="art" className="img main-img"/>
        </div>
    </Wrapper>
  )
}

export default Landing
