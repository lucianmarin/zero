/* ============================================================
   ZERO. — Weight loss with insulin
   Bilingual content (EN / RO) + rendering, language switching,
   menu, scroll-spy rail, reveal animations.
   ============================================================ */
(() => {
  "use strict";

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----------------------------------------------------------
     Content — English
     ---------------------------------------------------------- */
  const EN = {
    meta: {
      title: "Zero",
      desc: "Zero — weight loss with insulin. How fasting insulin drives obesity, and how longer eating intervals (24–72h) reverse it. Blood tests to confirm and monitor."
    },
    ui: {
      nav: { method: "Method", experiment: "Experiment", tests: "Blood tests" },
      menu: {
        eyebrow: "Contents",
        note: "Zero — weight loss with insulin.",
        right: "Science of the 2020s — not the 50s.",
        open: "Menu",
        close: "Close menu"
      },
      hero: {
        eyebrow: "Insulin · Fasting · Blood tests",
        title: 'Weight loss<br>with insulin<span class="punct">.</span>',
        sub: "Your fasting insulin decides whether fat comes off or stays on. Eat to your insulin level — not to the clock.",
        cta: "Start — how obesity happens",
        cue: "scroll",
        legend: {
          white: "Normal time",
          orange: "Insulin time"
        },
        stats: [
          ["24–72h", "Eating intervals, adjusted to hunger"],
          ["10 kg", "Blood-test checkpoints while losing"],
          ["HOMA-IR", "The test that confirms it"]
        ]
      },
      foot: {
        tag: "The body's clock is insulin.",
        copy: "©2026. Zero.",
        top: "Back to top ↑"
      },
      statements: {
        s1: {
          num: "01.",
          big: "INSULIN.",
          text: "Insulin keeps the fat on — no matter what you try.",
          kicker: "METABOLIC LOCK",
          mark: "FASTING INSULIN · ZERO."
        },
        s3: {
          num: "02.",
          big: "CLOCK.",
          text: "The internal clock of the human body is insulin.",
          kicker: "BIOLOGICAL TIME",
          mark: "BODY CLOCK · INSULIN."
        },
        s7: {
          num: "03.",
          big: "TIMING.",
          text: "No food is bad as long as you know when to eat it.",
          kicker: "DIET & RHYTHM",
          mark: "TIME OVER DIET · ZERO."
        }
      },
      extras: {
        intervals: {
          cap: "Progressive intervals — move up as hunger adjusts",
          items: [
            ["24", "Eat once a day"],
            ["36", "The next step"],
            ["48", "Repeat while needed"],
            ["72", "Fast melt — not for everyone"]
          ]
        },
        callout: "A higher insulin level keeps nutrients locked in storage to keep you healthy.",
        options: [
          { label: "Option A", text: "Two meals a day. Zero calories in between." },
          { label: "Option B", text: "Modified three meals — one big meal, two snacks." }
        ],
        test1: {
          head: "Test 01",
          sub: "1600 kcal a day — half of maintenance",
          rows: [
            { title: "100 kcal every hour", sub: "16 × 100 kcal a day — insulin never drops", tag: "Gain" },
            { title: "800 kcal, two meals", sub: "2 × 800 kcal a day — insulin spikes twice", tag: "Maintain", tagClass: "tag--hold" },
            { title: "1600 kcal, one meal", sub: "1 × 1600 kcal a day — one spike, then a long fall", tag: "Loss", tagClass: "tag--loss" }
          ],
          cap: "Seven days × 16 waking hours — the same calories every day: grazing gains, two meals hold, one meal loses."
        },
        test2: {
          head: "Test 02",
          sub: "All the week's calories on day one — then 6 days of fasting",
          base: "start weight",
          phases: ["Days 1–2 · gain", "Days 3–4 · burn the gain", "Days 5–7 · below start"],
          cap: "Day 1 — every calorie of the week in one go. Days 2–7 — fasting. The week still ends below the starting weight.",
          aria: "Weight relative to the starting weight over seven days: above it on days 1 to 3, back at it on day 4, below it on days 5 to 7."
        },
        spikes: {
          head: "Diet guide",
          sub: "3 types of foods — 3 sizes of insulin spikes",
          rows: [
            {
              title: "Type 1 — Vegetables",
              sub: "Cooked or uncooked, in any combination with salt, spices, brine and vinegar. You can even enjoy them while hungry, inside your fasting window.",
              tag: "Low"
            },
            {
              title: "Type 2 — Fiber, protein, fat",
              sub: "Foods containing fiber, protein and healthy fats, combined into delicious meals. These are the foods that keep you healthy, don't cause weight gain and prevent diabetes.",
              tag: "Medium",
              tagClass: "tag--hold"
            },
            {
              title: "Type 3 — Sugar & white flour",
              sub: "Sugar and white flour in highly processed foods, fruit juices and even homemade jams — if eaten in large portions. You don't need to avoid them completely; just enjoy them on special occasions like holidays, birthdays and events, or set a rhythm for them — say, enjoying your favorite ice cream once every two weeks.",
              tag: "Huge",
              tagClass: "tag--loss"
            }
          ],
          cap: "Type 1 barely lifts insulin. Type 2 lifts it gently. Type 3 spikes it hard. What you eat decides how high insulin goes — when you eat decides the rest."
        },
        panel: {
          cap: "Monitor — every 10 kg",
          rows: [
            ["HOMA-IR & HOMA-B", "pancreas health"],
            ["ALT & AST", "liver health"],
            ["ApoB", "heart health"],
            ["eGFR", "kidney health"],
            ["hsCRP", "overall inflammation"]
          ],
          foot: "Every 10 kg step → better results."
        },
        donate: {
          note: "If you found the information here useful, share this page on social media.",
          cta: "Donate via PayPal",
          sub: "Since fasting is free",
          href: "https://www.paypal.com/donate/?hosted_button_id=FZ98QTQT792B6"
        }
      },
      sections: [
        {
          id: "s1", n: "01", title: "How does a normal person become obese", punct: "?",
          lead: "The biology is simple. Every extra kilogram of body fat raises fasting blood insulin.",
          body: "As insulin climbs higher with every extra kilogram, eating every time you are hungry — or eating three meals a day — makes you gain more and more weight. The weight progression is logarithmic. Fasting insulin keeps rising without the person knowing what is happening inside their body… until a blood test reveals their fasting insulin level. Then they will convince themselves that insulin keeps the fat on their body no matter what they try: caloric deficit, exercise, diets, supplements, meds, eating less, eating healthier, building tons of muscle for no reason at all, and so on."
        },
        {
          id: "s2", n: "02", title: "How do you reverse obesity as fast as it developed", punct: "?",
          lead: "",
          body: "Since your fasting insulin is no longer that of a normal person, you can't keep eating like one. So instead of two or three meals a day, you adjust your eating schedule to your insulin level by eating every 24h, 36h, 48h or 72h. You need to switch between these intervals progressively as your hunger adjusts. If you eat every 24h, hunger will start creeping in around the 16th hour and move later and later until you feel hungry exactly at 24h. When you get hungry at exactly 24h, you switch to a 36h or 48h eating schedule. You repeat the process when you get hungry at 48h — or, if you can't do more than 48h, you keep eating at 48h intervals. For obese persons, eating at 72h intervals melts fat even faster, but it is not for everyone. Each kilogram lost this way also lowers your fasting insulin level, so fat burn gets faster and faster with every repeated 48h–72h eating interval.",
          extra: "intervals"
        },
        {
          id: "s3", n: "03", title: "What about calories and nutrients", punct: "?",
          lead: "",
          body: "You don't have to worry about this. The human body is a <strong>(<span class=\"punct\">super</span>)intelligent</strong> meat computer. You can eat all your calories at 24h, 36h, 48h or 72h intervals and still lose weight by driving insulin as low as that of a skinny person. The internal clock of the human body is insulin — not the clock on your wrist or your phone. The human body doesn't know what time it is in the universe; it only knows how much insulin it needs to produce to keep you healthy. Because of this, you won't lose out on nutrients at all: a higher insulin level keeps nutrients locked in storage to keep you healthy. Just think about how humans lived millions of years ago when food was scarce — they built up fat in one place, then migrated to a place with abundant food and burned some of that body fat along the way.",
          extra: "callout"
        },
        {
          id: "s4", n: "04", title: "How do you maintain weight loss", punct: "?",
          lead: "",
          body: "To maintain the result, you have to lose all the fat from your tummy — that is how fasting insulin gets back down to the 2–4 levels of a normal person. Then you can eat at regular intervals: two meals a day with zero calories in between, or a modified three meals a day where you mimic one meal a day by having one big meal and two snacks, keeping insulin low.",
          extra: "options"
        },
        {
          id: "s5", n: "05", title: "What blood tests confirm high insulin", punct: "?",
          lead: "",
          body: "When you do a HOMA-IR blood test, both fasting glucose and fasting insulin are measured — but you can also do a fasting insulin test on its own. When you convince yourself that your body won't let go of fat no matter what you try, the culprit is a high fasting insulin level. To learn more about the biology of insulin from the science of the 2020s–2030s instead of the science of the 1950s–60s, get yourself educated by <strong>Dr. Jason Fung</strong> — then educate your doctor about how to reverse obesity and be a normal, healthy person for the rest of your life."
        },
        {
          id: "s6", n: "06", title: "How do you test insulin biology", punct: "?",
          lead: "",
          body: "We can put the theory to the test. Say an obese person needs to eat 1600 calories per day in a caloric deficit, down from 3200 calories a day for maintenance. Suppose they eat 100 calories every hour, plus 8 hours of sleep. Over the course of a week, such a person would consume only half the calories they need. Would they lose or gain weight by the end of the week? Each 100-calorie dose would keep insulin levels elevated until the next hour, so they wouldn't lose any weight at all — in fact, they would gain weight depending on their existing body fat (which correlates with fasting insulin levels): those with less body fat would gain less, while those with more would gain more. If they ate all 1600 calories in a single sitting once a day, they would lose weight. If they split it into two meals of 800 calories, that would simply maintain their current weight.",
          body2: "The second test is so simple even AI gets it. Feed someone all the calories they need for a week on the first day, then fast for the next six days. In the first two days they will gain weight, because insulin is high and glucose needs to be pushed into cells. Over the next two days they will lose the weight gained in the first two. In the following two days they will lose even more than their starting weight, because insulin gets so low. So was there even a caloric deficit to begin with?",
          extra: "test1",
          extra2: "test2"
        },
        {
          id: "s7", n: "07", title: "How do you optimize insulin spikes with diet", punct: "?",
          lead: "",
          body: "No food is bad as long as you know when to eat it. Time matters more than diet alone. There are three types of foods, causing low, medium and huge insulin spikes:",
          extra: "spikes"
        },
        {
          id: "s8", n: "08", title: "Is your kid obese", punct: "?",
          lead: "",
          body: "Tell him not to snack in between meals, to keep insulin low from one meal to the next. The body will self-adjust to the new eating schedule and the fat will be lost naturally. The process described above is only for adults. Skipping snacks alone will cut out 80% of the type 3 foods that cause huge insulin spikes."
        },
        {
          id: "s9", n: "09", title: "What about muscle loss", punct: "?",
          lead: "",
          body: "There is no such thing. The mitochondria in your muscles, organs and brain rebuild tissue using your body fat. Why do they do that? So you can survive and live longer. Scary, isn't it? Even an obese person eating at longer intervals gets healthier and healthier with every kilogram lost. And nobody stops you from exercising and building muscle while you lose weight."
        },
        {
          id: "s10", n: "10", title: "What blood tests should you monitor while losing weight", punct: "?",
          lead: "",
          body: "I monitored this process with blood tests at every 10kg of fat loss: HOMA-IR and HOMA-B for pancreas health, ALT and AST for liver health, ApoB for heart health, eGFR for kidney health and hsCRP for overall inflammation. Every single one of these improved at each 10kg step. So why worry? Just get healthier and stay that way.",
          extra: "panel",
          dark: true
        },
        {
          id: "s11", n: "11", title: "Disclaimer and donations", punct: ".",
          lead: "",
          body: "By modifying your eating habits around insulin and adopting a healthy lifestyle, you can reverse insulin resistance, obesity, prediabetes, type 2 diabetes and acanthosis nigricans. For other medical issues, see your doctor.",
          extra: "donate"
        }
      ]
    }
  };

  /* ----------------------------------------------------------
     Content — Română
     ---------------------------------------------------------- */
  const RO = {
    meta: {
      title: "Zero",
      desc: "Zero — scăderea în greutate cu insulină. Cum insulina în repaus alimentar întreține obezitatea și cum intervalele de masă de 24–72h o inversează. Analize de sânge pentru confirmare și monitorizare."
    },
    ui: {
      nav: { method: "Metodă", experiment: "Experiment", tests: "Analize de sânge" },
      menu: {
        eyebrow: "Cuprins",
        note: "Zero — scăderea în greutate cu insulină.",
        right: "Știința anilor 2020 — nu a anilor '50.",
        open: "Meniu",
        close: "Închide meniul"
      },
      hero: {
        eyebrow: "Insulină · Post · Analize de sânge",
        title: 'Scăderea în greutate<br>cu insulină<span class="punct">.</span>',
        sub: "Insulina pe nemâncate decide dacă grăsimea se topește sau rămâne. Mănâncă după nivelul insulinei — nu după ceas.",
        cta: "Începe — cum apare obezitatea",
        cue: "derulează",
        legend: {
          white: "Timpul normal",
          orange: "Timpul insulinei"
        },
        stats: [
          ["24–72h", "Intervale de masă, ajustate după foame"],
          ["10 kg", "Praguri de analize în timpul slăbirii"],
          ["HOMA-IR", "Analiza care confirmă totul"]
        ]
      },
      foot: {
        tag: "Ceasul corpului este insulina.",
        copy: "©2026. Zero.",
        top: "Înapoi sus ↑"
      },
      statements: {
        s1: {
          num: "01.",
          big: "INSULINA.",
          text: "Insulina menține grăsimea în corp — indiferent de ceea ce încerci.",
          kicker: "BLOCAJ METABOLIC",
          mark: "INSULINA BAZALĂ · ZERO."
        },
        s3: {
          num: "02.",
          big: "CEASUL.",
          text: "Ceasul intern al corpului uman este insulina.",
          kicker: "TIMP BIOLOGIC",
          mark: "CEASUL INTERN · INSULINA."
        },
        s7: {
          num: "03.",
          big: "TIMPUL.",
          text: "Niciun aliment nu este dăunător, atâta timp cât știi când să mănânci.",
          kicker: "DIETĂ ȘI RITM",
          mark: "TIMPUL PESTE DIETĂ · ZERO."
        }
      },
      extras: {
        intervals: {
          cap: "Intervale progresive — avansezi pe măsură ce foamea se adaptează",
          items: [
            ["24", "O masă pe zi"],
            ["36", "Pasul următor"],
            ["48", "Repetă cât e nevoie"],
            ["72", "Topire rapidă — nu pentru toți"]
          ]
        },
        callout: "Un nivel ridicat al insulinei menține nutrienții blocați în rezerve, asigurându-ți starea de sănătate.",
        options: [
          { label: "Varianta A", text: "Două mese pe zi, fără nicio calorie între ele." },
          { label: "Varianta B", text: "Trei mese modificate — o masă copioasă și două gustări." }
        ],
        test1: {
          head: "Testul 01",
          sub: "1600 kcal pe zi — jumătate din necesar",
          rows: [
            { title: "100 kcal în fiecare oră", sub: "16 × 100 kcal pe zi — insulina nu scade deloc", tag: "Creștere" },
            { title: "800 kcal în două mese", sub: "2 × 800 kcal pe zi — insulina urcă de două ori", tag: "Menținere", tagClass: "tag--hold" },
            { title: "1600 kcal într-o singură masă", sub: "1 × 1600 kcal pe zi — o singură creștere, apoi o scădere lungă", tag: "Slăbire", tagClass: "tag--loss" }
          ],
          cap: "Șapte zile × 16 ore de veghe — aceleași calorii în fiecare zi: din oră în oră — creștere, două mese — menținere, o singură masă — slăbire."
        },
        test2: {
          head: "Testul 02",
          sub: "Toate caloriile săptămânii în prima zi — apoi 6 zile de post",
          base: "greutatea de start",
          phases: ["Zilele 1–2 · creștere", "Zilele 3–4 · se ard", "Zilele 5–7 · sub start"],
          cap: "Ziua 1 — toate caloriile săptămânii dintr-o singură masă. Zilele 2–7 — post. Săptămâna se încheie sub greutatea de start.",
          aria: "Greutatea față de greutatea de start pe șapte zile: peste start în zilele 1–3, la nivelul de start în ziua 4, sub start în zilele 5–7."
        },
        spikes: {
          head: "Ghidul dietei",
          sub: "3 tipuri de alimente — 3 creșteri ale insulinei",
          rows: [
            {
              title: "Tipul 1 — Legumele",
              sub: "Gătite sau crude, în orice combinație cu sare, condimente, saramură sau oțet. Le poți consuma chiar și atunci când îți este foame, în intervalul de timp dedicat postului (fără mâncare).",
              tag: "Mică"
            },
            {
              title: "Tipul 2 — Fibre, proteine, grăsimi",
              sub: "Alimente care conțin fibre, proteine și grăsimi sănătoase, combinate în mese delicioase. Acestea sunt alimentele care te mențin sănătos, nu duc la creșterea în greutate și previn diabetul.",
              tag: "Medie",
              tagClass: "tag--hold"
            },
            {
              title: "Tipul 3 — Zahăr și făină albă",
              sub: "Zahărul și făina albă din alimentele ultraprocesate, sucurile de fructe și chiar dulcețurile de casă — dacă sunt consumate în porții mari. Nu este nevoie să le elimini complet; bucură-te de ele cu ocazii speciale, cum ar fi sărbători, zile de naștere sau diverse evenimente, ori stabilește o frecvență — de exemplu, savurează înghețata preferată o dată la două săptămâni.",
              tag: "Foarte mare",
              tagClass: "tag--loss"
            }
          ],
          cap: "Tipul 1 ridică insulina foarte puțin. Tipul 2 o ridică moderat. Tipul 3 o aruncă brusc în sus. Ce mănânci decide cât de sus urcă insulina — când mănânci decide restul."
        },
        panel: {
          cap: "Monitorizare — la fiecare 10 kg",
          rows: [
            ["HOMA-IR & HOMA-B", "sănătatea pancreasului"],
            ["ALT & AST", "sănătatea ficatului"],
            ["ApoB", "sănătatea inimii"],
            ["eGFR", "sănătatea rinichilor"],
            ["hsCRP", "nivelul general de inflamație"]
          ],
          foot: "La fiecare etapă de 10 kg → rezultate mai bune."
        },
        donate: {
          note: "Dacă informațiile de aici ți-au fost utile, distribuie această pagină pe rețelele de socializare.",
          cta: "Donează prin PayPal",
          sub: "Întrucât postul este gratuit",
          href: "https://www.paypal.com/donate/?hosted_button_id=FZ98QTQT792B6"
        }
      },
      sections: [
        {
          id: "s1", n: "01", title: "Cum ajunge o persoană obișnuită să fie obeză", punct: "?",
          lead: "Biologia este simplă. Fiecare kilogram suplimentar de grăsime corporală crește nivelul insulinei în sânge, în stare de repaus alimentar (pe nemâncate).",
          body: "Întrucât insulina crește odată cu fiecare kilogram în plus, faptul de a mânca de fiecare dată când îți este foame — sau de a lua trei mese pe zi — te face să acumulezi tot mai multă greutate. Evoluția greutății este logaritmică. Nivelul insulinei în repaus alimentar continuă să crească, fără ca persoana respectivă să știe ce se întâmplă în interiorul corpului său... până când o analiză de sânge îi dezvăluie valoarea insulinei în repaus alimentar. Atunci, acea persoană va înțelege că insulina este cea care menține grăsimea în corp, indiferent de ceea ce încearcă: deficit caloric, exerciții fizice, diete, suplimente, medicamente, reducerea cantității de mâncare, o alimentație mai sănătoasă, dezvoltarea unei mase musculare excesive (fără un motiv anume) și așa mai departe."
        },
        {
          id: "s2", n: "02", title: "Cum poți inversa obezitatea, la fel de rapid cum s-a instalat", punct: "?",
          lead: "",
          body: "Deoarece nivelul insulinei tale în repaus alimentar nu mai este cel al unei persoane obișnuite, nu mai poți continua să mănânci ca o astfel de persoană. Așadar, în loc de două sau trei mese pe zi, îți ajustezi programul alimentar în funcție de nivelul insulinei, mâncând o dată la 24, 36, 48 sau 72 de ore. Trebuie să treci progresiv de la un interval la altul, pe măsură ce senzația de foame se adaptează. Dacă mănânci o dată la 24 de ore, foamea va începe să apară în jurul celei de-a 16-a ore, deplasându-se treptat mai târziu, până când vei simți foame exact la împlinirea celor 24 de ore. Când ajungi să simți foame exact la 24 de ore, treci la un program de masă la fiecare 36 sau 48 de ore. Repeți procesul atunci când începi să simți foame la 48 de ore — sau, dacă nu poți depăși pragul de 48 de ore, continui să mănânci la intervale de 48 de ore. Pentru persoanele obeze, mesele la intervale de 72 de ore topesc grăsimea și mai rapid, însă această metodă nu este potrivită pentru toată lumea. Fiecare kilogram pierdut în acest mod scade, de asemenea, nivelul insulinei în repaus alimentar; astfel, arderea grăsimilor devine tot mai accelerată cu fiecare repetare a ciclului de 48–72 de ore între mese.",
          extra: "intervals"
        },
        {
          id: "s3", n: "03", title: "Dar ce se întâmplă cu caloriile și nutrienții", punct: "?",
          lead: "",
          body: "Nu trebuie să-ți faci griji în această privință. Corpul uman este un „computer” biologic <strong>(<span class=\"punct\">super</span>)inteligent</strong>. Poți consuma toate caloriile necesare la intervale de 24, 36, 48 sau 72 de ore și, totuși, să slăbești, reducând nivelul insulinei până la cel al unei persoane slabe. „Ceasul intern” al corpului uman este insulina – nu ceasul de la mână sau cel de pe telefon. Corpul uman nu știe cât este ceasul în univers; el știe doar câtă insulină trebuie să producă pentru a te menține sănătos. Din acest motiv, nu vei duce lipsă de nutrienți: un nivel ridicat al insulinei menține nutrienții blocați în rezerve, asigurându-ți starea de sănătate. Gândește-te doar la modul în care trăiau oamenii acum milioane de ani, când hrana era puțină: aceștia acumulau grăsime, apoi migrau către zone cu hrană din abundență, arzând pe parcurs o parte din acea grăsime corporală.",
          extra: "callout"
        },
        {
          id: "s4", n: "04", title: "Cum menții scăderea în greutate", punct: "?",
          lead: "",
          body: "Pentru a menține rezultatul, trebuie să elimini toată grăsimea din zona abdominală – astfel, nivelul insulinei „pe nemâncate” (bazale) revine la valorile de 2–4, specifice unei persoane sănătoase. Ulterior, poți mânca la intervale regulate: două mese pe zi, fără nicio calorie între ele, sau o variantă a regimului cu trei mese pe zi, în care simulezi un regim cu o singură masă principală (o masă copioasă și două gustări), menținând astfel insulina la un nivel scăzut.",
          extra: "options"
        },
        {
          id: "s5", n: "05", title: "Ce analize de sânge confirmă un nivel ridicat al insulinei", punct: "?",
          lead: "",
          body: "În cadrul analizei HOMA-IR, se măsoară atât glicemia, cât și insulina, ambele pe nemâncate; poți, de asemenea, să efectuezi doar testul pentru determinarea insulinei bazale (pe nemâncate). Dacă ai ajuns la concluzia că organismul tău refuză să elimine grăsimea, indiferent de metodele încercate, cauza este, cel mai probabil, un nivel ridicat al insulinei bazale. Pentru a afla mai multe despre biologia insulinei, bazându-te pe descoperirile științifice actuale (din anii 2020–2030) și nu pe cele din anii 1950–1960, informează-te din lucrările <strong>Dr. Jason Fung</strong>. Apoi, împărtășește aceste cunoștințe medicului tău pentru a învăța cum să inversezi obezitatea și să devii o persoană sănătoasă, cu o greutate normală, pentru tot restul vieții."
        },
        {
          id: "s6", n: "06", title: "Cum poți evalua biologia insulinei", punct: "?",
          lead: "",
          body: "Putem pune această teorie la încercare. Să presupunem că o persoană obeză trebuie să consume 1600 de calorii pe zi pentru a crea un deficit caloric, față de cele 3200 de calorii necesare pentru menținerea greutății. Să presupunem că această persoană mănâncă 100 de calorii în fiecare oră, având totodată parte de 8 ore de somn. Pe parcursul unei săptămâni, o astfel de persoană ar consuma doar jumătate din caloriile de care are nevoie. Ar slăbi sau s-ar îngrășa până la sfârșitul săptămânii? Fiecare porție de 100 de calorii ar menține nivelul insulinei ridicat până la ora următoare, astfel încât persoana respectivă nu ar slăbi deloc; din contră, s-ar îngrășa, în funcție de cantitatea de grăsime corporală existentă (care corelează cu nivelul insulinei în stare de repaus alimentar): cei cu mai puțină grăsime corporală s-ar îngrășa mai puțin, în timp ce aceia cu o cantitate mai mare s-ar îngrășa mai mult. Dacă ar consuma toate cele 1600 de calorii într-o singură masă, o dată pe zi, ar slăbi. Dacă ar împărți caloriile în două mese a câte 800 de calorii, greutatea s-ar menține, pur și simplu, la nivelul actual.",
          body2: "Al doilea test este atât de simplu, încât până și inteligența artificială îl înțelege. Oferă-i cuiva, în prima zi, toate caloriile de care are nevoie pentru o săptămână întreagă, apoi supune-l la post în următoarele șase zile. În primele două zile, persoana va lua în greutate, deoarece nivelul insulinei este ridicat, iar glucoza trebuie împinsă în interiorul celulelor. În următoarele două zile, va pierde greutatea acumulată în primele două. În ultimele două zile, va pierde chiar mai mult decât greutatea inițială, întrucât nivelul insulinei scade foarte mult. Așadar, a existat, de fapt, un deficit caloric de la bun început?",
          extra: "test1",
          extra2: "test2"
        },
        {
          id: "s7", n: "07", title: "Cum poți optimiza creșterile bruște ale insulinei prin dietă", punct: "?",
          lead: "",
          body: "Niciun aliment nu este dăunător, atâta timp cât știi când să mănânci. Contează mai mult momentul în care mănânci decât dieta în sine. Există trei tipuri de alimente, care provoacă creșteri mici, medii sau foarte mari ale nivelului de insulină:",
          extra: "spikes"
        },
        {
          id: "s8", n: "08", title: "Copilul tău suferă de obezitate", punct: "?",
          lead: "",
          body: "Spune-i să nu mai mănânce gustări între mese, pentru a menține nivelul insulinei scăzut de la o masă la alta. Corpul se va adapta singur la noul program alimentar, iar grăsimea se va pierde în mod natural. Procesul descris mai sus este valabil doar pentru adulți. Simplul fapt de a renunța la gustări elimină 80% din alimentele de tip 3, cele care provoacă creșteri masive ale insulinei."
        },
        {
          id: "s9", n: "09", title: "Dar pierderea masei musculare", punct: "?",
          lead: "",
          body: "Nu există așa ceva. Mitocondriile din mușchi, organe și creier reconstruiesc țesuturile folosind grăsimea corporală. De ce fac asta? Pentru a te ajuta să supraviețuiești și să trăiești mai mult. Sună înfricoșător, nu-i așa? Chiar și o persoană obeză, care mănâncă la intervale mai mari de timp, devine tot mai sănătoasă cu fiecare kilogram pierdut. În plus, nimic nu te împiedică să faci mișcare și să-ți dezvolți masa musculară în timp ce slăbești."
        },
        {
          id: "s10", n: "10", title: "Ce analize de sânge ar trebui să urmărești în timpul procesului de slăbire", punct: "?",
          lead: "",
          body: "Eu am monitorizat acest proces prin analize de sânge efectuate la fiecare 10 kg de grăsime pierdute: HOMA-IR și HOMA-B (pentru sănătatea pancreasului), ALT și AST (pentru sănătatea ficatului), ApoB (pentru sănătatea inimii), eGFR (pentru sănătatea rinichilor) și hsCRP (pentru nivelul general de inflamație). Fiecare dintre acești indicatori s-a îmbunătățit la fiecare etapă de 10 kg. Așadar, de ce să-ți faci griji? Pur și simplu devino mai sănătos și menține-te așa.",
          extra: "panel",
          dark: true
        },
        {
          id: "s11", n: "11", title: "Declinarea responsabilității și donații", punct: ".",
          lead: "",
          body: "Prin modificarea obiceiurilor alimentare în raport cu insulina și adoptarea unui stil de viață sănătos, poți inversa rezistența la insulină, obezitatea, prediabetul, diabetul de tip 2 și acanthosis nigricans. Pentru alte probleme medicale, consultă medicul.",
          extra: "donate"
        }
      ]
    }
  };

  const DATA = { en: EN, ro: RO };

  /* ----------------------------------------------------------
     Elements & state
     ---------------------------------------------------------- */
  const hdr = $("#hdr");
  const burger = $("#burger");
  const menu = $("#menu");
  const menuList = $("#menuList");
  const app = $("#app");
  const rail = $("#rail");

  let lang = "";
  try { lang = (localStorage.getItem("zero-lang") || "").toLowerCase(); } catch (e) { /* private mode */ }
  const paramLang = (new URLSearchParams(location.search).get("lang") || "").toLowerCase();
  if (DATA[paramLang]) lang = paramLang;
  if (!DATA[lang]) {
    lang = (navigator.language || "").toLowerCase().startsWith("ro") ? "ro" : "en";
  }

  let revealIO = null;
  let railIO = null;

  /* ----------------------------------------------------------
     Template builders
     ---------------------------------------------------------- */
  const weekDotsHTML = cols => {
    let out = "";
    for (let d = 0; d < 7; d++) {
      for (let h = 0; h < 16; h++) {
        out += '<span class="d' + (cols.includes(h) ? " on" : "") + '"></span>';
      }
    }
    return out;
  };

  /* Insulin response curve: difference of two exponentials, normalised
     so the peak is exactly `amp` px above the baseline. */
  const spikePath = (amp, rise, decay) => {
    const base = 58, meal = 10, width = 221;
    const ys = [];
    let peak = 0;
    for (let x = 0; x <= width; x += 2) {
      const t = x - meal;
      let v = t > 0 ? Math.exp(-t / decay) - Math.exp(-t / rise) : 0;
      if (v < 0) v = 0;
      ys.push(v);
      if (v > peak) peak = v;
    }
    return ys
      .map((v, i) => (i ? "L" : "M") + i * 2 + "," + (base - (v / peak) * amp).toFixed(1))
      .join("");
  };

  function extrasHTML(id, x) {
    switch (id) {
      case "intervals":
        return (
          '<div class="intervals rv">' +
            '<div class="int-head">' +
              '<p class="int-cap">' + x.intervals.cap + "</p>" +
              '<span class="ring-dots" aria-hidden="true"><i></i><i></i><i class="on"></i><i></i></span>' +
            "</div>" +
            '<div class="intervals-grid">' +
              x.intervals.items
                .map(
                  ([n, l], idx) => {
                    const pct = Math.round((Number(n) / 72) * 1000) / 10;
                    return (
                      '<div class="int">' +
                        '<div class="int-top">' +
                          '<span class="int-idx">0' + (idx + 1) + ".</span>" +
                          '<span class="int-badge" aria-hidden="true">' + n + "h</span>" +
                        "</div>" +
                        "<b>" + n + "<em>h</em></b>" +
                        "<i>" + l + "</i>" +
                        '<div class="int-bar" style="--w:' + pct + '%;--d:' + idx * 90 + 'ms" aria-hidden="true"></div>' +
                      "</div>"
                    );
                  }
                )
                .join("") +
            "</div>" +
          "</div>"
        );
      case "callout":
        return (
          '<aside class="callout rv">' +
            '<div class="callout-meta">' +
              '<span class="callout-num">03.</span>' +
              '<span class="callout-line" aria-hidden="true"></span>' +
            "</div>" +
            "<p>" + x.callout + "</p>" +
            '<div class="callout-foot" aria-hidden="true">' +
              '<span class="ring-dots"><i></i><i></i><i></i><i class="on"></i></span>' +
            "</div>" +
          "</aside>"
        );
      case "options":
        return (
          '<div class="options rv">' +
          x.options
            .map(
              (o, idx) =>
                '<div class="opt">' +
                  '<div class="opt-top">' +
                    '<div><span class="opt-num">0' + (idx + 1) + '.</span><p class="opt-label">' + o.label + "</p></div>" +
                    '<span class="opt-disc" aria-hidden="true">' + (idx === 0 ? "2×" : "1+2") + "</span>" +
                  "</div>" +
                  "<p>" + o.text + "</p>" +
                  '<span class="opt-rule" aria-hidden="true"></span>' +
                "</div>"
            )
            .join("") +
          "</div>"
        );
      case "test1": {
        const cols = [Array.from({ length: 16 }, (_, i) => i), [2, 11], [7]];
        return (
          '<div class="lab rv">' +
            '<div class="lab-head"><b>' + x.test1.head + "</b><span>" + x.test1.sub + "</span></div>" +
            x.test1.rows
              .map(
                (r, i) =>
                  '<div class="run">' +
                    '<div class="run-info">' +
                      "<h5>" + r.title + "</h5>" +
                      '<p class="run-sub">' + r.sub + "</p>" +
                    "</div>" +
                    '<div class="run-out"><span class="tag ' + (r.tagClass || "") + '">' + r.tag + "</span></div>" +
                    '<div class="dots" aria-hidden="true">' + weekDotsHTML(cols[i]) + "</div>" +
                  "</div>"
              )
              .join("") +
            '<p class="lab-cap">' + x.test1.cap + "</p>" +
          "</div>"
        );
      }
      case "test2": {
        const up = [40, 72, 34, 0, 0, 0, 0];
        const down = [0, 0, 0, 0, 34, 66, 88];
        const bar = (v, i, zone) => {
          if (v > 0) return '<span class="wbar" style="--h:' + v + "%;--d:" + i * 70 + 'ms"></span>';
          if (zone === "up" && down[i] === 0) return '<span class="wbar wbar--zero"></span>';
          return "";
        };
        return (
          '<div class="lab rv">' +
            '<div class="lab-head"><b>' + x.test2.head + "</b><span>" + x.test2.sub + "</span></div>" +
            '<div class="chart" role="img" aria-label="' + x.test2.aria + '">' +
              '<div class="zone zone--up">' +
                up.map((v, i) => '<div class="wcol">' + bar(v, i, "up") + "</div>").join("") +
              "</div>" +
              '<div class="base"><span class="base-lab">' + x.test2.base + "</span></div>" +
              '<div class="zone zone--down">' +
                down.map((v, i) => '<div class="wcol">' + bar(v, i, "down") + "</div>").join("") +
              "</div>" +
              '<div class="wdays">' +
                [1, 2, 3, 4, 5, 6, 7]
                  .map(
                    d =>
                      '<div class="wday"><b>' + d + "</b>" +
                      '<span class="wmark' + (d === 1 ? " wmark--eat" : "") + '"></span></div>'
                  )
                  .join("") +
              "</div>" +
              '<div class="phases">' +
                x.test2.phases
                  .map((p, i) => '<div class="phase' + (i === 2 ? " phase--below" : "") + '">' + p + "</div>")
                  .join("") +
              "</div>" +
            "</div>" +
            '<p class="lab-cap">' + x.test2.cap + "</p>" +
          "</div>"
        );
      }
      case "spikes": {
        const shapes = [[14, 6, 16], [30, 9, 30], [52, 10, 60]];
        return (
          '<div class="lab rv">' +
            '<div class="lab-head"><b>' + x.spikes.head + "</b><span>" + x.spikes.sub + "</span></div>" +
            x.spikes.rows
              .map((r, i) => {
                const [amp, rise, decay] = shapes[i];
                return (
                  '<div class="run">' +
                    '<div class="run-info">' +
                      "<h5>" + r.title + "</h5>" +
                      '<p class="run-sub">' + r.sub + "</p>" +
                    "</div>" +
                    '<div class="run-out"><span class="tag ' + (r.tagClass || "") + '">' + r.tag + "</span></div>" +
                    '<svg class="spike' + (i === 2 ? " spike--hot" : "") + '" viewBox="0 0 221 64" aria-hidden="true" style="--d:' + i * 160 + 'ms">' +
                      '<line class="spine" x1="0" y1="58" x2="221" y2="58"></line>' +
                      '<path class="curve" d="' + spikePath(amp, rise, decay) + '"></path>' +
                    "</svg>" +
                  "</div>"
                );
              })
              .join("") +
            '<p class="lab-cap">' + x.spikes.cap + "</p>" +
          "</div>"
        );
      }
      case "panel":
        return (
          '<div class="tests rv">' +
            '<p class="tests-cap">' + x.panel.cap + "</p>" +
            x.panel.rows
              .map(
                ([n, d], i) =>
                  '<div class="test"><span class="test-n">' +
                  String(i + 1).padStart(2, "0") + ".</span>" +
                  '<span class="test-name">' + n + "</span>" +
                  '<span class="test-desc">' + d + "</span></div>"
              )
              .join("") +
            '<p class="tests-foot">' + x.panel.foot + "</p>" +
          "</div>"
        );
      case "donate":
        return (
          '<div class="donate rv">' +
            '<p class="donate-note">' + x.donate.note + "</p>" +
            '<a class="donate-btn" href="' + x.donate.href + '" target="_blank" rel="noopener noreferrer">' +
              '<span class="donate-dot" aria-hidden="true"></span>' +
              '<span class="donate-copy">' +
                '<span class="donate-label">' + x.donate.cta + "</span>" +
                '<span class="donate-sub">' + x.donate.sub + "</span>" +
              "</span>" +
              '<span class="donate-arr" aria-hidden="true">↗</span>' +
            "</a>" +
          "</div>"
        );
      default:
        return "";
    }
  }

  function sectionHTML(s, x, idx, allSections) {
    const isPeach = s.id === "s3";
    const isSplit = s.id === "s4" || s.id === "s8";
    const total = allSections.length;
    const pct = Math.round(((idx + 1) / total) * 1000) / 10;
    const nextSec = allSections[(idx + 1) % total];
    const nextHref = "#" + nextSec.id;
    const nextNum = nextSec.n + ".";
    const cls =
      "sec" +
      (s.dark ? " sec--dark" : "") +
      (isPeach ? " sec--peach" : "") +
      (isSplit ? " sec--split" : "");
    return (
      '<article class="' + cls + '" id="' + s.id + '" data-rail-id="' + s.id + '">' +
        '<div class="wrap sec-grid">' +
          '<header class="sec-head rv">' +
            '<div class="sec-kicker">' +
              '<p class="sec-num">' + s.n + '<span class="punct">.</span></p>' +
              '<span class="sec-rule" aria-hidden="true"></span>' +
            "</div>" +
            '<h2 class="sec-title">' + s.title + '<span class="punct">' + s.punct + "</span></h2>" +
            '<a class="sec-vprog" href="' + nextHref + '" aria-label="Next section ' + nextNum + '">' +
              '<i class="sec-vprog-line" style="--p:' + pct + '%" aria-hidden="true"></i>' +
              '<span class="sec-vprog-next">' + nextNum + "</span>" +
            "</a>" +
          "</header>" +
          '<div class="sec-body">' +
            (s.lead ? '<p class="lead rv">' + s.lead + "</p>" : "") +
            (s.body ? '<p class="rv">' + s.body + "</p>" : "") +
            (s.extra ? extrasHTML(s.extra, x) : "") +
            (s.body2 ? '<p class="rv">' + s.body2 + "</p>" : "") +
            (s.extra2 ? extrasHTML(s.extra2, x) : "") +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  function statementHTML(st, id, allIds) {
    const idx = allIds.indexOf(id);
    const nextId = allIds[(idx + 1) % allIds.length];
    const prevId = allIds[(idx - 1 + allIds.length) % allIds.length];
    return (
      '<section class="statement" id="st-' + id + '">' +
        '<span class="st-edge" aria-hidden="true"></span>' +
        '<div class="wrap st-grid rv">' +
          '<div class="st-main">' +
            '<div class="st-top">' +
              '<p class="st-num">' + st.num + "</p>" +
              '<span class="st-kicker">' + (st.kicker || "") + "</span>" +
            "</div>" +
            '<h3 class="st-big">' + (st.big || "ZERO.") + "</h3>" +
            '<p class="st-text">' + st.text + "</p>" +
            '<div class="st-dots">' +
              allIds
                .map(
                  sid =>
                    '<a href="#st-' + sid + '" class="st-dot' + (sid === id ? " on" : "") + '" aria-label="Statement ' + sid + '"></a>'
                )
                .join("") +
            "</div>" +
          "</div>" +
          '<div class="st-visual">' +
            '<div class="st-compass">' +
              '<a href="#st-' + prevId + '" class="st-nav-btn" aria-label="Previous orange section">◁</a>' +
              '<a href="#st-' + nextId + '" class="st-nav-btn" aria-label="Next orange section">▷</a>' +
            "</div>" +
            '<div class="st-card" aria-hidden="true">' +
              '<span class="st-card-num">' + st.num + "</span>" +
              '<div class="st-card-art">' +
                '<span class="st-card-circle"></span>' +
                '<span class="st-card-dot"></span>' +
              "</div>" +
              '<span class="st-card-lbl">zero.</span>' +
            "</div>" +
            '<a href="#st-' + nextId + '" class="st-arrow" aria-label="Next orange section">' +
              '<svg viewBox="0 0 64 44" aria-hidden="true"><path d="M4 22h48M36 6l18 16-18 16" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>' +
            "</a>" +
          "</div>" +
        "</div>" +
        '<div class="st-mark" aria-hidden="true">' + (st.mark || "ZERO · INSULIN") + "</div>" +
        '<div class="wrap st-foot" aria-hidden="true">' +
          '<span>' + (st.kicker || "INSULIN") + "</span>" +
          '<span>©2026. ZERO.</span>' +
          '<span class="st-brand">zer<i></i><b></b></span>' +
        "</div>" +
      "</section>"
    );
  }

  function heroHTML(u) {
    const badges = ["24h", "10kg", "IR"];
    return (
      '<section class="hero" id="top" data-rail-id="top">' +
        '<div class="wrap hero-stage">' +
          '<div class="hero-left">' +
            '<div class="hero-eyebrow rv">' +
              '<span>' + u.hero.eyebrow + "</span>" +
              '<i class="hero-eyebrow-line" aria-hidden="true"></i>' +
            "</div>" +
            '<h1 class="hero-title rv">' + u.hero.title + "</h1>" +
            '<div class="hero-cta rv">' +
              '<a class="cta" href="#s1">' +
                '<span>' + u.hero.cta + '</span>' +
                '<span class="arr" aria-hidden="true">↓</span>' +
              "</a>" +
              '<div class="hero-jump" aria-hidden="true">' +
                '<a href="#s2" class="hero-icon-btn" tabindex="-1" title="Method">' +
                  '<svg viewBox="0 0 18 18" width="15" height="15"><circle cx="9" cy="9" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="9" cy="9" r="2" fill="currentColor"/></svg>' +
                "</a>" +
                '<a href="#s11" class="hero-icon-btn" tabindex="-1" title="Share &amp; Donate">' +
                  '<svg viewBox="0 0 18 18" width="15" height="15"><circle cx="5" cy="9" r="2" fill="currentColor"/><circle cx="13" cy="5" r="2" fill="currentColor"/><circle cx="13" cy="13" r="2" fill="currentColor"/><path d="M6.8 8L11.2 5.8M6.8 10L11.2 12.2" stroke="currentColor" stroke-width="1.5"/></svg>' +
                "</a>" +
              "</div>" +
            "</div>" +
          "</div>" +
          '<div class="hero-collage rv">' +
            '<div class="hero-art" aria-hidden="true">' +
              '<div class="hero-art-inner">' +
                '<div class="hero-art-top">' +
                  '<span>00.</span>' +
                  '<span>HOMA-IR → 2–4</span>' +
                "</div>" +
                '<div class="hero-art-rings">' +
                  '<span class="har-1"><span class="har-dot har-dot--white"></span></span>' +
                  '<span class="har-2"><span class="har-dot"></span></span>' +
                  '<span class="har-core"></span>' +
                "</div>" +
                '<div class="hero-art-legend">' +
                  '<span class="har-leg-item"><i class="har-leg-dot har-leg-dot--white"></i><span>' + u.hero.legend.white + "</span></span>" +
                  '<span class="har-leg-item"><i class="har-leg-dot har-leg-dot--orange"></i><span>' + u.hero.legend.orange + "</span></span>" +
                "</div>" +
              "</div>" +
            "</div>" +
            '<div class="hero-orange">' +
              '<p class="hero-sub">' + u.hero.sub + "</p>" +
            "</div>" +
            '<div class="hero-dark">' +
              u.hero.stats
                .map(
                  ([v, l], i) =>
                    '<div class="hstat">' +
                      '<div class="hstat-txt">' +
                        '<span class="hstat-num">0' + (i + 1) + ".</span>" +
                        "<b>" + v + "</b>" +
                        "<span>" + l + "</span>" +
                      "</div>" +
                      '<div class="hstat-orb" aria-hidden="true"><span>' + badges[i] + "</span></div>" +
                    "</div>"
                )
                .join('<div class="hstat-rule" aria-hidden="true"></div>') +
            "</div>" +
          "</div>" +
          '<div class="hero-vprog" aria-hidden="true">' +
            '<span>01.</span><i class="hero-vprog-bar"></i><span>11.</span>' +
          "</div>" +
          '<div class="hero-mark" aria-hidden="true">zero.</div>' +
          '<div class="hero-cue" aria-hidden="true"><span>' + u.hero.cue + "</span><span></span></div>" +
        "</div>" +
      "</section>"
    );
  }

  /* ----------------------------------------------------------
     Render
     ---------------------------------------------------------- */
  const DIACRITICS = { "ș": "ş", "Ș": "Ş", "ț": "ţ", "Ț": "Ţ" };

  function replaceDiacritics(str) {
    return String(str).replace(/[șȘțȚ]/g, c => DIACRITICS[c]);
  }

  function renderMain(d) {
    const u = d.ui;
    const stIds = Object.keys(u.statements);
    let html = heroHTML(u);
    u.sections.forEach((s, idx) => {
      html += sectionHTML(s, u.extras, idx, u.sections);
      if (u.statements[s.id]) {
        html += statementHTML(u.statements[s.id], s.id, stIds);
      }
    });
    app.innerHTML = replaceDiacritics(html);
  }

  function buildMenu(d) {
    const u = d.ui;
    menuList.innerHTML = replaceDiacritics(
      u.sections
        .map(
          (s, i) =>
            '<li style="--d:' + i * 45 + 'ms"><a href="#' + s.id + '">' +
            '<span class="mi-n">' + s.n + ".</span>" +
            "<span>" + s.title + s.punct + "</span>" +
            "</a></li>"
        )
        .join("")
    );
  }

  function buildRail(d) {
    const u = d.ui;
    rail.innerHTML =
      '<span data-rail-for="top"></span>' +
      u.sections.map(s => '<span data-rail-for="' + s.id + '"></span>').join("");
  }

  /* ----------------------------------------------------------
     Observers
     ---------------------------------------------------------- */
  function observe() {
    if (revealIO) revealIO.disconnect();
    if (railIO) railIO.disconnect();

    if (!("IntersectionObserver" in window)) {
      $$(".rv").forEach(el => el.classList.add("in"));
      return;
    }

    revealIO = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revealIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    $$(".rv").forEach(el => revealIO.observe(el));

    const dots = $$("#rail span");
    const byId = new Map(dots.map(d => [d.dataset.railFor, d]));
    railIO = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          const dot = byId.get(e.target.dataset.railId);
          if (!dot) return;
          dots.forEach(d => d.classList.remove("on"));
          dot.classList.add("on");
          activeRailId = e.target.dataset.railId;
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    $$("[data-rail-id]").forEach(el => railIO.observe(el));
  }

  /* ----------------------------------------------------------
     Language
     ---------------------------------------------------------- */
  function get(obj, path) {
    return path.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
  }

  function setLang(next, initial) {
    lang = DATA[next] ? next : "en";
    try { localStorage.setItem("zero-lang", lang); } catch (e) { /* private mode */ }

    const d = DATA[lang];
    document.documentElement.lang = lang;
    document.title = d.meta.title;
    const md = $('meta[name="description"]');
    if (md) md.setAttribute("content", d.meta.desc);

    $$("[data-i18n]").forEach(el => {
      const raw = get(d.ui, el.dataset.i18n);
      if (raw !== undefined) {
        const v = replaceDiacritics(raw);
        if (el.dataset.i18n.startsWith("nav.")) {
          el.innerHTML = '<span class="nav-hi">' + v.slice(0, 3) + "</span>" + v.slice(3);
        } else {
          el.textContent = v;
        }
      }
    });

    renderMain(d);
    buildMenu(d);
    buildRail(d);
    observe();
    updateLangButtons();
    updateBurgerLabel();

    if (!initial) {
      closeMenu();
      if (location.hash) {
        const t = document.querySelector(location.hash);
        if (t) {
          const y = t.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: RM ? "auto" : "smooth" });
        }
      }
    }
  }

  function updateLangButtons() {
    $$(".lang-btn").forEach(b => {
      b.setAttribute("aria-pressed", String(b.dataset.setlang === lang));
    });
  }

  /* ----------------------------------------------------------
     Menu
     ---------------------------------------------------------- */
  let menuOpen = false;

  function updateBurgerLabel() {
    const m = DATA[lang].ui.menu;
    burger.setAttribute("aria-label", menuOpen ? m.close : m.open);
  }

  function setMenu(open) {
    menuOpen = open;
    menu.classList.toggle("open", open);
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
    updateBurgerLabel();
  }

  function closeMenu() {
    if (menuOpen) setMenu(false);
  }

  burger.addEventListener("click", () => setMenu(!menuOpen));

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeMenu();
  });

  menuList.addEventListener("click", e => {
    if (e.target.closest("a")) closeMenu();
  });

  /* ----------------------------------------------------------
     Scroll behaviour & Prev/Next section controls
     ---------------------------------------------------------- */
  let activeRailId = "top";

  rail.addEventListener("click", e => {
    const dot = e.target.closest("span[data-rail-for]");
    if (!dot) return;
    const id = dot.dataset.railFor;
    const target = id === "top" ? document.body : document.getElementById(id);
    if (target) {
      const y = id === "top" ? 0 : target.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top: y, behavior: RM ? "auto" : "smooth" });
    }
  });

  function stepSection(dir) {
    const ids = ["top", ...DATA[lang].ui.sections.map(s => s.id)];
    const curIdx = Math.max(0, ids.indexOf(activeRailId));
    const nextIdx = Math.min(ids.length - 1, Math.max(0, curIdx + dir));
    const nextId = ids[nextIdx];
    activeRailId = nextId;
    if (nextId === "top") {
      window.scrollTo({ top: 0, behavior: RM ? "auto" : "smooth" });
      return;
    }
    const el = document.getElementById(nextId);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top: y, behavior: RM ? "auto" : "smooth" });
    }
  }

  const prevBtn = $("#prevSec");
  const nextBtn = $("#nextSec");
  if (prevBtn) prevBtn.addEventListener("click", () => stepSection(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => stepSection(1));

  const onScroll = () => hdr.classList.toggle("scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  $$("#brandLink, #toTop, .brand--foot").forEach(a =>
    a.addEventListener("click", e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: RM ? "auto" : "smooth" });
    })
  );

  /* ----------------------------------------------------------
     Language buttons + init
     ---------------------------------------------------------- */
  $$(".lang-btn").forEach(b =>
    b.addEventListener("click", () => {
      if (b.dataset.setlang !== lang) setLang(b.dataset.setlang);
    })
  );

  setLang(lang, true);
})();
