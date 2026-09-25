/* Dastpokht kitchen engine: the ingredient and appliance catalog (English, Finglish and Persian names),
   the "say what you have" parser, recipe matching, full-meal timelines and shopping lists. */
var DP_ING=[
// key | English | Persian | group | aliases | English count forms (one/many)
['chicken','Chicken','مرغ','protein','chicken breast|chicken thigh|chicken legs|whole chicken|morgh|murgh|سینه مرغ|ران مرغ|جوجه|مرغ'],
['lamb','Lamb','گوشت گوسفندی','protein','lamb meat|mutton|gusht|goosht|gosht|meat|lamb shank|گوشت|گوشت گوسفند|ماهیچه'],
['beef','Beef','گوشت گوساله','protein','veal|stew meat|beef meat|gusht gusale|گوساله|گوشت گاو'],
['ground meat','Ground meat','گوشت چرخ‌کرده','protein','minced meat|mince|ground beef|ground lamb|hamburger meat|charkh kardeh|gusht charkh kardeh|گوشت چرخ کرده|چرخ کرده'],
['fish','Fish','ماهی','protein','salmon|white fish|fish fillet|trout|mahi|قزل آلا|ماهی قزل آلا'],
['shrimp','Shrimp','میگو','protein','prawns|prawn|meygoo|meigoo'],
['eggs','Eggs','تخم‌مرغ','protein','egg|tokhm morgh|tokhme morgh|tokhmorgh|تخم مرغ','egg|eggs'],
['tuna','Canned tuna','تن ماهی','protein','tuna|ton mahi|tone mahi|کنسرو ماهی'],
['sausage','Sausages','سوسیس','protein','sosis|hot dogs|kalbas|کالباس'],
['kidney beans','Kidney beans','لوبیا قرمز','legume','red beans|black beans|pinto beans|lubia ghermez|loobia ghermez|لوبیا سیاه|لوبیا چیتی'],
['white beans','White beans','لوبیا سفید','legume','navy beans|lubia sefid|loobia sefid'],
['chickpeas','Chickpeas','نخود','legume','chickpea|garbanzo|nokhod|nokhodchi'],
['lentils','Lentils','عدس','legume','lentil|adas'],
['split peas','Yellow split peas','لپه','legume','split pea|lapeh|lape'],
['fava beans','Fava beans','باقالی','legume','broad beans|fava|baghali|baghala|باقلا'],
['green beans','Green beans','لوبیا سبز','legume','string beans|lubia sabz|loobia sabz'],
['peas','Peas','نخودفرنگی','legume','green peas|nokhod farangi|نخود فرنگی'],
['mung beans','Mung beans','ماش','legume','mash|mung'],
['yogurt','Yogurt','ماست','dairy','yoghurt|mast|maast'],
['milk','Milk','شیر','dairy','shir'],
['butter','Butter','کره','dairy','kareh|kare'],
['cheese','Cheese','پنیر','dairy','feta|white cheese|cheddar|mozzarella|parmesan|halloumi|panir|paneer|پنیر سفید|پنیر لیقوان|پنیر پیتزا|پنیر پارمزان'],
['kashk','Kashk','کشک','dairy','whey|kashke'],
['cream','Cream','خامه','dairy','heavy cream|khameh|khame'],
['onion','Onion','پیاز','veg','onions|piaz|piyaz','onion|onions'],
['garlic','Garlic','سیر','veg','seer|sir'],
['tomato','Tomato','گوجه‌فرنگی','veg','tomatoes|gojeh|goje|gojeh farangi|گوجه|گوجه فرنگی','tomato|tomatoes'],
['tomato paste','Tomato paste','رب گوجه','veg','rob|rob gojeh|رب|رب گوجه فرنگی'],
['potato','Potato','سیب‌زمینی','veg','potatoes|sibzamini|sib zamini|سیب زمینی','potato|potatoes'],
['eggplant','Eggplant','بادمجان','veg','eggplants|aubergine|bademjan|bademjoon|badenjan','eggplant|eggplants'],
['zucchini','Zucchini','کدو سبز','veg','courgette|kadoo|kadu|کدو'],
['carrot','Carrot','هویج','veg','carrots|havij','carrot|carrots'],
['cucumber','Cucumber','خیار','veg','cucumbers|khiar|khiyar','cucumber|cucumbers'],
['lettuce','Lettuce','کاهو','veg','kahoo|kahu'],
['spinach','Spinach','اسفناج','veg','esfenaj|esfenaaj'],
['celery','Celery','کرفس','veg','karafs'],
['bell pepper','Bell pepper','فلفل دلمه‌ای','veg','capsicum|sweet pepper|felfel dolmeh|فلفل دلمه','bell pepper|bell peppers'],
['mushrooms','Mushrooms','قارچ','veg','mushroom|gharch|qarch'],
['cabbage','Cabbage','کلم','veg','kalam'],
['cauliflower','Cauliflower','گل‌کلم','veg','gol kalam|گل کلم'],
['okra','Okra','بامیه','veg','bamieh|bamie'],
['radish','Radishes','تربچه','veg','radishes|torobche|torobcheh','radish|radishes'],
['green onion','Green onions','پیازچه','veg','spring onion|scallion|scallions|piazche|piazcheh','green onion|green onions'],
['chili','Chili pepper','فلفل تند','veg','green chili|hot pepper|felfel tond|فلفل سبز'],
['beet','Beetroot','لبو','veg','beet|beets|laboo|labu|چغندر'],
['herbs','Mixed herbs','سبزی','herb','sabzi|fresh herbs|mixed herbs|sabzi ghormeh|sabzi aash|سبزی خورشتی|سبزی آش|سبزی پلویی|سبزی کوکویی|سبزی خوردن'],
['parsley','Parsley','جعفری','herb','jafari'],
['coriander','Coriander','گشنیز','herb','cilantro|geshniz'],
['dill','Dill','شوید','herb','shevid|shivid'],
['mint','Fresh mint','نعناع تازه','herb','mint|naana|nana|نعناع'],
['fenugreek','Fenugreek','شنبلیله','herb','shanbalileh|shambalileh'],
['chives','Chives / leek','تره','herb','leek|leeks|tareh|tare'],
['basil','Basil','ریحان','herb','reyhan|rihan'],
['tarragon','Tarragon','ترخون','herb','tarkhoon|tarkhun'],
['dried mint','Dried mint','نعناع خشک','spice','naana khoshk|nana khoshk'],
['lemon','Lemon','لیمو ترش','fruit','lemons|lime|limes|lemon juice|limoo|limu|ablimoo|آبلیمو|لیمو','lemon|lemons'],
['dried lime','Dried limes','لیموعمانی','fruit','dried limes|black lime|limoo amani|limu omani|لیمو عمانی','dried lime|dried limes'],
['barberries','Barberries','زرشک','fruit','barberry|zereshk'],
['raisins','Raisins','کشمش','fruit','raisin|keshmesh|kishmish'],
['dates','Dates','خرما','fruit','date|khorma','date|dates'],
['walnuts','Walnuts','گردو','fruit','walnut|gerdoo|gerdu|gerdo'],
['pistachios','Pistachios','پسته','fruit','pistachio|pesteh|peste'],
['almonds','Almonds','بادام','fruit','almond|badam'],
['pomegranate molasses','Pomegranate molasses','رب انار','fruit','rob anar|rob-e anar'],
['pomegranate','Pomegranate','انار','fruit','pomegranates|anar'],
['sour grapes','Verjuice','آبغوره','fruit','verjuice|abghooreh|abghoore|ghooreh|غوره'],
['prunes','Prunes','آلو بخارا','fruit','prune|aloo bokhara|aloo|آلو'],
['apple','Apples','سیب','fruit','apples|sib'],
['banana','Bananas','موز','fruit','bananas|moz'],
['orange','Oranges','پرتقال','fruit','oranges|porteghal'],
['rice','Rice','برنج','grain','basmati|jasmine rice|sushi rice|berenj|berenj irani'],
['pasta','Pasta','ماکارونی','grain','spaghetti|macaroni|penne|noodle pasta|makaroni|پاستا|اسپاگتی'],
['bread','Bread','نان','grain','nan|noon|lavash|barbari|sangak|taftoon|toast|pita|لواش|بربری|سنگک|تافتون|نان تست','piece of bread|pieces of bread'],
['flour','Flour','آرد','grain','ard|all purpose flour|آرد سفید'],
['reshteh','Ash noodles (reshteh)','رشته آشی','grain','reshte|ash noodles|رشته|رشته آش'],
['barley','Barley','جو','grain','jo|pearl barley|جو پوست کنده'],
['wheat','Wheat (for halim)','گندم','grain','gandom|cracked wheat'],
['oats','Oats','جو دوسر','grain','oatmeal|rolled oats|jo dosar'],
['rice flour','Rice flour','آرد برنج','grain','ard berenj'],
['breadcrumbs','Breadcrumbs','پودر سوخاری','grain','bread crumbs|pudr sokhari|pudre sokhari'],
['cornstarch','Cornstarch','نشاسته','grain','corn starch|nashasteh|nashaste'],
['saffron','Saffron','زعفران','spice','zafaran|zaferan'],
['turmeric','Turmeric','زردچوبه','spice','zardchoobeh|zardchube|zardchoobe'],
['cinnamon','Cinnamon','دارچین','spice','darchin'],
['cardamom','Cardamom','هل','spice','hel','cardamom pod|cardamom pods'],
['cumin','Cumin','زیره','spice','zireh|zire'],
['advieh','Advieh (Persian spice mix)','ادویه','spice','spice mix|advie|advieh polo|ادویه پلویی'],
['black pepper','Black pepper','فلفل سیاه','spice','pepper|felfel siah|felfel|فلفل'],
['salt','Salt','نمک','spice','namak'],
['sugar','Sugar','شکر','spice','shekar|ghand|قند'],
['rose water','Rose water','گلاب','spice','rosewater|golab'],
['sumac','Sumac','سماق','spice','somagh|somaq'],
['curry powder','Curry powder','پودر کاری','spice','curry|kari|کاری'],
['chili flakes','Chili flakes','پول بیبر','spice','red pepper flakes|felfel ghermez|فلفل قرمز'],
['vinegar','Vinegar','سرکه','pantry','serkeh|serke'],
['honey','Honey','عسل','pantry','asal'],
['jam','Jam','مربا','pantry','moraba|jelly'],
['oil','Cooking oil','روغن','pantry','olive oil|vegetable oil|sunflower oil|roghan|روغن زیتون|روغن مایع|روغن جامد'],
['ghee','Ghee','روغن حیوانی','pantry','roghan heyvani|roghan kermanshahi|روغن کرمانشاهی'],
['tea','Tea','چای','pantry','chai|black tea|چایی'],
['baking powder','Baking powder','بکینگ‌پودر','pantry','baking soda|بکینگ پودر|جوش شیرین'],
['vanilla','Vanilla','وانیل','pantry','vanil'],
['mayonnaise','Mayonnaise','سس مایونز','pantry','mayo|mayonez|مایونز'],
['pickles','Pickles','خیارشور','pantry','pickle|pickled cucumbers|khiarshoor|khiar shoor|خیار شور|ترشی','pickle|pickles'],
['soy sauce','Soy sauce','سس سویا','pantry','soya sauce|soy'],
['ketchup','Ketchup','سس کچاپ','pantry','tomato ketchup|کچاپ|سس گوجه'],
['tortilla','Tortillas','نان تورتیا','grain','tortilla|wraps|wrap|flour tortillas|corn tortillas|tortiya|تورتیا|تورتیلا','tortilla|tortillas'],
['noodles','Noodles','نودل','grain','egg noodles|rice noodles|ramen noodles|instant noodles|noodle|nudel|نودل برنج|نودل تخم‌مرغی'],
['avocado','Avocado','آووکادو','fruit','avocados|avokado|آوکادو','avocado|avocados'],
['peanuts','Peanuts','بادام‌زمینی','fruit','peanut|peanut butter|badam zamini|بادام زمینی|کره بادام زمینی'],
['corn','Sweet corn','ذرت','veg','sweetcorn|maize|corn kernels|zorrat|ذرت شیرین|بلال'],
['tofu','Tofu','توفو','protein','bean curd'],
['ginger','Ginger','زنجبیل','spice','fresh ginger|ginger root|ground ginger|zanjabil|زنجفیل'],
['oregano','Oregano','پونه‌کوهی','spice','dried oregano|pune kuhi|پونه کوهی|اورگانو'],
['paprika','Paprika','پاپریکا','spice','sweet paprika|smoked paprika|paprika powder|پودر پاپریکا'],
['coconut milk','Coconut milk','شیر نارگیل','pantry','coconut cream|shir nargil'],
['mustard','Mustard','خردل','pantry','mustard sauce|dijon|khardal|سس خردل'],
['olives','Olives','زیتون','pantry','olive|black olives|green olives|zeytun|zeitoon','olive|olives'],
['sesame','Sesame','کنجد','pantry','sesame seeds|tahini|sesame paste|sesame oil|konjed|ارده'],
['yeast','Yeast','خمیرمایه','pantry','dry yeast|instant yeast|khamir maye|مخمر|خمیر مایه'],
['nori','Nori seaweed','جلبک نوری','pantry','seaweed|sushi seaweed|nori sheets|جلبک'],
['chocolate','Chocolate','شکلات','pantry','dark chocolate|chocolate chips|cocoa|cocoa powder|shokolat|کاکائو|پودر کاکائو']
];
var DP_APPS=[
['stove','Stove','اجاق گاز','gas|cooker|hob|ojagh|اجاق|گاز'],
['oven','Oven','فر','far|فر گاز|فر برقی'],
['microwave','Microwave','مایکروویو','mikrofer|ماکروفر'],
['rice cooker','Rice cooker','پلوپز','polopaz|پلو پز'],
['pressure cooker','Pressure cooker','زودپز','zoodpaz|زود پز'],
['air fryer','Air fryer','هواپز','airfryer|havapaz|سرخ کن بدون روغن'],
['blender','Blender','مخلوط‌کن','makhlut kon|مخلوط کن'],
['food processor','Food processor','غذاساز','ghazasaz|غذا ساز'],
['grill','Grill / mangal','منقل','mangal|barbecue|bbq|باربیکیو|کباب پز'],
['slow cooker','Slow cooker','آرام‌پز','arampaz|آرام پز'],
['mixer','Mixer','همزن','hamzan|همزن برقی'],
['toaster','Toaster','توستر','toster']
];
var DP_STAPLES=['salt','black pepper','oil','turmeric','sugar'];
var DP_HERBSET=['parsley','coriander','dill','chives','fenugreek','basil','tarragon','mint'];

var Kitchen=(function(){
  var ING={},APP={},IDX=[],AIDX=[],LX={},CUR='en',CONJ0=['and','plus','با','و'],CONJ=CONJ0.slice(),SPLIT=null,FILLX={};
  function normFa(s){return String(s||'').replace(/ي/g,'ی').replace(/ك/g,'ک').replace(/ة/g,'ه').replace(/ى/g,'ی').replace(/[ًٌٍَُِّْٰ]/g,'').replace(/ـ/g,'')
    .replace(/[۰-۹]/g,function(d){return String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d));}).replace(/[٠-٩]/g,function(d){return String('٠١٢٣٤٥٦٧٨٩'.indexOf(d));});}
  function key(s){return normFa(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f\u0653-\u0655]/g,'').replace(/ı/g,'i').replace(/ß/g,'ss').replace(/ё/g,'е')
    .replace(/\u200c/g,' ').replace(/[’'`]/g,'').replace(/[^a-z0-9\u0400-\u04ff\u0600-\u06ff]+/g,' ').replace(/\s+/g,' ').trim();}
  DP_ING.forEach(function(r){var o={k:r[0],en:r[1],fa:r[2],g:r[3],one:null,many:null,al:[r[0],r[1],r[2]].concat((r[4]||'').split('|'))};if(r[5]){var p=r[5].split('|');o.one=p[0];o.many=p[1];}ING[o.k]=o;});
  DP_APPS.forEach(function(r){APP[r[0]]={k:r[0],en:r[1],fa:r[2],al:[r[0],r[1],r[2]].concat((r[3]||'').split('|'))};});
  function esc(w){return w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}
  function build(){IDX=[];AIDX=[];var L=LX[CUR];
    function add(list,arr,k){arr.forEach(function(a){var kk=key(a);if(kk)list.push({a:kk,w:kk.split(' '),k:k});});}
    Object.keys(ING).forEach(function(k){add(IDX,ING[k].al,k);if(L&&L.ing&&L.ing[k])add(IDX,String(L.ing[k]).split('|'),k);});
    Object.keys(APP).forEach(function(k){add(AIDX,APP[k].al,k);if(L&&L.app&&L.app[k])add(AIDX,String(L.app[k]).split('|'),k);});
    IDX.sort(function(a,b){return b.a.length-a.a.length;});AIDX.sort(function(a,b){return b.a.length-a.a.length;});
    CONJ=CONJ0.concat(((L&&L.fp&&L.fp.and)||[]).map(function(w){return key(w);}).filter(Boolean));
    SPLIT=new RegExp('[,،;\\n\\/+&]+|\\s+(?:'+CONJ.map(esc).join('|')+')\\s+','i');
    FILLX={};((L&&L.fp&&L.fp.fill)||[]).concat(Object.keys((L&&L.fp&&L.fp.num)||{})).forEach(function(w){var kk=key(w);if(kk)FILLX[kk]=1;});}
  function useLang(code,L){if(L){LX[code]=L;Object.keys(L.ing||{}).forEach(function(k){if(ING[k])ING[k][code]=String(L.ing[k]).split('|')[0];});
      Object.keys(L.app||{}).forEach(function(k){if(APP[k])APP[k][code]=String(L.app[k]).split('|')[0];});}
    CUR=code;build();}
  build();
  var FILL={a:1,an:1,some:1,of:1,the:1,and:1,few:1,couple:1,little:1,lots:1,lot:1,bit:1,fresh:1,frozen:1,dried:0,kg:1,kilo:1,kilos:1,g:1,gr:1,gram:1,grams:1,bag:1,bags:1,pack:1,packs:1,can:1,cans:1,bunch:1,box:1,bottle:1,jar:1,piece:1,pieces:1,cup:1,cups:1,
    'یک':1,'دو':1,'سه':1,'چهار':1,'پنج':1,'چند':1,'کمی':1,'مقداری':1,'کیلو':1,'گرم':1,'عدد':1,'تا':1,'بسته':1,'قوطی':1,'دسته':1,'کیسه':1,'شیشه':1,'نیم':1,'تازه':1,'هم':1,'دارم':1,'داریم':1,'من':1,'دارم،':1};
  function segment(words){var cov=words.map(function(){return false;}),out=[];
    for(var x=0;x<IDX.length;x++){var it=IDX[x],n=it.w.length;
      for(var i=0;i+n<=words.length;i++){var ok=true;for(var j=0;j<n;j++){if(cov[i+j]||words[i+j]!==it.w[j]){ok=false;break;}}
        if(ok){for(var j2=0;j2<n;j2++)cov[i+j2]=true;out.push({i:i,k:it.k});}}}
    var rest=words.filter(function(w,i){return !cov[i]&&!FILL[w]&&!FILLX[w]&&!/^\d+([.,]\d+)?$/.test(w);});
    return {keys:out.sort(function(a,b){return a.i-b.i;}).map(function(o){return o.k;}),rest:rest};}
  function sing(w){return w.length>3&&/ies$/.test(w)?w.slice(0,-3)+'y':w.length>3&&/(ch|sh|x|o)es$/.test(w)?w.slice(0,-2):w.length>3&&/[^s]s$/.test(w)?w.slice(0,-1):w;}
  function parse(text){
    var parts=key(String(text||'').replace(/[,،;\n\/+&]+/g,' , ')).split(SPLIT),keys=[],custom=[];
    parts.forEach(function(p){var k=key(p);if(!k)return;var words=k.split(' '),s=segment(words);
      if(!s.keys.length){var s2=segment(words.map(sing));if(s2.keys.length)s=s2;}
      if(!s.keys.length||s.rest.length){var ar=words.map(function(w){return /^و[\u0600-\u06ff]{2,}/.test(w)?w.slice(1):w;}).map(function(w){return /^ال[\u0600-\u06ff]{2,}/.test(w)?w.slice(2):w;});
        if(ar.join(' ')!==words.join(' ')){var s3=segment(ar);if(s3.keys.length>s.keys.length)s=s3;}}
      s.keys.forEach(function(x){if(keys.indexOf(x)<0)keys.push(x);});
      if(!s.keys.length){var txt=s.rest.join(' ').trim();if(txt.length>=2&&txt.length<=40&&custom.indexOf(txt)<0)custom.push(txt);}});
    return {keys:keys,custom:custom};
  }
  function parseApps(text){var k=key(text),out=[];k.split(' ');var words=k.split(' ');
    for(var x=0;x<AIDX.length;x++){var it=AIDX[x];if(out.indexOf(it.k)>=0)continue;var s=' '+words.join(' ')+' ';if(s.indexOf(' '+it.a+' ')>=0)out.push(it.k);}return out;}
  function suggest(q,lang,limit){q=key(q);if(q.length<1)return [];var out=[],seen={};
    IDX.forEach(function(x){if(seen[x.k])return;var s=0;if(x.a.indexOf(q)===0)s=3;else if((' '+x.a).indexOf(' '+q)>=0)s=2;else if(q.length>=3&&x.a.indexOf(q)>=0)s=1;
      if(s){seen[x.k]=1;out.push({k:x.k,s:s,l:x.a.length});}});
    out.sort(function(a,b){return b.s-a.s||a.l-b.l;});return out.slice(0,limit||6).map(function(o){return o.k;});}

  /* ---------- recipes ---------- */
  var CACHE={};
  function ingList(spec){if(CACHE[spec])return CACHE[spec];
    var out=String(spec||'').split(';').filter(Boolean).map(function(x){var p=x.split(':');return {keys:p[0].split('|'),qty:p[1]===''||p[1]==null?null:Number(p[1]),unit:p[2]||'',flag:p[3]||''};});
    CACHE[spec]=out;return out;}
  function appGroups(spec){return String(spec||'').split(',').filter(Boolean).map(function(g){return g.split('|');});}
  function haveSet(kitchen){var h={};(kitchen.ingredients||[]).forEach(function(k){h[k]=true;});
    if(h.herbs)['parsley','coriander','dill','chives','fenugreek'].forEach(function(k){h[k]=true;});
    if(DP_HERBSET.filter(function(k){return h[k];}).length>=2)h.herbs=true;
    if(h.lemon)h['sour grapes']=h['sour grapes']||false;
    if(h['sour grapes'])h.lemon=true;
    if(kitchen.staples!==false)DP_STAPLES.forEach(function(k){h[k]=true;});
    return h;}
  function match(r,kitchen,h){
    h=h||haveSet(kitchen);var apps={};(kitchen.appliances||[]).forEach(function(a){apps[a]=true;});
    var have=[],missing=[],optional=[],staple=[];
    ingList(r.i).forEach(function(x){var ok=x.keys.some(function(k){return h[k];});
      if(x.flag==='s'){staple.push(x);if(!ok)missing.push(x);return;}
      if(x.flag==='o'){optional.push(Object.assign({have:ok},x));return;}
      (ok?have:missing).push(x);});
    var needApps=appGroups(r.app).filter(function(g){return !g.some(function(a){return apps[a];});});
    return {r:r,have:have,missing:missing,optional:optional,appsOk:!needApps.length,needApps:needApps,
      ready:!missing.length&&!needApps.length,score:have.length/Math.max(1,have.length+missing.length)};
  }
  function rank(list,kitchen,opts){opts=opts||{};var h=haveSet(kitchen);
    var out=list.map(function(r){return match(r,kitchen,h);});
    if(opts.cat)out=out.filter(function(m){return m.r.c===opts.cat||(opts.cat==='side'&&m.r.c==='salad');});
    if(opts.maxMin)out=out.filter(function(m){return m.r.min<=opts.maxMin;});
    out.sort(function(a,b){return (b.appsOk-a.appsOk)||(a.missing.length-b.missing.length)||(b.have.length-a.have.length)||(a.r.min-b.r.min);});
    return out;}

  /* ---------- amounts in either language ---------- */
  var U={g:['g','گرم'],kg:['kg','کیلو'],ml:['ml','میلی‌لیتر'],l:['L','لیتر'],cup:['cup','پیمانه'],tbsp:['tbsp','قاشق غذاخوری'],tsp:['tsp','قاشق چای‌خوری'],
    clove:['clove','حبه'],bunch:['bunch','دسته'],pinch:['a pinch of','کمی'],taste:['to taste','به میزان لازم']};
  var DIGS={fa:'۰۱۲۳۴۵۶۷۸۹',ar:'٠١٢٣٤٥٦٧٨٩'};
  function faDigits(s,lang){var d=DIGS[lang||'fa'];return String(s).replace(/\d/g,function(x){return d[x];}).replace(/\./g,'٫');}
  function frac(q,lang){if(q==null)return '';var w=Math.floor(q+1e-9),f=q-w,sym=null;
    [[.25,'¼'],[.33,'⅓'],[.5,'½'],[.67,'⅔'],[.75,'¾']].forEach(function(p){if(Math.abs(f-p[0])<.04)sym=p[1];});
    var s=sym?(w?w:'')+sym:String(Math.round(q*10)/10);if(DIGS[lang])return faDigits(s,lang);return lang&&lang!=='en'?s.replace('.',','):s;}
  function tpl(s,v){s=String(s);return s.replace(/\{(\w+)\}/g,function(m,n,at){var x=v[n]!=null?String(v[n]):'';return n==='name'&&at>0&&CUR!=='de'?x.charAt(0).toLowerCase()+x.slice(1):x;});}
  function scaleQty(q,unit,f){if(q==null||f===1)return q;var v=q*f;
    if(unit==='g'||unit==='ml')return v>=100?Math.round(v/10)*10:Math.max(5,Math.round(v/5)*5);
    if(unit==='kg'||unit==='l')return Math.round(v*10)/10;
    if(unit==='cup'||unit==='tbsp'||unit==='tsp'||unit==='bunch')return Math.max(.25,Math.round(v*4)/4);
    return Math.max(1,Math.round(v));}
  function ingName(keys,lang,count){var names=keys.map(function(k){var o=ING[k];if(!o)return k;
      if(lang==='fa')return o.fa;if(lang&&lang!=='en')return o[lang]||o.en;if(count!=null&&o.one)return count===1?o.one:o.many;return o.en.toLowerCase();});
    if(lang&&lang!=='en'&&lang!=='fa'&&lang!=='de')names=names.map(function(n,i){return i?low(n):n;});
    var L=LX[lang];return names.join(lang==='fa'?' یا ':lang==='en'||!lang?' or ':(L&&L.fmt&&L.fmt.or)||' / ');}
  function low(n){return n&&n.charAt(0).toLowerCase()+n.slice(1);}
  function ingText(x,lang,f){var q=scaleQty(x.qty,x.unit,f==null?1:f),u=U[x.unit],name;
    if((x.unit==='g'||x.unit==='ml')&&q>=1000){x=Object.assign({},x,{unit:x.unit==='g'?'kg':'l'});q=Math.round(q/100)/10;u=U[x.unit];}
    if(lang&&lang!=='en'&&lang!=='fa'){var L=LX[lang]||{},UU=L.unit||{},F=L.fmt||{},nm=ingName(x.keys,lang);
      if(x.unit==='taste')return tpl(F.taste||'{name}',{name:nm});
      if(x.unit==='pinch')return tpl(F.pinch||'{name}',{name:nm});
      if(q==null)return nm;
      var pr=x.unit?(UU[x.unit]||[x.unit,x.unit]):(UU.pcs||['','']),un=q>1?pr[1]:pr[0];
      return tpl(F.line||'{name} — {amt}',{name:nm,amt:frac(q,lang)+(un?' '+un:'')});}
    if(x.unit==='taste')return lang==='fa'?ingName(x.keys,'fa')+' به میزان لازم':cap(ingName(x.keys,'en'))+', to taste';
    if(x.unit==='pinch')return lang==='fa'?'کمی '+ingName(x.keys,'fa'):'A pinch of '+ingName(x.keys,'en');
    if(q==null)return lang==='fa'?ingName(x.keys,'fa'):cap(ingName(x.keys,'en'));
    if(!x.unit){name=ingName(x.keys,lang,q);return lang==='fa'?frac(q,'fa')+' عدد '+name:frac(q,'en')+' '+name;}
    if(lang==='fa')return frac(q,'fa')+' '+u[1]+' '+ingName(x.keys,'fa');
    var un=u[0];if(q>1&&(x.unit==='cup'||x.unit==='clove'))un+='s';if(q>1&&x.unit==='bunch')un='bunches';
    return frac(q,'en')+' '+un+' '+ingName(x.keys,'en');}
  function cap(s){return s?s.charAt(0).toUpperCase()+s.slice(1):s;}

  /* ---------- full meals ---------- */
  function byId(id){for(var i=0;i<DP_RECIPES.length;i++)if(DP_RECIPES[i].id===id)return DP_RECIPES[i];return null;}
  function companions(id){var r=byId(id);return r&&r.m?r.m.split(',').filter(function(x){return x&&byId(x);}):[];}
  function timeline(recipes,serveAt){var ev=[];
    recipes.forEach(function(r,di){(r.s||[]).forEach(function(s,i){ev.push({at:serveAt-s[0]*60000,min:s[0],r:r,di:di,i:i,en:s[1],fa:s[2]});});});
    ev.sort(function(a,b){return b.min-a.min||a.di-b.di||a.i-b.i;});
    var lead=ev.length?ev[0].min:0;return {ev:ev,lead:lead};}
  function shopping(recipes,kitchen,people){var h=haveSet(kitchen),map={},order=[];
    recipes.forEach(function(r){var f=people&&r.sv?people/r.sv:1;
      ingList(r.i).forEach(function(x){if(x.flag==='o')return;if(x.keys.some(function(k){return h[k];}))return;
        var id=x.keys.join('|');if(!map[id]){map[id]={keys:x.keys,parts:[],dishes:[]};order.push(id);}
        map[id].parts.push({x:x,f:f,r:r});if(map[id].dishes.indexOf(r)<0)map[id].dishes.push(r);});});
    return order.map(function(id){return map[id];});}
  return {ING:ING,APP:APP,parse:parse,parseApps:parseApps,suggest:suggest,key:key,normFa:normFa,ingList:ingList,appGroups:appGroups,
    match:match,rank:rank,haveSet:haveSet,ingText:ingText,ingName:ingName,frac:frac,faDigits:faDigits,byId:byId,companions:companions,
    timeline:timeline,shopping:shopping,staples:DP_STAPLES,useLang:useLang};
})();
