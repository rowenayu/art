import xmasParty from '../../assets/images/xmas-party.png'
import art from '../../assets/images/art.png'
import Wrapper from '../../assets/wrappers/ArtContainer'

const AllArt = () => {
  return (
    <Wrapper>
      <div className='container page'>
        <img src={art} alt="art" className="img"/>
        <img src={xmasParty} alt="xmas-party" className="img"/>
      </div>
    </Wrapper>
  )
}

export default AllArt