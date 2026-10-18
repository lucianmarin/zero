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
      title: "Zero. Weight loss with insulin.",
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
        s1: { num: "01.", text: "Insulin keeps the fat on — no matter what you try." },
        s3: { num: "02.", text: "The internal clock of the human body is insulin." }
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
        callout: "A higher insulin level keeps your nutrients locked in — to keep you healthy.",
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
              sub: "Cooked or uncooked, in any combination with salt, spices, brine and vinegar. You can even enjoy them when you are hungry, during the fasting window.",
              tag: "Low"
            },
            {
              title: "Type 2 — Fiber, protein, fat",
              sub: "Foods containing fiber, protein and healthy fats, combined in delicious meals. These are the foods that keep you healthy, don't cause weight gain and prevent diabetes.",
              tag: "Medium",
              tagClass: "tag--hold"
            },
            {
              title: "Type 3 — Sugar & white flour",
              sub: "Sugar and white flour in highly processed foods, fruit juices and even homemade jams, if eaten in large portions. You don't need to avoid them completely — enjoy them on special occasions: holidays, birthdays, special events. Or set a rhythm, like your favorite ice cream once every two weeks.",
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
            ["hsCRP", "whole-body inflammation"]
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
          id: "s1", n: "01", title: "How a normal person becomes obese", punct: "?",
          lead: "The biology is simple. Every extra kg of body fat raises fasting blood insulin.",
          body: "When insulin is getting higher with every extra kg of body fat, eating every time you are hungry or eating 3 meals a day will make you gaining more and more weight. The weight progression is logarithmic. The fasting insulin gets higher and higher without the person knowing what happens in their body... until they blood test the fasting insulin level. Then they will convince themselves that insulin keeps the fat on the body no matter what they are trying to do: caloric deficit, exercise, diets, supplements, meds, eating less, eating healthier, building tons of muscles for no reason at all, etc."
        },
        {
          id: "s2", n: "02", title: "How to drive obesity in reverse as fast as becoming one", punct: ".",
          lead: "",
          body: "Since your fasting insulin is not like a normal person fasting insulin, you can't eat any longer like a normal person. So instead of 2 or 3 meals a day, you adjust your eating schedule to your insulin level by eating every 24h/36h/48h/72h. You need to progressive switch between these intervals as your hunger adjusts. If you eat every 24h your hunger will start from 16h hour until you will be hungry at 24h. When you get to being hungry at exactly 24h hour you switch to 36h or 48h eating schedule. You repeat the process when you get hungry at 48h or if you can't do more than 48h you keep eating at 48h intervals. Eating at 72h intervals for obese persons will just melt fat more faster, but it's not for everyone. When you do this every kg lost will also lower your fasting insulin levels so fat burn will get faster and faster with each repeated 48h-72h eating intervals.",
          extra: "intervals"
        },
        {
          id: "s3", n: "03", title: "What about calories and nutrients", punct: "?",
          lead: "",
          body: "You don't have to worry about this. The human body is a (super)intelligent meat computer. You can eat all your calories at 24h/36h/48h/72h intervals and still lose weight by driving insulin as slow as that in a skinny person. The internal clock of the human body is insulin, not the clock we have on our wrist or phones. The human body doesn't know what time is in the universe, it knows just how much insulin needs to produce to keep you healthy. Because of this you won't lose at nutrients at all, having a higher insulin level will keep your nutrients lock in to keep you healthy. Just think about how humans lived millions of years ago when food was scarce, they got obese in one place then migrated to another place that have abundant food they lost some of their body fat while migrating.",
          extra: "callout"
        },
        {
          id: "s4", n: "04", title: "How you maintain weight loss", punct: ".",
          lead: "",
          body: "To maintain the result you have to lose all your fat from your tummy, that's how fasting insulin gets to 2-4 levels like in a normal person. Then you can eat at regular intervals 2 meals a day with zero calories in between or a modified 3 meals a day where you mimicking 1 meal a day by having 1 big meal and 2 snacks for the other meals to keep insulin low.",
          extra: "options"
        },
        {
          id: "s5", n: "05", title: "Blood tests to confirm", punct: ".",
          lead: "",
          body: "When you do HOMA-IR blood test both glucose and insulin while fasting are tested, but you can also do only fasting insulin blood test. When you convince yourself that your body won't let go of fat no matter what you try is because of high fasting insulin level. To learn more about the biologic process of insulin with science from 2020s-2030s instead of science from 50s-60s, get yourself educated from <strong>Dr Jason Fung</strong> then educate your doctor about how to reverse obesity and be a normal healthy person for the rest of your life."
        },
        {
          id: "s6", n: "06", title: "How to test the insulin biology", punct: ".",
          lead: "",
          body: "We can put the theory to the test. Let's say an obese person needs to eat 1600 calories a day — a caloric deficit — compared with the 3200 calories a day needed for maintenance. Suppose they eat 100 calories every hour, plus 8 hours of sleep: over the course of a week, that person would consume half the number of calories needed. Would they lose or gain weight by the end of the week? Each 100 calories would keep insulin elevated until the next hour; they wouldn't lose any weight at all — in fact, they would gain weight depending on their existing body fat (which correlates with fasting insulin levels): those with less body fat would gain less, while those with more will gain more. If they eat all 1600 calories in a single sitting once a day, they would lose weight. If they split it into two meals of 800 calories, they will just maintain their current weight.",
          body2: "The second test — even AI gets it. Feed someone all the calories they need for a week on the first day of the week, then fast for the next 6 days. In the first 2 days they will gain weight because insulin is high and the glucose needs to be pushed into cells. The next 2 days they will lose the weight gained in the first 2 days. The following 2 days they will lose more weight than the starting weight because of how low the insulin gets. So was there even a caloric deficit to begin with?",
          extra: "test1",
          extra2: "test2"
        },
        {
          id: "s7", n: "07", title: "Optimize insulin spikes with diet", punct: ".",
          lead: "",
          body: "No food is bad as long as you know when to eat it. Time is more important than diet alone. There are 3 types of foods that cause low insulin spikes, medium insulin spikes and huge insulin spikes:",
          extra: "spikes"
        },
        {
          id: "s8", n: "08", title: "Is your kid obese", punct: "?",
          lead: "",
          body: "Tell him not to snack in between meals to keep insulin low from one meal to another. The body will self-adjust to the new eating schedule, and fat will be lost naturally. The process above is only for adults. Just eliminating snacks will reduce the consumption of “type 3” foods — which cause sudden, massive insulin spikes — by 80%."
        },
        {
          id: "s9", n: "09", title: "What about muscle loss", punct: "?",
          lead: "",
          body: "There's not such thing. Mitochondria in your muscles, organs and brain rebuilds the tissues using your body fat. Why it does that? So you can actually survive and live longer. Scary isn't it? To be an obese person, eating at longer intervals and getting healthier and healthier with every lost kg. Nobody stops you from exercising and building muscle while you lose weight."
        },
        {
          id: "s10", n: "10", title: "What blood tests to monitor while losing weight", punct: ".",
          lead: "",
          body: "I monitored this process with every 10kg of fat loss with these blood tests HOMA-IR and HOMA-B for pancreas health, ALT and AST for liver health, ApoB for heart health, eGFR for kidney health and hsCRP for overall body inflammation. These blood tests improved at every 10kg step. So why worry? Just get healthier and stay that way.",
          extra: "panel",
          dark: true
        },
        {
          id: "s11", n: "11", title: "Disclaimer and donations", punct: ".",
          lead: "",
          body: "By modifying your eating habits around insulin and adopting a healthy lifestyle, you can reverse insulin resistance, obesity, prediabetes, type 2 diabetes and acanthosis nigricans. For other medical issues, address your doctor.",
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
      title: "Zero. Scădere în greutate și insulina.",
      desc: "Zero — scădere în greutate cu insulina. Cum insulina a jeun întreține obezitatea și cum intervalele de masă de 24–72h o inversează. Analize de sânge pentru confirmare și monitorizare."
    },
    ui: {
      nav: { method: "Metodă", experiment: "Experiment", tests: "Analize de sânge" },
      menu: {
        eyebrow: "Cuprins",
        note: "Zero — scădere în greutate și insulina.",
        right: "Știința anilor 2020 — nu a anilor '50.",
        open: "Meniu",
        close: "Închide meniul"
      },
      hero: {
        eyebrow: "Insulină · Post · Analize de sânge",
        title: 'Scăderea în greutate<br>și insulina<span class="punct">.</span>',
        sub: "Insulina pe nemâncate decide dacă grăsimea se topește sau rămâne. Mănâncă după nivelul insulinei — nu după ceas.",
        cta: "Începe — cum apare obezitatea",
        cue: "derulează",
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
        s1: { num: "01.", text: "Insulina menține grăsimea în corp — indiferent de ceea ce încerci." },
        s3: { num: "02.", text: "Ceasul intern al corpului uman este insulina." }
      },
      extras: {
        intervals: {
          cap: "Intervale progresive — avansezi pe măsură ce foamea se ajustează",
          items: [
            ["24", "O masă pe zi"],
            ["36", "Pasul următor"],
            ["48", "Repetă cât e nevoie"],
            ["72", "Topire rapidă — nu pentru toți"]
          ]
        },
        callout: "Un nivel mai ridicat de insulină reține nutrienții în organism — ca să te mențină sănătos.",
        options: [
          { label: "Varianta A", text: "Două mese pe zi. Nicio calorie între ele." },
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
          sub: "3 categorii de alimente — 3 creșteri ale insulinei",
          rows: [
            {
              title: "Categoria 1 — Legumele",
              sub: "Gătite sau crude, în orice combinație, cu sare, condimente, saramură sau oțet. Le poți consuma chiar și atunci când îți este foame, în timpul ferestrei de post.",
              tag: "Ușoară"
            },
            {
              title: "Categoria 2 — Fibre, proteine, grăsimi",
              sub: "Alimente care conțin fibre, proteine și grăsimi sănătoase, combinate în mese delicioase. Acestea sunt alimentele care îți mențin sănătatea, nu duc la creșterea în greutate și previn diabetul.",
              tag: "Moderată",
              tagClass: "tag--hold"
            },
            {
              title: "Categoria 3 — Zahăr și făină albă",
              sub: "Zahărul și făina albă din alimentele ultraprocesate, sucurile de fructe și chiar dulcețurile de casă (dacă sunt consumate în porții mari). Nu este nevoie să le elimini complet; bucură-te de ele cu ocazii speciale – sărbători, zile de naștere, evenimente deosebite etc. – sau stabilește-ți un ritm, de exemplu, savurând înghețata preferată o dată la două săptămâni.",
              tag: "Foarte mare",
              tagClass: "tag--loss"
            }
          ],
          cap: "Categoria 1 ridică insulina foarte puțin. Categoria 2 o ridică moderat. Categoria 3 o aruncă brusc în sus. Ce mănânci decide cât de sus urcă insulina — când mănânci decide restul."
        },
        panel: {
          cap: "Monitorizare — la fiecare 10 kg",
          rows: [
            ["HOMA-IR & HOMA-B", "sănătatea pancreasului"],
            ["ALT & AST", "sănătatea ficatului"],
            ["ApoB", "sănătatea inimii"],
            ["eGFR", "sănătatea rinichilor"],
            ["hsCRP", "inflamația generală a corpului"]
          ],
          foot: "La fiecare prag de 10 kg → rezultate mai bune."
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
          lead: "Biologia este simplă. Fiecare kilogram de grăsime corporală în plus crește nivelul insulinei în sânge, în stare de repaus alimentar (pe nemâncate).",
          body: "Întrucât insulina crește odată cu fiecare kilogram de grăsime în plus, faptul de a mânca ori de câte ori îți este foame – sau de a lua trei mese pe zi – te va face să acumulezi tot mai multă greutate. Evoluția greutății urmează o curbă logaritmică. Nivelul insulinei în repaus alimentar crește tot mai mult, fără ca persoana respectivă să știe ce se întâmplă în corpul său... până în momentul în care își verifică, prin analize de sânge, nivelul insulinei pe nemâncate. Atunci va înțelege că insulina este cea care menține grăsimea în corp, indiferent de eforturile depuse: deficit caloric, exerciții fizice, diete, suplimente, medicamente, reducerea cantității de hrană, o alimentație mai sănătoasă, dezvoltarea unei mase musculare excesive (fără un scop anume) etc."
        },
        {
          id: "s2", n: "02", title: "Cum să inversezi obezitatea, la fel de rapid cum ai dobândit-o", punct: ".",
          lead: "",
          body: "Deoarece nivelul tău de insulină în repaus alimentar nu mai este cel al unei persoane sănătoase, nu mai poți mânca la fel ca o astfel de persoană. Așadar, în loc de 2 sau 3 mese pe zi, trebuie să-ți adaptezi programul alimentar în funcție de nivelul insulinei, mâncând o dată la 24, 36, 48 sau 72 de ore. Este necesar să treci progresiv de la un interval la altul, pe măsură ce senzația de foame se ajustează. Dacă mănânci o dată la 24 de ore, foamea va începe să apară în jurul orei 16, până când vei simți nevoia să mănânci exact la 24 de ore. Când ajungi să simți foamea fix la 24 de ore, treci la un program de 36 sau 48 de ore. Repetă procesul atunci când începi să simți foamea la 48 de ore; dacă nu poți depăși acest interval, continuă să mănânci o dată la 48 de ore. Pentru persoanele obeze, mesele la intervale de 72 de ore vor accelera topirea grăsimilor, deși această abordare nu este potrivită pentru toată lumea. Pe măsură ce pierzi în greutate, nivelul insulinei în repaus alimentar va scădea, ceea ce va face ca arderea grăsimilor să devină tot mai rapidă, cu fiecare ciclu de 48–72 de ore.",
          extra: "intervals"
        },
        {
          id: "s3", n: "03", title: "Dar caloriile și nutrienții", punct: "?",
          lead: "",
          body: "Nu trebuie să-ți faci griji în privința acestora. Corpul uman este un „computer biologic” (extrem de) inteligent. Poți consuma toate caloriile necesare la intervale de 24, 36, 48 sau 72 de ore și, totuși, să slăbești, menținând nivelul insulinei la valori la fel de scăzute ca în cazul unei persoane slabe. „Ceasul intern” al corpului uman este, de fapt, insulina – nu cel de la încheietură sau de pe telefon. Corpul uman nu știe cât este ceasul în univers; el știe doar câtă insulină trebuie să producă pentru a te menține sănătos. Din acest motiv, nu vei pierde nutrienți; dimpotrivă, un nivel mai ridicat de insulină va reține nutrienții în organism, asigurându-ți starea de sănătate. Gândește-te doar la modul în care trăiau oamenii acum milioane de ani, când hrana era puțină: acumulau grăsime corporală într-o zonă, apoi, în timpul migrației către un loc cu resurse alimentare abundente, pierdeau o parte din acea grăsime.",
          extra: "callout"
        },
        {
          id: "s4", n: "04", title: "Cum să menții scăderea în greutate", punct: ".",
          lead: "",
          body: "Pentru a menține rezultatele, trebuie să elimini toată grăsimea din zona abdominală; astfel, nivelul insulinei „pe nemâncate” (a jeun) va ajunge la valori de 2–4, specifice unei persoane sănătoase. Ulterior, poți adopta un program regulat, cu două mese pe zi – fără nicio calorie consumată între ele – sau o variantă modificată a regimului cu trei mese pe zi, care simulează o singură masă principală (o masă copioasă, urmată de două gustări mici, pentru a menține insulina la un nivel scăzut).",
          extra: "options"
        },
        {
          id: "s5", n: "05", title: "Analize de sânge pentru confirmare", punct: ".",
          lead: "",
          body: "În cadrul testului HOMA-IR, se măsoară atât glicemia, cât și nivelul insulinei pe nemâncate (a jeun); alternativ, poți efectua doar analiza pentru determinarea insulinei a jeun. Dacă ai ajuns la concluzia că organismul tău refuză să elimine grăsimea, indiferent de ce încerci, cauza este un nivel ridicat al insulinei a jeun. Pentru a înțelege mai bine procesele biologice legate de insulină – bazându-te pe descoperiri științifice din anii 2020–2030, nu pe cele din anii '50–'60 – informează-te din lucrările <strong>Dr. Jason Fung</strong>. Apoi, împărtășește aceste cunoștințe medicului tău, explicându-i cum poate fi inversată obezitatea, astfel încât să poți duce o viață sănătoasă și normală, pe termen lung."
        },
        {
          id: "s6", n: "06", title: "Cum să testezi biologia insulinei", punct: ".",
          lead: "",
          body: "Putem pune teoria la încercare. Să presupunem că o persoană obeză are nevoie de un aport de 1600 de calorii pe zi (reprezentând un deficit caloric), față de cele 3200 de calorii necesare pentru menținerea greutății. Să presupunem că această persoană consumă 100 de calorii în fiecare oră, având în plus 8 ore de somn. Pe parcursul unei săptămâni, o persoană obeză ar consuma jumătate din numărul de calorii necesare. Ar slăbi sau s-ar îngrășa această persoană până la sfârșitul săptămânii? Fiecare porție de 100 de calorii ar menține nivelul insulinei ridicat până la ora următoare; persoana respectivă nu ar slăbi deloc – ba chiar s-ar îngrășa, în funcție de cantitatea de grăsime corporală existentă (care corelează cu nivelul insulinei în stare de repaus alimentar): cei cu mai puțină grăsime corporală s-ar îngrășa mai puțin, în timp ce aceia cu mai multă grăsime s-ar îngrășa mai mult. Dacă ar consuma toate cele 1600 de calorii într-o singură masă, o dată pe zi, ar slăbi. Dacă ar împărți cantitatea în două mese a câte 800 de calorii, greutatea s-ar menține la nivelul actual.",
          body2: "Iată un al doilea test, pe care chiar și inteligența artificială îl înțelege: oferă cuiva, în prima zi a săptămânii, toate caloriile de care are nevoie pentru întreaga săptămână, iar apoi persoana respectivă ține post în următoarele 6 zile. În primele 2 zile, va lua în greutate, deoarece nivelul insulinei este ridicat, iar glucoza trebuie împinsă în interiorul celulelor. În următoarele 2 zile, va pierde greutatea acumulată în primele 2 zile. În următoarele 2 zile, va pierde și mai multă greutate – ajungând sub greutatea inițială – datorită scăderii pronunțate a nivelului de insulină. Așadar, a existat, de fapt, un deficit caloric de la bun început?",
          extra: "test1",
          extra2: "test2"
        },
        {
          id: "s7", n: "07", title: "Optimizează creșterile nivelului de insulină prin alimentație", punct: ".",
          lead: "",
          body: "Niciun aliment nu este „rău”, atâta timp cât știi când să-l consumi. Momentul consumului este mai important decât dieta în sine. Există trei categorii de alimente, în funcție de impactul lor asupra nivelului de insulină: cele care provoacă creșteri ușoare, moderate sau foarte mari.",
          extra: "spikes"
        },
        {
          id: "s8", n: "08", title: "Copilul tău este obez", punct: "?",
          lead: "",
          body: "Spune-i să nu mai mănânce gustări între mese, pentru a menține un nivel scăzut al insulinei de la o masă la alta. Corpul se va adapta de la sine la noul program de masă, iar pierderea în greutate (din grăsimi) va avea loc în mod natural. Procesul descris mai sus este destinat exclusiv adulților. Doar eliminarea gustărilor va reduce cu 80% consumul de alimente de „tip 3”, care provoacă creșteri bruște și masive ale nivelului de insulină."
        },
        {
          id: "s9", n: "09", title: "Dar pierderea masei musculare", punct: "?",
          lead: "",
          body: "Așa ceva nu există. Mitocondriile din mușchi, organe și creier reconstruiesc țesuturile folosind grăsimea corporală. De ce fac asta? Pentru ca tu să poți supraviețui și să trăiești mai mult. Înfricoșător, nu-i așa? Să fii o persoană obeză, să mănânci la intervale mai mari de timp și să devii tot mai sănătos cu fiecare kilogram pierdut. Nimeni nu te împiedică să faci mișcare și să-ți dezvolți masa musculară în timp ce slăbești."
        },
        {
          id: "s10", n: "10", title: "Ce analize de sânge să monitorizezi în timpul scăderii în greutate", punct: ".",
          lead: "",
          body: "Am monitorizat acest proces la fiecare 10 kg de grăsime pierdute, folosind următoarele analize de sânge: HOMA-IR și HOMA-B pentru sănătatea pancreasului, ALT și AST pentru sănătatea ficatului, ApoB pentru sănătatea inimii, eGFR pentru sănătatea rinichilor și hsCRP pentru inflamația generală a corpului. Rezultatele acestor analize s-au îmbunătățit la fiecare prag de 10 kg. Așadar, de ce să-ți faci griji? Pur și simplu devino mai sănătos și menține-te așa.",
          extra: "panel",
          dark: true
        },
        {
          id: "s11", n: "11", title: "Declinarea responsabilității și donații", punct: ".",
          lead: "",
          body: "Prin ajustarea obiceiurilor alimentare în funcție de insulină și adoptarea unui stil de viață sănătos, poți inversa rezistența la insulină, obezitatea, prediabetul, diabetul de tip 2 și acanthosis nigricans. Pentru alte probleme medicale, adresează-te medicului tău.",
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
            '<p class="int-cap">' + x.intervals.cap + "</p>" +
            '<div class="intervals-grid">' +
              x.intervals.items
                .map(([n, l]) => '<div class="int"><b>' + n + "<em>h</em></b><i>" + l + "</i></div>")
                .join("") +
            "</div>" +
          "</div>"
        );
      case "callout":
        return '<aside class="callout rv"><p>' + x.callout + "</p></aside>";
      case "options":
        return (
          '<div class="options rv">' +
          x.options
            .map(o => '<div class="opt"><p class="opt-label">' + o.label + "</p><p>" + o.text + "</p></div>")
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

  function sectionHTML(s, x) {
    return (
      '<article class="sec' + (s.dark ? " sec--dark" : "") + '" id="' + s.id + '" data-rail-id="' + s.id + '">' +
        '<div class="wrap">' +
          '<header class="sec-head rv">' +
            '<p class="sec-num">' + s.n + '<span class="punct">.</span></p>' +
            '<h2 class="sec-title">' + s.title + '<span class="punct">' + s.punct + "</span></h2>" +
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

  function statementHTML(st, id) {
    return (
      '<section class="statement" id="st-' + id + '">' +
        '<div class="wrap st-inner rv">' +
          '<p class="st-num">' + st.num + "</p>" +
          '<h3 class="st-text">' + st.text + "</h3>" +
        "</div>" +
        '<div class="st-mark" aria-hidden="true">zero.</div>' +
      "</section>"
    );
  }

  function heroHTML(u) {
    return (
      '<section class="hero" id="top" data-rail-id="top">' +
        '<div class="wrap">' +
          '<p class="hero-eyebrow rv">' + u.hero.eyebrow + "</p>" +
          '<h1 class="hero-title rv">' + u.hero.title + "</h1>" +
          '<p class="hero-sub rv">' + u.hero.sub + "</p>" +
          '<div class="hero-cta rv"><a class="cta" href="#s1">' + u.hero.cta + ' <span class="arr">↓</span></a></div>' +
          '<div class="hero-stats rv">' +
            u.hero.stats
              .map(([v, l]) => '<div class="hstat"><b>' + v + "</b><span>" + l + "</span></div>")
              .join("") +
          "</div>" +
          '<div class="hero-deco" aria-hidden="true"></div>' +
          '<div class="hero-mark" aria-hidden="true">zero.</div>' +
          '<div class="hero-cue" aria-hidden="true"><span>' + u.hero.cue + "</span><span></span></div>" +
        "</div>" +
      "</section>"
    );
  }

  /* ----------------------------------------------------------
     Render
     ---------------------------------------------------------- */
  function renderMain(d) {
    const u = d.ui;
    let html = heroHTML(u);
    u.sections.forEach(s => {
      html += sectionHTML(s, u.extras);
      if (u.statements[s.id]) {
        html += statementHTML(u.statements[s.id], s.id);
      }
    });
    app.innerHTML = html;
  }

  function buildMenu(d) {
    const u = d.ui;
    menuList.innerHTML = u.sections
      .map(
        (s, i) =>
          '<li style="--d:' + i * 45 + 'ms"><a href="#' + s.id + '">' +
          '<span class="mi-n">' + s.n + ".</span>" +
          "<span>" + s.title + s.punct + "</span>" +
          "</a></li>"
      )
      .join("");
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
      const v = get(d.ui, el.dataset.i18n);
      if (v !== undefined) el.textContent = v;
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
     Scroll behaviour
     ---------------------------------------------------------- */
  const onScroll = () => hdr.classList.toggle("scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  $$("#brandLink, #toTop").forEach(a =>
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
