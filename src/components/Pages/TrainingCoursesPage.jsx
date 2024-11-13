import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { pageTitle } from "../../helper";
import Div from "../Div";
import PageHeading from "../PageHeading";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import api from "../../utils/api";
import Hero41 from "../Hero/Hero41";
import Cta from "../Cta";
import PageHeading2 from "../PageHeading/PageHeading2";
import CoursesList from "../PricingTable/CoursesList";
import SideMenuWidget from "../Widget/SideMenuWidget";
import CustomDelayAnimation from "../framer/CustomDelayAnimation";
import PageHeading3 from "../PageHeading/PageHeading3";
import Portfolio8 from "../Portfolio/Portfolio8";
import ContactInfoWidget2 from "../Widget/ContactInfoWidget2";
import Cta3 from "../Cta/Cta3";

export default function TrainingCoursesPage() {
  pageTitle("Contact Us");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  ////////////////////////////usestates
  const [errors, setErrors] = useState({});
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [mobile, setMobile] = useState();
  const [message, setMessage] = useState("");

  ///functions
  //form validation function
  const validateForm = () => {
    let errors = {};
    if (!fullName?.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!email?.trim()) {
      errors.email = "Email is required";
    }
    if (!qualification?.trim()) {
      errors.qualification = "Qualification type is required";
    }
    if (!mobile?.trim()) {
      errors.mobile = "Mobile is required";
    }
    if (!message?.trim()) {
      errors.message = "Message is required";
    }
    setErrors(errors);
    return errors;
  };

  //clearform
  const clearForm = () => {
    setFullName("");
    setEmail("");
    setQualification("");
    setMobile("");
    setMessage("");
  };

  //sendmessage
  const handleClickSend = async (e) => {
    e.preventDefault();
    let data = {
      fullName,
      email,
      qualification,
      mobile,
      message,
    };
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    try {
      await api.post("/contactform", data);
      clearForm();
    } catch (error) {
      console.log("error", error);
    }
  };
  const heroSocialLinks = [
    {
      name: "Behance",
      links: "/",
    },
    {
      name: "Twitter",
      links: "/",
    },
  ];
  const showcaseData = [
    {
      title: "IACM",
      subtitle: "Idealign Academy For Construction Management",
      imgUrl: "/images//training/const.jpg",
      href: "/case-study/case-study-details",
    },
    {
      title: "Construction Project <br/>Management Program",
      subtitle: "Construction Management Training",
      imgUrl: "/images//training/const2.jpg",
      href: "/case-study/case-study-details",
    },
  ];

  return (
    <>
      <PageHeading3
        title="IACM"
        bgSrc="/images/training/course2.webp"
        pageLinkText="Idealign Academy For Construction Management"
      />

      <Spacing lg="90" md="60" />
      <Div className="container">
        <Div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Div className="col-xl-5 col-lg-6">
            <CustomDelayAnimation delayInSec={0.3} durInSec={1}>
              <SectionHeading title="Why IACM?" subtitle="">
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                  When you complete this program, you will have acquired a
                  unique combination of construction and project management
                  skills along with necessary tools to stay ahead the curve in
                  the industry.
                </p>
                <Spacing lg="30" md="30" />
                <p className="cs-m0">
                  This 3- part program will cover major facets of construction
                  management including project engineering, planning &
                  scheduling and cost estimating & control.
                </p>
                <Spacing lg="30" md="30" />
                {/* <Div className="cs-separator cs-accent_bg"></Div> */}
                <Spacing lg="25" md="40" />
              </SectionHeading>
            </CustomDelayAnimation>
          </Div>
          <Div className="col-lg-6 ">
            <CustomDelayAnimation delayInSec={0.3} durInSec={1}>
              <img
                src="/images/training/const2.jpg"
                style={{ width: "100%" }}
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </CustomDelayAnimation>
          </Div>
        </Div>
      </Div>
      <Spacing lg="90" md="60" />
      <Div className="container">
        <Div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Div className="col-lg-6 ">
            <CustomDelayAnimation delayInSec={0.3} durInSec={1}>
              <img
                src="/images/training/course1.webp"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </CustomDelayAnimation>
          </Div>
          <Div className="col-xl-5 col-lg-6">
            <CustomDelayAnimation delayInSec={0.3} durInSec={1}>
              <SectionHeading
                title="Construction Project Management Program"
                subtitle=""
              >
                <SideMenuWidget
                  title={""}
                  data={[
                    {
                      title: "Certified Instituition with Accrediated Programs",
                      url: "",
                    },
                    {
                      title: "Tailor made professional Courses",
                      url: "",
                    },
                    {
                      title:
                        "Suitable for Students, Graduates and Working Professionals in Construction Industry",
                      url: "",
                    },
                  ]}
                />
                <Spacing lg="20" md="20" />
                {/* <Div className="cs-separator cs-accent_bg"></Div> */}
              </SectionHeading>
            </CustomDelayAnimation>
          </Div>
        </Div>
      </Div>

      <Spacing lg="90" md="60" />
      <Div className="container">
        <Div className="contianer">
          <CustomDelayAnimation delayInSec={0.3} durInSec={1}>
            <SectionHeading
              title="Our Courses"
              subtitle=""
              variant="cs-style1 text-center"
            />
            <Spacing lg="55" md="30" />
          </CustomDelayAnimation>
          <CoursesList />
          {/* {portfolioData?.map((item, index) => (
            <Div key={index}>
              <Portfolio8
                title={item.projectName}
                subtitle={item.shortDesc}
                imageUrl={`${Constants.imagebase}${item?.mainImage}`}
              />
              <Spacing lg="100" md="70" />
            </Div>
          ))} */}
        </Div>
      </Div>
      <Spacing lg="90" md="60" />
      <Hero41
        title="Course Deliverables"
        subtitle="Idealign Academy For Construction Management"
        scrollDownId="#service"
        socialLinksHeading=" "
        heroSocialLinks={heroSocialLinks}
        phoneNumber="+044 546664"
        email="info@arino.com"
      />
      <Spacing lg="90" md="60" />
      <Div className="container">
        <Cta3
          title="Build your career<br />with IACM"
          btnText="Enroll Now"
          btnLink="https://iacm.in/"
          bgSrc="/images/6.jpg"
        />
      </Div>
      {/* <Spacing lg="90" md="60" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Let's build your<br/>journey together"
              subtitle=""
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget2 withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form action="#" className="row">
              <Div className="col-sm-6">
                <label className="cs-black_color">Full Name*</label>
                <input
                  onChange={(e) => {
                    setErrors({ ...errors, fullName: "" });
                    setFullName(e.target.value);
                  }}
                  type="text"
                  className="cs-form_field"
                />
                {errors.fullName ? (
                  <p className="form_err_msg">{errors.fullName}</p>
                ) : (
                  ""
                )}
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-black_color">Email*</label>
                <input
                  onChange={(e) => {
                    setErrors({ ...errors, email: "" });
                    setEmail(e.target.value);
                  }}
                  type="text"
                  className="cs-form_field"
                />
                {errors.email ? (
                  <p className="form_err_msg">{errors.email}</p>
                ) : (
                  ""
                )}
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-black_color">Mobile*</label>
                <input
                  onChange={(e) => {
                    setErrors({ ...errors, mobile: "" });
                    setMobile(e.target.value);
                  }}
                  type="text"
                  className="cs-form_field"
                />
                {errors.mobile ? (
                  <p className="form_err_msg">{errors.mobile}</p>
                ) : (
                  ""
                )}
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-black_color">Your Qualification*</label>
                <input
                  onChange={(e) => {
                    setErrors({ ...errors, qualification: "" });
                    setQualification(e.target.value);
                  }}
                  type="text"
                  className="cs-form_field"
                />
                {errors.qualification ? (
                  <p className="form_err_msg">{errors.qualification}</p>
                ) : (
                  ""
                )}
                <Spacing lg="20" md="20" />
              </Div>

              <Div className="col-sm-12">
                <label className="cs-black_color">Message*</label>
                <textarea
                  onChange={(e) => {
                    setErrors({ ...errors, message: "" });
                    setMessage(e.target.value);
                  }}
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                ></textarea>
                {errors.message ? (
                  <p className="form_err_msg">{errors.message}</p>
                ) : (
                  ""
                )}
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button onClick={handleClickSend} className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
          </Div>
        </Div>
      </Div> */}
      <Spacing lg="90" md="60" />
    </>
  );
}
