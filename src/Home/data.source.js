import React from 'react';

//layout of the page
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children:{
          target: '/',
          pic : 'https://www.culturallydiversity.tk/images/small_logo.png'
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
          children: [{ children:'Home', name: 'text' }],
        },
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '/se',
          children: [{ children: ('Cultural Info'), name: 'text' }],
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
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner01DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: 'https://www.culturallydiversity.tk/images/big_logo.png',
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
    children: 'learn more',
  },
};
export const Pricing00DataSource = {
  wrapper: { className: 'home-page-wrapper pricing0-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page pricing0' },
  imgWrapper: { className: 'pricing0-img-wrapper', md: 12, xs: 20 },
  img: {
    className: 'pricing0-img',
    name: 'image',
    children: 'https://www.culturallydiversity.tk/images/home/home_1.jpg',
  },
  childWrapper: {
    className: 'pricing0-text-wrapper',
    md: 12,
    xs: 24,
    children: [
      {
        name: 'title',
        children: (<h2>What we offer</h2>),
        className: 'pricing0-title',
      },
      {
        name: 'content',
        children:(

            <h3>
              We understand that it get difficult to make friends with people from different background. But guess what?
              <br />
              All of us love food and enjoy festivals irrespective of what country we are from. Thus, being a great converstion starter!
              <br />
              Our website is specifically focused on China, India, Nepal and Australia (of course!).
              <br />
              <br />
              <br />
              <br />
            </h3>
        ),
        className: 'pricing0-content',
      },
      {
        name: 'button',
        children: { href: '/se', type: 'primary', children: 'find out more' },
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
            'https://www.culturallydiversity.tk/images/small_logo.png',
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
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <>
              <p>About us</p>
            </>
          ),
        },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: '' },//FAQ
            {
              href: '#',
              name: 'link1',
              children: (
                <>
                  <p>Contact us: B16 Invincible</p>
                  <p>jguo0021@student.monash.edu</p>
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
          ©2019 by <a href="https://www.culturallydiversity.tk/">B16</a> All Rights
          Reserved
        </span>
      </>
    ),
  },
};
