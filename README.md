# Reproduction for vite [issue  #1957](https://github.com/vitejs/vite/issues/1957)

```
git clone https://github.com/NiaMori/duplicate-preload-link.git

cd duplicate-preload-link
yarn
yarn build
```

After build, in `dist/index.html` duplicate preload link is generated:

```html
<script type="module" crossorigin src="/assets/index.2e98b9a1.js"></script>
<link rel="modulepreload" href="/assets/a.aaa5c2d2.js">
<link rel="modulepreload" href="/assets/common.d435af7b.js">
<link rel="modulepreload" href="/assets/b.9b29a20c.js">
<link rel="modulepreload" href="/assets/common.d435af7b.js">
<link rel="modulepreload" href="/assets/common.d435af7b.js">
```
