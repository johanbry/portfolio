window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
    document.querySelector("header").classList.add("opaque");
  else document.querySelector("header").classList.remove("opaque");
});

const getRepos = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    printRepos(data, null);
  } catch (error) {
    printRepos(null, error);
  }
};

const printRepos = (repos, error) => {
  const repoContainer = document.getElementById("repo-container");
  if (!error) {
    repos.forEach((element) => {
      let output = "";
      output = `<div><a href="${element.html_url}">${
        element.name
      }</a> [skapad ${new Date(element.created_at).toLocaleDateString()}]`;

      if (element.description) output += `<br><i>${element.description}</i>`;

      output += "</div>";

      repoContainer.insertAdjacentHTML("beforeend", output);
    });
  } else {
    repoContainer.insertAdjacentHTML(
      "beforeend",
      `Repos kunde tyvärr inte hämtas<br>(${error})`
    );
  }

  console.log(repos);
};

getRepos("https://api.github.com/users/johanbry/repos");
