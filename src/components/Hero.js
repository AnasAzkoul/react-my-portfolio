import profileImg2 from '../assets/profile-img.jpg'; 
import { techStack } from '../utils/constants';
import styled from 'styled-components'; 

const Hero = () => {
  return (
    <>
      <Wrapper>
        <div className='section-center'>
          <div className='img-container'>
            <img src={profileImg2} alt='' />
          </div>
          <div className='info-container'>
            <h1 className='profile-info'>
              <span>Hi,</span>
              <span>I'm Anas,</span>
              <span>a Web developer</span>
            </h1>
            <button type='button' className='btn profile-btn'>
              contact me
            </button>
          </div>
        </div>
      </Wrapper>
      <TechStackContainer>
        {techStack.map((item, index) => {
          const { id, text, logo, style } = item;
          return (
            <li key={id}>
              <span className='logo' style={style}>
                {logo}
              </span>
              <span className='name'> {text}</span>
            </li>
          );
        })}
      </TechStackContainer>
    </>
  );
}

export default Hero; 

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  .img-container {
    width: 20rem;
    height: 20rem;
    position: relative;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 50%;
      object-fit: cover;
      position: relative;
      animation: fade-in ease 5s;
    }
  }

  .info-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* padding-bottom: 5rem; */
  }

  .profile-info {
    /* margin-top: 5rem; */
    text-align: left;
    font-size: 2.4rem;
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    animation: moveFromLeft 2s ease-out;
  }

  .profile-btn {
    margin-top: 3.5rem;
    animation: moveFromBottom 2s ease-out;
  }
  
  @media screen and (min-width: 800px) {
    margin: 3rem auto;
    flex-direction: row;
    justify-content: center;

    .section-center {
      display: flex;
    }

    .img-container {
      margin-right: 5rem;
    }
  }
`; 


const TechStackContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 60rem;
  margin: 0rem auto;
  font-size: 1.2rem;
  list-style-type: none;

  li {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    text-transform: uppercase;
  }

  li .logo {
    font-size: 2.5rem;
  }
`; 
