import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer ">
      <div className="footer__wrapper container">
        <div className="footer__info">
          <div className="footer__info-day">
            <div className="footer__col">
              <div className="footer__item">Sunday</div>
              <div className="footer__item">Monday</div>
              <div className="footer__item">Tuesday</div>
              <div className="footer__item">Wednesday</div>
              <div className="footer__item">Friday</div>
              <div className="footer__item">Saturday</div>
            </div>
            <div className="footer__col">
              <div className="footer__item">
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <div className="footer__item">
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <div className="footer__item">
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <div className="footer__item">
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <div className="footer__item">
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <div className="footer__item">
                <i className="fas fa-ellipsis-h"></i>
              </div>
            </div>
            <div className="footer__col footer__col--time">
              <div className="footer__item">Closed</div>
              <div className="footer__item">8.00 - 20.00</div>
              <div className="footer__item">10.00 - 5.00</div>
              <div className="footer__item">12.00 - 9.00</div>
              <div className="footer__item">7.00 - 1.00</div>
              <div className="footer__item">9.00 - 12.00</div>
            </div>
          </div>

          <div className="footer__col ">
            <div className="footer__item address">Address</div>
            <div className="footer__item contact">
              <i className="fas fa-phone-volume"></i>
              <span>+449 888 666 0000</span>
            </div>
            <div className="footer__item contact">
              <i className="fas fa-comment-alt"></i>
              <span>foodg@gmail.com</span>
            </div>
            <div className="footer__item contact">
              <i className="fas fa-city"></i>
              <span>855 Hoi An, Viet Nam</span>
            </div>
            <div className="footer__item icons">
              <i className="fab fa-facebook-square blue" />
              <i className="fab fa-twitter-square light-blue" />
              <i className="fab fa-instagram-square dark-red" />
              <i className="fab fa-youtube-square red" />
            </div>
          </div>
        </div>
        <div className="footer__img">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1864.0568347757392!2d108.34615808661933!3d15.890428922499089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420d9e24aab795%3A0x28e64d847e6eba35!2sHoi%20An%20Golden%20Rice%20Villa!5e0!3m2!1sen!2s!4v1624506959425!5m2!1sen!2s"
            loading="lazy"
            scrolling="auto"
            title="map"
            style={{ border: "0px", width: "100%", height: "100%" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
