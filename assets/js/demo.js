var scroller = document.querySelector('#scroller');

scroller.addEventListener('click', scrollerClick);

function scrollerClick() {
  ezscroll.scrollToBottom();
}
