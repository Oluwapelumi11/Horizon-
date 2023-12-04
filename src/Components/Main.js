import React from "react";
import concept from "../assets/travelconcept.png";
import maldives from "../assets/maldives.png";
import thailand from "../assets/thailand.png";
import spain from "../assets/spain.png";
import brazil from "../assets/brazil.png";
import zanzibar from "../assets/zanzibar.png";
import norway from "../assets/norway.png";

function Main() {
  return (
    <div className="main">
      <section className="howitworks">
        <h2>How Does It Work?</h2>

        <div>
          <img src={concept} alt="" />

          <div className="text">
            <p>You're just one click away</p>

            <div className="destination">
              <div className="heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                >
                  <path
                    d="M3.33252 8.44384C3.33252 6.45472 4.12269 4.54706 5.52922 3.14054C6.93574 1.73402 8.84339 0.943848 10.8325 0.943848H37.8325C39.8216 0.943848 41.7293 1.73402 43.1358 3.14054C44.5423 4.54706 45.3325 6.45472 45.3325 8.44384V35.4438C45.3325 37.4329 44.5423 39.3406 43.1358 40.7471C41.7293 42.1536 39.8216 42.9438 37.8325 42.9438H30.0775C29.8536 42.3114 29.4907 41.7373 29.0155 41.2638L27.6955 39.9438H37.8325C39.026 39.9438 40.1706 39.4697 41.0145 38.6258C41.8584 37.7819 42.3325 36.6373 42.3325 35.4438V8.44384C42.3325 7.25036 41.8584 6.10577 41.0145 5.26186C40.1706 4.41795 39.026 3.94384 37.8325 3.94384H10.8325C9.63904 3.94384 8.49445 4.41795 7.65054 5.26186C6.80662 6.10577 6.33252 7.25036 6.33252 8.44384V16.7118C5.27356 17.0866 4.26572 17.5925 3.33252 18.2178V8.44384ZM19.2415 35.7318C20.8313 33.6058 21.5567 30.9566 21.2719 28.3173C20.9871 25.678 19.7132 23.2445 17.7065 21.5066C15.6998 19.7688 13.1093 18.8555 10.4564 18.9506C7.80345 19.0457 5.28501 20.1421 3.4079 22.0192C1.5308 23.8963 0.434364 26.4147 0.339265 29.0677C0.244166 31.7206 1.15746 34.3111 2.89535 36.3177C4.63323 38.3244 7.0667 39.5984 9.70601 39.8832C12.3453 40.168 14.9945 39.4425 17.1205 37.8528L24.7705 45.5028C25.0518 45.7844 25.4334 45.9428 25.8315 45.9431C26.2295 45.9434 26.6114 45.7855 26.893 45.5043C27.1747 45.223 27.3331 44.8414 27.3334 44.4433C27.3336 44.0453 27.1758 43.6634 26.8945 43.3818L19.2415 35.7318ZM10.8325 36.9438C8.84339 36.9438 6.93574 36.1536 5.52922 34.7471C4.12269 33.3406 3.33252 31.4329 3.33252 29.4438C3.33252 27.4547 4.12269 25.547 5.52922 24.1405C6.93574 22.734 8.84339 21.9438 10.8325 21.9438C12.8216 21.9438 14.7293 22.734 16.1358 24.1405C17.5423 25.547 18.3325 27.4547 18.3325 29.4438C18.3325 31.4329 17.5423 33.3406 16.1358 34.7471C14.7293 36.1536 12.8216 36.9438 10.8325 36.9438ZM34.8325 9.94383C34.4347 9.94383 34.0532 10.1019 33.7719 10.3832C33.4906 10.6645 33.3325 11.046 33.3325 11.4438V32.4438C33.3325 32.8416 33.4906 33.2232 33.7719 33.5045C34.0532 33.7858 34.4347 33.9438 34.8325 33.9438C35.2303 33.9438 35.6119 33.7858 35.8932 33.5045C36.1745 33.2232 36.3325 32.8416 36.3325 32.4438V11.4438C36.3325 11.046 36.1745 10.6645 35.8932 10.3832C35.6119 10.1019 35.2303 9.94383 34.8325 9.94383Z"
                    fill="#10BB73"
                  />
                </svg>
                <p>Find Your Destination</p>
              </div>
              <p>
                Adventure is a form of therapy, explore several choices that
                resonates with your soul
              </p>
            </div>

            <section className="steps">
              <div className="step">
                <div className="heading">
                  <div className="number">01</div>
                  <p>Submit Vital Information</p>
                </div>

                <p className="exp">
                  Provide us with neceessary information to tailor travels to
                  your taste.
                </p>
              </div>
              <div className="step">
                <div className="heading">
                  <div className="number">02</div>
                  <p>Plan A Trip</p>
                </div>

                <p className="exp">
                  Zon plans the trip to make it memorable enough for you.
                </p>
              </div>
              <div className="step">
                <div className="heading">
                  <div className="number">03</div>
                  <p>Explore Destinations</p>
                </div>

                <p className="exp">
                  Take the bold step and start planning towards visiting your
                  dream cities in the allocated time
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="locations">
        <h2>Locations to Explore</h2>

        <section className="image-grid">
          <div className="flex-item ">
            <img src={maldives} alt="" />
            <p>Maldives</p>
          </div>
          <div className="flex-item">
            <img src={spain} alt="" />
            <p>Spain</p>
          </div>

          <div className="flex-item">
            <img src={zanzibar} alt="" />
            <p>Zanzibar</p>
          </div>

          <div className="flex-item">
            <img src={thailand} alt="" className="item4" />
            <p>Thailand</p>
          </div>

          <div className="flex-item">
            <img src={brazil} alt="" />
            <p>Brazil</p>
          </div>

          <div className="flex-item">
            <img src={norway} alt="" className="item6" />
            <p>Norway</p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Main;
