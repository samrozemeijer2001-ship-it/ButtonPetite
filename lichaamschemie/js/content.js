/* Inhoud van Lichaamschemie v1. Alle tekst komt uit de aangeleverde kopij.
   Mini-opmaak: **vet**, {1,2} of {1-3} = bronverwijzing (alleen oxytocine). */
window.LC = {};

LC.stoffen = [
{
  id:"adrenaline", titel:"Adrenaline", syn:["epinefrine"], kleur:"rood", smiley:"shock",
  vraag:"Waarom bonst je hart al voor de aftrap?",
  intro:["Je brein kan een verwachte inspanning of dreiging al betekenis geven voordat je beweegt. Het sympathische zenuwstelsel kan daarop je hart én je bijnier activeren. Ook tijdens intensieve inspanning of bij dalende bloedsuiker kan adrenaline vrijkomen."],
  kern:[
    {kop:"Voorraad en startsein", blocks:[{t:"p",x:"Cellen in het bijniermerg gebruiken tyrosine als bouwstof. Via L-DOPA, dopamine en noradrenaline ontstaat adrenaline. Het enzym PNMT verzorgt de laatste omzetting. Transporteiwitten brengen adrenaline in voorraadblaasjes. Bij de aftrap hoeft die voorraad dus niet eerst te worden gebouwd. Een zenuw geeft acetylcholine af op de bijniercel. Een ionkanaal opent, de elektrische spanning verandert en calcium stroomt binnen. Blaasjes versmelten met de celrand en legen hun inhoud in het bloed."}]},
    {kop:"Effect", blocks:[{t:"p",x:"In je hart kan de bèta-1-receptor via de boodschapper cAMP calciumstromen veranderen. Je hart kan sneller en krachtiger slaan. In de lever helpt adrenaline opgeslagen koolhydraten beschikbaar te maken. Een bonzend hart kan óók rechtstreeks door zenuwen worden aangestuurd. Enzymen zoals COMT en MAO helpen catecholaminen verwerken."}]}
  ],
  mv:{blocks:[{t:"p",x:"Beiden hebben deze route. Dezelfde ervaring geeft geen vaste hoeveelheid adrenaline. Inspanningsniveau, verwachting en uitgangssituatie tellen mee."}]},
  wist:"Epinefrine is dezelfde stof. De bijnier krijgt zijn startsignaal van een ándere neurotransmitter dan de stof die hij zelf afgeeft.",
  kennis:[{v:"Begint vóór een spannende wedstrijd eerst de opslag?", a:"Er kan al een voorraad klaarliggen. De acute reactie draait vooral om afgifte."}],
  verdieping:[
    {kop:"Wanneer begint het precies?", blocks:[{t:"p",x:"Stel je drie momenten voor. Op vrijdag bekijk je de opstelling. Op zaterdag hoor je dat je start. Vlak voor de aftrap zie je de tegenstander op je af komen. Geen van die momenten heeft een vaste adrenalinedrempel. Als je een gebeurtenis als spannend of veeleisend inschat, kan je brein de sympathische zenuwen activeren die naar je bijnieren lopen. Daarvoor hoef je nog geen stap te hebben gezet. Bij de eerste sprint voegen lichamelijke inspanning en de behoefte aan beschikbare brandstof nieuwe signalen toe. Zonder meting kun je achteraf geen minuut aanwijzen waarop jouw afgifte begon."}]},
    {kop:"Waarom ligt er al een voorraad?", blocks:[{t:"p",x:"De cellen van het bijniermerg hebben enzymen die stap voor stap een aminozuur verwerken. Eén daarvan, tyrosinehydroxylase, helpt bepalen hoe snel de eerste stap verloopt. Verderop in de route voegt PNMT een kleine chemische groep toe aan noradrenaline. De cel transporteert het gevormde adrenaline vervolgens naar blaasjes. Cortisol uit de aangrenzende bijnierschors ondersteunt de aanwezigheid van PNMT. Zo beïnvloeden twee delen van één orgaan elkaar al vóór de acute reactie. Afgifte en aanvulling van de voorraad kunnen tegelijk plaatsvinden."}]},
    {kop:"Eén prikkel, twee bestemmingen", blocks:[
      {t:"p",x:"De zenuw naar het bijniermerg geeft acetylcholine af. Op de bijniercel opent daardoor een nicotinereceptor. Ionen gaan door het membraan, de elektrische spanning verandert en calciumkanalen openen. Het binnenstromende calcium helpt de blaasjes hun inhoud aan het bloed afgeven. Volg vervolgens twee routes:"},
      {t:"list",items:[
        {b:"Naar het hart.",x:"In pacemakercellen verandert activering van bèta-1-receptoren de stromen van geladen deeltjes. Die cellen kunnen eerder de spanning bereiken die een volgende hartslag start. In andere hartspiercellen beïnvloedt dezelfde receptor hoe krachtig de cel samentrekt."},
        {b:"Naar de lever.",x:"Een levercel kan reageren door glycogeen af te breken. De lever kan glucose aan het bloed afgeven, zodat brandstof beschikbaar komt voor andere weefsels. Je merkt deze chemische stap doorgaans niet afzonderlijk."}
      ]}]},
    {kop:"Hoe weten we welk deel van de reactie adrenaline is?", blocks:[{t:"p",x:"Een hartslagmeter meet het eindresultaat van verschillende invloeden. Minder remming door de nervus vagus kan de hartslag al verhogen. Ook noradrenaline uit zenuwen bij het hart draagt bij. Adrenaline in een bloedmonster meet weer iets anders: hoeveel er op dat moment in het bloed aanwezig is, na afgifte én verwijdering. Die meting vertelt weinig over één afzonderlijke zenuwverbinding. In de hersenstam maken kleine groepen zenuwcellen ook zelf adrenaline. Dat is een andere bron dan de bijnier."}]}
  ],
  denk:{v:"Zou iemand tijdens een spannende wedstrijd veel kunnen merken aan het hart, maar weinig kunnen zeggen over de adrenalinevoorraad van de bijnier?", a:"Ja. Hartslag, hoeveelheid in bloed en hoeveelheid in voorraadblaasjes zijn drie verschillende grootheden."},
  bronnen:["https://pmc.ncbi.nlm.nih.gov/articles/PMC6721535/"],
  verder:["https://www.ncbi.nlm.nih.gov/books/NBK507716/","https://pmc.ncbi.nlm.nih.gov/articles/PMC6721535/"]
},
{
  id:"noradrenaline", titel:"Noradrenaline", syn:["norepinefrine"], kleur:"oranje", smiley:"meh",
  vraag:"Je staat op uit een stoel.",
  intro:["Door de zwaartekracht verplaatst bloed zich richting benen. Als de rek in slagaderlijke druksensoren afneemt, past de hersenstam de autonome aansturing aan. Sympathische zenuwuiteinden kunnen lokaal noradrenaline vrijgeven. Via alfa-1-receptoren trekken spiercellen rond bloedvaten samen. Dat helpt de bloeddruk herstellen. Vaak merk je daar nauwelijks iets van."],
  kern:[
    {kop:"Aanmaak en einde", blocks:[{t:"p",x:"Zenuwcellen maken uit tyrosine via L-DOPA dopamine. In blaasjes zet dopamine-bèta-hydroxylase dopamine om in noradrenaline. Een impuls opent calciumkanalen en maakt afgifte mogelijk. Veel noradrenaline wordt via de transporter NET terug de zenuwcel in gebracht. Het kan opnieuw worden opgeslagen of worden afgebroken."}]},
    {kop:"In je hoofd", blocks:[{t:"p",x:"Zenuwcellen van de locus coeruleus, een kleine kern in de hersenstam, bereiken veel hersengebieden. Hun activiteit helpt aandacht en waakzaamheid afstemmen op een veranderende omgeving. Een onverwacht geluid kan je aandacht trekken. Hoe sterk je opkijkt is geen meting van één stof."}]}
  ],
  mv:{blocks:[{t:"p",x:"Beide groepen gebruiken deze bloeddrukreflex en hersennetwerken. Een bloedmeting vertelt weinig over één lokale synaps in het brein."}],
      details:[{kop:"Wat is bij mensen gemeten?", blocks:[{t:"p",x:"Onderzoekers hebben bij verandering van lichaamshouding adrenaline en noradrenaline in bloed gemeten. Zelfs de plaats van bloedafname doet ertoe: een ader bevat bloed dat al langs plaatselijke weefsels is gestroomd. Een bloedmonster bij een man of vrouw is daarom geen rechtstreekse maat voor alle sympathische zenuwen, laat staan voor aandacht in de hersenen."}]}]},
  wist:"Norepinefrine is dezelfde stof. In bijniercellen is noradrenaline ook grondstof voor adrenaline.",
  kennis:[{v:"Hoe kan het signaal snel eindigen terwijl de stof nog bestaat?", a:"Heropname verwijdert haar uit de ruimte rond de receptor."}],
  verdieping:[
    {kop:"Wat geeft bij opstaan het startsignaal?", blocks:[{t:"p",x:"Languit op de bank en rechtop in de keuken betekenen iets anders voor je bloedsomloop. Bij opstaan kan tijdelijk minder bloed terugstromen naar het hart. Daardoor kan het hart per slag minder uitpompen. Sensoren in onder meer de halsslagaders reageren op de rek van de vaatwand. Een verandering in hun zenuwsignalen bereikt de hersenstam. Die kan snel de sympathische aansturing verhogen. Je hoeft het wankele gevoel dus niet eerst bewust op te merken voordat de reflex begint."}]},
    {kop:"Hoe bereikt de boodschap het bloedvat?", blocks:[{t:"p",x:"De meeste sympathische zenuwen die bloedvaten aansturen, hebben langs hun uiteinden kleine verdikkingen. Daar liggen blaasjes. Een zenuwimpuls maakt calciumafhankelijke afgifte mogelijk. In het omringende weefsel bereikt noradrenaline alfa-1-receptoren van gladde spiercellen in de vaatwand. De receptor schakelt binnen de cel eiwitten in waardoor calcium beschikbaar komt voor samentrekking. De doorsnede van het vat kan kleiner worden. In veel kleine slagaders verhoogt dat de weerstand. In aderen kan samentrekking helpen bloed terug te voeren naar het hart. Samen dragen zulke veranderingen bij aan behoud van bloeddruk."}]},
    {kop:"Wat bepaalt of het signaal doorzet?", blocks:[{t:"p",x:"Een deel van het vrijgekomen noradrenaline bereikt alfa-2-receptoren op het zendende zenuwuiteinde zelf. Dat kan verdere afgifte afremmen. Daarnaast brengt NET moleculen terug de zenuwcel in. Een heropgenomen molecuul kan opnieuw in een blaasje terechtkomen. Heropname ruimt daarmee het signaal buiten de cel op én levert materiaal voor later. Slechts een deel van wat de zenuw afgeeft bereikt de bloedbaan."}]},
    {kop:"Waarom hoor je deze stof ook bij concentratie?", blocks:[{t:"p",x:"De locus coeruleus stuurt uitlopers naar veel hersengebieden. De manier waarop zulke neuronen vuren verandert onder meer met waakzaamheid en betekenisvolle gebeurtenissen. Dat kan beïnvloeden welke informatie verder verwerkt wordt. Een teamgenoot roept jouw naam tijdens een drukke training: het opmerken en omschakelen van aandacht is een herkenbaar voorbeeld van de functie van zulke netwerken. Uit dat ene moment valt geen lokale afgifte te reconstrueren."}]}
  ],
  denk:{v:"Wat gebeurt eerst bij deze reflex: nieuwe noradrenaline maken of klaarliggende blaasjes aanspreken?", a:"Een acute zenuwimpuls kan de klaarliggende voorraad aanspreken. De aanmaak vult die voorraad aan."},
  bronnen:["https://pmc.ncbi.nlm.nih.gov/articles/PMC3761154/","https://pmc.ncbi.nlm.nih.gov/articles/PMC6721535/"],
  verder:["https://pubmed.ncbi.nlm.nih.gov/3749784/","https://www.ncbi.nlm.nih.gov/books/NBK507716/"]
},
{
  id:"acetylcholine", titel:"Acetylcholine", syn:["ACh"], kleur:"mint", smiley:"happy",
  vraag:"Je besluit je hand te sluiten.",
  intro:["Een motorische zenuwimpuls bereikt het uiteinde bij een spiervezel. Calcium stroomt de zenuwcel in. Blaasjes geven acetylcholine af. Nicotinereceptoren op de spier openen hun ionkanaal. Bij voldoende spanningsverandering ontstaat een elektrische impuls in de spiervezel. Die maakt calcium vrij uit een interne voorraad, waardoor spiereiwitten langs elkaar kunnen schuiven."],
  kern:[
    {kop:"Aanmaak, opslag en opruimen", blocks:[{t:"p",x:"Het enzym choline-acetyltransferase koppelt choline aan een acetylgroep uit acetyl-CoA. De zenuwcel verpakt de gevormde stof in blaasjes. Na afgifte splitst acetylcholinesterase de stof snel. Choline kan opnieuw worden opgenomen en gebruikt."}]},
    {kop:"Waarom kan dezelfde stof ook je hart vertragen?", blocks:[{t:"p",x:"De nervus vagus geeft bij het hart acetylcholine af op muscarinereceptoren. Daar beïnvloedt een andere receptor de elektrische activiteit van pacemakercellen. De ontvanger bepaalt dus mede het resultaat."}]}
  ],
  mv:{blocks:[{t:"p",x:"Bij mannen en vrouwen werken beide routes. De beweging van je hand kun je voelen of zien. De concentratie acetylcholine kun je daaruit niet berekenen."}]},
  wist:"Eén boodschapper werkt zowel bij een bewuste beweging als bij onbewuste regeling van het hart. Calcium is zowel vóór als na de spierovergang belangrijk, op verschillende plekken.",
  kennis:[{v:"Waarom bindt de spier niet blijvend samen na één signaal?", a:"De boodschapper wordt snel gesplitst en de spier pompt calcium terug in opslag."}],
  verdieping:[
    {kop:"Wanneer gebruik je deze stof op een gewone dag?", blocks:[{t:"p",x:"Pak een mok vast, laat hem los en kijk daarna naar kleine letters van dichtbij. Bij het vastpakken stuurt een motorische zenuw je vingerspieren aan. Bij het dichtbij scherpstellen speelt acetylcholine ook mee, ditmaal via een autonome zenuw en glad spierweefsel in het oog. In beide gevallen is er een zender, een korte afstand en een cel met passende receptoren. De precieze uitkomst hangt af van de bestemming."}]},
    {kop:"Waarom kan een tweede beweging zo snel volgen?", blocks:[{t:"p",x:"Choline komt onder andere beschikbaar door hergebruik na eerdere signalen. Een transporter haalt het de zenuwcel binnen. Het enzym choline-acetyltransferase verbindt het met een acetylgroep. Een andere transporter laadt de stof in blaasjes. De elektrische impuls is het acute startsein voor afgifte. Aanmaak, het vullen van blaasjes en het terugwinnen van choline gaan tussen impulsen door. Daardoor kun je afzonderlijke vingers snel achter elkaar bewegen."}]},
    {kop:"Twee calciumvoorraden bij één beweging", blocks:[{t:"p",x:"Wanneer de impuls het zenuwuiteinde bereikt, komt calcium van buiten die zenuwcel naar binnen. Dat helpt blaasjes met het membraan versmelten. Acetylcholine bereikt nu nicotinereceptoren op de spier. De stroom van ionen door die receptoren verandert de spanning van het spiermembraan. De elektrische impuls verspreidt zich ook via instulpingen tot diep in de spiervezel. Daar komt calcium vrij uit het sarcoplasmatisch reticulum, een opslagplaats binnen de spiercel. Het bindt aan troponine en maakt contact tussen de spiereiwitten actine en myosine mogelijk. ATP ondersteunt de beweging van die eiwitten. Het calcium in de zenuwcel en dat in de spiercel hebben dus verschillende bronnen en taken."}]},
    {kop:"Hoe werkt het bij het hart?", blocks:[{t:"p",x:"Acetylcholine van de parasympathische zenuw bereikt bij pacemakercellen muscarine-M2-receptoren. Die sturen via andere eiwitten onder meer kaliumkanalen aan. Het kan langer duren voordat de cel opnieuw spontaan een impuls vormt. De hartslag kan zo dalen. Bij mannen en vrouwen verklaart het type receptor waarom acetylcholine een hand kan helpen sluiten én de hartslag kan helpen verlagen. Uit een dalende hartslag na inspanning kun je de afzonderlijke bijdrage van acetylcholine niet aflezen."}]},
    {kop:"Hoe stopt de beweging?", blocks:[{t:"p",x:"Acetylcholinesterase breekt acetylcholine in de synaptische spleet af. Ondertussen pompt de spier calcium terug naar de opslagplaats. Pas wanneer ook die tweede stap plaatsvindt, kan de spier goed ontspannen. Een reflex of bewuste opdracht kan intussen alweer een nieuwe reeks impulsen starten."}]}
  ],
  denk:{v:"Gaat het calcium uit de zenuw rechtstreeks naar de spiereiwitten?", a:"Nee. Het zenuwsignaal wordt chemisch doorgegeven en de spier mobiliseert vervolgens haar eigen calciumvoorraad."},
  bronnen:["https://openstax.org/books/anatomy-and-physiology/pages/12-5-communication-between-neurons"],
  verder:["https://www.ncbi.nlm.nih.gov/books/NBK11143/","https://www.ncbi.nlm.nih.gov/books/NBK28051/"]
},
{
  id:"cortisol", titel:"Cortisol", syn:[], kleur:"geel", smiley:"sleepy",
  vraag:"Waarom duurt deze stressreactie langer?",
  intro:["Je biologische klok en belastende situaties kunnen de hypothalamus aanzetten tot afgifte van CRH. De hypofyse reageert met ACTH. Via het bloed bereikt ACTH de bijnierschors. Daar stimuleert het de omzetting van cholesterol in cortisol. De cel maakt dit steroïdhormoon naar behoefte. Een groot voorraadblaasje met gereed cortisol hoort niet bij deze route."],
  kern:[
    {kop:"Wat gebeurt er vervolgens?", blocks:[{t:"p",x:"Veel cortisol reist gebonden aan eiwitten. Vrij cortisol kan cellen binnengaan en aan de glucocorticoïdreceptor binden. Het complex beïnvloedt welke genen worden afgelezen. Zo helpt cortisol onder meer brandstof beschikbaar houden en ontstekingsreacties reguleren. Het patroon verandert door de dag en bestaat uit pulsen. Bij een gebruikelijk dagritme liggen waarden vaak hoger rond het ontwaken."}]},
    {kop:"Hoe stopt het?", blocks:[{t:"p",x:"Cortisol remt via terugkoppeling de aansturing vanuit hypothalamus en hypofyse. De lever verwerkt het hormoon. Gejaagdheid alleen vertelt je weinig over je waarde."}]}
  ],
  mv:{blocks:[{t:"p",x:"Dezelfde hormoonas werkt bij beiden. Oestrogenen kunnen het bindende eiwit verhogen. Een verschil in totaal cortisol in bloed hoeft daardoor geen even groot verschil in vrij cortisol te betekenen."}],
      details:[{kop:"Hoe onderzoek je een verschil tussen mannen en vrouwen?", blocks:[{t:"p",x:"Je zou deelnemers op vergelijkbare tijden laten opstaan, het tijdstip van afname vastleggen en rekening houden met bijvoorbeeld oestrogeengebruik. Oestrogenen kunnen het transporteiwit in het bloed verhogen. Bij dezelfde vrije concentratie kan de totale gemeten hoeveelheid dan verschillen. Speeksel volgt vooral het vrije deel. Voor de vraag ‘wie heeft meer stress?’ zijn bovendien het verloop, de omstandigheden en de ervaring van de persoon relevant."}]}]},
  wist:"Bijnierschors en bijniermerg liggen naast elkaar maar maken verschillende hormonen. Een ochtendpiek kan bij een normaal dagritme horen.",
  kennis:[{v:"Welk signaal bereikt vanuit de hypofyse de bijnierschors?", a:"ACTH. CRH werkt een stap eerder."}],
  verdieping:[
    {kop:"In welke situaties verandert cortisol?", blocks:[
      {t:"p",x:"**Tijdens een normale ochtend.** Het lichaam vertoont al vóór ontwaken een dagritme. Daarbovenop kan in de eerste tientallen minuten na ontwaken een extra stijging optreden. Deze twee processen overlappen. Eén ochtendmeting vertelt daardoor weinig over hoe belastend je dag is."},
      {t:"p",x:"**Bij een sociaal beoordeelde prestatie.** Een presentatie houden terwijl onbekenden je beoordelen kan de stressas activeren, vooral wanneer de uitkomst onzeker is. Anticipatie, tijdstip, eerdere ervaring en het moment van afname beïnvloeden wat je meet. Als je hart direct bij de aankondiging versnelt, kan de snelle zenuwreactie daar eerder aan bijdragen dan nieuw geproduceerd cortisol."}]},
    {kop:"Hoe zet een zenuwsignaal hormoonproductie aan?", blocks:[{t:"p",x:"De hypothalamus geeft CRH af aan kleine bloedvaten naar de voorkwab van de hypofyse. Daar kunnen cellen ACTH vrijgeven aan de grote bloedsomloop. ACTH bindt in de bijnierschors aan een receptor op het celoppervlak. Via cAMP stimuleert het onder meer het vervoer van cholesterol naar de plaats in het mitochondrium waar de omzetting begint. Verschillende enzymen bouwen de oorspronkelijke cholesterolstructuur om. De gevormde cortisolmoleculen kunnen de cel verlaten. Bij een langere ACTH-prikkel kan de capaciteit van de cel om steroïden te maken ook veranderen."}]},
    {kop:"Waarom reageert de ene cel anders dan de andere?", blocks:[{t:"p",x:"Veel cortisol reist gekoppeld aan corticosteroïdbindend globuline of albumine. Vrij cortisol kan een doelcel binnengaan. Via de glucocorticoïdreceptor verandert het de aflezing van bepaalde genen. Welke genen beschikbaar zijn, hangt mede af van het celtype. In de lever kan cortisol de capaciteit voor glucosevorming ondersteunen. In afweercellen kan het de productie van ontstekingssignalen bijsturen. Het veranderen van eiwitproductie vraagt tijd. Cortisol heeft ook snellere effecten, waardoor één universele ‘inwerktijd’ misleidend zou zijn."}]}
  ],
  denk:{v:"Waarom is één monster vlak na je wekker onvoldoende om de stijging ná ontwaken vast te stellen?", a:"Voor een verandering heb je meerdere goed getimede metingen nodig. De eerste waarde bevat ook het al lopende dagritme."},
  bronnen:["https://www.ncbi.nlm.nih.gov/books/NBK541120/"],
  verder:["https://doi.org/10.1210/endrev/bnae024","https://www.ncbi.nlm.nih.gov/books/NBK279118/"]
},
{
  id:"dopamine", titel:"Dopamine", syn:[], kleur:"lila", smiley:"stars",
  vraag:"Je verwacht een beloning, maar de uitkomst verrast je.",
  intro:["In klassieke leertaken verandert bij een deel van de dopaminecellen de korte activiteitsreactie wanneer een beloning beter of slechter uitvalt dan verwacht. Na herhaling kan een voorspellend teken de reactie eerder oproepen. Dat helpt verklaren hoe ervaring toekomstige keuzes beïnvloedt. Eén gevoel van plezier onthult geen dopaminewaarde."],
  kern:[
    {kop:"Hoe komt het signaal op gang?", blocks:[{t:"p",x:"Tyrosine wordt door enzymen eerst L-DOPA en vervolgens dopamine. Een transporter verpakt dopamine in blaasjes. Elektrische activiteit kan via instromend calcium afgifte veroorzaken. Op de ontvangende cel sturen D1-achtige en D2-achtige receptoren verschillende interne reacties aan. Transporters zoals DAT halen dopamine weer op. MAO en COMT dragen bij aan de verwerking."}]},
    {kop:"Meer dan leren", blocks:[{t:"p",x:"Andere dopaminebanen helpen bewegingen selecteren en uitvoeren. Weer andere zenuwcellen geven dopamine af aan bloedvaten naar de hypofyse, waar het via D2-receptoren de afgifte van prolactine afremt. Locatie en doelcel verklaren waarom dezelfde molecule zulke verschillende functies heeft."}]}
  ],
  mv:{blocks:[{t:"p",x:"Beide groepen gebruiken dopamine voor onder meer beweging en leren. Groepsgemiddelden uit één taak vertellen niet hoeveel dopamine een persoon aanmaakt of hoe gemotiveerd iemand zal zijn."}]},
  wist:"Dopamine is zowel een zelfstandige boodschapper als bouwstof voor noradrenaline. Een verwachte beloning kan een andere reactie uitlokken dan een onverwachte.",
  kennis:[{v:"Wat verandert als je een beloning leert voorspellen?", a:"In bepaalde leertaken verschuift een korte dopaminerespons naar het voorspellende teken."}],
  verdieping:[
    {kop:"Drie momenten bij het leren van een voorspelling", blocks:[{t:"p",x:"Stel dat een lampje kort vóór een slok sap oplicht. Aanvankelijk heeft het lampje geen voorspellende betekenis. In klassieke proeven met apen vertoonde een deel van de dopaminecellen een korte stijging van activiteit na een onverwachte beloning. Na herhaling trad de respons al op bij het teken dat de beloning aankondigde. Op proeven waarbij de verwachte beloning uitbleef, kon de activiteit juist kort dalen rond het verwachte tijdstip. Deze metingen betroffen activiteit van bepaalde zenuwcellen in een leertaak. Ze geven geen vaste maat voor menselijk plezier."}]},
    {kop:"Waarom kan zo’n kort signaal helpen leren?", blocks:[{t:"p",x:"De uitkomst wijkt af van wat op basis van eerdere ervaring werd verwacht. Een signaal over die afwijking kan helpen de waarde van een voorspeller bij te stellen. Dat vereist dat informatie over de situatie en de recente activiteit van andere zenuwcellen samenkomt. Dopamine kan de kans beïnvloeden dat actieve verbindingen sterker of zwakker worden. Het effect hangt af van het circuit, het moment en de receptoren. Als je merkt dat een meldingsgeluid je nieuwsgierig maakt, is dat een herkenbaar voorbeeld van een geleerde verwachting. Welke dopaminecellen bij jou vuren, is daarmee niet vastgesteld."}]},
    {kop:"Hoe maakt de cel dopamine en hoe stopt het?", blocks:[{t:"p",x:"Eerst zet tyrosinehydroxylase tyrosine om in L-DOPA. Daarna vormt een tweede enzym dopamine. VMAT transporteert de stof vanuit het celvocht naar blaasjes. Bij passende elektrische activiteit kan calcium afgifte uit die blaasjes mogelijk maken. D2-receptoren op dopaminecellen zelf kunnen verdere activiteit en afgifte afremmen. Heropname via DAT is vooral in bepaalde hersengebieden een belangrijke stap om het signaal te begrenzen. Wat wordt teruggenomen, kan worden herverpakt. De plaats van de synaps bepaalt mede welke transporters en enzymen lokaal het zwaarst meewegen."}]},
    {kop:"Waarom zegt de plek zoveel?", blocks:[{t:"p",x:"In de route van substantia nigra naar striatum helpt dopamine bij de regeling van beweging. In routes naar andere delen van de voorhersenen is de stof betrokken bij onder meer leren en motivatie. In een route naar de hypofyse remt dopamine de afgifte van een hormoon. Bij mannen én vrouwen zijn dit afzonderlijke functies. De uitkomst van één beloningstaak, een bloedwaarde of een sterke drang naar afleiding vertelt weinig over die andere circuits. Gedragsverschillen tussen deelnemers bewijzen op zichzelf geen sekseverschil in synthese of receptorwerking."}]}
  ],
  denk:{v:"Wat kan een duidelijke reactie op het lampje betekenen als het sap nog niet is gekomen?", a:"Het lampje heeft voorspellende waarde gekregen. De zenuwrespons kan daarmee naar voren verschuiven in de tijd."},
  bronnen:["https://www.ncbi.nlm.nih.gov/books/NBK599196/","https://pubmed.ncbi.nlm.nih.gov/9054347/"],
  verder:["https://pubmed.ncbi.nlm.nih.gov/27069377/","https://pmc.ncbi.nlm.nih.gov/articles/PMC5549862/"]
},
{
  id:"histamine", titel:"Histamine", syn:[], kleur:"roze", smiley:"smirk",
  vraag:"Waarom jeukt een huidplek binnen minuten?",
  intro:["Bij een al eerder opgebouwde allergische gevoeligheid kan een allergeen binden aan IgE-antistoffen op mestcellen. Als meerdere receptoren worden gekoppeld, kan de cel opgeslagen histamine afgeven. Histamine bereikt plaatselijke H1-receptoren. Bloedvaten worden doorlaatbaarder en gevoelszenuwen kunnen een jeuksignaal doorgeven. Andere stoffen dragen ook bij aan zwelling en jeuk."],
  kern:[
    {kop:"Waar komt het vandaan?", blocks:[{t:"p",x:"Het enzym histidinedecarboxylase verwijdert een chemische groep van het aminozuur histidine. Mestcellen bewaren histamine in korrels. In de maag maken andere cellen histamine dat via H2-receptoren de zuurafgifte stimuleert. In de hypothalamus maken bepaalde zenuwcellen histamine voor waakzaamheid. Het lichaam breekt histamine onder meer met DAO en HNMT af. Welke route belangrijk is, hangt af van het weefsel."}]}
  ],
  mv:{blocks:[{t:"p",x:"Al deze systemen komen bij beiden voor. De locatie van afgifte bepaalt of je iets merkt als jeuk of dat het effect vooral in de maag of hersenen ligt."}],
      details:[{kop:"Bij mannen en vrouwen: sensibilisatie", blocks:[{t:"p",x:"Mestcellen, H1-signalen, zuurregeling via H2 en histaminerge zenuwen komen bij beiden voor. Bij de vraag waarom de ene persoon heftig reageert op een specifiek allergeen en de andere weinig merkt, is eerdere sensibilisatie essentieel. Het verschil tussen die twee ervaringen laat op zichzelf geen conclusie over sekse toe."}]}]},
  wist:"Sommige oudere allergiemiddelen maken slaperig doordat ze ook H1-receptoren in de hersenen bereiken. Een rode huid en wakker blijven kunnen dus met dezelfde stof samenhangen.",
  kennis:[{v:"Waarom veroorzaakt histamine in de maag een ander effect dan in de huid?", a:"Het bereikt andere doelcellen met andere receptoren."}],
  verdieping:[
    {kop:"Wanneer komt histamine vrij?", blocks:[
      {t:"p",x:"**In het pollenseizoen.** Bij iemand die voor een bepaald pollenallergeen gevoelig is geworden, kunnen mestcellen al specifiek IgE op hun oppervlak hebben. Het allergeen kan meerdere IgE-moleculen tegelijk binden. De gekoppelde receptoren zetten in de mestcel een signaalroute aan. Er komt calcium beschikbaar en korrels kunnen hun inhoud vrijgeven. Zo kan binnen korte tijd histamine rond het neusslijmvlies verschijnen. Het maken van IgE en het vullen van de korrels gingen hieraan vooraf."},
      {t:"p",x:"**Rond een maaltijd.** In het maagslijmvlies zitten enterochromaffineachtige cellen, vaak ECL-cellen genoemd. Onder invloed van onder meer gastrine geven ze histamine af vlak bij zuurproducerende pariëtale cellen. Deze lokale route kan actief zijn zonder jeuk of niezen."},
      {t:"p",x:"**Terwijl je wakker bent.** Bepaalde zenuwcellen in de hypothalamus geven histamine af in hersennetwerken die waakzaamheid ondersteunen. Dat helpt verklaren waarom een stof die je kent van allergie ook in onderzoek naar slaap voorkomt."}]},
    {kop:"Hoe ontstaan jeuk, vocht en zuur?", blocks:[{t:"p",x:"Bij H1-receptoren op gevoelszenuwen kan de prikkeloverdracht veranderen. Bij receptoren op de bekleding van kleine bloedvaten kan de vaatwand tijdelijk doorlaatbaarder worden. Vocht verlaat dan de bloedbaan en het plaatselijke weefsel kan opzetten. Een allergische reactie bevat ook andere boodschappers, waardoor één receptor niet elk verschijnsel verklaart. Bij een H2-receptor op een maagcel loopt de interne route onder meer via cAMP. De cel kan haar zuurafgifte verhogen. Welke receptor aanwezig is, verklaart zo waarom dezelfde stof in twee weefsels een heel ander resultaat geeft."}]},
    {kop:"Waar blijft de histamine?", blocks:[{t:"p",x:"Histamine wordt uit het aminozuur histidine gemaakt door een enzym dat een carboxylgroep afsplitst. Een deel wordt in korrels bewaard tot een passende prikkel komt. Na afgifte helpen afbraakroutes het signaal lokaal beëindigen. Het enzym HNMT draagt een methylgroep over, terwijl diamineoxidase via een andere reactie werkt. De verdeling van die enzymen verschilt tussen weefsels. Een jeukende plek is daarom geen directe meting van de hoeveelheid in je hersenen of maag."}]}
  ],
  denk:{v:"Moet een mestcel na pollencontact eerst nieuwe histamine produceren om snel te kunnen reageren?", a:"Bij een acute reactie kan ze haar eerder gevulde korrels aanspreken."},
  bronnen:["https://www.guidetopharmacology.org/GRAC/FamilyDisplayForward?familyId=33"],
  verder:["https://www.ncbi.nlm.nih.gov/books/NBK557790/"]
},
{
  id:"adenosine", titel:"Adenosine", syn:[], kleur:"paars", smiley:"sleepy",
  vraag:"Waarom voel je na koffie soms minder slaapdruk?",
  intro:["Terwijl cellen energie gebruiken, worden ATP en verwante moleculen omgezet. Buiten de cel kan onder meer uit AMP adenosine ontstaan. Ook transport over celmembranen beïnvloedt de lokale hoeveelheid. Tijdens langdurig wakker zijn kan adenosine in bepaalde hersengebieden toenemen. Slaapdruk en je biologische klok bepalen samen wanneer je slaperig wordt."],
  kern:[
    {kop:"Wat doet het?", blocks:[{t:"p",x:"Bij A1-receptoren kan adenosine de activiteit van zenuwcellen en de afgifte van andere boodschappers dempen. Ook A2A-receptoren spelen mee in netwerken die slaap en waakzaamheid regelen. Cafeïne bezet bij gebruikelijke hoeveelheden onder meer A1- en A2A-receptoren. Een deel van het adenosinesignaal komt daardoor minder goed door. De behoefte aan herstel kan intussen blijven bestaan."}]},
    {kop:"Opslag en einde", blocks:[{t:"p",x:"Adenosine ontstaat lokaal uit de omzetting van andere moleculen. Cellen nemen het weer op, kunnen het via adenosinekinase terug omzetten in AMP of via adenosinedeaminase verwerken tot inosine. Dat is een andere route dan afgifte uit een voorraad neurotransmitterblaasjes."}]}
  ],
  mv:{blocks:[{t:"p",x:"De basis geldt voor beide groepen. Verschillen in hoeveel cafeïne iemand gebruikt, slaapduur en hoe snel cafeïne wordt verwerkt bemoeilijken conclusies over persoonlijke adenosinewaarden."}],
      details:[{kop:"Bij mannen en vrouwen: dezelfde koffie, andere ervaring", blocks:[{t:"p",x:"Beide groepen gebruiken ATP, maken adenosine en hebben de betrokken receptoren. Twee personen die op dezelfde koffie verschillend reageren, kunnen verschillen in slaapgeschiedenis, gewoonte of cafeïneafbraak. Een verschil in ervaren alertheid is daardoor geen bewijs voor een verschil in lokale adenosineaanmaak."}]}]},
  wist:"De A in ATP staat voor adenosine. Dat twee stoffen op dezelfde receptor kunnen aangrijpen betekent niet dat ze hetzelfde effect hebben.",
  kennis:[{v:"Breekt koffie het opgehoopte adenosine direct af?", a:"Cafeïne blokkeert tijdelijk een deel van de receptoren."}],
  verdieping:[
    {kop:"In welke situaties is adenosine relevant?", blocks:[
      {t:"p",x:"**Na een lange dag wakker zijn.** In klassieke dierproeven namen onderzoekers via microdialyse herhaaldelijk monsters van de vloeistof rond zenuwcellen. Bij langer wakker houden vonden zij in onderzochte gebieden veranderingen in extracellulair adenosine. Die plaatselijke meting is belangrijk: de hersenen hebben geen centraal reservoir waarvan één niveau exact voorspelt hoe slaperig jij bent. Een menselijke avond met zware oogleden is een herkenbare ervaring, maar geen meting van dat experiment in je eigen hoofd."},
      {t:"p",x:"**Als een weefsel veel energie gebruikt.** ATP kan via ADP en AMP worden omgezet. Zowel processen in de cel als afbraak van nucleotiden buiten de cel kunnen bijdragen aan lokaal adenosine. Zo koppelt de stof informatie over energiehuishouding aan signalering tussen cellen. Welke route overheerst, hangt af van het weefsel en de omstandigheden."},
      {t:"p",x:"**Na je eerste kop koffie.** De cafeïne moet eerst worden opgenomen en de hersenen bereiken. Daar kan het bepaalde receptoren bezetten die normaal op adenosine reageren. Dat verandert hoe een gegeven hoeveelheid adenosine wordt ‘gelezen’. Voor deze werking hoeft de adenosineproductie dus niet eerst te dalen."}]},
    {kop:"Hoe wordt een stof uit het energiemetabolisme een boodschap?", blocks:[{t:"p",x:"Buiten de cel kunnen enzymen fosfaatgroepen van nucleotiden verwijderen. Uit AMP ontstaat daardoor adenosine. Op een naburige cel kan het aan een receptor binden. Een A1-receptor kan via interne eiwitten de afgifte van neurotransmitters beïnvloeden. Als een zenuwuiteinde minder calcium binnenlaat, kunnen er minder blaasjes hun inhoud vrijgeven. Het signaal kan dus bepalen hoe krachtig een volgende chemische boodschap wordt doorgegeven. A2A-receptoren hebben een andere koppeling aan interne signaalroutes en komen in andere verhoudingen voor. Het effect van adenosine valt daarmee niet terug te brengen tot één verandering in alle hersencellen."}]},
    {kop:"Waarom kun je moe zijn en je toch alerter voelen?", blocks:[{t:"p",x:"Je ervaring wordt mede bepaald door slaapduur, het tijdstip op je biologische klok en de bezetting van receptoren. Cafeïne verandert tijdelijk die laatste factor. De lever ruimt cafeïne geleidelijk op. Adenosine zelf wordt lokaal opgenomen, omgezet in AMP of afgebroken tot inosine. Dat zijn twee verschillende stoffen met verschillende manieren van verwerking."}]}
  ],
  denk:{v:"Waarom is een bloedmonster na koffie onvoldoende om te weten hoeveel slaapdruk je in één hersengebied hebt?", a:"Het monster meet een andere plek. Bovendien verandert cafeïne de receptorbezetting, en slaapdruk wordt door meerdere processen bepaald."},
  bronnen:["https://www.guidetopharmacology.org/GRAC/FamilyDisplayForward?familyId=3"],
  verder:["https://pubmed.ncbi.nlm.nih.gov/9157887/","https://pubmed.ncbi.nlm.nih.gov/10344585/"]
},
{
  id:"oxytocine", titel:"Oxytocine", syn:["knuffelhormoon"], kleur:"kobalt", smiley:"relieved",
  labels:["Peptide","Hormoon","Neuromodulator"],
  vraag:"Waarom kan één stof in je bloed iets anders doen dan in je hersenen?",
  introKop:"In het kort",
  intro:["Oxytocine is een signaalstof die bestaat uit negen aminozuren. Gespecialiseerde zenuwcellen in je hypothalamus maken het. Bij mannen en vrouwen kan het via het bloed doelcellen bereiken. Binnen je hersenen kan het beïnvloeden hoe zenuwcellen op andere signalen reageren. Onderzoekers kijken onder meer naar de mogelijke rol daarvan bij sociale aandacht en binding.{1-3}"],
  kern:[
    {kop:"In welke situaties verandert mijn oxytocine?", breed:true, blocks:[{t:"cards",items:[
      {tag:"Stijging gemeten",kop:"Rond een orgasme",lead:"Rond een orgasme is bij zowel mannen als vrouwen een tijdelijke stijging in bloed gemeten.",x:"Een klein onderzoek nam bloed af vóór, tijdens en na zelfstimulatie bij negen mannen en dertien vrouwen. Rond het orgasme maten de onderzoekers gemiddeld hogere waarden. Daarmee weten we dat de bloedconcentratie in die situatie kan stijgen. De meting vertelt je niet of op dat moment méér oxytocine werd aangemaakt, welke zenuwcellen het afgaven of oxytocine het orgasme veroorzaakte.{6}"},
      {tag:"Gemiddeld geen stijging",kop:"Bij een knuffel of aanraking",lead:"Bij een knuffel, aanraking of ander sociaal contact is het beeld minder duidelijk.",x:"In een review werden 51 studies met samen 3.741 proefpersonen statistisch gecombineerd. Gemiddeld vonden de onderzoekers geen betrouwbare stijging in studies die vóór en na sociaal contact maten, of die een situatie met sociaal contact vergeleken met een situatie zonder. Studies die een samenhang zochten tussen sociaal gedrag en een oxytocinemeting vonden gemiddeld een klein verband. Zo’n verband vertelt je niet welke verandering eerst kwam.{3}"},
      {tag:"Samenhang",kop:"Bij contact met je kind",lead:"Bij contact met je kind is oxytocine bij vaders én moeders onderzocht.",x:"Onderzoekers filmden ouder en baby tijdens contact en keken hoe hun gedrag samenhing met bloedmetingen. Dat geeft aanwijzingen over samenhang met oudergedrag, maar kan niet aantonen dat spelen met je kind nieuwe oxytocineproductie op gang brengt.{4}"}
    ]}]},
    {kop:"Twee routes voor hetzelfde molecuul", breed:true, blocks:[
      {t:"cards",items:[
        {tag:"Werkt als hormoon",kop:"Via het bloed",x:"Zenuwuiteinden in de achterkwab van de hypofyse geven oxytocine af aan de bloedbaan. De stof kan op afstand cellen met de juiste receptor bereiken. Dan werkt ze als hormoon."},
        {tag:"Werkt als neuromodulator",kop:"Binnen je zenuwstelsel",x:"Oxytocinemakende zenuwcellen kunnen de stof ook binnen het zenuwstelsel afgeven, bijvoorbeeld via uitlopers naar andere hersengebieden. Daar kan ze de gevoeligheid van delen van een netwerk voor andere signalen veranderen. Dat noemen we neuromodulatie."}
      ]},
      {t:"lead",x:"De route bepaalt welke cellen de stof bereikt. Een bloedmeting vertelt je daarom niet rechtstreeks hoeveel oxytocine op een bepaalde plek in je hersenen is vrijgekomen.{1,3}"}]},
    {kop:"Wat kun je ervan voelen of merken?", blocks:[{t:"p",x:"Een gevoel van rust, vertrouwdheid of verbondenheid tijdens sociaal contact geeft je geen betrouwbare aanwijzing voor hoeveel oxytocine is vrijgekomen. Ook een studie die kunstmatig oxytocine toedient, beantwoordt een andere vraag dan een studie die meet wat je lichaam zelf afgeeft.{1,3}"}]}
  ],
  mv:{blocks:[{t:"cards",items:[
      {kop:"Gedeeld",x:"Zowel mannen als vrouwen maken oxytocine in de hypothalamus. Het kan via het bloed als hormoon werken en binnen het zenuwstelsel signalen bijsturen. Rond een orgasme is bij beide groepen een tijdelijke stijging in bloed gemeten. De kleine studie laat geen algemene uitspraak toe over welke groep sterker reageert.{1,6}"},
      {kop:"Bij mannen",x:"Studies bij vaders onderzochten het verband tussen de gemeten oxytocine en hoe vaders met hun baby omgaan. Ze tonen samenhang, maar laten niet op zichzelf zien dat oxytocine een sterkere band veroorzaakt. Dieronderzoek wijst ook op een mogelijke rol bij erectie en ejaculatie. Hoe groot die rol bij mannen is, blijft onzeker.{4,5}", tag:"Deels dieronderzoek"},
      {kop:"Bij vrouwen",x:"Studies bij moeders onderzochten eveneens verbanden tussen gemeten oxytocine en contact met hun baby. Een goed aangetoonde werking in specifiek weefsel is dat oxytocine spiercellen in de baarmoeder kan laten samentrekken.{1,2,4}"}
    ]},
    {t:"lead",x:"**Wat kun je vergelijken?** De studies naar sociaal gedrag bieden geen simpele algemene regel waarin oxytocine bij mannen één effect heeft en bij vrouwen een ander. De situatie, de onderzochte groep en wat er precies gemeten wordt, zijn belangrijk voor de interpretatie.{3,4}"}]},
  wist:[
    {kop:"Een deel van het molecuul vormt een ring",x:"Twee bouwstenen, allebei cysteïne, zijn verbonden door een zwavelbrug. Dat trekt een deel van de keten samen tot een ring.{1,2}"},
    {kop:"Een verschil van twee bouwstenen",x:"Oxytocine en vasopressine zijn beide negen aminozuren lang. Op slechts twee plekken staat een ander aminozuur. Vasopressine helpt onder andere je waterhuishouding regelen.{1}"},
    {kop:"Je kunt calcium twee keer tegenkomen in dezelfde route",x:"In het zenuwuiteinde helpt calcium om de stof af te geven. In een spiercel kan calcium na het opvangen van het signaal helpen die cel te laten samentrekken.{1,2}"}
  ],
  kennis:[
    {v:"Waar wordt oxytocine gemaakt voordat het aan het bloed wordt afgegeven?", opties:[
      {x:"In zenuwcellen van de hypothalamus.",juist:true,uitleg:"Hun uitlopers vervoeren het richting de achterkwab van de hypofyse."},
      {x:"In de achterkwab van de hypofyse.",juist:false,uitleg:"Daar ligt bij de zenuwuiteinden een voorraad klaar voor afgifte."}]},
    {v:"Iemand voelt zich rustig na een knuffel. Kun je hieruit afleiden hoeveel oxytocine in de hersenen is vrijgekomen?", opties:[
      {x:"Ja, meer rust betekent een hogere waarde.",juist:false,uitleg:"Het gevoel vertelt je niet hoe groot de afgifte was."},
      {x:"Nee, het gevoel is daarvoor geen betrouwbare maat.",juist:true,uitleg:"Een ervaring en een lokale meting beantwoorden verschillende vragen."}]}
  ],
  verdieping:[
    {kop:"Waar wordt het gemaakt en waaruit?", blocks:[{t:"p",x:"De hypothalamus is een hersengebied dat onder meer automatische lichaamsfuncties regelt. Daar zitten groepen zenuwcellen die het OXT-gen aflezen en uit aminozuren een eerste, langere eiwitketen maken. Die cel knipt de voorloper op specifieke plekken, zodat de werkzame keten van negen aminozuren ontstaat. Twee belangrijke celgroepen liggen in de supraoptische en paraventriculaire kern. Een kern is hier een groep zenuwcellen, diep in je hersenen.{1,2}"}]},
    {kop:"Wat stuurt aanmaak, opslag en afgifte?", blocks:[{t:"list",items:[
      {b:"Aanmaak.",x:"De cel leest het OXT-gen af en kopieert de instructie naar boodschapper-RNA. Met die kopie bouwt ze een voorlopereiwit. Na verwerking levert het voorlopereiwit oxytocine en het dragereiwit neurofysine I. Je zenuwcellen kunnen zo een voorraad opbouwen voordat je iets meemaakt. Voor dagelijkse situaties zoals aanraking is bij mensen niet rechtstreeks aangetoond dat de zenuwcel op dat moment méér van dit eiwit maakt. Bloedonderzoek volgt het resultaat van afgifte en verwijdering uit het bloed.{1,3,7}"},
      {b:"Opslag.",x:"De cel verpakt de voorloper in blaasjes. Een deel van die blaasjes reist via lange zenuwuitlopers naar de achterkwab van de hypofyse. Daar kan oxytocine in de zenuwuiteinden klaarliggen voor afgifte aan het bloed.{1,2}"},
      {b:"Afgifte.",x:"Als een zenuwimpuls het uiteinde bereikt, kan calcium de cel instromen. Dit bevordert dat blaasjes met het celmembraan versmelten en oxytocine loslaten. Bij sociaal contact is de relatie tussen de gebeurtenis en een meetbare stijging van lichaamseigen oxytocine bij mensen veel minder duidelijk.{1-3}"}
    ]}]},
    {kop:"Wat doet een doelcel met het signaal?", blocks:[
      {t:"p",x:"Oxytocine bindt aan een **oxytocinereceptor** op de doelcel. Eén bekende route loopt als volgt.{1,7}"},
      {t:"steps",items:[
        "De receptor activeert het signaaleiwit Gq.",
        "Gq activeert een enzym, fosfolipase C.",
        "Het enzym maakt uit een bestanddeel van het celmembraan onder andere de boodschapper IP<sub>3</sub>.",
        "IP<sub>3</sub> opent calciumkanalen van een voorraad binnen de cel. Het vrijgekomen calcium zet eiwitten in de doelcel aan het werk. In glad spierweefsel kan dat bijvoorbeeld leiden tot samentrekking. In zenuwnetwerken kan oxytocine beïnvloeden hoe cellen op andere signalen reageren."]},
      {t:"p",x:"Calcium speelt dus twee rollen. In de zendende cel helpt calcium bij **afgifte** van oxytocine. In de ontvangende cel helpt het bij de **reactie** op oxytocine.{1,7}"}]},
    {kop:"Hoe stopt het signaal?", blocks:[{t:"p",x:"Als de prikkel afneemt, kan de extra afgifte afnemen. De hoeveelheid oxytocine in het bloed daalt na afgifte relatief snel. De halfwaardetijd in de bloedsomloop ligt in de orde van minuten. Dat betekent dat de hoeveelheid in die tijd ongeveer halveert, terwijl het effect op een specifieke cel en het verloop in de hersenen hun eigen tijdschaal hebben.{1,2}"}]}
  ],
  woordenlijst:[
    ["aminozuur","Aminozuur","Een bouwsteen van een eiwit of korte moleculaire keten."],
    ["hypothalamus","Hypothalamus","Een hersengebied dat onder meer de hormoonhuishouding helpt regelen."],
    ["voorloper","Voorloper","Een stof die eerst moet worden verwerkt om de werkzame eindstof te krijgen."],
    ["celblaasje","Celblaasje","Een klein compartiment waarmee een cel stoffen kan bewaren, vervoeren of afgeven."],
    ["receptor","Receptor","Een eiwit dat een bepaald signaal kan opvangen."],
    ["neuromodulator","Neuromodulator","Een stof die verandert hoe zenuwcellen op signalen reageren."],
    ["halfwaardetijd","Halfwaardetijd","De tijd waarin de gemeten hoeveelheid of concentratie ongeveer halveert."]
  ],
  genummerd:[
    ["https://academic.oup.com/edrv/article/46/4/518/8030228","Endocrine Reviews: The Oxytocin System"],
    ["https://www.ncbi.nlm.nih.gov/books/NBK507848/","NCBI Bookshelf: Oxytocin"],
    ["https://pmc.ncbi.nlm.nih.gov/articles/PMC11077008/","Psychological Bulletin: Endogenous Oxytocin and Human Social Interactions"],
    ["https://pmc.ncbi.nlm.nih.gov/articles/PMC3943240/","Gordon e.a.: Oxytocin and the Development of Parenting in Humans"],
    ["https://academic.oup.com/smr/article/13/4/433/8163608","Sexual Medicine Reviews: The hormonal regulation of men’s sexual desire, arousal, and penile erection"],
    ["https://pubmed.ncbi.nlm.nih.gov/3782434/","Carmichael e.a.: Plasma oxytocin increases in the human sexual response"],
    ["https://pubmed.ncbi.nlm.nih.gov/11274341/","Gimpl en Fahrenholz: The oxytocin receptor system: structure, function, and regulation"]
  ]
}
];

/* Begrippenkaarten. pat = woordvormen die in de tekst aantikbaar worden. */
LC.begrippen = [
  {id:"hypofyse", titel:"Hypofyse", pat:"hypofyse", d:"Klier onder de hersenen. De voorkwab maakt bijvoorbeeld ACTH. De achterkwab geeft oxytocine uit zenuwuiteinden af aan het bloed."},
  {id:"hypothalamus", titel:"Hypothalamus", pat:"hypothalamus", d:"Hersengebied dat signalen over de toestand van het lichaam verwerkt en autonome en hormonale reacties aanstuurt."},
  {id:"bijniermerg", titel:"Bijniermerg", pat:"bijniermerg", d:"Binnenste deel van een bijnier. Zenuwsignalen kunnen hier afgifte van opgeslagen catecholaminen uitlokken."},
  {id:"bijnierschors", titel:"Bijnierschors", pat:"bijnierschors", d:"Buitenste deel van de bijnier. Verschillende lagen maken steroïdhormonen, waaronder cortisol en aldosteron."},
  {id:"synaps", titel:"Synaps", pat:"synaps|synapsen", d:"Overgang waar een zenuwcel een signaal aan een andere cel doorgeeft. Bij een chemische synaps overbrugt een boodschapper de tussenruimte."},
  {id:"receptor", titel:"Receptor", pat:"receptor|receptoren|oxytocinereceptor", d:"Eiwit dat een signaal opvangt. Eén type opent direct een kanaal, een ander zet eerst binnen de cel een reeks reacties in gang."},
  {id:"celblaasje", titel:"Celblaasje", syn:["blaasje","vesikel"], pat:"celblaasjes?|blaasjes?|voorraadblaasjes?", d:"Door een membraan omsloten pakketje. Bij versmelting met het celmembraan komt de inhoud vrij."},
  {id:"neurotransmitter", titel:"Neurotransmitter", pat:"neurotransmitters?", d:"Chemische boodschapper die een zenuwcel afgeeft om een andere cel te beïnvloeden."},
  {id:"hormoon", titel:"Hormoon", pat:"hormoon|hormonen", d:"Boodschapper die via het bloed doelcellen kan bereiken. Alleen cellen die erop kunnen reageren voeren het signaal uit."},
  {id:"neuromodulatie", titel:"Neuromodulatie", syn:["neuromodulator"], pat:"neuromodulatie|neuromodulator", d:"Verandering in hoe gevoelig cellen en netwerken zijn voor signalen. Kan meerdere verbindingen tegelijk beïnvloeden."},
  {id:"enzym", titel:"Enzym", pat:"enzym|enzymen", d:"Eiwit dat een reactie versnelt. Acetylcholinesterase maakt bijvoorbeeld snelle opeenvolgende spiersignalen mogelijk."},
  {id:"voorloper", titel:"Voorloper", pat:"voorlopers?|voorlopereiwit", d:"Molecuul dat een cel verwerkt tot een ander molecuul. Noradrenaline kan bijvoorbeeld worden omgezet in adrenaline."},
  {id:"ionkanaal", titel:"Ionkanaal", pat:"ionkanaal|ionkanalen", d:"Eiwit dat geladen deeltjes door het celmembraan laat bewegen. Die verplaatsing kan de elektrische spanning veranderen."},
  {id:"terugkoppeling", titel:"Terugkoppeling", pat:"terugkoppeling", d:"Een gevolg werkt terug op een eerdere stap. Cortisol remt bijvoorbeeld zijn eigen aansturing."},
  {id:"halfwaardetijd", titel:"Halfwaardetijd", pat:"halfwaardetijd", d:"Tijd waarin een gemeten hoeveelheid halveert onder bepaalde omstandigheden. De duur van een ervaring kan anders zijn."},
  {id:"bloed-hersenbarriere", titel:"Bloed-hersenbarrière", pat:"bloed-hersenbarrière", d:"Selectieve grens bij bloedvaten in de hersenen. De waarde van een stof in bloed voorspelt niet automatisch de waarde rond zenuwcellen."},
  {id:"meten-en-bewijs", titel:"Meten en bewijs", syn:["controlegroep","meting"], pat:"", d:"Een meting voor en na een activiteit kan verandering laten zien. Een controlegroep helpt bepalen wat door de activiteit komt. De plaats van meten bepaalt welke conclusie je kunt trekken."}
];
/* Extra woordvorm die alleen op de oxytocinepagina een eigen definitie heeft */
LC.extraTermen = [{id:"aminozuur", pat:"aminozuur|aminozuren"}];

LC.themaBron = "https://openstax.org/details/books/anatomy-and-physiology-2e";
LC.themas = [
  {id:"schrik-en-acute-stress", titel:"Schrik en acute stress", x:"Een onverwachte klap kan snelle zenuwreacties uitlokken. Je kunt al bewegen voordat hormonen via het bloed een doelorgaan bereiken. Sympathische zenuwen en bijniermerg helpen de lichamelijke reactie voortzetten. Verbind adrenaline, acetylcholine en noradrenaline.", rel:["adrenaline","acetylcholine","noradrenaline","b:bijniermerg"]},
  {id:"voor-de-aftrap", titel:"Vóór de aftrap", x:"De verwachting van inspanning kan je ademhaling en hartslag al veranderen. Afgifte uit zenuwuiteinden werkt plaatselijk, afgifte door het bijniermerg verspreidt de boodschap. Hetzelfde bonzen kan bij spanning, inspanning of enthousiasme passen.", rel:["adrenaline","noradrenaline","b:bijniermerg"]},
  {id:"langdurige-belasting", titel:"Langdurige belasting", x:"De stressas krijgt voortdurend terugkoppeling. Herhaalde belasting, slaap en dagritme beïnvloeden de meting. Eén cortisolwaarde onderscheidt geen drukke werkdag van langdurige stress.", rel:["cortisol","b:terugkoppeling","b:meten-en-bewijs"]},
  {id:"aandacht-en-concentratie", titel:"Aandacht en concentratie", x:"Waakzaamheid, taakverwachting en prikkels uit de omgeving beïnvloeden wat je opmerkt. Noradrenaline, acetylcholine en dopamine werken in verschillende netwerken. Een afleiding is geen persoonlijke meting van een tekort.", rel:["noradrenaline","acetylcholine","dopamine"]},
  {id:"beloning-en-gewoonte", titel:"Beloning en gewoonte", x:"Als een aanwijzing vaak gevolgd wordt door iets prettigs, kan die aanwijzing al gedrag uitlokken. Dopaminesignalen kunnen helpen de verwachting bij te stellen wanneer het gevolg anders uitpakt.", rel:["dopamine"]},
  {id:"leren-en-geheugen", titel:"Leren en geheugen", x:"Herhaalde activiteit kan verbindingen tussen zenuwcellen veranderen. Glutamaat kan receptoren activeren die bij bepaalde activiteitspatronen calcium doorlaten. Dat calcium kan processen starten die de gevoeligheid van de verbinding veranderen.", rel:["dopamine","b:synaps","b:receptor"]},
  {id:"spanning-voelen", titel:"Spanning voelen", x:"Druksensoren, hartslag, ademhaling en signalen uit je buik leveren informatie aan je hersenen. Hoe je dat interpreteert hangt ook af van de situatie. Dezelfde snelle hartslag kan voor een date anders aanvoelen dan voor een sprint.", rel:["adrenaline","noradrenaline"]},
  {id:"aantrekking-en-binding", titel:"Aantrekking en binding", x:"Aandacht voor een ander, beloning, lichamelijke opwinding en gedeelde ervaringen werken samen. Onderzoek naar oxytocine laat zien waarom een prettige aanraking en een gemeten concentratie verschillende dingen vertellen.", rel:["oxytocine","dopamine","b:meten-en-bewijs"]},
  {id:"slaap-en-biologische-klok", titel:"Slaap en biologische klok", x:"Slaapdruk groeit doorgaans met tijd wakker. Daarnaast stemt de biologische klok zich via lichtinformatie uit de ogen af op het dagritme. Melatonine geeft een signaal over biologische nacht. Adenosine helpt verklaren waarom cafeïne slaperigheid tijdelijk kan dempen.", rel:["adenosine","cortisol","histamine"]},
  {id:"koffie", titel:"Koffie", syn:["cafeïne"], x:"Nadat cafeïne is opgenomen, bereikt het de hersenen en kan het adenosinereceptoren bezetten. Het effect verandert naarmate de lever cafeïne verwerkt. De tijd sinds je laatste slaap blijft meetellen.", rel:["adenosine","g:stoffen-van-buitenaf"]},
  {id:"honger-dorst-en-verzadiging", titel:"Honger, dorst en verzadiging", x:"Ghreline uit de maag, darmhormonen zoals GLP-1 en rek van de maag dragen bij aan signalen rond eten. Dorst kan ontstaan als de concentratie opgeloste deeltjes in het bloed stijgt. Dat activeert ook de regeling van vasopressine.", rel:["b:hormoon","b:hypothalamus","oxytocine"]},
  {id:"na-een-maaltijd", titel:"Na een maaltijd", x:"Koolhydraten kunnen worden verteerd tot glucose. Een stijging van glucose stimuleert insulineafgifte door bètacellen. Spieren kunnen meer glucose opnemen en glycogeen aanvullen. Tussen maaltijden helpt glucagon de lever om glucose beschikbaar te houden.", rel:["b:hormoon","adrenaline","cortisol"]},
  {id:"van-gedachte-tot-beweging", titel:"Van gedachte tot beweging", x:"Een motorische opdracht bereikt via ruggenmerg en zenuw een spier. Acetylcholine brengt het signaal over, calcium maakt samentrekking mogelijk en ATP levert energie voor de beweging en het terugpompen van calcium.", rel:["acetylcholine","b:synaps"]},
  {id:"sprint-en-kracht", titel:"Sprint en kracht", x:"Een spier gebruikt direct ATP. Creatinefosfaat helpt ATP snel aanvullen. Ook glycolyse en oxidatieve stofwisseling leveren energie, met wisselende bijdragen. Lactaat kan elders opnieuw als brandstof dienen.", rel:["acetylcholine","adrenaline","adenosine"]},
  {id:"herstel-en-weefselreparatie", titel:"Herstel en weefselreparatie", x:"Na belasting worden brandstofvoorraden aangevuld en spiereiwitten afgebroken en opgebouwd. Bij beschadiging trekken lokale signalen afweercellen aan. Die helpen beschadigd materiaal opruimen en herstelprocessen aansturen.", rel:["cortisol","g:afweerstoffen"]},
  {id:"pijn", titel:"Pijn", x:"Zintuiguiteinden kunnen weefselschade of dreigende schade signaleren. Ruggenmerg en hersenen verwerken die informatie. Endorfines en enkefalinen kunnen via opioïdreceptoren de signaaloverdracht beïnvloeden. Daardoor verschilt pijnbeleving met context.", rel:["b:receptor","b:synaps","g:endocannabinoiden"]},
  {id:"ontsteking", titel:"Ontsteking", x:"Bij weefselbeschadiging kunnen lokale stoffen bloedvaten verwijden en doorlaatbaarder maken. Zo ontstaan warmte en zwelling. Histamine, prostaglandinen en cytokinen hebben elk eigen aangrijpingspunten en tijdschalen.", rel:["histamine","cortisol","g:afweerstoffen"]},
  {id:"koorts-jeuk-en-allergie", titel:"Koorts, jeuk en allergie", x:"Bij koorts kunnen ontstekingssignalen via prostaglandinen de temperatuurregeling veranderen. Bij allergische jeuk kunnen mestcellen histamine afgeven. De twee ervaringen hebben dus verschillende schakels binnen de afweer.", rel:["histamine","g:afweerstoffen"]},
  {id:"bloeddruk-temperatuur-en-vocht", titel:"Bloeddruk, temperatuur en vocht", x:"Binnen seconden kan een bloeddrukreflex hart en bloedvaten bijsturen. Op langere tijdschalen regelen nieren, vasopressine en aldosteron water en zout. Bij warmte helpen huiddoorbloeding en zweten warmte afvoeren.", rel:["noradrenaline","b:bijnierschors"]},
  {id:"groei-hormonen-en-levensfasen", titel:"Groei, hormonen en levensfasen", x:"Groeihormoon en IGF-1 dragen bij aan groei. Schildklierhormonen beïnvloeden stofwisseling en ontwikkeling. Tijdens puberteit verandert de aansturing van geslachtshormonen. Mannen en vrouwen maken zowel androgenen als oestrogenen. Hoeveelheid, timing, weefsel en levensfase bepalen mede de werking.", rel:["b:hormoon","b:hypofyse","cortisol"]}
];

LC.groepen = [
  {id:"endocannabinoiden", titel:"Endocannabinoïden", syn:["anandamide","2-AG"], x:"Anandamide en 2-AG zijn lichaamseigen signaalstoffen uit vetachtige voorlopers. Lokale aanmaak en snelle afbraak maken bijsturing van zenuwsignalen mogelijk.", bron:"https://pmc.ncbi.nlm.nih.gov/articles/PMC2844932/", rel:["b:synaps","b:enzym"]},
  {id:"afweerstoffen", titel:"Afweerstoffen", syn:["antistoffen","complement","interferonen"], x:"Antistoffen herkennen specifieke moleculaire kenmerken. Complement bestaat uit samenwerkende eiwitten die onder meer helpen om materiaal voor opruiming te markeren. Interferonen laten cellen reageren op signalen van infectie.", rel:["histamine"]},
  {id:"transport-en-opslag", titel:"Transport en opslag", syn:["hemoglobine","ferritine"], x:"Hemoglobine bindt zuurstof in rode bloedcellen. Ferritine bewaart ijzer in cellen. Een transporteiwit in een celmembraan kan juist stoffen van één kant naar de andere verplaatsen.", rel:["noradrenaline","b:celblaasje"]},
  {id:"mineralen-vitamines-en-cofactoren", titel:"Mineralen, vitamines en cofactoren", syn:["calcium","natrium","kalium","magnesium"], x:"Natrium en kalium zijn belangrijk voor elektrische spanning, calcium dient als intern signaal en magnesium ondersteunt tal van enzymen. Vitamines kunnen grondstof zijn voor co-enzymen die bij reacties helpen.", rel:["acetylcholine","b:ionkanaal","b:enzym"]},
  {id:"stoffen-van-buitenaf", titel:"Stoffen van buitenaf", syn:["cafeïne","nicotine","alcohol"], x:"Cafeïne beïnvloedt adenosinereceptoren. Nicotine grijpt aan op bepaalde acetylcholinereceptoren. Alcohol heeft meerdere aangrijpingspunten. De naam van een receptor verklaart waarom ook een stof van buiten je lichaam er effect kan hebben.", rel:["adenosine","acetylcholine","b:receptor"]}
];
