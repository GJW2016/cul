/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Feature2 from './Feature2';
import Feature1 from './Feature1';
import Teams1 from './Teams1';

import {
  Feature20DataSource,
  Feature10DataSource,
  Teams10DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
    window.onload = function (){
      const divElement = document.getElementById('viz1570875218811');
      const vizElement = divElement.getElementsByTagName('object')[0];
      vizElement.style.minWidth = '520px';
      vizElement.style.maxWidth = '1050px';
      vizElement.style.width = '100%';
      vizElement.style.minHeight = '587px';
      vizElement.style.maxHeight = '887px';
      vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
      vizElement.parentNode.insertBefore(scriptElement, vizElement);
    }
  }

  render() {
    const children = [
      <Feature2
        id="Feature2_0"
        key="Feature2_0"
        dataSource={Feature20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature1
        id="Feature1_0"
        key="Feature1_0"
        dataSource={Feature10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Teams1
        id="Teams1_0"
        key="Teams1_0"
        dataSource={Teams10DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (

        <div
          className="templates-wrapper"
          ref={(d) => {
            this.dom = d;
          }}
        >
          <div style={{marginLeft: 400}}>
           <div className='tableauPlaceholder' id='viz1570875218811' style={{position: 'relative'}}>
            <noscript>
              <a href='#'>
                <img alt=' '
                     src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;In&#47;InternationalStudents_15708751171640&#47;Dashboard1&#47;1_rss.png'
                     style='border: none'/>
              </a>
            </noscript>
            <object className='tableauViz' style={{display:'none'}}>
              <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F'/>
              <param name='embed_code_version' value='3'/>
              <param name='site_root' value=''/>
              <param name='name' value='InternationalStudents_15708751171640&#47;Dashboard1'/>
              <param name='tabs' value='no'/>
              <param name='toolbar' value='yes'/>
              <param name='static_image'
                     value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;In&#47;InternationalStudents_15708751171640&#47;Dashboard1&#47;1.png'/>
              <param name='animate_transition' value='yes'/>
              <param name='display_static_image' value='yes'/>
              <param name='display_spinner' value='yes'/>
              <param name='display_overlay' value='yes'/>
              <param name='display_count' value='yes'/>
              <param name='filter' value='publish=yes'/>
            </object>
             <div style={{width:1000,marginLeft: 20,marginTop: 30,marginBottom: 60,textAlign:'center'}}>
               <h2>Australia is the third most popular destination for international students in English speaking countries because of the cultural diversity, friendly natives, and high quality of education.
                 <br />
                 <br />
                 The number of international students enrolled growth rapidly from 2010 to 2018.
               </h2>
             </div>
           </div>
        </div>
          {/* 如果不是 dva 2.0 替换成 {children} start */}
          {this.state.show && children}
          {/* 如果不是 dva 2.0 替换成 {children} end */}
        </div>

    );
  }
}
