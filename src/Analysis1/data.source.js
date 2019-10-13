import React from 'react';
export const Feature20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: 'https://www.c-diversity.social/images/analysis1.png',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: { className: 'content2-title', children: (<div style={{fontSize: 23,marginBottom: 60}}>
              In 2018, the number of international students enroll into Australian University is 374,320, increasing 11.8% and reach 28% in total enrolment student.
              <br />
              Thereby it is very essential to manage and streamline the rapid inflow of students in a way such that the cross-culture transition of students be made as smooth as possible.
              <br />
        </div>) },
  content: {
    className: 'content2-content',
  },
};
export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://www.c-diversity.social/images/analysis2.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: { className: 'content1-title', children: (<div style={{fontSize: 23,marginTop: 10}}>
              Who are the majority in International students? In 10 international students, there are almost 4 Chinese, 2 Indian, 1 Nepalese.
              <br />
              As most International students are coming from Asia, it is common them to feel overwhelmed and find it extremely difficult to blend into the new multicultural lifestyle and make friends.
              <br />
        </div>
    )},
  content: {
    className: 'content1-content',
  },
};
export const Teams10DataSource = {
  wrapper: { className: 'home-page-wrapper teams1-wrapper' },
  page: { className: 'home-page teams1' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: (<div style={{fontSize:20, textAlign: 'center'}}>
      C - Diversity, a website takes all these issues into account resulting in a one stop destination for all information the international students need to know in order to adapt to the Australian lifestyle. <br/>The website gives three solutions:
    </div>)}],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            { name: 'title', className: 'teams1-title', children: 'Culture Info' },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                'Trying to let users familiar with other cultures and help them to make friends from different culture backgrounds.',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            { name: 'title', className: 'teams1-title', children: 'Get Festival' },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                'Trying to let users to let international students go out to celebrate festivals to reduce their loneliness and homesickness.',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            { name: 'title', className: 'teams1-title', children: 'Foodie' },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                'Trying to help international students solving their eating problem in a new country.',
            },
          ],
        },
      },
    ],
  },
};
