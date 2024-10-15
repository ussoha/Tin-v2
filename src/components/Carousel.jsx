import { Row, Carousel } from "react-bootstrap";
import pizza1 from "../Images/pizza1.jpg";
import pizza2 from "../Images/pizza2.jpg";
import pizza3 from "../Images/pizza3.jpg";
import pizza4 from "../Images/pizza4.jpg";
import pizza5 from "../Images/pizza5.jpg";
import "../styles/styles.scss"; // Đảm bảo file SCSS được nhập đúng cách

const CarouselItem = () => {
  return (
    <Row>
      <Carousel
        interval={3000}    // Thời gian giữa các slide (3 giây)
        slide={true}       // Kích hoạt hiệu ứng slide
        fade={false}       // Tắt hiệu ứng fade để sử dụng slide mượt hơn
        controls={true}    // Hiển thị các nút điều khiển
        touch={true}       // Kích hoạt hỗ trợ thao tác cảm ứng
      >
        <Carousel.Item>
          <img src={pizza1} alt="First slide" className="d-block w-100 carousel-image" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={pizza2} alt="Second slide" className="d-block w-100 carousel-image" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={pizza3} alt="Third slide" className="d-block w-100 carousel-image" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={pizza4} alt="Fourth slide" className="d-block w-100 carousel-image" />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={pizza5} alt="Fifth slide" className="d-block w-100 carousel-image" />
          <Carousel.Caption>
            <h3>Fifth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Row>
  );
};

export default CarouselItem;
