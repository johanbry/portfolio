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
      repoContainer.insertAdjacentHTML(
        "beforeend",
        `<a href="${element.html_url}">${element.name}</a> Created ${new Date(
          element.created_at
        ).toLocaleDateString()}<br>`
      );
      if (element.description)
        repoContainer.insertAdjacentHTML(
          "beforeend",
          `<i>${element.description}</i><br>`
        );
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
