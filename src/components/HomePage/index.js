import homeImg from '../../assets/images/homepage-image.jpg';

import './style.css';

const HomePage = () => (
    <section className='section home'>
      <div className='container'>
        <h2 className='section__title'>Home</h2>
        <div className='content home-content'>
          <div className='content-row'>
            <div className='home__image-box'>
              <img className='home__image' src={homeImg} alt='communication'/>
            </div>
            <div className='home__text-box'>
              <h1 className='home__title'>Check out your profile</h1>
              <h2 className='home__sub-title'>Maybe we have something new for you :{')'}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
);

export default HomePage;