import { galleryImages } from '../../constants/data';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
        <h2 className="section_title">Gallery</h2>
        <div className="section_container">
            <div className="gallery_container">
                {galleryImages?.map((data, index) => <div className="gallery_items" key={index} >
                    <img src={data} alt="Gallery Image" />
                </div>)}
            </div>
        </div>
    </section>
  );
};

export default Gallery;