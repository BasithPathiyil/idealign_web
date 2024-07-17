import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { pageTitle } from "../../helper";
import Div from "../Div";
import PageHeading from "../PageHeading";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import api from "../../utils/api";
import Hero from "../Hero";
import Hero4 from "../Hero/Hero4";
import Hero6 from "../Hero/Hero6";
import CoursesCard from "../TrainingCourses/CoursesCard";
import Hero41 from "../Hero/Hero41";

export default function TrainingCoursesPage() {
  pageTitle("Contact Us");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  ////////////////////////////usestates
  const [errors, setErrors] = useState({});
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
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
    if (!project?.trim()) {
      errors.project = "Project type is required";
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
    setProject("");
    setMobile("");
    setMessage("");
  };

  //sendmessage
  const handleClickSend = async (e) => {
    e.preventDefault();
    let data = {
      fullName,
      email,
      project,
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
      subtitle: "Idealign Academy For Construction Mangement",
      imgUrl: "/images//training/const.jpg",
      href: "/case-study/case-study-details",
    },
    {
      title: "Construction Project <br/>Management Program",
      subtitle: "Construction Management Training",
      imgUrl: "/images//training/const2.jpg",
      href: "/case-study/case-study-details",
    },
    // {
    //   title: "Think reality <br/>do positive",
    //   imgUrl: "/images/slider_3.jpeg",
    //   href: "/case-study/case-study-details",
    // },
    // {
    //   title: "Think reality <br/>do positive",
    //   imgUrl: "/images/slider_4.jpeg",
    //   href: "/case-study/case-study-details",
    // },
  ];
  const teamData = [
    {
      memberImage: "/images/services/designengineering.jpg",
      memberName: "Introduction To Construction Management",
      memberDesignation: "Introduction To Construction Management content",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/",
      },
    },
    {
      memberImage: "/images/services/projectcontrol.jpg",
      memberName: "Quantity Surveying",
      memberDesignation:
        "Quantity Surveying is primarily centered on management of costs and budgets of construction projects.",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/",
      },
    },
    {
      memberImage: "/images/services/costmanagement.jpg",
      memberName: "Project Engineering",
      memberDesignation:
        "This program is aimed to train the emerging graduates with the latest and best tools, techniques",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/",
      },
    },
    {
      memberImage: "/images/services/claimmanagement.jpg",
      memberName: "Planning and Scheduling",
      memberDesignation:
        "Planning a project is 20% software application & 80% implementing proper planning & scheduling techniques.",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/",
      },
    },
  ];

  return (
    <>
      {/* <PageHeading
        title="Contact Us"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Contact"
      /> */}
      {/* <Hero
        title="Let's Align <br/> Your Ideas"
        subtitle="Our efficient team of consultants, designers, architects, engineers and project managers help to achieve your goals. Together we can align your ideas."
        btnText="Get a Quote"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/bgImg1.jpeg"
      /> */}
      {/* <Hero4
        title="IACM"
        subtitle="Idealign Academy For Construction Mangement"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        phoneNumber="+044 546664"
        email="info@arino.com"
      /> */}
      <Hero6
        heroSocialLinks={heroSocialLinks}
        socialLinksHeading="Follow Us"
        showcaseData={showcaseData}
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading title="Why IACM?" subtitle="">
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                When you complete this program, you will have acquired a unique
                combination of construction and project management skills along
                with necessary tools to stay ahead the curve in the industry.
              </p>
              <Spacing lg="30" md="30" />
              <p className="cs-m0">
                This 3- part program will cover major facets of construction
                management including project engineering, planning & scheduling
                and cost estimating & control.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/about_img_1.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <img
              src="/images/about_img_2.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <img
              src="/images/about_img_3.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <SectionHeading
          title="OUR COURSES"
          subtitle=""
          variant="cs-style1 text-center"
        />
        <Spacing lg="55" md="30" />
        <Div className="row">
          {teamData.map((item, index) => (
            <Div className="col-lg-3" key={index}>
              <CoursesCard
                memberImage={item.memberImage}
                memberName={item.memberName}
                memberDesignation={item.memberDesignation}
                // memberSocial={item.memberSocial}
                memberSocial={{}}
              />
            </Div>
          ))}
        </Div>
      </Div>
      <Hero41
        title="Course Deliverables"
        subtitle="Idealign Academy For Construction Mangement"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        phoneNumber="+044 546664"
        email="info@arino.com"
      />
      {/* <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Do you have a project <br/>in your mind?"
              subtitle="Getting Touch"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
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
                <label className="cs-black_color">Project Type*</label>
                <input
                  onChange={(e) => {
                    setErrors({ ...errors, project: "" });
                    setProject(e.target.value);
                  }}
                  type="text"
                  className="cs-form_field"
                />
                {errors.project ? (
                  <p className="form_err_msg">{errors.project}</p>
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
      {/* <Spacing lg="150" md="80" />
      <Div className="cs-google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
          allowFullScreen
          title="Google Map"
        />
      </Div> */}
      {/* <Spacing lg="50" md="40" /> */}
    </>
  );
}
