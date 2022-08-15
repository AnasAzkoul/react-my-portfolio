import profileImg2 from '../assets/profile-img.jpg'; 
import { techStack } from '../utils/constants';
import styled from 'styled-components'; 

const Hero = () => {
  return (
    <HeroContainer>
      <div className="hero-center">
        <h1>Hi, my name is</h1>
        <span className='name'>Anas Azkoul.</span>
        <span>I'm a web developer.</span>
        <p>
          Laboris enim eiusmod anim in nulla fugiat sunt veniam nulla veniam ex dolore ullamco. Minim sit consectetur occaecat sint.
        </p>
        <button className='btn'>Contact Me</button>
      </div>
    </HeroContainer>
  );
}

export default Hero; 

const HeroContainer = styled.section`
  width: 75vw;
  height: 100vh;
  max-width: 75vw;
  padding: 0 15rem;
  margin: 0 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .hero-center {
    display: flex;
    flex-direction: column;
    position: relative;
    top: -8rem;

    h1 {
      font-size: 1.6rem;
      font-weight: 400;
      letter-spacing: 0.2rem;
      color: var(--clr-primary-4);
    }

    .name {
      text-transform: capitalize;
      color: #eeebd0;
    }

    span {
      font-size: 5rem;
      font-weight: 500;
      color: #ccc;
    }
    
    p {
      width: 40rem;
      margin-top: 1.5rem;
      color: var(--clr-primary-6);
    }
  }
`; 
