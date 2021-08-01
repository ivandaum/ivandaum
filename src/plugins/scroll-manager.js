import Vue from 'vue';
import anime from 'animejs';

const easing = 'easeInOutExpo';
const duration = 1500;

const ScrollManager = {
  scroll: 0,
  scrollEased: 0,
  oldScroll: 0,
  spinY: 0,
  funcOnScroll: [],
  canScroll: true,
  bodyLocked: false,

  init() {
    this.$scroller = window;
    this.$app = document.querySelector('#app');
    this.$view = document.querySelector('.js-view');
  },

  onScroll() {
    if (!this.canScroll || !this.$view) {
      return false;
    }

    this.oldScroll = this.scroll;
    this.scroll = this.getScrollTop();
    this.scrollEased += (this.scroll - this.scrollEased) * 0.3;
    this.spinY = this.scroll - this.oldScroll;
    this.isScrolling = this.spinY !== 0;
    this.funcOnScroll.map(func => func());
  },

  lock() {
    if (this.bodyLocked) {
      return false;
    }

    this.bodyLocked = true;
    this.canScroll = false;

    this.$view.style.transform = `translate3d(0, ${-this.scroll}px, 0)`;

    this.$scroller.scrollTo(0, 0);
    document.body.classList.add('locked');
  },

  unlock() {
    this.canScroll = true;
    this.bodyLocked = false;

    document.body.classList.remove('locked');
    this.$view.style.transform = ``;
    this.snapTo(this.scroll);
  },

  getScrollTop() {
    return window.pageYOffset || this.$scroller.scrollTop || 0;
  },

  /** On scroll events */

  addQueue(func) {
    this.funcOnScroll.push(func);
    return this.funcOnScroll.length - 1;
  },

  removeQueue(index) {
    if (this.funcOnScroll[index]) {
      this.funcOnScroll.splice(index, 1);
      return true;
    }

    return false;
  },

  /** DOM functions */

  scrollTo({ y, complete }) {
    const targets = { y: this.scroll };

    anime({
      targets,
      y,
      duration,
      easing,
      update: () => {
        this.$scroller.scrollTo(0, targets.y);
      },
      complete,
    });
  },

  snapTo(y) {
    this.scroll = y;
    this.scrollEased = y;
    this.$scroller.scrollTo(0, y);
  },
};

ScrollManager.init();
Vue.prototype.ScrollManager = ScrollManager;
