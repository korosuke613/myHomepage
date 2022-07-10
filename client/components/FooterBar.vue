<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12" style="background:#AAA;height:auto;">
        <a href="#top_jump" style="color:#333333">▲PAGE TOP</a>
        <br>
        <component :is="script" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" async />

        <!-- korosuke613.github.io -->
        <ins
          class="adsbygoogle"
          style="display:block"
          data-ad-client="ca-pub-7246355771451460"
          data-ad-slot="1166933944"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <component :is="script">
          (adsbygoogle = window.adsbygoogle || []).push({});
        </component>
        <br>
        <div class="text-center">
          source:
          <a
            href="https://github.com/korosuke613/myHomepage"
            target="_blank"
            rel="noopener"
            onClick="ga('send', 'event', 'link', 'source', 'korosuke613.github.io')"
            class="footLink"
          >korosuke613.github.io</a>
          <br>fonts:
          <a
            href="https://fonts.google.com/specimen/Anton"
            target="_blank"
            rel="noopener"
            onClick="ga('send', 'event', 'link', 'fonts', 'Anton')"
            class="footLink"
          >Anton</a>,
          <a
            href="http://mplus-fonts.osdn.jp/"
            target="_blank"
            rel="noopener"
            onClick="ga('send', 'event', 'link', 'fonts', 'mplus')"
            class="footLink"
          >M+ FONTS</a>
          <br>icons:
          <a
            href="http://fontawesome.io/icons/"
            target="_blank"
            rel="noopener"
            onClick="ga('send', 'event', 'link', 'icons', 'fontawesome')"
            class="footLink"
          >Font Awesome</a>
        </div>
        <br>
        <div style="font-family: 'Anton',sans-serif;" class="text-right">
          ©2017 Futa HIRAKOBA inc.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
