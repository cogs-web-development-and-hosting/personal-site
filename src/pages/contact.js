import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import styled from "styled-components";
import { Link } from "gatsby";
import { ProjectList } from "../components/ProjectList";
import { NavbarContainer } from "../components/navbar-container";
import { SectionContainerWrapper } from "../components/section-container-wrapper";
import { LeadContainerHeading } from "../components/lead-container-heading";

const HrefLink = styled.a`
  text-decoration: none;
  color: rgba(64, 150, 196, 0.8);
  border-bottom: 2px solid rgba(64, 150, 196, 0.1);

  :hover {
    color: rgba(64, 150, 196, 0.9);
    border-bottom: 2px solid rgba(64, 150, 196, 0.9);
  }
`;

const Navbar = styled.div`
  max-width: 800px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

const LeadContainer = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LeadContainerParapraph = styled.p`
  margin: 0;
  font-family: Lato;
  width: 100%;
  font-size: 18px;
  line-height: 28px;
  color: rgba(43, 55, 62, 0.8);
  margin-top: 1.3em;
`;

const SectionContainer = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  // padding-top: 40px;
`;

const SectionHeading = styled.h3`
  margin: 0;
  padding: 0;
  margin: 0;
  padding: 0;
  font-size: 32px;
  color: rgb(43, 55, 62);
  margin-bottom: 32px;
`;

const UnorderedList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItemL = styled(Link)`
  display: block;
  text-decoration: none;
  width: 100%;
  padding: 15px 12px;
`;

const ListItem = styled.li`
  display: flex;
  border-radius: 3px;

  &:hover {
    background-color: rgba(78, 158, 200, 0.07);
  }
`;

const ListItemLink = styled.span`
  color: rgba(43, 55, 62, 0.8);
  align-self: center;
  padding-left: 0.618em;

  font-size: 22px;
  width: 100%;
`;

const StyledLink = styled(Link)`
  // color: palevioletred;
  // font-weight: bold;
  color: rgba(64, 150, 196, 0.5);
  font-weight: 300;
  font-family: Lato, sans-serif;
  margin-left: 1em;
  line-height: 2em;
  text-decoration: none;

  :hover {
    color: rgba(64, 150, 196, 1);
  }
`;

const MainStyledLink = styled(Link)`
  margin: 0;
  padding: 0;
  color: #4096c4;
  text-transform: uppercase;
  font-family: Lato, sans-serif;
  font-weight: 300;
  font-size: 24px;
  text-decoration: none;
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  align-self: center;
`;

const getPostList = postEdges => {
  const postList = [];
  postEdges.forEach(postEdge => {
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.fields.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead
    });
  });
  return postList;
};

const WorkInProgress = styled.p`
  margin: 0;
  font-family: Lato;
  width: 100%;
  font-size: 22px;
  line-height: 35px;
  color: rgba(43, 55, 62, 0.8);
`;

const FormLabel = styled.label`
  margin: 0;
  font-family: Lato;
  width: 100%;
  font-size: 18px;
  line-height: 28px;
  color: rgba(43, 55, 62, 0.8);
  margin-top: 0.61em;
`;

const FormInput = styled.input`
  border: 2px solid rgba(43, 55, 62, 0.4);
  padding: 8px 9px;
  border-radius: 6px;
  max-width: 500px;
  color: rgba(43, 55, 62, 0.8);

  :focus {
    outline: none;
    border-color: rgba(64, 150, 196, 0.8);
  }
`;

const FormTextarea = styled.textarea`
  border: 2px solid rgba(43, 55, 62, 0.4);
  padding: 8px 9px;
  border-radius: 6px;
  color: rgba(43, 55, 62, 0.8);

  :focus {
    outline: none;
    border-color: rgba(64, 150, 196, 0.8);
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const FormContainerGutted = styled(FormContainer)`
  margin-right: 15px;
`;

const FormDoubleContainer = styled.div`
  display: flex;
`;

const SubmitButton = styled.button`
  -webkit-appearance: none;
  display: inline-block;
  // border: 2px solid rgba(64,150,196,0.8);
  border: 0;
  border-radius: 4px;
  background: rgba(64, 150, 196, 0.8);
  color: #fff;
  font-weight: 600;
  font-family: Lato;
  font-size: 1.1rem;
  text-transform: none;
  padding: 0.6rem 0.9rem;
  margin: 0 0 0.5rem;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  line-height: 1;
  margin-top: 1em;
`;

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const postList = getPostList(postEdges);

    return (
      <Layout>
        <div className="index-container">
          <SEO />
          <Helmet>
            <title>{"Contact Kevin Peters via Twitter or Email"}</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta
              name="description"
              content="Contact information like email or twitter of Kevin Peters."
            />
          </Helmet>
          <NavbarContainer />
          <SectionContainerWrapper>
            <SectionContainer>
              <LeadContainerHeading>Stay in touch with me</LeadContainerHeading>
              <LeadContainerParapraph>
                It seems like you want to stay in contact with me. You can reach
                me in different ways over the internet. The easiest is to write
                a personal message on twitter:
                <ul>
                  <li>
                    <HrefLink
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://twitter.com/kevinpeters_"
                    >
                      twitter.com/kevinpeters_
                    </HrefLink>
                  </li>
                </ul>
              </LeadContainerParapraph>
              <LeadContainerParapraph>
                You can also contact me via Email.
              </LeadContainerParapraph>
              <form
                action="https://formcarry.com/s/DUvjYVD8FR_"
                method="POST"
                accept-charset="UTF-8"
              >
                <FormContainer>
                  <FormLabel for="email">Your Email</FormLabel>
                  <FormInput type="email" name="email" />
                </FormContainer>
                <FormDoubleContainer>
                  <FormContainerGutted>
                    <FormLabel for="email">First Name</FormLabel>
                    <FormInput type="text" name="firstName" />
                  </FormContainerGutted>
                  <FormContainer>
                    <FormLabel for="email">Last Name</FormLabel>
                    <FormInput type="text" name="lastName" />
                  </FormContainer>
                </FormDoubleContainer>
                <FormContainer>
                  <FormLabel for="content">Message</FormLabel>
                  <FormTextarea rows="9" type="text" name="content" />
                </FormContainer>
                <input type="hidden" name="_gotcha" />
                <SubmitButton type="submit">Submit</SubmitButton>
              </form>
            </SectionContainer>
          </SectionContainerWrapper>
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ContactsQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
