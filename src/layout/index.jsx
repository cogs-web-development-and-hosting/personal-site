import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";
import styled from "styled-components";
import { Footer } from "../components/Footer";
import Favicon from '../../static/logos/logo-192x192.png'

import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const IndexContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const SiteContent = styled.div`
  flex: 1;
`;

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet
          link={[
            {
              rel: "shortcut icon",
              type: "image/png",
              href: `${Favicon}`
            }
          ]}
        >
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <IndexContainer>
          <SiteContent>{children}</SiteContent>
          <Footer />
        </IndexContainer>
      </div>
    );
  }
}
