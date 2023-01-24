$(document).ready(() => {
  let projectsNavHasNotBeenClicked = true;

  const handleNavigation = () => {
    const navs = $(".nav-link");
    const contents = $(".content-section");
    const sections = ["about", "projects", "blog", "contact"];

    // create dynamic content and nav objects
    const nav = {};
    const content = {};
    sections.forEach((section, idx) => {
      content[section] = $(contents[idx]);
      nav[section] = $(navs[idx]);
    });

    const showSection = (section) => {
      contents.addClass("hidden");
      content[section].removeClass("hidden");
    };

    const colorActiveNav = (section) => {
      navs.removeClass("active-nav");
      nav[section].addClass("active-nav");
    };
    // utilize dynamic objects so we only have 1 listener assignment
    navs.on("click", (e) => {
      const section = $(e.target).attr("section");
      showSection(section);
      colorActiveNav(section);
      if (section === "projects") {
        window.alert("This portfolio needs updating - please be patient :)");
      }
    });
  };

  const handleProjectsCarousel = () => {
    const body = $("body");
    const rightButton = $("#projects-cs-right");
    const leftButton = $("#projects-cs-left");
    const projectSlides = $(".projects-cs");
    const slideHeaders = $(".slide-header");
    const carousel = $(".carousel");
    const carouselSlides = $(".carousel-slide");
    const viewpoint = $(".viewpoint");
    const percentage = $(".viewpoint-percentage");
    const carouselButtons = $(".carousel-buttons");
    const description = $(".description");
    const photos = $(".pr-img");
    let currentSlide = 0;
    let autoChangeSlides = null;

    if (!projectsNavHasNotBeenClicked) return;
    projectsNavHasNotBeenClicked = false;

    // make eyeball icon follow scroll bar
    const handleViewpoint = ({ target }) => {
      const slide = $(target);
      const percent = Math.round(
        (slide.scrollTop() / (target.scrollHeight - slide.height())) * 73
      );

      viewpoint.css("top", `${percent}%`);
      percentage.css("top", `${percent - 1.5}%`);
      percentage.html(`${Math.round((percent / 73) * 100)}%`);
    };

    // incr+ or decr- active slide based on direction
    const changeSlides = (direction, clickedByUser) => () => {
      if (clickedByUser) clearInterval(autoChangeSlides);
      $(projectSlides[`${currentSlide}`]).removeClass("carousel-active");
      currentSlide = direction == "right" ? ++currentSlide : --currentSlide;
      if (currentSlide < 0) currentSlide = projectSlides.length - 1;
      if (currentSlide === projectSlides.length) currentSlide = 0;
      $(projectSlides[`${currentSlide}`]).addClass("carousel-active");
      handleViewpoint({ target: projectSlides[`${currentSlide}`] });
    };

    const toggleDisableBodyScroll = () => {
      body.toggleClass("disable-scrolling");
    };

    const makeEyeBlink = () => {
      viewpoint.toggleClass("fa-eye");
      viewpoint.toggleClass("fa-minus");
      setTimeout(() => {
        viewpoint.toggleClass("fa-eye");
        viewpoint.toggleClass("fa-minus");
      }, 100);
    };

    const toggleShowDescription =
      (hide) =>
      ({ target }) => {
        photos.children().removeClass("show-description");
        if (hide) return;
        $(target).prev().addClass("show-description");
      };

    const toggleCarouselControls = () => carouselButtons.toggleClass("subtle");

    const stopAutoChanging = () => clearInterval(autoChangeSlides);

    //note: changeSlides is curried function

    autoChangeSlides = setInterval(changeSlides("right", false), 2500);

    blinkingEye1 = setInterval(makeEyeBlink, 6000);
    blinkingEye2 = setTimeout(() => setInterval(makeEyeBlink, 6000), 300);

    // listeners
    rightButton.on("click", changeSlides("right", true));
    leftButton.on("click", changeSlides("left", true));
    carousel.on("mouseenter", stopAutoChanging);
    carouselSlides.on({
      mouseenter: toggleDisableBodyScroll,
      mouseleave: toggleDisableBodyScroll,
    });
    carouselSlides.scroll(stopAutoChanging);
    carouselSlides.scroll(() => $(".scrollable-tooltip").fadeOut());
    carouselButtons.on({
      mouseenter: toggleCarouselControls,
      mouseleave: toggleCarouselControls,
    });
    carouselSlides.scroll(handleViewpoint);
    photos.on({
      mouseenter: toggleShowDescription(false),
      mouseleave: toggleShowDescription(true),
    });
  };

  const handlePhotoClicks = () =>
    $("img").on(
      "click",
      ({ target }) => (window.location.href = $(target).attr("src"))
    );

  // do all the things
  handleNavigation();
  handlePhotoClicks();
  $($(".nav-link")[1]).on("click", handleProjectsCarousel);
});
