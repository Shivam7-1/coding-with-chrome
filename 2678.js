(self.webpackChunkcoding_with_chrome=self.webpackChunkcoding_with_chrome||[]).push([[2678],{82678:function(T,s){var _,e,E;e=[],void 0===(E="function"==typeof(_=function(){"use strict";var T=T||{Msg:Object.create(null)};return T.Msg.ADD_COMMENT="Megjegyzés hozzáadása",T.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE="A(z) „%1” változó nem törölhető, mert része a(z) „%2” függvény definíciójának.",T.Msg.CHANGE_VALUE_TITLE="Érték módosítása:",T.Msg.CLEAN_UP="Blokkok kiürítése",T.Msg.COLLAPSED_WARNINGS_WARNING="Az összecsukott blokk figyelmeztetéseket tartalmaz.",T.Msg.COLLAPSE_ALL="Blokkok összecsukása",T.Msg.COLLAPSE_BLOCK="Blokk összecsukása",T.Msg.COLOUR_BLEND_COLOUR1="szín 1",T.Msg.COLOUR_BLEND_COLOUR2="szín 2",T.Msg.COLOUR_BLEND_HELPURL="https://meyerweb.com/eric/tools/color-blend/#:::rgbp",T.Msg.COLOUR_BLEND_RATIO="arány",T.Msg.COLOUR_BLEND_TITLE="színkeverés",T.Msg.COLOUR_BLEND_TOOLTIP="Két színt kever össze a megadott arányban (0.0 - 1.0).",T.Msg.COLOUR_PICKER_HELPURL="https://hu.wikipedia.org/wiki/Szín",T.Msg.COLOUR_PICKER_TOOLTIP="Válassz színt a palettáról.",T.Msg.COLOUR_RANDOM_HELPURL="http://randomcolour.com",T.Msg.COLOUR_RANDOM_TITLE="véletlen szín",T.Msg.COLOUR_RANDOM_TOOLTIP="Véletlenszerűen kiválasztott szín.",T.Msg.COLOUR_RGB_BLUE="kék",T.Msg.COLOUR_RGB_GREEN="zöld",T.Msg.COLOUR_RGB_HELPURL="https://www.december.com/html/spec/colorpercompact.html",T.Msg.COLOUR_RGB_RED="vörös",T.Msg.COLOUR_RGB_TITLE="Szín",T.Msg.COLOUR_RGB_TOOLTIP="Szín előállítása a megadott vörös, zöld, és kék értékekkel.  Minden értéknek 0 és 100 közé kell esnie.",T.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL="https://github.com/google/blockly/wiki/Loops#loop-termination-blocks",T.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK="befejezi az ismétlést",T.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE="folytatja a következővel",T.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK="Megszakítja az utasítást tartalmazó ciklust.",T.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE="Kihagyja a ciklus további részét, és elölről kezdi a következő elemmel.",T.Msg.CONTROLS_FLOW_STATEMENTS_WARNING="Figyelem: Ez a blokk csak cikluson belül használható.",T.Msg.CONTROLS_FOREACH_HELPURL="https://github.com/google/blockly/wiki/Loops#for-each",T.Msg.CONTROLS_FOREACH_TITLE="minden %1 elemre a %2 listában",T.Msg.CONTROLS_FOREACH_TOOLTIP="A '%1' változó minden lépésben megkapja a lista adott elemének értékét, és végrehajt vele néhány utasítást.",T.Msg.CONTROLS_FOR_HELPURL="https://github.com/google/blockly/wiki/Loops#count-with",T.Msg.CONTROLS_FOR_TITLE="számolj %1 értékével %2 és %3 között %4 lépésközzel",T.Msg.CONTROLS_FOR_TOOLTIP="A(z) '%1' változó felveszi a kezdőérték és a végérték közötti értékeket a meghatározott lépésközzel. Eközben a meghatározott blokkokat hajtja végre.",T.Msg.CONTROLS_IF_ELSEIF_TOOLTIP="Feltétel hozzáadása a ha blokkhoz.",T.Msg.CONTROLS_IF_ELSE_TOOLTIP="Végső feltétel hozzáadása a ha blokkhoz.",T.Msg.CONTROLS_IF_HELPURL="https://github.com/google/blockly/wiki/IfElse",T.Msg.CONTROLS_IF_IF_TOOLTIP="A ha blokk testreszabásához bővítsd, töröld vagy rendezd át a részeit.",T.Msg.CONTROLS_IF_MSG_ELSE="különben",T.Msg.CONTROLS_IF_MSG_ELSEIF="különben ha",T.Msg.CONTROLS_IF_MSG_IF="ha",T.Msg.CONTROLS_IF_TOOLTIP_1="Ha a kifejezés igaz, akkor végrehajtja az utasításokat.",T.Msg.CONTROLS_IF_TOOLTIP_2="Ha a kifejezés igaz, akkor végrehajtja az első utasításblokkot. Különben a második utasításblokk kerül végrehajtásra.",T.Msg.CONTROLS_IF_TOOLTIP_3="Ha az első kifejezés igaz, akkor végrehajtja az első utasításblokkot. Különben, ha a második kifejezés igaz, akkor végrehajtja a második utasítás blokkot.",T.Msg.CONTROLS_IF_TOOLTIP_4="Ha az első kifejezés igaz, akkor végrehajtjuk az első utasítás blokkot.  Ha a második kifejezés igaz, akkor végrehajtjuk a második utasítás blokkot.  Amennyiben egyik kifejezés sem igaz, akkor az utolsó utasítás blokk kerül végrehajtásra.",T.Msg.CONTROLS_REPEAT_HELPURL="https://hu.wikipedia.org/wiki/Ciklus_(programoz%C3%A1s)#Sz.C3.A1ml.C3.A1l.C3.B3s_.28FOR.29_ciklus",T.Msg.CONTROLS_REPEAT_INPUT_DO="",T.Msg.CONTROLS_REPEAT_TITLE="ismételd %1 alkalommal",T.Msg.CONTROLS_REPEAT_TOOLTIP="Megadott kódrészlet ismételt végrehajtása.",T.Msg.CONTROLS_WHILEUNTIL_HELPURL="https://github.com/google/blockly/wiki/Loops#repeat",T.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL="ismételd amíg",T.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE="ismételd amíg",T.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL="Amíg a feltétel hamis, végrehajtja az utasításokat.",T.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE="Amíg a feltétel igaz, végrehajtja az utasításokat.",T.Msg.DELETE_ALL_BLOCKS="Az összes %1 blokk törlése?",T.Msg.DELETE_BLOCK="Blokk törlése",T.Msg.DELETE_VARIABLE="A(z) „%1” változó törlése",T.Msg.DELETE_VARIABLE_CONFIRMATION="A(z) „%2” változó %1 használatának törlése?",T.Msg.DELETE_X_BLOCKS="%1 blokk törlése",T.Msg.DIALOG_CANCEL="Mégse",T.Msg.DIALOG_OK="OK",T.Msg.DISABLE_BLOCK="Blokk letiltása",T.Msg.DUPLICATE_BLOCK="Másolat",T.Msg.DUPLICATE_COMMENT="Duplicate Comment",T.Msg.ENABLE_BLOCK="Blokk engedélyezése",T.Msg.EXPAND_ALL="Blokkok kinyitása",T.Msg.EXPAND_BLOCK="Blokk kinyitása",T.Msg.EXTERNAL_INPUTS="Külső kapcsolatok",T.Msg.HELP="Súgó",T.Msg.INLINE_INPUTS="Belső kapcsolatok",T.Msg.LISTS_CREATE_EMPTY_HELPURL="https://github.com/google/blockly/wiki/Lists#create-empty-list",T.Msg.LISTS_CREATE_EMPTY_TITLE="üres lista",T.Msg.LISTS_CREATE_EMPTY_TOOLTIP="Elemeket nem tartalmazó üres listát ad eredményül",T.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD="lista",T.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP="Add, remove, or reorder sections to reconfigure this list block.",T.Msg.LISTS_CREATE_WITH_HELPURL="https://github.com/google/blockly/wiki/Lists#create-list-with",T.Msg.LISTS_CREATE_WITH_INPUT_WITH="Lista készítés, elemek:",T.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP="Elem hozzáadása listához.",T.Msg.LISTS_CREATE_WITH_TOOLTIP="Listát készít a megadott elemekből.",T.Msg.LISTS_GET_INDEX_FIRST="az első",T.Msg.LISTS_GET_INDEX_FROM_END="a végétől számított",T.Msg.LISTS_GET_INDEX_FROM_START="az elejétől számított",T.Msg.LISTS_GET_INDEX_GET="listából értéke",T.Msg.LISTS_GET_INDEX_GET_REMOVE="listából kivétele",T.Msg.LISTS_GET_INDEX_LAST="az utolsó",T.Msg.LISTS_GET_INDEX_RANDOM="bármely",T.Msg.LISTS_GET_INDEX_REMOVE="listából törlése",T.Msg.LISTS_GET_INDEX_TAIL="elemnek",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST="A lista első elemét adja eredményül.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM="A lista megadott sorszámú elemét adja eredményül.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST="A lista utolsó elemét adja eredményül.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM="A lista véletlenszerűen választott elemét adja eredményül.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST="Az első elem kivétele a listából.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM="A megadott sorszámú elem kivétele a listából.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST="Az utolsó elem kivétele a listából.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM="Véletlenszerűen választott elem kivétele a listából.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST="Az első elem törlése a listából.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM="A megadott sorszámú elem törlése a listából.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST="Az utolsó elem törlése a listából.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM="Véletlenszerűen választott elem törlése a listából.",T.Msg.LISTS_GET_SUBLIST_END_FROM_END="és a végétől számított",T.Msg.LISTS_GET_SUBLIST_END_FROM_START="és az elejétől számított",T.Msg.LISTS_GET_SUBLIST_END_LAST="és az utolsó",T.Msg.LISTS_GET_SUBLIST_HELPURL="https://github.com/google/blockly/wiki/Lists#getting-a-sublist",T.Msg.LISTS_GET_SUBLIST_START_FIRST="részlistája az első",T.Msg.LISTS_GET_SUBLIST_START_FROM_END="részlistája a végétől számított",T.Msg.LISTS_GET_SUBLIST_START_FROM_START="részlistája az elejétől számított",T.Msg.LISTS_GET_SUBLIST_TAIL="elem között",T.Msg.LISTS_GET_SUBLIST_TOOLTIP="A lista adott részéről másolat.",T.Msg.LISTS_INDEX_FROM_END_TOOLTIP="%1 az utolsó elemet jelenti.",T.Msg.LISTS_INDEX_FROM_START_TOOLTIP="%1 az első elemet jelenti.",T.Msg.LISTS_INDEX_OF_FIRST="listában első előfordulásaː",T.Msg.LISTS_INDEX_OF_HELPURL="https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list",T.Msg.LISTS_INDEX_OF_LAST="listában utolsó előfordulásaː",T.Msg.LISTS_INDEX_OF_TOOLTIP="A megadott elem első vagy utolsó előfordulásával tér vissza. Ha nem talál ilyen elemet, akkor %1 a visszatérési érték.",T.Msg.LISTS_INLIST="A(z)",T.Msg.LISTS_ISEMPTY_HELPURL="https://github.com/google/blockly/wiki/Lists#is-empty",T.Msg.LISTS_ISEMPTY_TITLE="%1 üres lista?",T.Msg.LISTS_ISEMPTY_TOOLTIP="Az eredmény igaz, ha a lista nem tartalmaz elemeket.",T.Msg.LISTS_LENGTH_HELPURL="https://github.com/google/blockly/wiki/Lists#length-of",T.Msg.LISTS_LENGTH_TITLE="%1 lista hossza",T.Msg.LISTS_LENGTH_TOOLTIP="A lista elemszámát adja eredményül.",T.Msg.LISTS_REPEAT_HELPURL="https://github.com/google/blockly/wiki/Lists#create-list-with",T.Msg.LISTS_REPEAT_TITLE="Lista készítése %1 elemet %2 alkalommal hozzáadva",T.Msg.LISTS_REPEAT_TOOLTIP="A megadtott elem felhasználásával n elemű listát készít",T.Msg.LISTS_REVERSE_HELPURL="https://github.com/google/blockly/wiki/Lists#reversing-a-list",T.Msg.LISTS_REVERSE_MESSAGE0="%1 megfordítása",T.Msg.LISTS_REVERSE_TOOLTIP="Megfordítja a lista másolatát.",T.Msg.LISTS_SET_INDEX_HELPURL="https://github.com/google/blockly/wiki/Lists#in-list--set",T.Msg.LISTS_SET_INDEX_INPUT_TO="elemkéntː",T.Msg.LISTS_SET_INDEX_INSERT="listába szúrd be",T.Msg.LISTS_SET_INDEX_SET="listába állítsd be",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST="Beszúrás a lista elejére.",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM="Beszúrás a megadott sorszámú elem elé a listában.",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST="Beszúrás a lista végére.",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM="Beszúrás véletlenszerűen választott elem elé a listában.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST="Az első elem cseréje a listában.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM="A megadott sorszámú elem cseréje a listában.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST="Az utolsó elem cseréje a listában.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM="Véletlenszerűen választott elem cseréje a listában.",T.Msg.LISTS_SORT_HELPURL="https://github.com/google/blockly/wiki/Lists#sorting-a-list",T.Msg.LISTS_SORT_ORDER_ASCENDING="növekvő",T.Msg.LISTS_SORT_ORDER_DESCENDING="csökkenő",T.Msg.LISTS_SORT_TITLE="%1 %2 %3 rendezés",T.Msg.LISTS_SORT_TOOLTIP="Egy lista egy másolatának rendezése.",T.Msg.LISTS_SORT_TYPE_IGNORECASE="betűrendben nagybetű figyelmen kívül hagyásával",T.Msg.LISTS_SORT_TYPE_NUMERIC="numerikus",T.Msg.LISTS_SORT_TYPE_TEXT="betűrendben",T.Msg.LISTS_SPLIT_HELPURL="https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists",T.Msg.LISTS_SPLIT_LIST_FROM_TEXT="lista készítése szövegből",T.Msg.LISTS_SPLIT_TEXT_FROM_LIST="sztring készítése listából",T.Msg.LISTS_SPLIT_TOOLTIP_JOIN="A lista elemeit összefűzi szöveggé a határoló karaktereket is felhasználva.",T.Msg.LISTS_SPLIT_TOOLTIP_SPLIT="Listát készít a határoló karaktereknél törve a szöveget.",T.Msg.LISTS_SPLIT_WITH_DELIMITER="határoló karakter",T.Msg.LOGIC_BOOLEAN_FALSE="hamis",T.Msg.LOGIC_BOOLEAN_HELPURL="https://github.com/google/blockly/wiki/Logic#values",T.Msg.LOGIC_BOOLEAN_TOOLTIP="Igaz, vagy hamis érték",T.Msg.LOGIC_BOOLEAN_TRUE="igaz",T.Msg.LOGIC_COMPARE_HELPURL="https://hu.wikipedia.org/wiki/Egyenl%C5%91tlens%C3%A9g",T.Msg.LOGIC_COMPARE_TOOLTIP_EQ="Igaz, ha a kifejezés két oldala egyenlő.",T.Msg.LOGIC_COMPARE_TOOLTIP_GT="Igaz, ha a bal oldali kifejezés nagyobb, mint a jobb oldali.",T.Msg.LOGIC_COMPARE_TOOLTIP_GTE="Igaz, ha a bal oldali kifejezés nagyobb vagy egyenlő, mint a jobb oldali.",T.Msg.LOGIC_COMPARE_TOOLTIP_LT="Igaz, ha a bal oldali kifejezés kisebb, mint a jobb oldali.",T.Msg.LOGIC_COMPARE_TOOLTIP_LTE="Igaz, ha a bal oldali kifejezés kisebb vagy egyenlő, mint a jobb oldali.",T.Msg.LOGIC_COMPARE_TOOLTIP_NEQ="Igaz, ha a kifejezés két oldala nem egyenlő..",T.Msg.LOGIC_NEGATE_HELPURL="https://github.com/google/blockly/wiki/Logic#not",T.Msg.LOGIC_NEGATE_TITLE="nem %1",T.Msg.LOGIC_NEGATE_TOOLTIP="Igaz, ha a kifejezés hamis.  Hamis, ha a kifejezés igaz.",T.Msg.LOGIC_NULL="null",T.Msg.LOGIC_NULL_HELPURL="https://en.wikipedia.org/wiki/Nullable_type",T.Msg.LOGIC_NULL_TOOLTIP="null érték.",T.Msg.LOGIC_OPERATION_AND="és",T.Msg.LOGIC_OPERATION_HELPURL="https://github.com/google/blockly/wiki/Logic#logical-operations",T.Msg.LOGIC_OPERATION_OR="vagy",T.Msg.LOGIC_OPERATION_TOOLTIP_AND="Igaz, ha mindkét kifejezés igaz.",T.Msg.LOGIC_OPERATION_TOOLTIP_OR="Igaz, ha legalább az egyik kifejezés igaz.",T.Msg.LOGIC_TERNARY_CONDITION="vizsgáld meg:",T.Msg.LOGIC_TERNARY_HELPURL="https://en.wikipedia.org/wiki/%3F:",T.Msg.LOGIC_TERNARY_IF_FALSE="érték, ha hamis:",T.Msg.LOGIC_TERNARY_IF_TRUE="érték, ha igaz:",T.Msg.LOGIC_TERNARY_TOOLTIP='Kiértékeli a megvizsgálandó kifejezést. Ha a kifejezés igaz, visszatér az "érték, ha igaz" értékkel, különben az "érték, ha hamis" értékkel.',T.Msg.MATH_ADDITION_SYMBOL="+",T.Msg.MATH_ARITHMETIC_HELPURL="https://hu.wikipedia.org/wiki/Matematikai_m%C5%B1velet",T.Msg.MATH_ARITHMETIC_TOOLTIP_ADD="Két szám összege.",T.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE="Két szám hányadosa.",T.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS="Két szám különbsége.",T.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY="Két szám szorzata.",T.Msg.MATH_ARITHMETIC_TOOLTIP_POWER="Az első számnak a második számmal megegyező hatványa.",T.Msg.MATH_ATAN2_HELPURL="https://hu.wikipedia.org/wiki/Arctg2",T.Msg.MATH_ATAN2_TITLE="Arctg2 X:%1 Y:%2",T.Msg.MATH_ATAN2_TOOLTIP="Az (X,Y) pont arkusz tangens értéke fokban -180 és 180 között.",T.Msg.MATH_CHANGE_HELPURL="https://hu.wikipedia.org/wiki/JavaScript#Aritmetikai_oper.C3.A1torok",T.Msg.MATH_CHANGE_TITLE="növeld %1 értékét %2 -vel",T.Msg.MATH_CHANGE_TOOLTIP='A "%1" változó értékének növelése egy számmal.',T.Msg.MATH_CONSTANT_HELPURL="https://hu.wikipedia.org/wiki/Matematikai_konstans",T.Msg.MATH_CONSTANT_TOOLTIP="Ismert matematikai konstans: π (3.141…), e (2.718…), φ (1.618…), gyök(2) (1.414…), gyök(½) (0.707…), vagy ∞ (végtelen).",T.Msg.MATH_CONSTRAIN_HELPURL="https://en.wikipedia.org/wiki/Clamping_(graphics)",T.Msg.MATH_CONSTRAIN_TITLE="korlátozd %1-t %2 és %3 közé",T.Msg.MATH_CONSTRAIN_TOOLTIP="Egy változó értékének korlátozása a megadott zárt intervallumra.",T.Msg.MATH_DIVISION_SYMBOL="÷",T.Msg.MATH_IS_DIVISIBLE_BY="-nek osztója",T.Msg.MATH_IS_EVEN="páros",T.Msg.MATH_IS_NEGATIVE="negatív",T.Msg.MATH_IS_ODD="páratlan",T.Msg.MATH_IS_POSITIVE="pozitív",T.Msg.MATH_IS_PRIME="prím",T.Msg.MATH_IS_TOOLTIP="Ellenőrzi, hogy a szám páros, páratlan, prím, egész, pozitív vagy negatív-e, illetve osztható-e a másodikkal. Igaz, vagy hamis értéket ad eredményül.",T.Msg.MATH_IS_WHOLE="egész",T.Msg.MATH_MODULO_HELPURL="https://hu.wikipedia.org/wiki/Eg%C3%A9szr%C3%A9sz#Als.C3.B3_eg.C3.A9szr.C3.A9sz",T.Msg.MATH_MODULO_TITLE="%1 ÷ %2 maradéka",T.Msg.MATH_MODULO_TOOLTIP="Az egész osztás maradékát adja eredméynül.",T.Msg.MATH_MULTIPLICATION_SYMBOL="×",T.Msg.MATH_NUMBER_HELPURL="https://hu.wikipedia.org/wiki/Sz%C3%A1m",T.Msg.MATH_NUMBER_TOOLTIP="Egy szám.",T.Msg.MATH_ONLIST_HELPURL="",T.Msg.MATH_ONLIST_OPERATOR_AVERAGE="lista elemeinek átlaga",T.Msg.MATH_ONLIST_OPERATOR_MAX="lista legnagyobb eleme",T.Msg.MATH_ONLIST_OPERATOR_MEDIAN="lista mediánja",T.Msg.MATH_ONLIST_OPERATOR_MIN="lista legkisebb eleme",T.Msg.MATH_ONLIST_OPERATOR_MODE="lista módusza",T.Msg.MATH_ONLIST_OPERATOR_RANDOM="lista véletlen eleme",T.Msg.MATH_ONLIST_OPERATOR_STD_DEV="lista elemeinek szórása",T.Msg.MATH_ONLIST_OPERATOR_SUM="lista elemeinek összege",T.Msg.MATH_ONLIST_TOOLTIP_AVERAGE="A lista elemeinek átlagát adja eredményül.",T.Msg.MATH_ONLIST_TOOLTIP_MAX="A lista legnagyobb elemét adja vissza.",T.Msg.MATH_ONLIST_TOOLTIP_MEDIAN="A lista elemeinek mediánját adja eredményül.",T.Msg.MATH_ONLIST_TOOLTIP_MIN="A lista legkisebb elemét adja vissza.",T.Msg.MATH_ONLIST_TOOLTIP_MODE="A lista elemeinek móduszát adja eredményül.",T.Msg.MATH_ONLIST_TOOLTIP_RANDOM="A lista egy véletlen elemét adja eredményül.",T.Msg.MATH_ONLIST_TOOLTIP_STD_DEV="A lista elemeinek szórását adja eredményül.",T.Msg.MATH_ONLIST_TOOLTIP_SUM="A lista elemeinek összegét adja eredményül.",T.Msg.MATH_POWER_SYMBOL="^",T.Msg.MATH_RANDOM_FLOAT_HELPURL="https://hu.wikipedia.org/wiki/V%C3%A9letlen",T.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM="véletlen tört",T.Msg.MATH_RANDOM_FLOAT_TOOLTIP="Véletlen tört érték 0.0 és 1.0 között.",T.Msg.MATH_RANDOM_INT_HELPURL="https://hu.wikipedia.org/wiki/V%C3%A9letlen",T.Msg.MATH_RANDOM_INT_TITLE="véletlen egész szám %1 között %2",T.Msg.MATH_RANDOM_INT_TOOLTIP="Véletlen egész szám a megadott zárt intervallumon belül.",T.Msg.MATH_ROUND_HELPURL="https://hu.wikipedia.org/wiki/Eg%C3%A9szr%C3%A9sz#Kerek.C3.ADt.C3.A9s",T.Msg.MATH_ROUND_OPERATOR_ROUND="kerekítsd",T.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN="kerekítsd lefelé",T.Msg.MATH_ROUND_OPERATOR_ROUNDUP="kerekítsd felfelé",T.Msg.MATH_ROUND_TOOLTIP="Egy szám kerekítése felfelé vagy lefelé.",T.Msg.MATH_SINGLE_HELPURL="https://hu.wikipedia.org/wiki/Gy%C3%B6kvon%C3%A1s",T.Msg.MATH_SINGLE_OP_ABSOLUTE="abszolútérték",T.Msg.MATH_SINGLE_OP_ROOT="négyzetgyök",T.Msg.MATH_SINGLE_TOOLTIP_ABS="A szám abszolútértéke.",T.Msg.MATH_SINGLE_TOOLTIP_EXP="Az e megadott számú hatványa.",T.Msg.MATH_SINGLE_TOOLTIP_LN="A szám természetes alapú logaritmusa.",T.Msg.MATH_SINGLE_TOOLTIP_LOG10="A szám 10-es alapú logaritmusa.",T.Msg.MATH_SINGLE_TOOLTIP_NEG="A szám -1 szerese.",T.Msg.MATH_SINGLE_TOOLTIP_POW10="A 10 megadott számú hatványa.",T.Msg.MATH_SINGLE_TOOLTIP_ROOT="A szám négyzetgyöke.",T.Msg.MATH_SUBTRACTION_SYMBOL="-",T.Msg.MATH_TRIG_ACOS="acos",T.Msg.MATH_TRIG_ASIN="asin",T.Msg.MATH_TRIG_ATAN="atan",T.Msg.MATH_TRIG_COS="cos",T.Msg.MATH_TRIG_HELPURL="https://hu.wikipedia.org/wiki/Sz%C3%B6gf%C3%BCggv%C3%A9nyek",T.Msg.MATH_TRIG_SIN="sin",T.Msg.MATH_TRIG_TAN="tan",T.Msg.MATH_TRIG_TOOLTIP_ACOS="A fokban megadott szög arkusz koszinusz értéke.",T.Msg.MATH_TRIG_TOOLTIP_ASIN="A fokban megadott szög arkusz szinusz értéke.",T.Msg.MATH_TRIG_TOOLTIP_ATAN="A fokban megadott szög arkusz tangens értéke.",T.Msg.MATH_TRIG_TOOLTIP_COS="A fokban megadott szög koszinusz értéke.",T.Msg.MATH_TRIG_TOOLTIP_SIN="A fokban megadott szög szinusz értéke.",T.Msg.MATH_TRIG_TOOLTIP_TAN="A fokban megadott szög tangens értéke.",T.Msg.NEW_COLOUR_VARIABLE="Create colour variable...",T.Msg.NEW_NUMBER_VARIABLE="Create number variable...",T.Msg.NEW_STRING_VARIABLE="Create string variable...",T.Msg.NEW_VARIABLE="Változó létrehozása…",T.Msg.NEW_VARIABLE_TITLE="Az új változó neve:",T.Msg.NEW_VARIABLE_TYPE_TITLE="Az új változó típusa:",T.Msg.ORDINAL_NUMBER_SUFFIX=".",T.Msg.PROCEDURES_ALLOW_STATEMENTS="utasítások engedélyezése",T.Msg.PROCEDURES_BEFORE_PARAMS="paraméterlistaː",T.Msg.PROCEDURES_CALLNORETURN_HELPURL="https://hu.wikipedia.org/wiki/F%C3%BCggv%C3%A9ny_(programoz%C3%A1s)",T.Msg.PROCEDURES_CALLNORETURN_TOOLTIP="Végrehajtja az eljárást.",T.Msg.PROCEDURES_CALLRETURN_HELPURL="https://hu.wikipedia.org/wiki/F%C3%BCggv%C3%A9ny_(programoz%C3%A1s)",T.Msg.PROCEDURES_CALLRETURN_TOOLTIP="Meghívja a függvényt.",T.Msg.PROCEDURES_CALL_BEFORE_PARAMS="paraméterlistaː",T.Msg.PROCEDURES_CREATE_DO="„%1” létrehozása",T.Msg.PROCEDURES_DEFNORETURN_COMMENT="Írj erről a funkcióról...",T.Msg.PROCEDURES_DEFNORETURN_DO="",T.Msg.PROCEDURES_DEFNORETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",T.Msg.PROCEDURES_DEFNORETURN_PROCEDURE="név",T.Msg.PROCEDURES_DEFNORETURN_TITLE="Eljárás",T.Msg.PROCEDURES_DEFNORETURN_TOOLTIP="Eljárás (nem ad vissza eredményt).",T.Msg.PROCEDURES_DEFRETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",T.Msg.PROCEDURES_DEFRETURN_RETURN="eredménye",T.Msg.PROCEDURES_DEFRETURN_TOOLTIP="Függvény eredménnyel.",T.Msg.PROCEDURES_DEF_DUPLICATE_WARNING="Figyelem: Az eljárásban azonos elnevezésű paramétert adtál meg.",T.Msg.PROCEDURES_HIGHLIGHT_DEF="Függvénydefiníció kiemelése",T.Msg.PROCEDURES_IFRETURN_HELPURL="http://c2.com/cgi/wiki?GuardClause",T.Msg.PROCEDURES_IFRETURN_TOOLTIP="Ha az érték igaz, akkor visszatér a függvény értékével.",T.Msg.PROCEDURES_IFRETURN_WARNING="Figyelem: Ez a blokk csak függvénydefiníción belül használható.",T.Msg.PROCEDURES_MUTATORARG_TITLE="változó:",T.Msg.PROCEDURES_MUTATORARG_TOOLTIP="Bemenet hozzáadása a függvényhez.",T.Msg.PROCEDURES_MUTATORCONTAINER_TITLE="paraméterek",T.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP="Bemenetek hozzáadása, eltávolítása vagy átrendezése ehhez a függvényhez.",T.Msg.REDO="Újra",T.Msg.REMOVE_COMMENT="Megjegyzés eltávolítása",T.Msg.RENAME_VARIABLE="Változó átnevezése…",T.Msg.RENAME_VARIABLE_TITLE="Minden „%1” változó átnevezése erre:",T.Msg.TEXT_APPEND_HELPURL="https://github.com/google/blockly/wiki/Text#text-modification",T.Msg.TEXT_APPEND_TITLE="A %1 szövegéhez fűzd hozzá %2",T.Msg.TEXT_APPEND_TOOLTIP='Szöveget fűz a "%1" változó értékéhez.',T.Msg.TEXT_CHANGECASE_HELPURL="https://github.com/google/blockly/wiki/Text#adjusting-text-case",T.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE="kisbetűs",T.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE="Címként Formázott",T.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE="NAGYBETŰS",T.Msg.TEXT_CHANGECASE_TOOLTIP="Return a copy of the text in a different case.",T.Msg.TEXT_CHARAT_FIRST="első",T.Msg.TEXT_CHARAT_FROM_END="hátulról",T.Msg.TEXT_CHARAT_FROM_START="elölről",T.Msg.TEXT_CHARAT_HELPURL="https://github.com/google/blockly/wiki/Text#extracting-text",T.Msg.TEXT_CHARAT_LAST="utolsó",T.Msg.TEXT_CHARAT_RANDOM="véletlen",T.Msg.TEXT_CHARAT_TAIL="karaktere",T.Msg.TEXT_CHARAT_TITLE="a szövegben: %1 %2",T.Msg.TEXT_CHARAT_TOOLTIP="A szöveg egy megadott karakterét adja eredményül.",T.Msg.TEXT_COUNT_HELPURL="https://github.com/google/blockly/wiki/Text#counting-substrings",T.Msg.TEXT_COUNT_MESSAGE0="%1 száma ebben: %2",T.Msg.TEXT_COUNT_TOOLTIP="A szöveg előfordulásainak megszámolása egy másik szövegben.",T.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP="Elem hozzáfűzése a szöveghez.",T.Msg.TEXT_CREATE_JOIN_TITLE_JOIN="fűzd össze",T.Msg.TEXT_CREATE_JOIN_TOOLTIP="Összefűzéssel, törléssel vagy rendezéssel kapcsolato sblokkok szöveg szerkesztéséhez.",T.Msg.TEXT_GET_SUBSTRING_END_FROM_END="betűtől a hátulról számított",T.Msg.TEXT_GET_SUBSTRING_END_FROM_START="betűtől a(z)",T.Msg.TEXT_GET_SUBSTRING_END_LAST="betűtől az utolsó",T.Msg.TEXT_GET_SUBSTRING_HELPURL="https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text",T.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT="a",T.Msg.TEXT_GET_SUBSTRING_START_FIRST="szövegben válaszd ki az első",T.Msg.TEXT_GET_SUBSTRING_START_FROM_END="szövegben válaszd ki a hátulról a(z)",T.Msg.TEXT_GET_SUBSTRING_START_FROM_START="szövegben válaszd ki a(z)",T.Msg.TEXT_GET_SUBSTRING_TAIL="betűig tartó betűsort",T.Msg.TEXT_GET_SUBSTRING_TOOLTIP="A megadott szövegrészletet adja eredményül.",T.Msg.TEXT_INDEXOF_HELPURL="https://github.com/google/blockly/wiki/Text#finding-text",T.Msg.TEXT_INDEXOF_OPERATOR_FIRST="szövegben az első előfordulásának helye",T.Msg.TEXT_INDEXOF_OPERATOR_LAST="szövegben az utolsó előfordulásának helye",T.Msg.TEXT_INDEXOF_TITLE="A(z) %1 %2 %3 szövegnek",T.Msg.TEXT_INDEXOF_TOOLTIP="A keresett szöveg első vagy utolsó előfordulásával tér vissza.  %1 esetén a szövegrészlet nem található.",T.Msg.TEXT_ISEMPTY_HELPURL="https://github.com/google/blockly/wiki/Text#checking-for-empty-text",T.Msg.TEXT_ISEMPTY_TITLE="%1 üres",T.Msg.TEXT_ISEMPTY_TOOLTIP="Igaz, ha a vizsgált szöveg hossza 0.",T.Msg.TEXT_JOIN_HELPURL="https://github.com/google/blockly/wiki/Text#text-creation",T.Msg.TEXT_JOIN_TITLE_CREATEWITH="fűzd össze",T.Msg.TEXT_JOIN_TOOLTIP="Tetszőleges számú szövegrészletet fűz össze egybefüggő szöveggé.",T.Msg.TEXT_LENGTH_HELPURL="https://github.com/google/blockly/wiki/Text#text-modification",T.Msg.TEXT_LENGTH_TITLE="%1 hossza",T.Msg.TEXT_LENGTH_TOOLTIP="A megadott szöveg karaktereinek számát adja eredményül (beleértve a szóközöket).",T.Msg.TEXT_PRINT_HELPURL="https://github.com/google/blockly/wiki/Text#printing-text",T.Msg.TEXT_PRINT_TITLE="Üzenet %1",T.Msg.TEXT_PRINT_TOOLTIP="Megejelníti a megadott kaakterláncot üzenetként a képernyőn.",T.Msg.TEXT_PROMPT_HELPURL="https://github.com/google/blockly/wiki/Text#getting-input-from-the-user",T.Msg.TEXT_PROMPT_TOOLTIP_NUMBER="Számot kér be a felhasználótól.",T.Msg.TEXT_PROMPT_TOOLTIP_TEXT="Szöveget kér be a felhasználótól.",T.Msg.TEXT_PROMPT_TYPE_NUMBER="Kérj be számot",T.Msg.TEXT_PROMPT_TYPE_TEXT="Kérj be szöveget",T.Msg.TEXT_REPLACE_HELPURL="https://github.com/google/blockly/wiki/Text#replacing-substrings",T.Msg.TEXT_REPLACE_MESSAGE0="%1 cseréje %2-vel %3-ban",T.Msg.TEXT_REPLACE_TOOLTIP="A szöveg összes előfordulásának cseréje egy másik szöveggel.",T.Msg.TEXT_REVERSE_HELPURL="https://github.com/google/blockly/wiki/Text#reversing-text",T.Msg.TEXT_REVERSE_MESSAGE0="%1 megfordítása",T.Msg.TEXT_REVERSE_TOOLTIP="Megfordítja a karakterek sorrendjét a szövegben.",T.Msg.TEXT_TEXT_HELPURL="https://hu.wikipedia.org/wiki/String",T.Msg.TEXT_TEXT_TOOLTIP="Egy betű, szó vagy szöveg egy sora.",T.Msg.TEXT_TRIM_HELPURL="https://github.com/google/blockly/wiki/Text#trimming-removing-spaces",T.Msg.TEXT_TRIM_OPERATOR_BOTH="szóközök levágása mindkét végéről",T.Msg.TEXT_TRIM_OPERATOR_LEFT="szóközök levágása az elejéről",T.Msg.TEXT_TRIM_OPERATOR_RIGHT="szóközök levágása a végéről",T.Msg.TEXT_TRIM_TOOLTIP="Levágja a megadott szöveg végeiről a szóközöket.",T.Msg.TODAY="Ma",T.Msg.UNDO="Visszavonás",T.Msg.UNNAMED_KEY="névtelen",T.Msg.VARIABLES_DEFAULT_NAME="változó",T.Msg.VARIABLES_GET_CREATE_SET='Készíts "%1="',T.Msg.VARIABLES_GET_HELPURL="https://github.com/google/blockly/wiki/Variables#get",T.Msg.VARIABLES_GET_TOOLTIP="A változó értékét adja eredményül.",T.Msg.VARIABLES_SET="%1 %2",T.Msg.VARIABLES_SET_CREATE_GET='Készíts "%1"',T.Msg.VARIABLES_SET_HELPURL="https://github.com/google/blockly/wiki/Variables#set",T.Msg.VARIABLES_SET_TOOLTIP="A változónak adhatunk értéket.",T.Msg.VARIABLE_ALREADY_EXISTS="A(z) „%1” nevű változó már létezik.",T.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE="Egy „%1” nevű változó már létezik egy másik típussal: „%2”.",T.Msg.WORKSPACE_ARIA_LABEL="Blockly munkaterület",T.Msg.WORKSPACE_COMMENT_DEFAULT_TEXT="Mondj valamit...",T.Msg.CONTROLS_FOREACH_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_FOR_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF=T.Msg.CONTROLS_IF_MSG_ELSEIF,T.Msg.CONTROLS_IF_ELSE_TITLE_ELSE=T.Msg.CONTROLS_IF_MSG_ELSE,T.Msg.CONTROLS_IF_IF_TITLE_IF=T.Msg.CONTROLS_IF_MSG_IF,T.Msg.CONTROLS_IF_MSG_THEN=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_WHILEUNTIL_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.LISTS_CREATE_WITH_ITEM_TITLE=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.LISTS_GET_INDEX_HELPURL=T.Msg.LISTS_INDEX_OF_HELPURL,T.Msg.LISTS_GET_INDEX_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_INDEX_OF_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_SET_INDEX_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.MATH_CHANGE_TITLE_ITEM=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.PROCEDURES_DEFRETURN_COMMENT=T.Msg.PROCEDURES_DEFNORETURN_COMMENT,T.Msg.PROCEDURES_DEFRETURN_DO=T.Msg.PROCEDURES_DEFNORETURN_DO,T.Msg.PROCEDURES_DEFRETURN_PROCEDURE=T.Msg.PROCEDURES_DEFNORETURN_PROCEDURE,T.Msg.PROCEDURES_DEFRETURN_TITLE=T.Msg.PROCEDURES_DEFNORETURN_TITLE,T.Msg.TEXT_APPEND_VARIABLE=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.MATH_HUE="230",T.Msg.LOOPS_HUE="120",T.Msg.LISTS_HUE="260",T.Msg.LOGIC_HUE="210",T.Msg.VARIABLES_HUE="330",T.Msg.TEXTS_HUE="160",T.Msg.PROCEDURES_HUE="290",T.Msg.COLOUR_HUE="20",T.Msg.VARIABLES_DYNAMIC_HUE="310",T.Msg})?_.apply(s,e):_)||(T.exports=E)}}]);