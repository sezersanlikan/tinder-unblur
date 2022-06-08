# tinder-unblur
Tinder.com unblur script - see who likes you - only javascript code

1- Click the web page https://tinder.com/app/likes-you <br>
2- Open the console from the browser<br>
3- Paste the following command into the console<br>

```
async function unblur() {
  const teasers = await fetch("https://api.gotinder.com/v2/fast-match/teasers", { "headers": { "X-Auth-Token": localStorage.getItem('TinderWeb/APIToken') }}).then(res => res.json()).then(res => res.data.results);
  const teaserEls = document.querySelectorAll('.Expand.enterAnimationContainer > div:nth-child(1)');
  
  for (let i = 0; i < teaserEls.length; ++i) {
    const teaser = teasers[i];
    const teaserEl = teaserEls[i];
    
    const teaserImage = teaser.user.photos[0].url;
    
    teaserEl.style.backgroundImage = `url(${teaserImage})`;
  }
}

setInterval(() => {
    if (location.pathname === '/app/likes-you') {
      unblur();
    }
}, 5000);
```

