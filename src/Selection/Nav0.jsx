import React from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { getChildrenToRender } from './utils';
import { Link } from "react-router-dom";
const Item = Menu.Item;
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
    };

  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
    });
  };

  render() {
    const { dataSource, isMobile, ...props } = this.props;

    const { phoneOpen } = this.state;
    const { LinkMenu } = dataSource;
    const navData = LinkMenu.children;
    const navChildren = Object.keys(navData).map((key, i) => (
      <Item key={i.toString()} {...navData[key]}>
        <Link
          {...navData[key].a}
          to={navData[key].a.href}
          target={navData[key].a.target}
        >
          {navData[key].a.children}
        </Link>
      </Item>
    ));
    const moment = phoneOpen === undefined ? 300 : null;
    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        {...dataSource.wrapper}
        {...props}
      >
        <div
          {...dataSource.page}
          className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
        >
          <TweenOne
            animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
            {...dataSource.logo}
          >
            <img width="100%" src={dataSource.logo.children} alt="img" />
          </TweenOne>
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
              onClick={() => {
                this.phoneClick();
              }}
            >
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            {...LinkMenu}
            animation={
              isMobile
                ? {
                    height: 0,
                    duration: 300,
                    onComplete: (e) => {
                      if (this.state.phoneOpen) {
                        e.target.style.height = 'auto';
                      }
                    },
                    ease: 'easeInOutQuad',
                  }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}
          >
            {navChildren}
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default Header;
