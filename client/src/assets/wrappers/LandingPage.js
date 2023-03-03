import styled from 'styled-components' 

const Wrapper = styled.section`
.page {
    min-height: calc(100vh - 6rem);
    display: grid;
    align-items: center;
    margin-top: -3rem;
}
.container {
  width: 90vw;
  max-width: 1120px;
  margin: 0 auto;
}
h1 {
    font-weight: 700;
    span {
        color: #fab8e3;
    }
}
p {
    color: #486581;
}
.main-img{
    display: none;
}
@media (min-width:992px) {
    .page {
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;
    }
    .main-img {
        display: block;
        height: auto;
        max-width: 95%;
    }
}
`

export default Wrapper