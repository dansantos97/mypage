import React, { useEffect, useState } from "react";
import axios from "axios";
import { ButtonDefault, ContentGithub, Foto, GithubContainer, Items, List } from "./styles";

export default function Github() {
  const [userGithub, setUserGithub] = useState([]);
  const [projects, setProjects] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    getApiGithub()
    getApiRepos()
  }, []);

  function getApiGithub() {
    axios.get('https://api.github.com/users/dansantos97', {

    })
      .then(function (response) {
        setUserGithub(response.data);
        console.log(response);
      })
      .catch(function (error) {
        setErrorMsg('GitHub temporariamente fora de serviço!');
        console.log(error);
      });
  }

  function getApiRepos() {
    axios.get('https://api.github.com/users/dansantos97/repos', {

    })
      .then(function (response) {
        setProjects(response.data);
        console.log(response);
      })
      .catch(function (error) {
        setErrorMsg('GitHub temporariamente fora de serviço!');
        console.log(error);
      });
  }

  return (
    <GithubContainer>
      <ContentGithub>
        <Items>
          <Foto>
            <img src={userGithub.avatar_url} alt="foto github" />
            <h3>{userGithub.name}</h3>
            <h4>{userGithub.login}</h4>
            <p>{userGithub.bio}</p>
            <ButtonDefault>
              <a href="https://github.com/dansantos97" target='_blank' rel="noreferrer">Ver todos</a>
            </ButtonDefault>
          </Foto>
          <List>
            {
              projects.slice(0, 4).map((project) =>
                <div key={project.id}>
                  <h3><a href={project.html_url} target="_blank" rel="noreferrer">
                    {project.name}</a>
                  </h3>
                  <p><a href={`https://dansantos97.github.io/${project.name}`}>
                    dansantos97.github.io/{project.name}</a>
                  </p>
                </div>
              )
            }
          </List>
          <p>{errorMsg}</p>
        </Items>
      </ContentGithub>
    </GithubContainer>
  )
}
