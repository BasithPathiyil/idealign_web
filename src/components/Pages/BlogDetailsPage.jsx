import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Div from "../Div";
import Sidebar from "../Sidebar.jsx";
import Spacing from "../Spacing";
import useAxiosFetch from "../../hooks/useAxiosFetch.js";
import { Constants } from "../../utils/constants.js";
import { formatDate } from "../../utils/utilities.js";
import parse from "html-react-parser";

export default function BlogDetailsPage() {
  const params = useParams();
  pageTitle("Blog Details");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchParams] = useSearchParams();

  const type = searchParams.get("type");
  const page = searchParams.get("page");
  const { data, loading, error } = useAxiosFetch(
    `/blogs/${type}?page=${page}`,
    {}
  );
  const blogsData = data?.arrList;
  const projectData = blogsData?.find((item) => item._id === params.id);
  return (
    <>
      {/* Start Page Heading Section */}
      {/* <PageHeading
        title="Blog Single"
        bgSrc="/images/blog_details_hero_bg.jpeg"
        pageLinkText={params.id}
      /> */}
      {/* End Page Heading Section */}

      {/* Start Blog Details */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {/* Start Details Post Content */}
            <Div className="cs-post cs-style2">
              <Div className="cs-post_thumb cs-radius_15">
                <img
                  src={`${Constants.imagebase}${projectData?.mainImage}`}
                  alt="Post"
                  className="w-100 cs-radius_15"
                />
              </Div>
              <Div className="cs-post_info">
                <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                  <span className="cs-posted_by">
                    {" "}
                    {formatDate(projectData?.createdAt)}
                  </span>
                  <Link to="/blog" className="cs-post_avatar">
                    {projectData?.category}
                  </Link>
                </Div>
                <h2 className="cs-post_title">{projectData?.title}</h2>

                {projectData && projectData?.content
                  ? parse(projectData?.content)
                  : ""}
                {/* <Div className="row">
                  <Div className="col-md-6">
                    <img
                      src="/images/blog_details_img_1.jpeg"
                      alt="Blog Details"
                      className="cs-radius_15 w-100"
                    />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                  <Div className="col-md-6">
                    <img
                      src="/images/blog_details_img_2.jpeg"
                      alt="Blog Details"
                      className="cs-radius_15 w-100"
                    />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                </Div> */}
                {/* <h3>Art is powerful and imaginary source</h3> */}
                {/* <p>
                  we denounce with righteous indignation and dislike men who are
                  so beguiled and demoralized by the charms of pleasure of the
                  moment, so blinded by desire, that they cannot foresee the
                  pain and trouble that are bound to ensue; and equal blame
                  belongs to those who fail in their duty through weakness of
                  will, which is the same as saying through shrinking from toil
                  and pain. These cases are perfectly simple and easy to
                  distinguish. In a free hour, when our power of choice is
                  untrammelled and when nothing prevents our being able to do
                  what we like best, every pleasure is to be welcomed and every
                  pain avoided. But in certain circumstances.
                </p>
                <p>
                  So, blinded by desire, that they cannot foresee the pain and
                  trouble that are bound to ensue; and equal blame belongs to
                  those who fail in their duty through weakness of will, which
                  is the same as saying through shrinking from toil and pain.
                  These cases are perfectly simple and easy to distinguish. In a
                  free hour, when our power of choice is untrammelled and when
                  nothing prevents our being able to do what we like best, every
                  pleasure is to be welcomed and every pain avoided. But in
                  certain amount of people.
                </p> */}
              </Div>
            </Div>
            {/* End Details Post Content */}

            {/* Start Comment Section */}
            {/* <Spacing lg="30" md="30" />
            <h2 className="cs-font_50 cs-m0">Leave A Reply</h2>
            <Spacing lg="5" md="5" />
            <p className="cs-m0">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <Spacing lg="40" md="30" />
            <form className="row">
              <Div className="col-lg-6">
                <label>Full Name*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
                <Div
                  data-lastpass-icon-root="true"
                  style={{
                    position: "relative !important",
                    height: "0px !important",
                    width: "0px !important",
                    float: "left !important",
                  }}
                />
              </Div>
              <Div className="col-lg-6">
                <label>Email*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Website*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Write Your Comment*</label>
                <textarea cols={30} rows={7} className="cs-form_field" />
                <Div className="cs-height_25 cs-height_lg_25" />
              </Div>
              <Div className="col-lg-12">
                <button className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form> */}
            {/* End Comment Section */}
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            {/* Start Sidebar */}
            <Spacing lg="0" md="80" />
            <Sidebar />
            {/* End Sidebar */}
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      {/* Start Blog Details */}

      {/* Start CTA Section */}
      {/* <Div className="container">
        <Cta
          title="Build your career<br />with IACM"
          btnText="Enroll Now"
          btnLink="/contact"
          bgSrc="/images/6.jpg"
        />
      </Div> */}
      {/* End CTA Section */}
    </>
  );
}
