import React, { useState } from "react";
import Navbar from "../layout/navbar";
import "./home.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../layout/footer";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color: "#353535",
    fontSize: "17px",
  },
}));
export default function Index() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <div className="appPadding home-hero">
        <Navbar />
        <div className="heroTextHome">
          <Slide bottom>
            <h1>Endless entertainment</h1>
          </Slide>
          <Slide bottom>
            <h2>
              Unlimited movies, TV shows, and more. <br />
              Watch anywhere. Cancel anytime.
            </h2>
          </Slide>

          <Slide bottom>
            <button onClick={() => (window.location.href = "#Subscribe")}>
              Subscribe
            </button>
          </Slide>
        </div>
      </div>

      <div className="plans " id="Subscribe">
        <div className="planCrad">
          <div className="planName">
            <h2>AMC Basic</h2>
            <p>
              Stream or download series, movies, AMC Originals & kids’ shows.
            </p>
          </div>

          <div className="planFee">
            <p>
              <span>₦1200</span>
            </p>
          </div>

          <div className="pickplanbtn">
            <button>Subscribe</button>
          </div>
        </div>
        <div className="planCrad">
          <div className="planName">
            <h2>AMC Gold</h2>
            <p>
              Stream or download series, movies, AMC Originals & kids’ shows.
            </p>
          </div>

          <div className="planFee">
            <p>
              <span>₦1200</span>
            </p>
          </div>

          <div className="pickplanbtn">
            <button>Subscribe</button>
          </div>
        </div>
        <div className="planCrad">
          <div className="planName">
            <h2>AMC Max</h2>
            <p>
              Stream or download series, movies, AMC Originals & kids’ shows.
            </p>
          </div>

          <div className="planFee">
            <p>
              <span>₦1200</span>
            </p>
          </div>

          <div className="pickplanbtn">
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="ourFeatures">
        <Bounce left>
          <div className="col1 col1WithText">
            <h2>Any device. Anywhere.</h2>
            <p>
              Watch on 2 devices at the same time. Register up to 5 devices.
            </p>
          </div>
        </Bounce>

        <Bounce right>
          <div className="col2 col1WithImg">
            <img src="./images/sampleF.png" alt="" />
          </div>
        </Bounce>
        <Bounce right>
          <div className="col3 col1WithText">
            <h2>Any device. Anywhere.</h2>
            <p>
              Watch on 2 devices at the same time. Register up to 5 devices.
            </p>
          </div>
        </Bounce>

        <Bounce left>
          <div className="col4 col1WithImg">
            <img src="./images/sampleF.png" alt="" />
          </div>
        </Bounce>

        <Bounce left>
          <div className="col5 col1WithText">
            <h2>Any device. Anywhere.</h2>
            <p>
              Watch on 2 devices at the same time. Register up to 5 devices.
            </p>
          </div>
        </Bounce>

        <Bounce right>
          <div className="col6 col1WithImg">
            <img src="./images/sampleF.png" alt="" />
          </div>
        </Bounce>
      </div>

      <div className="accordWrap">
        <h2 className="faqHeader">FAQ</h2>
        <div className="ds4-accord-wrap appPadding">
          <div className={classes.root}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              style={{ padding: "7px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>
                  Can I set my own schedule?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We currently run a robust 24hr schedule able to accommodate
                  every doctor with a scheduled amount of time to be on shift
                  with other doctors scheduled at that time. However, doctors
                  can set their own schedule for appointments by filling the
                  time slots they will be available to take appointments from
                  past or new users on their Tremendoc app.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              style={{ padding: "7px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className={classes.heading}>
                  Do I need to accept every patient or client?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  When on shift, we expect that doctors attend to as many
                  patients as they can. If currently on a consultation, incoming
                  consultations will not be routed to your application until you
                  are finished with the patient and back online for new patients
                  to access you.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              style={{ padding: "7px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={classes.heading}>
                  What do I need to sign up successfully?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  To sign up as a doctor on Tremendoc, kindly refer to these
                  steps: - On the homepage of the website, select sign up -
                  Select sign up as a doctor - Register all required details and
                  submit - Submit required documents and a representative from
                  recruitments will reach out to you.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              style={{ padding: "7px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={classes.heading}>
                  What do I need to sign up successfully?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  To sign up as a doctor on Tremendoc, kindly refer to these
                  steps: - On the homepage of the website, select sign up -
                  Select sign up as a doctor - Register all required details and
                  submit - Submit required documents and a representative from
                  recruitments will reach out to you.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              style={{ padding: "7px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={classes.heading}>
                  What do I need to sign up successfully?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  To sign up as a doctor on Tremendoc, kindly refer to these
                  steps: - On the homepage of the website, select sign up -
                  Select sign up as a doctor - Register all required details and
                  submit - Submit required documents and a representative from
                  recruitments will reach out to you.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              style={{ padding: "7px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={classes.heading}>
                  What do I need to sign up successfully?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  To sign up as a doctor on Tremendoc, kindly refer to these
                  steps: - On the homepage of the website, select sign up -
                  Select sign up as a doctor - Register all required details and
                  submit - Submit required documents and a representative from
                  recruitments will reach out to you.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}
