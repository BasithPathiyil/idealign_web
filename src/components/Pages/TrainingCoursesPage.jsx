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
import Cta from "../Cta";
import PageHeading2 from "../PageHeading/PageHeading2";
import CoursesList from "../PricingTable/CoursesList";
import SideMenuWidget from "../Widget/SideMenuWidget";

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
  ];

  return (
    <>
      <PageHeading2
        title="IACM"
        bgSrc="/images/training/course2.webp"
        pageLinkText="Idealign Academy For Construction Mangement"
      />

      <Spacing lg="90" md="60" />
      <Div className="container">
        <Div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Div className="col-xl-5 col-lg-6">
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
          <Div className="col-lg-6 ">
            <img
              src="/images/training/const2.jpg"
              style={{ width: "100%" }}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
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
            <img
              src="/images/training/course1.webp"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-xl-5 col-lg-6">
            <SectionHeading
              title="Construction Project Mangement Program"
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
              <Div className="cs-separator cs-accent_bg"></Div>
            </SectionHeading>
          </Div>
        </Div>
      </Div>

      <Spacing lg="90" md="60" />
      <Div className="container">
        <Div className="contianer">
          <SectionHeading
            title="Our Courses"
            subtitle=""
            variant="cs-style1 text-center"
          />
          <Spacing lg="55" md="30" />
          <CoursesList />
        </Div>
      </Div>
      <Spacing lg="90" md="60" />
      <Hero41
        title="Course Deliverables"
        subtitle="Idealign Academy For Construction Mangement"
        scrollDownId="#service"
        socialLinksHeading=" "
        heroSocialLinks={heroSocialLinks}
        phoneNumber="+044 546664"
        email="info@arino.com"
      />
      <Spacing lg="90" md="60" />
      <Div className="container">
        <Cta
          title="Build your career<br />with IACM"
          btnText="Enroll Now"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      <Spacing lg="90" md="60" />
    </>
  );
}
