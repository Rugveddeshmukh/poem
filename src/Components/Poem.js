import React from "react";
import { FaInstagram } from "react-icons/fa";
import logo1 from "../Assest/img1.PNG";
import logo2 from "../Assest/img2.PNG";
import logo3 from "../Assest/img3.PNG";
import logo4 from "../Assest/img4.PNG";
import logo5 from "../Assest/img5.PNG";
import logo6 from "../Assest/img6.PNG";
import logo7 from "../Assest/img7.PNG";
import logo8 from "../Assest/img8.PNG";
import logo9 from "../Assest/img9.PNG";
import logo10 from "../Assest/img10.PNG";
import logo11 from "../Assest/img11.PNG";
import logo12 from "../Assest/img12.PNG";
import logo13 from "../Assest/img13.PNG";
import logo14 from "../Assest/img14.PNG";
import logo15 from "../Assest/img15.PNG";
import logo16 from "../Assest/img16.PNG";
import logo17 from "../Assest/img17.PNG";
import logo18 from "../Assest/img18.PNG";
import logo19 from "../Assest/img19.PNG";
import logo20 from "../Assest/img20.PNG";
import logo21 from "../Assest/img21.PNG";
import logo22 from "../Assest/img22.PNG";
import logo23 from "../Assest/img23.PNG";
import logo24 from "../Assest/img24.PNG";
import logo25 from "../Assest/img25.PNG";
import logo26 from "../Assest/img26.PNG";
import logo27 from "../Assest/img27.PNG";
import logo28 from "../Assest/img28.PNG";
import logo29 from "../Assest/img29.PNG";
import logo30 from "../Assest/img30.PNG";
import logo31 from "../Assest/img31.PNG";
import logo32 from "../Assest/img32.PNG";
import logo33 from "../Assest/img33.PNG";
import logo34 from "../Assest/img34.PNG";
import logo35 from "../Assest/img35.PNG";
import logo36 from "../Assest/img36.PNG";
import logo37 from "../Assest/img37.PNG";
import logo38 from "../Assest/img38.PNG";
import logo39 from "../Assest/img39.PNG";



import banner from "../Assest/banner.jpg";

function App() {
  const containerStyle = {
    fontFamily: "Georgia, serif",
    backgroundColor: "#f2f2f2",
    padding: "0px",
    textAlign: "center",
    minHeight: "100vh",
  };

  const titleStyle = {
    fontSize: "36px",
    color: "#000",
    margin: 0,
  };

  const instagramWrapperStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    fontWeight: "bold",
    fontSize: "20px",
    cursor: "pointer",
    background: "linear-gradient(45deg, #fff8ba, #f58529, #dd2a7b, #8134af, #515bd4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const gridContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px",
  };

  const boxStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "250px",
    boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  };

  const bannerWrapperStyle = {
    position: "relative",
    width: "100%",
    height: "400px",
    marginBottom: "30px",
    borderRadius: "2px",
    overflow: "hidden",
  };

  const bannerImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const bannerTextOverlayStyle = {
    position: "absolute",
    top: "50%",
    left: "15%",
    transform: "translateY(-50%)", 
    textAlign: "left",
  };

  return (
    <div style={containerStyle}>
      <div style={bannerWrapperStyle}>
        <img src={banner} alt="Word Addict18 Banner" style={bannerImageStyle} />
        <div style={bannerTextOverlayStyle}>
        <h2 style={{ ...titleStyle, marginBottom: "5px",fontSize:"24px" }}>मराठी कविता</h2>
          <h1 style={titleStyle}>Word addict18</h1>
          <a
            href="https://www.instagram.com/word.addict18/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div style={instagramWrapperStyle}>
              <FaInstagram />
              word.addict18
            </div>
          </a>
        </div>
      </div>

      <div style={gridContainerStyle}>
        <div style={boxStyle}>
          <img src={logo1} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo2} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo3} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo4} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo5} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo6} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo7} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo8} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo9} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo10} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo11} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo12} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo13} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo14} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo15} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo16} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo17} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo18} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo19} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo20} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo21} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo22} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo23} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo24} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo25} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo26} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo27} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo28} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo29} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo30} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo31} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo32} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo33} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo34} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo35} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo36} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo37} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo38} alt="" style={imageStyle} />
        </div>
        <div style={boxStyle}>
          <img src={logo39} alt="" style={imageStyle} />
        </div>
        </div>
      </div>
    
  );
}

export default App;
