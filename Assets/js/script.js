class Navbar {
  constructor(bars, navList, navLinks, mark) {
    this.bars = document.querySelector(bars);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelector(navLinks);
    this.mark = document.querySelector(mark);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.bars.classList.toggle(this.activeClass);
    this.mark.classList.toggle(this.activeClass);
  }

  addClickEvent() {
    this.bars.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.bars) {
      this.addClickEvent();
    }
    return this;
  }
}

const navBar = new Navbar(".bars", ".navbar", ".list li", ".mark");

navBar.init();
