import React from 'react';

export const Pricing00DataSource = {
  wrapper: { className: 'home-page-wrapper pricing0-wrapper' },
  OverPack: {
    playScale: 0.3,
    className: 'home-page pricing0 jzsf9rag41k-editor_css',
    gutter: 0,
  },
  imgWrapper: {
    className: 'pricing0-img-wrapper jzsfg1nsydh-editor_css',
    md: 12,
    xs: 24,
  },
  img: {
    className: 'pricing0-img',
    name: 'image',
    children:
      'https://www.culturallydiversity.tk/images/mooncake.jpg',
  },
  childWrapper: {
    className: 'pricing0-text-wrapper',
    md: 12,
    xs: 24,
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>
              <b>Festival</b>
            </p>
          </>
        ),
        className: 'pricing0-title',
      },
      {
        name: 'pricing',
        children: (
          <>
            <p><font size='3'>Lunar Festival:  It is a traditional festival in China. In this festival, families
              member look forward to getting reunion, and people also have a custom of eating mooncakes.</font></p>
          </>
        ),
        className: 'pricing0-pricing',
      },
{
        name: 'button',
        children: {
          href: '/country',
          type: 'primary',
          children: 'Previous',
          className: 'jzsf6tebesu-editor_css',
          icon: 'https://landing.ant.design',
        },
      },
      {
        name: 'button~jzsf74hd8qu',
        className: 'jzsf76x9upj-editor_css',
        children: {
          children: 'Next',
          href: '/country2',
          type: 'primary',
          icon: 'https://blog.csdn.net/C11611/article/details/81878570',
          className: 'jzsf75i7dcm-editor_css',
        },
      },
    ],
  },
};