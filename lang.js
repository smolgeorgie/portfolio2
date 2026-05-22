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
      'photos.album-bedrijf': 'Bedrijfsfotografie',
      'photos.album-hobby': 'Hobby',
      'posters.section-title': 'Poster & Grafisch Ontwerp',
      'posters.description': 'Naast digitale producten ontwerp ik ook grafische materialen zoals posters, flyers en andere printproducten. Hieronder een selectie van mijn grafisch werk.',
      'tab.blogs': '📝 Blogs',
      'tab.photos': "📷 Foto’s",
      'tab.posters': '🎨 Posters',
      'blog.back': '← Terug naar blogs',
      'blog.milledoni.title': 'Milledoni: een AI-first cadeausite bouwen in SvelteKit',
      'blog.milledoni.desc': 'AI-gestuurde cadeaufinder met SvelteKit en OpenAI integratie.',
      'blog.paer.title': 'Paer Studio: Samen bouwen aan een creatief bureau',
      'blog.paer.desc': 'Studio-website voor creatief bureau Paer Studio.',
      'blog.fdnd.title': 'FDND Programma Website',
      'blog.fdnd.desc': 'Open-source curriculumsite voor FDND aan de HvA.',
      'blog.milledoni.content': `<article class="blogpost">
    <header>
        <h1>Milledoni: een AI-first cadeausite bouwen in SvelteKit</h1>
        <p>
        In deze blogpost vertel ik hoe ik samen met mijn team aan de Milledoni website heb gewerkt,
        wat de vraag van de opdrachtgever was en hoe de AI-functie uiteindelijk in stand is gekomen.
        </p>
    </header>
    <section>
        <h2>De vraag van de opdrachtgever</h2>
        <p>
        De vraag van onze opdrachtgever was het aanmaken van een websiteconcept.
        De Milledoni website bestond eigenlijk al, maar de opdrachtgever was niet tevreden met het design.
        Dit komt omdat veel mensen vastliepen op mobiel, en omdat de UI heel erg verouderd is.
        </p>
        <p>
        Daarnaast was het de bedoeling dat de website AI-first runde.
        Je hebt namelijk een AI-chat, die jij prompt meegeeft, en aan de hand van de prompt kiest hij passende cadeaus uit.
        Bijvoorbeeld: <strong>"Ik zoek een cadeau voor een vriendin dat van koken houdt."</strong>
        </p>
        <p>
        De vraag aan ons, was of wij het AI-first konden maken.
        Dat de functionaliteit werkt van de lijst en dat we een gesprek kunnen voeren met de AI-chatbot.
        </p>
    </section>
    <img src="../images/milledoni-aiprompt.webp" alt="Milledoni AI Chatbot">
    <section>
        <h2>Van VueJs naar Svelte 5 + SvelteKit</h2>
        <p>
        De opdrachtgever had al gewerkt aan de AI-chatbot, maar dit was in VueJs,
        een framework wat wij niet gebruiken. Wij gebruiken namelijk Svelte 5 + SvelteKit.
        Het eerste knelpunt was al in zicht: het maken van de AI-chatbot met een nieuw framework.
        En het vraagstuk: hoe zetten wij de AI-functie op de juiste manier op, en hoe gaan we het werkend maken?
        </p>
    </section>
    <section>
        <h2>De opzet: AI koppelen aan de cadeaulijst</h2>
        <p>
        We hebben eerst de opzet gemaakt: het toevoegen van de OpenAI API key aan ons project,
        en vanuit daar kijken hoe we dit konden connecten aan de lijst.
        En het belangrijkste: welke prompts moeten we meegeven om de chatbot een bepaalde rol te laten aanhouden.
        </p>
        <p>
        Er waren meerdere vragen, en meerdere knelpunten waar we tegenaan liepen.
        Het was complexe code die we nog nooit eerder hadden gebruikt.
        Een nieuwe uitdaging.
        </p>
    </section>
    <section>
        <h2>De AI als vriendelijke helper</h2>
        <p>
        We hebben samen gekeken naar de functies die we wilden voor de AI-prompt,
        en de taal die we over willen laten brengen.
        Zo hebben we met de opdrachtgever gepraat over de toon en de stijl.
        Een vriendelijke helper, met een doelgerichte vraag: <strong>"Wat zoek je?"</strong>
        </p>
        <p>
        De AI-chatbot helpt de gebruiker om gericht te zoeken naar cadeaus,
        zonder dat je zelf eindeloos door alle producten hoeft te scrollen.
        De prompt stuurt de AI aan om concrete vragen te stellen en passende cadeaus uit de lijst te kiezen.
        Hier onder kan je ook zien dat de foto's van de cadeaus worden weergegeven in de zoekresultaten aan de hand van de prompt die wordt meegegeven.
        </p>
    </section>
    <img src="../images/milledoni-searchresult.webp" alt="Milledoni AI Chatbot">
    <section>
        <h2>Mijn rol en het resultaat</h2>
        <p>
        In dit project heb ik meegedacht over de opzet van de AI-functie,
        de prompts geschreven en geholpen met het koppelen van de API aan de cadeaulijst in SvelteKit.
        Ook heb ik gelet op hoe de flow voor de gebruiker aanvoelt:
        van het stellen van de vraag aan de chatbot tot het zien van de cadeaus die hij teruggeeft.
        </p>
        <p>
        Ik heb dit zelf gepresenteerd aan de opdrachtgever,
        en zij waren zeer tevreden met de functionaliteit van de AI-functie.
        De AI-chatbot werkt, de lijst reageert op de antwoorden,
        en de site is een stuk moderner en gebruiksvriendelijker geworden dan de oude versie.
        </p>
    </section>
</article>`,
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
      'photos.album-bedrijf': 'Business Photography',
      'photos.album-hobby': 'Hobby',
      'posters.section-title': 'Poster & Graphic Design',
      'posters.description': 'Besides digital products, I also design graphic materials such as posters, flyers and other print products. Below is a selection of my graphic work.',
      'tab.blogs': '📝 Blogs',
      'tab.photos': '📷 Photos',
      'tab.posters': '🎨 Posters',
      'blog.back': '← Back to blogs',
      'blog.milledoni.title': 'Milledoni: Building an AI-first Gift Website in SvelteKit',
      'blog.milledoni.desc': 'AI-powered gift finder with SvelteKit and OpenAI integration.',
      'blog.paer.title': 'Paer Studio: Building a Creative Agency Together',
      'blog.paer.desc': 'Studio website for creative agency Paer Studio.',
      'blog.fdnd.title': 'FDND Programme Website',
      'blog.fdnd.desc': 'Open-source curriculum site for FDND at HvA.',
      'blog.milledoni.content': `<article class="blogpost">
    <header>
        <h1>Milledoni: Building an AI-first Gift Website in SvelteKit</h1>
        <p>
        In this blog post, I'll share how I worked with my team on the Milledoni website,
        what the client's requirements were, and how the AI functionality ultimately came together.
        </p>
    </header>
    <section>
        <h2>The Client's Request</h2>
        <p>
        Our client asked us to create a website concept.
        The Milledoni website already existed, but the client wasn't satisfied with the design.
        This was because many people got stuck on mobile, and the UI was very outdated.
        </p>
        <p>
        Additionally, the website needed to be AI-first.
        You have an AI chat where you give it a prompt, and based on the prompt, it selects suitable gifts.
        For example: <strong>"I'm looking for a gift for a girlfriend who loves cooking."</strong>
        </p>
        <p>
        The question to us was whether we could make it AI-first.
        That the functionality of the list works and that we can have a conversation with the AI chatbot.
        </p>
    </section>
    <img src="../images/milledoni-aiprompt.webp" alt="Milledoni AI Chatbot">
    <section>
        <h2>From VueJs to Svelte 5 + SvelteKit</h2>
        <p>
        The client had already worked on the AI chatbot, but this was in VueJs,
        a framework we don't use. We use Svelte 5 + SvelteKit.
        The first bottleneck was already in sight: creating the AI chatbot with a new framework.
        And the question: how do we set up the AI function correctly, and how do we make it work?
        </p>
    </section>
    <section>
        <h2>The Setup: Connecting AI to the Gift List</h2>
        <p>
        We first created the setup: adding the OpenAI API key to our project,
        and from there looking at how we could connect this to the list.
        And most importantly: what prompts do we need to give to make the chatbot maintain a certain role.
        </p>
        <p>
        There were multiple questions and multiple bottlenecks we encountered.
        It was complex code that we had never used before.
        A new challenge.
        </p>
    </section>
    <section>
        <h2>The AI as a Friendly Helper</h2>
        <p>
        We looked together at the functions we wanted for the AI prompt,
        and the language we wanted to convey.
        We talked with the client about the tone and style.
        A friendly helper, with a targeted question: <strong>"What are you looking for?"</strong>
        </p>
        <p>
        The AI chatbot helps the user to search specifically for gifts,
        without having to scroll endlessly through all the products yourself.
        The prompt directs the AI to ask concrete questions and choose suitable gifts from the list.
        Below you can also see that the photos of the gifts are displayed in the search results based on the prompt that is provided.
        </p>
    </section>
    <img src="../images/milledoni-searchresult.webp" alt="Milledoni AI Chatbot">
    <section>
        <h2>My Role and the Result</h2>
        <p>
        In this project, I contributed to the setup of the AI function,
        wrote the prompts, and helped with connecting the API to the gift list in SvelteKit.
        I also paid attention to how the flow feels for the user:
        from asking the chatbot a question to seeing the gifts it returns.
        </p>
        <p>
        I presented this myself to the client,
        and they were very satisfied with the functionality of the AI feature.
        The AI chatbot works, the list responds to the answers,
        and the site has become much more modern and user-friendly than the old version.
        </p>
    </section>
</article>`,
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
