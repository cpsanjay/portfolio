import React from "react";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <div className="cta">
      <div className="hire">HIRE</div>
      <div className="cta-main">
        <div className="cta-main">
          <p>
            I'm always interested <br />
            about cool stuff. <br />
            Are you minding a project?
            <p className="cta-btn">
              <a href="mailto:cpsanjay1999@gmail.com">Let’s Talk.</a>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
