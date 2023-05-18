// scroll events
const aboutContent = document.querySelector(".about-content");
const sections = document.querySelectorAll("section");
const projects = document.querySelectorAll(".project");
const progressNumber = document.querySelectorAll(".progress-text span");
const progressBar = document.querySelectorAll(".progress-percent");

window.addEventListener("scroll", () => {
  loadProjects();
  if (window.scrollY > sections[1].offsetTop - 70) {
    setTimeout(() => {
      progressBar.forEach((progress, idx) => {
        progress.style.width = `${+progressNumber[idx].textContent}%`;
        progress.style.transitionDelay = `${idx * 0.2}s`;
      });
    }, 500);
    aboutContent.classList.add("show");
    sectionHeaders[0].classList.add("show");
  }
  if (window.scrollY > sections[2].offsetTop - 450) {
    sectionHeaders[1].classList.add("show");
  }
});

function loadProjects() {
  triggerBottom = window.innerHeight * 0.8;
  projects.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add(`show`);
    }
  });
}

const scrollTop = document.querySelector(".scrollTop");
scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// end scroll events

// load events
const sectionHeaders = [
  document.querySelector(".section-2 h1"),
  document.querySelector(".section-3 h1"),
];
sectionHeaders.forEach((h1) => {
  h1.innerHTML = h1.textContent
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 60}ms">${letter}</span>`
    )
    .join(``);
});

window.addEventListener("load", () => {
  loadProjects();
});
// end of Load Events

// Section 1
const bubble = document.querySelector(".bubble");
const button = document.querySelector(".knowmore");
const element = document.querySelector("#section-1-title");
const h1 = "Oi, meu nome é <span>Samuel Colares</span>";
const speed = 60;

function autoType(element, text, speed) {
  return new Promise((resolve, reject) => {
    let idx = 0;
    const intervalId = setInterval(() => {
      element.innerHTML = text.slice(0, idx);
      idx++;
      if (idx > text.length) {
        clearInterval(intervalId);
        resolve();
      }
    }, speed);
  });
}
async function typeText(element, text, speed) {
  await autoType(element, text, speed);
  console.log("Texto digitado!");
}

typeText(element, h1, speed);
setTimeout(() => {
  typeText(
    element.nextElementSibling,
    "E eu sou um front-end developer",
    speed
  );
  button.classList.add("show");
  bubble.classList.add("mobile");
}, speed * h1.length + speed);

window.addEventListener("mousemove", () => {
  bubble.classList.add("show");
});

button.addEventListener("click", () => {
  window.scrollTo({
    top: sections[1].offsetTop,
    behavior: "smooth",
  });
});

const switchMode = [
  document.querySelector(".change input[type=checkbox]"),
  document.querySelector(".sunMoon"),
];

switchMode[0].addEventListener("click", changeColors);
switchMode[1].addEventListener("click", () => {
  if (switchMode[0].checked) {
    switchMode[0].checked = false;
  } else {
    switchMode[0].checked = true;
  }
  changeColors()
});

function changeColors() {
  if (switchMode[0].checked) {
    document.querySelector("html").classList.add("dark");
  } else {
    document.querySelector("html").classList.remove("dark");
  }
}

//   document.querySelector("html").classList.toggle("dark");

// sections[0].addEventListener('click', () => {
//     document.querySelector('html').classList.toggle('dark')
// })

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.querySelector("html").classList.add("dark");
  switchMode[0].checked = true;
} else {
  document.querySelector("html").classList.remove("dark");
  switchMode[0].classList.remove("changed");
}
//End Section 1
