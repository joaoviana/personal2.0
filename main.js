const scrollToTop = (() => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 16);
    }
});

const checkInput = (() => {
    let answer = document.getElementById('answer').value;
    let yesRegex = /y.?|sure.?/gi;
    let noRegex = /n.?|hell no.?/gi;
    console.log(yesRegex.test(answer))
});