import styled from "styled-components";
import bannerImg from "../../assets/img/banner.jpg";
import instaImg from "../../assets/img/insta.png";
import emailImg from "../../assets/img/email.png";
import linkedinImg from "../../assets/img/linkedin.png";
import whatsappImg from "../../assets/img/whatsapp.png";
import githubImg from "../../assets/img/github.png";

export const ContactsContainer = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bannerImg});
  background-position: center;
  background-size: cover;
  position: relative;

  &:after{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(46, 46, 46, 0.8);
  }

  div {
    z-index: 10;
  }

  @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

  h1 {
    color: #dfa70c;
    animation: fadeIn 2s ease-in-out;
  }

  ul {
    animation: fadeIn 2s ease-in-out;
  }

  li {
    padding: 15px;
    font-size: 20px;
  }
  li.email {
    list-style-image: url(${emailImg});
  }
  li.linkedin {
    list-style-image: url(${linkedinImg});
  }
  li.insta {
    list-style-image: url(${instaImg});
  }
  li.github {
    list-style-image: url(${githubImg});
  }
  li.whatsapp {
    list-style-image: url(${whatsappImg});
    color: #fff;
    text-decoration: underline;
  }

  a {
    color: #fff;
  &:hover {
    color: #dfa70c;
  }
}
`;
