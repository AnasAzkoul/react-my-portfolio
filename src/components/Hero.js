import profileImg from '../assets/profile-img.jpg'; 

const Hero = () => {
  return (
    <section className='profile-section'>
      <div className="img-container">
        <img src={profileImg} alt="" />
      </div>
      <div className="profile-info">
        <h1>
          <span>Hi,</span>
          <span>I'm Anas,</span>
          <span>Web developer</span>
        </h1>
      </div>
      <button type='button' className='btn profile-btn'>contact me</button>
    </section>        
  )
}

export default Hero; 
