(self.webpackChunkcoding_with_chrome=self.webpackChunkcoding_with_chrome||[]).push([[5247],{55247:function(T,_){var E,O,L;O=[],void 0===(L="function"==typeof(E=function(){"use strict";var T=T||{Msg:Object.create(null)};return T.Msg.ADD_COMMENT="Додај коментар",T.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE="Није могуће избрисати променљиву „%1” јер је део дефиниције функције „%2”",T.Msg.CHANGE_VALUE_TITLE="Промена вредности:",T.Msg.CLEAN_UP="Очисти блокове",T.Msg.COLLAPSED_WARNINGS_WARNING="Срушени блокови садрже упозорења.",T.Msg.COLLAPSE_ALL="Скупи блокове",T.Msg.COLLAPSE_BLOCK="Скупи блок",T.Msg.COLOUR_BLEND_COLOUR1="боја 1",T.Msg.COLOUR_BLEND_COLOUR2="боја 2",T.Msg.COLOUR_BLEND_HELPURL="https://meyerweb.com/eric/tools/color-blend/#:::rgbp",T.Msg.COLOUR_BLEND_RATIO="однос",T.Msg.COLOUR_BLEND_TITLE="помешај",T.Msg.COLOUR_BLEND_TOOLTIP="Меша две боје заједно са датим односом (0.0 - 1.0).",T.Msg.COLOUR_PICKER_HELPURL="https://sr.wikipedia.org/wiki/Боја",T.Msg.COLOUR_PICKER_TOOLTIP="Одаберите боју са палете.",T.Msg.COLOUR_RANDOM_HELPURL="http://randomcolour.com",T.Msg.COLOUR_RANDOM_TITLE="случајна боја",T.Msg.COLOUR_RANDOM_TOOLTIP="Одаберите боју насумично.",T.Msg.COLOUR_RGB_BLUE="плава",T.Msg.COLOUR_RGB_GREEN="зелена",T.Msg.COLOUR_RGB_HELPURL="https://www.december.com/html/spec/colorpercompact.html",T.Msg.COLOUR_RGB_RED="црвена",T.Msg.COLOUR_RGB_TITLE="боја са",T.Msg.COLOUR_RGB_TOOLTIP="Направите боју са одређеном количином црвене, зелене и плаве. Све вредности морају бити између 0 и 100.",T.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL="https://github.com/google/blockly/wiki/Loops#loop-termination-blocks",T.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK="изађи из петље",T.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE="настави са следећом итерацијом петље",T.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK="Напусти садржај петље.",T.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE="Прескочи остатак ове петље, и настави са следећом итерацијом(понављанјем).",T.Msg.CONTROLS_FLOW_STATEMENTS_WARNING="Упозорење: Овај блок може да се употреби само унутар петље.",T.Msg.CONTROLS_FOREACH_HELPURL="https://github.com/google/blockly/wiki/Loops#for-each",T.Msg.CONTROLS_FOREACH_TITLE="за сваку ставку %1 на списку %2",T.Msg.CONTROLS_FOREACH_TOOLTIP="За сваку ставку унутар листе, подеси промењиву '%1' по ставци, и онда начини неке изјаве-наредбе.",T.Msg.CONTROLS_FOR_HELPURL="https://github.com/google/blockly/wiki/Loops#count-with",T.Msg.CONTROLS_FOR_TITLE="преброј са %1 од %2 до %3 од %4",T.Msg.CONTROLS_FOR_TOOLTIP='Имај промењиву "%1" узми вредности од почетног броја до задњег броја, бројећи по одређеном интервалу, и изврши одређене блокове.',T.Msg.CONTROLS_IF_ELSEIF_TOOLTIP="Додајте услов блоку „ако“.",T.Msg.CONTROLS_IF_ELSE_TOOLTIP="Додај коначни, catch-all  (ухвати све) услове иф блока.",T.Msg.CONTROLS_IF_HELPURL="https://github.com/google/blockly/wiki/IfElse",T.Msg.CONTROLS_IF_IF_TOOLTIP="Додај, уклони, или преуреди делове како бих реконфигурисали овај иф блок.",T.Msg.CONTROLS_IF_MSG_ELSE="иначе",T.Msg.CONTROLS_IF_MSG_ELSEIF="иначе-ако",T.Msg.CONTROLS_IF_MSG_IF="ако",T.Msg.CONTROLS_IF_TOOLTIP_1="ако је вредност тачна, онда изврши неке наредбе-изјаве.",T.Msg.CONTROLS_IF_TOOLTIP_2="ако је вредност тачна, онда изврши први блок наредби, У супротном, изврши други блок наредби.",T.Msg.CONTROLS_IF_TOOLTIP_3="Ако је прва вредност тачна, онда изврши први блок наредби, у супротном, ако је друга вредност тачна , изврши други блок наредби.",T.Msg.CONTROLS_IF_TOOLTIP_4="Ако је прва вредност тачна, онда изврши први блок наредби, у супротном, ако је друга вредност тачна , изврши други блок наредби. Ако ни једна од вредности није тачна, изврши последнји блок наредби.",T.Msg.CONTROLS_REPEAT_HELPURL="https://sr.wikipedia.org/wiki/For_петља",T.Msg.CONTROLS_REPEAT_INPUT_DO="изврши",T.Msg.CONTROLS_REPEAT_TITLE="понови %1 пута",T.Msg.CONTROLS_REPEAT_TOOLTIP="Изврши неке наредбе неколико пута.",T.Msg.CONTROLS_WHILEUNTIL_HELPURL="https://github.com/google/blockly/wiki/Loops#repeat",T.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL="понављати до",T.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE="понављати док",T.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL="Док је вредност нетачна, извршава неке наредбе.",T.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE="Док је вредност тачна, извршава неке наредбе.",T.Msg.DELETE_ALL_BLOCKS="Избрисати свих %1 блокова?",T.Msg.DELETE_BLOCK="Избриши блок",T.Msg.DELETE_VARIABLE="Избриши променљиву ’%1’",T.Msg.DELETE_VARIABLE_CONFIRMATION="Избрисати %1 употребу променљиве „%2”?",T.Msg.DELETE_X_BLOCKS="Избриши %1 блокова",T.Msg.DIALOG_CANCEL="Откажи",T.Msg.DIALOG_OK="У реду",T.Msg.DISABLE_BLOCK="Онемогући блок",T.Msg.DUPLICATE_BLOCK="Дуплирај",T.Msg.DUPLICATE_COMMENT="Дуплирај коментар",T.Msg.ENABLE_BLOCK="Омогући блок",T.Msg.EXPAND_ALL="Прошири блокове",T.Msg.EXPAND_BLOCK="Прошири блок",T.Msg.EXTERNAL_INPUTS="Спољашњи улази",T.Msg.HELP="Помоћ",T.Msg.INLINE_INPUTS="Редни улази",T.Msg.LISTS_CREATE_EMPTY_HELPURL="https://github.com/google/blockly/wiki/Lists#create-empty-list",T.Msg.LISTS_CREATE_EMPTY_TITLE="направи празан списак",T.Msg.LISTS_CREATE_EMPTY_TOOLTIP="Враћа списак, дужине 0, без података",T.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD="списак",T.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP="Додајте, избришите, или преуредите делове како би се реорганизовали овај блок листе.",T.Msg.LISTS_CREATE_WITH_HELPURL="https://github.com/google/blockly/wiki/Lists#create-list-with",T.Msg.LISTS_CREATE_WITH_INPUT_WITH="направи списак са",T.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP="Додајте ставку на списак.",T.Msg.LISTS_CREATE_WITH_TOOLTIP="Направите списак са било којим бројем ставки.",T.Msg.LISTS_GET_INDEX_FIRST="прва",T.Msg.LISTS_GET_INDEX_FROM_END="# са краја",T.Msg.LISTS_GET_INDEX_FROM_START="#",T.Msg.LISTS_GET_INDEX_GET="преузми",T.Msg.LISTS_GET_INDEX_GET_REMOVE="преузми и уклони",T.Msg.LISTS_GET_INDEX_LAST="последња",T.Msg.LISTS_GET_INDEX_RANDOM="случајна",T.Msg.LISTS_GET_INDEX_REMOVE="уклони",T.Msg.LISTS_GET_INDEX_TAIL="",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST="Враћа прву ставку на списку.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM="Враћа ставку на одређену позицију на списку.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST="Враћа последњу ставку са списка.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM="Враћа случајну ставку са списка.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST="Уклања и враћа прву ставку са списка.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM="Уклања и враћа ставку са одређеног положаја са списка.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST="Уклања и враћа последњу ставку са списка.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM="Уклања и враћа случајну ставку са списка.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST="Уклања прву ставку са списка.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM="Уклања ставку са одређеног положаја са списка.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST="Уклања последњу ставку са списка.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM="Уклања случајну ставку са списка.",T.Msg.LISTS_GET_SUBLIST_END_FROM_END="до # од краја",T.Msg.LISTS_GET_SUBLIST_END_FROM_START="до #",T.Msg.LISTS_GET_SUBLIST_END_LAST="до последње",T.Msg.LISTS_GET_SUBLIST_HELPURL="https://github.com/google/blockly/wiki/Lists#getting-a-sublist",T.Msg.LISTS_GET_SUBLIST_START_FIRST="преузми подсписак од прве",T.Msg.LISTS_GET_SUBLIST_START_FROM_END="преузми подсписак из # са краја",T.Msg.LISTS_GET_SUBLIST_START_FROM_START="преузми подсписак од #",T.Msg.LISTS_GET_SUBLIST_TAIL="",T.Msg.LISTS_GET_SUBLIST_TOOLTIP="Прави копију одређеног дела списка.",T.Msg.LISTS_INDEX_FROM_END_TOOLTIP="%1 је последња ставка.",T.Msg.LISTS_INDEX_FROM_START_TOOLTIP="%1 је прва ставка.",T.Msg.LISTS_INDEX_OF_FIRST="пронађи прво појављивање ставке",T.Msg.LISTS_INDEX_OF_HELPURL="https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list",T.Msg.LISTS_INDEX_OF_LAST="пронађи последње појављивање ставке",T.Msg.LISTS_INDEX_OF_TOOLTIP="Враћа индекс прве/последње појаве ставке на списку. Враћа %1 ако ставка није пронађена.",T.Msg.LISTS_INLIST="на списку",T.Msg.LISTS_ISEMPTY_HELPURL="https://github.com/google/blockly/wiki/Lists#is-empty",T.Msg.LISTS_ISEMPTY_TITLE="%1 је празан",T.Msg.LISTS_ISEMPTY_TOOLTIP="Враћа вредност „тачно” ако је списак празан.",T.Msg.LISTS_LENGTH_HELPURL="https://github.com/google/blockly/wiki/Lists#length-of",T.Msg.LISTS_LENGTH_TITLE="дужина списка %1",T.Msg.LISTS_LENGTH_TOOLTIP="Враћа дужину списка.",T.Msg.LISTS_REPEAT_HELPURL="https://github.com/google/blockly/wiki/Lists#create-list-with",T.Msg.LISTS_REPEAT_TITLE="Направити списак са ставком %1 која се понавља %2 пута",T.Msg.LISTS_REPEAT_TOOLTIP="Прави листу која се састоји од задане вредности коју понавлјамо одређени број шута.",T.Msg.LISTS_REVERSE_HELPURL="https://github.com/google/blockly/wiki/Lists#reversing-a-list",T.Msg.LISTS_REVERSE_MESSAGE0="обрнуто %1",T.Msg.LISTS_REVERSE_TOOLTIP="Обрни копију списка.",T.Msg.LISTS_SET_INDEX_HELPURL="https://github.com/google/blockly/wiki/Lists#in-list--set",T.Msg.LISTS_SET_INDEX_INPUT_TO="као",T.Msg.LISTS_SET_INDEX_INSERT="убаци на",T.Msg.LISTS_SET_INDEX_SET="постави",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST="Убацује ставку на почетак списка.",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM="Убацује ставку на одређени положај на списку.",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST="Додајте ставку на крај списка.",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM="Убацује ставку на случајно место на списку.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST="Поставља прву ставку на списку.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM="Поставља ставку на одређени положај на списку.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST="Поставља последњу ставку на списку.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM="Поставља случајну ставку на списку.",T.Msg.LISTS_SORT_HELPURL="https://github.com/google/blockly/wiki/Lists#sorting-a-list",T.Msg.LISTS_SORT_ORDER_ASCENDING="растуће",T.Msg.LISTS_SORT_ORDER_DESCENDING="опадајуће",T.Msg.LISTS_SORT_TITLE="сортирај %1 %2 %3",T.Msg.LISTS_SORT_TOOLTIP="Сортирајте копију списка.",T.Msg.LISTS_SORT_TYPE_IGNORECASE="азбучно, игнориши мала и велика слова",T.Msg.LISTS_SORT_TYPE_NUMERIC="као бројеве",T.Msg.LISTS_SORT_TYPE_TEXT="азбучно",T.Msg.LISTS_SPLIT_HELPURL="https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists",T.Msg.LISTS_SPLIT_LIST_FROM_TEXT="направите листу са текста",T.Msg.LISTS_SPLIT_TEXT_FROM_LIST="направи текст из списка",T.Msg.LISTS_SPLIT_TOOLTIP_JOIN="Спаја списак текстова у један текст, раздвојених граничником.",T.Msg.LISTS_SPLIT_TOOLTIP_SPLIT="Раздваја текст у списак текстова, преламањем на сваком граничнику.",T.Msg.LISTS_SPLIT_WITH_DELIMITER="са граничником",T.Msg.LOGIC_BOOLEAN_FALSE="нетачно",T.Msg.LOGIC_BOOLEAN_HELPURL="https://github.com/google/blockly/wiki/Logic#values",T.Msg.LOGIC_BOOLEAN_TOOLTIP="Враћа или „тачно“ или „нетачно“.",T.Msg.LOGIC_BOOLEAN_TRUE="тачно",T.Msg.LOGIC_COMPARE_HELPURL="https://sr.wikipedia.org/wiki/Неједнакост",T.Msg.LOGIC_COMPARE_TOOLTIP_EQ="Враћа вредност „тачно“ ако су оба улаза једнака.",T.Msg.LOGIC_COMPARE_TOOLTIP_GT="Враћа вредност „тачно“ ако је први унос већи од другог.",T.Msg.LOGIC_COMPARE_TOOLTIP_GTE="Враћа вредност „тачно“ ако је први унос већи или једнак другом.",T.Msg.LOGIC_COMPARE_TOOLTIP_LT="Враћа вредност „тачно“ ако је први унос мањи од другог.",T.Msg.LOGIC_COMPARE_TOOLTIP_LTE="Враћа вредност „тачно“ ако је први унос мањи или једнак другом.",T.Msg.LOGIC_COMPARE_TOOLTIP_NEQ="Враћа вредност „тачно“ ако су оба уноса неједнака.",T.Msg.LOGIC_NEGATE_HELPURL="https://github.com/google/blockly/wiki/Logic#not",T.Msg.LOGIC_NEGATE_TITLE="није %1",T.Msg.LOGIC_NEGATE_TOOLTIP="Враћа вредност „тачно“ ако је унос нетачан. Враћа вредност „нетачно“ ако је унос тачан.",T.Msg.LOGIC_NULL="без вредности",T.Msg.LOGIC_NULL_HELPURL="https://en.wikipedia.org/wiki/Nullable_type",T.Msg.LOGIC_NULL_TOOLTIP="Враћа „без вредности“.",T.Msg.LOGIC_OPERATION_AND="и",T.Msg.LOGIC_OPERATION_HELPURL="https://github.com/google/blockly/wiki/Logic#logical-operations",T.Msg.LOGIC_OPERATION_OR="или",T.Msg.LOGIC_OPERATION_TOOLTIP_AND="Враћа вредност „тачно“ ако су оба уноса тачна.",T.Msg.LOGIC_OPERATION_TOOLTIP_OR="Враћа вредност „тачно“ ако је бар један од уноса тачан.",T.Msg.LOGIC_TERNARY_CONDITION="проба",T.Msg.LOGIC_TERNARY_HELPURL="https://en.wikipedia.org/wiki/%3F:",T.Msg.LOGIC_TERNARY_IF_FALSE="ако је нетачно",T.Msg.LOGIC_TERNARY_IF_TRUE="ако је тачно",T.Msg.LOGIC_TERNARY_TOOLTIP="Проверите услов у „проба”. Ако је услов тачан, тада враћа „ако је тачно” вредност; у другом случају враћа „ако је нетачно” вредност.",T.Msg.MATH_ADDITION_SYMBOL="+",T.Msg.MATH_ARITHMETIC_HELPURL="https://sr.wikipedia.org/wiki/Аритметика",T.Msg.MATH_ARITHMETIC_TOOLTIP_ADD="Враћа збир два броја.",T.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE="Враћа количник два броја.",T.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS="Враћа разлику два броја.",T.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY="Враћа производ два броја.",T.Msg.MATH_ARITHMETIC_TOOLTIP_POWER="Враћа први број степенован другим.",T.Msg.MATH_ATAN2_HELPURL="https://en.wikipedia.org/wiki/Atan2",T.Msg.MATH_ATAN2_TITLE="атан2 од X:%1 Y:%2",T.Msg.MATH_ATAN2_TOOLTIP="Врати арктангенту тачке (X, Y) у степенима од -180 до 180.",T.Msg.MATH_CHANGE_HELPURL="https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter",T.Msg.MATH_CHANGE_TITLE="промени %1 за %2",T.Msg.MATH_CHANGE_TOOLTIP="Додаје број променљивој „%1”.",T.Msg.MATH_CONSTANT_HELPURL="https://sr.wikipedia.org/wiki/Математичка_константа",T.Msg.MATH_CONSTANT_TOOLTIP="Враћа једну од заједничких константи: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), или ∞ (бесконачно).",T.Msg.MATH_CONSTRAIN_HELPURL="https://en.wikipedia.org/wiki/Clamping_(graphics)",T.Msg.MATH_CONSTRAIN_TITLE="ограничи %1 ниско %2 високо %3",T.Msg.MATH_CONSTRAIN_TOOLTIP="Ограничава број на доње и горње границе (укључиво).",T.Msg.MATH_DIVISION_SYMBOL="÷",T.Msg.MATH_IS_DIVISIBLE_BY="је дељив са",T.Msg.MATH_IS_EVEN="је паран",T.Msg.MATH_IS_NEGATIVE="је негативан",T.Msg.MATH_IS_ODD="је непаран",T.Msg.MATH_IS_POSITIVE="је позитиван",T.Msg.MATH_IS_PRIME="је прост",T.Msg.MATH_IS_TOOLTIP="Проверава да ли је број паран, непаран, прост, цео, позитиван, негативан, или дељив са одређеним бројем. Враћа „тачно” или „нетачно”.",T.Msg.MATH_IS_WHOLE="је цео",T.Msg.MATH_MODULO_HELPURL="https://sr.wikipedia.org/wiki/Конгруенција",T.Msg.MATH_MODULO_TITLE="подсетник од %1 ÷ %2",T.Msg.MATH_MODULO_TOOLTIP="Враћа подсетник од дељења два броја.",T.Msg.MATH_MULTIPLICATION_SYMBOL="×",T.Msg.MATH_NUMBER_HELPURL="https://sr.wikipedia.org/wiki/Број",T.Msg.MATH_NUMBER_TOOLTIP="Број.",T.Msg.MATH_ONLIST_HELPURL="",T.Msg.MATH_ONLIST_OPERATOR_AVERAGE="просек списка",T.Msg.MATH_ONLIST_OPERATOR_MAX="макс. списка",T.Msg.MATH_ONLIST_OPERATOR_MEDIAN="медијана списка",T.Msg.MATH_ONLIST_OPERATOR_MIN="мин. списка",T.Msg.MATH_ONLIST_OPERATOR_MODE="модус списка",T.Msg.MATH_ONLIST_OPERATOR_RANDOM="случајна ставка списка",T.Msg.MATH_ONLIST_OPERATOR_STD_DEV="стандардна девијација списка",T.Msg.MATH_ONLIST_OPERATOR_SUM="збир списка",T.Msg.MATH_ONLIST_TOOLTIP_AVERAGE="Враћа просек (аритметичку средину) бројева са списка.",T.Msg.MATH_ONLIST_TOOLTIP_MAX="Враћа највећи број са списка.",T.Msg.MATH_ONLIST_TOOLTIP_MEDIAN="Враћа медијану са списка.",T.Msg.MATH_ONLIST_TOOLTIP_MIN="Враћа најмањи број са списка.",T.Msg.MATH_ONLIST_TOOLTIP_MODE="Враћа списак најчешћих ставки на списку.",T.Msg.MATH_ONLIST_TOOLTIP_RANDOM="Враћа случајни елемент са списка.",T.Msg.MATH_ONLIST_TOOLTIP_STD_DEV="Враћа стандардну девијацију списка.",T.Msg.MATH_ONLIST_TOOLTIP_SUM="Враћа збир свих бројева са списка.",T.Msg.MATH_POWER_SYMBOL="^",T.Msg.MATH_RANDOM_FLOAT_HELPURL="https://sr.wikipedia.org/wiki/Генератор_случајних_бројева",T.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM="случајни разломак",T.Msg.MATH_RANDOM_FLOAT_TOOLTIP="Враћа случајни разломак између 0.0 (укључиво) и 1.0 (искључиво).",T.Msg.MATH_RANDOM_INT_HELPURL="https://sr.wikipedia.org/wiki/Генератор_случајних_бројева",T.Msg.MATH_RANDOM_INT_TITLE="сличајно одабрани цијели број од %1 до %2",T.Msg.MATH_RANDOM_INT_TOOLTIP="Враћа случајно одабрани цели број између две одређене границе, уклјучиво.",T.Msg.MATH_ROUND_HELPURL="https://sr.wikipedia.org/wiki/Заокруживање",T.Msg.MATH_ROUND_OPERATOR_ROUND="заокружи",T.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN="заокружи наниже",T.Msg.MATH_ROUND_OPERATOR_ROUNDUP="заокружи навише",T.Msg.MATH_ROUND_TOOLTIP="Заокружује број на већу или мању вредност.",T.Msg.MATH_SINGLE_HELPURL="https://sr.wikipedia.org/wiki/Квадратни_корен",T.Msg.MATH_SINGLE_OP_ABSOLUTE="апсолутно",T.Msg.MATH_SINGLE_OP_ROOT="квадратни корен",T.Msg.MATH_SINGLE_TOOLTIP_ABS="Враћа апсолутну вредност броја.",T.Msg.MATH_SINGLE_TOOLTIP_EXP="Враћа е-број на степен броја.",T.Msg.MATH_SINGLE_TOOLTIP_LN="Враћа природни логаритам броја.",T.Msg.MATH_SINGLE_TOOLTIP_LOG10="Враћа логаритам броја са основом 10.",T.Msg.MATH_SINGLE_TOOLTIP_NEG="Враћа негацију броја.",T.Msg.MATH_SINGLE_TOOLTIP_POW10="Враћа 10-ти степен броја.",T.Msg.MATH_SINGLE_TOOLTIP_ROOT="Враћа квадратни корен броја.",T.Msg.MATH_SUBTRACTION_SYMBOL="-",T.Msg.MATH_TRIG_ACOS="арц цос",T.Msg.MATH_TRIG_ASIN="арц син",T.Msg.MATH_TRIG_ATAN="арц тан",T.Msg.MATH_TRIG_COS="цос",T.Msg.MATH_TRIG_HELPURL="https://sr.wikipedia.org/wiki/Тригонометријске_функције",T.Msg.MATH_TRIG_SIN="син",T.Msg.MATH_TRIG_TAN="тан",T.Msg.MATH_TRIG_TOOLTIP_ACOS="Враћа аркус косинус броја.",T.Msg.MATH_TRIG_TOOLTIP_ASIN="Враћа аркус синус броја.",T.Msg.MATH_TRIG_TOOLTIP_ATAN="Враћа аркус тангенс броја.",T.Msg.MATH_TRIG_TOOLTIP_COS="Враћа косинус степена (не радијан).",T.Msg.MATH_TRIG_TOOLTIP_SIN="Враћа синус степена (не радијан).",T.Msg.MATH_TRIG_TOOLTIP_TAN="Враћа тангенс степена (не радијан).",T.Msg.NEW_COLOUR_VARIABLE="Направи променљиву боје...",T.Msg.NEW_NUMBER_VARIABLE="Направи променљиву броја...",T.Msg.NEW_STRING_VARIABLE="Направи променљиву ниске...",T.Msg.NEW_VARIABLE="Направи променљиву…",T.Msg.NEW_VARIABLE_TITLE="Име нове променљиве:",T.Msg.NEW_VARIABLE_TYPE_TITLE="Нова врста променљиве:",T.Msg.ORDINAL_NUMBER_SUFFIX="",T.Msg.PROCEDURES_ALLOW_STATEMENTS="дозволи изјаве",T.Msg.PROCEDURES_BEFORE_PARAMS="са:",T.Msg.PROCEDURES_CALLNORETURN_HELPURL="https://sr.wikipedia.org/wiki/Потпрограм",T.Msg.PROCEDURES_CALLNORETURN_TOOLTIP="Покреће кориснички дефинисану функцију „%1”.",T.Msg.PROCEDURES_CALLRETURN_HELPURL="https://sr.wikipedia.org/wiki/Потпрограм",T.Msg.PROCEDURES_CALLRETURN_TOOLTIP="Покреће кориснички дефинисану функцију „%1” и користи њен излаз.",T.Msg.PROCEDURES_CALL_BEFORE_PARAMS="са:",T.Msg.PROCEDURES_CREATE_DO="Направи „%1”",T.Msg.PROCEDURES_DEFNORETURN_COMMENT="Опишите ову функцију…",T.Msg.PROCEDURES_DEFNORETURN_DO="",T.Msg.PROCEDURES_DEFNORETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",T.Msg.PROCEDURES_DEFNORETURN_PROCEDURE="урадите нешто",T.Msg.PROCEDURES_DEFNORETURN_TITLE="до",T.Msg.PROCEDURES_DEFNORETURN_TOOLTIP="Прави функцију без излаза.",T.Msg.PROCEDURES_DEFRETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",T.Msg.PROCEDURES_DEFRETURN_RETURN="врати",T.Msg.PROCEDURES_DEFRETURN_TOOLTIP="Прави функцију са излазом.",T.Msg.PROCEDURES_DEF_DUPLICATE_WARNING="Упозорење: Ова функција има дуплиране параметре.",T.Msg.PROCEDURES_HIGHLIGHT_DEF="Истакни дефиницију функције",T.Msg.PROCEDURES_IFRETURN_HELPURL="http://c2.com/cgi/wiki?GuardClause",T.Msg.PROCEDURES_IFRETURN_TOOLTIP="Ако је прва вредност тачна, враћа другу вредност.",T.Msg.PROCEDURES_IFRETURN_WARNING="Упозорење: Овај блок се може користити једино унутар дефиниције функције.",T.Msg.PROCEDURES_MUTATORARG_TITLE="име параметра:",T.Msg.PROCEDURES_MUTATORARG_TOOLTIP="Додајте улазни параметар финкцији.",T.Msg.PROCEDURES_MUTATORCONTAINER_TITLE="улази",T.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP="Додајте, уклоните или преуредите уносе за ову функцију.",T.Msg.REDO="Понови",T.Msg.REMOVE_COMMENT="Уклони коментар",T.Msg.RENAME_VARIABLE="Преименуј променљиву…",T.Msg.RENAME_VARIABLE_TITLE="Преименуј све ’%1’ променљиве у:",T.Msg.TEXT_APPEND_HELPURL="https://github.com/google/blockly/wiki/Text#text-modification",T.Msg.TEXT_APPEND_TITLE="на %1 додај текст %2",T.Msg.TEXT_APPEND_TOOLTIP="Додаје текст променљивој „%1”.",T.Msg.TEXT_CHANGECASE_HELPURL="https://github.com/google/blockly/wiki/Text#adjusting-text-case",T.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE="малим словима",T.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE="свака реч великим словом",T.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE="великим словима",T.Msg.TEXT_CHANGECASE_TOOLTIP="Враћа примерак текста са другачијом величином слова.",T.Msg.TEXT_CHARAT_FIRST="преузми прво слово",T.Msg.TEXT_CHARAT_FROM_END="преузми слово # са краја",T.Msg.TEXT_CHARAT_FROM_START="преузми слово #",T.Msg.TEXT_CHARAT_HELPURL="https://github.com/google/blockly/wiki/Text#extracting-text",T.Msg.TEXT_CHARAT_LAST="преузми последње слово",T.Msg.TEXT_CHARAT_RANDOM="преузми случајно слово",T.Msg.TEXT_CHARAT_TAIL="",T.Msg.TEXT_CHARAT_TITLE="у тексту %1 %2",T.Msg.TEXT_CHARAT_TOOLTIP="Враћа слово на одређени положај.",T.Msg.TEXT_COUNT_HELPURL="https://github.com/google/blockly/wiki/Text#counting-substrings",T.Msg.TEXT_COUNT_MESSAGE0="број %1 у %2",T.Msg.TEXT_COUNT_TOOLTIP="Броји колико пута се неки текст појављује унутар неког другог текста.",T.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP="Додајте ставку у текст.",T.Msg.TEXT_CREATE_JOIN_TITLE_JOIN="спој",T.Msg.TEXT_CREATE_JOIN_TOOLTIP="Додај, уклони, или другачије поредај одјелке како би изнова поставили овај текст блок.",T.Msg.TEXT_GET_SUBSTRING_END_FROM_END="слову # са краја",T.Msg.TEXT_GET_SUBSTRING_END_FROM_START="слову #",T.Msg.TEXT_GET_SUBSTRING_END_LAST="последњем слову",T.Msg.TEXT_GET_SUBSTRING_HELPURL="https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text",T.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT="у тексту",T.Msg.TEXT_GET_SUBSTRING_START_FIRST="преузми подниску из првог слова",T.Msg.TEXT_GET_SUBSTRING_START_FROM_END="преузми подниску из слова # са краја",T.Msg.TEXT_GET_SUBSTRING_START_FROM_START="преузми подниску из слова #",T.Msg.TEXT_GET_SUBSTRING_TAIL="",T.Msg.TEXT_GET_SUBSTRING_TOOLTIP="Враћа одређени део текста.",T.Msg.TEXT_INDEXOF_HELPURL="https://github.com/google/blockly/wiki/Text#finding-text",T.Msg.TEXT_INDEXOF_OPERATOR_FIRST="пронађи прво појављивање текста",T.Msg.TEXT_INDEXOF_OPERATOR_LAST="пронађи последње појављивање текста",T.Msg.TEXT_INDEXOF_TITLE="у тексту %1 %2 %3",T.Msg.TEXT_INDEXOF_TOOLTIP="Враћа индекс првог/задњег појављивања првог текста у другом тексту. Враћа %1 ако текст није пронађен.",T.Msg.TEXT_ISEMPTY_HELPURL="https://github.com/google/blockly/wiki/Text#checking-for-empty-text",T.Msg.TEXT_ISEMPTY_TITLE="%1 је празан",T.Msg.TEXT_ISEMPTY_TOOLTIP="Враћа „тачно” ако је достављени текст празан.",T.Msg.TEXT_JOIN_HELPURL="https://github.com/google/blockly/wiki/Text#text-creation",T.Msg.TEXT_JOIN_TITLE_CREATEWITH="напиши текст са",T.Msg.TEXT_JOIN_TOOLTIP="Направити дио текста спајајући различите ставке.",T.Msg.TEXT_LENGTH_HELPURL="https://github.com/google/blockly/wiki/Text#text-modification",T.Msg.TEXT_LENGTH_TITLE="дужина текста %1",T.Msg.TEXT_LENGTH_TOOLTIP="Враћа број слова (уклјучујући размаке) у датом тексту.",T.Msg.TEXT_PRINT_HELPURL="https://github.com/google/blockly/wiki/Text#printing-text",T.Msg.TEXT_PRINT_TITLE="прикажи %1",T.Msg.TEXT_PRINT_TOOLTIP="Прикажите одређени текст, број или другу вредност на екрану.",T.Msg.TEXT_PROMPT_HELPURL="https://github.com/google/blockly/wiki/Text#getting-input-from-the-user",T.Msg.TEXT_PROMPT_TOOLTIP_NUMBER="Питајте корисника за број.",T.Msg.TEXT_PROMPT_TOOLTIP_TEXT="Питајте корисника за унос текста.",T.Msg.TEXT_PROMPT_TYPE_NUMBER="питај за број са поруком",T.Msg.TEXT_PROMPT_TYPE_TEXT="питај за текст са поруком",T.Msg.TEXT_REPLACE_HELPURL="https://github.com/google/blockly/wiki/Text#replacing-substrings",T.Msg.TEXT_REPLACE_MESSAGE0="замена %1 са %2 у %3",T.Msg.TEXT_REPLACE_TOOLTIP="Замена свих појава неког текста унутар неког другог текста.",T.Msg.TEXT_REVERSE_HELPURL="https://github.com/google/blockly/wiki/Text#reversing-text",T.Msg.TEXT_REVERSE_MESSAGE0="обрнуто %1",T.Msg.TEXT_REVERSE_TOOLTIP="Обрће редослед карактера у тексту.",T.Msg.TEXT_TEXT_HELPURL="https://sr.wikipedia.org/wiki/Ниска",T.Msg.TEXT_TEXT_TOOLTIP="Слово, реч или ред текста.",T.Msg.TEXT_TRIM_HELPURL="https://github.com/google/blockly/wiki/Text#trimming-removing-spaces",T.Msg.TEXT_TRIM_OPERATOR_BOTH="трим празнине са обе стране",T.Msg.TEXT_TRIM_OPERATOR_LEFT="скратити простор са леве стране",T.Msg.TEXT_TRIM_OPERATOR_RIGHT="скратити простор са десне стране",T.Msg.TEXT_TRIM_TOOLTIP="Враћа копију текста са уклонјеним простором са једног од два краја.",T.Msg.TODAY="Данас",T.Msg.UNDO="Опозови",T.Msg.UNNAMED_KEY="неименовано",T.Msg.VARIABLES_DEFAULT_NAME="ставка",T.Msg.VARIABLES_GET_CREATE_SET="Направи блок за доделу вредности %1",T.Msg.VARIABLES_GET_HELPURL="https://github.com/google/blockly/wiki/Variables#get",T.Msg.VARIABLES_GET_TOOLTIP="Враћа вредност ове променљиве.",T.Msg.VARIABLES_SET="постави %1 у %2",T.Msg.VARIABLES_SET_CREATE_GET="Направи блок за преузимање вредности из „%1”",T.Msg.VARIABLES_SET_HELPURL="https://github.com/google/blockly/wiki/Variables#set",T.Msg.VARIABLES_SET_TOOLTIP="Поставља променљиву тако да буде једнака улазу.",T.Msg.VARIABLE_ALREADY_EXISTS="Променљива под именом ’%1’ већ постоји.",T.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE="Променљива под именом ’%1’ већ постоји за други тип: ’%2’.",T.Msg.VARIABLE_ALREADY_EXISTS_FOR_A_PARAMETER="A variable named '%1' already exists as a parameter in the procedure '%2'.",T.Msg.WORKSPACE_ARIA_LABEL="Блоклијев радни простор",T.Msg.WORKSPACE_COMMENT_DEFAULT_TEXT="Кажите нешто…",T.Msg.CONTROLS_FOREACH_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_FOR_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF=T.Msg.CONTROLS_IF_MSG_ELSEIF,T.Msg.CONTROLS_IF_ELSE_TITLE_ELSE=T.Msg.CONTROLS_IF_MSG_ELSE,T.Msg.CONTROLS_IF_IF_TITLE_IF=T.Msg.CONTROLS_IF_MSG_IF,T.Msg.CONTROLS_IF_MSG_THEN=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_WHILEUNTIL_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.LISTS_CREATE_WITH_ITEM_TITLE=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.LISTS_GET_INDEX_HELPURL=T.Msg.LISTS_INDEX_OF_HELPURL,T.Msg.LISTS_GET_INDEX_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_INDEX_OF_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_SET_INDEX_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.MATH_CHANGE_TITLE_ITEM=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.PROCEDURES_DEFRETURN_COMMENT=T.Msg.PROCEDURES_DEFNORETURN_COMMENT,T.Msg.PROCEDURES_DEFRETURN_DO=T.Msg.PROCEDURES_DEFNORETURN_DO,T.Msg.PROCEDURES_DEFRETURN_PROCEDURE=T.Msg.PROCEDURES_DEFNORETURN_PROCEDURE,T.Msg.PROCEDURES_DEFRETURN_TITLE=T.Msg.PROCEDURES_DEFNORETURN_TITLE,T.Msg.TEXT_APPEND_VARIABLE=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.LOGIC_HUE="210",T.Msg.LOOPS_HUE="120",T.Msg.MATH_HUE="230",T.Msg.TEXTS_HUE="160",T.Msg.LISTS_HUE="260",T.Msg.COLOUR_HUE="20",T.Msg.VARIABLES_HUE="330",T.Msg.VARIABLES_DYNAMIC_HUE="310",T.Msg.PROCEDURES_HUE="290",T.Msg})?E.apply(_,O):E)||(T.exports=L)}}]);