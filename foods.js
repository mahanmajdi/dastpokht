/* Macro food list — common foods with a typical portion each.
   Row: [names (first is the display name), unit, grams or ml in one unit, kcal, protein g, carbs g, fat g, other units, 'ml' for drinks].
   Values are for ONE unit. They're typical figures (USDA FoodData Central and common recipes) — estimates, not lab numbers. */
var MACRO_FOODS=[
['egg|eggs|boiled egg|boiled eggs|hard boiled egg|fried egg|fried eggs|nimroo|scrambled egg|scrambled eggs|poached egg|tokhm morgh','large',50,72,6.3,.4,4.8],
['egg white|egg whites','large',33,17,3.6,.2,.1],
['omelette|omelet|omlet|cheese omelette','omelette',130,210,14,2,16],
['milk|shir','cup',244,122,8.1,11.7,4.8,'glass:250,tbsp:15','ml'],
['whole milk|full fat milk','cup',244,149,7.7,11.7,8,'glass:250','ml'],
['skim milk|skimmed milk|low fat milk|lowfat milk','cup',244,90,8.3,12.2,.6,'glass:250','ml'],
['chocolate milk|shir kakao','cup',250,208,8,26,8.5,'glass:250','ml'],
['yogurt|yoghurt|plain yogurt|mast|maast','cup',245,150,8.5,11.4,8,'tbsp:15,bowl:250'],
['greek yogurt|greek yoghurt|strained yogurt|mast chekide','cup',170,125,17,7,3.5,'tbsp:15,bowl:250'],
['doogh|dough|ayran|dugh|dooq','glass',250,75,4,5,4,'can:330,bottle:500','ml'],
['kashk','tbsp',15,15,1.5,1,.5],
['cheese|cheddar|cheddar cheese|cheese slice','slice',28,113,7,.4,9.3],
['white cheese|iranian cheese|persian cheese|panir|lighvan|feta|feta cheese|tabriz cheese','piece',30,80,5,1,6.5],
['mozzarella','slice',28,85,6.3,.6,6.3],
['cream cheese','tbsp',15,50,.9,.8,5],
['cottage cheese','cup',226,190,25,10,5],
['butter|kareh','tbsp',14,102,.1,0,11.5,'tsp:5'],
['ice cream|icecream|vanilla ice cream','scoop',66,137,2.3,16,7.3],
['saffron ice cream|bastani|bastani sonnati|persian ice cream','scoop',70,170,3,20,9],
['whey protein|whey|protein powder|protein shake','scoop',30,120,24,3,1.5],
['bread|white bread|toast|toast slice','slice',30,80,2.7,15,1],
['whole wheat bread|brown bread|wholemeal bread|whole grain bread','slice',32,81,4,13.8,1.1],
['lavash|lavash bread|noon lavash','sheet',45,124,4,25,.6],
['sangak|sangak bread|noon sangak','piece',100,250,8,50,1.5],
['barbari|barbari bread|noon barbari|barbary','piece',100,270,8.5,53,2.5],
['taftoon|taftun|noon taftoon','piece',100,270,8.5,54,2],
['noon|nan|persian bread','piece',100,265,8.5,52,2],
['naan|naan bread','piece',90,262,8.7,45,5],
['pita|pita bread','medium',60,165,5.5,33,.7],
['baguette|french bread','piece',60,165,6,33,1],
['tortilla|flour tortilla|wrap bread','medium',45,140,3.7,23,3.5],
['bagel','medium',105,277,11,55,1.4],
['croissant','medium',57,231,4.7,26,12],
['bun|burger bun|bread roll','medium',50,140,4.5,26,2],
['rice|white rice|cooked rice|plain rice|basmati|basmati rice|steamed rice|berenj','cup',158,205,4.3,44.5,.4,'bowl:250,plate:300,tbsp:12'],
['chelo|polo|persian rice|kateh|chelow','plate',300,480,8,90,9,'cup:160,bowl:250,tbsp:12'],
['brown rice','cup',195,216,5,45,1.8,'bowl:250,plate:300'],
['tahdig|tah dig','piece',60,200,2,25,10],
['pasta|spaghetti|penne|noodles|macaroni|cooked pasta','cup',140,220,8,43,1.3,'bowl:250,plate:300'],
['spaghetti bolognese|bolognese|pasta bolognese|persian macaroni|makaroni','plate',350,530,26,65,17,'bowl:300,cup:200'],
['mac and cheese|mac n cheese|macaroni and cheese','cup',200,380,15,40,18,'bowl:300'],
['pasta alfredo|fettuccine alfredo|alfredo','plate',350,700,25,70,35],
['lasagna|lasagne','piece',250,400,23,38,17],
['oats|rolled oats|oat|dry oats|jo dosar','serving',40,150,5.3,27,2.6,'cup:80'],
['oatmeal|porridge|cooked oats','bowl',234,166,5.9,28,3.6,'cup:234'],
['cereal|cornflakes|corn flakes','cup',28,100,2,24,.1,'bowl:40'],
['granola|muesli','serving',50,235,5,32,10,'cup:100,bowl:70'],
['pancake|pancakes','medium',60,135,3.8,17,5.8],
['waffle|waffles','medium',75,220,6,25,11],
['potato|potatoes|boiled potato|baked potato|sibzamini','medium',170,147,3.2,34,.2],
['fries|french fries|fried potatoes|sibzamini sorkh kardeh','medium',117,365,4,48,17,'small:80,large:154'],
['mashed potato|mashed potatoes|mash|pure','cup',210,230,4,35,9],
['sweet potato|sweet potatoes','medium',130,117,2.6,27,.2],
['couscous','cup',157,176,6,36,.3],
['quinoa','cup',185,222,8,39,3.6],
['corn|sweet corn|corn on the cob|balal','ear',100,96,3.4,21,1.5,'cup:145']
];
MACRO_FOODS.push(
['chicken breast|grilled chicken|grilled chicken breast|chicken fillet|sineh morgh','breast',170,280,53,0,6.1],
['chicken thigh|chicken thighs|ran morgh','thigh',110,230,28.6,0,12],
['chicken|roast chicken|cooked chicken|boiled chicken|morgh','serving',150,285,43,0,11],
['fried chicken|crispy chicken|kfc|sookhari','piece',120,310,26,11,18],
['chicken nuggets|nuggets|nugget','piece',16,48,2.5,3,3],
['chicken wings|wings|wing','wing',34,99,9,0,6.6],
['steak|beef steak|sirloin|ribeye|beef|beef fillet','serving',150,300,45,0,12],
['ground beef|minced beef|mince|minced meat|gusht charkh kardeh','100 g',100,250,26,0,15],
['lamb|lamb meat|gusht|mutton|meat','100 g',100,250,25,0,16],
['lamb chops|lamb chop|shishlik|shishleek','chop',60,170,13,0,13],
['koobideh|kubideh|kebab koobideh|kabab koobideh|kobideh|kebab|kabab|kabob|kebab kubideh|koobide|kubide|koubideh|kabab kubide','skewer',100,270,18,3,21],
['joojeh kabab|joojeh|joojeh kebab|jujeh kabab|chicken kebab|chicken kabab|chicken skewer|jujeh|juje|joje|joje kabab|juje kabab','skewer',200,330,50,3,13],
['kabab barg|barg|kebab barg|barg kebab','skewer',150,330,38,1,19],
['chelo kabab|chelo kebab|chelow kabab|kabab ba berenj','plate',520,1050,45,95,52],
['kabab torsh|kebab torsh','skewer',150,380,33,6,25],
['jigar|liver kebab|liver','skewer',100,175,26,4,5],
['shawarma|chicken shawarma|shawarma wrap|chicken shawarma wrap|chicken wrap','wrap',300,640,44,58,24],
['doner kebab|doner|doner wrap|gyro|gyros','wrap',300,650,35,55,32],
['falafel','piece',17,57,2.3,5.4,3],
['falafel wrap|falafel sandwich','wrap',250,550,16,60,26],
['burger|hamburger|beef burger|big mac|whopper','burger',220,550,30,40,30],
['cheeseburger|cheese burger','burger',240,610,34,41,35],
['hot dog|hotdog','piece',100,290,10,24,17],
['sausage|sausages|sosis','link',75,230,10,2,20],
['sosis bandari|sausage sandwich','sandwich',250,520,16,45,30],
['bacon','slice',8,43,3,.1,3.3],
['ham','slice',28,33,5,.6,1.1],
['turkey breast|turkey|deli turkey','slice',28,29,6,.5,.4],
['salmon|salmon fillet|grilled salmon|mahi salmon','fillet',150,310,33,0,18],
['tuna|canned tuna|tuna can|ton mahi|tuna fish','can',120,230,32,0,11],
['tuna in water','can',113,130,29,0,1],
['shrimp|prawns|prawn|meygoo|meigoo','100 g',100,99,24,.2,.3],
['fish|white fish|grilled fish|mahi|cod|tilapia','fillet',150,170,36,0,2],
['fried fish|mahi sorkh kardeh','fillet',150,320,28,12,18],
['fish and chips','plate',400,840,36,80,42],
['kotlet|cutlet|kotlet gusht|cotlet|kotlet goosht','piece',70,180,8,9,12],
['kuku sabzi|kuku|kookoo sabzi|kookoo|herb frittata|koko sabzi','piece',100,180,7,6,14],
['kuku sibzamini|potato kuku|kookoo sibzamini|kuku sib zamini|kookoo sib zamini','piece',100,200,6,18,11],
['meatballs|meatball','piece',30,75,5,2,5],
['koofteh tabrizi|koofteh|kufteh','piece',250,450,25,25,27],
['dolmeh|dolma|stuffed grape leaves','piece',50,75,2.5,8,3.5],
['ghormeh sabzi|ghormeh|qormeh sabzi|khoresh ghormeh sabzi|ghorme sabzi|ghorme|gormeh sabzi|gormeh','bowl',250,330,20,15,21],
['gheymeh|gheimeh|qeymeh|khoresh gheymeh|gheyme|gheime|geymeh','bowl',250,350,18,25,20],
['fesenjan|fesenjoon|fesenjoon ba morgh|khoresh fesenjan|fesenjun|fesenjon','bowl',250,480,25,20,34],
['khoresh bademjan|bademjan stew|eggplant stew','bowl',250,330,15,15,24],
['khoresh karafs|karafs|celery stew','bowl',250,250,16,10,16],
['khoresh|stew|persian stew','bowl',250,320,18,18,20],
['abgoosht|dizi|abgusht|ab goosht','bowl',400,550,30,45,27],
['ash reshteh|ash|aash|aash reshteh|ash reshte|aash reshte','bowl',300,330,14,50,9],
['halim|haleem|halim gandom','bowl',300,330,20,45,7],
['adasi|lentil soup','bowl',250,230,13,38,3],
['kaleh pacheh|kalle pache','bowl',400,450,35,3,33],
['lubia polo|loobia polo|lobia polo|loobia polow','plate',350,600,22,85,18],
['adas polo','plate',350,560,15,95,12],
['zereshk polo ba morgh|zereshk polo|barberry rice with chicken|zereshk polo morgh|zereshk polow','plate',450,750,45,80,25],
['baghali polo ba mahicheh|baghali polo|mahicheh|lamb shank','plate',550,1000,55,95,42],
['sabzi polo ba mahi|sabzi polo','plate',450,800,38,85,32],
['tahchin|tah chin|tachin','piece',250,500,20,55,22],
['estamboli polo|estamboli|dami gojeh','plate',300,480,12,75,14],
['kashk bademjan|kashke bademjan|kashk e bademjan|kashke bademjoon|kashk bademjoon','bowl',200,300,8,18,22],
['mirza ghasemi|mirza ghassemi|mirzaghasemi|mirza qasemi','bowl',200,220,7,12,16],
['salad shirazi|shirazi salad','bowl',150,50,1.5,9,.5],
['olivieh|olivier|olivieh salad|salad olivieh|olivie|olvieh|salad olvie','serving',200,440,12,25,32],
['mast o khiar|maast o khiar|yogurt cucumber|mast khiar','bowl',200,130,7,10,7],
['borani|borani esfenaj|borani bademjan','bowl',200,170,7,11,11],
['sabzi khordan|herbs','plate',50,15,1,2,.2],
['torshi|pickles|pickle|khiar shoor','serving',50,15,.5,3,.1]
);
MACRO_FOODS.push(
['pizza|pizza slice|cheese pizza|margherita','slice',107,285,12,36,10],
['pepperoni pizza','slice',110,310,13,35,13],
['chicken sandwich','sandwich',200,450,28,40,19],
['tuna sandwich','sandwich',200,420,22,38,20],
['egg sandwich','sandwich',180,350,16,30,18],
['cheese sandwich','sandwich',150,350,15,30,18],
['peanut butter sandwich|pb sandwich|pbj|peanut butter and jelly','sandwich',110,380,13,45,17],
['grilled cheese|cheese toastie','sandwich',120,390,15,33,22],
['avocado toast','slice',150,260,7,25,16],
['sandwich|club sandwich','sandwich',220,480,25,42,23],
['burrito','burrito',300,600,32,70,20],
['taco|tacos','taco',100,210,9,16,12],
['sushi|maki|nigiri|sushi roll','piece',30,45,2,8,.5],
['fried rice','cup',200,330,8,50,11,'plate:350,bowl:300'],
['ramen|noodle soup','bowl',500,550,22,70,20],
['instant noodles|indomie|cup noodles','pack',85,380,8,52,14],
['chicken curry|curry','bowl',300,400,28,15,25],
['biryani','plate',350,580,25,70,22],
['caesar salad|chicken caesar salad','bowl',250,400,28,15,25],
['salad|green salad|garden salad|salad sabz','bowl',150,25,1.5,5,.2],
['salad dressing|dressing|ranch','tbsp',15,70,.1,1.5,7],
['soup|vegetable soup','bowl',250,100,3,17,2],
['chicken soup|soup morgh|soop','bowl',250,120,8,12,4],
['hummus|houmous','tbsp',15,25,1.2,2.1,1.4],
['apple|apples|sib','medium',182,95,.5,25,.3],
['banana|bananas|moz','medium',118,105,1.3,27,.4],
['orange|oranges|porteghal','medium',131,62,1.2,15.4,.2],
['tangerine|mandarin|clementine|narengi','medium',88,47,.7,12,.3],
['dates|date|khorma|medjool','date',10,28,.2,7.5,0],
['grapes|grape|angoor','cup',151,104,1.1,27,.2],
['watermelon|hendevaneh','slice',286,86,1.7,21.6,.4,'cup:152'],
['melon|cantaloupe|kharboze|kharbozeh|honeydew','cup',160,54,1.3,13,.3,'slice:200'],
['strawberries|strawberry|toot farangi','cup',152,49,1,12,.5],
['blueberries|blueberry','cup',148,84,1.1,21,.5],
['cherries|cherry|gilas','cup',154,97,1.6,25,.3],
['pomegranate|anar','medium',282,234,4.7,53,3.3],
['pomegranate seeds|arils','cup',174,144,2.9,32.5,2],
['peach|peaches|holu','medium',150,59,1.4,14,.4],
['pear|pears|golabi','medium',178,101,.6,27,.2],
['kiwi|kiwis','medium',75,46,.9,11,.4],
['mango|mangoes','cup',165,99,1.4,25,.6],
['pineapple|ananas','cup',165,82,.9,22,.2],
['persimmon|khormalu','medium',168,118,1,31,.3],
['fig|figs|anjir','medium',50,37,.4,9.6,.2],
['apricot|apricots|zardaloo','medium',35,17,.5,3.9,.1],
['raisins|kishmish|keshmesh','tbsp',9,27,.3,7,0,'handful:30,cup:145'],
['dried fruit|dried apricots','handful',30,75,1,19,.2],
['cucumber|khiar','medium',200,30,1.3,7,.2],
['tomato|tomatoes|gojeh','medium',123,22,1.1,4.8,.2],
['carrot|carrots|havij','medium',61,25,.6,6,.1],
['broccoli','cup',91,31,2.5,6,.3],
['spinach|esfenaj','cup',30,7,.9,1.1,.1],
['lettuce|kahoo','cup',50,8,.6,1.5,.1],
['onion|piaz','medium',110,44,1.2,10,.1],
['bell pepper|pepper|capsicum|felfel dolmeh','medium',120,31,1,7,.3],
['mushrooms|mushroom|gharch','cup',70,15,2.2,2.3,.2],
['eggplant|aubergine|bademjan','cup',100,35,.8,8.7,.2],
['fried eggplant|bademjan sorkh kardeh','serving',100,160,1.5,9,14],
['avocado','medium',200,320,4,17,29,'half:100'],
['olives|olive|zeytoon','olive',3,5,0,.1,.5,'handful:30'],
['green beans|lubia sabz','cup',125,44,2.4,10,.4],
['peas|green peas|nokhod farangi','cup',160,134,8.6,25,.4],
['lentils|lentil|adas','cup',198,230,18,40,.8],
['chickpeas|chickpea|nokhod|garbanzo','cup',164,269,14.5,45,4.2],
['beans|kidney beans|red beans|lubia|lubia ghermez|pinto beans','cup',177,225,15,40,.9],
['tofu','100 g',100,144,17.3,2.8,8.7],
['almonds|almond|badam','handful',28,164,6,6,14],
['walnuts|walnut|gerdoo|gerdu','handful',28,185,4.3,3.9,18.5],
['pistachios|pistachio|pesteh','handful',28,159,5.7,7.7,12.8],
['peanuts|peanut|badam zamini','handful',28,161,7.3,4.6,14],
['cashews|cashew','handful',28,157,5.2,8.6,12.4],
['mixed nuts|nuts|ajil|aajil','handful',30,175,5,7,15],
['sunflower seeds|tokhmeh|tokhme|seeds','handful',28,165,5.5,6.8,14],
['peanut butter','tbsp',16,94,3.6,3.5,8],
['tahini|ardeh','tbsp',15,89,2.6,3.2,8]
);
MACRO_FOODS.push(
['chocolate|milk chocolate|chocolate bar|shokolat','bar',45,240,3.4,26,13.5,'square:10'],
['dark chocolate','square',10,60,.8,4.6,4.3,'bar:100'],
['cookie|cookies|biscuit|biscuits','cookie',15,75,1,10,3.5],
['cake|chocolate cake|cake slice|keyk','slice',80,290,4,40,13],
['donut|doughnut|donat','medium',60,250,3.5,30,13],
['crisps|chips|potato chips|chips bag','bag',28,150,2,15,10,'large:90'],
['popcorn|pop corn|pofak','cup',11,55,1,6,3],
['honey|asal','tbsp',21,64,.1,17,0,'tsp:7'],
['jam|jelly|moraba','tbsp',20,55,.1,13.8,0,'tsp:7'],
['sugar|shekar|ghand','tsp',4,16,0,4,0,'tbsp:12,cube:4'],
['nutella','tbsp',19,100,1,11,5.7],
['granola bar|cereal bar','bar',40,190,3,29,7],
['protein bar','bar',60,210,20,22,7],
['baklava|baghlava','piece',40,170,2.6,20,9],
['gaz','piece',15,60,1,11,1.5],
['sohan','piece',20,100,1.5,12,5],
['zoolbia bamieh|zoolbia|zulbia|bamieh','piece',30,120,1,17,5],
['sholeh zard|sholezard|saffron rice pudding|shole zard','bowl',150,250,4,50,4],
['faloodeh|faloude','cup',200,230,.5,55,.5],
['rice pudding|shir berenj','bowl',200,260,7,45,6],
['muffin','medium',115,420,6,55,20],
['brownie','piece',60,240,3,32,12],
['coke|coca cola|cola|pepsi|coca','can',330,139,0,35,0,'bottle:500,glass:250','ml'],
['diet coke|coke zero|pepsi max|diet soda|zero','can',330,1,0,0,0,'bottle:500','ml'],
['soda|soft drink|fanta|sprite|7up|nooshabeh','can',330,145,0,37,0,'bottle:500,glass:250','ml'],
['orange juice|juice|apple juice|ab porteghal|abmiveh|ab miveh','glass',250,112,1.7,26,.5,'bottle:330','ml'],
['coffee|black coffee|americano|ghahveh','cup',240,2,.3,0,0,'','ml'],
['espresso','shot',30,3,.1,.5,.2,'','ml'],
['latte|cafe latte','cup',350,190,12,18,7,'','ml'],
['flat white','cup',240,120,7,9.5,6,'','ml'],
['cappuccino','cup',240,110,6,9,5.5,'','ml'],
['iced coffee','cup',350,120,3,20,3,'','ml'],
['tea|chai|black tea|green tea','cup',240,2,0,.5,0,'glass:200','ml'],
['hot chocolate|cocoa','cup',240,190,8,27,6,'','ml'],
['smoothie','glass',350,200,3,45,1,'','ml'],
['milkshake|shake','glass',400,450,11,70,14,'','ml'],
['energy drink|red bull|monster|hype','can',250,110,0,27,0,'','ml'],
['beer','can',330,145,1.6,13,0,'bottle:500','ml'],
['malt drink|non alcoholic beer|delester|istak','can',330,90,1,21,0,'bottle:500','ml'],
['wine','glass',150,125,.1,3.8,0,'','ml'],
['water|sparkling water|soda water|ab','glass',250,0,0,0,0,'bottle:500','ml'],
['olive oil|oil|cooking oil|vegetable oil|roghan','tbsp',14,124,0,0,14,'tsp:5'],
['mayonnaise|mayo','tbsp',14,94,.1,.1,10.3],
['ketchup','tbsp',17,17,.2,4.5,0],
['rice cake|rice cakes','cake',9,35,.7,7.3,.3]
);
MACRO_FOODS.push(
['halva|halva ardeh|persian halva|halvah','serving',60,290,3,38,14],
['fereni|ferni|rice flour pudding','bowl',200,220,6,36,6],
['cake yazdi|yazdi cake|keyk yazdi','piece',50,210,3,26,11],
['sekanjabin|sekanjabin drink|mint vinegar syrup','glass',250,100,0,26,0,'','ml'],
['noon panir sabzi|nan panir sabzi|bread cheese and herbs|nun panir sabzi','serving',150,330,13,40,13],
['yatimcheh|yatimche','bowl',250,200,4,18,13],
['kabab tabei|kebab tabei|pan kebab|kabab tabe i','serving',200,450,28,6,35],
['shakshuka|shakshouka','serving',250,280,15,14,18],
['shami|shami kabab|shami kebab','piece',70,170,9,10,10],
['baghali|fava beans|broad beans|baghala|boiled fava','cup',170,187,13,33,.7],
['laboo|beetroot|beet|beets|chogondar','medium',82,35,1.3,8,.1]
);

/* Persian names: the first is shown, the rest are other ways people write it. Keyed by each food's first English name. */
var MACRO_FA={
'egg':'تخم مرغ|تخممرغ|تخم مرغ آب پز|تخم مرغ عسلی|تخم مرغ سرخ کرده|نیمرو|تخم مرغ نیمرو',
'egg white':'سفیده تخم مرغ|سفیده','omelette':'املت|املت گوجه|املت پنیر','milk':'شیر','whole milk':'شیر پرچرب','skim milk':'شیر کم چرب|شیر بدون چربی',
'chocolate milk':'شیر کاکائو|شیرکاکائو','yogurt':'ماست|ماست ساده','greek yogurt':'ماست یونانی|ماست چکیده','doogh':'دوغ','kashk':'کشک',
'cheese':'پنیر زرد|پنیر گودا|پنیر چدار|پنیر ورقه ای','white cheese':'پنیر|پنیر سفید|پنیر لیقوان|پنیر فتا|پنیر تبریز|پنیر ایرانی','mozzarella':'پنیر موزارلا|موزارلا|پنیر پیتزا',
'cream cheese':'پنیر خامه ای','cottage cheese':'پنیر کاتیج','butter':'کره','ice cream':'بستنی|بستنی وانیلی','saffron ice cream':'بستنی سنتی|بستنی زعفرانی',
'whey protein':'پروتئین وی|پودر پروتئین|شیک پروتئین','bread':'نان تست|تست|نان سفید|نون تست','whole wheat bread':'نان سبوس دار|نان جو','lavash':'لواش|نان لواش|نون لواش',
'sangak':'سنگک|نان سنگک|نون سنگک','barbari':'بربری|نان بربری|نون بربری','taftoon':'تافتون|نان تافتون|نون تافتون','noon':'نان|نون','naan':'نان هندی','pita':'نان پیتا|پیتا',
'baguette':'باگت|نان باگت|نان فرانسوی','tortilla':'تورتیلا|نان تورتیلا','bagel':'بیگل','croissant':'کروسان','bun':'نان همبرگر|نان رول',
'rice':'برنج|برنج پخته|برنج سفید','chelo':'چلو|پلو|کته|برنج ایرانی|چلوی زعفرانی','brown rice':'برنج قهوه ای','tahdig':'ته دیگ|تهدیگ','pasta':'پاستا|اسپاگتی|پنه|رشته فرنگی',
'spaghetti bolognese':'ماکارونی|ماکارانی|ماکارونی با گوشت|اسپاگتی بلونز','mac and cheese':'ماکارونی پنیری|مک اند چیز','pasta alfredo':'پاستا آلفردو|آلفردو','lasagna':'لازانیا',
'oats':'جو دوسر|جودوسر','oatmeal':'اوتمیل|فرنی جو دوسر|جو دوسر پخته','cereal':'کورن فلکس|کورنفلکس|غلات صبحانه','granola':'گرانولا|موسلی','pancake':'پنکیک','waffle':'وافل',
'potato':'سیب زمینی|سیبزمینی|سیب زمینی آب پز','fries':'سیب زمینی سرخ کرده|فرنچ فرایز|سیب سرخ کرده','mashed potato':'پوره سیب زمینی|پوره','sweet potato':'سیب زمینی شیرین',
'couscous':'کوسکوس','quinoa':'کینوا','corn':'ذرت|بلال|ذرت مکزیکی',
'chicken breast':'سینه مرغ|فیله مرغ|مرغ گریل','chicken thigh':'ران مرغ','chicken':'مرغ|مرغ پخته|مرغ آب پز','fried chicken':'مرغ سوخاری|سوخاری|مرغ سرخ کرده',
'chicken nuggets':'ناگت|ناگت مرغ','chicken wings':'بال مرغ|بال','steak':'استیک|گوشت گاو|گوشت گوساله|فیله گوساله','ground beef':'گوشت چرخ کرده|چرخ کرده',
'lamb':'گوشت|گوشت گوسفند|گوشت قرمز|گوشت گوسفندی','lamb chops':'شیشلیک|دنده گوسفندی|دنده','koobideh':'کباب کوبیده|کوبیده|کباب','joojeh kabab':'جوجه کباب|جوجه|کباب جوجه',
'kabab barg':'کباب برگ|برگ','chelo kabab':'چلو کباب|چلوکباب','kabab torsh':'کباب ترش','jigar':'جگر|جیگر|کباب جگر','shawarma':'شاورما|شاورمای مرغ',
'doner kebab':'دونر کباب|دونر|دنر کباب|دنر','falafel':'فلافل','falafel wrap':'ساندویچ فلافل','burger':'همبرگر|برگر','cheeseburger':'چیزبرگر|چیز برگر',
'hot dog':'هات داگ|هاتداگ','sausage':'سوسیس','sosis bandari':'سوسیس بندری|ساندویچ سوسیس','bacon':'بیکن','ham':'ژامبون','turkey breast':'بوقلمون|سینه بوقلمون|ژامبون بوقلمون',
'salmon':'سالمون|ماهی سالمون|ماهی آزاد','tuna':'تن ماهی|کنسرو تن ماهی|تن','tuna in water':'تن ماهی در آب|تن ماهی رژیمی','shrimp':'میگو',
'fish':'ماهی|ماهی کبابی|ماهی سفید|ماهی قزل آلا|قزل آلا','fried fish':'ماهی سرخ کرده','fish and chips':'فیش اند چیپس','kotlet':'کتلت|کتلت گوشت',
'kuku sabzi':'کوکو سبزی|کوکو','kuku sibzamini':'کوکو سیب زمینی','meatballs':'کوفته قلقلی|قلقلی|میت بال','koofteh tabrizi':'کوفته تبریزی|کوفته','dolmeh':'دلمه|دلمه برگ مو',
'ghormeh sabzi':'قورمه سبزی|قرمه سبزی|قورمه|قرمه|خورش قورمه سبزی|خورش قرمه سبزی','gheymeh':'قیمه|خورش قیمه|قیمه سیب زمینی','fesenjan':'فسنجان|فسنجون|خورش فسنجان',
'khoresh bademjan':'خورش بادمجان|خورش بادمجون|خورشت بادمجان','khoresh karafs':'خورش کرفس|خورشت کرفس','khoresh':'خورش|خورشت','abgoosht':'آبگوشت|دیزی|آب گوشت',
'ash reshteh':'آش رشته|آش','halim':'حلیم|حلیم گندم','adasi':'عدسی|سوپ عدس','kaleh pacheh':'کله پاچه|کلهپاچه','lubia polo':'لوبیا پلو|لوبیاپلو','adas polo':'عدس پلو|عدسپلو',
'zereshk polo ba morgh':'زرشک پلو با مرغ|زرشک پلو|زرشکپلو','baghali polo ba mahicheh':'باقالی پلو با ماهیچه|باقالی پلو|باقلا پلو|ماهیچه',
'sabzi polo ba mahi':'سبزی پلو با ماهی|سبزی پلو|سبزیپلو','tahchin':'ته چین|تهچین','estamboli polo':'استامبولی|استانبولی|استامبولی پلو|دمی گوجه',
'kashk bademjan':'کشک بادمجان|کشک بادمجون','mirza ghasemi':'میرزا قاسمی|میرزاقاسمی','salad shirazi':'سالاد شیرازی','olivieh':'الویه|سالاد الویه',
'mast o khiar':'ماست و خیار|ماست خیار','borani':'بورانی|بورانی اسفناج|بورانی بادمجان','sabzi khordan':'سبزی خوردن|سبزی','torshi':'ترشی|خیارشور|خیار شور',
'pizza':'پیتزا|پیتزا مخلوط','pepperoni pizza':'پیتزا پپرونی','chicken sandwich':'ساندویچ مرغ','tuna sandwich':'ساندویچ تن ماهی','egg sandwich':'ساندویچ تخم مرغ',
'cheese sandwich':'ساندویچ پنیر','peanut butter sandwich':'ساندویچ کره بادام زمینی','grilled cheese':'ساندویچ پنیر داغ','avocado toast':'تست آووکادو','sandwich':'ساندویچ|ساندویچ کلاب',
'burrito':'بوریتو','taco':'تاکو','sushi':'سوشی','fried rice':'برنج سرخ کرده|فرایدرایس','ramen':'رامن|سوپ نودل','instant noodles':'نودل|نودل فوری|اندومی|نودالیت',
'chicken curry':'مرغ کاری|خوراک مرغ کاری|کاری','biryani':'بریانی','caesar salad':'سالاد سزار','salad':'سالاد|سالاد سبز|سالاد فصل','salad dressing':'سس سالاد|سس',
'soup':'سوپ|سوپ سبزیجات','chicken soup':'سوپ مرغ|سوپ جو','hummus':'حمص|هوموس','apple':'سیب','banana':'موز','orange':'پرتقال|پرتغال','tangerine':'نارنگی',
'dates':'خرما','grapes':'انگور','watermelon':'هندوانه|هندونه','melon':'خربزه|طالبی|گرمک','strawberries':'توت فرنگی|توتفرنگی','blueberries':'بلوبری',
'cherries':'گیلاس|آلبالو','pomegranate':'انار','pomegranate seeds':'دانه انار|انار دانه شده','peach':'هلو','pear':'گلابی','kiwi':'کیوی','mango':'انبه',
'pineapple':'آناناس','persimmon':'خرمالو','fig':'انجیر','apricot':'زردآلو|زردالو','raisins':'کشمش','dried fruit':'میوه خشک|برگه|برگه زردآلو',
'cucumber':'خیار','tomato':'گوجه|گوجه فرنگی|گوجهفرنگی','carrot':'هویج','broccoli':'بروکلی|کلم بروکلی','spinach':'اسفناج','lettuce':'کاهو','onion':'پیاز',
'bell pepper':'فلفل دلمه|فلفل دلمه ای|فلفل','mushrooms':'قارچ','eggplant':'بادمجان|بادمجون','fried eggplant':'بادمجان سرخ کرده|بادمجون سرخ کرده','avocado':'آووکادو|اووکادو',
'olives':'زیتون','green beans':'لوبیا سبز','peas':'نخود فرنگی|نخودفرنگی','lentils':'عدس','chickpeas':'نخود','beans':'لوبیا|لوبیا قرمز|لوبیا چیتی','tofu':'توفو',
'almonds':'بادام','walnuts':'گردو','pistachios':'پسته','peanuts':'بادام زمینی|بادامزمینی','cashews':'بادام هندی','mixed nuts':'آجیل|آجیل مخلوط',
'sunflower seeds':'تخمه|تخمه آفتابگردان','peanut butter':'کره بادام زمینی','tahini':'ارده|ارده کنجد','chocolate':'شکلات|شکلات شیری','dark chocolate':'شکلات تلخ',
'cookie':'بیسکویت|کوکی|کلوچه','cake':'کیک|کیک شکلاتی','donut':'دونات','crisps':'چیپس|چیپس سیب زمینی','popcorn':'پاپ کورن|پاپکورن|پفک','honey':'عسل','jam':'مربا',
'sugar':'شکر|قند|نبات','nutella':'نوتلا','granola bar':'گرانولا بار','protein bar':'پروتئین بار','baklava':'باقلوا','gaz':'گز','sohan':'سوهان',
'zoolbia bamieh':'زولبیا بامیه|زولبیا|بامیه','sholeh zard':'شله زرد|شلهزرد','faloodeh':'فالوده|فالوده شیرازی','rice pudding':'شیر برنج|شیربرنج','muffin':'مافین|کاپ کیک',
'brownie':'براونی','coke':'نوشابه|کوکا|کوکاکولا|پپسی|نوشابه مشکی','diet coke':'نوشابه رژیمی|کوکا زیرو|نوشابه زیرو','soda':'نوشابه زرد|فانتا|اسپرایت|سون آپ|نوشابه گازدار',
'orange juice':'آب پرتقال|آبمیوه|آب میوه|آب سیب','coffee':'قهوه|قهوه تلخ|آمریکانو','espresso':'اسپرسو','latte':'لاته|کافه لاته','flat white':'فلت وایت','cappuccino':'کاپوچینو',
'iced coffee':'آیس کافی|قهوه سرد','tea':'چای|چایی|چای سبز','hot chocolate':'هات چاکلت','smoothie':'اسموتی','milkshake':'شیک|میلک شیک','energy drink':'انرژی زا|نوشیدنی انرژی زا|ردبول|هایپ',
'beer':'آبجو','malt drink':'ماءالشعیر|دلستر|ایستک|آبجو بدون الکل','wine':'شراب','water':'آب|آب معدنی|آب گازدار','olive oil':'روغن زیتون|روغن|روغن مایع',
'mayonnaise':'سس مایونز|مایونز','ketchup':'سس گوجه|کچاپ|سس کچاپ','rice cake':'کیک برنجی|رایس کیک',
'halva':'حلوا','fereni':'فرنی','cake yazdi':'کیک یزدی','sekanjabin':'سکنجبین|شربت سکنجبین','noon panir sabzi':'نان پنیر سبزی|نون پنیر سبزی|نان و پنیر و سبزی|نان و پنیر',
'yatimcheh':'یتیمچه','kabab tabei':'کباب تابه ای|کباب تابهای','shakshuka':'شکشوکا','shami':'شامی|شامی کباب','baghali':'باقالی|باقلا|باقالی پخته','laboo':'لبو|چغندر'
};

/* ---------- the parser: "2 eggs, toast and a flat white" / "دو تا تخم مرغ و یک لیوان چای" → items with numbers ---------- */
var MacroFoods=(function(){
  var NUM0={a:1,an:1,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,half:.5,couple:2,few:3,dozen:12,
    'یک':1,'یه':1,'یدونه':1,'یکی':1,'دو':2,'دوتا':2,'سه':3,'سهتا':3,'چهار':4,'چهارتا':4,'پنج':5,'پنجتا':5,'شش':6,'شیش':6,'هفت':7,'هشت':8,'نه':9,'ده':10,'یازده':11,'دوازده':12,
    'نصف':.5,'نیم':.5,'نصفه':.5,'چند':3,'چندتا':3};
  var FRAC={'½':.5,'¼':.25,'¾':.75,'⅓':1/3,'⅔':2/3};
  var UA0={cup:'cup',cups:'cup',mug:'cup',mugs:'cup',bowl:'bowl',bowls:'bowl',plate:'plate',plates:'plate',slice:'slice',slices:'slice',piece:'piece',pieces:'piece',pc:'piece',pcs:'piece',
    handful:'handful',handfuls:'handful',scoop:'scoop',scoops:'scoop',glass:'glass',glasses:'glass',can:'can',cans:'can',bottle:'bottle',bottles:'bottle',
    tbsp:'tbsp',tbs:'tbsp',tablespoon:'tbsp',tablespoons:'tbsp',tsp:'tsp',teaspoon:'tsp',teaspoons:'tsp',spoon:'tbsp',spoons:'tbsp',
    serving:'serving',servings:'serving',portion:'serving',portions:'serving',skewer:'skewer',skewers:'skewer',sikh:'skewer',
    bar:'bar',bars:'bar',shot:'shot',shots:'shot',square:'square',squares:'square',sheet:'sheet',sheets:'sheet',bag:'bag',bags:'bag',
    pack:'pack',packs:'pack',packet:'pack',packets:'pack',cube:'cube',cubes:'cube',fillet:'fillet',fillets:'fillet',wrap:'wrap',wraps:'wrap',
    sandwich:'sandwich',sandwiches:'sandwich',breast:'breast',breasts:'breast',thigh:'thigh',thighs:'thigh',link:'link',links:'link',chop:'chop',chops:'chop',ladle:'ladle',
    'بشقاب':'plate','پرس':'serving','کاسه':'bowl','لیوان':'glass','فنجان':'cup','فنجون':'cup','استکان':'estekan','قاشق':'tbsp','تکه':'piece','تیکه':'piece','قطعه':'piece',
    'برش':'slice','ورق':'sheet','مشت':'handful','سیخ':'skewer','اسکوپ':'scoop','پیمانه':'cup','قوطی':'can','بطری':'bottle','شیشه':'bottle','بسته':'pack','پاکت':'pack',
    'حبه':'cube','کفگیر':'kafgir','ملاقه':'ladle'};
  var SIZE0={small:.7,little:.7,mini:.5,medium:1,regular:1,normal:1,large:1.35,big:1.35,huge:1.7,double:2,
    'کوچک':'small','کوچیک':'small','ریز':'small','متوسط':'medium','بزرگ':'large','گنده':'large','درشت':'large','دوبل':'double'};
  var SIZEV={small:.7,little:.7,mini:.5,medium:1,regular:1,normal:1,large:1.35,big:1.35,huge:1.7,double:2};
  var GEN={cup:240,bowl:300,plate:350,slice:30,handful:30,scoop:30,glass:250,can:330,bottle:500,tbsp:15,tsp:5,shot:30,square:10,cube:4,pack:85,bag:28,estekan:110,kafgir:90,ladle:200};
  var MASS0={g:1,gr:1,gram:1,grams:1,gm:1,kg:1000,kilo:1000,kilos:1000,ml:1,cl:10,l:1000,liter:1000,liters:1000,litre:1000,litres:1000,oz:28.35,ounce:28.35,ounces:28.35,lb:453.6,lbs:453.6,pound:453.6,pounds:453.6,
    'گرم':1,'گرمی':1,'کیلو':1000,'کیلوگرم':1000,'کیلویی':1000,'لیتر':1000};
  var FILL0={of:1,the:1,some:1,'تا':1,'عدد':1,'دونه':1,'دانه':1,'از':1,'ها':1,'های':1,'رو':1,'را':1,'هم':1};
  var AND0=['and','with','plus','also','then','n','w','و','با','بعد','بعدش','همراه'];
  var MULTI0=[['قاشق چای خوری','tsp'],['قاشق چایخوری','tsp'],['قاشق غذا خوری','tbsp'],['قاشق غذاخوری','tbsp'],['قاشق سوپ خوری','tbsp'],['کف دست','handful'],['میلی لیتر','ml'],['سی سی','ml'],['کیلو گرم','kg']];
  var NOPL={large:1,medium:1,small:1,half:1,tbsp:1,tsp:1,'100 g':1};
  var WEAK={meat:1,seeds:1,oil:1,ab:1,zero:1,shake:1,juice:1,soda:1,herbs:1,dressing:1,pepper:1,nuts:1,pure:1,stew:1,khoresh:1,noon:1,nan:1,mash:1,coca:1,mahi:1,gusht:1,morgh:1,liver:1,wing:1,wings:1,date:1,dates:1};
  var FU_FA={large:'عدد',medium:'عدد',small:'عدد',unit:'عدد',cup:'فنجان',bowl:'کاسه',plate:'بشقاب',slice:'برش',piece:'تکه',handful:'مشت',scoop:'اسکوپ',glass:'لیوان',can:'قوطی',bottle:'بطری',
    tbsp:'قاشق غذاخوری',tsp:'قاشق چای‌خوری',serving:'پرس',skewer:'سیخ',bar:'عدد',shot:'شات',square:'تکه',sheet:'ورق',bag:'بسته',pack:'بسته',cube:'حبه',fillet:'فیله',wrap:'عدد',
    sandwich:'عدد',breast:'عدد',thigh:'عدد',link:'عدد',chop:'تکه',kafgir:'کفگیر',estekan:'استکان',ladle:'ملاقه',half:'نصف',g:'گرم',ml:'میلی‌لیتر'};
  var SZ_FA={small:'کوچک',little:'کوچک',mini:'کوچک',large:'بزرگ',big:'بزرگ',huge:'خیلی بزرگ',double:'دوبل'};
  var DIG={fa:'۰۱۲۳۴۵۶۷۸۹',ar:'٠١٢٣٤٥٦٧٨٩'};
  var CUR='en',LX=null,NUMW,UA,SIZE,MASS,FILL,AND,MULTI,ANDRE,COMP,IDX=[];
  function letters(s){return String(s||'').toLowerCase().replace(/[۰-۹]/g,function(d){return String(d.charCodeAt(0)-1776);}).replace(/[٠-٩]/g,function(d){return String(d.charCodeAt(0)-1632);})
    .replace(/٫/g,'.').replace(/[،؛]/g,',').replace(/ي/g,'ی').replace(/ك/g,'ک').replace(/ة/g,'ه').replace(/ى/g,'ی').replace(/[ًٌٍَُِّْٰـ]/g,'')
    .normalize('NFD').replace(/[̀-ͯٓ-ٕ]/g,'').replace(/ı/g,'i').replace(/ß/g,'ss').replace(/ё/g,'е').replace(/‌/g,' ');}
  function key(s){return letters(s).replace(/(\d+)\s*\/\s*(\d+)/g,function(x,a,b){return +b?String(Math.round(a/b*100)/100):x;})
    .replace(/[’'`]/g,'').replace(/(\d),(\d)/g,'$1.$2').replace(/[^a-z0-9.½¼¾⅓⅔Ѐ-ӿ؀-ۿ]+/g,' ').replace(/(^|[^0-9])\.|\.(?![0-9])/g,'$1 ')
    .replace(/(\d)([^\d\s.½¼¾⅓⅔])/g,'$1 $2').replace(/\s+/g,' ').trim();}
  function esc(w){return w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}
  function sing(w){if(w.length<=3||/[^a-z]/.test(w))return w;if(/ies$/.test(w))return w.slice(0,-3)+'y';if(/(ch|sh|x|ss|o)es$/.test(w))return w.slice(0,-2);if(/[^s]s$/.test(w))return w.slice(0,-1);return w;}
  var FOODS=[];
  (typeof MACRO_FOODS!=='undefined'?MACRO_FOODS:[]).forEach(function(r,i){
    var o={id:i,names:r[0].split('|'),unit:r[1],g:r[2],k:r[3],p:r[4],c:r[5],f:r[6],units:{},ml:r[8]==='ml',tn:{},al:{}};
    (r[7]||'').split(',').forEach(function(x){var kv=x.split(':');if(kv[0])o.units[kv[0].trim()]=Number(kv[1]);});
    o.units[o.unit]=o.g;o.name=o.names[0].charAt(0).toUpperCase()+o.names[0].slice(1);
    var fa=typeof MACRO_FA!=='undefined'&&MACRO_FA[o.names[0]];if(fa){var p=fa.split('|');o.tn.fa=p[0];o.al.fa=p;}
    FOODS.push(o);});
  function merge(a,b){var o={};Object.keys(a).forEach(function(k){o[key(k)||k]=a[k];});Object.keys(b||{}).forEach(function(k){var kk=key(k);if(kk)o[kk]=b[k];});return o;}
  function build(){
    var fp=(LX&&LX.fp)||{};
    NUMW=merge(NUM0,fp.num);FILL=merge(FILL0,(fp.fill||[]).reduce(function(m,w){m[w]=1;return m;},{}));MASS=merge(MASS0,fp.mass);
    UA=merge(UA0,fp.unit);var sz=merge(SIZE0,fp.size);SIZE={};Object.keys(sz).forEach(function(k){var v=sz[k];SIZE[k]=typeof v==='number'?v:SIZEV[v]!=null?SIZEV[v]:1;SIZE['@'+k]=typeof v==='string'?v:k;});
    AND=AND0.concat((fp.and||[]).map(key)).filter(Boolean);var AS={};AND.forEach(function(w){AS[w]=1;});
    ANDRE=new RegExp('(^|\\s)(?:'+AND.map(esc).join('|')+')(?=\\s|$)','g');
    MULTI=MULTI0.concat(fp.multi||[]).map(function(m){return [new RegExp('(^|\\s)'+esc(letters(m[0])).replace(/ /g,'\\s+')+'(?=\\s|$)','g'),m[1]];});
    IDX=[];FOODS.forEach(function(o){
      o.names.forEach(function(a){var k=key(a);IDX.push({a:k,w:k.split(' '),o:o,weak:!!WEAK[k]||(k.indexOf(' ')<0&&!!UA[k])||k.length<3});});
      [o.al.fa,CUR!=='en'&&CUR!=='fa'?o.al[CUR]:null].forEach(function(list){(list||[]).forEach(function(a){var k=key(a);if(!k)return;IDX.push({a:k,w:k.split(' '),o:o,weak:(k.indexOf(' ')<0&&!!UA[k])||k.length<3});});});});
    IDX.sort(function(x,y){return y.a.length-x.a.length;});
    COMP=[];IDX.forEach(function(x){if(x.w.length>1&&x.w.some(function(w){return AS[w];})&&COMP.indexOf(x.a)<0)COMP.push(x.a);});
  }
  function useLang(code,L){CUR=code||'en';LX=(CUR!=='en'&&CUR!=='fa')?(L||null):null;
    if(LX&&LX.food&&!LX._foods){LX._foods=1;FOODS.forEach(function(o){var v=LX.food[o.names[0]];if(v){var p=String(v).split('|');o.tn[CUR]=p[0];o.al[CUR]=p;}});}
    build();}
  function segment(words){var r=seg1(words,false);if(!r.length)r=seg1(words,true);
    if(!r.length&&words.some(function(w){return /[؀-ۿ]/.test(w);})){var ar=words.map(function(w){return /^و[؀-ۿ]{2,}/.test(w)?w.slice(1):w;}).map(function(w){return /^(ال|بال|لل)[؀-ۿ]{2,}/.test(w)?w.replace(/^(ال|بال|لل)/,''):w;});
      r=seg1(ar,false);if(!r.length)r=seg1(ar,true);}
    return r;}
  function seg1(words,weakOk){
    var cov=words.map(function(){return false;}),sg=words.map(sing),spans=[];
    for(var x=0;x<IDX.length;x++){var ax=IDX[x],n=ax.w.length;if(ax.weak&&(!weakOk||spans.length))continue;
      for(var i=0;i+n<=words.length;i++){var ok=true;
        for(var j=0;j<n;j++){if(cov[i+j]||(words[i+j]!==ax.w[j]&&sg[i+j]!==ax.w[j])){ok=false;break;}}
        if(ok){for(var j2=0;j2<n;j2++)cov[i+j2]=true;spans.push({o:ax.o,i:i,n:n});}}}
    return spans.sort(function(a,b){return a.i-b.i;});
  }
  function lev(a,b){if(a===b)return 0;var m=a.length,n=b.length,d=[],i,j;for(i=0;i<=n;i++)d[i]=i;
    for(i=1;i<=m;i++){var prev=d[0];d[0]=i;for(j=1;j<=n;j++){var tmp=d[j];d[j]=Math.min(d[j]+1,d[j-1]+1,prev+(a[i-1]===b[j-1]?0:1));prev=tmp;}}return d[n];}
  function suggest(q,limit){
    q=key(q).split(' ').filter(function(w){return !(NUMW[w]!=null||UA[w]||SIZE[w]!=null||MASS[w]||FILL[w]||/^[\d.½¼¾⅓⅔]+$/.test(w));}).join(' ');
    if(q.length<2)return [];var out=[],seen={};
    IDX.forEach(function(x){var a=x.a,s=0;
      if(a.indexOf(q)===0)s=3;else if((' '+a).indexOf(' '+q)>=0)s=2.5;else if(q.length>=3&&a.indexOf(q)>=0)s=2;
      else if(q.length>=4){var d=Math.min(lev(q,a),lev(q,a.slice(0,q.length)));if(d<=(q.length>=7?2:1))s=1.6-d*.3;}
      if(s>0){var pv=seen[x.o.id];if(!pv)out.push(seen[x.o.id]={o:x.o,s:s,a:a});else if(pv.s<s){pv.s=s;pv.a=a;}}});
    out.sort(function(a,b){return b.s-a.s||a.a.length-b.a.length;});return out.slice(0,limit||4).map(function(x){return x.o;});
  }
  function qStr(q){var w=Math.floor(q+1e-9),fr=q-w,sym=Math.abs(fr-.5)<.01?'½':Math.abs(fr-.25)<.01?'¼':Math.abs(fr-.75)<.01?'¾':null;
    if(sym)return (w?w:'')+sym;return String(Math.round(q*100)/100);}
  function numL(q){var s=qStr(q),d=DIG[CUR];if(d)return s.replace(/\d/g,function(x){return d[x];}).replace(/\./g,'٫');return CUR==='en'?s:s.replace('.',',');}
  function plural(u,q){if(q<=1||NOPL[u])return u;var w=u.split(' '),h=w[0];h=/(s|sh|ch|x)$/.test(h)?h+'es':/[^aeiou]y$/.test(h)?h.slice(0,-1)+'ies':h+'s';w[0]=h;return w.join(' ');}
  function tbl(){return CUR==='fa'?FU_FA:(LX&&LX.fu)||{};}
  function pick(v,q){return Array.isArray(v)?(q>1?v[1]:v[0]):v;}
  function uName(u,q){if(CUR==='en')return plural(u,q);var tb=tbl(),v=tb[u];if(v==null)v=tb.unit;if(v==null)return plural(u,q);return pick(v,q);}
  function szName(s){if(CUR==='en')return s;var tb=CUR==='fa'?SZ_FA:(LX&&LX.sz)||{};return tb[s]||'';}
  function amt(g,o){var u=o.ml?'ml':'g',lb=CUR==='en'?u:pick(tbl()[u]||u,1);return numL(Math.round(g))+' '+lb;}
  function title(o){return CUR==='en'?o.name:(o.tn[CUR]||o.name);}
  function unitName(o){return o.unit==='100 g'?numL(100)+' '+pick(CUR==='en'?'g':tbl().g||'g',1):uName(o.unit,1);}
  function make(o,qty,unit,size,grams){
    var g,label,sf=1;qty=qty==null?1:qty;
    if(size&&o.units[size]){unit=size;size=null;}
    if(size&&SIZEV[size]!=null)sf=SIZEV[o.unit]!=null?SIZEV[size]/SIZEV[o.unit]:SIZEV[size];
    var sz=size&&sf!==1&&SIZEV[o.unit]==null?size+' ':'';
    function lab(u){var noun=o.names.indexOf(u)>=0||o.names.indexOf(u+'s')>=0;
      if(CUR==='en')return qStr(qty)+' '+(noun?'':sz+plural(u,qty)+' ')+'('+amt(g,o)+')';
      var un,szw='';if(SIZEV[u]!=null){un=uName('unit',qty);szw=size&&u===size&&!/^(medium|regular|normal)$/.test(u)?szName(u):'';}
      else{un=noun?uName('unit',qty):uName(u,qty);szw=sz?szName(size):'';}
      return numL(qty)+(un?' '+un:'')+(szw?' '+szw:'')+' ('+amt(g,o)+')';}
    if(grams!=null){g=grams;label=amt(g,o);}
    else if(o.unit==='100 g'&&!(unit&&(o.units[unit]||GEN[unit]))){g=qty*100*sf;label=amt(g,o);}
    else if(unit&&o.units[unit]){g=qty*o.units[unit]*sf;label=lab(unit);}
    else if(unit&&GEN[unit]){g=qty*GEN[unit]*sf;label=lab(unit);}
    else{g=qty*o.g*sf;label=lab(size&&SIZEV[o.unit]!=null?size:o.unit);}
    var m=g/o.g,sep=CUR==='fa'||CUR==='ar'?'، ':', ';
    return {o:o,qty:qty,unit:unit||null,size:size||null,grams:grams==null?null:grams,g:g,portion:label.replace(/\s+/g,' ').trim(),name:(title(o)+sep+label).replace(/\s+/g,' ').trim(),
      kcal:Math.round(o.k*m),p:Math.round(o.p*m),c:Math.round(o.c*m),f:Math.round(o.f*m)};
  }
  function numTok(tk){if(FRAC[tk]!=null)return FRAC[tk];var mix=/^(\d+)([½¼¾⅓⅔])$/.exec(tk);if(mix)return +mix[1]+FRAC[mix[2]];
    if(/^\d+(\.\d+)?$/.test(tk))return Number(tk);var x=/^x(\d+(\.\d+)?)$/.exec(tk);if(x)return Number(x[1]);return null;}
  function fromWords(o,words){
    var qty=null,tent=false,unit=null,size=null,grams=null;
    for(var i=0;i<words.length;i++){var w=words[i];if(!w)continue;var n=numTok(w);
      if(n!=null&&MASS[words[i+1]]){grams=(grams||0)+n*MASS[words[i+1]];i++;continue;}
      if(n!=null){if(tent||qty==null)qty=n;else qty*=n;tent=false;continue;}
      if(w==='a'||w==='an'){if(qty==null){qty=1;tent=true;}continue;}
      if(NUMW[w]!=null){if(MASS[words[i+1]]){grams=(grams||0)+NUMW[w]*MASS[words[i+1]];i++;continue;}if(tent||qty==null)qty=NUMW[w];else qty*=NUMW[w];tent=false;continue;}
      if(SIZE[w]!=null){size=SIZE['@'+w]||w;continue;}if(UA[w]){unit=UA[w];continue;}}
    return make(o,qty,unit,size,grams);
  }
  function parse(text,recent,picks){
    var tx=letters(text).replace(/[;+&\n]+/g,',');
    MULTI.forEach(function(m){tx=tx.replace(m[0],'$1'+m[1]+' ');});
    tx=tx.replace(/\b(\d+|one|two|three|four) and a half\b/g,function(x,n){return String((NUMW[n]||Number(n))+.5);})
      .replace(/(^|\s)(\d+|یک|دو|سه|چهار|پنج)\s+و\s+نیم(?=\s|$)/g,function(x,p,n){return p+String((NUMW[n]||Number(n))+.5);});
    var prot=[];COMP.forEach(function(a){tx=tx.replace(new RegExp('(^|[\\s,])'+esc(a).replace(/ /g,'\\s+')+'(?=$|[\\s,])','g'),function(m,p){prot.push(a);return p+' qqp'+(prot.length-1)+'qq ';});});
    tx=tx.replace(ANDRE,'$1,');
    var out={items:[],unknown:[]};
    tx.split(',').map(function(s){return s.replace(/qqp(\d+)qq/g,function(x,i){return prot[+i];}).replace(/\s+/g,' ').trim();}).filter(function(s){return /[a-zЀ-ӿ؀-ۿ]/.test(s);})
      .forEach(function(s){
        var k=key(s),words=k.split(' ');
        if(recent)for(var r=0;r<recent.length;r++){if(key(recent[r].name)===k){var R=recent[r];out.items.push({recent:true,src:s,name:R.name,portion:'',kcal:R.kcal,p:R.protein,c:R.carbs,f:R.fat,qty:1});return;}}
        if(picks&&picks[s]!=null){out.items.push(Object.assign(fromWords(FOODS[picks[s]],words),{src:s}));return;}
        var spans=segment(words);
        if(!spans.length){out.unknown.push({text:s,suggest:suggest(s)});return;}
        spans.forEach(function(sp,x){var from=x?spans[x-1].i+spans[x-1].n:0,q=words.slice(from,sp.i);if(x===spans.length-1)q=q.concat(words.slice(sp.i+sp.n));
          out.items.push(Object.assign(fromWords(sp.o,q),{src:s}));});
      });
    return out;
  }
  build();
  return {parse:parse,make:make,suggest:suggest,foods:FOODS,count:FOODS.length,useLang:useLang,title:title,unitName:unitName,key:key};
})();
