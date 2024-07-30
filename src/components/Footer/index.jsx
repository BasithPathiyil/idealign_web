import React from "react";
import Div from "../Div";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import Newsletter from "../Widget/Newsletter";
import SocialWidget from "../Widget/SocialWidget";
import TextWidget from "../Widget/TextWidget";
import "./footer.scss";
const copyrightLinks = [
  {
    title: "Terms of Use",
    href: "/",
  },
  {
    title: "Privacy Policy",
    href: "/",
  },
];

const serviceMenu = [
  {
    title: "Desgin Engineering Mangement",
    href: "/service/service-details",
  },
  {
    title: "Project Control",
    href: "/service/service-details",
  },
  {
    title: "Cost Mangement",
    href: "/service/service-details",
  },
  {
    title: "Contract & Claim Management",
    href: "/service/service-details",
  },
  {
    title: "Time Management",
    href: "/service/service-details",
  },
  {
    title: "Construction Management",
    href: "/service/service-details",
  },
];

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/idealignlogo.png"
                  logoAlt="Logo"
                  text="Our efficient team of consultants, designers, architects, engineers and project managers help to achieve your goals. Together we can align your ideas."
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Subscribe"
                  subtitle="Subscribe to our newsletters."
                  placeholder="example@gmail.com"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container cs-bottom_footer_main">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">
              Copyright © 2022 Idealign LLP. All rights reserved.
            </Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            {/* <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" /> */}
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
