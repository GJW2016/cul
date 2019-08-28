import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Feature20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: 'https://www.culturallydiversity.tk/images/china.jpg',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children:
        {
          target: '/country',
          children: (
      <>
        <p>
          <b>China</b>
        </p>
      </>
    )
        },
  },
  content: {
    className: 'content2-content',
    children: (
      <>
        <p>
          <b>
            China is a multinational country that belongs to the continent of Asia, with a population composed of a great number of linguistic and ethnic groups. It is officially known as the “People's Republic of China”. It may not be known to many but China has the second largest economy in the world, after the United States of America. It is also the world’s third largest country with over 1.3 billion people. The languages spoken in China are Mandarin, Yue, Wu, Minbei, Minnan, Xiang, Gan and Hakka.
          </b>

        </p>
        <p><b>
            Click on “China”, the page will introduce you Chinese traditional festival, Chinese food and some taboos.
        </b>
        </p>
      </>
    ),
  },
};
