$(document).ready(function() {
  const navs = $(".nav-link");

  const contents = $(".content-section");

  const q = {};
  q.about = $(contents[0]);
  q.portfolio = $(contents[1]);
  q.blog = $(contents[2]);
  q.contact = $(contents[3]);

  const showSection = e => {
    contents.addClass("hidden");
    const section = $(e.target).attr("href");
    q[section].removeClass("hidden");
  };

  const colorActiveNav = e => {
    contents.addClass("hidden");
    const section = $(e.target).attr("href");
    q[section].removeClass("hidden");
  };

  navs.on("click", e => {
    e.preventDefault();
    showSection(e);
  });
});
