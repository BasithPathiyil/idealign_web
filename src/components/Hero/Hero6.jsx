import React from 'react';
import Div from '../Div';
import FullScreenHorizontalSlider from '../Slider/FullScreenHorizontalSlider';
import VerticalLinks from '../VerticalLinks';
import FullScreenSlider from '../Slider/FullScreenSlider';

export default function Hero6({
  socialLinksHeading,
  heroSocialLinks,
  showcaseData,
}) {
  return (
    <Div className="cs-hero_6_wrap">
      {/* <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} /> */}
      <FullScreenSlider data={showcaseData} />
    </Div>
  );
}
