# cheen — website

Black & white one-page site with neon green outline buttons. Plain HTML/CSS/JS, no build step.

## Files

```
index.html
style.css
script.js
images/
  photo-1.jpg     ← singing photo (top of page)
  photo-2.jpg     ← guitar photo (about section)
  3adi-thumb.jpg  ← thumbnail for the 3adi video
```

## What updates by itself

- **Shows** — pulled live from Bandsintown. Add or edit dates in Bandsintown for Artists and the site updates.

## Adding a video

In `index.html`, copy the `<div class="yt" …>` block, change `data-id` to the code after `youtu.be/` (or `watch?v=`), and point the `<img>` at a new thumbnail in `images/`.

## Contact form (one-time setup)

The form emails you without showing your address on the site.

1. Go to **web3forms.com**, enter **cherineamr@icloud.com** and click **Create Access Key**.
2. Web3Forms emails the key to that inbox.
3. In `index.html`, replace `YOUR_ACCESS_KEY` with that key.
4. To switch on the "I am human" check (hCaptcha), log in to the Web3Forms dashboard with the same email and enable hCaptcha for the form.

## Put it online with GitHub Pages

1. Create a new repository on GitHub (e.g. `cheen`).
2. Click **Add file → Upload files** and drag in `index.html`, `style.css`, `script.js` and the `images` folder. Commit.
3. Go to **Settings → Pages**. Under *Source* choose **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
4. After a minute the site is live at `https://YOUR-USERNAME.github.io/cheen/`.

To use your own domain, add it in **Settings → Pages → Custom domain**.
