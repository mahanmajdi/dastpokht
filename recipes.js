/* Dastpokht recipe library — Persian home cooking plus a few everyday dishes.
   Each recipe: id, category (x:1 = everyday non-Persian dish), total minutes, servings, n = [kcal, protein, carbs, fat] per serving,
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

R({id:'shakshuka',c:'breakfast',min:25,sv:2,n:[320,17,18,20],app:'stove',x:1,
 t:['Shakshuka','شکشوکا'],d:['Eggs poached in a spiced tomato and pepper sauce.','تخم‌مرغ در سس گوجه و فلفل'],
 i:'eggs:4;tomato:4;onion:1;bell pepper:1;garlic:2:clove;cumin:1:tsp:o;chili flakes::pinch:o;cheese:50:g:o;bread:2::o;salt::taste:s;oil:2:tbsp:s;black pepper::taste:s',
 s:[[25,'Soften the onion, pepper and garlic in oil for 8 minutes.','پیاز، فلفل دلمه و سیر را ۸ دقیقه در روغن تفت دهید.'],
  [17,'Add the cumin, chili, chopped tomatoes and salt, and simmer until thick, about 8 minutes.','زیره، فلفل، گوجه خردشده و نمک را اضافه کنید و بپزید تا غلیظ شود؛ حدود ۸ دقیقه.'],
  [8,'Make little wells, crack in the eggs, cover and cook 5–6 minutes.','چند گودی ایجاد کنید، تخم‌مرغ‌ها را بشکنید و با درِ بسته ۵ تا ۶ دقیقه بپزید.'],
  [0,'Crumble cheese on top and serve with bread.','پنیر را رویش خرد کنید و با نان سرو کنید.']],
 m:''});

R({id:'egg-fried-rice',c:'rice',min:20,sv:2,n:[450,14,62,15],app:'stove',x:1,
 t:['Egg fried rice','برنج سرخ‌شده با تخم‌مرغ'],d:['Leftover rice turned into dinner in 20 minutes.','برنج مانده، شام بیست‌دقیقه‌ای'],
 i:'rice:2:cup;eggs:2;soy sauce:2:tbsp:o;peas:0.5:cup:o;carrot:1::o;green onion:2::o;garlic:2:clove:o;oil:2:tbsp:s;salt::taste:s',
 s:[[20,'Use cold cooked rice — yesterday’s is perfect. Dice the carrot and slice the green onions.','از برنج پخته سرد استفاده کنید (برنج دیروز عالی است). هویج را نگینی و پیازچه را خرد کنید.'],
  [12,'Scramble the eggs in a very hot pan and set them aside.','تخم‌مرغ‌ها را در تابه داغ هم بزنید و کنار بگذارید.'],
  [10,'Stir-fry the garlic, carrot and peas for 3 minutes, then add the rice and toss until hot.','سیر، هویج و نخودفرنگی را ۳ دقیقه تفت دهید، برنج را اضافه کنید و هم بزنید تا داغ شود.'],
  [3,'Add the soy sauce, the eggs and the green onions.','سس سویا، تخم‌مرغ و پیازچه را اضافه کنید.'],
  [0,'Serve hot.','داغ سرو کنید.']],
 m:''});

R({id:'chicken-curry',c:'main',min:45,sv:4,n:[380,36,12,20],app:'stove',x:1,
 t:['Chicken curry','کاری مرغ'],d:['Simple chicken curry finished with yogurt.','کاری مرغ ساده با ماست'],
 i:'chicken:600:g;onion:1;garlic:3:clove;tomato:2;curry powder:2:tbsp;yogurt|cream:0.5:cup;oil:3:tbsp:s;salt::taste:s',
 s:[[45,'Fry the onion until golden, then add the garlic and curry powder for a minute.','پیاز را طلایی کنید، سیر و پودر کاری را یک دقیقه تفت دهید.'],
  [35,'Add the chicken pieces and brown them, then the chopped tomatoes.','تکه‌های مرغ را اضافه و سرخ کنید، سپس گوجه خردشده را بریزید.'],
  [25,'Add ½ cup of water, cover and simmer 20 minutes.','نصف پیمانه آب اضافه کنید و با درِ بسته ۲۰ دقیقه بپزید.'],
  [5,'Stir in the yogurt or cream off the heat, and season.','ماست یا خامه را بیرون از حرارت اضافه کنید و نمک بزنید.'],
  [0,'Serve with rice.','با برنج سرو کنید.']],
 m:'kateh'});

R({id:'pasta-pomodoro',c:'main',min:25,sv:4,n:[480,15,86,9],app:'stove',x:1,
 t:['Pasta pomodoro','پاستا با سس گوجه'],d:['Pasta in a fresh tomato and garlic sauce.','پاستا با سس گوجه‌فرنگی و سیر'],
 i:'pasta:400:g;tomato:6;garlic:3:clove;cheese:50:g:o;herbs:::o;oil:3:tbsp:s;salt::taste:s;black pepper::taste:s',
 s:[[25,'Put a big pot of salted water on to boil.','قابلمه بزرگ آب‌نمک را روی گاز بگذارید تا بجوشد.'],
  [20,'Cook the garlic gently in oil, add the chopped tomatoes and salt, and simmer 15 minutes.','سیر را آرام در روغن تفت دهید، گوجه خردشده و نمک را اضافه کنید و ۱۵ دقیقه بپزید.'],
  [12,'Boil the pasta until al dente and save a cup of the cooking water.','پاستا را بجوشانید تا کمی سفت بماند؛ یک پیمانه از آبش را نگه دارید.'],
  [2,'Toss the pasta with the sauce and a splash of the pasta water.','پاستا را با سس و کمی آب پاستا مخلوط کنید.'],
  [0,'Serve with cheese.','با پنیر سرو کنید.']],
 m:''});

R({id:'roast-chicken',c:'main',min:90,sv:4,n:[620,48,34,32],app:'oven',x:1,
 t:['Roast chicken & potatoes','مرغ و سیب‌زمینی تنوری'],d:['Lemon and garlic roast chicken with potatoes.','مرغ و سیب‌زمینی تنوری با لیمو و سیر'],
 i:'chicken:1.5:kg;potato:4;lemon:1;garlic:6:clove;butter:2:tbsp:o;saffron::pinch:o;salt::taste:s;black pepper::taste:s;oil:3:tbsp:s',
 s:[[90,'Heat the oven to 200°C (400°F). Rub the chicken with butter, garlic, lemon, salt and pepper.','فر را روی ۲۰۰ درجه گرم کنید. مرغ را با کره، سیر، لیمو، نمک و فلفل ماساژ دهید.'],
  [80,'Toss the potato wedges with oil and salt and arrange them around the chicken in a roasting tray.','سیب‌زمینی‌های قاچ‌شده را با روغن و نمک اطراف مرغ در سینی فر بچینید.'],
  [75,'Roast about 70 minutes, basting once, until the juices run clear.','حدود ۷۰ دقیقه بپزید و یک بار روی آن را با آب خودش چرب کنید تا آب مرغ شفاف شود.'],
  [5,'Rest the chicken 5 minutes before carving.','۵ دقیقه صبر کنید و سپس تکه کنید.'],
  [0,'Serve with the potatoes and a salad.','با سیب‌زمینی و سالاد سرو کنید.']],
 m:'salad-shirazi'});

R({id:'pancakes',c:'breakfast',min:25,sv:4,n:[330,9,48,11],app:'stove',x:1,
 t:['Pancakes','پنکیک'],d:['Fluffy pancakes in 25 minutes.','پنکیک پفکی در ۲۵ دقیقه'],
 i:'flour:1.5:cup;milk:1.25:cup;eggs:1;baking powder:2:tsp;butter:2:tbsp;honey|jam:::o;sugar:2:tbsp:s;salt::pinch:s',
 s:[[25,'Whisk the flour, baking powder, sugar and salt.','آرد، بکینگ‌پودر، شکر و نمک را مخلوط کنید.'],
  [20,'Whisk in the milk, egg and melted butter until just combined.','شیر، تخم‌مرغ و کره آب‌شده را اضافه کنید و فقط تا یکدست شدن هم بزنید.'],
  [15,'Cook ladlefuls in a lightly oiled pan until bubbles form, flip and cook 1 minute more.','ملاقه‌ملاقه در تابه کمی چرب بریزید تا حباب بزند، برگردانید و یک دقیقه دیگر بپزید.'],
  [0,'Serve with honey or jam.','با عسل یا مربا سرو کنید.']],
 m:''});

/* ---------- quick dishes from one or two things (so even "I have an egg" gets real ideas) ---------- */
R({id:'boiled-eggs',c:'breakfast',min:15,sv:2,n:[145,13,1,10],app:'stove',x:1,
 t:['Boiled eggs','تخم‌مرغ آب‌پز'],d:['Soft, jammy or hard — timings that always work.','عسلی، نیم‌بند یا سفت؛ با زمان‌بندی دقیق'],
 i:'eggs:4;bread:2::o;salt::taste:s;black pepper::taste:s',
 s:[[15,'Bring a small pot of water to a gentle boil and lower the eggs in with a spoon.','آب را در قابلمه‌ی کوچکی به جوش ملایم برسانید و تخم‌مرغ‌ها را با قاشق آرام داخل آب بگذارید.'],
  [12,'Boil 6 minutes for soft and runny, 8 for jammy, 10–11 for hard.','برای عسلی ۶ دقیقه، برای نیم‌بند ۸ دقیقه و برای سفت ۱۰ تا ۱۱ دقیقه بجوشانید.'],
  [3,'Move them straight into cold water for 2 minutes so they peel easily.','بلافاصله ۲ دقیقه در آب سرد بگذارید تا راحت پوست کنده شوند.'],
  [0,'Peel, sprinkle with salt and pepper and serve with bread.','پوست بگیرید، نمک و فلفل بزنید و با نان سرو کنید.']],
 m:'chai'});

R({id:'scrambled-eggs',c:'breakfast',min:8,sv:2,n:[210,14,2,16],app:'stove',x:1,
 t:['Soft scrambled eggs','تخم‌مرغ هم‌زده'],d:['Creamy eggs cooked low and slow — 8 minutes.','تخم‌مرغ نرم و کرمی روی حرارت ملایم؛ هشت‌دقیقه‌ای'],
 i:'eggs:4;butter:1:tbsp:o;milk:2:tbsp:o;chives:1:tbsp:o;oil:1:tbsp:s;salt::taste:s;black pepper::taste:s',
 s:[[8,'Beat the eggs with a pinch of salt (and a splash of milk).','تخم‌مرغ‌ها را با کمی نمک (و کمی شیر) هم بزنید.'],
  [6,'Melt butter or oil in a pan over low heat, pour in the eggs and stir slowly with a spatula.','کره یا روغن را در تابه روی حرارت ملایم آب کنید، تخم‌مرغ را بریزید و با کفگیر آرام هم بزنید.'],
  [2,'Take the pan off the heat while they still look a little wet — they finish cooking on their own.','وقتی هنوز کمی خیس به نظر می‌رسد تابه را از روی حرارت بردارید؛ خودش جا می‌افتد.'],
  [0,'Season with pepper and chives and serve on toast.','فلفل و تره بزنید و روی نان تست سرو کنید.']],
 m:'chai'});

R({id:'folded-omelette',c:'breakfast',min:10,sv:1,n:[300,19,2,24],app:'stove',x:1,
 t:['Folded omelette','املت ساده‌ی تاشده'],d:['A plain omelette — add cheese or herbs if you have them.','املت ساده؛ اگر پنیر یا سبزی دارید اضافه کنید'],
 i:'eggs:3;butter:1:tbsp:o;cheese:30:g:o;herbs:2:tbsp:o;oil:1:tsp:s;salt::taste:s;black pepper::taste:s',
 s:[[10,'Beat the eggs well with a pinch of salt and pepper.','تخم‌مرغ‌ها را با کمی نمک و فلفل خوب هم بزنید.'],
  [7,'Heat butter or oil in a non-stick pan over medium heat and pour in the eggs.','کره یا روغن را در تابه‌ی نچسب روی حرارت متوسط داغ کنید و تخم‌مرغ را بریزید.'],
  [5,'As it sets, pull the edges to the middle and tilt the pan so raw egg runs underneath.','هرچه لبه‌ها می‌بندد آن‌ها را به وسط بکشید و تابه را کج کنید تا تخم‌مرغ خام زیرش برود.'],
  [2,'While the top is still a little soft, add cheese or herbs to one half and fold it over.','وقتی رویش هنوز کمی نرم است، پنیر یا سبزی را روی یک نیمه بریزید و املت را تا کنید.'],
  [0,'Slide onto a plate and serve.','در بشقاب بکشید و سرو کنید.']],
 m:'chai'});

R({id:'poached-eggs',c:'breakfast',min:10,sv:1,n:[150,13,1,10],app:'stove',x:1,
 t:['Poached eggs on toast','تخم‌مرغ پوشه روی نان تست'],d:['Silky eggs cooked in barely simmering water.','تخم‌مرغ لطیف که در آب با جوش ملایم می‌پزد'],
 i:'eggs:2;bread:2::o;vinegar:1:tbsp:o;butter:1:tbsp:o;salt::taste:s;black pepper::taste:s',
 s:[[10,'Bring a deep pan of water to a bare simmer and add the vinegar.','آب را در تابه‌ی گود یا قابلمه به جوش خیلی ملایم برسانید و سرکه را اضافه کنید.'],
  [7,'Crack each egg into a cup, stir the water into a gentle swirl and slide the egg into the middle.','هر تخم‌مرغ را در فنجانی بشکنید، آب را آرام بچرخانید و تخم‌مرغ را وسط گرداب بریزید.'],
  [4,'Cook 3 minutes, until the white is set but the yolk is soft. Toast and butter the bread meanwhile.','۳ دقیقه بپزید تا سفیده ببندد ولی زرده نرم بماند. در این فاصله نان را تست کنید و کره بمالید.'],
  [0,'Lift out with a slotted spoon, drain, season and serve on the toast.','با کفگیر سوراخ‌دار بیرون بیاورید، آبش را بگیرید، نمک و فلفل بزنید و روی نان تست سرو کنید.']],
 m:'chai'});

R({id:'tamagoyaki',c:'breakfast',min:15,sv:2,n:[190,13,4,13],app:'stove',x:1,
 t:['Tamagoyaki (rolled omelette)','تاماگویاکی (املت لوله‌ای)'],d:['Sweet-savory Japanese omelette rolled in thin layers.','املت شیرین و شور ژاپنی که لایه‌لایه لوله می‌شود'],
 i:'eggs:4;soy sauce:1:tsp:o;sugar:2:tsp:s;salt::pinch:s;oil:1:tbsp:s',
 s:[[15,'Beat the eggs with the sugar, a pinch of salt and the soy sauce.','تخم‌مرغ‌ها را با شکر، کمی نمک و سس سویا هم بزنید.'],
  [12,'Oil a small pan over medium-low heat and pour in a thin layer of egg.','تابه‌ی کوچکی را روی حرارت ملایم چرب کنید و لایه‌ی نازکی از تخم‌مرغ بریزید.'],
  [10,'When it’s almost set, roll it to one side. Oil the pan, pour in another thin layer, lift the roll so egg runs under it, and roll again.','وقتی تقریباً بست، آن را به یک طرف لوله کنید. تابه را دوباره چرب کنید، لایه‌ی نازک دیگری بریزید، لوله را کمی بلند کنید تا تخم‌مرغ زیرش برود و دوباره لوله کنید.'],
  [3,'Repeat until the egg is used up, then let it rest 2 minutes.','تا تمام شدن تخم‌مرغ تکرار کنید و بعد ۲ دقیقه بگذارید بماند.'],
  [0,'Slice into thick pieces and serve warm or cold.','برش‌های پهن بزنید و گرم یا سرد سرو کنید.']],
 m:''});

R({id:'steamed-egg',c:'side',min:20,sv:2,n:[120,10,1,8],app:'stove|microwave',x:1,
 t:['Steamed egg custard','تخم‌مرغ بخارپز'],d:['Silky, savory egg — just eggs, water and salt.','تخم‌مرغ لطیف و شور؛ فقط با تخم‌مرغ، آب و نمک'],
 i:'eggs:3;green onion:1::o;soy sauce:1:tsp:o;salt::taste:s',
 s:[[20,'Beat the eggs with 1½ times their volume of warm water and ½ tsp salt. Strain for the smoothest result.','تخم‌مرغ‌ها را با یک‌ونیم برابر حجمشان آب ولرم و نصف قاشق چای‌خوری نمک هم بزنید. برای لطافت بیشتر صافش کنید.'],
  [17,'Pour into a heatproof bowl and cover with a plate.','در کاسه‌ی نسوز بریزید و رویش را با بشقاب بپوشانید.'],
  [15,'Steam over gently simmering water for 12–15 minutes (or microwave at medium power, a minute at a time) until just set.','روی آبِ در حال جوش ملایم ۱۲ تا ۱۵ دقیقه بخارپز کنید (یا در مایکروویو با قدرت متوسط، دقیقه‌به‌دقیقه) تا تازه ببندد.'],
  [0,'Top with sliced green onion and a few drops of soy sauce.','پیازچه‌ی خردشده و چند قطره سس سویا رویش بریزید.']],
 m:''});

R({id:'meringues',c:'dessert',min:100,sv:6,n:[70,1,17,0],app:'oven',x:1,
 t:['Meringue kisses','مرنگ'],d:['Crisp little meringues from egg whites and sugar.','شیرینی ترد و پفکی با سفیده‌ی تخم‌مرغ و شکر'],
 i:'eggs:2;vanilla:::o;sugar:0.5:cup:s',
 s:[[100,'Heat the oven to 100 °C. Separate the eggs — keep the yolks for scrambled eggs.','فر را روی ۱۰۰ درجه روشن کنید. سفیده و زرده را جدا کنید (زرده‌ها را برای تخم‌مرغ هم‌زده نگه دارید).'],
  [95,'Whisk the whites until foamy, then add the sugar a spoonful at a time and keep whisking until stiff and glossy.','سفیده‌ها را هم بزنید تا کف کند، بعد شکر را قاشق‌قاشق اضافه کنید و آن‌قدر هم بزنید تا سفت و براق شود.'],
  [85,'Spoon or pipe small mounds onto a lined tray.','با قاشق یا قیف، کپه‌های کوچک روی سینی کاغذکشیده بریزید.'],
  [80,'Bake about 70 minutes, until they lift off the paper easily. Let them cool in the oven.','حدود ۷۰ دقیقه بپزید تا راحت از کاغذ جدا شوند و بگذارید در همان فر خنک شوند.'],
  [0,'Serve, or keep them in an airtight jar.','سرو کنید یا در ظرف دربسته نگه دارید.']],
 m:'chai'});

R({id:'khagineh',c:'breakfast',min:20,sv:2,n:[420,14,50,20],app:'stove',
 t:['Khagineh','خاگینه'],d:['Sweet Persian egg cake soaked in saffron and rose water syrup.','خاگینه‌ی شیرین با شربت زعفران و گلاب'],
 i:'eggs:4;flour:2:tbsp;rose water:1:tbsp:o;saffron:0.25:tsp:o;cardamom:::o;sugar:0.33:cup:s;oil:3:tbsp:s',
 s:[[20,'Make the syrup: simmer the sugar with ⅓ cup water for 3 minutes, then add the saffron and rose water.','شربت را آماده کنید: شکر را با ⅓ پیمانه آب ۳ دقیقه بجوشانید، بعد زعفران و گلاب را اضافه کنید.'],
  [15,'Beat the eggs with the flour until smooth.','تخم‌مرغ‌ها را با آرد هم بزنید تا یکدست شود.'],
  [12,'Heat the oil in a pan, pour in the egg, cover and cook over low heat until the bottom is golden. Flip and brown the other side.','روغن را در تابه داغ کنید، مخلوط تخم‌مرغ را بریزید، درش را بگذارید و روی حرارت ملایم بپزید تا زیرش طلایی شود؛ برگردانید تا طرف دیگرش هم سرخ شود.'],
  [3,'Cut into wedges, pour the syrup over and let it soak in for a minute.','برش بزنید، شربت را رویش بریزید و یک دقیقه بگذارید به خورد خاگینه برود.'],
  [0,'Serve warm with tea.','گرم با چای سرو کنید.']],
 m:'chai'});

R({id:'eshkeneh',c:'soup',min:35,sv:4,n:[220,7,20,13],app:'stove',
 t:['Eshkeneh','اشکنه'],d:['Humble onion and egg soup with dried mint.','سوپ ساده‌ی پیاز و تخم‌مرغ با نعناع خشک'],
 i:'onion:2;eggs:3;flour:1:tbsp;dried mint:1:tbsp:o;fenugreek:1:tbsp:o;potato:1::o;bread:2::o;turmeric:1:tsp:s;oil:3:tbsp:s;salt::taste:s;black pepper::taste:s',
 s:[[35,'Slice the onions thinly and fry in the oil until golden. Stir in the turmeric, flour and dried mint (and fenugreek) for a minute.','پیازها را نازک خلالی کنید و در روغن طلایی کنید. زردچوبه، آرد و نعناع خشک (و شنبلیله) را اضافه کنید و یک دقیقه تفت دهید.'],
  [28,'Add 4 cups of hot water (and the diced potato), salt and pepper. Simmer 20 minutes.','۴ پیمانه آب داغ (و سیب‌زمینی نگینی)، نمک و فلفل را اضافه کنید و ۲۰ دقیقه بگذارید بجوشد.'],
  [6,'Crack in the eggs one by one without stirring — or beat them first for threads of egg. Cook 5 minutes.','تخم‌مرغ‌ها را یکی‌یکی داخل سوپ بشکنید و هم نزنید؛ یا اول هم بزنید تا رشته‌رشته شود. ۵ دقیقه بپزید.'],
  [0,'Serve hot with bread torn into the bowl.','داغ با نان تریدشده سرو کنید.']],
 m:'sabzi-khordan'});

R({id:'nargesi',c:'main',min:25,sv:3,n:[210,12,9,15],app:'stove',
 t:['Nargesi (spinach and eggs)','نرگسی اسفناج'],d:['Spinach and onion with eggs set on top — quick and filling.','اسفناج و پیاز با تخم‌مرغ روی آن؛ سریع و سیرکننده'],
 i:'spinach:500:g;eggs:4;onion:1;garlic:2:clove:o;turmeric:1:tsp:s;oil:3:tbsp:s;salt::taste:s;black pepper::taste:s',
 s:[[25,'Fry the chopped onion (and garlic) in the oil until golden, then stir in the turmeric.','پیاز (و سیر) خردشده را در روغن طلایی کنید و زردچوبه را اضافه کنید.'],
  [18,'Add the chopped spinach, salt and pepper and cook until wilted and the water is gone.','اسفناج خردشده، نمک و فلفل را اضافه کنید و بپزید تا بخوابد و آبش کشیده شود.'],
  [8,'Make small hollows and crack an egg into each. Cover and cook 5–6 minutes.','چند گودی کوچک درست کنید و در هر کدام یک تخم‌مرغ بشکنید. درش را بگذارید و ۵ تا ۶ دقیقه بپزید.'],
  [0,'Serve from the pan with bread.','در همان تابه با نان سرو کنید.']],
 m:'mast-o-khiar'});

R({id:'potato-eggs',c:'breakfast',min:25,sv:2,n:[360,13,33,20],app:'stove',
 t:['Potatoes and eggs','سیب‌زمینی و تخم‌مرغ'],d:['Crispy potato cubes with eggs cooked right in the pan.','سیب‌زمینی نگینی ترد با تخم‌مرغ در همان تابه'],
 i:'potato:2;eggs:3;onion:1::o;pickles:2::o;turmeric:0.5:tsp:s;oil:3:tbsp:s;salt::taste:s;black pepper::taste:s',
 s:[[25,'Peel and dice the potatoes small (and slice the onion).','سیب‌زمینی‌ها را پوست بگیرید و ریز نگینی کنید (و پیاز را خلالی کنید).'],
  [20,'Fry them in the oil over medium heat, stirring now and then, until golden and tender — about 12 minutes.','در روغن روی حرارت متوسط سرخ کنید و گاهی هم بزنید تا طلایی و نرم شود؛ حدود ۱۲ دقیقه.'],
  [7,'Season with salt, pepper and turmeric, crack in the eggs, cover and cook until set.','نمک، فلفل و زردچوبه بزنید، تخم‌مرغ‌ها را رویش بشکنید، درش را بگذارید و بپزید تا ببندد.'],
  [0,'Serve hot with bread and pickles.','داغ با نان و خیارشور سرو کنید.']],
 m:'chai'});

R({id:'spanish-tortilla',c:'main',min:45,sv:4,n:[330,12,27,20],app:'stove',x:1,
 t:['Spanish tortilla','تورتیای اسپانیایی'],d:['Thick potato omelette — good hot or cold.','املت ضخیم سیب‌زمینی؛ هم گرم خوشمزه است هم سرد'],
 i:'potato:4;eggs:6;onion:1::o;oil:0.5:cup:s;salt::taste:s',
 s:[[45,'Slice the potatoes (and onion) thinly and cook them gently in the oil for 15–20 minutes, until soft but not brown.','سیب‌زمینی‌ها (و پیاز) را نازک حلقه کنید و در روغن روی حرارت ملایم ۱۵ تا ۲۰ دقیقه بپزید تا نرم شود ولی رنگ نگیرد.'],
  [25,'Drain off most of the oil. Beat the eggs with salt, mix in the potatoes and let it sit 5 minutes.','بیشتر روغن را خالی کنید. تخم‌مرغ‌ها را با نمک هم بزنید، سیب‌زمینی را اضافه کنید و ۵ دقیقه بگذارید بماند.'],
  [18,'Pour into a hot oiled pan and cook over low heat for about 8 minutes.','در تابه‌ی داغ و چرب بریزید و روی حرارت ملایم حدود ۸ دقیقه بپزید.'],
  [9,'Flip it using a plate and cook the other side for 4–5 minutes.','با کمک یک بشقاب برگردانید و طرف دیگر را ۴ تا ۵ دقیقه بپزید.'],
  [0,'Let it rest a few minutes and cut into wedges.','چند دقیقه بگذارید بماند و برش بزنید.']],
 m:'salad-shirazi'});

R({id:'french-toast',c:'breakfast',min:15,sv:2,n:[340,13,40,14],app:'stove',x:1,
 t:['French toast','نان تست فرانسوی'],d:['Bread soaked in egg and milk, fried golden.','نان خیس‌خورده در تخم‌مرغ و شیر، سرخ و طلایی'],
 i:'bread:4;eggs:2;milk:0.5:cup;cinnamon:0.5:tsp:o;butter:1:tbsp:o;honey|jam:::o;sugar:1:tbsp:s;oil:1:tbsp:s',
 s:[[15,'Whisk the eggs, milk, sugar and cinnamon in a wide dish.','تخم‌مرغ، شیر، شکر و دارچین را در ظرف پهنی هم بزنید.'],
  [12,'Heat butter or oil in a pan over medium heat.','کره یا روغن را در تابه روی حرارت متوسط داغ کنید.'],
  [10,'Dip each slice of bread in the egg for a few seconds on each side and fry 2–3 minutes a side until golden.','هر برش نان را چند ثانیه از هر طرف در مخلوط تخم‌مرغ بخوابانید و هر طرف ۲ تا ۳ دقیقه سرخ کنید تا طلایی شود.'],
  [0,'Serve with honey or jam.','با عسل یا مربا سرو کنید.']],
 m:'chai'});

R({id:'egg-sandwich',c:'breakfast',min:15,sv:2,n:[400,17,31,23],app:'stove',x:1,
 t:['Egg salad sandwich','ساندویچ سالاد تخم‌مرغ'],d:['Chopped boiled eggs and mayo in bread.','تخم‌مرغ آب‌پز خردشده با سس مایونز لای نان'],
 i:'eggs:4;mayonnaise:2:tbsp;bread:4;pickles:2::o;tomato:1::o;lettuce:::o;salt::taste:s;black pepper::taste:s',
 s:[[15,'Hard-boil the eggs for 10 minutes, then cool them in cold water.','تخم‌مرغ‌ها را ۱۰ دقیقه بجوشانید تا سفت شوند و در آب سرد خنک کنید.'],
  [4,'Peel and chop the eggs and mix with the mayonnaise, salt, pepper and chopped pickles.','پوست تخم‌مرغ‌ها را بگیرید، خرد کنید و با سس مایونز، نمک، فلفل و خیارشور خردشده مخلوط کنید.'],
  [0,'Spread on the bread with tomato and lettuce and close the sandwich.','با گوجه و کاهو لای نان بگذارید.']],
 m:''});

R({id:'egg-in-a-hole',c:'breakfast',min:10,sv:2,n:[230,9,15,15],app:'stove',x:1,
 t:['Egg in a hole','تخم‌مرغ در نان'],d:['An egg fried inside a slice of toast.','تخم‌مرغی که وسط برش نان سرخ می‌شود'],
 i:'bread:2;eggs:2;butter:1:tbsp:o;cheese:::o;oil:1:tbsp:s;salt::taste:s;black pepper::taste:s',
 s:[[10,'Cut a round hole in the middle of each slice of bread with the rim of a glass.','با لبه‌ی یک لیوان وسط هر برش نان را گرد ببُرید.'],
  [8,'Butter or oil a pan over medium heat, lay in the bread and crack an egg into each hole.','تابه را روی حرارت متوسط با کره یا روغن چرب کنید، نان‌ها را بگذارید و در سوراخ هر کدام یک تخم‌مرغ بشکنید.'],
  [5,'Cook 2–3 minutes, flip carefully and cook 1 minute more. Toast the cut-out circles alongside.','۲ تا ۳ دقیقه بپزید، با احتیاط برگردانید و یک دقیقه دیگر بپزید. دایره‌های نان را هم کنارش برشته کنید.'],
  [0,'Season and serve right away.','نمک و فلفل بزنید و فوراً سرو کنید.']],
 m:'chai'});

R({id:'deviled-eggs',c:'side',min:25,sv:3,n:[230,13,1,19],app:'stove',x:1,
 t:['Deviled eggs','تخم‌مرغ شکم‌پر'],d:['Boiled egg halves filled with a creamy yolk mix.','نیمه‌های تخم‌مرغ آب‌پز پرشده با مخلوط کرمی زرده'],
 i:'eggs:6;mayonnaise:3:tbsp;vinegar:1:tsp:o;chili flakes:::o;parsley:::o;salt::taste:s;black pepper::taste:s',
 s:[[25,'Hard-boil the eggs for 10 minutes, then cool completely in cold water.','تخم‌مرغ‌ها را ۱۰ دقیقه بجوشانید تا سفت شوند و در آب سرد کاملاً خنک کنید.'],
  [10,'Peel, halve lengthwise and pop the yolks into a bowl.','پوست بگیرید، از طول نصف کنید و زرده‌ها را در کاسه‌ای بریزید.'],
  [6,'Mash the yolks with the mayonnaise, vinegar, salt and pepper until smooth.','زرده‌ها را با سس مایونز، سرکه، نمک و فلفل له کنید تا یکدست شود.'],
  [0,'Spoon back into the whites and top with chili flakes or parsley.','مخلوط را با قاشق داخل سفیده‌ها بریزید و رویش پول‌بیبر یا جعفری بپاشید.']],
 m:''});

R({id:'egg-custard',c:'dessert',min:50,sv:4,n:[190,8,23,7],app:'oven',x:1,
 t:['Baked egg custard','کاسترد تخم‌مرغ'],d:['Smooth sweet custard from eggs, milk and sugar.','دسر لطیف با تخم‌مرغ، شیر و شکر'],
 i:'eggs:3;milk:2:cup;vanilla:::o;cinnamon:::o;sugar:0.33:cup:s',
 s:[[50,'Heat the oven to 160 °C and boil a kettle of water.','فر را روی ۱۶۰ درجه روشن کنید و کتری آب را بگذارید جوش بیاید.'],
  [45,'Warm the milk. Whisk the eggs with the sugar and vanilla, then slowly whisk in the warm milk.','شیر را گرم کنید. تخم‌مرغ‌ها را با شکر و وانیل هم بزنید و شیر گرم را کم‌کم در حال هم زدن اضافه کنید.'],
  [40,'Pour into small cups, set them in a deep tray and add hot water halfway up the cups.','در ظرف‌های کوچک بریزید، در سینی گودی بچینید و تا نیمه‌ی ظرف‌ها آب داغ بریزید.'],
  [35,'Bake about 30 minutes, until set at the edges but still a little wobbly in the middle.','حدود ۳۰ دقیقه بپزید تا لبه‌ها ببندد ولی وسطش هنوز کمی لرزان باشد.'],
  [0,'Dust with cinnamon and serve warm or chilled.','دارچین بپاشید و گرم یا سرد سرو کنید.']],
 m:''});

R({id:'banana-pancakes',c:'breakfast',min:15,sv:1,n:[260,13,28,11],app:'stove',x:1,
 t:['Banana pancakes','پنکیک موز'],d:['Pancakes from just a banana and two eggs.','پنکیک فقط با یک موز و دو تخم‌مرغ'],
 i:'banana:1;eggs:2;oats:2:tbsp:o;cinnamon:::o;honey:::o;oil:1:tsp:s',
 s:[[15,'Mash the banana well and beat in the eggs (and the oats and cinnamon).','موز را خوب له کنید و تخم‌مرغ (و جو دوسر و دارچین) را اضافه کنید و هم بزنید.'],
  [10,'Lightly oil a pan over medium-low heat and pour in small pancakes.','تابه را روی حرارت ملایم کمی چرب کنید و پنکیک‌های کوچک بریزید.'],
  [7,'Cook until the edges set, flip gently and cook 1 minute more.','بپزید تا لبه‌ها ببندد، آرام برگردانید و یک دقیقه دیگر بپزید.'],
  [0,'Serve with a drizzle of honey.','با کمی عسل سرو کنید.']],
 m:''});

R({id:'egg-curry',c:'main',min:35,sv:3,n:[300,14,12,22],app:'stove',x:1,
 t:['Egg curry','کاری تخم‌مرغ'],d:['Boiled eggs in a spiced onion and tomato sauce.','تخم‌مرغ آب‌پز در سس ادویه‌دار پیاز و گوجه'],
 i:'eggs:6;onion:2;tomato:3;garlic:3:clove:o;curry powder:1:tbsp:o;chili:::o;turmeric:1:tsp:s;oil:3:tbsp:s;salt::taste:s',
 s:[[35,'Hard-boil the eggs for 10 minutes, cool, peel and make a few shallow cuts in each.','تخم‌مرغ‌ها را ۱۰ دقیقه بجوشانید، خنک کنید، پوست بگیرید و روی هر کدام چند برش سطحی بزنید.'],
  [30,'Fry the chopped onion in the oil until golden, then add the garlic, turmeric and curry powder for a minute.','پیاز خردشده را در روغن طلایی کنید، بعد سیر، زردچوبه و پودر کاری را اضافه کنید و یک دقیقه تفت دهید.'],
  [22,'Add the chopped tomatoes, salt and ½ cup water and simmer until thick, about 10 minutes.','گوجه‌ی خردشده، نمک و نصف پیمانه آب را اضافه کنید و حدود ۱۰ دقیقه بپزید تا غلیظ شود.'],
  [10,'Add the eggs and simmer 8 minutes, spooning the sauce over them.','تخم‌مرغ‌ها را اضافه کنید و ۸ دقیقه بپزید و سس را رویشان بریزید.'],
  [0,'Serve with rice or bread.','با برنج یا نان سرو کنید.']],
 m:'chelo'});

R({id:'baked-potatoes',c:'side',min:60,sv:4,n:[260,6,42,8],app:'oven|microwave|air fryer',x:1,
 t:['Baked potatoes','سیب‌زمینی تنوری'],d:['Fluffy baked potatoes with butter, cheese or yogurt.','سیب‌زمینی پخته‌ی پفکی با کره، پنیر یا ماست'],
 i:'potato:4;butter:2:tbsp:o;cheese:::o;yogurt:::o;chives:::o;oil:1:tbsp:s;salt::taste:s;black pepper::taste:s',
 s:[[60,'Heat the oven to 200 °C. Scrub the potatoes, prick them with a fork and rub with oil and salt.','فر را روی ۲۰۰ درجه روشن کنید. سیب‌زمینی‌ها را خوب بشویید، با چنگال سوراخ کنید و روغن و نمک بمالید.'],
  [55,'Bake about 50 minutes until soft inside (or microwave 8–10 minutes, turning once).','حدود ۵۰ دقیقه بپزید تا داخلش نرم شود (یا در مایکروویو ۸ تا ۱۰ دقیقه و یک بار برگردانید).'],
  [0,'Split open, fluff with a fork and top with butter, cheese, yogurt or chives.','از وسط باز کنید، با چنگال پفکی کنید و کره، پنیر، ماست یا تره رویش بریزید.']],
 m:''});

R({id:'mashed-potatoes',c:'side',min:30,sv:4,n:[240,5,38,8],app:'stove',x:1,
 t:['Mashed potatoes','پوره‌ی سیب‌زمینی'],d:['Smooth, buttery mash in 30 minutes.','پوره‌ی نرم و کره‌ای در ۳۰ دقیقه'],
 i:'potato:5;butter:3:tbsp;milk:0.5:cup;salt::taste:s;black pepper::taste:s',
 s:[[30,'Peel and quarter the potatoes and boil in salted water for about 20 minutes, until very soft.','سیب‌زمینی‌ها را پوست بگیرید، چهار تکه کنید و در آب نمک حدود ۲۰ دقیقه بپزید تا کاملاً نرم شود.'],
  [8,'Drain well and let them steam dry for a minute. Warm the milk with the butter.','خوب آبکش کنید و یک دقیقه بگذارید بخارشان برود. شیر را با کره گرم کنید.'],
  [4,'Mash the potatoes, then beat in the warm milk and butter and season.','سیب‌زمینی‌ها را له کنید، شیر و کره‌ی گرم را اضافه کنید، هم بزنید و نمک و فلفل بزنید.'],
  [0,'Serve hot.','داغ سرو کنید.']],
 m:''});

R({id:'fried-potatoes',c:'side',min:30,sv:3,n:[290,4,38,14],app:'stove|air fryer|oven',
 t:['Fried potatoes','سیب‌زمینی سرخ‌کرده'],d:['Golden, crisp potato wedges or fries.','سیب‌زمینی سرخ‌کرده‌ی طلایی و ترد'],
 i:'potato:4;ketchup:::o;oil:0.5:cup:s;salt::taste:s',
 s:[[30,'Cut the potatoes into sticks or wedges, rinse and dry them well.','سیب‌زمینی‌ها را خلالی یا قاچی کنید، بشویید و کاملاً خشک کنید.'],
  [22,'Fry in hot oil in batches until golden and crisp (or toss with a little oil and air-fry at 200 °C for 18–20 minutes).','دسته‌دسته در روغن داغ سرخ کنید تا طلایی و ترد شود (یا با کمی روغن در هواپز با ۲۰۰ درجه ۱۸ تا ۲۰ دقیقه بپزید).'],
  [0,'Drain on paper, salt right away and serve.','روی دستمال کاغذی بگذارید تا روغنش گرفته شود، فوراً نمک بزنید و سرو کنید.']],
 m:''});

R({id:'grilled-cheese',c:'breakfast',min:10,sv:1,n:[440,18,31,28],app:'stove',x:1,
 t:['Grilled cheese sandwich','ساندویچ پنیر داغ'],d:['Crisp buttery bread with melted cheese.','نان ترد و کره‌ای با پنیر آب‌شده'],
 i:'bread:2;cheese:60:g;butter:1:tbsp:o;tomato:1::o;oil:1:tsp:s',
 s:[[10,'Butter the outside of the bread (or brush with oil) and put the cheese (and tomato) between the slices.','بیرون برش‌های نان را کره (یا روغن) بمالید و پنیر (و گوجه) را بینشان بگذارید.'],
  [7,'Cook in a pan over medium-low heat, about 3 minutes a side, pressing gently, until golden and the cheese melts.','در تابه روی حرارت ملایم هر طرف حدود ۳ دقیقه بپزید و کمی فشار دهید تا طلایی شود و پنیر آب شود.'],
  [0,'Cut in half and serve hot.','از وسط نصف کنید و داغ سرو کنید.']],
 m:''});

R({id:'tomato-soup',c:'soup',min:35,sv:4,n:[130,3,14,7],app:'stove',x:1,
 t:['Tomato soup','سوپ گوجه‌فرنگی'],d:['Simple tomato soup with onion and garlic.','سوپ ساده‌ی گوجه‌فرنگی با پیاز و سیر'],
 i:'tomato:8;onion:1;garlic:2:clove:o;butter:2:tbsp:o;cream:0.25:cup:o;basil:::o;sugar:1:tsp:s;oil:1:tbsp:s;salt::taste:s;black pepper::taste:s',
 s:[[35,'Chop the onion, garlic and tomatoes.','پیاز، سیر و گوجه‌ها را خرد کنید.'],
  [30,'Soften the onion and garlic in butter or oil for 5 minutes.','پیاز و سیر را ۵ دقیقه در کره یا روغن تفت دهید تا نرم شود.'],
  [25,'Add the tomatoes, 2 cups water, sugar, salt and pepper and simmer 20 minutes.','گوجه‌ها، ۲ پیمانه آب، شکر، نمک و فلفل را اضافه کنید و ۲۰ دقیقه بپزید.'],
  [4,'Blend until smooth (or mash well) and stir in the cream.','با گوشت‌کوب برقی یا مخلوط‌کن صاف کنید (یا خوب له کنید) و خامه را اضافه کنید.'],
  [0,'Serve hot with bread.','داغ با نان سرو کنید.']],
 m:'grilled-cheese'});

R({id:'garlic-bread',c:'side',min:15,sv:4,n:[210,5,26,10],app:'oven|air fryer|stove',x:1,
 t:['Garlic bread','نان سیر'],d:['Toasty bread with garlic butter.','نان برشته با کره‌ی سیر'],
 i:'bread:6;butter:4:tbsp;garlic:3:clove;parsley:::o;cheese:::o;salt::pinch:s',
 s:[[15,'Heat the oven to 200 °C. Mix soft butter with crushed garlic, a pinch of salt and chopped parsley.','فر را روی ۲۰۰ درجه روشن کنید. کره‌ی نرم را با سیر له‌شده، کمی نمک و جعفری خردشده مخلوط کنید.'],
  [10,'Spread it on the bread (and add cheese if you like).','روی نان‌ها بمالید (و اگر دوست دارید پنیر هم بریزید).'],
  [8,'Bake 7–8 minutes until golden, or toast in a pan, butter side down.','۷ تا ۸ دقیقه بپزید تا طلایی شود، یا در تابه با سمت کره‌ای رو به پایین برشته کنید.'],
  [0,'Serve warm.','گرم سرو کنید.']],
 m:'tomato-soup'});

R({id:'aglio-olio',c:'main',min:20,sv:2,n:[560,13,72,24],app:'stove',x:1,
 t:['Spaghetti aglio e olio','اسپاگتی با سیر و روغن'],d:['Pasta tossed with garlic, oil and chili — 20 minutes.','پاستا با سیر، روغن و فلفل؛ بیست‌دقیقه‌ای'],
 i:'pasta:200:g;garlic:4:clove;chili flakes:0.5:tsp:o;parsley:::o;cheese:::o;oil:4:tbsp:s;salt::taste:s',
 s:[[20,'Boil the pasta in well-salted water until just tender. Keep a cup of the cooking water.','پاستا را در آب نمک بپزید تا تازه نرم شود. یک لیوان از آب پاستا را نگه دارید.'],
  [8,'Meanwhile, warm the oil with the thinly sliced garlic over low heat until pale golden, then add the chili flakes.','در این فاصله روغن را با سیر نازک‌برش‌خورده روی حرارت ملایم گرم کنید تا سیر کمی طلایی شود و پول‌بیبر را اضافه کنید.'],
  [3,'Toss in the drained pasta with a splash of the cooking water until glossy.','پاستای آبکش‌شده و کمی از آب پاستا را اضافه کنید و هم بزنید تا براق شود.'],
  [0,'Finish with parsley (and cheese) and serve.','جعفری (و پنیر) رویش بریزید و سرو کنید.']],
 m:''});

R({id:'shir-moz',c:'drink',min:5,sv:2,n:[230,9,40,5],app:'blender',
 t:['Banana milkshake (shir moz)','شیر موز'],d:['Banana blended with cold milk — breakfast in a glass.','موز و شیر سرد؛ صبحانه در یک لیوان'],
 i:'banana:2;milk:2:cup;honey|dates:::o;walnuts:::o;cinnamon:::o',
 s:[[5,'Put the bananas, cold milk and a little honey or a few dates in the blender.','موز، شیر سرد و کمی عسل یا چند خرما را در مخلوط‌کن بریزید.'],
  [2,'Blend until smooth and frothy.','مخلوط کنید تا یکدست و کف‌دار شود.'],
  [0,'Pour into glasses and dust with cinnamon.','در لیوان بریزید و کمی دارچین بپاشید.']],
 m:''});

R({id:'tuna-sandwich',c:'main',min:10,sv:2,n:[380,24,31,17],app:'',x:1,
 t:['Tuna sandwich','ساندویچ تن ماهی'],d:['Tuna, mayo and pickles in bread — no cooking.','تن ماهی، مایونز و خیارشور لای نان؛ بدون پخت'],
 i:'tuna:1;bread:4;mayonnaise:2:tbsp:o;onion:0.5::o;pickles:2::o;tomato:1::o;lemon:::o;black pepper::taste:s',
 s:[[10,'Drain the tuna and mash it with the mayonnaise, finely chopped onion and pickles, a squeeze of lemon and pepper.','روغن تن ماهی را بگیرید و آن را با مایونز، پیاز و خیارشور ریزخردشده، کمی آب‌لیمو و فلفل مخلوط کنید.'],
  [0,'Fill the bread with the tuna and sliced tomato.','مخلوط تن ماهی و گوجه‌ی حلقه‌شده را لای نان بگذارید.']],
 m:''});

/* ---------- how to tell it’s done (almost there, perfect, overcooked) — English, then Persian ---------- */
var DP_DONE={
"ghormeh-sabzi":[["Beans are soft, but the stew is still thin and light green, with no oil on top yet.", "Dark green-brown and thick, a layer of oil shines on top, and the beans and meat fall apart easily.", "The herbs taste bitter or burnt and the bottom has stuck. Add hot water and don’t scrape the bottom."],["لوبیا نرم شده ولی خورش هنوز رقیق و سبز روشن است و روغن نینداخته.", "سبز تیره و غلیظ است، روغن رویش آمده و لوبیا و گوشت راحت له می‌شوند.", "سبزی تلخ یا سوخته مزه می‌دهد و ته گرفته. آب داغ اضافه کنید و ته قابلمه را نتراشید."]],
"gheymeh":[["The split peas hold their shape but are still firm in the middle.", "Split peas soft but whole, the sauce thick and reddish with oil on top.", "Split peas turn to mush and the sauce sticks to the pot; fries go soggy if added too early."],["لپه‌ها شکلشان را دارند ولی وسطشان هنوز سفت است.", "لپه نرم ولی سالم است، سس غلیظ و قرمز است و روغن انداخته.", "لپه له شده و خورش ته گرفته؛ اگر سیب‌زمینی را زود بریزید خمیر می‌شود."]],
"fesenjan":[["The sauce is brown and still grainy and tastes of raw walnut.", "Deep chocolate-brown and glossy, walnut oil pooling on top, smooth and sweet-sour.", "Almost black, pasty and bitter, stuck to the bottom. Loosen it with a little hot water."],["سس قهوه‌ای و هنوز دانه‌دانه است و طعم گردوی خام می‌دهد.", "قهوه‌ای تیره و براق است، روغن گردو رویش آمده و ملس و یکدست است.", "تقریباً سیاه، خمیری و تلخ شده و ته گرفته. با کمی آب داغ رقیقش کنید."]],
"khoresh-bademjan":[["The eggplant is soft but still holds its shape; the sauce is thin.", "The eggplant is silky and melts on the tongue; the sauce is thick and red with oil on top.", "The eggplant has turned to mush and the sauce is burning on the bottom."],["بادمجان نرم شده ولی هنوز شکلش را دارد و سس رقیق است.", "بادمجان لطیف است و در دهان آب می‌شود؛ سس غلیظ و قرمز با روغن روی آن.", "بادمجان کاملاً له شده و سس ته گرفته."]],
"khoresh-karafs":[["The celery is bright green and still crunchy.", "The celery is tender, not stringy; the stew is deep green with oil on top.", "The celery turns grey-brown and falls apart; the herbs taste bitter."],["کرفس سبز روشن و هنوز ترد است.", "کرفس نرم شده ولی له نیست و خورش سبز تیره با روغن روی آن است.", "کرفس خاکستری و قهوه‌ای و له شده و سبزی تلخ است."]],
"abgoosht":[["The chickpeas are soft but the meat still resists a fork.", "The meat falls off the bone, chickpeas and potatoes crush easily, and the broth is rich and golden-red.", "The broth has boiled away and everything is dry and stuck. Top it up with boiling water."],["نخود نرم شده ولی گوشت هنوز جلوی چنگال مقاومت می‌کند.", "گوشت از استخوان جدا می‌شود، نخود و سیب‌زمینی راحت له می‌شوند و آبش جاافتاده و خوش‌رنگ است.", "آبش تمام شده و همه‌چیز خشک و ته‌گرفته است. آب جوش اضافه کنید."]],
"chelo":[["When parboiling, the grains are soft outside with a tiny hard core when you bite one.", "Grains long, separate and fluffy, steam holes on top, and the tahdig crackles when you tap the pot.", "The grains break and go mushy, or the tahdig smells burnt and turns black."],["موقع آبکش کردن، بیرون دانه نرم است ولی وسطش کمی سفت است.", "دانه‌ها قد کشیده، جدا و پفکی‌اند، روی برنج سوراخ‌های بخار هست و ته‌دیگ جزجز می‌کند.", "دانه‌ها شکسته و شفته شده‌اند یا ته‌دیگ بوی سوختگی می‌دهد و سیاه شده."]],
"kateh":[["The water is almost gone and small holes appear on the surface.", "No water left, the rice is soft and slightly sticky, with a golden crust at the bottom.", "The rice is mushy and wet, or the bottom smells burnt."],["آب تقریباً کشیده شده و روی برنج سوراخ‌های کوچک پیدا شده.", "آبی نمانده، برنج نرم و کمی چسبناک است و ته آن طلایی شده.", "برنج شفته و خیس است یا ته آن بوی سوختگی می‌دهد."]],
"zereshk-polo":[["The barberries are plump and bright red.", "Barberries glossy red and sweet-sour, rice fluffy, chicken juices clear.", "The barberries turn dark brown or black and bitter — they burn in seconds."],["زرشک پف کرده و قرمز روشن است.", "زرشک قرمز و براق و ملس است، برنج پفکی و آب مرغ شفاف است.", "زرشک قهوه‌ای یا سیاه و تلخ شده؛ زرشک در چند ثانیه می‌سوزد."]],
"loobia-polo":[["The green beans are bright green and still squeaky.", "Beans tender, rice red, fluffy and separate, tahdig golden.", "The rice goes mushy and the tomato mix burns on the bottom."],["لوبیا سبز روشن و هنوز کمی سفت است.", "لوبیا نرم است، برنج قرمز، پفکی و دانه‌دانه است و ته‌دیگ طلایی.", "برنج شفته شده و مایه‌ی گوجه ته گرفته."]],
"adas-polo":[["The lentils are cooked but still a little firm.", "Lentils soft but whole, rice fluffy, raisins plump and dates soft.", "The lentils burst and the rice goes mushy; raisins burn fast in hot oil."],["عدس پخته ولی هنوز کمی سفت است.", "عدس نرم ولی سالم است، برنج پفکی، کشمش پف‌کرده و خرما نرم است.", "عدس ترکیده و برنج شفته شده؛ کشمش در روغن داغ زود می‌سوزد."]],
"baghali-polo":[["The lamb shank still resists a fork.", "The meat slides off the bone and the dill rice is fluffy.", "The shank is dry and stringy and the rice mushy."],["ماهیچه هنوز جلوی چنگال مقاومت می‌کند.", "گوشت از استخوان جدا می‌شود و برنج شوید باقالی پفکی است.", "ماهیچه خشک و ریش‌ریش شده و برنج شفته است."]],
"sabzi-polo":[["The rice is bright green and a little firm.", "Rice fluffy, herbs fragrant; the fish flakes easily and is opaque inside.", "Herbs dark and rice mushy; the fish is dry and crumbles."],["برنج سبز روشن و کمی سفت است.", "برنج پفکی و سبزی معطر است؛ ماهی راحت ورقه می‌شود و داخلش مات است.", "سبزی تیره و برنج شفته شده؛ ماهی خشک و خرد شده."]],
"tahchin":[["The edges pull away from the dish and look pale gold.", "A deep golden crust all round; it slides out in one piece when turned over.", "The crust is dark brown or black and bitter, and the inside is dry."],["لبه‌ها از ظرف جدا شده و طلایی کم‌رنگ است.", "دورتادور طلایی پررنگ است و موقع برگرداندن یکپارچه بیرون می‌آید.", "ته آن قهوه‌ای تیره یا سیاه و تلخ است و داخل خشک شده."]],
"estamboli":[["The water is almost gone but the rice is still a little firm.", "Rice red, soft and separate, potatoes tender, the bottom lightly crisp.", "The rice is mushy, or burnt on the bottom."],["آب تقریباً کشیده شده ولی برنج هنوز کمی سفت است.", "برنج قرمز، نرم و دانه‌دانه است، سیب‌زمینی نرم و ته کمی برشته.", "برنج شفته شده یا ته سوخته است."]],
"joojeh-kabab":[["Golden at the edges but still pink in the middle when you cut a piece.", "Charred spots, juicy, white all the way through with clear juices.", "Dry, hard and stringy, with black edges."],["لبه‌ها طلایی شده ولی وسط تکه هنوز صورتی است.", "جای کباب‌شده دارد، آبدار است و داخلش کاملاً سفید و آبش شفاف است.", "خشک، سفت و ریش‌ریش شده و لبه‌هایش سیاه است."]],
"koobideh":[["The outside is browning but the inside is still soft and pale.", "Browned outside, juicy inside with no pink, firm when pressed.", "Dry and crumbly; it cracks and falls off the skewer."],["رویش قهوه‌ای شده ولی داخلش هنوز نرم و کم‌رنگ است.", "بیرونش برشته و داخلش آبدار و بدون صورتی است و با فشار سفت است.", "خشک و ترد شده، ترک برداشته و از سیخ می‌افتد."]],
"kabab-tabei":[["Brown underneath but the top still looks raw.", "Both sides brown, juicy inside, no pink.", "Dry, shrunken, dark and hard."],["زیرش قهوه‌ای شده ولی رویش هنوز خام به نظر می‌رسد.", "هر دو طرف قهوه‌ای، داخلش آبدار و بدون صورتی است.", "خشک و جمع شده، تیره و سفت است."]],
"ash-reshteh":[["The beans are soft but the noodles are firm and the soup is thin.", "Thick and creamy, noodles soft, beans tender, deep green.", "The noodles dissolve and it’s so thick it sticks to the pot. Add hot water."],["حبوبات نرم شده ولی رشته هنوز سفت و آش رقیق است.", "غلیظ و لعاب‌دار است، رشته نرم، حبوبات پخته و رنگ سبز تیره.", "رشته وا رفته و آش آن‌قدر غلیظ شده که ته می‌گیرد. آب داغ اضافه کنید."]],
"adasi":[["The lentils are soft but the broth is still thin.", "Lentils creamy and just starting to break down; the soup is thick.", "It has turned to paste and sticks to the bottom."],["عدس نرم شده ولی آبش هنوز رقیق است.", "عدس کرمی و در حال له شدن است و عدسی جاافتاده و غلیظ است.", "خمیر شده و ته گرفته."]],
"soup-jo":[["The barley is swollen but still chewy.", "The barley is soft and the soup thick and creamy.", "The barley is gluey and the soup so thick it sticks."],["جو پف کرده ولی هنوز سفت است.", "جو نرم است و سوپ غلیظ و لعاب‌دار.", "جو چسبناک شده و سوپ آن‌قدر غلیظ است که ته می‌گیرد."]],
"nimroo":[["The whites are set at the edges but clear and runny near the yolk.", "Whites fully white, yolk still glossy and runny.", "Pale, hard yolk and rubbery whites with brown, crispy edges."],["لبه‌ی سفیده بسته ولی کنار زرده هنوز شفاف و آبکی است.", "سفیده کاملاً سفید و زرده هنوز براق و عسلی است.", "زرده سفت و کم‌رنگ و سفیده لاستیکی با لبه‌های قهوه‌ای است."]],
"noon-panir-sabzi":[["The herbs are washed but still wet.", "Herbs dry and crisp, bread warm and soft, cheese at room temperature.", "Herbs wilted or bread dried out from sitting too long."],["سبزی شسته شده ولی هنوز خیس است.", "سبزی خشک و ترد، نان گرم و نرم و پنیر هم‌دمای اتاق است.", "سبزی پلاسیده یا نان خشک شده، چون زیاد مانده."]],
"halim":[["The wheat is soft but you can still see whole grains and pieces of meat.", "Smooth and stretchy — lift the spoon and it pulls into threads.", "A scorched smell from the bottom, and it’s too thick to stir."],["گندم نرم شده ولی هنوز دانه‌ها و تکه‌های گوشت پیداست.", "یکدست و کش‌دار است؛ قاشق را بلند کنید رشته‌رشته کش می‌آید.", "از ته بوی سوختگی می‌آید و آن‌قدر غلیظ شده که هم نمی‌خورد."]],
"kotlet":[["Brown at the edges but soft and pale in the middle.", "Deep brown and crisp on both sides, firm when pressed.", "A black crust and dry inside; they taste bitter."],["لبه‌ها قهوه‌ای شده ولی وسط کتلت نرم و کم‌رنگ است.", "هر دو طرف قهوه‌ای پررنگ و ترد است و با فشار سفت است.", "رویش سیاه و داخلش خشک شده و تلخ است."]],
"kuku-sabzi":[["The edges are set but the middle wobbles when you shake the pan.", "Firm all through, a toothpick comes out clean, dark green with a brown crust.", "Dry and crumbly, with a black, bitter crust."],["لبه‌ها بسته ولی وسطش با تکان دادن تابه می‌لرزد.", "کاملاً سفت شده، خلال دندان تمیز بیرون می‌آید، سبز تیره با رویه‌ی قهوه‌ای.", "خشک و ترد شده و رویه‌اش سیاه و تلخ است."]],
"kuku-sibzamini":[["Golden at the edges but soft in the middle.", "Golden-brown on both sides and holds together when lifted.", "Dark brown to black, greasy and dry."],["لبه‌ها طلایی شده ولی وسطش هنوز نرم است.", "هر دو طرف طلایی-قهوه‌ای است و با برداشتن از هم نمی‌پاشد.", "قهوه‌ای تیره تا سیاه شده و خشک و چرب است."]],
"mirza-ghasemi":[["The eggplant is soft and the eggs are just in and still wet.", "The eggs are cooked into the eggplant; it’s smoky, thick and orange-brown.", "Dry and dark, with burnt, bitter garlic."],["بادمجان نرم شده و تخم‌مرغ تازه اضافه شده و هنوز خیس است.", "تخم‌مرغ با بادمجان پخته و یکی شده؛ دودی، غلیظ و نارنجی-قهوه‌ای است.", "خشک و تیره شده و سیر سوخته و تلخ است."]],
"kashk-bademjan":[["The eggplant is soft but still in pieces.", "The eggplant mashes into a smooth, creamy dip and the onion and mint toppings are crisp.", "The fried onion or mint is burnt and bitter; the eggplant is greasy and dark."],["بادمجان نرم شده ولی هنوز تکه‌تکه است.", "بادمجان یکدست و کرمی له می‌شود و پیاز داغ و نعناع داغ ترد است.", "پیاز داغ یا نعناع داغ سوخته و تلخ است و بادمجان چرب و تیره."]],
"omlet":[["The tomato is thick but the eggs are still runny.", "The eggs have just set in soft, glossy curds.", "The eggs are dry and grainy and the tomato has stuck to the pan."],["گوجه غلیظ شده ولی تخم‌مرغ هنوز آبکی است.", "تخم‌مرغ تازه بسته و نرم و هنوز براق است.", "تخم‌مرغ خشک و دانه‌دانه شده و گوجه ته گرفته."]],
"makaroni":[["The pasta bends but has a firm white core.", "Tender with a slight bite, the sauce clings, and the tahdig is golden and crisp.", "The pasta is soft and mushy and the tahdig black."],["ماکارونی خم می‌شود ولی وسطش سفید و سفت است.", "ماکارونی نرم با کمی مقاومت است، سس به آن چسبیده و ته‌دیگ طلایی و ترد است.", "ماکارونی وا رفته و ته‌دیگ سیاه شده."]],
"yatimcheh":[["The eggplant is soft but the sauce is still watery.", "Silky eggplant, a thick sauce, and oil rising to the top.", "Everything is mushy and stuck to the pan."],["بادمجان نرم شده ولی سس هنوز آبکی است.", "بادمجان لطیف و سس غلیظ است و روغن رویش آمده.", "همه‌چیز له شده و ته گرفته."]],
"salad-shirazi":[["Chopped but not dressed yet.", "Dressed with lime and mint just before serving — crisp and bright.", "It sat too long and went watery and soft. Pour off the extra liquid."],["خرد شده ولی هنوز آبلیمو و نعناع نخورده.", "درست پیش از سرو آبلیمو و نعناع خورده؛ ترد و تازه است.", "زیاد مانده، آب انداخته و نرم شده. آب اضافه‌اش را بریزید."]],
"mast-o-khiar":[["Just mixed; the flavours are still separate.", "Chilled for 10 minutes, the cucumber crunchy and the mint fragrant.", "Left too long, it’s watery and the cucumber limp. Stir and drain."],["تازه مخلوط شده و طعم‌ها هنوز جدا هستند.", "ده دقیقه در یخچال مانده، خیار ترد و نعناع معطر است.", "زیاد مانده، آب انداخته و خیار شل شده. هم بزنید و آبش را بگیرید."]],
"borani-esfenaj":[["The spinach is wilted but still wet.", "The spinach is dry and cool and mixed smoothly into thick yogurt.", "Watery spinach makes the yogurt runny."],["اسفناج پلاسیده ولی هنوز خیس است.", "اسفناج خشک و خنک است و با ماست غلیظ یکدست شده.", "اسفناج آب انداخته و ماست را آبکی کرده."]],
"olivieh":[["The potatoes and eggs are boiled but still warm.", "Everything completely cold before mixing; creamy and holds its shape.", "Overcooked potatoes turn the salad into paste."],["سیب‌زمینی و تخم‌مرغ پخته ولی هنوز گرم است.", "همه‌چیز قبل از مخلوط کردن کاملاً سرد شده؛ کرمی است و فرمش را نگه می‌دارد.", "سیب‌زمینی بیش از حد پخته و سالاد خمیری شده."]],
"sabzi-khordan":[["Washed but still wet.", "Dry, crisp and bright green, the radishes crunchy.", "Wilted or slimy from sitting wet."],["شسته شده ولی هنوز خیس است.", "خشک، ترد و سبز روشن است و تربچه ترد است.", "پلاسیده یا لزج شده، چون خیس مانده."]],
"sholeh-zard":[["The rice is soft but the pudding is still runny.", "Thick, glossy and golden; it falls slowly from the spoon and the grains are soft.", "Too thick to pour, and scorched on the bottom."],["برنج نرم شده ولی شله‌زرد هنوز آبکی است.", "غلیظ و براق و طلایی است، آرام از قاشق می‌ریزد و دانه‌ها نرم‌اند.", "آن‌قدر سفت شده که نمی‌ریزد و ته گرفته."]],
"shir-berenj":[["The rice is soft but the milk is still thin.", "Creamy and thick like custard; it coats the back of a spoon.", "A thick paste with a brown, scorched layer on the bottom."],["برنج نرم شده ولی شیر هنوز رقیق است.", "کرمی و غلیظ است و پشت قاشق را می‌پوشاند.", "خمیر شده و ته آن قهوه‌ای و سوخته است."]],
"halva":[["The flour is light beige and smells of raw dough.", "The flour is deep golden-brown with a toasted, nutty smell; after the syrup it pulls away from the pan.", "Dark brown and bitter — burnt flour can’t be saved; start again."],["آرد بژ روشن است و بوی خامی می‌دهد.", "آرد طلایی-قهوه‌ای است و بوی برشته و مغزدار می‌دهد؛ بعد از شربت از کناره‌ها جدا می‌شود.", "قهوه‌ای تیره و تلخ شده؛ آرد سوخته درست‌شدنی نیست، از نو شروع کنید."]],
"fereni":[["The milk is warm and just starting to thicken.", "Smooth and thick; it coats a spoon and a finger line stays clear.", "Lumpy, or scorched on the bottom."],["شیر گرم شده و تازه دارد غلیظ می‌شود.", "یکدست و غلیظ است، پشت قاشق را می‌پوشاند و خط انگشت روی آن می‌ماند.", "گلوله‌گلوله شده یا ته گرفته."]],
"cake-yazdi":[["Risen but pale; a toothpick comes out wet.", "Domed and golden, springs back when touched, and a toothpick comes out clean.", "Dark brown and dry, or bitter."],["پف کرده ولی رویش کم‌رنگ است و خلال دندان خیس بیرون می‌آید.", "گنبدی و طلایی است، با لمس برمی‌گردد و خلال دندان تمیز بیرون می‌آید.", "قهوه‌ای تیره و خشک یا تلخ شده."]],
"doogh":[["Just mixed and not cold yet.", "Ice cold and frothy, salty-sour with mint.", "Left out too long, it separates and turns too sour. Shake it well."],["تازه مخلوط شده و هنوز خنک نیست.", "یخ و کف‌دار است، شور و ترش با عطر نعناع.", "زیاد بیرون مانده، دو فاز شده و خیلی ترش است. خوب تکان دهید."]],
"sekanjabin":[["The syrup is still thin like water.", "It coats a spoon like runny honey and smells strongly of mint.", "Thick and dark like caramel — it will set hard. Stir in a little water."],["شربت هنوز رقیق مثل آب است.", "مثل عسل رقیق پشت قاشق را می‌پوشاند و بوی نعناع تند است.", "غلیظ و تیره مثل کارامل شده و سفت می‌شود. کمی آب اضافه کنید."]],
"chai":[["The tea is light amber and the leaves are still floating.", "Deep red-amber, the leaves have sunk and the smell is rich.", "Dark, cloudy and bitter — it brewed too long or boiled."],["چای کهربایی روشن است و برگ‌ها هنوز روی آب‌اند.", "قرمز خوش‌رنگ است، برگ‌ها ته نشسته‌اند و عطرش بلند شده.", "تیره، کدر و تلخ شده؛ زیاد دم کشیده یا جوشیده."]],
"shakshuka":[["The whites are set at the edges but clear around the yolks.", "Whites fully set, yolks still wobbling when you shake the pan.", "Hard, chalky yolks and a sauce drying at the edges."],["لبه‌ی سفیده بسته ولی دور زرده هنوز شفاف است.", "سفیده کامل بسته و زرده با تکان دادن تابه هنوز می‌لرزد.", "زرده سفت و گچی شده و سس کنار تابه خشک شده."]],
"egg-fried-rice":[["The rice is warm but still in clumps.", "The grains are hot, separate and lightly toasted, with a slight smoky smell.", "The rice is hard and crunchy, or stuck and burnt."],["برنج گرم شده ولی هنوز به هم چسبیده.", "دانه‌ها داغ، جدا و کمی برشته‌اند و بوی دودی ملایمی دارند.", "برنج سفت و خشک شده یا ته گرفته و سوخته."]],
"chicken-curry":[["The chicken is white outside but pink inside when cut.", "The chicken is white through and tender; the sauce is thick with oil separating at the edges.", "Dry, stringy chicken and a sauce stuck to the pan."],["مرغ بیرونش سفید شده ولی داخلش هنوز صورتی است.", "مرغ کاملاً سفید و نرم است و سس غلیظ شده و روغن در کناره‌ها جدا شده.", "مرغ خشک و ریش‌ریش شده و سس ته گرفته."]],
"pasta-pomodoro":[["The pasta bends but has a white, chalky core.", "Al dente — tender with a slight bite, and the sauce glossy and clinging.", "The pasta is soft and bloated and the sauce dried out."],["پاستا خم می‌شود ولی مغزش سفید و گچی است.", "پاستا نرم با کمی مقاومت زیر دندان است و سس براق به آن چسبیده.", "پاستا وا رفته و باد کرده و سس خشک شده."]],
"roast-chicken":[["The skin is golden but the juices from the thigh are still pink.", "Skin deep golden and crisp, thigh juices clear, the leg wiggles loosely (75 °C in the thigh).", "The breast is dry and stringy and the skin dark and shrunken."],["پوست طلایی شده ولی آب ران هنوز صورتی است.", "پوست طلایی پررنگ و ترد، آب ران شفاف است و ران راحت تکان می‌خورد (۷۵ درجه در ران).", "سینه خشک و ریش‌ریش شده و پوست تیره و جمع شده."]],
"pancakes":[["Bubbles appear on top but the edges look wet.", "The bubbles pop and stay open and the edges look dry; golden-brown after flipping.", "Dark brown, dry and bitter."],["روی پنکیک حباب می‌زند ولی لبه‌ها هنوز خیس است.", "حباب‌ها می‌ترکند و باز می‌مانند و لبه‌ها خشک است؛ بعد از برگرداندن طلایی-قهوه‌ای است.", "قهوه‌ای تیره، خشک و تلخ شده."]],
"boiled-eggs":[["At 5–6 minutes the whites are set and the yolk is fully runny.", "8 minutes for a jammy yolk; 10–11 minutes for a firm, bright yellow yolk.", "A grey-green ring round the yolk, rubbery whites and a sulfur smell."],["در ۵ تا ۶ دقیقه سفیده بسته و زرده کاملاً آبکی است.", "۸ دقیقه برای زرده‌ی عسلی؛ ۱۰ تا ۱۱ دقیقه برای زرده‌ی سفت و زرد روشن.", "دور زرده حلقه‌ی سبز-خاکستری افتاده، سفیده لاستیکی است و بوی گوگرد می‌دهد."]],
"scrambled-eggs":[["Soft curds are forming but there’s still a lot of liquid egg.", "Creamy, soft curds that still look slightly wet and glossy.", "Dry, rubbery pieces with liquid seeping out."],["لخته‌های نرم دارد شکل می‌گیرد ولی هنوز تخم‌مرغ آبکی زیاد است.", "لخته‌های نرم و کرمی که هنوز کمی خیس و براق‌اند.", "تکه‌های خشک و لاستیکی که از آن‌ها آب بیرون می‌زند."]],
"folded-omelette":[["The bottom is set but the top is still liquid.", "The top has just set but is still soft and shiny, pale yellow with little or no browning.", "Brown, dry and rubbery."],["زیرش بسته ولی رویش هنوز مایع است.", "رویش تازه بسته ولی هنوز نرم و براق است؛ زرد روشن و تقریباً بدون قهوه‌ای شدن.", "قهوه‌ای، خشک و لاستیکی شده."]],
"poached-eggs":[["The white is cloudy and loose, still see-through in places.", "The white is fully set and the yolk soft and wobbly when lifted.", "The yolk is firm when pressed and the white tough."],["سفیده کدر و شل است و جاهایی هنوز شفاف است.", "سفیده کامل بسته و زرده موقع برداشتن نرم و لرزان است.", "زرده با فشار سفت است و سفیده سفت و کش‌دار."]],
"tamagoyaki":[["The layer is still wet on top when you start rolling.", "Each layer has just set and is pale yellow; the roll is springy and moist.", "Brown spots, dry and rubbery, and the layers come apart."],["وقتی شروع به لوله کردن می‌کنید رویه هنوز خیس است.", "هر لایه تازه بسته و زرد روشن است و لوله فنری و مرطوب است.", "لکه‌های قهوه‌ای دارد، خشک و لاستیکی است و لایه‌ها جدا می‌شوند."]],
"steamed-egg":[["The edges are set but the middle is liquid.", "It wobbles like soft tofu, the top is smooth, and clear liquid comes out when poked.", "Full of holes like a sponge, watery and tough."],["لبه‌ها بسته ولی وسطش مایع است.", "مثل توفوی نرم می‌لرزد، سطحش صاف است و با فرو کردن چاقو مایع شفاف بیرون می‌آید.", "مثل اسفنج پر از سوراخ، آبکی و سفت شده."]],
"meringues":[["Dry outside but still sticky and stuck to the paper.", "Crisp and white or very pale cream; they lift off easily and sound hollow.", "Beige or brown and cracked, with syrupy beads leaking out."],["بیرونش خشک است ولی هنوز چسبناک است و به کاغذ می‌چسبد.", "ترد و سفید یا کرم خیلی روشن است، راحت از کاغذ جدا می‌شود و صدای توخالی می‌دهد.", "بژ یا قهوه‌ای و ترک‌دار شده و قطره‌های شربت از آن بیرون زده."]],
"khagineh":[["Golden underneath but the top is still runny.", "Golden and puffed on both sides, springy, soaking up the syrup.", "Dark brown and dry, tasting burnt."],["زیرش طلایی شده ولی رویش هنوز آبکی است.", "هر دو طرف طلایی و پف‌کرده و فنری است و شربت را به خود می‌کشد.", "قهوه‌ای تیره و خشک شده و مزه‌ی سوختگی می‌دهد."]],
"eshkeneh":[["The onions are soft but pale and the eggs have just gone in.", "The onions are golden and sweet, the eggs just set, and the soup smells of mint.", "Burnt, bitter onions and rubbery eggs."],["پیاز نرم ولی کم‌رنگ است و تخم‌مرغ تازه اضافه شده.", "پیاز طلایی و شیرین، تخم‌مرغ تازه بسته و سوپ پر از عطر نعناع است.", "پیاز سوخته و تلخ و تخم‌مرغ لاستیکی شده."]],
"nargesi":[["The spinach is wilted but watery and the egg whites are still clear.", "The spinach is dry and dark green, the whites set and the yolks soft.", "Hard yolks and spinach stuck to the pan."],["اسفناج خوابیده ولی هنوز آب دارد و سفیده شفاف است.", "اسفناج آبش کشیده و سبز تیره است، سفیده بسته و زرده نرم است.", "زرده سفت شده و اسفناج ته گرفته."]],
"potato-eggs":[["The potatoes are golden outside but hard inside — test one with a fork.", "Crisp outside and soft inside, with the eggs just set.", "Dark brown, dry potatoes and rubbery eggs."],["بیرون سیب‌زمینی طلایی ولی داخلش سفت است؛ با چنگال امتحان کنید.", "سیب‌زمینی بیرون ترد و داخل نرم است و تخم‌مرغ تازه بسته.", "سیب‌زمینی قهوه‌ای تیره و خشک و تخم‌مرغ لاستیکی شده."]],
"spanish-tortilla":[["The edges are set but the middle is liquid when you shake the pan.", "Golden on both sides and just slightly soft and juicy in the very centre.", "Dry and dense all the way through, dark brown outside."],["لبه‌ها بسته ولی وسطش با تکان دادن تابه مایع است.", "هر دو طرف طلایی و وسطش کمی نرم و آبدار است.", "کاملاً خشک و سفت شده و بیرونش قهوه‌ای تیره است."]],
"french-toast":[["Lightly golden underneath but still wet and soggy in the middle.", "Golden and crisp outside, soft and custardy inside, with no wet egg.", "Dark brown and hard, dry inside."],["زیرش کمی طلایی ولی وسطش هنوز خیس و وارفته است.", "بیرونش طلایی و ترد، داخلش نرم و کرمی و بدون تخم‌مرغ خام است.", "قهوه‌ای تیره و سفت و داخلش خشک شده."]],
"egg-sandwich":[["Eggs boiled 7–8 minutes: the yolks are still soft.", "Eggs boiled 10 minutes: firm yellow yolks and a creamy filling.", "Grey-green yolks and a sulfur smell from boiling too long."],["تخم‌مرغ ۷ تا ۸ دقیقه جوشیده و زرده هنوز نرم است.", "تخم‌مرغ ۱۰ دقیقه جوشیده؛ زرده سفت و زرد و مایه کرمی است.", "زرده سبز-خاکستری شده و بوی گوگرد می‌دهد، چون زیاد جوشیده."]],
"egg-in-a-hole":[["The bread is golden underneath but the white is still clear.", "Golden toast, a set white and a runny yolk.", "Dark, hard toast and a firm yolk."],["زیر نان طلایی شده ولی سفیده هنوز شفاف است.", "نان طلایی، سفیده بسته و زرده عسلی است.", "نان تیره و سفت شده و زرده سفت."]],
"deviled-eggs":[["The eggs are boiled but still warm, which makes the filling runny.", "The eggs are fully cold, the yolks bright yellow and the filling smooth.", "Grey-green yolks from overboiling and a filling that tastes of sulfur."],["تخم‌مرغ پخته ولی هنوز گرم است و مایه شل می‌شود.", "تخم‌مرغ کاملاً سرد، زرده زرد روشن و مایه یکدست است.", "زرده از زیاد جوشیدن سبز-خاکستری شده و مایه بوی گوگرد می‌دهد."]],
"egg-custard":[["The edges are set but the middle ripples like liquid.", "Set, with a gentle jelly-like wobble in the centre; a knife comes out clean.", "Bubbles and holes, watery liquid seeping out, and a grainy texture."],["لبه‌ها بسته ولی وسطش مثل مایع موج برمی‌دارد.", "بسته شده و وسطش مثل ژله کمی می‌لرزد؛ چاقو تمیز بیرون می‌آید.", "حباب و سوراخ دارد، آب از آن بیرون زده و بافتش دانه‌دانه است."]],
"banana-pancakes":[["The edges are set but the middle is wet and falls apart if you flip it.", "Golden on both sides, soft and set in the middle.", "Dark and bitter — banana sugar burns fast."],["لبه‌ها بسته ولی وسطش خیس است و با برگرداندن از هم می‌پاشد.", "هر دو طرف طلایی و وسطش نرم و بسته است.", "تیره و تلخ شده؛ قند موز زود می‌سوزد."]],
"egg-curry":[["The sauce is thin and the onions still sharp.", "The sauce is thick, oil separates at the edges, and the eggs are coated and hot through.", "The sauce has dried and stuck and the eggs are rubbery."],["سس رقیق است و پیاز هنوز تند است.", "سس غلیظ شده، روغن در کناره‌ها جدا شده و تخم‌مرغ‌ها سس‌دار و داغ‌اند.", "سس خشک شده و ته گرفته و تخم‌مرغ لاستیکی شده."]],
"baked-potatoes":[["The skin is crisp but a knife meets resistance in the centre.", "A knife slides in with no resistance; crisp skin, fluffy inside.", "Hard, leathery skin and a dry, shrunken inside."],["پوست ترد شده ولی چاقو در وسط به مقاومت برمی‌خورد.", "چاقو بدون مقاومت فرو می‌رود؛ پوست ترد و داخل پفکی است.", "پوست سفت و چرمی و داخل خشک و جمع شده."]],
"mashed-potatoes":[["A fork goes in but the centre still feels firm.", "The potatoes fall apart when pierced; the mash is smooth, creamy and fluffy.", "Waterlogged potatoes make a sticky, gluey mash — and don’t over-mash."],["چنگال فرو می‌رود ولی وسطش هنوز سفت است.", "سیب‌زمینی با چنگال از هم می‌پاشد و پوره صاف، کرمی و پفکی است.", "سیب‌زمینی آب کشیده و پوره چسبناک شده؛ زیاد هم له نکنید."]],
"fried-potatoes":[["Pale and limp, bubbling fast in the oil.", "Golden and crisp, the bubbles slow down, fluffy inside.", "Dark brown, hard and bitter."],["کم‌رنگ و شل است و در روغن تند حباب می‌زند.", "طلایی و ترد است، حباب‌ها کم شده و داخلش پفکی است.", "قهوه‌ای تیره، سفت و تلخ شده."]],
"grilled-cheese":[["The bread is browning but the cheese hasn’t melted.", "Deep golden bread with cheese oozing at the edges.", "Black bread with a bitter smell and cheese burning in the pan."],["نان دارد قهوه‌ای می‌شود ولی پنیر هنوز آب نشده.", "نان طلایی پررنگ و پنیر از کناره‌ها بیرون زده.", "نان سیاه شده و بوی تلخ می‌دهد و پنیر در تابه سوخته."]],
"tomato-soup":[["The tomatoes are soft but the soup tastes sharp and thin.", "The tomatoes have broken down and the soup is smooth, sweet and slightly thick.", "Reduced too far and sticking, bitter at the bottom."],["گوجه نرم شده ولی سوپ هنوز ترش و رقیق است.", "گوجه کاملاً وا رفته و سوپ صاف، شیرین و کمی غلیظ است.", "زیاد جا افتاده، ته گرفته و ته آن تلخ است."]],
"garlic-bread":[["The butter has melted but the bread is still soft and pale.", "Golden, crisp edges and fragrant, pale garlic.", "Brown, bitter garlic and black edges."],["کره آب شده ولی نان هنوز نرم و کم‌رنگ است.", "لبه‌ها طلایی و ترد و سیر معطر ولی کم‌رنگ است.", "سیر قهوه‌ای و تلخ شده و لبه‌ها سیاه."]],
"aglio-olio":[["The garlic is sizzling but still white.", "The garlic is pale golden and fragrant; the pasta al dente and glossy.", "Brown garlic turns bitter — throw it out and start the garlic again."],["سیر جلز و ولز می‌کند ولی هنوز سفید است.", "سیر طلایی کم‌رنگ و معطر است و پاستا نرم با کمی مقاومت و براق.", "سیر قهوه‌ای و تلخ شده؛ دورش بریزید و دوباره سیر داغ کنید."]],
"shir-moz":[["There are still banana lumps.", "Smooth, frothy and cold, with a sweet banana smell.", "Left standing it browns and separates — drink it right away."],["هنوز تکه‌های موز در آن هست.", "یکدست، کف‌دار و سرد است و بوی شیرین موز می‌دهد.", "اگر بماند قهوه‌ای می‌شود و دو فاز می‌شود؛ فوراً بنوشید."]],
"tuna-sandwich":[["The tuna is still wet with oil — drain it more.", "The tuna is flaky and moist but not dripping, and the bread fresh.", "The filling is watery and the bread soggy from sitting too long."],["تن ماهی هنوز روغن دارد؛ بیشتر آبکش کنید.", "تن ماهی ورقه‌ای و نمناک است، نه چکه‌کننده، و نان تازه است.", "مایه آب انداخته و نان وارفته، چون زیاد مانده."]]
};
DP_RECIPES.forEach(function(r){if(DP_DONE[r.id])r.k=DP_DONE[r.id];});
