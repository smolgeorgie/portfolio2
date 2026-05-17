/* lang.js — NL/EN language toggle for portfolio */
(function () {
  var LANG_KEY = 'portfolio_lang';

  var translations = {
    nl: {
      'nav.home': 'Home',
      'nav.my-work': "Mijn werk",
      'nav.photos': "Foto’s",
      'nav.blogs': 'Blogs',
      'nav.posters': 'Posters',
      'lang.toggle': 'English',
      'index.who-what-where': 'WieWatWaar?',
      'index.bio': 'Welkom! Ik ben Ilona, een afgestudeerde marketeer en frontend designer & developer. In 2025 heb ik mijn opleiding Frontend Design & Development afgerond aan de Hogeschool van Amsterdam, met een extra curriculum in Cybersecurity. Door mijn laatste jaar en mijn kijkje in de wereld van cybersecurity is mijn affiniteit met de ICT-wereld vergroot. In mijn vrije tijd werk ik aan eigen projecten om mijn skills bij te houden en heb ik steeds meer interesse gekregen in alles wat met computers te maken heeft. Ik ben misschien nog een beginner, maar een uitdaging ga ik nooit uit de weg! Naast alle technische snufjes houd ik me ook graag bezig met creatieve projecten, niet alleen het ontwerpen van websites en posters, maar ook fotografie. Neem gerust een kijkje in mijn portfolio!',
      'index.profile-heading': 'Profiel',
      'index.music-label': '🎵 Nu luisteren:',
      'index.my-work-heading': 'Mijn werk',
      'label.name': 'Naam:',
      'label.age': 'Leeftijd:',
      'label.location': 'Woonplaats:',
      'label.company': 'Bedrijf:',
      'label.role': 'Functie:',
      'label.education': 'MBO / HBO:',
      'label.schools': 'Scholen:',
      'label.passions': 'Passies:',
      'value.passions': 'Programmeren, Designen, Fotografie',
      'audio.fallback': 'Jouw browser ondersteunt geen audio.',
      'krabbels.title': '💬 Krabbels',
      'krabbels.submit': 'Krabbel sturen 📨',
      'krabbels.placeholder-name': 'Jouw naam',
      'krabbels.placeholder-msg': 'Laat een berichtje achter…',
      'werk.section-title': 'Projecten',
      'werk.credit-card-desc': 'Interactieve creditcard-animatie als CSS/JS experiment.',
      'werk.milledoni-desc': 'AI-gestuurde gift-finder met SvelteKit-frontend.',
      'werk.paer-desc': 'Studio-website voor creatief bureau Paer Studio.',
      'werk.fdnd-desc': 'Open-source curriculumsite voor FDND aan de HvA.',
      'tag.desktop-only': 'Desktop only',
      'tag.blog': 'Blog',
      'photos.section-title': 'Fotografie',
      'photos.description': 'Ik ben hobbyist fotograaf met wat ervaring in bedrijfsfotografie. Hieronder een selectie van mijn werk. Nieuw materiaal volgt binnenkort!',
      'posters.section-title': 'Poster & Grafisch Ontwerp',
      'posters.description': 'Naast digitale producten ontwerp ik ook grafische materialen zoals posters, flyers en andere printproducten. Hieronder een selectie van mijn grafisch werk.',
      'tab.blogs': '📝 Blogs',
      'tab.photos': "📷 Foto’s",
      'tab.posters': '🎨 Posters',
      'blog.back': '← Terug naar blogs',
      'footer.text': '© 2025 Ilona van Oosbree. Gebouwd met ❤️ en pure HTML &amp; CSS.',
    },
    en: {
      'nav.home': 'Home',
      'nav.my-work': 'My Work',
      'nav.photos': 'Photos',
      'nav.blogs': 'Blogs',
      'nav.posters': 'Posters',
      'lang.toggle': 'Nederlands',
      'index.who-what-where': 'Who What Where?',
      'index.bio': "Welcome! I'm Ilona, a graduated marketer and frontend designer & developer. In 2025 I completed my Frontend Design & Development degree at the Amsterdam University of Applied Sciences, with an additional curriculum in Cybersecurity. My final year and exposure to the world of cybersecurity deepened my passion for the ICT field. In my spare time I work on personal projects to keep my skills sharp, and I've developed a growing interest in everything computer-related. I may still be a beginner, but I never back away from a challenge! Beyond all the technical stuff, I also enjoy creative projects: not just designing websites and posters, but also photography. Feel free to explore my portfolio!",
      'index.profile-heading': 'Profile',
      'index.music-label': '🎵 Now playing:',
      'index.my-work-heading': 'My Work',
      'label.name': 'Name:',
      'label.age': 'Age:',
      'label.location': 'Location:',
      'label.company': 'Company:',
      'label.role': 'Position:',
      'label.education': 'MBO / HBO:',
      'label.schools': 'Schools:',
      'label.passions': 'Passions:',
      'value.passions': 'Programming, Design, Photography',
      'audio.fallback': 'Your browser does not support audio.',
      'krabbels.title': '💬 Krabbels',
      'krabbels.submit': 'Send a message 📨',
      'krabbels.placeholder-name': 'Your name',
      'krabbels.placeholder-msg': 'Leave a message…',
      'werk.section-title': 'Projects',
      'werk.credit-card-desc': 'Interactive credit card animation as a CSS/JS experiment.',
      'werk.milledoni-desc': 'AI-powered gift finder with SvelteKit frontend.',
      'werk.paer-desc': 'Studio website for creative agency Paer Studio.',
      'werk.fdnd-desc': 'Open-source curriculum site for FDND at HvA.',
      'tag.desktop-only': 'Desktop only',
      'tag.blog': 'Blog',
      'photos.section-title': 'Photography',
      'photos.description': "I'm a hobbyist photographer with some experience in corporate photography. Below is a selection of my work. New material coming soon!",
      'posters.section-title': 'Poster & Graphic Design',
      'posters.description': 'Besides digital products, I also design graphic materials such as posters, flyers and other print products. Below is a selection of my graphic work.',
      'tab.blogs': '📝 Blogs',
      'tab.photos': '📷 Photos',
      'tab.posters': '🎨 Posters',
      'blog.back': '← Back to blogs',
      'footer.text': '© 2025 Ilona van Oosbree. Built with ❤️ and pure HTML &amp; CSS.',
    }
  };

  function getCurrentLang() {
    return localStorage.getItem(LANG_KEY) || 'nl';
  }

  function applyLang(lang) {
    var t = translations[lang] || translations.nl;
    document.documentElement.lang = lang;
    localStorage.setItem(LANG_KEY, lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) {
        el.placeholder = t[key];
      }
    });

    document.querySelectorAll('.lang-toggle').forEach(function (el) {
      if (t['lang.toggle'] !== undefined) {
        el.textContent = t['lang.toggle'];
      }
    });

    var titleAttr = 'data-title-' + lang;
    var titleVal = document.documentElement.getAttribute(titleAttr);
    if (titleVal) {
      document.title = titleVal;
    }
  }

  function toggleLang() {
    applyLang(getCurrentLang() === 'nl' ? 'en' : 'nl');
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang-toggle').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        toggleLang();
      });
    });
    applyLang(getCurrentLang());
  });
})();
