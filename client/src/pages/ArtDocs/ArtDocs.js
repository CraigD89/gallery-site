import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import "./ArtDocs.css";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import pdf1 from "../../pdf/AJPR.pdf";
import pdf2 from "../../pdf/AJChecklist.pdf";
import pdf3 from "../../pdf/LKPR.pdf";
import pdf4 from "../../pdf/LKChecklist.pdf";

class ArtDocs extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={0} className="docs">
          <Grid item xs={12} md={12}>
            <div>
              <h2>DOCUMENTATION</h2>
              <div className="docList">
                <div>
                  <a href={pdf1}>AMALIE JAKOBSEN - PROOON - PRESS RELEASE</a>
                </div>
                <div>
                  <a href={pdf2}>
                    AMALIE JAKOBSEN - PROOON - CHECKLIST
                  </a>
                </div>
                <div>
                  <a href={pdf3}>
                    LISA KIRK - HAPPINESS IS AN INSIDE JOB - PRESS RELEASE
                  </a>
                </div>
                <div>
                  <a href={pdf4}>
                    LISA KIRK - HAPPINESS IS AN INSIDE JOB - CHECKLIST
                  </a>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ArtDocs;
