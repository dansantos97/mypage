import styled from "styled-components";
import instaImg from "../../assets/img/insta.png";
import emailImg from "../../assets/img/email.png";
import linkedinImg from "../../assets/img/linkedin.png";
import whatsappImg from "../../assets/img/whatsapp.png";
import githubImg from "../../assets/img/github.png";

export const ContactsContainer = styled.div`
  @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  z-index: 10;

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
    text-align: start;
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
