import React, { useEffect, useState } from "react";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Pagination from "../Pagination";
import PostStyle2 from "../Post/PostStyle2";
import Div from "../Div";
import Sidebar from "../Sidebar.jsx";
import Spacing from "../Spacing";
import Hero3 from "../Hero/Hero3.jsx";
import Pagination2 from "../Pagination/Pagination2.jsx";
import useAxiosFetch from "../../hooks/useAxiosFetch.js";
import { Constants } from "../../utils/constants.js";
import { formatDate } from "../../utils/utilities.js";
const postData = [
  {
    thumb: "/images/post_4.jpeg",
    title: "A.I will take all human job within next year",
    subtitle:
      "Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.",
    date: "07 Mar 2022",
    category: "Tech",
    categoryHref: "/blog",
    href: "/blog/blog-details",
  },
  {
    thumb: "/images/post_5.jpeg",
    title: "Creative studio programm coming soon",
    subtitle:
      "Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.",
    date: "05 Mar 2022",
    category: "Photography",
    categoryHref: "/blog",
    href: "/blog/blog-details",
  },
  {
    thumb: "/images/post_6.jpeg",
    title: "Artistic mind will be great for creation",
    subtitle:
      "Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.",
    date: "04 Mar 2022",
    category: "Tech",
    categoryHref: "/blog",
    href: "/blog/blog-details",
  },
];

export default function NewsEventsPage() {
  pageTitle("News & Events");

  const [page, setPage] = useState(1);
  const { data, loading, error } = useAxiosFetch(
    `/newsevents/get?page=${page}`,
    {}
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const newsEventsData = data?.arrList;
  return (
    <>
      <Spacing lg="90" md="60" />
      <Hero3
        title={`News & Events`}
        btnLink="contact"
        btnText={""}
        socialLinksHeading=" "
        bgImageUrl="./images/newseventsheading.jpg"
      />
      {/* <Spacing lg="150" md="80" /> */}
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {newsEventsData?.map((item, index) => (
              <Div key={index}>
                <PostStyle2
                  thumb={`${Constants.imagebase}${item.mainImage}`}
                  title={item.title}
                  subtitle={item.shortDesc}
                  date={formatDate(item.eventDate)}
                  category={item?.category}
                  categoryHref={"/newsevents"}
                  href={`/newsevents/${item._id}?type=get`}
                />
                {postData.length > index + 1 && <Spacing lg="95" md="60" />}
              </Div>
            ))}
            <Spacing lg="60" md="40" />
            <Pagination2
              page={page}
              setPage={setPage}
              totalCounts={14}
              itemsPerPage={3}
            />
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg="0" md="80" />
            <Sidebar />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      <Spacing lg="90" md="60" />
    </>
  );
}
