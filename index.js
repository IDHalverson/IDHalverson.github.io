$(document).ready(function() {
  const navs = $(".nav-link");

  const contents = $(".content-section");

  const sections = ["about", "portfolio", "blog", "contact"];

  const nav = {};
  const content = {};
  sections.forEach((section, idx) => {
    content[section] = $(contents[idx]);
    nav[section] = $(navs[idx]);
  });

  const showSection = section => {
    contents.addClass("hidden");
    content[section].removeClass("hidden");
  };

  const colorActiveNav = section => {
    navs.removeClass("active-nav");
    nav[section].addClass("active-nav");
  };

  navs.on("click", e => {
    const section = $(e.target).attr("section");
    showSection(section);
    colorActiveNav(section);
  });
});
