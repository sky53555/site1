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
    } else if (window.scrollY < 10) {
      header.classList.remove("active");
    }
  });
  window.addEventListener("scroll", function () {
    // 문서의 전체 높이 계산
    var scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    // 현재 스크롤 위치가 문서의 맨 아래에 도달했는지 확인
    if (window.scrollY >= scrollableHeight) {
      backtoTop.classList.add("active");
    } else {
      backtoTop.classList.remove("active");
    }
  });

  function toggleButton() {
    if (window.innerWidth <= 320) {
      backtoTop.style.display = "none"; // 화면 너비가 320픽셀 이하면 버튼을 숨김
    } else {
      backtoTop.style.display = "block"; // 그 외의 경우에는 버튼을 보이게 함
      backtoTop.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // 스크롤을 부드럽게 상단으로 이동
        });
      });
    }
  }
  // window.addEventListener("scroll", function () {
  //   if (window.scrollY >= 50) {
  //     header.classList.add("active");
  //     backtoTop.classList.add("active");
  //   } else if (window.scrollY < 10) {
  //     header.classList.remove("active");
  //     backtoTop.classList.remove("active");
  //   }
  // });

  // function toggleButton() {
  //   if (window.innerWidth <= 320) {
  //     backtoTop.style.display = "none"; // 화면 너비가 320픽셀 이하면 버튼을 숨김
  //   } else {
  //     backtoTop.style.display = "block"; // 그 외의 경우에는 버튼을 보이게 함
  //     backtoTop.addEventListener("click", function () {
  //       window.scrollTo({
  //         top: 0,
  //         behavior: "smooth", // 스크롤을 부드럽게 상단으로 이동
  //       });
  //     });
  //   }
  // }

  // 페이지 로드 시 버튼 상태 확인
  toggleButton();

  // 창 크기가 변경될 때마다 버튼 상태 업데이트
  window.addEventListener("resize", toggleButton);

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
