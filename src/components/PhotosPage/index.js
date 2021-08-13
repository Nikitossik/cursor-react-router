import './style.css';

import photo1 from '../../assets/images/photo1.jpg';
import photo2 from '../../assets/images/photo2.jpg';
import photo3 from '../../assets/images/photo3.jpg';
import photo4 from '../../assets/images/photo4.jpg';


const photos = [
  photo1, photo2, photo3, photo4
];

const PhotosPage = () => (
  <section className='section'>
    <div className='container'>
      <h2 className='section__title'>
        Photos
      </h2>
      <div className='content'>
        <div className='content-row photos-row'>
          {
            photos.map((photo, index) => (
              <div className='photo' key={index}>
                <img className='image' src={photo} alt={''} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </section>
);

export default PhotosPage;