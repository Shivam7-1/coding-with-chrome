(self.webpackChunkcoding_with_chrome=self.webpackChunkcoding_with_chrome||[]).push([[9670],{9670:function(T,_){var E,O,L;O=[],void 0===(L="function"==typeof(E=function(){"use strict";var T=T||{Msg:Object.create(null)};return T.Msg.ADD_COMMENT="Добави коментар",T.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE="Променливата '%1' не може да бъде изтрита, защото е част от определението на функцията '%2'",T.Msg.CHANGE_VALUE_TITLE="Промени стойността:",T.Msg.CLEAN_UP="Премахни блокове",T.Msg.COLLAPSED_WARNINGS_WARNING="Свитите блокове съдържат предупреждения.",T.Msg.COLLAPSE_ALL="Скрий блокове",T.Msg.COLLAPSE_BLOCK="Скрий блок",T.Msg.COLOUR_BLEND_COLOUR1="цвят 1",T.Msg.COLOUR_BLEND_COLOUR2="цвят 2",T.Msg.COLOUR_BLEND_HELPURL="https://meyerweb.com/eric/tools/color-blend/#:::rgbp",T.Msg.COLOUR_BLEND_RATIO="съотношение",T.Msg.COLOUR_BLEND_TITLE="смеси",T.Msg.COLOUR_BLEND_TOOLTIP="Смесва два цвят в дадено съотношение (0.0 - 1.0).",T.Msg.COLOUR_PICKER_HELPURL="https://bg.wikipedia.org/wiki/Цвят_(оптика)",T.Msg.COLOUR_PICKER_TOOLTIP="Избери цвят от палитрата.",T.Msg.COLOUR_RANDOM_HELPURL="http://randomcolour.com",T.Msg.COLOUR_RANDOM_TITLE="случаен цвят",T.Msg.COLOUR_RANDOM_TOOLTIP="Избери цвят на случаен принцип.",T.Msg.COLOUR_RGB_BLUE="син",T.Msg.COLOUR_RGB_GREEN="зелен",T.Msg.COLOUR_RGB_HELPURL="https://www.december.com/html/spec/colorpercompact.html",T.Msg.COLOUR_RGB_RED="червен",T.Msg.COLOUR_RGB_TITLE="оцвети с",T.Msg.COLOUR_RGB_TOOLTIP="Създай цвят с избраните пропорции, червено, зелено и синьо. Всички стойности трябва да бъдат от 0 до 100.",T.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL="https://github.com/google/blockly/wiki/Loops#loop-termination-blocks",T.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK="прекъсни цикъла",T.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE="премини към следващата стъпка от цикъла",T.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK="Прекъсни цикъла, в който се съдържа тази команда.",T.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE="Премини към следващата стъпка от цикъла",T.Msg.CONTROLS_FLOW_STATEMENTS_WARNING="Предупреждение: Този блок може да се използва само в цикъл.",T.Msg.CONTROLS_FOREACH_HELPURL="https://github.com/google/blockly/wiki/Loops#for-each",T.Msg.CONTROLS_FOREACH_TITLE="за всеки елемент %1 в списъка %2",T.Msg.CONTROLS_FOREACH_TOOLTIP="За всеки елемент в даден списък, присвои елемента на променливата „%1“ и след това изпълни командите.",T.Msg.CONTROLS_FOR_HELPURL="https://github.com/google/blockly/wiki/Loops#count-with",T.Msg.CONTROLS_FOR_TITLE="преброй чрез %1 от %2 до %3 през %4",T.Msg.CONTROLS_FOR_TOOLTIP="Нека променлива '%1' премине през стойностите от началното до крайното число през зададената стъпка и изпълни избраните блокове.",T.Msg.CONTROLS_IF_ELSEIF_TOOLTIP="Добави условие към „ако“ блока.",T.Msg.CONTROLS_IF_ELSE_TOOLTIP="Добави окончателно, прихващащо всички останали случаи условие към блок „ако“.",T.Msg.CONTROLS_IF_HELPURL="https://github.com/google/blockly/wiki/IfElse",T.Msg.CONTROLS_IF_IF_TOOLTIP="Добави, премахни или пренареди частите, за да промениш този „ако“ блок.",T.Msg.CONTROLS_IF_MSG_ELSE="иначе",T.Msg.CONTROLS_IF_MSG_ELSEIF="иначе ако",T.Msg.CONTROLS_IF_MSG_IF="ако",T.Msg.CONTROLS_IF_TOOLTIP_1="Ако стойността е вярна, изпълни операциите.",T.Msg.CONTROLS_IF_TOOLTIP_2="Ако стойността е вярна, изпълни първият блок. Иначе, изпълни вторият блок.",T.Msg.CONTROLS_IF_TOOLTIP_3="Ако първата стойност е вярна, изпълни първия блок. Иначе, ако втората стойност е вярна, изпълни втория блок.",T.Msg.CONTROLS_IF_TOOLTIP_4="Ако първата стойност е вярна, изпълни първия блок. В противен случай, ако втората стойност е вярна, изпълни втория блок. Ако нито една от стойностите не е вярна, изпълни последния блок.",T.Msg.CONTROLS_REPEAT_HELPURL="https://bg.wikipedia.org/wiki/Цикъл_(програмиране)#For_.D1.86.D0.B8.D0.BA.D1.8A.D0.BB.D1.8A.D1.82",T.Msg.CONTROLS_REPEAT_INPUT_DO="изпълни",T.Msg.CONTROLS_REPEAT_TITLE="Повтори %1 пъти",T.Msg.CONTROLS_REPEAT_TOOLTIP="Изпълнява команди няколко пъти.",T.Msg.CONTROLS_WHILEUNTIL_HELPURL="https://github.com/google/blockly/wiki/Loops#repeat",T.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL="повтаряй докато",T.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE="повтаряй докато е вярно, че",T.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL="Изпълни командите, ако стойността не е вярна.",T.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE="Изпълни командите, ако стойността е вярна.",T.Msg.DELETE_ALL_BLOCKS="Изтриване на всички 1% блокове?",T.Msg.DELETE_BLOCK="Изтрий блок",T.Msg.DELETE_VARIABLE='Изтриване на променливата "%1"',T.Msg.DELETE_VARIABLE_CONFIRMATION="Изтриване на %1 използване на променлива '%2'?",T.Msg.DELETE_X_BLOCKS="Изтрий %1 блока",T.Msg.DIALOG_CANCEL="Отказ",T.Msg.DIALOG_OK="ОК",T.Msg.DISABLE_BLOCK="Деактивирай блок",T.Msg.DUPLICATE_BLOCK="Копирай",T.Msg.DUPLICATE_COMMENT="Дублиране на коментара",T.Msg.ENABLE_BLOCK="Активирай блок",T.Msg.EXPAND_ALL="Покажи блокове",T.Msg.EXPAND_BLOCK="Покажи блок",T.Msg.EXTERNAL_INPUTS="Външни входове",T.Msg.HELP="Помощ",T.Msg.INLINE_INPUTS="Вътрешни входове",T.Msg.LISTS_CREATE_EMPTY_HELPURL="https://github.com/google/blockly/wiki/Lists#create-empty-list",T.Msg.LISTS_CREATE_EMPTY_TITLE="създай празен списък",T.Msg.LISTS_CREATE_EMPTY_TOOLTIP="Връща списък с дължина 0, не съдържащ данни",T.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD="списък",T.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP="Добави, премахни или пренареди частите, за да промениш този списъчен блок.",T.Msg.LISTS_CREATE_WITH_HELPURL="https://github.com/google/blockly/wiki/Lists#create-list-with",T.Msg.LISTS_CREATE_WITH_INPUT_WITH="създай списък с",T.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP="Добави елемент към текста.",T.Msg.LISTS_CREATE_WITH_TOOLTIP="Създай списък с произволен брой елементи.",T.Msg.LISTS_GET_INDEX_FIRST="първия",T.Msg.LISTS_GET_INDEX_FROM_END="№ от края",T.Msg.LISTS_GET_INDEX_FROM_START="№",T.Msg.LISTS_GET_INDEX_GET="вземи",T.Msg.LISTS_GET_INDEX_GET_REMOVE="вземи и премахни",T.Msg.LISTS_GET_INDEX_LAST="последния",T.Msg.LISTS_GET_INDEX_RANDOM="произволен",T.Msg.LISTS_GET_INDEX_REMOVE="премахни",T.Msg.LISTS_GET_INDEX_TAIL="",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST="Връща първия елемент в списък.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM="Връща елемента на определената позиция в списък.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST="Връща последния елемент в списък.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM="Връща случаен елемент от списъка.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST="Премахва и връща първия елемент в списък.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM="Премахва и връща елемента на определена позиция в списък.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST="Премахва и връща последния елемент в списък.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM="Премахва и връща случаен елемент от списък.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST="Премахва първия елемент от списък.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM="Премахва елемент на определена позиция от списък.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST="Премахва последния елемент от списък.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM="Премахва случаен елемент от списък.",T.Msg.LISTS_GET_SUBLIST_END_FROM_END="до № открая",T.Msg.LISTS_GET_SUBLIST_END_FROM_START="до №",T.Msg.LISTS_GET_SUBLIST_END_LAST="до края",T.Msg.LISTS_GET_SUBLIST_HELPURL="https://github.com/google/blockly/wiki/Lists#getting-a-sublist",T.Msg.LISTS_GET_SUBLIST_START_FIRST="вземи подсписък от първия",T.Msg.LISTS_GET_SUBLIST_START_FROM_END="вземи подсписък от № от края",T.Msg.LISTS_GET_SUBLIST_START_FROM_START="вземи подсписък от №",T.Msg.LISTS_GET_SUBLIST_TAIL="",T.Msg.LISTS_GET_SUBLIST_TOOLTIP="Копира част от списък.",T.Msg.LISTS_INDEX_FROM_END_TOOLTIP="%1 е последният елемент.",T.Msg.LISTS_INDEX_FROM_START_TOOLTIP="%1 е първият елемент.",T.Msg.LISTS_INDEX_OF_FIRST="намери първата поява на елемента",T.Msg.LISTS_INDEX_OF_HELPURL="https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list",T.Msg.LISTS_INDEX_OF_LAST="намери последната поява на елемента",T.Msg.LISTS_INDEX_OF_TOOLTIP="Връща индекса на първото/последното появяване на елемента в списъка. Връща %1, ако елементът не е намерен.",T.Msg.LISTS_INLIST="в списъка",T.Msg.LISTS_ISEMPTY_HELPURL="https://github.com/google/blockly/wiki/Lists#is-empty",T.Msg.LISTS_ISEMPTY_TITLE="%1 е празен",T.Msg.LISTS_ISEMPTY_TOOLTIP="Връща стойност вярно, ако списъкът е празен.",T.Msg.LISTS_LENGTH_HELPURL="https://github.com/google/blockly/wiki/Lists#length-of",T.Msg.LISTS_LENGTH_TITLE="дължината на %1",T.Msg.LISTS_LENGTH_TOOLTIP="Връща дължината на списък.",T.Msg.LISTS_REPEAT_HELPURL="https://github.com/google/blockly/wiki/Lists#create-list-with",T.Msg.LISTS_REPEAT_TITLE="създай списък от %1 повторен %2 пъти",T.Msg.LISTS_REPEAT_TOOLTIP="Създава списък, състоящ се от определен брой копия на елемента.",T.Msg.LISTS_REVERSE_HELPURL="https://github.com/google/blockly/wiki/Lists#reversing-a-list",T.Msg.LISTS_REVERSE_MESSAGE0="промени реда на обратно %1",T.Msg.LISTS_REVERSE_TOOLTIP="Промени реда на списъка на обратно.",T.Msg.LISTS_SET_INDEX_HELPURL="https://github.com/google/blockly/wiki/Lists#in-list--set",T.Msg.LISTS_SET_INDEX_INPUT_TO="следното",T.Msg.LISTS_SET_INDEX_INSERT="вмъкни на позиция",T.Msg.LISTS_SET_INDEX_SET="промени",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST="Вмъква елемент в началото на списъка.",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM="Вмъква елемент на определена позиция в списък.",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST="Добави елемент в края на списък.",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM="Вмъква елемент на произволно място в списък.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST="Променя първия елемент в списък.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM="Променя елемента на определена позиция в списък.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST="Променя последния елемент в списък.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM="Променя случаен елемент от списък.",T.Msg.LISTS_SORT_HELPURL="https://github.com/google/blockly/wiki/Lists#sorting-a-list",T.Msg.LISTS_SORT_ORDER_ASCENDING="възходящо",T.Msg.LISTS_SORT_ORDER_DESCENDING="низходящо",T.Msg.LISTS_SORT_TITLE="сортиране по %1 %2 %3",T.Msg.LISTS_SORT_TOOLTIP="Подреди копие на списъка.",T.Msg.LISTS_SORT_TYPE_IGNORECASE="по азбучен ред, без отчитане на малки и главни букви",T.Msg.LISTS_SORT_TYPE_NUMERIC="в числов ред",T.Msg.LISTS_SORT_TYPE_TEXT="по азбучен ред",T.Msg.LISTS_SPLIT_HELPURL="https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists",T.Msg.LISTS_SPLIT_LIST_FROM_TEXT="Направи списък от текст",T.Msg.LISTS_SPLIT_TEXT_FROM_LIST="направи текст от списък",T.Msg.LISTS_SPLIT_TOOLTIP_JOIN="Събира списък от текстове в един текст, раделени с разделител.",T.Msg.LISTS_SPLIT_TOOLTIP_SPLIT="Разделя текст в списък на текстове, по всеки разделител.",T.Msg.LISTS_SPLIT_WITH_DELIMITER="с разделител",T.Msg.LOGIC_BOOLEAN_FALSE="невярно",T.Msg.LOGIC_BOOLEAN_HELPURL="https://github.com/google/blockly/wiki/Logic#values",T.Msg.LOGIC_BOOLEAN_TOOLTIP="Връща вярно или невярно.",T.Msg.LOGIC_BOOLEAN_TRUE="вярно",T.Msg.LOGIC_COMPARE_HELPURL="https://en.wikipedia.org/wiki/Inequality_(mathematics)",T.Msg.LOGIC_COMPARE_TOOLTIP_EQ="Върни вярно, ако двата параметъра са еднакви.",T.Msg.LOGIC_COMPARE_TOOLTIP_GT="Върни истина, ако първия параметър е по-голям от втория.",T.Msg.LOGIC_COMPARE_TOOLTIP_GTE="Върни истина, ако първия параметър е по-голям или равен на втория.",T.Msg.LOGIC_COMPARE_TOOLTIP_LT="Върни вярно, ако първият параметър е по-малък от втория.",T.Msg.LOGIC_COMPARE_TOOLTIP_LTE="Върни истина, ако първия параметър е по-малък или равен на втория.",T.Msg.LOGIC_COMPARE_TOOLTIP_NEQ="Върни вярно, ако двата параметъра са различни.",T.Msg.LOGIC_NEGATE_HELPURL="https://github.com/google/blockly/wiki/Logic#not",T.Msg.LOGIC_NEGATE_TITLE="не %1",T.Msg.LOGIC_NEGATE_TOOLTIP="Върни вярно, ако параметърът е неверен. Върни невярно, ако параметърът е верен.",T.Msg.LOGIC_NULL="нула",T.Msg.LOGIC_NULL_HELPURL="https://en.wikipedia.org/wiki/Nullable_type",T.Msg.LOGIC_NULL_TOOLTIP="Връща нула.",T.Msg.LOGIC_OPERATION_AND="и",T.Msg.LOGIC_OPERATION_HELPURL="https://github.com/google/blockly/wiki/Logic#logical-operations",T.Msg.LOGIC_OPERATION_OR="или",T.Msg.LOGIC_OPERATION_TOOLTIP_AND="Върни вярно, ако и двата параметъра са верни.",T.Msg.LOGIC_OPERATION_TOOLTIP_OR="Върни „вярно“, ако поне един от входовете е верен.",T.Msg.LOGIC_TERNARY_CONDITION="тест",T.Msg.LOGIC_TERNARY_HELPURL="https://en.wikipedia.org/wiki/%3F:",T.Msg.LOGIC_TERNARY_IF_FALSE="Ако е невярно",T.Msg.LOGIC_TERNARY_IF_TRUE="Ако е вярно",T.Msg.LOGIC_TERNARY_TOOLTIP="Провери условието в „тест“. Ако условието е истина, върни стойността „ако е вярно“, иначе върни стойността „ако е невярно“.",T.Msg.MATH_ADDITION_SYMBOL="+",T.Msg.MATH_ARITHMETIC_HELPURL="https://bg.wikipedia.org/wiki/Аритметика",T.Msg.MATH_ARITHMETIC_TOOLTIP_ADD="Върни сумата на двете числа.",T.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE="Върни частното на двете числа.",T.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS="Върни разликата на двете числа.",T.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY="Върни произведението на двете числа.",T.Msg.MATH_ARITHMETIC_TOOLTIP_POWER="Върни първото число, повдигнато на степен на второто число.",T.Msg.MATH_ATAN2_HELPURL="https://en.wikipedia.org/wiki/Atan2",T.Msg.MATH_ATAN2_TITLE="atan2 от X:%1 Y:%2",T.Msg.MATH_ATAN2_TOOLTIP="Връща аркустангенс на точка (X, Y) в градуси от -180 до 180.",T.Msg.MATH_CHANGE_HELPURL="https://bg.wikipedia.org/wiki/Събиране",T.Msg.MATH_CHANGE_TITLE="промени %1 на %2",T.Msg.MATH_CHANGE_TOOLTIP="Добави число към променлива „%1“.",T.Msg.MATH_CONSTANT_HELPURL="http://bg.wikipedia.org/wiki/Константа",T.Msg.MATH_CONSTANT_TOOLTIP="Връща една от често срещаните константи: π (3.141...), e (2.718...), φ (1.618...), sqrt(2) (1.414...), sqrt(½) (0.707...) или ∞ (безкрайност).",T.Msg.MATH_CONSTRAIN_HELPURL="https://en.wikipedia.org/wiki/Clamping_(graphics)",T.Msg.MATH_CONSTRAIN_TITLE="ограничи %1 между %2 и %3",T.Msg.MATH_CONSTRAIN_TOOLTIP="Ограничи число да бъде в определените граници (включително).",T.Msg.MATH_DIVISION_SYMBOL="÷",T.Msg.MATH_IS_DIVISIBLE_BY="се дели на",T.Msg.MATH_IS_EVEN="е четно",T.Msg.MATH_IS_NEGATIVE="е отрицателно",T.Msg.MATH_IS_ODD="е нечетно",T.Msg.MATH_IS_POSITIVE="е положително",T.Msg.MATH_IS_PRIME="е просто",T.Msg.MATH_IS_TOOLTIP="Проверете дали дадено число е четно, нечетно, просто, цяло, положително, отрицателно или дали се дели на друго число. Връща вярно или невярно.",T.Msg.MATH_IS_WHOLE="е цяло",T.Msg.MATH_MODULO_HELPURL="http://bg.wikipedia.org/wiki/Остатък",T.Msg.MATH_MODULO_TITLE="остатъка от делението на %1 на %2",T.Msg.MATH_MODULO_TOOLTIP="Върни остатъка от деление на две числа.",T.Msg.MATH_MULTIPLICATION_SYMBOL="×",T.Msg.MATH_NUMBER_HELPURL="https://bg.wikipedia.org/wiki/Число",T.Msg.MATH_NUMBER_TOOLTIP="Число.",T.Msg.MATH_ONLIST_HELPURL="",T.Msg.MATH_ONLIST_OPERATOR_AVERAGE="средната стойност на числата в списъка",T.Msg.MATH_ONLIST_OPERATOR_MAX="най-голямата стойност в списъка",T.Msg.MATH_ONLIST_OPERATOR_MEDIAN="медианата на списък",T.Msg.MATH_ONLIST_OPERATOR_MIN="най-малката стойност в списъка",T.Msg.MATH_ONLIST_OPERATOR_MODE="режими на списъка",T.Msg.MATH_ONLIST_OPERATOR_RANDOM="случаен елемент от списъка",T.Msg.MATH_ONLIST_OPERATOR_STD_DEV="стандартно отклонение на списък",T.Msg.MATH_ONLIST_OPERATOR_SUM="сума на списъка",T.Msg.MATH_ONLIST_TOOLTIP_AVERAGE="Върни средната стойност (аритметичното средно) на числата в списъка.",T.Msg.MATH_ONLIST_TOOLTIP_MAX="Върни най-голямото число в списъка.",T.Msg.MATH_ONLIST_TOOLTIP_MEDIAN="Върни медианата в списъка.",T.Msg.MATH_ONLIST_TOOLTIP_MIN="Върни най-малкото число в списъка.",T.Msg.MATH_ONLIST_TOOLTIP_MODE="Върни списък на най-често срещаните елементи в списъка.",T.Msg.MATH_ONLIST_TOOLTIP_RANDOM="Върни случаен елемент от списъка.",T.Msg.MATH_ONLIST_TOOLTIP_STD_DEV="Връща стандартното отклонение на списъка.",T.Msg.MATH_ONLIST_TOOLTIP_SUM="Върни сумата на всички числа в списъка.",T.Msg.MATH_POWER_SYMBOL="^",T.Msg.MATH_RANDOM_FLOAT_HELPURL="https://bg.wikipedia.org/wiki/Генератор_на_случайни_числа",T.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM="случайно дробно число",T.Msg.MATH_RANDOM_FLOAT_TOOLTIP="Върни случайно дробно число между 0.0 (включително) и 1.0 (без да го включва)",T.Msg.MATH_RANDOM_INT_HELPURL="https://bg.wikipedia.org/wiki/Генератор_на_случайни_числа",T.Msg.MATH_RANDOM_INT_TITLE="случайно цяло число между %1 и %2",T.Msg.MATH_RANDOM_INT_TOOLTIP="Върни случайно число в определените граници (включително).",T.Msg.MATH_ROUND_HELPURL="https://en.wikipedia.org/wiki/Rounding",T.Msg.MATH_ROUND_OPERATOR_ROUND="закръгли",T.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN="закръгли надолу",T.Msg.MATH_ROUND_OPERATOR_ROUNDUP="закръгли нагоре",T.Msg.MATH_ROUND_TOOLTIP="Закръгли число нагоре или надолу.",T.Msg.MATH_SINGLE_HELPURL="https://en.wikipedia.org/wiki/Square_root",T.Msg.MATH_SINGLE_OP_ABSOLUTE="абсолютна",T.Msg.MATH_SINGLE_OP_ROOT="корен квадратен",T.Msg.MATH_SINGLE_TOOLTIP_ABS="Връща абсолютната стойност на число.",T.Msg.MATH_SINGLE_TOOLTIP_EXP="Върни е (неперовото число) на степен зададеното число.",T.Msg.MATH_SINGLE_TOOLTIP_LN="Върни натуралния логаритъм от число.",T.Msg.MATH_SINGLE_TOOLTIP_LOG10="Върни десетичния логаритъм на число.",T.Msg.MATH_SINGLE_TOOLTIP_NEG="Върни числото с обърнат знак.",T.Msg.MATH_SINGLE_TOOLTIP_POW10="Върни 10 на степен зададеното число.",T.Msg.MATH_SINGLE_TOOLTIP_ROOT="Връща корен квадратен от число.",T.Msg.MATH_SUBTRACTION_SYMBOL="-",T.Msg.MATH_TRIG_ACOS="аркус косинус",T.Msg.MATH_TRIG_ASIN="аркус синус",T.Msg.MATH_TRIG_ATAN="аркус тангенс",T.Msg.MATH_TRIG_COS="косинус",T.Msg.MATH_TRIG_HELPURL="https://bg.wikipedia.org/wiki/Тригонометрична_функция",T.Msg.MATH_TRIG_SIN="синус",T.Msg.MATH_TRIG_TAN="тангенс",T.Msg.MATH_TRIG_TOOLTIP_ACOS="Върни аркускосинус от число.",T.Msg.MATH_TRIG_TOOLTIP_ASIN="Върни аркуссинус от число.",T.Msg.MATH_TRIG_TOOLTIP_ATAN="Върни аркустангенс от число.",T.Msg.MATH_TRIG_TOOLTIP_COS="Върни косинус от ъгъл в градуси (не в радиани)",T.Msg.MATH_TRIG_TOOLTIP_SIN="Върни синус от ъгъл в градуси (не в радиани)",T.Msg.MATH_TRIG_TOOLTIP_TAN="Върни тангенс от ъгъл в градуси (не в радиани)",T.Msg.NEW_COLOUR_VARIABLE="Създаване на цветова променлива...",T.Msg.NEW_NUMBER_VARIABLE="Създаване на числова променлива...",T.Msg.NEW_STRING_VARIABLE="Създаване на низова променлива...",T.Msg.NEW_VARIABLE="Създаване на променлива...",T.Msg.NEW_VARIABLE_TITLE="Ново име на променливата:",T.Msg.NEW_VARIABLE_TYPE_TITLE="Тип на новата променлива:",T.Msg.ORDINAL_NUMBER_SUFFIX="",T.Msg.PROCEDURES_ALLOW_STATEMENTS="позволи операциите",T.Msg.PROCEDURES_BEFORE_PARAMS="с:",T.Msg.PROCEDURES_CALLNORETURN_HELPURL="https://bg.wikipedia.org/wiki/Подпрограма",T.Msg.PROCEDURES_CALLNORETURN_TOOLTIP="Изпълни дефинирана от потребителя функция „%1“.",T.Msg.PROCEDURES_CALLRETURN_HELPURL="https://bg.wikipedia.org/wiki/Подпрограма",T.Msg.PROCEDURES_CALLRETURN_TOOLTIP="Изпълни дефинирана от потребителя функция „%1“ и използвай резултата.",T.Msg.PROCEDURES_CALL_BEFORE_PARAMS="с:",T.Msg.PROCEDURES_CREATE_DO="Създай '%1'",T.Msg.PROCEDURES_DEFNORETURN_COMMENT="Опишете тази функция...",T.Msg.PROCEDURES_DEFNORETURN_DO="",T.Msg.PROCEDURES_DEFNORETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",T.Msg.PROCEDURES_DEFNORETURN_PROCEDURE="направиш",T.Msg.PROCEDURES_DEFNORETURN_TITLE="за да",T.Msg.PROCEDURES_DEFNORETURN_TOOLTIP="Създава функция, която не връща резултат.",T.Msg.PROCEDURES_DEFRETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",T.Msg.PROCEDURES_DEFRETURN_RETURN="върни",T.Msg.PROCEDURES_DEFRETURN_TOOLTIP="Създава функция, която връща резултат.",T.Msg.PROCEDURES_DEF_DUPLICATE_WARNING="Предупреждение: Тази функция има дублиращи се параметри.",T.Msg.PROCEDURES_HIGHLIGHT_DEF="Покажи дефиницията на функцията",T.Msg.PROCEDURES_IFRETURN_HELPURL="http://c2.com/cgi/wiki?GuardClause",T.Msg.PROCEDURES_IFRETURN_TOOLTIP="Ако стойността е вярна, върни втората стойност.",T.Msg.PROCEDURES_IFRETURN_WARNING="Предупреждение: Този блок може да се използва само във функция.",T.Msg.PROCEDURES_MUTATORARG_TITLE="име на параметър:",T.Msg.PROCEDURES_MUTATORARG_TOOLTIP="Добавяне на параметър към функцията.",T.Msg.PROCEDURES_MUTATORCONTAINER_TITLE="вход",T.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP="Добави, премахни или пренареди входните параметри за тази функция.",T.Msg.REDO="Повторение",T.Msg.REMOVE_COMMENT="Премахни коментар",T.Msg.RENAME_VARIABLE="Преименувай променливата...",T.Msg.RENAME_VARIABLE_TITLE="Преименувай всички '%1' променливи на:",T.Msg.TEXT_APPEND_HELPURL="https://github.com/google/blockly/wiki/Text#text-modification",T.Msg.TEXT_APPEND_TITLE="добавете текст %2 към %1",T.Msg.TEXT_APPEND_TOOLTIP="Добави текст към променливата „%1“.",T.Msg.TEXT_CHANGECASE_HELPURL="https://github.com/google/blockly/wiki/Text#adjusting-text-case",T.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE="с малки букви",T.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE="с Главна Буква На Всяка Дума",T.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE="с ГЛАВНИ БУКВИ",T.Msg.TEXT_CHANGECASE_TOOLTIP="Връща копие на текста със сменени малки и главни букви.",T.Msg.TEXT_CHARAT_FIRST="вземи първата буква",T.Msg.TEXT_CHARAT_FROM_END="вземи буква № от края",T.Msg.TEXT_CHARAT_FROM_START="вземи буква №",T.Msg.TEXT_CHARAT_HELPURL="https://github.com/google/blockly/wiki/Text#extracting-text",T.Msg.TEXT_CHARAT_LAST="вземи последната буква",T.Msg.TEXT_CHARAT_RANDOM="вземи произволна буква",T.Msg.TEXT_CHARAT_TAIL="",T.Msg.TEXT_CHARAT_TITLE="в текст %1 %2",T.Msg.TEXT_CHARAT_TOOLTIP="Връща буквата в определена позиция.",T.Msg.TEXT_COUNT_HELPURL="https://github.com/google/blockly/wiki/Text#counting-substrings",T.Msg.TEXT_COUNT_MESSAGE0="пресмята броя на %1 в %2",T.Msg.TEXT_COUNT_TOOLTIP="Преброй колко пъти даден текст се среща в друг текст.",T.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP="Добави елемент към текста.",T.Msg.TEXT_CREATE_JOIN_TITLE_JOIN="свържи",T.Msg.TEXT_CREATE_JOIN_TOOLTIP="Добави, премахни или пренареди частите, за да промениш този текстов блок.",T.Msg.TEXT_GET_SUBSTRING_END_FROM_END="до буква № от края",T.Msg.TEXT_GET_SUBSTRING_END_FROM_START="до буква №",T.Msg.TEXT_GET_SUBSTRING_END_LAST="до последната буква.",T.Msg.TEXT_GET_SUBSTRING_HELPURL="https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text",T.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT="в текста",T.Msg.TEXT_GET_SUBSTRING_START_FIRST="вземи текста от първата буква",T.Msg.TEXT_GET_SUBSTRING_START_FROM_END="вземи текста от буква № (броено отзад-напред)",T.Msg.TEXT_GET_SUBSTRING_START_FROM_START="вземи текста от буква №",T.Msg.TEXT_GET_SUBSTRING_TAIL="",T.Msg.TEXT_GET_SUBSTRING_TOOLTIP="Връща определена част от текста.",T.Msg.TEXT_INDEXOF_HELPURL="https://github.com/google/blockly/wiki/Text#finding-text",T.Msg.TEXT_INDEXOF_OPERATOR_FIRST="намери първата поява на текста",T.Msg.TEXT_INDEXOF_OPERATOR_LAST="намери последната поява на текста",T.Msg.TEXT_INDEXOF_TITLE="в текст %1 %2 %3",T.Msg.TEXT_INDEXOF_TOOLTIP="Връща индекса на първото/последното срещане на първия текст във втория текст. Връща %1, ако текстът не е намерен.",T.Msg.TEXT_ISEMPTY_HELPURL="https://github.com/google/blockly/wiki/Text#checking-for-empty-text",T.Msg.TEXT_ISEMPTY_TITLE="%1 е празен",T.Msg.TEXT_ISEMPTY_TOOLTIP="Връща вярно, ако текста е празен.",T.Msg.TEXT_JOIN_HELPURL="https://github.com/google/blockly/wiki/Text#text-creation",T.Msg.TEXT_JOIN_TITLE_CREATEWITH="създай текст с",T.Msg.TEXT_JOIN_TOOLTIP="Създай текст като съчетаеш няколко елемента.",T.Msg.TEXT_LENGTH_HELPURL="https://github.com/google/blockly/wiki/Text#text-modification",T.Msg.TEXT_LENGTH_TITLE="дължината на %1",T.Msg.TEXT_LENGTH_TOOLTIP="Връща броя на символите (включително и интервалите) в текста.",T.Msg.TEXT_PRINT_HELPURL="https://github.com/google/blockly/wiki/Text#printing-text",T.Msg.TEXT_PRINT_TITLE="отпечатай %1",T.Msg.TEXT_PRINT_TOOLTIP="Отпечатай текста, числото или друга стойност.",T.Msg.TEXT_PROMPT_HELPURL="https://github.com/google/blockly/wiki/Text#getting-input-from-the-user",T.Msg.TEXT_PROMPT_TOOLTIP_NUMBER="Питай потребителя за число.",T.Msg.TEXT_PROMPT_TOOLTIP_TEXT="Питай потребителя за текст.",T.Msg.TEXT_PROMPT_TYPE_NUMBER="питай за число със съобщение",T.Msg.TEXT_PROMPT_TYPE_TEXT="питай за текст със съобщение",T.Msg.TEXT_REPLACE_HELPURL="https://github.com/google/blockly/wiki/Text#replacing-substrings",T.Msg.TEXT_REPLACE_MESSAGE0="замяна на %1 с %2 в %3",T.Msg.TEXT_REPLACE_TOOLTIP="Замени всички появи на даден текст в друг текст.",T.Msg.TEXT_REVERSE_HELPURL="https://github.com/google/blockly/wiki/Text#reversing-text",T.Msg.TEXT_REVERSE_MESSAGE0="промени реда на обратно %1",T.Msg.TEXT_REVERSE_TOOLTIP="Промени реда на знаците в текста на обратно.",T.Msg.TEXT_TEXT_HELPURL="https://bg.wikipedia.org/wiki/Низ",T.Msg.TEXT_TEXT_TOOLTIP="Буква, дума или ред",T.Msg.TEXT_TRIM_HELPURL="https://github.com/google/blockly/wiki/Text#trimming-removing-spaces",T.Msg.TEXT_TRIM_OPERATOR_BOTH="премахни интервалите от двете страни",T.Msg.TEXT_TRIM_OPERATOR_LEFT="премахни интервалите отляво",T.Msg.TEXT_TRIM_OPERATOR_RIGHT="премахни интервалите отдясно",T.Msg.TEXT_TRIM_TOOLTIP="Връща копие на текста с премахнати интервали от единия или двата края.",T.Msg.TODAY="Днес",T.Msg.UNDO="Отмяна",T.Msg.UNNAMED_KEY="без име",T.Msg.VARIABLES_DEFAULT_NAME="елемент",T.Msg.VARIABLES_GET_CREATE_SET="Създай „промени стойността на %1“",T.Msg.VARIABLES_GET_HELPURL="https://github.com/google/blockly/wiki/Variables#get",T.Msg.VARIABLES_GET_TOOLTIP="Връща стойността на тази променлива.",T.Msg.VARIABLES_SET="нека %1 бъде %2",T.Msg.VARIABLES_SET_CREATE_GET="Създай „вземи стойността на %1“",T.Msg.VARIABLES_SET_HELPURL="https://github.com/google/blockly/wiki/Variables#set",T.Msg.VARIABLES_SET_TOOLTIP="Установява променливата със стойността на входа.",T.Msg.VARIABLE_ALREADY_EXISTS="Променлива с име '%1' вече съществува.",T.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE="Променлива с име '%1' вече съществува за друг тип: '%2'.",T.Msg.VARIABLE_ALREADY_EXISTS_FOR_A_PARAMETER="A variable named '%1' already exists as a parameter in the procedure '%2'.",T.Msg.WORKSPACE_ARIA_LABEL="Работна област на Blockly",T.Msg.WORKSPACE_COMMENT_DEFAULT_TEXT="Коментирайте нещо...",T.Msg.CONTROLS_FOREACH_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_FOR_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF=T.Msg.CONTROLS_IF_MSG_ELSEIF,T.Msg.CONTROLS_IF_ELSE_TITLE_ELSE=T.Msg.CONTROLS_IF_MSG_ELSE,T.Msg.CONTROLS_IF_IF_TITLE_IF=T.Msg.CONTROLS_IF_MSG_IF,T.Msg.CONTROLS_IF_MSG_THEN=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_WHILEUNTIL_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.LISTS_CREATE_WITH_ITEM_TITLE=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.LISTS_GET_INDEX_HELPURL=T.Msg.LISTS_INDEX_OF_HELPURL,T.Msg.LISTS_GET_INDEX_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_INDEX_OF_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_SET_INDEX_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.MATH_CHANGE_TITLE_ITEM=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.PROCEDURES_DEFRETURN_COMMENT=T.Msg.PROCEDURES_DEFNORETURN_COMMENT,T.Msg.PROCEDURES_DEFRETURN_DO=T.Msg.PROCEDURES_DEFNORETURN_DO,T.Msg.PROCEDURES_DEFRETURN_PROCEDURE=T.Msg.PROCEDURES_DEFNORETURN_PROCEDURE,T.Msg.PROCEDURES_DEFRETURN_TITLE=T.Msg.PROCEDURES_DEFNORETURN_TITLE,T.Msg.TEXT_APPEND_VARIABLE=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.LOGIC_HUE="210",T.Msg.LOOPS_HUE="120",T.Msg.MATH_HUE="230",T.Msg.TEXTS_HUE="160",T.Msg.LISTS_HUE="260",T.Msg.COLOUR_HUE="20",T.Msg.VARIABLES_HUE="330",T.Msg.VARIABLES_DYNAMIC_HUE="310",T.Msg.PROCEDURES_HUE="290",T.Msg})?E.apply(_,O):E)||(T.exports=L)}}]);