import styled from 'styled-components'

const Wrapper = styled.section`
  .page {
    min-height: calc(100vh - 6rem);
    display: grid;
    align-items: center;
    margin-top: -3rem;
    justify-content: center;
  }
  .container {
    width: 90vw;
    max-width: 1120px;
    margin: 0 auto;
  }
  img {
    max-width: 600px;
    display: block;
    margin-top: 20px;
    margin-bottom: 2rem;
  }
`
export default Wrapper
