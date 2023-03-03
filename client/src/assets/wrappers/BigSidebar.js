import styled from 'styled-components'

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    /* box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1); */
    .sidebar-container {
      background: #fff;
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: 0.3s ease-in-out all;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: #627d98;
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-decoration: none;
      /* text-transform: capitalize; */
      transition: 0.3s ease-in-out all;
    }
    .nav-link:hover {
      background: #f0f4f8;
      padding-left: 3rem;
      color: #9db78f;
    }
    .nav-link:hover .icon {
      color: #9db78f;
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: 0.3s ease-in-out all;
    }
    .active {
      color: #102a43;
    }
    .active .icon {
      color: #0f5132;
    }
  }
`
export default Wrapper
