(self.webpackChunkcoding_with_chrome=self.webpackChunkcoding_with_chrome||[]).push([[3518],{63518:function(T,_){var s,t,i;t=[],void 0===(i="function"==typeof(s=function(){"use strict";var T=T||{Msg:Object.create(null)};return T.Msg.ADD_COMMENT="Pievienot komentāru",T.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE="Nevar izdzēst mainīgo '%1', jo tā ir daļa no funkcijas '%2' definīcijas.",T.Msg.CHANGE_VALUE_TITLE="Mainīt vērtību:",T.Msg.CLEAN_UP="Sakopt blokus",T.Msg.COLLAPSED_WARNINGS_WARNING="Sakļautie bloki satur brīdinājumus.",T.Msg.COLLAPSE_ALL="Sakļaut blokus",T.Msg.COLLAPSE_BLOCK="Sakļaut bloku",T.Msg.COLOUR_BLEND_COLOUR1="1. krāsa",T.Msg.COLOUR_BLEND_COLOUR2="2. krāsa",T.Msg.COLOUR_BLEND_HELPURL="https://meyerweb.com/eric/tools/color-blend/#:::rgbp",T.Msg.COLOUR_BLEND_RATIO="attiecība",T.Msg.COLOUR_BLEND_TITLE="sajaukt",T.Msg.COLOUR_BLEND_TOOLTIP="Sajauc kopā divas krāsas ar doto attiecību (0.0 - 1.0).",T.Msg.COLOUR_PICKER_HELPURL="https://lv.wikipedia.org/wiki/Krāsa",T.Msg.COLOUR_PICKER_TOOLTIP="Izvēlēties krāsu no paletes.",T.Msg.COLOUR_RANDOM_HELPURL="http://randomcolour.com",T.Msg.COLOUR_RANDOM_TITLE="nejauša krāsa",T.Msg.COLOUR_RANDOM_TOOLTIP="Izvēlēties krāsu pēc nejaušības principa.",T.Msg.COLOUR_RGB_BLUE="zila",T.Msg.COLOUR_RGB_GREEN="zaļa",T.Msg.COLOUR_RGB_HELPURL="https://www.december.com/html/spec/colorpercompact.html",T.Msg.COLOUR_RGB_RED="sarkana",T.Msg.COLOUR_RGB_TITLE="veido krāsu no",T.Msg.COLOUR_RGB_TOOLTIP="Izveidot krāsu ar norādīto daudzumu sarkanā, zaļā un zilā toņu. Visas vērtības ir starp 0 un 100.",T.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL="https://github.com/google/blockly/wiki/Loops#loop-termination-blocks",T.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK="iet ārā no cikla",T.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE="turpināt ar cikla nākamo iterāciju",T.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK="Iet ārā no iekļaujošā cikla",T.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE="Nepildīt atlikušo cikla daļu bet sākt nākamo iterāciju.",T.Msg.CONTROLS_FLOW_STATEMENTS_WARNING="Brīdinājums: šo bloku drīkst izmantot tikai cikla iekšienē.",T.Msg.CONTROLS_FOREACH_HELPURL="https://github.com/google/blockly/wiki/Loops#for-each",T.Msg.CONTROLS_FOREACH_TITLE="visiem %1 no saraksta %2",T.Msg.CONTROLS_FOREACH_TOOLTIP="Katram objektam no saraksta piešķirt mainīgajam '%1' šo objektu un izpildīt komandas.",T.Msg.CONTROLS_FOR_HELPURL="https://github.com/google/blockly/wiki/Loops#count-with",T.Msg.CONTROLS_FOR_TITLE="skaitīt %1 no %2 līdz %3 ar soli %4",T.Msg.CONTROLS_FOR_TOOLTIP="Ļauj mainīgajam '%1' pieņemt vērtības no sākuma līdz beigu vērtībai, un izpildīt iekļautos blokus katrai no šīm pieņemtajām vērtībām.",T.Msg.CONTROLS_IF_ELSEIF_TOOLTIP='Pievienot nosacījumu "ja" blokam.',T.Msg.CONTROLS_IF_ELSE_TOOLTIP='Pievienot gala nosacījumu "ja" blokam.',T.Msg.CONTROLS_IF_HELPURL="https://github.com/google/blockly/wiki/IfElse",T.Msg.CONTROLS_IF_IF_TOOLTIP='Pievienot, noņemt vai mainīt sekciju secību šim "ja" blokam.',T.Msg.CONTROLS_IF_MSG_ELSE="citādi",T.Msg.CONTROLS_IF_MSG_ELSEIF="citādi, ja",T.Msg.CONTROLS_IF_MSG_IF="ja",T.Msg.CONTROLS_IF_TOOLTIP_1="Ja vērtība ir patiesa, tad izpildīt komandas.",T.Msg.CONTROLS_IF_TOOLTIP_2="Ja vērtība ir patiesa, tad izpildīt pirmo bloku ar komandām. Citādi izpildīt otro bloku ar komandām.",T.Msg.CONTROLS_IF_TOOLTIP_3="Ja pirmā vērtība ir patiesa, tad izpildīt pirmo bloku ar komandām. Citādi, ja otrā vērtība ir patiesa, izpildīt otro bloku ar komandām.",T.Msg.CONTROLS_IF_TOOLTIP_4="Ja pirmā vērtība ir patiesa, tad izpildīt pirmo bloku ar komandām. Citādi, ja otrā vērtība ir patiesa, izpildīt otro bloku ar komandām. Ja neviena no vertībām nav patiesa, tad izpildīt pēdējo bloku ar komandām.",T.Msg.CONTROLS_REPEAT_HELPURL="https://lv.wikipedia.org/wiki/Cikls",T.Msg.CONTROLS_REPEAT_INPUT_DO="izpildi",T.Msg.CONTROLS_REPEAT_TITLE="atkārtot %1 reizes",T.Msg.CONTROLS_REPEAT_TOOLTIP="Izpildīt komandas vairākas reizes.",T.Msg.CONTROLS_WHILEUNTIL_HELPURL="https://github.com/google/blockly/wiki/Loops#repeat",T.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL="atkārtot līdz",T.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE="atkārtot kamēr",T.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL="Izpildīt komandas, kamēr vērtība ir nepatiesa.",T.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE="Izpildīt komandas, kamēr vērtība ir patiesa.",T.Msg.DELETE_ALL_BLOCKS="Izdzēst visus %1 blokus?",T.Msg.DELETE_BLOCK="Izmest bloku",T.Msg.DELETE_VARIABLE='Izdzēst mainīgo "%1"',T.Msg.DELETE_VARIABLE_CONFIRMATION='Mainīgais "%2" tiek izmantots %1 vietās. Dzēst?',T.Msg.DELETE_X_BLOCKS="Izmest %1 blokus",T.Msg.DIALOG_CANCEL="Atcelt",T.Msg.DIALOG_OK="Labi",T.Msg.DISABLE_BLOCK="Atspējot bloku",T.Msg.DUPLICATE_BLOCK="Dublēt",T.Msg.DUPLICATE_COMMENT="Izveidot komentāra duplikātu",T.Msg.ENABLE_BLOCK="Iespējot bloku",T.Msg.EXPAND_ALL="Izvērst blokus",T.Msg.EXPAND_BLOCK="Izvērst bloku",T.Msg.EXTERNAL_INPUTS="Ārējie ievaddati",T.Msg.HELP="Palīdzība",T.Msg.INLINE_INPUTS="Iekšējie ievaddati",T.Msg.LISTS_CREATE_EMPTY_HELPURL="https://github.com/google/blockly/wiki/Lists#create-empty-list",T.Msg.LISTS_CREATE_EMPTY_TITLE="izveidot tukšu sarakstu",T.Msg.LISTS_CREATE_EMPTY_TOOLTIP="Izveidot sarakstu bez elementiem tajā.",T.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD="saraksts",T.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP='Pievienot, noņemt vai mainīt sekciju secību šim "saraksta" blokam.',T.Msg.LISTS_CREATE_WITH_HELPURL="https://github.com/google/blockly/wiki/Lists#create-list-with",T.Msg.LISTS_CREATE_WITH_INPUT_WITH="izveidot sarakstu no",T.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP="Pievienot objektu sarakstam.",T.Msg.LISTS_CREATE_WITH_TOOLTIP="Izveidot sarakstu no jebkura skaita vienību.",T.Msg.LISTS_GET_INDEX_FIRST="pirmo",T.Msg.LISTS_GET_INDEX_FROM_END="no beigām numur",T.Msg.LISTS_GET_INDEX_FROM_START="#",T.Msg.LISTS_GET_INDEX_GET="paņemt",T.Msg.LISTS_GET_INDEX_GET_REMOVE="paņemt uz dzēst",T.Msg.LISTS_GET_INDEX_LAST="pēdējo",T.Msg.LISTS_GET_INDEX_RANDOM="nejauši izvēlētu",T.Msg.LISTS_GET_INDEX_REMOVE="dzēst",T.Msg.LISTS_GET_INDEX_TAIL="",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST="Atgriež pirmo saraksta elementu.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM="Atgriež norādīto elementu no saraksta.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST="Atgriež pēdējo saraksta elementu.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM="Atgriež nejauši izvēlētu saraksta elementu",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST="Atgriež un izdzēš saraksta pirmo elementu.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM="Atgriež un izdzēš no saraksta norādīto elementu.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST="Atgriež un izdzēš saraksta pēdējo elementu.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM="Atgriež un izdzēš no saraksta nejauši izvēlētu elementu.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST="Izdēš pirmo saraksta elementu.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM="Izdēš norādīto elementu no saraksta.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST="Izdēš pēdējo saraksta elementu.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM="Izdzēš no saraksta nejauši izvēlētu elementu.",T.Msg.LISTS_GET_SUBLIST_END_FROM_END="līdz pozīcijai no beigām",T.Msg.LISTS_GET_SUBLIST_END_FROM_START="līdz pozīcijai",T.Msg.LISTS_GET_SUBLIST_END_LAST="līdz beigām",T.Msg.LISTS_GET_SUBLIST_HELPURL="https://github.com/google/blockly/wiki/Lists#getting-a-sublist",T.Msg.LISTS_GET_SUBLIST_START_FIRST="paņemt apakšsarakstu no sākuma",T.Msg.LISTS_GET_SUBLIST_START_FROM_END="paņemt apakšsarakstu no beigām no pozīcijas",T.Msg.LISTS_GET_SUBLIST_START_FROM_START="paņemt apakšsarakstu no pozīcijas",T.Msg.LISTS_GET_SUBLIST_TAIL="",T.Msg.LISTS_GET_SUBLIST_TOOLTIP="Nokopēt daļu no dotā saraksta.",T.Msg.LISTS_INDEX_FROM_END_TOOLTIP="Saraksta elementu numerācija no beigām sākas no %1",T.Msg.LISTS_INDEX_FROM_START_TOOLTIP="Saraksta elementu numerācija sākas no %1",T.Msg.LISTS_INDEX_OF_FIRST="atrast pirmo elementu, kas vienāds ar",T.Msg.LISTS_INDEX_OF_HELPURL="https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list",T.Msg.LISTS_INDEX_OF_LAST="atrast pēdējo elementu, kas vienāds ar",T.Msg.LISTS_INDEX_OF_TOOLTIP="Atgriež pozīciju sarakstā, kurā atrodas dotais objekts.  Atgriež %1 ja objekts neatrodas sarakstā.",T.Msg.LISTS_INLIST="sarakstā",T.Msg.LISTS_ISEMPTY_HELPURL="https://github.com/google/blockly/wiki/Lists#is-empty",T.Msg.LISTS_ISEMPTY_TITLE="%1 ir tukšs",T.Msg.LISTS_ISEMPTY_TOOLTIP="Patiess, ja saraksts ir tukšs.",T.Msg.LISTS_LENGTH_HELPURL="https://github.com/google/blockly/wiki/Lists#length-of",T.Msg.LISTS_LENGTH_TITLE="%1 garums",T.Msg.LISTS_LENGTH_TOOLTIP="Atgriež elementu skaitu srakstā.",T.Msg.LISTS_REPEAT_HELPURL="https://github.com/google/blockly/wiki/Lists#create-list-with",T.Msg.LISTS_REPEAT_TITLE="saraksts no %1 atkārtots %2 reizes",T.Msg.LISTS_REPEAT_TOOLTIP="Izveido sarakstu, kas sastāv no dotās vērtības noteiktu reižu skaita.",T.Msg.LISTS_REVERSE_HELPURL="https://github.com/google/blockly/wiki/Lists#reversing-a-list",T.Msg.LISTS_REVERSE_MESSAGE0="apgriezt otrādi %1",T.Msg.LISTS_REVERSE_TOOLTIP="Apgriezt otrādi saraksta kopiju",T.Msg.LISTS_SET_INDEX_HELPURL="https://github.com/google/blockly/wiki/Lists#in-list--set",T.Msg.LISTS_SET_INDEX_INPUT_TO="kā",T.Msg.LISTS_SET_INDEX_INSERT="ievieto",T.Msg.LISTS_SET_INDEX_SET="aizvieto",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST="Ievieto elementu saraksta sākumā.",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM="Ievieto sarakstā elementu norādītajā pozīcijā.",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST="Pievieno elementu saraksta beigās.",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM="Ievieto sarakstā jaunu elementu nejauši izvēlētā pozīcijā.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST="Aizvieto elementu saraksta sākumā.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM="Aizvieto sarakstā elementu norādītajā pozīcijā.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST="Aizvieto elementu saraksta beigās.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM="Aizvieto sarakstā elementu nejauši izvēlētā pozīcijā.",T.Msg.LISTS_SORT_HELPURL="https://github.com/google/blockly/wiki/Lists#sorting-a-list",T.Msg.LISTS_SORT_ORDER_ASCENDING="augošā",T.Msg.LISTS_SORT_ORDER_DESCENDING="dilstošā",T.Msg.LISTS_SORT_TITLE="Sakārtot sarakstu no %3 elementiem %2 secībā %1",T.Msg.LISTS_SORT_TOOLTIP="Saraksta sakārtota kopija.",T.Msg.LISTS_SORT_TYPE_IGNORECASE="pēc alfabēta, ignorēt mazos/lielos burtus",T.Msg.LISTS_SORT_TYPE_NUMERIC="skaitliski",T.Msg.LISTS_SORT_TYPE_TEXT="pēc alfabēta",T.Msg.LISTS_SPLIT_HELPURL="https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists",T.Msg.LISTS_SPLIT_LIST_FROM_TEXT="vārdu saraksts no teksta",T.Msg.LISTS_SPLIT_TEXT_FROM_LIST="izveidot tekstu no saraksta",T.Msg.LISTS_SPLIT_TOOLTIP_JOIN="Apvienot tekstu izmantojot atdalītāju.",T.Msg.LISTS_SPLIT_TOOLTIP_SPLIT="Sadalīt tekstu vārdos izmantojot atdalītāju.",T.Msg.LISTS_SPLIT_WITH_DELIMITER="ar atdalītāju",T.Msg.LOGIC_BOOLEAN_FALSE="aplams",T.Msg.LOGIC_BOOLEAN_HELPURL="https://github.com/google/blockly/wiki/Logic#values",T.Msg.LOGIC_BOOLEAN_TOOLTIP='Atgriež rezultātu "patiess" vai "aplams".',T.Msg.LOGIC_BOOLEAN_TRUE="patiess",T.Msg.LOGIC_COMPARE_HELPURL="https://en.wikipedia.org/wiki/Inequality_(mathematics)",T.Msg.LOGIC_COMPARE_TOOLTIP_EQ="Patiess, ja abas puses ir vienādas.",T.Msg.LOGIC_COMPARE_TOOLTIP_GT="Patiess, ja kreisā puse ir lielāka par labo pusi.",T.Msg.LOGIC_COMPARE_TOOLTIP_GTE="Patiess, ja kreisā puse ir lielāka vai vienāda ar labo pusi.",T.Msg.LOGIC_COMPARE_TOOLTIP_LT="Patiess, ja kreisā puse ir mazāka par labo pusi.",T.Msg.LOGIC_COMPARE_TOOLTIP_LTE="Patiess, ja kreisā puse ir mazāka vai vienāda ar labo pusi.",T.Msg.LOGIC_COMPARE_TOOLTIP_NEQ="Patiess, ja abas puses nav vienādas.",T.Msg.LOGIC_NEGATE_HELPURL="https://github.com/google/blockly/wiki/Logic#not",T.Msg.LOGIC_NEGATE_TITLE="ne %1",T.Msg.LOGIC_NEGATE_TOOLTIP="Patiess, ja arguments ir aplams.",T.Msg.LOGIC_NULL="nekas",T.Msg.LOGIC_NULL_HELPURL="https://en.wikipedia.org/wiki/Nullable_type",T.Msg.LOGIC_NULL_TOOLTIP="Atgriež neko.",T.Msg.LOGIC_OPERATION_AND="un",T.Msg.LOGIC_OPERATION_HELPURL="https://github.com/google/blockly/wiki/Logic#logical-operations",T.Msg.LOGIC_OPERATION_OR="vai",T.Msg.LOGIC_OPERATION_TOOLTIP_AND="Patiess, ja abas puses ir patiesas.",T.Msg.LOGIC_OPERATION_TOOLTIP_OR="Patiess, ja vismaz viena puse ir patiesa.",T.Msg.LOGIC_TERNARY_CONDITION="nosacījums",T.Msg.LOGIC_TERNARY_HELPURL="https://en.wikipedia.org/wiki/%3F:",T.Msg.LOGIC_TERNARY_IF_FALSE="ja aplams",T.Msg.LOGIC_TERNARY_IF_TRUE="ja patiess",T.Msg.LOGIC_TERNARY_TOOLTIP="Pārbaudīt nosacījumu. Ja 'nosacījums' ir patiess, atgriež vērtību 'ja patiess', pretējā gadījumā vērtību 'ja aplams'.",T.Msg.MATH_ADDITION_SYMBOL="+",T.Msg.MATH_ARITHMETIC_HELPURL="https://en.wikipedia.org/wiki/Arithmetic",T.Msg.MATH_ARITHMETIC_TOOLTIP_ADD="Atgriež divu skaitļu summu.",T.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE="Atgriež divu skaitļu dalījumu.",T.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS="Atgriež divu skaitļu starpību.",T.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY="Atgriež divu skaitļu reizinājumu.",T.Msg.MATH_ARITHMETIC_TOOLTIP_POWER="Atgriež pirmo skaitli kāpinātu pakāpē otrais skaitlis.",T.Msg.MATH_ATAN2_HELPURL="https://en.wikipedia.org/wiki/Atan2",T.Msg.MATH_ATAN2_TITLE="ATAN2 no X:%1 Y:%2",T.Msg.MATH_ATAN2_TOOLTIP="Atgriezt arktangensu punktam (X, Y) grādos no -180 līdz 180.",T.Msg.MATH_CHANGE_HELPURL="https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter",T.Msg.MATH_CHANGE_TITLE="izmainīt %1 par %2",T.Msg.MATH_CHANGE_TOOLTIP="Pieskaitīt doto skaitli mainīgajam '%1'.",T.Msg.MATH_CONSTANT_HELPURL="https://en.wikipedia.org/wiki/Mathematical_constant",T.Msg.MATH_CONSTANT_TOOLTIP="Atgriež kādu no matemātikas konstantēm: π (3.141…), e (2.718…), φ (1.618…), √(2) (1.414…), √(½) (0.707…), ∞ (bezgalība).",T.Msg.MATH_CONSTRAIN_HELPURL="https://en.wikipedia.org/wiki/Clamping_(graphics)",T.Msg.MATH_CONSTRAIN_TITLE="ierobežot %1 no %2 līdz %3",T.Msg.MATH_CONSTRAIN_TOOLTIP="Ierobežo skaitli no noteiktajās robežās (ieskaitot galapunktus).",T.Msg.MATH_DIVISION_SYMBOL="÷",T.Msg.MATH_IS_DIVISIBLE_BY="dalās bez atlikuma ar",T.Msg.MATH_IS_EVEN="ir pāra",T.Msg.MATH_IS_NEGATIVE="ir negatīvs",T.Msg.MATH_IS_ODD="ir nepāra",T.Msg.MATH_IS_POSITIVE="ir pozitīvs",T.Msg.MATH_IS_PRIME="ir pirmskaitlis",T.Msg.MATH_IS_TOOLTIP='Pārbauda, vai skaitlis ir pāra, nepāra, vesels, pozitīvs, negatīvs vai dalās ar noteiktu skaitli. Atgriež "patiess" vai "aplams".',T.Msg.MATH_IS_WHOLE="ir vesels",T.Msg.MATH_MODULO_HELPURL="https://en.wikipedia.org/wiki/Modulo_operation",T.Msg.MATH_MODULO_TITLE="atlikums no %1 ÷ %2",T.Msg.MATH_MODULO_TOOLTIP="Atlikums no divu skaitļu dalījuma.",T.Msg.MATH_MULTIPLICATION_SYMBOL="×",T.Msg.MATH_NUMBER_HELPURL="https://lv.wikipedia.org/wiki/Skaitlis",T.Msg.MATH_NUMBER_TOOLTIP="Skaitlis.",T.Msg.MATH_ONLIST_HELPURL="",T.Msg.MATH_ONLIST_OPERATOR_AVERAGE="vidējais",T.Msg.MATH_ONLIST_OPERATOR_MAX="lielākais",T.Msg.MATH_ONLIST_OPERATOR_MEDIAN="mediāna",T.Msg.MATH_ONLIST_OPERATOR_MIN="mazākais",T.Msg.MATH_ONLIST_OPERATOR_MODE="moda",T.Msg.MATH_ONLIST_OPERATOR_RANDOM="nejaušs",T.Msg.MATH_ONLIST_OPERATOR_STD_DEV="standartnovirze",T.Msg.MATH_ONLIST_OPERATOR_SUM="summa",T.Msg.MATH_ONLIST_TOOLTIP_AVERAGE="Atgriež dotā saraksta vidējo aritmētisko vērtību.",T.Msg.MATH_ONLIST_TOOLTIP_MAX="Atgriež lielāko vērtību no saraksta.",T.Msg.MATH_ONLIST_TOOLTIP_MEDIAN="Atgriež dotā saraksta mediānas vērtību.",T.Msg.MATH_ONLIST_TOOLTIP_MIN="Atgriež mazāko vērtību no saraksta.",T.Msg.MATH_ONLIST_TOOLTIP_MODE="Atgriež dotā saraksta biežāk sastopamās vērtības (modas).",T.Msg.MATH_ONLIST_TOOLTIP_RANDOM="Atgriež nejauši izvēlētu vērtību no dotā saraksta.",T.Msg.MATH_ONLIST_TOOLTIP_STD_DEV="Atgriež dotā saraksta standartnovirzi.",T.Msg.MATH_ONLIST_TOOLTIP_SUM="Saskaitīt visus skaitļus no dotā saraksta.",T.Msg.MATH_POWER_SYMBOL="^",T.Msg.MATH_RANDOM_FLOAT_HELPURL="https://en.wikipedia.org/wiki/Random_number_generation",T.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM="nejaušs skaitlis [0..1)",T.Msg.MATH_RANDOM_FLOAT_TOOLTIP="Atgriež nejaušu reālo skaitli robežās no 0 (iekļaujot) līdz 1 (neiekļaujot).",T.Msg.MATH_RANDOM_INT_HELPURL="https://en.wikipedia.org/wiki/Random_number_generation",T.Msg.MATH_RANDOM_INT_TITLE="nejaušs vesels skaitlis no %1 līdz %2",T.Msg.MATH_RANDOM_INT_TOOLTIP="Atgriež nejaušu veselu skaitli dotajās robežās (iekļaujot galapunktus)",T.Msg.MATH_ROUND_HELPURL="https://en.wikipedia.org/wiki/Rounding",T.Msg.MATH_ROUND_OPERATOR_ROUND="noapaļot",T.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN="apaļot uz leju",T.Msg.MATH_ROUND_OPERATOR_ROUNDUP="apaļot uz augšu",T.Msg.MATH_ROUND_TOOLTIP="Noapaļot skaitli uz augšu vai uz leju.",T.Msg.MATH_SINGLE_HELPURL="https://en.wikipedia.org/wiki/Square_root",T.Msg.MATH_SINGLE_OP_ABSOLUTE="absolūtā vērtība",T.Msg.MATH_SINGLE_OP_ROOT="kvadrātsakne",T.Msg.MATH_SINGLE_TOOLTIP_ABS="Atgriež skaitļa absolūto vērtību.",T.Msg.MATH_SINGLE_TOOLTIP_EXP="Atgriež e pakāpē dotais skaitlis.",T.Msg.MATH_SINGLE_TOOLTIP_LN="Atgriež skaitļa naturālo logaritmu.",T.Msg.MATH_SINGLE_TOOLTIP_LOG10="Atgriež skaitļa logaritmu pie bāzes 10.",T.Msg.MATH_SINGLE_TOOLTIP_NEG="Atgriež pretējo skaitli.",T.Msg.MATH_SINGLE_TOOLTIP_POW10="Atgriež 10 pakāpē dotais skaitlis.",T.Msg.MATH_SINGLE_TOOLTIP_ROOT="Atgriež skaitļa kvadrātsakni.",T.Msg.MATH_SUBTRACTION_SYMBOL="-",T.Msg.MATH_TRIG_ACOS="acos",T.Msg.MATH_TRIG_ASIN="asin",T.Msg.MATH_TRIG_ATAN="atan",T.Msg.MATH_TRIG_COS="cos",T.Msg.MATH_TRIG_HELPURL="https://en.wikipedia.org/wiki/Trigonometric_functions",T.Msg.MATH_TRIG_SIN="sin",T.Msg.MATH_TRIG_TAN="tan",T.Msg.MATH_TRIG_TOOLTIP_ACOS="Arkkosinuss (grādos).",T.Msg.MATH_TRIG_TOOLTIP_ASIN="Arksinuss (grādos).",T.Msg.MATH_TRIG_TOOLTIP_ATAN="Arktangenss (grādos).",T.Msg.MATH_TRIG_TOOLTIP_COS="Kosinuss no grādiem (nevis radiāniem).",T.Msg.MATH_TRIG_TOOLTIP_SIN="Sinuss no grādiem (nevis radiāniem).",T.Msg.MATH_TRIG_TOOLTIP_TAN="Tangenss no grādiem (nevis radiāniem).",T.Msg.NEW_COLOUR_VARIABLE="Izveidot krāsas mainīgo...",T.Msg.NEW_NUMBER_VARIABLE="Izveidot skaitļa mainīgo...",T.Msg.NEW_STRING_VARIABLE="Izveidot virknes mainīgo...",T.Msg.NEW_VARIABLE="Izveidot mainīgo...",T.Msg.NEW_VARIABLE_TITLE="Jaunā mainīgā vārds:",T.Msg.NEW_VARIABLE_TYPE_TITLE="Jauns mainīgā tips:",T.Msg.ORDINAL_NUMBER_SUFFIX="",T.Msg.PROCEDURES_ALLOW_STATEMENTS="atļaut apakškomandas",T.Msg.PROCEDURES_BEFORE_PARAMS="ar:",T.Msg.PROCEDURES_CALLNORETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",T.Msg.PROCEDURES_CALLNORETURN_TOOLTIP="Izpildīt iepriekš definētu funkcju '%1'.",T.Msg.PROCEDURES_CALLRETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",T.Msg.PROCEDURES_CALLRETURN_TOOLTIP="Izpildīt iepriekš definētu funkcju '%1' un izmantot tās rezultātu.",T.Msg.PROCEDURES_CALL_BEFORE_PARAMS="ar:",T.Msg.PROCEDURES_CREATE_DO="Izveidot '%1' izsaukumu",T.Msg.PROCEDURES_DEFNORETURN_COMMENT="Funkcijas apraksts...",T.Msg.PROCEDURES_DEFNORETURN_DO="",T.Msg.PROCEDURES_DEFNORETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",T.Msg.PROCEDURES_DEFNORETURN_PROCEDURE="darīt kaut ko",T.Msg.PROCEDURES_DEFNORETURN_TITLE="funkcija",T.Msg.PROCEDURES_DEFNORETURN_TOOLTIP="Izveido funkciju, kas neatgriež rezultātu.",T.Msg.PROCEDURES_DEFRETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",T.Msg.PROCEDURES_DEFRETURN_RETURN="atgriezt",T.Msg.PROCEDURES_DEFRETURN_TOOLTIP="Izveido funkciju, kas atgriež rezultātu.",T.Msg.PROCEDURES_DEF_DUPLICATE_WARNING="Brīdinājums: funkcijai ir vienādi argumenti.",T.Msg.PROCEDURES_HIGHLIGHT_DEF="Izcelt funkcijas definīciju",T.Msg.PROCEDURES_IFRETURN_HELPURL="http://c2.com/cgi/wiki?GuardClause",T.Msg.PROCEDURES_IFRETURN_TOOLTIP='Ja pirmā vērtība ir "patiesa", tad atgriezt otro vērtību.',T.Msg.PROCEDURES_IFRETURN_WARNING="Brīdinājums: Šo bloku var izmantot tikai funkcijas definīcijā.",T.Msg.PROCEDURES_MUTATORARG_TITLE="arguments:",T.Msg.PROCEDURES_MUTATORARG_TOOLTIP="Pievienot funkcijai argumentu.",T.Msg.PROCEDURES_MUTATORCONTAINER_TITLE="argumenti",T.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP="Pievienot, pārkārtot vai dzēst funkcijas argumentus.",T.Msg.REDO="Atcelt atsaukšanu",T.Msg.REMOVE_COMMENT="Noņemt komentāru",T.Msg.RENAME_VARIABLE="Pārdēvēt mainīgo...",T.Msg.RENAME_VARIABLE_TITLE="Pārdēvējiet visus '%1' mainīgos:",T.Msg.TEXT_APPEND_HELPURL="https://github.com/google/blockly/wiki/Text#text-modification",T.Msg.TEXT_APPEND_TITLE="tekstam %1 pievienot tekstu %2",T.Msg.TEXT_APPEND_TOOLTIP="Pievienot tekstu mainīgajam '%1'.",T.Msg.TEXT_CHANGECASE_HELPURL="https://github.com/google/blockly/wiki/Text#adjusting-text-case",T.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE="kā mazie burti",T.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE="kā Nosaukuma Burti",T.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE="kā LIELIE BURTI",T.Msg.TEXT_CHANGECASE_TOOLTIP="Atgriež teksta kopiju ar mainītiem lielajiem/mazajiem burtiem.",T.Msg.TEXT_CHARAT_FIRST="paņemt pirmo burtu",T.Msg.TEXT_CHARAT_FROM_END="paņemt no beigām burtu #",T.Msg.TEXT_CHARAT_FROM_START="paņemt burtu #",T.Msg.TEXT_CHARAT_HELPURL="https://github.com/google/blockly/wiki/Text#extracting-text",T.Msg.TEXT_CHARAT_LAST="paņemt pēdējo burtu",T.Msg.TEXT_CHARAT_RANDOM="paņemt nejaušu burtu",T.Msg.TEXT_CHARAT_TAIL="",T.Msg.TEXT_CHARAT_TITLE="tekstā %1 %2",T.Msg.TEXT_CHARAT_TOOLTIP="Atgriež burtu dotajā pozīcijā.",T.Msg.TEXT_COUNT_HELPURL="https://github.com/google/blockly/wiki/Text#counting-substrings",T.Msg.TEXT_COUNT_MESSAGE0="skaitīt %1 iekš %2",T.Msg.TEXT_COUNT_TOOLTIP="Saskaitīt, cik reizes kāds teksts atrodas iekš kāda cita teksta.",T.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP="Pievienot tekstam objektu.",T.Msg.TEXT_CREATE_JOIN_TITLE_JOIN="savienot",T.Msg.TEXT_CREATE_JOIN_TOOLTIP='Pievienot, noņemt vai mainīt sekciju secību šim "teksta" blokam.',T.Msg.TEXT_GET_SUBSTRING_END_FROM_END="līdz burtam nr (no beigām)",T.Msg.TEXT_GET_SUBSTRING_END_FROM_START="līdz burtam nr",T.Msg.TEXT_GET_SUBSTRING_END_LAST="līdz pēdējam burtam",T.Msg.TEXT_GET_SUBSTRING_HELPURL="https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text",T.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT="no teksta",T.Msg.TEXT_GET_SUBSTRING_START_FIRST="paņemt apakšvirkni no sākuma",T.Msg.TEXT_GET_SUBSTRING_START_FROM_END="paņemt apakšvirkni no beigām sākot ar burta nr",T.Msg.TEXT_GET_SUBSTRING_START_FROM_START="paņemt apakšvirkni sākot no burta nr",T.Msg.TEXT_GET_SUBSTRING_TAIL="",T.Msg.TEXT_GET_SUBSTRING_TOOLTIP="Atgriež norādīto teksta daļu.",T.Msg.TEXT_INDEXOF_HELPURL="https://github.com/google/blockly/wiki/Text#finding-text",T.Msg.TEXT_INDEXOF_OPERATOR_FIRST="meklēt pirmo vietu, kur sākas teksts",T.Msg.TEXT_INDEXOF_OPERATOR_LAST="meklēt pēdējo vietu, kur sākas teksts",T.Msg.TEXT_INDEXOF_TITLE="tekstā %1 %2 %3",T.Msg.TEXT_INDEXOF_TOOLTIP="Meklē pirmā teksta rindu otrajā tekstā.  Atgriež pozīciju otrajā tekstā, kurā sākas pirmais teksts. Atgriež %1 ja pirmā teksta rinda nav atrasta.",T.Msg.TEXT_ISEMPTY_HELPURL="https://github.com/google/blockly/wiki/Text#checking-for-empty-text",T.Msg.TEXT_ISEMPTY_TITLE="%1 ir tukšs",T.Msg.TEXT_ISEMPTY_TOOLTIP="Patiess, ja teksts ir tukšs.",T.Msg.TEXT_JOIN_HELPURL="https://github.com/google/blockly/wiki/Text#text-creation",T.Msg.TEXT_JOIN_TITLE_CREATEWITH="veidot tekstu no",T.Msg.TEXT_JOIN_TOOLTIP="Izveidot tekstu savienojot dotos argumentus.",T.Msg.TEXT_LENGTH_HELPURL="https://github.com/google/blockly/wiki/Text#text-modification",T.Msg.TEXT_LENGTH_TITLE="garums tekstam %1",T.Msg.TEXT_LENGTH_TOOLTIP="Atgriež burtu skaitu (ieskaitot atstarpes) dotajā tekstā.",T.Msg.TEXT_PRINT_HELPURL="https://github.com/google/blockly/wiki/Text#printing-text",T.Msg.TEXT_PRINT_TITLE="parādīt %1",T.Msg.TEXT_PRINT_TOOLTIP="Parādīt norādīto tekstu vai skaitli.",T.Msg.TEXT_PROMPT_HELPURL="https://github.com/google/blockly/wiki/Text#getting-input-from-the-user",T.Msg.TEXT_PROMPT_TOOLTIP_NUMBER="Palūgt lietotāju ievadīt skaitli.",T.Msg.TEXT_PROMPT_TOOLTIP_TEXT="Palūgt lietotāju ievadīt tekstu.",T.Msg.TEXT_PROMPT_TYPE_NUMBER="palūgt ievadīt skaitli ar ziņu",T.Msg.TEXT_PROMPT_TYPE_TEXT="palūgt ievadīt tekstu ar ziņu",T.Msg.TEXT_REPLACE_HELPURL="https://github.com/google/blockly/wiki/Text#replacing-substrings",T.Msg.TEXT_REPLACE_MESSAGE0="apmainīt %1 ar %2 iekš %3",T.Msg.TEXT_REPLACE_TOOLTIP="Apmainīt kāda teksta fragmentus citā tekstā.",T.Msg.TEXT_REVERSE_HELPURL="https://github.com/google/blockly/wiki/Text#reversing-text",T.Msg.TEXT_REVERSE_MESSAGE0="apgriezt otrādi %1",T.Msg.TEXT_REVERSE_TOOLTIP="Apgriež otrādi teksta rakstzīmju kārtu.",T.Msg.TEXT_TEXT_HELPURL="https://en.wikipedia.org/wiki/String_(computer_science)",T.Msg.TEXT_TEXT_TOOLTIP="Burts, vārds vai jebkāda teksta rinda.",T.Msg.TEXT_TRIM_HELPURL="https://github.com/google/blockly/wiki/Text#trimming-removing-spaces",T.Msg.TEXT_TRIM_OPERATOR_BOTH="Dzēst atstarpes no abām pusēm",T.Msg.TEXT_TRIM_OPERATOR_LEFT="Dzēst atstarpes no sākuma",T.Msg.TEXT_TRIM_OPERATOR_RIGHT="Dzēst atstarpes no beigām",T.Msg.TEXT_TRIM_TOOLTIP="Atgriež teksta kopiju ar noņemtām atstarpēm vienā vai otrā galā.",T.Msg.TODAY="Šodiena",T.Msg.UNDO="Atsaukt",T.Msg.UNNAMED_KEY="nenosaukts",T.Msg.VARIABLES_DEFAULT_NAME="vienums",T.Msg.VARIABLES_GET_CREATE_SET="Izveidot piešķiršanu mainīgajam %1",T.Msg.VARIABLES_GET_HELPURL="https://github.com/google/blockly/wiki/Variables#get",T.Msg.VARIABLES_GET_TOOLTIP="Atgriež mainīgā vērtību.",T.Msg.VARIABLES_SET="piešķirt mainīgajam %1 vērtību %2",T.Msg.VARIABLES_SET_CREATE_GET="Izveidot 'ņem %1'",T.Msg.VARIABLES_SET_HELPURL="https://github.com/google/blockly/wiki/Variables#set",T.Msg.VARIABLES_SET_TOOLTIP="Piešķirt mainīgajam vērtību.",T.Msg.VARIABLE_ALREADY_EXISTS="Mainīgais '%1' jau eksistē.",T.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE="Mainīgais ar nosaukumu '%1' jau pastāv citam tipam: '%2'",T.Msg.WORKSPACE_ARIA_LABEL="Blockly Darbavieta",T.Msg.WORKSPACE_COMMENT_DEFAULT_TEXT="Saki kaut ko...",T.Msg.CONTROLS_FOREACH_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_FOR_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF=T.Msg.CONTROLS_IF_MSG_ELSEIF,T.Msg.CONTROLS_IF_ELSE_TITLE_ELSE=T.Msg.CONTROLS_IF_MSG_ELSE,T.Msg.CONTROLS_IF_IF_TITLE_IF=T.Msg.CONTROLS_IF_MSG_IF,T.Msg.CONTROLS_IF_MSG_THEN=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_WHILEUNTIL_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.LISTS_CREATE_WITH_ITEM_TITLE=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.LISTS_GET_INDEX_HELPURL=T.Msg.LISTS_INDEX_OF_HELPURL,T.Msg.LISTS_GET_INDEX_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_INDEX_OF_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_SET_INDEX_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.MATH_CHANGE_TITLE_ITEM=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.PROCEDURES_DEFRETURN_COMMENT=T.Msg.PROCEDURES_DEFNORETURN_COMMENT,T.Msg.PROCEDURES_DEFRETURN_DO=T.Msg.PROCEDURES_DEFNORETURN_DO,T.Msg.PROCEDURES_DEFRETURN_PROCEDURE=T.Msg.PROCEDURES_DEFNORETURN_PROCEDURE,T.Msg.PROCEDURES_DEFRETURN_TITLE=T.Msg.PROCEDURES_DEFNORETURN_TITLE,T.Msg.TEXT_APPEND_VARIABLE=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.MATH_HUE="230",T.Msg.LOOPS_HUE="120",T.Msg.LISTS_HUE="260",T.Msg.LOGIC_HUE="210",T.Msg.VARIABLES_HUE="330",T.Msg.TEXTS_HUE="160",T.Msg.PROCEDURES_HUE="290",T.Msg.COLOUR_HUE="20",T.Msg.VARIABLES_DYNAMIC_HUE="310",T.Msg})?s.apply(_,t):s)||(T.exports=i)}}]);