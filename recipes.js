/* Dastpokht recipe library — Persian home cooking plus a few everyday dishes.
   Each recipe: id, category, total minutes, servings, n = [kcal, protein, carbs, fat] per serving,
   app = appliances needed (comma = all of, | = any of), t/d = [English, Persian] name and one-liner,
   i = ingredients "key:qty:unit:flag" (flag s = basic staple, o = optional),
   s = steps [minutes before serving, English, Persian], m = what to serve with it for a full meal.
   Nutrition is a per-serving estimate. */
var DP_RECIPES=[];
function R(o){DP_RECIPES.push(o);}

R({id:'ghormeh-sabzi',c:'stew',min:180,sv:4,n:[430,30,18,27],app:'stove',
 t:['Ghormeh sabzi','قورمه‌سبزی'],d:['Iran’s favorite: slow herb stew with kidney beans and dried lime.','محبوب‌ترین خورش ایرانی با سبزی، لوبیا قرمز و لیموعمانی'],
 i:'lamb|beef:500:g;kidney beans:0.75:cup;herbs:5:cup;dried lime:4;onion:1;turmeric:1:tsp:s;oil:6:tbsp:s;salt::taste:s;black pepper::taste:s',
 s:[[180,'Soak the beans for at least 6 hours beforehand (overnight is best). Fry the diced onion in 2 tbsp oil until golden, stir in the turmeric, then brown the meat.','لوبیا را دست‌کم ۶ ساعت قبل (بهتر است از شب قبل) خیس کنید. پیاز خردشده را در ۲ قاشق روغن طلایی کنید، زردچوبه را اضافه کنید و گوشت را تفت دهید.'],
  [170,'Add the drained beans and 5 cups of hot water. Cover and simmer on low heat.','لوبیای آبکش‌شده و ۵ پیمانه آب داغ را اضافه کنید. درِ قابلمه را بگذارید تا با حرارت ملایم بپزد.'],
  [150,'Fry the chopped herbs in 4 tbsp oil for 15–20 minutes, until dark green and fragrant — don’t let them burn.','سبزی خردشده را در ۴ قاشق روغن ۱۵ تا ۲۰ دقیقه سرخ کنید تا تیره و معطر شود؛ مراقب باشید نسوزد.'],
  [120,'Pierce the dried limes and add them with the fried herbs, salt and pepper. Keep simmering, partly covered.','لیموعمانی‌ها را سوراخ کنید و همراه سبزی سرخ‌شده، نمک و فلفل به خورش اضافه کنید. با درِ نیمه‌باز بگذارید جا بیفتد.'],
  [20,'Taste and adjust the salt and sourness. When it’s ready, a layer of oil rises to the top.','مزه کنید و نمک و ترشی را تنظیم کنید. خورش جاافتاده روغن می‌اندازد.'],
  [0,'Serve with chelo.','با چلو سرو کنید.']],
 m:'chelo,salad-shirazi,sabzi-khordan,doogh'});

R({id:'gheymeh',c:'stew',min:150,sv:4,n:[460,26,30,26],app:'stove',
 t:['Gheymeh','قیمه'],d:['Tomato stew with split peas, dried lime and crispy fries.','خورش لپه با رب گوجه، لیموعمانی و سیب‌زمینی سرخ‌کرده'],
 i:'lamb|beef:400:g;split peas:0.5:cup;onion:1;tomato paste:2:tbsp;dried lime:3;potato:2;saffron:0.25:tsp:o;cinnamon::pinch:o;turmeric:1:tsp:s;oil:5:tbsp:s;salt::taste:s;black pepper::taste:s',
 s:[[150,'Fry the diced onion until golden, add the turmeric and the diced meat, and brown it.','پیاز را طلایی کنید، زردچوبه و گوشت خردشده را اضافه و تفت دهید.'],
  [140,'Stir in the tomato paste for 2 minutes, then add 4 cups of hot water and the pierced dried limes. Cover and simmer.','رب گوجه را ۲ دقیقه تفت دهید، سپس ۴ پیمانه آب داغ و لیموعمانی‌های سوراخ‌شده را اضافه کنید و بگذارید بپزد.'],
  [90,'Rinse the split peas and add them with salt and pepper; simmer until tender but still whole.','لپه را بشویید و همراه نمک و فلفل اضافه کنید تا بپزد ولی له نشود.'],
  [30,'Cut the potatoes into thin matchsticks and fry until crisp.','سیب‌زمینی را خلالی نازک کنید و سرخ کنید تا ترد شود.'],
  [10,'Add the saffron water and a pinch of cinnamon; taste for salt and sourness.','زعفران دم‌کرده و کمی دارچین را اضافه کنید و نمک و ترشی را تنظیم کنید.'],
  [0,'Serve topped with the fries, with chelo.','با خلال سیب‌زمینی روی آن و در کنار چلو سرو کنید.']],
 m:'chelo,mast-o-khiar,doogh'});

R({id:'fesenjan',c:'stew',min:150,sv:4,n:[640,38,24,44],app:'stove',
 t:['Fesenjan','فسنجان'],d:['Chicken in a rich walnut and pomegranate sauce.','مرغ در سس غلیظ گردو و رب انار'],
 i:'chicken:800:g;walnuts:250:g;pomegranate molasses:0.5:cup;onion:1;sugar:1:tbsp:s;cinnamon::pinch:o;turmeric:1:tsp:s;oil:2:tbsp:s;salt::taste:s',
 s:[[150,'Grind the walnuts finely and toast them in a dry pot over low heat for 5 minutes, stirring.','گردو را ریز آسیاب کنید و ۵ دقیقه در قابلمه خشک با حرارت ملایم تفت دهید و مدام هم بزنید.'],
  [140,'Add 4 cups of water and simmer gently, stirring now and then, until the walnut oil rises — about an hour.','۴ پیمانه آب اضافه کنید و با حرارت ملایم بپزید و گاهی هم بزنید تا روغن گردو بیفتد؛ حدود یک ساعت.'],
  [110,'Meanwhile brown the sliced onion and the chicken pieces with the turmeric.','در این فاصله پیاز و تکه‌های مرغ را با زردچوبه تفت دهید.'],
  [80,'Add the chicken, pomegranate molasses and salt to the walnuts. Simmer until the sauce is dark and thick.','مرغ، رب انار و نمک را به گردو اضافه کنید و بگذارید تا خورش تیره و غلیظ شود.'],
  [15,'Balance sweet and sour: a little sugar if it’s too sour, more molasses if it’s too sweet.','ترش و شیرینی را تنظیم کنید: اگر ترش است کمی شکر، اگر شیرین است رب انار بیشتر.'],
  [0,'Serve with chelo.','با چلو سرو کنید.']],
 m:'chelo,salad-shirazi,doogh'});

R({id:'khoresh-bademjan',c:'stew',min:120,sv:4,n:[480,26,22,33],app:'stove',
 t:['Khoresh bademjan','خورش بادمجان'],d:['Meat and fried eggplant in a tangy tomato sauce.','گوشت و بادمجان سرخ‌کرده در سس گوجه و آبغوره'],
 i:'lamb|beef:400:g;eggplant:4;onion:1;tomato:3;tomato paste:2:tbsp;lemon:1;saffron:0.25:tsp:o;turmeric:1:tsp:s;oil:6:tbsp:s;salt::taste:s',
 s:[[120,'Brown the onion, add the turmeric and meat, then the tomato paste. Add 3 cups of water, cover and simmer.','پیاز را تفت دهید، زردچوبه و گوشت و سپس رب را اضافه کنید، ۳ پیمانه آب بریزید و بگذارید بپزد.'],
  [90,'Peel the eggplants and halve them lengthwise. Salt them for 20 minutes, pat dry and fry until golden.','بادمجان‌ها را پوست بگیرید و از طول نصف کنید، ۲۰ دقیقه نمک بزنید، خشک کنید و طلایی سرخ کنید.'],
  [45,'Lay the eggplants and halved tomatoes over the stew, add lemon juice and saffron, and simmer gently without stirring.','بادمجان و گوجه‌های نصف‌شده را روی خورش بچینید، آبلیمو و زعفران اضافه کنید و بدون هم زدن با حرارت ملایم بپزید.'],
  [0,'Serve carefully so the eggplants stay whole, with chelo.','با احتیاط بکشید تا بادمجان‌ها سالم بمانند و با چلو سرو کنید.']],
 m:'chelo,sabzi-khordan,doogh'});

R({id:'khoresh-karafs',c:'stew',min:120,sv:4,n:[390,27,12,26],app:'stove',
 t:['Khoresh karafs','خورش کرفس'],d:['Celery, parsley and mint stew — light and fresh.','خورش سبک و خوش‌عطر کرفس با جعفری و نعناع'],
 i:'lamb|beef:400:g;celery:1:bunch;parsley:2:cup;mint:0.5:cup;onion:1;lemon:1;turmeric:1:tsp:s;oil:5:tbsp:s;salt::taste:s',
 s:[[120,'Brown the onion, add the turmeric and meat, pour in 3 cups of water, cover and simmer.','پیاز را تفت دهید، زردچوبه و گوشت را اضافه کنید، ۳ پیمانه آب بریزید و بگذارید بپزد.'],
  [80,'Cut the celery into 3 cm pieces and fry for 10 minutes.','کرفس را ۳ سانتی خرد کنید و ۱۰ دقیقه تفت دهید.'],
  [70,'Fry the chopped parsley and mint for 5 minutes, then add them to the pot with the celery.','جعفری و نعناع خردشده را ۵ دقیقه تفت دهید و همراه کرفس به خورش اضافه کنید.'],
  [15,'Add the lemon juice and salt, then taste.','آبلیمو و نمک را اضافه کنید و مزه کنید.'],
  [0,'Serve with chelo.','با چلو سرو کنید.']],
 m:'chelo,mast-o-khiar,doogh'});

R({id:'abgoosht',c:'stew',min:210,sv:4,n:[620,38,52,28],app:'stove|pressure cooker',
 t:['Abgoosht (dizi)','آبگوشت (دیزی)'],d:['Slow lamb, chickpea and potato broth, eaten in two courses.','آبگوشت سنتی گوشت، نخود و سیب‌زمینی در دو مرحله'],
 i:'lamb:600:g;chickpeas:0.5:cup;white beans:0.5:cup;potato:3;tomato:2;tomato paste:1:tbsp;onion:1;dried lime:2;bread:4;turmeric:1:tsp:s;salt::taste:s;black pepper::taste:s',
 s:[[210,'Soak the chickpeas and beans overnight. Put the meat, drained legumes, a whole onion and the turmeric in a pot with 8 cups of water, bring to a boil and skim the foam.','نخود و لوبیا را از شب قبل خیس کنید. گوشت، حبوبات، پیاز درسته و زردچوبه را با ۸ پیمانه آب بجوشانید و کف روی آن را بگیرید.'],
  [200,'Cover and simmer on low for 2½ hours (about 45 minutes in a pressure cooker).','درِ قابلمه را بگذارید و ۲ و نیم ساعت با حرارت ملایم بپزید (در زودپز حدود ۴۵ دقیقه).'],
  [60,'Add the peeled potatoes, tomatoes, tomato paste, dried limes, salt and pepper.','سیب‌زمینی پوست‌کنده، گوجه، رب، لیموعمانی، نمک و فلفل را اضافه کنید.'],
  [15,'Pour the broth into bowls over torn bread. Mash the meat, potatoes and beans into a paste (gusht-koobideh).','آبگوشت را جدا کنید و با نان تریت کنید. گوشت و سیب‌زمینی و حبوبات را بکوبید تا گوشت‌کوبیده شود.'],
  [0,'Serve the broth and the mash with bread, raw onion, herbs and pickles.','آبگوشت و گوشت‌کوبیده را با نان، پیاز خام، سبزی خوردن و ترشی سرو کنید.']],
 m:'sabzi-khordan,doogh'});

R({id:'chelo',c:'rice',min:110,sv:4,n:[390,7,78,6],app:'stove|rice cooker',
 t:['Chelo with tahdig','چلو با ته‌دیگ'],d:['Fluffy steamed rice with a golden crust.','برنج دم‌کشیده و پفکی با ته‌دیگ طلایی'],
 i:'rice:3:cup;potato:1::o;butter:2:tbsp:o;saffron:0.25:tsp:o;oil:4:tbsp:s;salt::taste:s',
 s:[[110,'Rinse the rice several times until the water runs clear, then soak it in salted water for at least an hour.','برنج را چند بار بشویید تا آبش زلال شود و دست‌کم یک ساعت در آب‌نمک خیس کنید.'],
  [50,'Bring a big pot of salted water to a rolling boil. Boil the drained rice 6–8 minutes, until soft outside and still firm in the center. Drain.','آب و نمک را در قابلمه بزرگ بجوشانید. برنج را بریزید و ۶ تا ۸ دقیقه بجوشانید تا بیرونش نرم و مغزش کمی سفت باشد؛ آبکش کنید.'],
  [40,'Heat the oil in the pot, lay thin potato slices over the bottom for tahdig, then pile the rice on top in a mound. Poke a few holes with a spoon handle.','روغن را در قابلمه داغ کنید، ته آن سیب‌زمینی حلقه‌ای بچینید و برنج را به شکل هرم روی آن بریزید. با دسته قاشق چند سوراخ ایجاد کنید.'],
  [35,'Wrap the lid in a towel, cover tightly and steam on low for 35–45 minutes.','درِ قابلمه را دم‌کنی بپیچید، محکم بگذارید و ۳۵ تا ۴۵ دقیقه با حرارت ملایم دم بکشید.'],
  [5,'Mix a cup of rice with the saffron water and butter for the top.','یک پیمانه برنج را با زعفران دم‌کرده و کره مخلوط کنید برای روی دیس.'],
  [0,'Serve the rice with the golden tahdig on the side.','برنج را با ته‌دیگ طلایی سرو کنید.']],
 m:''});

R({id:'kateh',c:'rice',min:45,sv:4,n:[380,7,76,7],app:'stove|rice cooker',
 t:['Kateh','کته'],d:['Quick one-pot rice — the weeknight way.','کته، برنج یک‌قابلمه‌ای و سریع'],
 i:'rice:3:cup;butter:2:tbsp;oil:2:tbsp:s;salt::taste:s',
 s:[[45,'Rinse the rice until the water runs clear.','برنج را بشویید تا آبش زلال شود.'],
  [40,'Put it in a pot with 4½ cups of water, salt and oil, and boil uncovered until the water is absorbed, about 10 minutes.','برنج را با ۴ و نیم پیمانه آب، نمک و روغن بجوشانید تا آب کشیده شود؛ حدود ۱۰ دقیقه.'],
  [30,'Dot with butter, cover with a towel-wrapped lid and cook on low for 30 minutes.','کره را روی برنج بگذارید، درِ دم‌کنی را بگذارید و ۳۰ دقیقه با حرارت ملایم دم بکشد.'],
  [0,'Flip it onto a plate to show off the crust, or just scoop and serve.','برنج را برگردانید تا ته‌دیگ پیدا شود یا بکشید و سرو کنید.']],
 m:''});

R({id:'zereshk-polo',c:'rice',min:90,sv:4,n:[720,42,82,24],app:'stove',
 t:['Zereshk polo ba morgh','زرشک‌پلو با مرغ'],d:['Saffron rice with jewel-red barberries and braised chicken.','زرشک‌پلو با مرغ زعفرانی'],
 i:'rice:3:cup;chicken:1:kg;barberries:0.5:cup;onion:2;saffron:0.5:tsp;butter:2:tbsp;pistachios:2:tbsp:o;sugar:1:tbsp:s;turmeric:1:tsp:s;oil:4:tbsp:s;salt::taste:s',
 s:[[90,'Soak the rice (as for chelo). Brown an onion with the turmeric, add the chicken and sear it, then add 1 cup of water, salt and half the saffron. Cover and simmer 45 minutes.','برنج را خیس کنید (مثل چلو). یک پیاز را با زردچوبه تفت دهید، مرغ را اضافه و سرخ کنید، سپس یک پیمانه آب، نمک و نصف زعفران را بریزید و ۴۵ دقیقه بپزید.'],
  [55,'Parboil and drain the rice, then steam it for 40 minutes, as for chelo.','برنج را آبکش کنید و مثل چلو ۴۰ دقیقه دم بگذارید.'],
  [15,'Rinse the barberries, then sauté them in butter with the sugar for 1–2 minutes — they burn fast.','زرشک را بشویید و با کره و شکر یکی دو دقیقه تفت دهید؛ زود می‌سوزد.'],
  [5,'Mix some of the rice with the rest of the saffron water.','کمی از برنج را با باقی زعفران مخلوط کنید.'],
  [0,'Plate the rice, scatter the saffron rice, barberries and pistachios over it, and serve the chicken with its sauce.','برنج را بکشید، برنج زعفرانی، زرشک و پسته را رویش بریزید و مرغ را با سسش کنار آن سرو کنید.']],
 m:'mast-o-khiar,salad-shirazi,doogh'});

R({id:'loobia-polo',c:'rice',min:90,sv:4,n:[640,28,86,20],app:'stove',
 t:['Loobia polo','لوبیاپلو'],d:['Rice layered with beef, green beans and tomato.','لوبیاپلو با گوشت، لوبیا سبز و رب'],
 i:'beef|ground meat:400:g;rice:3:cup;green beans:300:g;onion:1;tomato paste:3:tbsp;cinnamon:0.5:tsp;advieh:1:tsp:o;turmeric:1:tsp:s;oil:5:tbsp:s;salt::taste:s',
 s:[[90,'Soak the rice. Fry the onion, add the turmeric and the meat, and brown it.','برنج را خیس کنید. پیاز را تفت دهید، زردچوبه و گوشت را اضافه و سرخ کنید.'],
  [75,'Add the chopped green beans and fry 5 minutes. Stir in the tomato paste, cinnamon and a splash of water, and cook 20 minutes.','لوبیا سبز خردشده را اضافه کنید و ۵ دقیقه تفت دهید. رب، دارچین و کمی آب را اضافه کنید و ۲۰ دقیقه بپزید.'],
  [55,'Parboil and drain the rice.','برنج را آبکش کنید.'],
  [45,'Layer the rice and the bean mixture in the pot, finishing with rice. Steam for 40 minutes.','برنج و مخلوط لوبیا را لایه‌لایه در قابلمه بریزید، لایه آخر برنج باشد، و ۴۰ دقیقه دم بگذارید.'],
  [0,'Mix gently and serve with yogurt or salad.','آرام مخلوط کنید و با ماست یا سالاد سرو کنید.']],
 m:'mast-o-khiar,salad-shirazi'});

R({id:'adas-polo',c:'rice',min:90,sv:4,n:[560,16,98,12],app:'stove',
 t:['Adas polo','عدس‌پلو'],d:['Rice with lentils, crispy onions, raisins and dates.','عدس‌پلو با پیازداغ، کشمش و خرما'],
 i:'rice:3:cup;lentils:1:cup;raisins:0.5:cup;dates:8::o;onion:2;butter:2:tbsp;saffron:0.25:tsp:o;cinnamon:0.5:tsp:o;oil:4:tbsp:s;salt::taste:s',
 s:[[90,'Soak the rice. Cook the lentils in water for 15–20 minutes, until just tender, and drain.','برنج را خیس کنید. عدس را ۱۵ تا ۲۰ دقیقه بپزید تا نرم شود ولی له نشود؛ آبکش کنید.'],
  [55,'Parboil and drain the rice, mix it with the lentils and steam for 40 minutes.','برنج را آبکش کنید، با عدس مخلوط کنید و ۴۰ دقیقه دم بگذارید.'],
  [30,'Slice the onions thinly and fry them slowly until deep golden (piaz dagh).','پیاز را نازک خلال کنید و آرام سرخ کنید تا طلایی تیره شود (پیازداغ).'],
  [10,'Warm the raisins and chopped dates in butter for a minute.','کشمش و خرمای خردشده را یک دقیقه در کره تفت دهید.'],
  [0,'Serve topped with saffron, the fried onion, raisins and dates.','با زعفران، پیازداغ، کشمش و خرما روی آن سرو کنید.']],
 m:'mast-o-khiar,sabzi-khordan'});

R({id:'baghali-polo',c:'rice',min:90,sv:4,n:[700,44,84,20],app:'stove',
 t:['Baghali polo ba morgh','باقالی‌پلو با مرغ'],d:['Dill and fava bean rice with saffron chicken.','باقالی‌پلو با شوید و مرغ زعفرانی'],
 i:'rice:3:cup;fava beans:300:g;dill:1:cup;chicken:1:kg;onion:1;saffron:0.5:tsp;butter:2:tbsp;turmeric:1:tsp:s;oil:4:tbsp:s;salt::taste:s',
 s:[[90,'Soak the rice. Brown the onion with the turmeric, add the chicken, then 1 cup of water, salt and half the saffron. Simmer 45 minutes.','برنج را خیس کنید. پیاز را با زردچوبه تفت دهید، مرغ را اضافه کنید، سپس یک پیمانه آب، نمک و نصف زعفران را بریزید و ۴۵ دقیقه بپزید.'],
  [55,'Parboil the rice, adding the fava beans for the last 2 minutes, and drain.','برنج را آبکش کنید؛ باقالی را ۲ دقیقه آخر اضافه کنید.'],
  [45,'Layer the rice and beans with the dill in the pot and steam for 40 minutes.','برنج و باقالی را با شوید لایه‌لایه در قابلمه بریزید و ۴۰ دقیقه دم بگذارید.'],
  [0,'Top with saffron rice and butter, and serve with the chicken.','با برنج زعفرانی و کره تزیین کنید و با مرغ سرو کنید.']],
 m:'mast-o-khiar,salad-shirazi,doogh'});

R({id:'sabzi-polo',c:'rice',min:90,sv:4,n:[680,36,82,22],app:'stove',
 t:['Sabzi polo ba mahi','سبزی‌پلو با ماهی'],d:['Herbed rice with crispy fish — the Nowruz classic.','سبزی‌پلو با ماهی، غذای شب عید'],
 i:'rice:3:cup;herbs:3:cup;fish:600:g;garlic:3:clove:o;flour:2:tbsp;lemon:1::o;turmeric:1:tsp:s;oil:5:tbsp:s;salt::taste:s',
 s:[[90,'Soak the rice. Chop the herbs finely.','برنج را خیس کنید. سبزی را ریز خرد کنید.'],
  [55,'Parboil and drain the rice, mix in the herbs and garlic, and steam for 40 minutes.','برنج را آبکش کنید، سبزی و سیر را مخلوط کنید و ۴۰ دقیقه دم بگذارید.'],
  [20,'Season the fish with salt and turmeric, dust with flour and fry 4 minutes a side.','ماهی را با نمک و زردچوبه مزه‌دار کنید، به آرد بزنید و هر طرف ۴ دقیقه سرخ کنید.'],
  [0,'Serve the green rice with the fish and lemon wedges.','سبزی‌پلو را با ماهی و لیمو سرو کنید.']],
 m:'salad-shirazi,doogh'});

R({id:'tahchin',c:'rice',min:120,sv:6,n:[560,30,72,17],app:'oven|stove',
 t:['Tahchin','ته‌چین مرغ'],d:['A crisp baked cake of saffron-yogurt rice with chicken.','ته‌چین مرغ زعفرانی و ترد'],
 i:'rice:3:cup;chicken:600:g;yogurt:1.5:cup;eggs:2;saffron:0.5:tsp;onion:1;butter:3:tbsp;barberries:0.25:cup:o;oil:3:tbsp:s;salt::taste:s',
 s:[[120,'Soak the rice. Poach the chicken with the onion and salt for 40 minutes, then shred it.','برنج را خیس کنید. مرغ را با پیاز و نمک ۴۰ دقیقه بپزید و ریش‌ریش کنید.'],
  [70,'Parboil and drain the rice. Mix the yogurt, egg yolks, saffron water, salt and half the rice.','برنج را آبکش کنید. ماست، زرده، زعفران، نمک و نصف برنج را مخلوط کنید.'],
  [60,'Butter a baking dish, press in the yogurt rice, add a layer of chicken, then the plain rice. Press down firmly.','ظرف پیرکس را کره بمالید، برنج ماستی را کف آن فشرده کنید، یک لایه مرغ و سپس باقی برنج را بریزید و محکم فشار دهید.'],
  [55,'Cover with foil and bake at 190°C (375°F) for an hour, until the bottom is golden.','روی آن فویل بکشید و یک ساعت در فر ۱۹۰ درجه بپزید تا زیرش طلایی شود.'],
  [0,'Rest 5 minutes, flip onto a platter and scatter barberries on top.','۵ دقیقه صبر کنید، برگردانید و با زرشک تزیین کنید.']],
 m:'salad-shirazi,doogh'});

R({id:'estamboli',c:'rice',min:60,sv:4,n:[520,14,88,12],app:'stove|rice cooker',
 t:['Estamboli polo','استامبولی‌پلو'],d:['Tomato rice with potatoes — cheap, fast and loved.','استامبولی‌پلو، سریع و خوشمزه'],
 i:'rice:3:cup;potato:2;tomato paste:3:tbsp;onion:1;beef|ground meat:250:g:o;turmeric:1:tsp:s;oil:4:tbsp:s;salt::taste:s;black pepper::taste:s',
 s:[[60,'Rinse the rice. Fry the onion, add the turmeric, the meat if you’re using it, and the diced potatoes; cook 10 minutes.','برنج را بشویید. پیاز را تفت دهید، زردچوبه، گوشت (اختیاری) و سیب‌زمینی نگینی را اضافه کنید و ۱۰ دقیقه تفت دهید.'],
  [45,'Stir in the tomato paste, then add the rice, 4 cups of water, salt and pepper. Boil until the water is absorbed.','رب را تفت دهید، سپس برنج، ۴ پیمانه آب، نمک و فلفل را اضافه کنید و بجوشانید تا آب کشیده شود.'],
  [30,'Cover with a towel-wrapped lid and steam on low for 30 minutes.','درِ دم‌کنی بگذارید و ۳۰ دقیقه با حرارت ملایم دم بکشد.'],
  [0,'Serve with yogurt and pickles.','با ماست و ترشی سرو کنید.']],
 m:'mast-o-khiar,salad-shirazi'});

R({id:'joojeh-kabab',c:'kebab',min:300,sv:4,n:[380,48,6,17],app:'grill|oven|stove',
 t:['Joojeh kabab','جوجه‌کباب'],d:['Saffron and lemon chicken skewers.','جوجه‌کباب زعفرانی با لیمو'],
 i:'chicken:1:kg;yogurt:0.5:cup;onion:1;lemon:1;saffron:0.5:tsp;butter:2:tbsp;tomato:4::o;oil:3:tbsp:s;salt::taste:s;black pepper::taste:s',
 s:[[300,'Cut the chicken into large cubes. Mix with grated onion, yogurt, lemon juice, saffron water, oil, salt and pepper, and marinate at least 4 hours (overnight is best).','مرغ را درشت خرد کنید و با پیاز رنده‌شده، ماست، آبلیمو، زعفران، روغن، نمک و فلفل مخلوط کنید. دست‌کم ۴ ساعت (بهتر است یک شب) بماند.'],
  [30,'Thread the chicken and tomatoes onto skewers. Light the grill, or turn the oven grill to high.','مرغ و گوجه‌ها را به سیخ بکشید. منقل را روشن کنید یا گریل فر را روی حداکثر بگذارید.'],
  [20,'Grill 12–15 minutes, turning often and brushing with melted butter and saffron.','۱۲ تا ۱۵ دقیقه کباب کنید، مرتب بچرخانید و با کره آب‌شده و زعفران چرب کنید.'],
  [0,'Serve with chelo or bread, the grilled tomatoes and sumac.','با چلو یا نان، گوجه کبابی و سماق سرو کنید.']],
 m:'chelo,salad-shirazi,doogh'});

R({id:'koobideh',c:'kebab',min:60,sv:4,n:[480,34,4,36],app:'grill|oven|stove',
 t:['Kabab koobideh','کباب کوبیده'],d:['Juicy ground-meat kebab — on the grill, in a pan or in the oven.','کباب کوبیده روی منقل، در تابه یا فر'],
 i:'ground meat:600:g;onion:1;sumac:1:tbsp:o;tomato:4::o;butter:1:tbsp:o;salt::taste:s;black pepper::taste:s',
 s:[[60,'Grate the onion and squeeze out the juice. Knead it with the meat, salt and pepper for 5 minutes until sticky, then chill 30 minutes.','پیاز را رنده کنید و آبش را بگیرید. با گوشت، نمک و فلفل ۵ دقیقه ورز دهید تا چسبناک شود و ۳۰ دقیقه در یخچال بگذارید.'],
  [25,'Shape the meat onto wide skewers, or into long patties for a pan or the oven.','گوشت را دور سیخ پهن بکشید، یا برای تابه و فر به شکل کباب دراز فرم دهید.'],
  [15,'Grill over hot coals 4–5 minutes a side, or cook in a hot pan 4 minutes a side, or under the oven grill for 10 minutes.','روی ذغال داغ هر طرف ۴ تا ۵ دقیقه، یا در تابه داغ هر طرف ۴ دقیقه، یا زیر گریل فر ۱۰ دقیقه بپزید.'],
  [0,'Serve with chelo, grilled tomatoes, butter and sumac.','با چلو، گوجه کبابی، کره و سماق سرو کنید.']],
 m:'chelo,salad-shirazi,doogh'});

R({id:'kabab-tabei',c:'kebab',min:40,sv:4,n:[450,30,16,30],app:'stove',
 t:['Kabab tabei','کباب تابه‌ای'],d:['Pan kebab — kebab night without a grill.','کباب تابه‌ای، کباب بدون منقل'],
 i:'ground meat:500:g;onion:1;tomato:3;potato:2::o;turmeric:1:tsp:s;salt::taste:s;black pepper::taste:s;oil:2:tbsp:s',
 s:[[40,'Grate the onion, squeeze it dry, and knead it with the meat, turmeric, salt and pepper.','پیاز رنده‌شده و آب‌گرفته را با گوشت، زردچوبه، نمک و فلفل ورز دهید.'],
  [30,'Press the meat into a large pan in an even layer and score it into strips.','گوشت را در تابه بزرگ یکدست پهن کنید و با کارد به شکل نوار خط بیندازید.'],
  [25,'Cook covered on medium heat for 10 minutes, pour off the juices, add tomato halves and potato slices, and cook 10 minutes more.','با درِ بسته روی حرارت متوسط ۱۰ دقیقه بپزید، آبش را خالی کنید، گوجه و سیب‌زمینی را اضافه کنید و ۱۰ دقیقه دیگر بپزید.'],
  [0,'Serve with rice or bread.','با برنج یا نان سرو کنید.']],
 m:'kateh,salad-shirazi,doogh'});

R({id:'ash-reshteh',c:'soup',min:180,sv:6,n:[420,17,62,12],app:'stove',
 t:['Ash reshteh','آش رشته'],d:['Herb, bean and noodle soup with kashk and fried mint.','آش رشته با کشک، پیازداغ و نعناع‌داغ'],
 i:'herbs:4:cup;spinach:2:cup;reshteh:200:g;chickpeas:0.33:cup;kidney beans:0.33:cup;lentils:0.33:cup;onion:3;garlic:6:clove;kashk:1:cup;dried mint:2:tbsp;turmeric:1:tsp:s;oil:6:tbsp:s;salt::taste:s;black pepper::taste:s',
 s:[[180,'Soak the chickpeas and beans overnight, then simmer them in 10 cups of water with the turmeric for 1½ hours.','نخود و لوبیا را از شب قبل خیس کنید و با ۱۰ پیمانه آب و زردچوبه یک ساعت و نیم بپزید.'],
  [90,'Add the lentils and cook 20 minutes.','عدس را اضافه کنید و ۲۰ دقیقه بپزید.'],
  [70,'Add the chopped herbs and spinach with salt and pepper, and simmer 30 minutes.','سبزی خردشده و اسفناج را با نمک و فلفل اضافه کنید و ۳۰ دقیقه بپزید.'],
  [50,'Meanwhile fry the sliced onions until golden, then the garlic, and bloom the dried mint in hot oil for a few seconds (nana dagh).','در این فاصله پیازداغ و سیرداغ درست کنید و نعناع خشک را چند ثانیه در روغن داغ تفت دهید (نعناع‌داغ).'],
  [30,'Break in the reshteh noodles with half the fried onion, and cook until the noodles are soft and the ash is thick.','رشته را بشکنید و همراه نصف پیازداغ اضافه کنید تا رشته بپزد و آش غلیظ شود.'],
  [0,'Serve in bowls topped with kashk, fried onion, garlic and mint.','در کاسه بکشید و با کشک، پیازداغ، سیرداغ و نعناع‌داغ تزیین کنید.']],
 m:''});

R({id:'adasi',c:'soup',min:50,sv:4,n:[330,18,50,7],app:'stove',
 t:['Adasi','عدسی'],d:['Creamy lentil soup — the winter breakfast.','عدسی گرم و لعاب‌دار، صبحانه زمستانی'],
 i:'lentils:1.5:cup;onion:1;potato:1::o;cumin:1:tsp:o;lemon:1::o;dried mint:1:tsp:o;bread:2::o;turmeric:1:tsp:s;oil:3:tbsp:s;salt::taste:s;black pepper::taste:s',
 s:[[50,'Rinse the lentils and simmer them with 5 cups of water and the turmeric for 30 minutes.','عدس را بشویید و با ۵ پیمانه آب و زردچوبه ۳۰ دقیقه بپزید.'],
  [25,'Fry the chopped onion in oil until golden.','پیاز خردشده را در روغن طلایی کنید.'],
  [15,'Add half the onion, the cumin, salt and pepper, and cook until thick and creamy, mashing a little.','نصف پیازداغ، زیره، نمک و فلفل را اضافه کنید و بپزید تا غلیظ و لعاب‌دار شود؛ کمی له کنید.'],
  [0,'Serve with the rest of the onion, a squeeze of lemon and bread.','با باقی پیازداغ، کمی آبلیمو و نان سرو کنید.']],
 m:''});

R({id:'soup-jo',c:'soup',min:60,sv:4,n:[280,18,34,8],app:'stove',
 t:['Soup-e jo','سوپ جو'],d:['Barley and chicken soup with lemon.','سوپ جو با مرغ و لیمو'],
 i:'barley:0.5:cup;chicken:250:g;carrot:1;onion:1;lemon:1;parsley:0.5:cup;tomato paste:1:tbsp:o;cream:0.5:cup:o;turmeric:1:tsp:s;oil:2:tbsp:s;salt::taste:s;black pepper::taste:s',
 s:[[60,'Rinse the barley. Fry the onion, add the turmeric and the diced chicken, then the barley and 6 cups of water. Simmer 40 minutes.','جو را بشویید. پیاز را تفت دهید، زردچوبه و مرغ خردشده، سپس جو و ۶ پیمانه آب را اضافه کنید و ۴۰ دقیقه بپزید.'],
  [25,'Add the grated carrot and tomato paste and cook 15 minutes more.','هویج رنده‌شده و رب را اضافه کنید و ۱۵ دقیقه دیگر بپزید.'],
  [8,'Stir in the chopped parsley, lemon juice and a splash of cream if you like.','جعفری خردشده، آبلیمو و در صورت تمایل کمی خامه اضافه کنید.'],
  [0,'Serve hot.','داغ سرو کنید.']],
 m:''});

R({id:'nimroo',c:'breakfast',min:10,sv:2,n:[220,14,2,17],app:'stove',
 t:['Nimroo','نیمرو'],d:['Fried eggs with runny yolks — breakfast in 10 minutes.','نیمرو، صبحانه ده‌دقیقه‌ای'],
 i:'eggs:4;butter:1:tbsp:o;bread:2::o;tomato:1::o;oil:1:tbsp:s;salt::taste:s;black pepper::taste:s;turmeric::pinch:s',
 s:[[10,'Heat butter or oil in a pan over medium heat.','کره یا روغن را در تابه روی حرارت متوسط داغ کنید.'],
  [7,'Crack in the eggs, season with salt, pepper and a pinch of turmeric, cover and cook 3–4 minutes until the whites set.','تخم‌مرغ‌ها را بشکنید، نمک و فلفل و کمی زردچوبه بزنید، درش را بگذارید و ۳ تا ۴ دقیقه بپزید تا سفیده ببندد.'],
  [0,'Serve with warm bread and tomato.','با نان تازه و گوجه سرو کنید.']],
 m:'chai'});

R({id:'noon-panir-sabzi',c:'breakfast',min:5,sv:2,n:[380,15,36,20],app:'',
 t:['Bread, cheese & herbs','نان و پنیر و سبزی'],d:['Warm bread, white cheese, fresh herbs and walnuts.','نان تازه، پنیر، سبزی خوردن و گردو'],
 i:'bread:2;cheese:100:g;herbs:1:cup;walnuts:0.25:cup;cucumber:1::o;tomato:1::o',
 s:[[5,'Wash and dry the herbs; slice the cucumber and tomato.','سبزی را بشویید و خشک کنید؛ خیار و گوجه را حلقه کنید.'],
  [0,'Wrap cheese, herbs and walnuts in warm bread.','پنیر، سبزی و گردو را لای نان تازه بپیچید.']],
 m:'chai'});

R({id:'halim',c:'breakfast',min:240,sv:6,n:[420,28,48,12],app:'stove',
 t:['Halim','حلیم'],d:['Slow wheat and meat porridge with cinnamon and butter.','حلیم گندم و گوشت با دارچین و کره'],
 i:'wheat:1.5:cup;chicken|lamb:500:g;onion:1;cinnamon:1:tsp;butter:3:tbsp:o;sugar:3:tbsp:o;salt::taste:s',
 s:[[240,'Soak the wheat overnight, then boil it in plenty of water for 2 hours, stirring now and then.','گندم را از شب قبل خیس کنید و در آب فراوان ۲ ساعت بپزید و گاهی هم بزنید.'],
  [230,'Separately, simmer the meat with the onion and salt for 2 hours, until it falls apart.','جداگانه گوشت را با پیاز و نمک ۲ ساعت بپزید تا کاملاً نرم شود.'],
  [120,'Shred the meat and pound or blend it with the wheat until stringy and smooth.','گوشت را ریش‌ریش کنید و با گندم بکوبید یا در غذاساز بزنید تا کش‌دار و یکدست شود.'],
  [90,'Return it to the pot with some of the broth and cook on low, stirring often, until thick and elastic.','با کمی آب گوشت به قابلمه برگردانید و با حرارت ملایم و هم زدن مداوم بپزید تا غلیظ و کش‌دار شود.'],
  [0,'Serve with melted butter, cinnamon and sugar.','با کره آب‌شده، دارچین و شکر سرو کنید.']],
 m:'chai'});

R({id:'kotlet',c:'main',min:50,sv:4,n:[420,24,24,26],app:'stove|air fryer',
 t:['Kotlet','کتلت'],d:['Pan-fried meat and potato patties.','کتلت گوشت و سیب‌زمینی'],
 i:'ground meat:400:g;potato:2;onion:1;eggs:1;breadcrumbs:0.5:cup:o;turmeric:1:tsp:s;salt::taste:s;black pepper::taste:s;oil:6:tbsp:s',
 s:[[50,'Boil the potatoes until tender, about 20 minutes, then peel and grate them.','سیب‌زمینی را ۲۰ دقیقه بپزید، پوست بگیرید و رنده کنید.'],
  [25,'Mix the meat, potato, grated and squeezed onion, egg, turmeric, salt and pepper into a soft dough.','گوشت، سیب‌زمینی، پیاز رنده‌شده و آب‌گرفته، تخم‌مرغ، زردچوبه، نمک و فلفل را خوب ورز دهید.'],
  [20,'Shape oval patties with wet hands, coat them in breadcrumbs and fry 4 minutes a side until deep brown.','با دست خیس به شکل بیضی فرم دهید، به پودر سوخاری بزنید و هر طرف ۴ دقیقه سرخ کنید تا قهوه‌ای شود.'],
  [0,'Serve with bread, pickles and tomato.','با نان، خیارشور و گوجه سرو کنید.']],
 m:'salad-shirazi'});

R({id:'kuku-sabzi',c:'main',min:50,sv:4,n:[300,13,9,24],app:'stove|oven',
 t:['Kuku sabzi','کوکوسبزی'],d:['Herb frittata packed with greens.','کوکوسبزی پر از سبزی معطر'],
 i:'herbs:4:cup;eggs:5;walnuts:0.25:cup:o;barberries:2:tbsp:o;flour:1:tbsp:o;baking powder:0.5:tsp:o;turmeric:1:tsp:s;salt::taste:s;black pepper::taste:s;oil:4:tbsp:s',
 s:[[50,'Wash the herbs, dry them very well and chop them finely.','سبزی را بشویید، کاملاً خشک کنید و ریز خرد کنید.'],
  [35,'Beat the eggs with turmeric, salt, pepper, flour and baking powder, then fold in the herbs, walnuts and barberries.','تخم‌مرغ‌ها را با زردچوبه، نمک، فلفل، آرد و بکینگ‌پودر هم بزنید و سبزی، گردو و زرشک را اضافه کنید.'],
  [30,'Pour into a hot oiled pan, cover and cook on low 12–15 minutes. Cut into wedges, flip and cook 10 more — or bake at 180°C for 30 minutes.','در تابه روغنی داغ بریزید، درش را بگذارید و با حرارت ملایم ۱۲ تا ۱۵ دقیقه بپزید؛ برش بزنید، برگردانید و ۱۰ دقیقه دیگر بپزید (یا ۳۰ دقیقه در فر ۱۸۰ درجه).'],
  [0,'Serve warm or cold with bread and yogurt.','گرم یا سرد با نان و ماست سرو کنید.']],
 m:'mast-o-khiar'});

R({id:'kuku-sibzamini',c:'main',min:45,sv:4,n:[280,9,30,14],app:'stove',
 t:['Kuku sibzamini','کوکوسیب‌زمینی'],d:['Golden potato patties.','کوکوسیب‌زمینی طلایی'],
 i:'potato:3;eggs:3;onion:1::o;flour:1:tbsp:o;turmeric:1:tsp:s;salt::taste:s;black pepper::taste:s;oil:5:tbsp:s',
 s:[[45,'Boil the potatoes until tender, then peel and grate them.','سیب‌زمینی را بپزید، پوست بگیرید و رنده کنید.'],
  [20,'Mix with the eggs, grated onion, turmeric, salt and pepper.','با تخم‌مرغ، پیاز رنده‌شده، زردچوبه، نمک و فلفل مخلوط کنید.'],
  [15,'Fry spoonfuls as small patties, 3–4 minutes a side.','قاشق‌قاشق در تابه به شکل کوکوهای کوچک بریزید و هر طرف ۳ تا ۴ دقیقه سرخ کنید.'],
  [0,'Serve with bread, herbs and pickles.','با نان، سبزی و ترشی سرو کنید.']],
 m:'salad-shirazi'});

R({id:'mirza-ghasemi',c:'main',min:60,sv:4,n:[240,9,18,15],app:'stove',
 t:['Mirza ghasemi','میرزاقاسمی'],d:['Smoky eggplant with garlic, tomato and egg.','میرزاقاسمی دودی با سیر، گوجه و تخم‌مرغ'],
 i:'eggplant:4;tomato:3;garlic:6:clove;eggs:3;turmeric:1:tsp:s;salt::taste:s;black pepper::taste:s;oil:3:tbsp:s',
 s:[[60,'Char the whole eggplants over a flame or grill (or roast at 220°C for 40 minutes) until soft, then peel and chop them.','بادمجان‌ها را روی شعله یا منقل کبابی کنید (یا ۴۰ دقیقه در فر ۲۲۰ درجه) تا نرم شوند؛ پوست بگیرید و خرد کنید.'],
  [25,'Fry the crushed garlic, add the turmeric and eggplant, and cook 5 minutes.','سیر له‌شده را تفت دهید، زردچوبه و بادمجان را اضافه کنید و ۵ دقیقه تفت دهید.'],
  [20,'Add the grated tomatoes and cook until thick.','گوجه رنده‌شده را اضافه کنید و بپزید تا غلیظ شود.'],
  [8,'Push everything aside, scramble the eggs in the space, then fold it all together and season.','مواد را کنار بزنید، تخم‌مرغ را در وسط هم بزنید و سپس همه را مخلوط کنید و نمک و فلفل بزنید.'],
  [0,'Serve with bread or kateh.','با نان یا کته سرو کنید.']],
 m:'kateh,sabzi-khordan'});

R({id:'kashk-bademjan',c:'main',min:60,sv:4,n:[330,9,22,24],app:'stove',
 t:['Kashk bademjan','کشک بادمجان'],d:['Eggplant and kashk dip with fried mint.','کشک بادمجان با نعناع‌داغ'],
 i:'eggplant:4;onion:2;garlic:4:clove;kashk:0.75:cup;walnuts:0.25:cup;dried mint:1:tbsp;turmeric:1:tsp:s;salt::taste:s;oil:6:tbsp:s',
 s:[[60,'Peel the eggplants, slice them lengthwise and fry until golden (or roast them).','بادمجان‌ها را پوست بگیرید، از طول برش دهید و سرخ کنید (یا در فر کبابی کنید).'],
  [35,'Fry the onions until golden, then the garlic, and keep some aside for the top.','پیازداغ و سیرداغ درست کنید و کمی را برای تزیین کنار بگذارید.'],
  [25,'Mash the eggplants with the onion, garlic, turmeric and ½ cup of water, and simmer 10 minutes.','بادمجان را با پیازداغ، سیرداغ، زردچوبه و نصف پیمانه آب له کنید و ۱۰ دقیقه بپزید.'],
  [10,'Stir in most of the kashk and the chopped walnuts.','بیشتر کشک و گردوی خردشده را اضافه کنید.'],
  [0,'Top with kashk, fried onion, garlic and mint bloomed in oil, and serve with bread.','با کشک، پیازداغ، سیرداغ و نعناع‌داغ تزیین کنید و با نان سرو کنید.']],
 m:'sabzi-khordan'});

R({id:'omlet',c:'breakfast',min:20,sv:2,n:[260,14,12,18],app:'stove',
 t:['Omlet-e gojeh farangi','املت گوجه‌فرنگی'],d:['Eggs scrambled in a quick tomato sauce.','املت گوجه‌فرنگی، ساده و سریع'],
 i:'tomato:4;eggs:4;onion:1::o;garlic:1:clove:o;bread:2::o;turmeric:1:tsp:s;salt::taste:s;black pepper::taste:s;oil:2:tbsp:s',
 s:[[20,'Fry the chopped onion (and garlic) until soft.','پیاز (و سیر) خردشده را تفت دهید تا نرم شود.'],
  [15,'Add the grated or chopped tomatoes with turmeric, salt and pepper, and cook until most of the liquid is gone.','گوجه رنده‌شده یا خردشده را با زردچوبه، نمک و فلفل اضافه کنید و بپزید تا آبش کشیده شود.'],
  [6,'Add the eggs and stir gently until just set.','تخم‌مرغ‌ها را اضافه کنید و آرام هم بزنید تا تازه ببندد.'],
  [0,'Serve straight from the pan with bread.','همان‌جا در تابه با نان سرو کنید.']],
 m:'chai'});

R({id:'makaroni',c:'main',min:60,sv:4,n:[620,30,82,20],app:'stove',
 t:['Makaroni','ماکارونی'],d:['Persian spaghetti with meat sauce and a crispy tahdig.','ماکارونی ایرانی با ته‌دیگ'],
 i:'pasta:500:g;ground meat:400:g;onion:1;tomato paste:4:tbsp;bell pepper:1::o;potato:1::o;saffron:0.25:tsp:o;turmeric:1:tsp:s;oil:5:tbsp:s;salt::taste:s;black pepper::taste:s',
 s:[[60,'Fry the onion, add the turmeric and ground meat and brown it. Add the pepper, tomato paste and 1 cup of water, and simmer 15 minutes.','پیاز را تفت دهید، زردچوبه و گوشت چرخ‌کرده را اضافه و سرخ کنید؛ فلفل دلمه، رب و یک پیمانه آب را اضافه کنید و ۱۵ دقیقه بپزید.'],
  [40,'Boil the spaghetti in salted water for 6 minutes and drain.','ماکارونی را ۶ دقیقه در آب‌نمک بجوشانید و آبکش کنید.'],
  [35,'Oil the pot, line it with potato slices, then layer the pasta and sauce.','ته قابلمه روغن بریزید، سیب‌زمینی حلقه‌ای بچینید و ماکارونی و سس را لایه‌لایه بریزید.'],
  [30,'Cover with a towel-wrapped lid and steam on low for 30 minutes for a crispy tahdig.','درِ دم‌کنی بگذارید و ۳۰ دقیقه با حرارت ملایم دم بکشد تا ته‌دیگ ترد شود.'],
  [0,'Serve with the tahdig and a salad.','با ته‌دیگ و سالاد سرو کنید.']],
 m:'salad-shirazi,doogh'});

R({id:'yatimcheh',c:'main',min:45,sv:4,n:[280,5,28,17],app:'stove',
 t:['Yatimcheh','یتیمچه'],d:['Eggplant, potato and tomato stew — no meat needed.','یتیمچه بادمجان و گوجه، بدون گوشت'],
 i:'eggplant:3;tomato:3;potato:2::o;onion:1;garlic:3:clove;tomato paste:1:tbsp;turmeric:1:tsp:s;salt::taste:s;black pepper::taste:s;oil:6:tbsp:s',
 s:[[45,'Peel and dice the eggplants and potatoes, and fry them until golden.','بادمجان و سیب‌زمینی را پوست بگیرید، نگینی خرد کنید و طلایی سرخ کنید.'],
  [25,'Fry the onion and garlic, then add the turmeric and tomato paste.','پیاز و سیر را تفت دهید، زردچوبه و رب را اضافه کنید.'],
  [20,'Add the fried vegetables and the diced tomatoes with salt and pepper; cover and cook 15 minutes.','سبزیجات سرخ‌شده و گوجه خردشده را با نمک و فلفل اضافه کنید و با درِ بسته ۱۵ دقیقه بپزید.'],
  [0,'Serve with kateh or bread.','با کته یا نان سرو کنید.']],
 m:'kateh,mast-o-khiar'});

R({id:'salad-shirazi',c:'side',min:15,sv:4,n:[60,2,10,2],app:'',
 t:['Salad shirazi','سالاد شیرازی'],d:['Cucumber, tomato and onion with lemon and mint.','سالاد شیرازی با آبلیمو و نعناع'],
 i:'cucumber:2;tomato:2;onion:1;lemon:1;dried mint:1:tsp:o;oil:1:tbsp:o;salt::taste:s',
 s:[[15,'Dice the cucumbers, tomatoes and onion small and evenly.','خیار، گوجه و پیاز را ریز و یکدست خرد کنید.'],
  [5,'Dress with lemon juice, dried mint, salt and a little olive oil.','با آبلیمو، نعناع خشک، نمک و کمی روغن زیتون مزه‌دار کنید.'],
  [0,'Serve cold.','خنک سرو کنید.']],
 m:''});

R({id:'mast-o-khiar',c:'side',min:10,sv:4,n:[110,6,10,5],app:'',
 t:['Mast-o-khiar','ماست‌وخیار'],d:['Yogurt with cucumber, mint and raisins.','ماست‌وخیار با نعناع و کشمش'],
 i:'yogurt:2:cup;cucumber:2;dried mint:1:tsp;walnuts:2:tbsp:o;raisins:2:tbsp:o;salt::taste:s',
 s:[[10,'Grate or finely dice the cucumbers.','خیار را رنده یا ریز خرد کنید.'],
  [5,'Stir them into the yogurt with the dried mint, salt, walnuts and raisins.','با ماست، نعناع خشک، نمک، گردو و کشمش مخلوط کنید.'],
  [0,'Keep cold until you serve.','تا زمان سرو در یخچال بگذارید.']],
 m:''});

R({id:'borani-esfenaj',c:'side',min:20,sv:4,n:[120,8,8,6],app:'stove',
 t:['Borani esfenaj','بورانی اسفناج'],d:['Spinach and garlic yogurt.','بورانی اسفناج با سیر'],
 i:'spinach:400:g;yogurt:2:cup;garlic:2:clove;onion:1::o;salt::taste:s;black pepper::taste:s;oil:1:tbsp:s',
 s:[[20,'Wilt the washed spinach in a dry pot, squeeze out the water and chop it.','اسفناج شسته‌شده را در قابلمه بدون آب بپزید تا بخوابد، آبش را بگیرید و خرد کنید.'],
  [10,'Fry the garlic (and onion) briefly, add the spinach and cook 3 minutes, then let it cool.','سیر (و پیاز) را کمی تفت دهید، اسفناج را اضافه کنید و ۳ دقیقه تفت دهید؛ بگذارید خنک شود.'],
  [5,'Stir into the yogurt with salt and pepper.','با ماست، نمک و فلفل مخلوط کنید.'],
  [0,'Serve cool.','خنک سرو کنید.']],
 m:''});

R({id:'olivieh',c:'salad',min:90,sv:6,n:[420,14,22,30],app:'stove',
 t:['Salad olivieh','سالاد الویه'],d:['Potato, egg and chicken salad with pickles.','سالاد الویه با مرغ و خیارشور'],
 i:'potato:4;eggs:4;chicken:300:g;pickles:4;mayonnaise:1:cup;peas:0.5:cup:o;carrot:1::o;lemon:1::o;salt::taste:s;black pepper::taste:s',
 s:[[90,'Boil the potatoes and eggs (and the carrot), and poach the chicken with salt for 30 minutes.','سیب‌زمینی و تخم‌مرغ (و هویج) را آب‌پز کنید و مرغ را با نمک ۳۰ دقیقه بپزید.'],
  [50,'Peel and grate or dice the potatoes and eggs, shred the chicken and dice the pickles.','سیب‌زمینی و تخم‌مرغ را پوست بگیرید و رنده یا ریز کنید؛ مرغ را ریش‌ریش و خیارشور را خرد کنید.'],
  [40,'Mix everything with the mayonnaise, lemon juice, salt and pepper, and chill 30 minutes.','همه را با سس مایونز، آبلیمو، نمک و فلفل مخلوط کنید و ۳۰ دقیقه در یخچال بگذارید.'],
  [0,'Serve in bread or with pickles.','لای نان یا با خیارشور سرو کنید.']],
 m:''});

R({id:'sabzi-khordan',c:'side',min:10,sv:4,n:[80,4,4,6],app:'',
 t:['Sabzi khordan','سبزی خوردن'],d:['A plate of fresh herbs, radishes and cheese.','سبزی خوردن با تربچه و پنیر'],
 i:'herbs:2:cup;radish:6::o;cheese:100:g:o;walnuts:0.25:cup:o',
 s:[[10,'Wash the herbs well, pick off the tough stems and dry them.','سبزی را خوب بشویید، ساقه‌های سفت را جدا کنید و خشک کنید.'],
  [0,'Arrange on a plate with radishes, cheese and walnuts.','با تربچه، پنیر و گردو در بشقاب بچینید.']],
 m:''});

R({id:'sholeh-zard',c:'dessert',min:90,sv:6,n:[320,4,68,5],app:'stove',
 t:['Sholeh zard','شله‌زرد'],d:['Saffron and rose water rice pudding.','شله‌زرد با زعفران و گلاب'],
 i:'rice:0.75:cup;sugar:1.25:cup;saffron:0.5:tsp;rose water:0.33:cup;butter:2:tbsp;cardamom:0.5:tsp:o;almonds:2:tbsp:o;pistachios:2:tbsp:o;cinnamon::pinch:o',
 s:[[90,'Rinse the rice and simmer it in 7 cups of water, stirring now and then, until very soft and creamy — about 45 minutes.','برنج را بشویید و در ۷ پیمانه آب بپزید و گاهی هم بزنید تا کاملاً نرم و لعاب‌دار شود؛ حدود ۴۵ دقیقه.'],
  [45,'Add the sugar and cook 15 minutes.','شکر را اضافه کنید و ۱۵ دقیقه بپزید.'],
  [30,'Stir in the saffron, rose water, butter, cardamom and slivered almonds, and cook on low 15 minutes.','زعفران، گلاب، کره، هل و خلال بادام را اضافه کنید و ۱۵ دقیقه با حرارت ملایم بپزید.'],
  [15,'Pour into bowls and let it set.','در کاسه‌ها بکشید تا ببندد.'],
  [0,'Decorate with cinnamon and pistachios.','با دارچین و خلال پسته تزیین کنید.']],
 m:''});

R({id:'shir-berenj',c:'dessert',min:60,sv:4,n:[260,9,44,6],app:'stove',
 t:['Shir berenj','شیربرنج'],d:['Creamy milk and rice pudding.','شیربرنج گرم و خامه‌ای'],
 i:'rice:0.5:cup;milk:4:cup;rose water:2:tbsp:o;cardamom:0.25:tsp:o;sugar:0.33:cup:o;honey|jam:::o',
 s:[[60,'Simmer the rinsed rice in 1½ cups of water until soft, about 20 minutes.','برنج شسته‌شده را در یک و نیم پیمانه آب بپزید تا نرم شود؛ حدود ۲۰ دقیقه.'],
  [40,'Add the milk and cook on low, stirring often, until thick and creamy — about 30 minutes.','شیر را اضافه کنید و با حرارت ملایم و هم زدن مداوم بپزید تا غلیظ شود؛ حدود ۳۰ دقیقه.'],
  [10,'Stir in the rose water and cardamom.','گلاب و هل را اضافه کنید.'],
  [0,'Serve warm or cold with sugar, honey or jam.','گرم یا سرد با شکر، عسل یا مربا سرو کنید.']],
 m:''});

R({id:'halva',c:'dessert',min:30,sv:8,n:[290,3,40,13],app:'stove',
 t:['Halva','حلوا'],d:['Toasted flour sweet with saffron and rose water.','حلوای زعفرانی با گلاب'],
 i:'flour:1:cup;butter:0.5:cup;sugar:0.75:cup;saffron:0.5:tsp;rose water:0.33:cup;cardamom:0.5:tsp:o;almonds|pistachios:2:tbsp:o',
 s:[[30,'Make the syrup: dissolve the sugar in ½ cup of hot water and add the saffron and rose water.','شربت را آماده کنید: شکر را در نصف پیمانه آب داغ حل کنید و زعفران و گلاب را اضافه کنید.'],
  [25,'Toast the flour in a dry pan over low-medium heat, stirring constantly, until nutty and light brown — about 15 minutes.','آرد را در تابه خشک با حرارت ملایم و هم زدن مداوم تفت دهید تا قهوه‌ای روشن و معطر شود؛ حدود ۱۵ دقیقه.'],
  [10,'Stir in the melted butter until smooth, then carefully add the syrup and keep stirring until it pulls away from the pan.','کره آب‌شده را اضافه کنید تا یکدست شود، سپس با احتیاط شربت را بریزید و هم بزنید تا از کناره‌ها جدا شود.'],
  [0,'Spread on a plate, make a pattern with a spoon and decorate with nuts.','در دیس پهن کنید، با قاشق نقش بیندازید و با مغزها تزیین کنید.']],
 m:'chai'});

R({id:'fereni',c:'dessert',min:20,sv:4,n:[200,7,32,5],app:'stove',
 t:['Fereni','فرنی'],d:['Silky rice-flour and rose water pudding.','فرنی نرم با گلاب'],
 i:'rice flour:4:tbsp;milk:3:cup;sugar:4:tbsp;rose water:2:tbsp;cardamom::pinch:o;pistachios:1:tbsp:o',
 s:[[20,'Whisk the rice flour into ½ cup of cold milk until smooth.','آرد برنج را در نصف پیمانه شیر سرد حل کنید تا یکدست شود.'],
  [15,'Warm the rest of the milk with the sugar, whisk in the rice-flour mixture and cook on low, stirring, until thick — about 10 minutes.','باقی شیر را با شکر گرم کنید، مخلوط آرد برنج را اضافه کنید و با هم زدن مداوم روی حرارت ملایم بپزید تا غلیظ شود؛ حدود ۱۰ دقیقه.'],
  [5,'Add the rose water and cardamom.','گلاب و هل را اضافه کنید.'],
  [0,'Serve warm or chilled with pistachios.','گرم یا سرد با پسته سرو کنید.']],
 m:''});

R({id:'cake-yazdi',c:'dessert',min:45,sv:12,n:[230,4,30,11],app:'oven',
 t:['Cake yazdi','کیک یزدی'],d:['Cardamom and rose water cupcakes from Yazd.','کیک یزدی با هل و گلاب'],
 i:'flour:1.5:cup;sugar:1:cup;eggs:3;yogurt:0.5:cup;oil:0.5:cup;cardamom:1:tsp;rose water:2:tbsp;baking powder:1:tsp;pistachios:2:tbsp:o',
 s:[[45,'Heat the oven to 180°C (350°F) and line a muffin tin.','فر را روی ۱۸۰ درجه گرم کنید و قالب کاپ‌کیک را آماده کنید.'],
  [40,'Beat the eggs and sugar until pale, then beat in the oil, yogurt, rose water and cardamom.','تخم‌مرغ و شکر را هم بزنید تا کرم‌رنگ شود، سپس روغن، ماست، گلاب و هل را اضافه کنید.'],
  [30,'Fold in the flour and baking powder, fill the cups two-thirds full and sprinkle with pistachios.','آرد و بکینگ‌پودر را آرام مخلوط کنید، قالب‌ها را تا دو سوم پر کنید و پسته بپاشید.'],
  [25,'Bake 20–25 minutes, until golden and a toothpick comes out clean.','۲۰ تا ۲۵ دقیقه بپزید تا طلایی شود و خلال دندان تمیز بیرون بیاید.'],
  [0,'Let them cool and serve with tea.','بگذارید خنک شود و با چای سرو کنید.']],
 m:'chai'});

R({id:'doogh',c:'drink',min:5,sv:4,n:[75,4,6,4],app:'',
 t:['Doogh','دوغ'],d:['Salty yogurt drink with mint.','دوغ خنک با نعناع'],
 i:'yogurt:2:cup;dried mint:1:tsp;salt::taste:s',
 s:[[5,'Whisk the yogurt with 2 cups of cold water (or sparkling water) and salt until smooth.','ماست را با ۲ پیمانه آب سرد (یا آب گازدار) و نمک هم بزنید تا یکدست شود.'],
  [2,'Add the dried mint and some ice.','نعناع خشک و یخ اضافه کنید.'],
  [0,'Serve cold.','خنک سرو کنید.']],
 m:''});

R({id:'sekanjabin',c:'drink',min:30,sv:6,n:[120,0,31,0],app:'stove',
 t:['Sharbat sekanjabin','شربت سکنجبین'],d:['Mint and vinegar syrup — the cool summer drink.','شربت سکنجبین خنک تابستانی'],
 i:'sugar:2:cup;vinegar:0.5:cup;mint:1:bunch;cucumber:1::o',
 s:[[30,'Dissolve the sugar in 1 cup of water and bring to a boil.','شکر را در یک پیمانه آب حل کنید و بجوشانید.'],
  [20,'Add the vinegar and simmer 15 minutes, until syrupy.','سرکه را اضافه کنید و ۱۵ دقیقه بجوشد تا قوام بیاید.'],
  [5,'Take it off the heat, add the mint, let it cool and lift the mint out.','از روی حرارت بردارید، نعناع را اضافه کنید تا خنک شود و سپس نعناع را خارج کنید.'],
  [0,'Mix 3 tbsp of syrup with cold water, ice and grated cucumber.','۳ قاشق شربت را با آب سرد، یخ و خیار رنده‌شده مخلوط کنید.']],
 m:''});

R({id:'chai',c:'drink',min:15,sv:4,n:[5,0,1,0],app:'stove',
 t:['Chai','چای'],d:['Brewed black tea with cardamom.','چای دم‌کشیده با هل'],
 i:'tea:4:tsp;cardamom:3::o;saffron::pinch:o;sugar:::o',
 s:[[15,'Boil fresh water in the kettle.','آب تازه را در کتری بجوشانید.'],
  [10,'Warm the teapot with hot water, add the tea leaves and cardamom, pour in the boiling water and let it brew on low heat for 10 minutes.','قوری را با آب داغ گرم کنید، چای و هل را بریزید، آب جوش را اضافه کنید و بگذارید ۱۰ دقیقه روی حرارت ملایم دم بکشد.'],
  [0,'Pour into glasses and serve with sugar cubes or dates.','در استکان بریزید و با قند یا خرما سرو کنید.']],
 m:''});

R({id:'shakshuka',c:'breakfast',min:25,sv:2,n:[320,17,18,20],app:'stove',
 t:['Shakshuka','شکشوکا'],d:['Eggs poached in a spiced tomato and pepper sauce.','تخم‌مرغ در سس گوجه و فلفل'],
 i:'eggs:4;tomato:4;onion:1;bell pepper:1;garlic:2:clove;cumin:1:tsp:o;chili flakes::pinch:o;cheese:50:g:o;bread:2::o;salt::taste:s;oil:2:tbsp:s;black pepper::taste:s',
 s:[[25,'Soften the onion, pepper and garlic in oil for 8 minutes.','پیاز، فلفل دلمه و سیر را ۸ دقیقه در روغن تفت دهید.'],
  [17,'Add the cumin, chili, chopped tomatoes and salt, and simmer until thick, about 8 minutes.','زیره، فلفل، گوجه خردشده و نمک را اضافه کنید و بپزید تا غلیظ شود؛ حدود ۸ دقیقه.'],
  [8,'Make little wells, crack in the eggs, cover and cook 5–6 minutes.','چند گودی ایجاد کنید، تخم‌مرغ‌ها را بشکنید و با درِ بسته ۵ تا ۶ دقیقه بپزید.'],
  [0,'Crumble cheese on top and serve with bread.','پنیر را رویش خرد کنید و با نان سرو کنید.']],
 m:''});

R({id:'egg-fried-rice',c:'rice',min:20,sv:2,n:[450,14,62,15],app:'stove',
 t:['Egg fried rice','برنج سرخ‌شده با تخم‌مرغ'],d:['Leftover rice turned into dinner in 20 minutes.','برنج مانده، شام بیست‌دقیقه‌ای'],
 i:'rice:2:cup;eggs:2;soy sauce:2:tbsp;peas:0.5:cup:o;carrot:1::o;green onion:2::o;garlic:2:clove:o;oil:2:tbsp:s;salt::taste:s',
 s:[[20,'Use cold cooked rice — yesterday’s is perfect. Dice the carrot and slice the green onions.','از برنج پخته سرد استفاده کنید (برنج دیروز عالی است). هویج را نگینی و پیازچه را خرد کنید.'],
  [12,'Scramble the eggs in a very hot pan and set them aside.','تخم‌مرغ‌ها را در تابه داغ هم بزنید و کنار بگذارید.'],
  [10,'Stir-fry the garlic, carrot and peas for 3 minutes, then add the rice and toss until hot.','سیر، هویج و نخودفرنگی را ۳ دقیقه تفت دهید، برنج را اضافه کنید و هم بزنید تا داغ شود.'],
  [3,'Add the soy sauce, the eggs and the green onions.','سس سویا، تخم‌مرغ و پیازچه را اضافه کنید.'],
  [0,'Serve hot.','داغ سرو کنید.']],
 m:''});

R({id:'chicken-curry',c:'main',min:45,sv:4,n:[380,36,12,20],app:'stove',
 t:['Chicken curry','کاری مرغ'],d:['Simple chicken curry finished with yogurt.','کاری مرغ ساده با ماست'],
 i:'chicken:600:g;onion:1;garlic:3:clove;tomato:2;curry powder:2:tbsp;yogurt|cream:0.5:cup;oil:3:tbsp:s;salt::taste:s',
 s:[[45,'Fry the onion until golden, then add the garlic and curry powder for a minute.','پیاز را طلایی کنید، سیر و پودر کاری را یک دقیقه تفت دهید.'],
  [35,'Add the chicken pieces and brown them, then the chopped tomatoes.','تکه‌های مرغ را اضافه و سرخ کنید، سپس گوجه خردشده را بریزید.'],
  [25,'Add ½ cup of water, cover and simmer 20 minutes.','نصف پیمانه آب اضافه کنید و با درِ بسته ۲۰ دقیقه بپزید.'],
  [5,'Stir in the yogurt or cream off the heat, and season.','ماست یا خامه را بیرون از حرارت اضافه کنید و نمک بزنید.'],
  [0,'Serve with rice.','با برنج سرو کنید.']],
 m:'kateh'});

R({id:'pasta-pomodoro',c:'main',min:25,sv:4,n:[480,15,86,9],app:'stove',
 t:['Pasta pomodoro','پاستا با سس گوجه'],d:['Pasta in a fresh tomato and garlic sauce.','پاستا با سس گوجه‌فرنگی و سیر'],
 i:'pasta:400:g;tomato:6;garlic:3:clove;cheese:50:g:o;herbs:::o;oil:3:tbsp:s;salt::taste:s;black pepper::taste:s',
 s:[[25,'Put a big pot of salted water on to boil.','قابلمه بزرگ آب‌نمک را روی گاز بگذارید تا بجوشد.'],
  [20,'Cook the garlic gently in oil, add the chopped tomatoes and salt, and simmer 15 minutes.','سیر را آرام در روغن تفت دهید، گوجه خردشده و نمک را اضافه کنید و ۱۵ دقیقه بپزید.'],
  [12,'Boil the pasta until al dente and save a cup of the cooking water.','پاستا را بجوشانید تا کمی سفت بماند؛ یک پیمانه از آبش را نگه دارید.'],
  [2,'Toss the pasta with the sauce and a splash of the pasta water.','پاستا را با سس و کمی آب پاستا مخلوط کنید.'],
  [0,'Serve with cheese.','با پنیر سرو کنید.']],
 m:''});

R({id:'roast-chicken',c:'main',min:90,sv:4,n:[620,48,34,32],app:'oven',
 t:['Roast chicken & potatoes','مرغ و سیب‌زمینی تنوری'],d:['Lemon and garlic roast chicken with potatoes.','مرغ و سیب‌زمینی تنوری با لیمو و سیر'],
 i:'chicken:1.5:kg;potato:4;lemon:1;garlic:6:clove;butter:2:tbsp:o;saffron::pinch:o;salt::taste:s;black pepper::taste:s;oil:3:tbsp:s',
 s:[[90,'Heat the oven to 200°C (400°F). Rub the chicken with butter, garlic, lemon, salt and pepper.','فر را روی ۲۰۰ درجه گرم کنید. مرغ را با کره، سیر، لیمو، نمک و فلفل ماساژ دهید.'],
  [80,'Toss the potato wedges with oil and salt and arrange them around the chicken in a roasting tray.','سیب‌زمینی‌های قاچ‌شده را با روغن و نمک اطراف مرغ در سینی فر بچینید.'],
  [75,'Roast about 70 minutes, basting once, until the juices run clear.','حدود ۷۰ دقیقه بپزید و یک بار روی آن را با آب خودش چرب کنید تا آب مرغ شفاف شود.'],
  [5,'Rest the chicken 5 minutes before carving.','۵ دقیقه صبر کنید و سپس تکه کنید.'],
  [0,'Serve with the potatoes and a salad.','با سیب‌زمینی و سالاد سرو کنید.']],
 m:'salad-shirazi'});

R({id:'pancakes',c:'breakfast',min:25,sv:4,n:[330,9,48,11],app:'stove',
 t:['Pancakes','پنکیک'],d:['Fluffy pancakes in 25 minutes.','پنکیک پفکی در ۲۵ دقیقه'],
 i:'flour:1.5:cup;milk:1.25:cup;eggs:1;baking powder:2:tsp;butter:2:tbsp;honey|jam:::o;sugar:2:tbsp:s;salt::pinch:s',
 s:[[25,'Whisk the flour, baking powder, sugar and salt.','آرد، بکینگ‌پودر، شکر و نمک را مخلوط کنید.'],
  [20,'Whisk in the milk, egg and melted butter until just combined.','شیر، تخم‌مرغ و کره آب‌شده را اضافه کنید و فقط تا یکدست شدن هم بزنید.'],
  [15,'Cook ladlefuls in a lightly oiled pan until bubbles form, flip and cook 1 minute more.','ملاقه‌ملاقه در تابه کمی چرب بریزید تا حباب بزند، برگردانید و یک دقیقه دیگر بپزید.'],
  [0,'Serve with honey or jam.','با عسل یا مربا سرو کنید.']],
 m:''});
