import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { Carousel } from "react-responsive-carousel";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfileCar() {
  const navigate = useNavigate();
  const [details, setDetails] = useState();
  const [name, setName] = useState();
  const [images, setImages] = useState([]);
  const [specs, setSpecs] = useState({});

  //checking if user is logged in
  useEffect(() => {
    fetch("/isLoggedIn")
      .then((response) => response.json())
      .then((logged) => {
        if (logged.status === false) {
          navigate("/login-password/email/password");
        }
      });
  }, []);

  //recieving data from backend
  useEffect(() => {
    fetch("/details")
      .then((response) => response.json())
      .then((dataa) => {
        console.log(dataa);
        setName(dataa.name);
        setDetails(dataa.details);
        setImages(dataa.details.links);
        setSpecs(dataa.details.specs);
      });
  }, []);

  //sending singout status to backend
  let submit = async (e) => {
    e.preventDefault();
    navigate("/");
    await fetch("/signout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: false }),
    });
  };

  return (
    <div className="customMainBody">
      <Header />
      <div className="underHeader"></div>
      <div className="profileBody">
        <div className="profileDiv">
          <h1 className="roboto profileWelcome">
            Welcome, {name}{" "}
            <span
              onClick={submit}
              style={{ float: "right", paddingRight: "10px", cursor: "pointer", height: "25px" }}
            >
              Sign Out
            </span>{" "}
            <hr></hr>
          </h1>
          <div className="profileSecondDiv">
            <div style={{ display: "flex", gap: "20px", minWidth: "200px", minHeight: "70px" }}>
              <Button id="profileAnchorStyle" text="My profile" href="/profile" />
              <Button id="profileAnchorStyle" text="My configuration" href="/my-vehicle" />
            </div>

            {details
              ? details.map((detail, index) => (
                  <div  key={index} className="myvehicleDescritpionDiv">
                    <div className="myvehicleImageDiv">
                      <Carousel
                        showStatus={false}
                        emulateTouch={false}
                        showArrows={true}
                        showThumbs={false}
                      >
                        {detail
                          ? detail.links.map((image, index) => (
                              <div key={image} className="myvehicleImageDiv">
                                <img className="myvehicleImg" src={image} />
                              </div>
                            ))
                          : null}
                      </Carousel>
                    </div>
                    <div className="myvehicleFlex2">
                      <div
                        className="profileMarginBottom"
                        style={{ backgroundColor: "#DADBDD", borderRadius: "20px" }}
                      >
                        <div className="myvehicleContent myvehicleContentPrice">
                          <p className="roboto myvehicleTitle">
                            {" "}
                            {detail.title ? detail.title : null}
                          </p>
                          <p className="roboto myvehiclePrice">
                            Paid {detail.price ? detail.price : null} incl. VAT
                          </p>
                        </div>
                        <div className="myvehicleContent">
                          <div className="myvehicleFlex">
                            <div className="myvehicleCarDetails">
                              <p className="roboto myvehicleNr">
                                {detail.specs ? detail.specs.ps : null}
                                <span className="myvehicleSpan">PS</span>
                              </p>
                              <p className="roboto myvehicleSpan">Power (PS)</p>
                            </div>
                            <div className="myvehicleCarDetails">
                              <p className="roboto myvehicleNr">
                                {detail.specs ? detail.specs.acceleration : null}
                                <span className="myvehicleSpan">secs</span>
                              </p>
                              <p className="roboto myvehicleSpan">
                                Acceleration 0-62 mph (0-100 km/h)
                              </p>
                            </div>
                            <div className="myvehicleCarDetails">
                              <p className="roboto myvehicleNr">
                                {detail.specs ? detail.specs.speed : null}
                                <span className="myvehicleSpan">mph</span>
                              </p>
                              <p className="roboto myvehicleSpan">Top speed</p>
                            </div>
                          </div>
                          <div className="myvehicleCarDetails2">
                            <p className="myvehicleSpan">
                              {detail.specs ? detail.specs.emissions : null} Electric consumption{" "}
                              {detail.specs ? detail.specs.kw : null}kW
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

//<p className="roboto modelStart_p_consumption">Electrical consumption combined (model range): 19.7 - 16.7 kWh/100 km, CO2 emissions combined* (model range): 0 g/km</p>
export default ProfileCar;
