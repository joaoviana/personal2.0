const catVids = [
  { name: 'CATS, THE Movie, how creepy is that trailer!' , link: 'https://www.youtube.com/watch?v=gq50F-IDXDc' },
  { name: 'This one requires having a cat.' , link: 'https://www.youtube.com/watch?v=xbs7FT7dXYc' },
  { name: 'This one requires having an ANGRYYYYYY cat.' , link: 'https://www.youtube.com/watch?v=EtSZekdu0bg' },
  { name: 'Apparently there are FIFTEEEEEN things u need to know about a cat. lol.' , link: 'https://www.youtube.com/watch?v=MCBZFG2WB1Y' },
  { name: "world's smallest cats... v interesting", link: 'https://www.youtube.com/watch?v=eNeRyBUCGV4' }
]

/**
 * scrolls to top of the page
 */
const scrollToTop = (() => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 16);
    }
});

/**
 * Event Listener - button 'Next' checks user input
 * if 'yes' or similar, show more about me
 * if 'no' or similar, show cat video
 * if nothing similar to the two above, show error message.
 */
document.getElementById("answerbutton").addEventListener("click", ((event) => {
  event.preventDefault();
  let answer = document.getElementById('answer').value;
  let yesRegex = /y.?|sure.?|ok.?/gi;
  let noRegex = /n.?|hell no.?/gi;
  if (answer.length > 0) {
    let form = document.getElementsByClassName('header__box')[0];
    form.classList.add('disabled');
    if (yesRegex.test(answer)) {
      let nav = document.getElementById('nav');
      let sections = document.getElementById('sections');
      nav.classList.remove('disabled');
      sections.classList.add('flex');
      sections.classList.remove('disabled');
    } else if (noRegex.test(answer)) {
      generateVideoLink();
      let messageIfNo = document.getElementById('no-message');
      messageIfNo.classList.remove('disabled'); 
    } else {
      let message = document.getElementById('message');
      message.classList.remove('disabled');
    }
  }
}));

/**
 * Generate video link - injects href and its innerHTML with one of the objs from catVids array
 */
const generateVideoLink = (() => {
  let videoLink = document.getElementById('video-link');
  let section = document.getElementById('section-no');
  // generating the cat video link to choose from
  let date = new Date();
  let today = Math.floor(Number(date.getDate()) + getRandomNumberBetween(0,4));

  if (today > 4) {
    let normalisedNumber = Math.floor((today) / 4);
    console.log(today);
    
    videoLink.href = catVids[normalisedNumber].link;
    videoLink.innerHTML = catVids[normalisedNumber].name;
  } else {
    videoLink.href = catVids[today].link;
    videoLink.innerHTML = catVids[today].name;
  }

  section.classList.remove('disabled'); 
  section.scrollIntoView();
});


/**
 * gets random number between a max and a min - range
 * @param {Number} max 
 * @param {Number} min 
 */
const getRandomNumberBetween  = ((max, min) => Math.random() * (max - min) + min);