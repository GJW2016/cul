import React from 'react';


export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children:{
          target: '/',
          pic : 'https://www.c-diversity.social/images/small_logo.png'
    }
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '/',
          children: [{ children: 'Home', name: 'text' }],
        },
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '/selectionPage',
          children: [{ children: 'Cultural Info', name: 'text' }],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: '/calendar',
          children: [{ children: ('Festival calendar'), name: 'text' }],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: '/foodie',
          children: [{ children: ('Foodie'), name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner01DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: 'https://www.c-diversity.social/images/big_logo.png',
  },
  content: {
    className: 'banner0-content',
    children: (
      <>
        <p><strong>"We are aiming at helping international students in Australia foster meaningful friendship with each other"</strong></p>
      </>
    ),
  },
  button: {
    className: 'banner0-button',
    href:'/analysis',
    children: (<strong>learn more</strong>), },
};
export const Pricing00DataSource = {
  wrapper: { className: 'home-page-wrapper pricing0-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page pricing0' },
  imgWrapper: { className: 'pricing0-img-wrapper', md: 12, xs: 24 },
  img: {
    className: 'pricing0-img',
    name: 'image',
    children:
      'https://www.c-diversity.social/images/home/home_1.jpg',
  },
  childWrapper: {
    className: 'pricing0-text-wrapper',
    md: 12,
    xs: 24,
    children: [

      {
        name: 'content',
        children:(
            <h2>
              <br />
              <br />
              We understand that it get difficult to make friends with people from different background. But guess what?
              <br />
              All of us love food and enjoy festivals irrespective of what country we are from. Thus, being a great conversation starter!
              <br />
              <br />
              <br />
            </h2>
        ),
        className: 'pricing0-content',
      },
      {
        name: 'button',
        children: { href: '/selectionPage', type: 'primary', children: 'Find out more' },
      },
    ],
  },
};
export const Pricing01DataSource = {
  wrapper: { className: 'home-page-wrapper pricing0-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page pricing0' },
  imgWrapper: { className: 'pricing0-img-wrapper', md: 12, xs: 24 },
  img: {
    className: 'pricing0-img',
    name: 'image',
    children:
      'https://www.c-diversity.social/images/tags/fes.jpg',
  },
  childWrapper: {
    className: 'pricing0-text-wrapper',
    md: 12,
    xs: 24,
    children: [
      {
        name: 'content',
        children:
          (
            <h2>
              <br />
              <br />
              Shifting to a completely different country may make you feeling blue and home-sick.
              Step out of your house and explore the cultural events happening in Melbourne.
              <br />
              <br />
              <br />
            </h2>
        ),className: 'pricing0-content',
      },
      {
        name: 'button',
        children: {
          href: '/calendar',
          type: 'primary',
          children: 'Find out more',
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            'https://www.c-diversity.social/images/small_logo.png',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: (
                <>
                  <p>
                    <br />
                  </p>
                </>
              ),
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <>
        <span>
          ©2019 by <a href="https://www.c-diversity.social/">B16</a> All Rights
          Reserved
        </span>
      </>
    ),
  },
};
