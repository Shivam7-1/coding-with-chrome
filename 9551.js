(self.webpackChunkcoding_with_chrome=self.webpackChunkcoding_with_chrome||[]).push([[9551],{9551:function(T,_){var i,a,s;a=[],void 0===(s="function"==typeof(i=function(){"use strict";var T=T||{Msg:Object.create(null)};return T.Msg.ADD_COMMENT="Dodaj komentar",T.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE="Ne mogu obrisati varijablu '%1' zato što je dio definicije funkcije '%2'",T.Msg.CHANGE_VALUE_TITLE="Promijeni vrijednost:",T.Msg.CLEAN_UP="Uredi blokove",T.Msg.COLLAPSED_WARNINGS_WARNING="Sažeti blokovi sadrže upozorenje",T.Msg.COLLAPSE_ALL="Skupi blokove",T.Msg.COLLAPSE_BLOCK="Sažmi blok",T.Msg.COLOUR_BLEND_COLOUR1="boja 1",T.Msg.COLOUR_BLEND_COLOUR2="boja 2",T.Msg.COLOUR_BLEND_HELPURL="https://meyerweb.com/eric/tools/color-blend/#:::rgbp",T.Msg.COLOUR_BLEND_RATIO="omjer",T.Msg.COLOUR_BLEND_TITLE="pomiješaj",T.Msg.COLOUR_BLEND_TOOLTIP="Miješa dvije boje u zadanom omjeru (0.0 - 1.0).",T.Msg.COLOUR_PICKER_HELPURL="https://hr.wikipedia.org/wiki/Boja",T.Msg.COLOUR_PICKER_TOOLTIP="Odaberi boju iz palete.",T.Msg.COLOUR_RANDOM_HELPURL="http://randomcolour.com",T.Msg.COLOUR_RANDOM_TITLE="slučajna boja",T.Msg.COLOUR_RANDOM_TOOLTIP="Odaberi boju nasumično.",T.Msg.COLOUR_RGB_BLUE="plavo",T.Msg.COLOUR_RGB_GREEN="zeleno",T.Msg.COLOUR_RGB_HELPURL="https://www.december.com/html/spec/colorpercompact.html",T.Msg.COLOUR_RGB_RED="crveno",T.Msg.COLOUR_RGB_TITLE="boja sa",T.Msg.COLOUR_RGB_TOOLTIP="Stvori boju sa zadanom količinom crvene, zelene i plave. Sve vrijednosti moraju biti između 0 i 100.",T.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL="https://github.com/google/blockly/wiki/Loops#loop-termination-blocks",T.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK="izađi iz petlje",T.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE="nastavi sa sljedećim ponavljanjem u petlji",T.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK="Prekinite postojeću petlju",T.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE="Preskoči ostatak petlje i nastavi sa sljedećim ponavljanjem",T.Msg.CONTROLS_FLOW_STATEMENTS_WARNING="Upozorenje: Ovaj blok se može koristiti samo u petlji.",T.Msg.CONTROLS_FOREACH_HELPURL="https://github.com/google/blockly/wiki/Loops#for-each",T.Msg.CONTROLS_FOREACH_TITLE="za svaki član %1 u listi %2",T.Msg.CONTROLS_FOREACH_TOOLTIP="Za svaki član u listi daje varijabli '%1' vrijednost člana i zatim izvrši neke naredbe",T.Msg.CONTROLS_FOR_HELPURL="https://github.com/google/blockly/wiki/Loops#count-with",T.Msg.CONTROLS_FOR_TITLE="broji s %1 od %2 do %3 za %4",T.Msg.CONTROLS_FOR_TOOLTIP="Varijabla '%1' poprima vrijednosti od početnog broja do završnog broja, brojeći u zadanim intervalima i izvršavajući odabrane blokove.",T.Msg.CONTROLS_IF_ELSEIF_TOOLTIP="Dodaj uvjet bloku.",T.Msg.CONTROLS_IF_ELSE_TOOLTIP='Dodaj završni, "vrijedi za sve" uvjet bloku.',T.Msg.CONTROLS_IF_HELPURL="https://github.com/google/blockly/wiki/IfElse",T.Msg.CONTROLS_IF_IF_TOOLTIP="Dodaj, ukloni ili promijeni redoslijed kako biste presložili ovaj blok.",T.Msg.CONTROLS_IF_MSG_ELSE="inače",T.Msg.CONTROLS_IF_MSG_ELSEIF="inače ako",T.Msg.CONTROLS_IF_MSG_IF="ako",T.Msg.CONTROLS_IF_TOOLTIP_1="ako je vrijednost istinita izvrši neke naredbe",T.Msg.CONTROLS_IF_TOOLTIP_2="Ako je vrijednost istina, tada izvrši prvi blok naredbi. Inače izvrši drugi blok naredbi.",T.Msg.CONTROLS_IF_TOOLTIP_3="Ako je prva vrijednost istina, tada izvrši prvi blok naredbi. Inače, ako je druga vrijednost istina izvrši drugi blok naredbi.",T.Msg.CONTROLS_IF_TOOLTIP_4="Ako je prva vrijednost istina, tada izvrši prvi blok naredbi. Inače, ako je druga vrijednost istina izvrši drugi blok naredbi. Ako niti jedna vrijednost nije istina, izvrši zadnji blok naredbi.",T.Msg.CONTROLS_REPEAT_HELPURL="https://hr.wikipedia.org/wiki/For_petlja",T.Msg.CONTROLS_REPEAT_INPUT_DO="radi",T.Msg.CONTROLS_REPEAT_TITLE="ponovi %1 puta",T.Msg.CONTROLS_REPEAT_TOOLTIP="Ponovi zadane naredbe više puta.",T.Msg.CONTROLS_WHILEUNTIL_HELPURL="https://github.com/google/blockly/wiki/Loops#repeat",T.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL="ponavljaj do",T.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE="ponavljaj dok",T.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL="Dok je vrijednost lažna, izvrši izjave.",T.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE="Dok je vrijednost istinita, izvrši izjave.",T.Msg.DELETE_ALL_BLOCKS="Obrisati svih %1 blokova?",T.Msg.DELETE_BLOCK="Obriši blok",T.Msg.DELETE_VARIABLE="Obriši varijablu '%1'",T.Msg.DELETE_VARIABLE_CONFIRMATION="Obriši %1 korištenja varijable '%2'?",T.Msg.DELETE_X_BLOCKS="Obriši %1 blokova",T.Msg.DIALOG_CANCEL="Odustani",T.Msg.DIALOG_OK="U redu",T.Msg.DISABLE_BLOCK="Onemogući blok",T.Msg.DUPLICATE_BLOCK="Kloniraj",T.Msg.DUPLICATE_COMMENT="Dupliciraj komentar",T.Msg.ENABLE_BLOCK="Omogući blok",T.Msg.EXPAND_ALL="Proširi blokove",T.Msg.EXPAND_BLOCK="Proširi blok",T.Msg.EXTERNAL_INPUTS="Vanjski Ulazi",T.Msg.HELP="Pomoć",T.Msg.INLINE_INPUTS="Poravnati Ulazi",T.Msg.LISTS_CREATE_EMPTY_HELPURL="https://github.com/google/blockly/wiki/Lists#create-empty-list",T.Msg.LISTS_CREATE_EMPTY_TITLE="stvori praznu listu",T.Msg.LISTS_CREATE_EMPTY_TOOLTIP="Vraća listu, duljine 0, koja ne sadrži podatke",T.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD="lista",T.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP="Dodaj, ukloni ili promijeni redoslijed kako biste presložili blok liste",T.Msg.LISTS_CREATE_WITH_HELPURL="https://github.com/google/blockly/wiki/Lists#create-list-with",T.Msg.LISTS_CREATE_WITH_INPUT_WITH="stvori listu s",T.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP="Dodaj član u listu",T.Msg.LISTS_CREATE_WITH_TOOLTIP="Stvara listu s bilo kojim brojem članova",T.Msg.LISTS_GET_INDEX_FIRST="prvi",T.Msg.LISTS_GET_INDEX_FROM_END="# od kraja",T.Msg.LISTS_GET_INDEX_FROM_START="#",T.Msg.LISTS_GET_INDEX_GET="dohvati",T.Msg.LISTS_GET_INDEX_GET_REMOVE="uzmi i ukloni",T.Msg.LISTS_GET_INDEX_LAST="posljednji",T.Msg.LISTS_GET_INDEX_RANDOM="slučajno",T.Msg.LISTS_GET_INDEX_REMOVE="ukloni",T.Msg.LISTS_GET_INDEX_TAIL="",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST="Vraća prvi član liste",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM="Vraća član sa zadanog mjesta u listi.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST="Vraća zadnji član liste.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM="Vraća slučajno odabrani član u listi.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST="Uklanja i vraća prvi član u listi.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM="Uklanja i vraća član na zadanom mjestu u listi.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST="Uklanja i vraća zadnji član u listi.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM="Uklanja i vraća slučajno odabrani član u listi.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST="Uklanja prvi član u listi.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM="Uklanja član na odabranom mjestu u listi.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST="Uklanja zadnji član u listi.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM="Uklanja slučajno odabrani član u listi.",T.Msg.LISTS_GET_SUBLIST_END_FROM_END="do # od kraja",T.Msg.LISTS_GET_SUBLIST_END_FROM_START="do #",T.Msg.LISTS_GET_SUBLIST_END_LAST="do zadnjeg",T.Msg.LISTS_GET_SUBLIST_HELPURL="https://github.com/google/blockly/wiki/Lists#getting-a-sublist",T.Msg.LISTS_GET_SUBLIST_START_FIRST="dohvati podlistu od prvog",T.Msg.LISTS_GET_SUBLIST_START_FROM_END="uzmi podlistu od # od kraja",T.Msg.LISTS_GET_SUBLIST_START_FROM_START="dohvati podlistu od #",T.Msg.LISTS_GET_SUBLIST_TAIL="",T.Msg.LISTS_GET_SUBLIST_TOOLTIP="Stvara kopiju odabranog dijela liste",T.Msg.LISTS_INDEX_FROM_END_TOOLTIP="%1 je zadnji član.",T.Msg.LISTS_INDEX_FROM_START_TOOLTIP="%1 je prvi član.",T.Msg.LISTS_INDEX_OF_FIRST="nađi prvo pojavljivanje člana",T.Msg.LISTS_INDEX_OF_HELPURL="https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list",T.Msg.LISTS_INDEX_OF_LAST="nađi zadnje pojavljivanje člana",T.Msg.LISTS_INDEX_OF_TOOLTIP="Vraća indeks prvog/zadnjeg pojavljivanja člana u listi. Vraća %1 ako član nije pronađen.",T.Msg.LISTS_INLIST="u listi",T.Msg.LISTS_ISEMPTY_HELPURL="https://github.com/google/blockly/wiki/Lists#is-empty",T.Msg.LISTS_ISEMPTY_TITLE="%1 je prazno",T.Msg.LISTS_ISEMPTY_TOOLTIP="Vraća istinu ako je lista prazna.",T.Msg.LISTS_LENGTH_HELPURL="https://github.com/google/blockly/wiki/Lists#length-of",T.Msg.LISTS_LENGTH_TITLE="duljina %1",T.Msg.LISTS_LENGTH_TOOLTIP="Vraća duljinu liste.",T.Msg.LISTS_REPEAT_HELPURL="https://github.com/google/blockly/wiki/Lists#create-list-with",T.Msg.LISTS_REPEAT_TITLE="stvori listu s članom %1 ponovljenim %2 puta",T.Msg.LISTS_REPEAT_TOOLTIP="Stvara listu ponavljanjem dane vrijednosti zadani broj puta.",T.Msg.LISTS_REVERSE_HELPURL="https://github.com/google/blockly/wiki/Lists#reversing-a-list",T.Msg.LISTS_REVERSE_MESSAGE0="obrnuto %1",T.Msg.LISTS_REVERSE_TOOLTIP="Obrnuta kopija liste",T.Msg.LISTS_SET_INDEX_HELPURL="https://github.com/google/blockly/wiki/Lists#in-list--set",T.Msg.LISTS_SET_INDEX_INPUT_TO="kao",T.Msg.LISTS_SET_INDEX_INSERT="umetni na",T.Msg.LISTS_SET_INDEX_SET="postavi",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST="Umeće član na početak liste.",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM="Umeće član na odabrano mjesto u listi.",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST="Dodaje član na kraj liste.",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM="Umeće član na slučajno odabrano mjesto u listi.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST="Postavlja prvi član u listi.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM="Postavlja član na odabrano mjesto u listi.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST="Postavlja zadnji član u listi.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM="Postavlja slučajno odabrani član u listi.",T.Msg.LISTS_SORT_HELPURL="https://github.com/google/blockly/wiki/Lists#sorting-a-list",T.Msg.LISTS_SORT_ORDER_ASCENDING="uzlazno",T.Msg.LISTS_SORT_ORDER_DESCENDING="silazno",T.Msg.LISTS_SORT_TITLE="Sortiraj %1 %2 %3",T.Msg.LISTS_SORT_TOOLTIP="Sortiraj kopiju liste",T.Msg.LISTS_SORT_TYPE_IGNORECASE="po abecedi, zanemari mala/velika slova",T.Msg.LISTS_SORT_TYPE_NUMERIC="kao brojeve",T.Msg.LISTS_SORT_TYPE_TEXT="po abecedi",T.Msg.LISTS_SPLIT_HELPURL="https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists",T.Msg.LISTS_SPLIT_LIST_FROM_TEXT="napravi listu od teksta",T.Msg.LISTS_SPLIT_TEXT_FROM_LIST="napravi tekst od liste",T.Msg.LISTS_SPLIT_TOOLTIP_JOIN="Poveži niz tekstova u jedan tekst podijeljen razdjelnikom",T.Msg.LISTS_SPLIT_TOOLTIP_SPLIT="Podijeli tekst u niz tekstova prema razdjelniku",T.Msg.LISTS_SPLIT_WITH_DELIMITER="S razdjelnikom",T.Msg.LOGIC_BOOLEAN_FALSE="laž",T.Msg.LOGIC_BOOLEAN_HELPURL="https://github.com/google/blockly/wiki/Logic#values",T.Msg.LOGIC_BOOLEAN_TOOLTIP="Vraća ili istina ili laž.",T.Msg.LOGIC_BOOLEAN_TRUE="istina",T.Msg.LOGIC_COMPARE_HELPURL="https://en.wikipedia.org/wiki/Inequality_(mathematics)",T.Msg.LOGIC_COMPARE_TOOLTIP_EQ="Vraća istina ako su obje ulazne vrijednosti jednake jedna drugoj.",T.Msg.LOGIC_COMPARE_TOOLTIP_GT="Vraća istina ako je prva ulazna vrijednost veća od druge.",T.Msg.LOGIC_COMPARE_TOOLTIP_GTE="Vraća istina ako je prva ulazna vrijednost veća ili jednaka od druge.",T.Msg.LOGIC_COMPARE_TOOLTIP_LT="Vraća istina ako je prva ulazna vrijednost manja od druge.",T.Msg.LOGIC_COMPARE_TOOLTIP_LTE="Vraća istina ako je prva ulazna vrijednost manja ili jednaka od druge.",T.Msg.LOGIC_COMPARE_TOOLTIP_NEQ="Vraća istina ako obje ulazne vrijednosti nisu jednake jedna drugoj.",T.Msg.LOGIC_NEGATE_HELPURL="https://github.com/google/blockly/wiki/Logic#not",T.Msg.LOGIC_NEGATE_TITLE="ne %1",T.Msg.LOGIC_NEGATE_TOOLTIP="Vraća istina ako je ulazna vrijednost lažna. Vraća laž ako je ulazna vrijednost istinita.",T.Msg.LOGIC_NULL="null",T.Msg.LOGIC_NULL_HELPURL="https://en.wikipedia.org/wiki/Nullable_type",T.Msg.LOGIC_NULL_TOOLTIP="Vraća null.",T.Msg.LOGIC_OPERATION_AND="i",T.Msg.LOGIC_OPERATION_HELPURL="https://github.com/google/blockly/wiki/Logic#logical-operations",T.Msg.LOGIC_OPERATION_OR="ili",T.Msg.LOGIC_OPERATION_TOOLTIP_AND="Vraća istina ako su obje ulazne vrijednosti istinite.",T.Msg.LOGIC_OPERATION_TOOLTIP_OR="Vraća istina ako je barem jedna od ulaznih vrijednosti istinita.",T.Msg.LOGIC_TERNARY_CONDITION="izraz",T.Msg.LOGIC_TERNARY_HELPURL="https://en.wikipedia.org/wiki/%3F:",T.Msg.LOGIC_TERNARY_IF_FALSE="ako je laž",T.Msg.LOGIC_TERNARY_IF_TRUE="ako je istina",T.Msg.LOGIC_TERNARY_TOOLTIP='Provjerite uvjet u "izrazu". Ako je uvjet istinit, vraća vrijednost "ako je istinito"; inače vraća vrijednost "ako je lažno".',T.Msg.MATH_ADDITION_SYMBOL="+",T.Msg.MATH_ARITHMETIC_HELPURL="https://hr.wikipedia.org/wiki/Aritmetika",T.Msg.MATH_ARITHMETIC_TOOLTIP_ADD="Vraća zbroj dvaju brojeva.",T.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE="Vraća kvocijent dvaju brojeva.",T.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS="Vraća razliku dvaju brojeva.",T.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY="Vraća umnožak dvaju brojeva.",T.Msg.MATH_ARITHMETIC_TOOLTIP_POWER="Vraća prvi broj podignut na potenciju drugog broja.",T.Msg.MATH_ATAN2_HELPURL="https://en.wikipedia.org/wiki/Atan2",T.Msg.MATH_ATAN2_TITLE="atan2 od X:%1 Y:%2",T.Msg.MATH_ATAN2_TOOLTIP="Vraća vrijednost arkus tangensa točke (X, Y) u stupnjevima od -180 do 180",T.Msg.MATH_CHANGE_HELPURL="https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter",T.Msg.MATH_CHANGE_TITLE="promijeni %1 za %2",T.Msg.MATH_CHANGE_TOOLTIP="Dodaj broj varijabli '%1'.",T.Msg.MATH_CONSTANT_HELPURL="https://hr.wikipedia.org/wiki/Matemati%C4%8Dka_konstanta",T.Msg.MATH_CONSTANT_TOOLTIP="Vraća jednu od uobičajenih konstanti: π (3.141...), e (2.718...), φ (1.618...), sqrt(2) (1.414...), sqrt(1/2) (0.707...) ili ∞ (beskonačnost).",T.Msg.MATH_CONSTRAIN_HELPURL="https://en.wikipedia.org/wiki/Clamping_(graphics)",T.Msg.MATH_CONSTRAIN_TITLE="ograniči %1 od %2 do %3",T.Msg.MATH_CONSTRAIN_TOOLTIP="Ograničava broj da bude unutar zadanih granica (uključivši rubne vrijednosti)",T.Msg.MATH_DIVISION_SYMBOL="÷",T.Msg.MATH_IS_DIVISIBLE_BY="je djeljiv s",T.Msg.MATH_IS_EVEN="je paran",T.Msg.MATH_IS_NEGATIVE="je negativan",T.Msg.MATH_IS_ODD="je neparan",T.Msg.MATH_IS_POSITIVE="je pozitivan",T.Msg.MATH_IS_PRIME="je prost broj",T.Msg.MATH_IS_TOOLTIP="Provjerava je li broj paran, neparan, prim, cijeli, pozitivan, negativan ili je djeljiv određenim brojem. Vraća istina ili laž.",T.Msg.MATH_IS_WHOLE="je cijeli broj",T.Msg.MATH_MODULO_HELPURL="https://en.wikipedia.org/wiki/Modulo_operation",T.Msg.MATH_MODULO_TITLE="ostatak pri dijeljenju %1 ÷ %2",T.Msg.MATH_MODULO_TOOLTIP="Vraća ostatak pri dijeljenju dvaju brojeva.",T.Msg.MATH_MULTIPLICATION_SYMBOL="×",T.Msg.MATH_NUMBER_HELPURL="https://hr.wikipedia.org/wiki/Broj",T.Msg.MATH_NUMBER_TOOLTIP="broj",T.Msg.MATH_ONLIST_HELPURL="",T.Msg.MATH_ONLIST_OPERATOR_AVERAGE="prosječna vrijednost liste",T.Msg.MATH_ONLIST_OPERATOR_MAX="najveća vrijednost u listi",T.Msg.MATH_ONLIST_OPERATOR_MEDIAN="medijan liste",T.Msg.MATH_ONLIST_OPERATOR_MIN="najmanja vrijednost u listi",T.Msg.MATH_ONLIST_OPERATOR_MODE="mod liste",T.Msg.MATH_ONLIST_OPERATOR_RANDOM="slučajno odabran član liste",T.Msg.MATH_ONLIST_OPERATOR_STD_DEV="standardna devijacija liste",T.Msg.MATH_ONLIST_OPERATOR_SUM="zbroj liste",T.Msg.MATH_ONLIST_TOOLTIP_AVERAGE="Vraća prosjek (aritmetičku sredinu) numeričkih vrijednosti liste.",T.Msg.MATH_ONLIST_TOOLTIP_MAX="Vraća najveći broj u listi.",T.Msg.MATH_ONLIST_TOOLTIP_MEDIAN="Vraća srednji broj u listi.",T.Msg.MATH_ONLIST_TOOLTIP_MIN="Vraća najmanji broj u listi.",T.Msg.MATH_ONLIST_TOOLTIP_MODE="Vraća listu najčešćih vrijednosti (mod) u listi",T.Msg.MATH_ONLIST_TOOLTIP_RANDOM="Vraća slučajan član liste.",T.Msg.MATH_ONLIST_TOOLTIP_STD_DEV="Vraća standardnu devijaciju liste.",T.Msg.MATH_ONLIST_TOOLTIP_SUM="Vraća zbroj svih brojeva u listi.",T.Msg.MATH_POWER_SYMBOL="^",T.Msg.MATH_RANDOM_FLOAT_HELPURL="https://en.wikipedia.org/wiki/Random_number_generation",T.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM="slučajan razlomak",T.Msg.MATH_RANDOM_FLOAT_TOOLTIP="Vraća slučajan razlomak vrijednosti između 0.0 (uključivo) i 1.0 (isključivo)",T.Msg.MATH_RANDOM_INT_HELPURL="https://en.wikipedia.org/wiki/Random_number_generation",T.Msg.MATH_RANDOM_INT_TITLE="slučajan cijeli broj između %1 i %2",T.Msg.MATH_RANDOM_INT_TOOLTIP="Vraća slučajan cijeli broj između dviju zadanih vrijednosti, uključivši i rubne vrijednosti.",T.Msg.MATH_ROUND_HELPURL="https://en.wikipedia.org/wiki/Rounding",T.Msg.MATH_ROUND_OPERATOR_ROUND="zaokružiti",T.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN="zaokružiti na manje",T.Msg.MATH_ROUND_OPERATOR_ROUNDUP="zaokružiti na više",T.Msg.MATH_ROUND_TOOLTIP="Zaokružuje broj na više ili manje",T.Msg.MATH_SINGLE_HELPURL="https://hr.wikipedia.org/wiki/Kvadratni_korijen",T.Msg.MATH_SINGLE_OP_ABSOLUTE="apsolutna vrijednost",T.Msg.MATH_SINGLE_OP_ROOT="kvadratni korijen",T.Msg.MATH_SINGLE_TOOLTIP_ABS="Vraća apsolutnu vrijednost broja.",T.Msg.MATH_SINGLE_TOOLTIP_EXP="Vraća e na potenciju broja.",T.Msg.MATH_SINGLE_TOOLTIP_LN="Vraća prirodni logaritam broja.",T.Msg.MATH_SINGLE_TOOLTIP_LOG10="Vraća logaritam po bazi 10 zadanog broja.",T.Msg.MATH_SINGLE_TOOLTIP_NEG="Vraća negaciju broja.",T.Msg.MATH_SINGLE_TOOLTIP_POW10="Vraća 10 na potenciju broja.",T.Msg.MATH_SINGLE_TOOLTIP_ROOT="Vraća drugi korijen broja.",T.Msg.MATH_SUBTRACTION_SYMBOL="-",T.Msg.MATH_TRIG_ACOS="acos",T.Msg.MATH_TRIG_ASIN="asin",T.Msg.MATH_TRIG_ATAN="atan",T.Msg.MATH_TRIG_COS="cos",T.Msg.MATH_TRIG_HELPURL="https://en.wikipedia.org/wiki/Trigonometric_functions",T.Msg.MATH_TRIG_SIN="sin",T.Msg.MATH_TRIG_TAN="tan",T.Msg.MATH_TRIG_TOOLTIP_ACOS="Vraća arkus kosinus broja.",T.Msg.MATH_TRIG_TOOLTIP_ASIN="Vraća arkus sinus broja.",T.Msg.MATH_TRIG_TOOLTIP_ATAN="Vraća arkus tangens broja.",T.Msg.MATH_TRIG_TOOLTIP_COS="Vraća kosinus stupnjeva (ne radijana).",T.Msg.MATH_TRIG_TOOLTIP_SIN="Vraća sinus stupnjeva (ne radijana).",T.Msg.MATH_TRIG_TOOLTIP_TAN="Vraća tangens stupnjeva (ne radijana).",T.Msg.NEW_COLOUR_VARIABLE="Kreiraj varijablu s bojama",T.Msg.NEW_NUMBER_VARIABLE="Kreiraj varijablu s brojkama",T.Msg.NEW_STRING_VARIABLE="Kreiraj varijablu s nizom slova",T.Msg.NEW_VARIABLE="Kreiraj varijablu...",T.Msg.NEW_VARIABLE_TITLE="Ime nove varijable:",T.Msg.NEW_VARIABLE_TYPE_TITLE="Novi tip varijable:",T.Msg.ORDINAL_NUMBER_SUFFIX="",T.Msg.PROCEDURES_ALLOW_STATEMENTS="Dopustite izjave",T.Msg.PROCEDURES_BEFORE_PARAMS="s:",T.Msg.PROCEDURES_CALLNORETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",T.Msg.PROCEDURES_CALLNORETURN_TOOLTIP="Pokrenite korisnički definiranu funkciju '%1'.",T.Msg.PROCEDURES_CALLRETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",T.Msg.PROCEDURES_CALLRETURN_TOOLTIP="Pokrenite korisnički definiranu funkciju '%1' i upotrijebite njenu izlaznu vrijednost",T.Msg.PROCEDURES_CALL_BEFORE_PARAMS="s:",T.Msg.PROCEDURES_CREATE_DO="Stvori '%1'",T.Msg.PROCEDURES_DEFNORETURN_COMMENT="Opis funkcije",T.Msg.PROCEDURES_DEFNORETURN_DO="",T.Msg.PROCEDURES_DEFNORETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",T.Msg.PROCEDURES_DEFNORETURN_PROCEDURE="napravi nešto",T.Msg.PROCEDURES_DEFNORETURN_TITLE="za",T.Msg.PROCEDURES_DEFNORETURN_TOOLTIP="Stvaranje funkcije bez izlazne vrijednosti",T.Msg.PROCEDURES_DEFRETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",T.Msg.PROCEDURES_DEFRETURN_RETURN="Vrati",T.Msg.PROCEDURES_DEFRETURN_TOOLTIP="Stvara funkciju s izlaznom vrijednošću",T.Msg.PROCEDURES_DEF_DUPLICATE_WARNING="Upozorenje: Ova funkcija ima varijable istog imena",T.Msg.PROCEDURES_HIGHLIGHT_DEF="Označavanje definicije funkcije",T.Msg.PROCEDURES_IFRETURN_HELPURL="http://c2.com/cgi/wiki?GuardClause",T.Msg.PROCEDURES_IFRETURN_TOOLTIP="Iako je vrijednost istina, tada vrati drugu vrijednost",T.Msg.PROCEDURES_IFRETURN_WARNING="Upozorenje: Ovaj blok se može koristiti samo u definiciji funkcije",T.Msg.PROCEDURES_MUTATORARG_TITLE="Naziv ulazne varijable",T.Msg.PROCEDURES_MUTATORARG_TOOLTIP="Dodajte ulaznu varijablu funkcije",T.Msg.PROCEDURES_MUTATORCONTAINER_TITLE="Ulazne varijable",T.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP="Dodajte, uklonite ili promijenite redoslijed ulaznih varijabli funkcije",T.Msg.REDO="Ponovi",T.Msg.REMOVE_COMMENT="Obriši komentar",T.Msg.RENAME_VARIABLE="Preimenovanje varijable...",T.Msg.RENAME_VARIABLE_TITLE="Preimenuj svih %1 varijabli u:",T.Msg.TEXT_APPEND_HELPURL="https://github.com/google/blockly/wiki/Text#text-modification",T.Msg.TEXT_APPEND_TITLE="varijabli %1 dodajte tekst %2",T.Msg.TEXT_APPEND_TOOLTIP="Dodajte neki tekst varijabli  '%1'.",T.Msg.TEXT_CHANGECASE_HELPURL="https://github.com/google/blockly/wiki/Text#adjusting-text-case",T.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE="u mala slova",T.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE="u Prvo Veliko Slovo",T.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE="u VELIKA SLOVA",T.Msg.TEXT_CHANGECASE_TOOLTIP="Vraća kopiju teksta s malim ili velikim slovima",T.Msg.TEXT_CHARAT_FIRST="dohvati prvo slovo",T.Msg.TEXT_CHARAT_FROM_END="dohvati slovo # od kraja",T.Msg.TEXT_CHARAT_FROM_START="dohvati slovo #",T.Msg.TEXT_CHARAT_HELPURL="https://github.com/google/blockly/wiki/Text#extracting-text",T.Msg.TEXT_CHARAT_LAST="dohvati zadnje slovo",T.Msg.TEXT_CHARAT_RANDOM="dohvati slučajno slovo",T.Msg.TEXT_CHARAT_TAIL="",T.Msg.TEXT_CHARAT_TITLE="u tekstu %1 %2",T.Msg.TEXT_CHARAT_TOOLTIP="Vraća slovo koje je na zadanom mjestu",T.Msg.TEXT_COUNT_HELPURL="https://github.com/google/blockly/wiki/Text#counting-substrings",T.Msg.TEXT_COUNT_MESSAGE0="prebroji %1 u %2",T.Msg.TEXT_COUNT_TOOLTIP="Prebrojava koliko puta se neki tekst pojavljuje u drugom tekstu",T.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP="Dodajte stavku u tekst",T.Msg.TEXT_CREATE_JOIN_TITLE_JOIN="poveži",T.Msg.TEXT_CREATE_JOIN_TOOLTIP="Dodaj, ukloni ili promijeni redoslijed kako biste presložili ovaj tekstualni blok",T.Msg.TEXT_GET_SUBSTRING_END_FROM_END="do slova # od kraja",T.Msg.TEXT_GET_SUBSTRING_END_FROM_START="do slova #",T.Msg.TEXT_GET_SUBSTRING_END_LAST="do zadnjeg slova",T.Msg.TEXT_GET_SUBSTRING_HELPURL="https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text",T.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT="u tekstu",T.Msg.TEXT_GET_SUBSTRING_START_FIRST="dohvati podtekst od prvog slova",T.Msg.TEXT_GET_SUBSTRING_START_FROM_END="dohvati podtekst od slova # od kraja",T.Msg.TEXT_GET_SUBSTRING_START_FROM_START="dohvati podtekst od slova #",T.Msg.TEXT_GET_SUBSTRING_TAIL="",T.Msg.TEXT_GET_SUBSTRING_TOOLTIP="Daje traženi dio teksta",T.Msg.TEXT_INDEXOF_HELPURL="https://github.com/google/blockly/wiki/Text#finding-text",T.Msg.TEXT_INDEXOF_OPERATOR_FIRST="nađi prvo pojavljivanje teksta",T.Msg.TEXT_INDEXOF_OPERATOR_LAST="nađi zadnje pojavljivanje teksta",T.Msg.TEXT_INDEXOF_TITLE="u tekstu %1 %2 %3",T.Msg.TEXT_INDEXOF_TOOLTIP="Vraća indeks prvog/zadnjeg pojavljivanja prvog teksta u drugom tekstu. Vraća vrijednost %1 ako tekst nije pronađen.",T.Msg.TEXT_ISEMPTY_HELPURL="https://github.com/google/blockly/wiki/Text#checking-for-empty-text",T.Msg.TEXT_ISEMPTY_TITLE="%1 je prazno",T.Msg.TEXT_ISEMPTY_TOOLTIP="Vraća vrijednost istina ako je dani tekst prazan",T.Msg.TEXT_JOIN_HELPURL="https://github.com/google/blockly/wiki/Text#text-creation",T.Msg.TEXT_JOIN_TITLE_CREATEWITH="stvori tekst od",T.Msg.TEXT_JOIN_TOOLTIP="Stvara tekst povezivanjem bilo kojeg broja dijelova",T.Msg.TEXT_LENGTH_HELPURL="https://github.com/google/blockly/wiki/Text#text-modification",T.Msg.TEXT_LENGTH_TITLE="duljina %1",T.Msg.TEXT_LENGTH_TOOLTIP="Vraća broj slova (uključivši razmake) teksta",T.Msg.TEXT_PRINT_HELPURL="https://github.com/google/blockly/wiki/Text#printing-text",T.Msg.TEXT_PRINT_TITLE="ispiši %1",T.Msg.TEXT_PRINT_TOOLTIP="Ispisuje određeni tekst, broj ili drugu vrijednost.",T.Msg.TEXT_PROMPT_HELPURL="https://github.com/google/blockly/wiki/Text#getting-input-from-the-user",T.Msg.TEXT_PROMPT_TOOLTIP_NUMBER="Zatraži broj od korisnika.",T.Msg.TEXT_PROMPT_TOOLTIP_TEXT="Zatraži tekst od korisnika",T.Msg.TEXT_PROMPT_TYPE_NUMBER="Zatraži broj porukom",T.Msg.TEXT_PROMPT_TYPE_TEXT="Zatraži tekst porukom",T.Msg.TEXT_REPLACE_HELPURL="https://github.com/google/blockly/wiki/Text#replacing-substrings",T.Msg.TEXT_REPLACE_MESSAGE0="zamijeni %1 s %2 u %3",T.Msg.TEXT_REPLACE_TOOLTIP="Zamijeni sva pojavljivanja nekog teksta u drugom tekstu.",T.Msg.TEXT_REVERSE_HELPURL="https://github.com/google/blockly/wiki/Text#reversing-text",T.Msg.TEXT_REVERSE_MESSAGE0="obrnuto %1",T.Msg.TEXT_REVERSE_TOOLTIP="Okreće redoslijed znakova u tekstu",T.Msg.TEXT_TEXT_HELPURL="https://en.wikipedia.org/wiki/String_(computer_science)",T.Msg.TEXT_TEXT_TOOLTIP="Slovo, riječ ili linija teksta",T.Msg.TEXT_TRIM_HELPURL="https://github.com/google/blockly/wiki/Text#trimming-removing-spaces",T.Msg.TEXT_TRIM_OPERATOR_BOTH="ukloni razmake s obje strane od",T.Msg.TEXT_TRIM_OPERATOR_LEFT="ukloni razmake s lijeve strane od",T.Msg.TEXT_TRIM_OPERATOR_RIGHT="ukloni razmake s desne strane od",T.Msg.TEXT_TRIM_TOOLTIP="Vraća kopiju teksta s uklonjenim razmakom s početka ili kraja",T.Msg.TODAY="Danas",T.Msg.UNDO="Poništi",T.Msg.UNNAMED_KEY="neimenovano",T.Msg.VARIABLES_DEFAULT_NAME="stavka",T.Msg.VARIABLES_GET_CREATE_SET="Stvori 'set %1'",T.Msg.VARIABLES_GET_HELPURL="https://github.com/google/blockly/wiki/Variables#get",T.Msg.VARIABLES_GET_TOOLTIP="Vraća vrijednost varijable",T.Msg.VARIABLES_SET="Postavi %1 na %2",T.Msg.VARIABLES_SET_CREATE_GET="Stvori 'get %1'",T.Msg.VARIABLES_SET_HELPURL="https://github.com/google/blockly/wiki/Variables#set",T.Msg.VARIABLES_SET_TOOLTIP="Postavi vrijednost varijable jednaku izlaznoj vrijednosti",T.Msg.VARIABLE_ALREADY_EXISTS="Varijabla s nazivom '%1' već postoji.",T.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE="Varijabla pod nazivom '%1' već postoji za drugi tip: '%2'",T.Msg.WORKSPACE_ARIA_LABEL="Radni prostor Blocklyja",T.Msg.WORKSPACE_COMMENT_DEFAULT_TEXT="Recite nešto",T.Msg.CONTROLS_FOREACH_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_FOR_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF=T.Msg.CONTROLS_IF_MSG_ELSEIF,T.Msg.CONTROLS_IF_ELSE_TITLE_ELSE=T.Msg.CONTROLS_IF_MSG_ELSE,T.Msg.CONTROLS_IF_IF_TITLE_IF=T.Msg.CONTROLS_IF_MSG_IF,T.Msg.CONTROLS_IF_MSG_THEN=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_WHILEUNTIL_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.LISTS_CREATE_WITH_ITEM_TITLE=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.LISTS_GET_INDEX_HELPURL=T.Msg.LISTS_INDEX_OF_HELPURL,T.Msg.LISTS_GET_INDEX_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_INDEX_OF_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_SET_INDEX_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.MATH_CHANGE_TITLE_ITEM=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.PROCEDURES_DEFRETURN_COMMENT=T.Msg.PROCEDURES_DEFNORETURN_COMMENT,T.Msg.PROCEDURES_DEFRETURN_DO=T.Msg.PROCEDURES_DEFNORETURN_DO,T.Msg.PROCEDURES_DEFRETURN_PROCEDURE=T.Msg.PROCEDURES_DEFNORETURN_PROCEDURE,T.Msg.PROCEDURES_DEFRETURN_TITLE=T.Msg.PROCEDURES_DEFNORETURN_TITLE,T.Msg.TEXT_APPEND_VARIABLE=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.MATH_HUE="230",T.Msg.LOOPS_HUE="120",T.Msg.LISTS_HUE="260",T.Msg.LOGIC_HUE="210",T.Msg.VARIABLES_HUE="330",T.Msg.TEXTS_HUE="160",T.Msg.PROCEDURES_HUE="290",T.Msg.COLOUR_HUE="20",T.Msg.VARIABLES_DYNAMIC_HUE="310",T.Msg})?i.apply(_,a):i)||(T.exports=s)}}]);