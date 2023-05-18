const progressNumber = document.querySelectorAll('.progress-text span')
const progressBar = document.querySelectorAll('.progress-percent')
const navbarLinks = document.querySelectorAll('.navbar-link')
const sections = document.querySelectorAll('section')
const navbar = document.querySelector('.navbar')
const navbarOffsetTop = navbar.offsetTop;

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= navbarOffsetTop) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }

    if (window.pageYOffset > sections[1].offsetTop * 0.7) {
        progressBar.forEach((progress, idx) => {
            progress.style.width = `${+progressNumber[idx].textContent}%`
            progress.style.transitionDelay = `${idx * 0.2}s`
            // console.log(progressNumber[idx])
        })
    }
    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 10) {
            navbarLinks.forEach((navbarLink) => {
                navbarLink.classList.remove("current");
            });
            navbarLinks[i].classList.add("current");
        }
    });
})



navbarLinks.forEach((link, idx) => {
    const indexOf = sections[idx]
    link.addEventListener('click', (e) => {
        link.classList.add('current')
        e.preventDefault()
        idx === 0 ? scrollToWhere(0) :
            scrollToWhere(indexOf.offsetTop + 10)
    })
})

function scrollToWhere(x) {
    window.scrollTo({
        top: x,
        behavior: 'smooth'
    })
}

// window.addEventListener("resize", () => {
//     window.location.reload();
// });


const form = document.forms[0]
const regege = /\d/
const at = `@`
const dotCom = `.com`
form.addEventListener('input', (e) => {
    e.preventDefault()
    const name = form['name']
    const email = form['email']
    const textarea = form['textarea']
    const submit = form[`submit`]

    if (name.value && !regege.test(name.value)) {
        name.classList.add('green')
        name.classList.remove('red')
    } else {
        name.classList.remove('green')
        name.classList.add('red')
    }

    if (email.value.includes(at) && email.value.includes(dotCom)) {
        email.classList.add('green')
        email.classList.remove('red')
    } else {
        email.classList.remove('green')
        email.classList.add('red')
    }

    if (textarea.value) {
        textarea.classList.add('green')
        textarea.classList.remove('red')
    } else {
        textarea.classList.remove('green')
        textarea.classList.add('red')
    }

    if (!name.value.length) {
        name.classList.remove(`green`)
        name.classList.remove('red')
    }

    if (!email.value.length) {
        email.classList.remove(`green`)
        email.classList.remove('red')
    }

    if (!textarea.value.length) {
        textarea.classList.remove(`green`)
        textarea.classList.remove('red')
    }

    if (textarea.value && email.value.includes(dotCom) && email.value.includes(at) && name.value) {
        submit.disabled = false
    } else {
        submit.disabled = true
    }
})

form.addEventListener(`submit`, (e) => {
    e.preventDefault()
    const name = form['name']
    const email = form['email']
    const textarea = form['textarea']

    if (textarea.classList.contains(`green`) && email.classList.contains(`green`) && name.classList.contains(`green`)) {
        alert(`true`)
    }
})