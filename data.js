const TOOLS = [
  {
    "name": "Symått",
    "slug": "symatt",
    "idx": 0,
    "what": "En liten måttmall med skala och urtag för fasta mått.",
    "use": "Mät ut samma sömsmån längs hela tygkanten.",
    "parts": "Skalan visar centimeter och millimeter. Urtagen hjälper dig att snabbt hitta vissa bredder.",
    "why": "En jämn sömsmån gör det lättare att sy en rak söm på rätt plats.",
    "example": "Märk ut en centimeter sömsmån på en tygbit.",
    "safe": "Lägg tyget plant på bordet och lägg undan måttet innan du klipper.",
    "error": "Om tyget sträcks medan du mäter kan markeringen hamna fel.",
    "result": "Markeringarna ligger lika långt från kanten.",
    "steps": [
      [
        "Placera måttet",
        "Lägg nollstrecket vid tygkanten."
      ],
      [
        "Markera avståndet",
        "Gör små streck vid önskat mått. Flytta måttet längs kanten och upprepa."
      ],
      [
        "Kontrollera",
        "Mät på flera ställen innan du sammanbinder strecken med en linje."
      ]
    ],
    "note": "Mät ut samma sömsmån längs hela tygkanten."
  },
  {
    "name": "Tygsax",
    "slug": "tygsax",
    "idx": 1,
    "what": "En sax med långa, vassa blad som klipper rent i tyg.",
    "use": "Klipp längs en markerad linje eller runt en mönsterdel.",
    "parts": "Saxen har två blad som möts vid en led och handtag med olika stora öppningar.",
    "why": "När det undre bladet ligger nära bordet lyfts tyget mindre och mönstret ligger stadigare.",
    "example": "Klipp till två delar till en påse.",
    "safe": "Håll fingrarna utanför klippvägen. Stäng saxen efteråt och lämna den vidare med handtaget först.",
    "error": "Papper kan göra tygsaxen slö. Använd en papperssax till mönstret.",
    "result": "Klippkanten följer linjen utan hack.",
    "steps": [
      [
        "Lägg tyget plant",
        "Se till att markeringen syns och att tyget ligger still."
      ],
      [
        "Klipp längs linjen",
        "För det undre bladet nära bordet och klipp med lugna tag. Håll andra handen vid sidan om klippvägen."
      ],
      [
        "Stäng saxen",
        "Kontrollera kanten och lägg ifrån dig saxen med bladen stängda."
      ]
    ],
    "note": "Klipp längs en markerad linje eller runt en mönsterdel."
  },
  {
    "name": "Knappnålar",
    "slug": "knappnalar",
    "idx": 2,
    "what": "Vassa nålar med huvud som håller ihop tyg tillfälligt.",
    "use": "Nåla ihop tyglager inför sömnad eller nåla fast ett pappersmönster.",
    "parts": "Huvudet ger grepp. Spetsen går ner genom lagren och upp igen en bit bort.",
    "why": "När nålen går igenom båda lagren ligger tygkanterna kvar i rätt läge.",
    "example": "Håll ihop två tygdelar räta mot räta innan du syr.",
    "safe": "Sätt tillbaka nålarna i nålskålen. Håll dem borta från munnen och ta bort dem innan de når symaskinens nål.",
    "error": "Om nålen bara går genom översta lagret kan delarna glida isär.",
    "result": "Lagren ligger jämnt och nålarna kan tas bort en i taget.",
    "steps": [
      [
        "Lägg kanterna jämnt",
        "Rikta in båda tyglagren."
      ],
      [
        "Nåla genom båda lagren",
        "För spetsen ner genom tyget och upp igen en bit bort."
      ],
      [
        "Ta bort nålen",
        "Dra ut den i huvudet innan du syr förbi den."
      ]
    ],
    "note": "Nåla ihop tyglager inför sömnad eller nåla fast ett pappersmönster."
  },
  {
    "name": "Synål",
    "slug": "handsynal",
    "idx": 3,
    "what": "En vass nål med ett öga för sytråden.",
    "use": "Sy för hand, till exempel förstygn eller en enkel lagning.",
    "parts": "Den vassa spetsen går igenom tyget. Ögat drar med sig tråden.",
    "why": "Förstygn går växelvis på tygets fram- och baksida. På framsidan syns en rad korta streck.",
    "example": "Tråckla ihop två tygbitar inför provning.",
    "safe": "Håll fingrarna vid sidan om nålens väg. Förvara nålen i en nåldyna eller ask.",
    "error": "Om du drar tråden för hårt kan tyget rynka sig.",
    "result": "Stygnen följer linjen och tyget ligger slätt.",
    "steps": [
      [
        "Trä nålen",
        "För tråden genom ögat och gör en knut i den långa trådänden."
      ],
      [
        "Sy förstygn",
        "För nålen upp, ner och upp igen längs linjen. Dra igenom tråden efter varje stygn."
      ],
      [
        "Fäst tråden",
        "Avsluta på avigsidan och fäst tråden med små stygn."
      ]
    ],
    "note": "Sy för hand, till exempel förstygn eller en enkel lagning."
  },
  {
    "name": "Nålträdare",
    "slug": "naltradare",
    "idx": 4,
    "what": "Ett handtag med en tunn metallögla som hjälper dig att trä en synål.",
    "use": "Använd den när det är svårt att få sytråden genom nålsögat.",
    "parts": "Metallöglan kan tryckas ihop när den passerar nålsögat.",
    "why": "Öglan ger dig en större öppning att trä tråden genom.",
    "example": "Trä en handsynål innan du syr fast en knapp.",
    "safe": "Håll nålens spets bort från handen. Dra försiktigt så att metallöglan inte går av.",
    "error": "Om öglan eller tråden fastnar, sluta dra och välj en nål med större öga.",
    "result": "En ögla av sytråd kommer igenom nålsögat.",
    "steps": [
      [
        "För in metallöglan",
        "Trä nålträdarens metallögla genom nålsögat."
      ],
      [
        "Lägg i tråden",
        "För trådänden genom metallöglan."
      ],
      [
        "Dra tillbaka öglan",
        "Dra öglan tillbaka genom nålsögat och dra sedan ut ena trådänden."
      ]
    ],
    "note": "Använd den när det är svårt att få sytråden genom nålsögat."
  },
  {
    "name": "Tvåhålsknapp",
    "slug": "tvahalsknapp",
    "idx": 5,
    "what": "En knapp med två hål som sys fast på tyget.",
    "use": "Sy fast knappen genom att använda samma hålpar flera gånger.",
    "parts": "De två hålen ligger bredvid varandra. Tråden går som ett streck mellan dem på knappens ovansida.",
    "why": "Flera stygn genom samma hålpar gör att knappen sitter stadigt.",
    "example": "Ersätt en knapp som lossnat på en skjorta.",
    "safe": "Håll fingrarna vid sidan om hålen när nålen kommer upp. Lägg tillbaka nålen när du är klar.",
    "error": "Om stygnen dras för hårt kan knappen bli svår att knäppa, särskilt i tjockt tyg.",
    "result": "Knappen sitter stadigt och går igenom knapphålet.",
    "steps": [
      [
        "Placera knappen",
        "Markera läget och för nålen upp från tygets avigsida genom första hålet."
      ],
      [
        "Sy genom samma hålpar",
        "För nålen ner genom andra hålet. Upprepa några gånger."
      ],
      [
        "Fäst på avigsidan",
        "Fäst tråden med små stygn på baksidan och prova knäppningen."
      ]
    ],
    "note": "Sy fast knappen genom att använda samma hålpar flera gånger."
  },
  {
    "name": "Fyrhålsknapp",
    "slug": "fyrhalsknapp",
    "idx": 6,
    "what": "En knapp med fyra hål som sys fast med två hålpar.",
    "use": "Sy genom båda hålparen. Här visas två parallella streck.",
    "parts": "Två hål sitter i den övre raden och två i den undre. Du kan också sy diagonalt så att stygnen bildar ett kryss.",
    "why": "När stygnen går genom båda hålparen hålls knappen på plats på båda sidor.",
    "example": "Sy fast en ny knapp på en väska eller ett plagg.",
    "safe": "Håll fingrarna vid sidan om hålen. Lägg tillbaka nålen i nåldynan när du är klar.",
    "error": "Om du glömmer det andra hålparet sitter knappen bara fast på ena sidan.",
    "result": "Båda hålparen har flera stygn och knappen går att använda.",
    "steps": [
      [
        "Sy första hålparet",
        "För nålen upp från avigsidan genom det övre vänstra hålet och ner genom det övre högra. Upprepa."
      ],
      [
        "Byt hålpar under knappen",
        "För tråden på tygets avigsida till nästa par. Sy upp genom det nedre vänstra hålet och ner genom det nedre högra. Upprepa."
      ],
      [
        "Fäst på avigsidan",
        "Fäst tråden med små stygn på baksidan. På framsidan syns två parallella streck."
      ]
    ],
    "note": "Sy genom båda hålparen. Här visas två parallella streck."
  },
  {
    "name": "Stoppnål",
    "slug": "tradnal",
    "idx": 7,
    "what": "En nål med stort öga för garn. Den här stoppnålen har trubbig spets.",
    "use": "Fäst garnändar i stickat eller virkat arbete.",
    "parts": "Det stora ögat rymmer garnet. Den trubbiga spetsen glider under maskorna och minskar risken att dela garnet.",
    "why": "När garnänden följer maskorna på avigsidan hålls den på plats.",
    "example": "Fäst garnänden på baksidan av en rätstickad provlapp.",
    "safe": "Håll fingrarna vid sidan om nålens väg och lägg tillbaka nålen i asken efteråt.",
    "error": "Om du drar åt hårt kan maskorna rynka sig.",
    "result": "Garnänden ligger dold på avigsidan och arbetet ligger slätt.",
    "steps": [
      [
        "Trä stoppnålen",
        "För garnänden genom det stora ögat."
      ],
      [
        "För nålen under maskorna",
        "Arbeta på avigsidan. För nålen under flera maskbågar och dra igenom garnänden."
      ],
      [
        "Byt riktning och fäst",
        "Gå tillbaka under närliggande maskbågar. Klipp av det som sticker ut utan att klippa i arbetet."
      ]
    ],
    "note": "Här fäster du en garnände på avigsidan av ett stickat arbete."
  },
  {
    "name": "Virknål",
    "slug": "virknal",
    "idx": 8,
    "what": "Ett skaft med en krok som fångar garnet.",
    "use": "Virka ihop öglor till maskor. Här visas hur du gör en luftmaska.",
    "parts": "Kroken fångar garnet och skaftet håller öglan medan du arbetar.",
    "why": "Varje gång du drar garnet genom öglan bildas en ny maska i kedjan.",
    "example": "Börja virka en kedja av luftmaskor.",
    "safe": "Håll ett avslappnat grepp. Lägg ner virknålen när du går från bordet.",
    "error": "Om du drar åt öglan för hårt blir det svårt att dra igenom garnet.",
    "result": "Kedjan har jämnstora maskor och en arbetsögla sitter kvar på nålen.",
    "steps": [
      [
        "Sätt en startögla på nålen",
        "Gör en löpögla och låt den sitta så löst att nålen kan röra sig."
      ],
      [
        "Fånga garnet",
        "För kroken under garnet som går till nystanet."
      ],
      [
        "Dra garnet genom öglan",
        "Vrid kroken lätt så att den kommer igenom och dra med garnet. Den nya öglan sitter kvar på nålen."
      ]
    ],
    "note": "Virka ihop öglor till maskor. Här visas hur du gör en luftmaska."
  }
];
