import React from 'react';

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
          href: '#',
          children: [{ children:'Cultural Info', name: 'text' }],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              href: '/page2',
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'China',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: 'China',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'India',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: 'India',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '/analysis',
          children: [{ children: 'Interesting Facts', name: 'text' }],
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
        <p>Get to know your life</p>
      </>
    ),
  },
  button: {
    className: 'banner0-button',
    href:'/analysis',
    children: 'learn more',
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
          ©2019 by <a href="https://motion.ant.design">B16</a> All Rights
          Reserved
        </span>
      </>
    ),
  },
};
