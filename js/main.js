/**
 * 헤더 보이고 숨기기
 */

document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector("header");
  let backtoTop = document.querySelector(".backtoTop");
  let a = header.querySelectorAll(".navWrap ul a");
  console.log(a);
  a.forEach((item) => {
    item.addEventListener("click", () => {
      a.forEach((a) => {
        a.classList.remove("clicked");
      });
      item.classList.add("clicked");
    });
  });
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 50) {
      header.classList.add("active");
      backtoTop.classList.add("active");
    } else if (window.scrollY < 10) {
      header.classList.remove("active");
      backtoTop.classList.remove("active");
    }
  });

  backtoTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  if (header) {
    const links = header.querySelectorAll(".navWrap ul a");
    links.forEach((link, index) => {
      link.addEventListener("click", () => {
        localStorage.setItem("activeNavLink", index);
        updateActiveLink(links);
      });
    });
    // 인덱스 페이지가 아닐 때만 상태 복원
    if (!window.location.pathname.endsWith("/index.html")) {
      updateActiveLink(links);
    } else {
      // 인덱스 페이지에서는 모든 링크에서 'clicked' 클래스 제거
      removeClickedClass(links);
    }
  }

  function updateActiveLink(links) {
    const activeIndex = localStorage.getItem("activeNavLink");
    if (activeIndex !== null) {
      links.forEach((link, index) => {
        link.classList.remove("clicked");
        if (index === parseInt(activeIndex)) {
          link.classList.add("clicked");
        }
      });
    }
  }

  function removeClickedClass(links) {
    links.forEach((link) => {
      link.classList.remove("clicked");
    });
  }
  /**
   * hiddenLang
   */
  let lang = document.querySelector(".langWrap");

  let hiddenLang = document.querySelector(".hiddenLang");

  //lang btn 클릭
  lang.addEventListener("click", () => {
    hiddenLang.classList.toggle("active");
  });

  /**
   * NAVBAR
   */

  const navToggler = document.querySelector(".toggleBtn");
  const overlay = document.querySelector(".hiddenNav");
  let chageMenu = false;

  navToggler.addEventListener("click", () => {
    overlay.classList.toggle("active");
    navToggler.classList.toggle("active");
    document.body.style.overflowY = chageMenu ? "auto" : "hidden";

    let links = overlay.querySelectorAll("nav ul a");
    links.forEach((link) => {
      link.addEventListener("click", function () {
        overlay.classList.remove("active");
        navToggler.classList.remove("active");
      });
    });

    chageMenu = !chageMenu;
  });
}); //end
