(self.webpackChunkcoding_with_chrome=self.webpackChunkcoding_with_chrome||[]).push([[7532],{72049:function(T,e){var _,t,s;t=[],void 0===(s="function"==typeof(_=function(){"use strict";var T=T||{Msg:Object.create(null)};return T.Msg.ADD_COMMENT="Engadir un comentario",T.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE="Can't delete the variable '%1' because it's part of the definition of the function '%2'",T.Msg.CHANGE_VALUE_TITLE="Cambiar o valor:",T.Msg.CLEAN_UP="Limpar os bloques",T.Msg.COLLAPSED_WARNINGS_WARNING="Collapsed blocks contain warnings.",T.Msg.COLLAPSE_ALL="Contraer os bloques",T.Msg.COLLAPSE_BLOCK="Contraer o bloque",T.Msg.COLOUR_BLEND_COLOUR1="cor 1",T.Msg.COLOUR_BLEND_COLOUR2="cor 2",T.Msg.COLOUR_BLEND_HELPURL="https://meyerweb.com/eric/tools/color-blend/#:::rgbp",T.Msg.COLOUR_BLEND_RATIO="proporción",T.Msg.COLOUR_BLEND_TITLE="mesturar",T.Msg.COLOUR_BLEND_TOOLTIP="Mestura dúas cores ca proporción indicada (0.0 - 1.0).",T.Msg.COLOUR_PICKER_HELPURL="https://gl.wikipedia.org/wiki/Cor",T.Msg.COLOUR_PICKER_TOOLTIP="Escolle unha cor da paleta.",T.Msg.COLOUR_RANDOM_HELPURL="http://randomcolour.com",T.Msg.COLOUR_RANDOM_TITLE="cor ó chou",T.Msg.COLOUR_RANDOM_TOOLTIP="Escolle unha cor ao chou.",T.Msg.COLOUR_RGB_BLUE="azul",T.Msg.COLOUR_RGB_GREEN="verde",T.Msg.COLOUR_RGB_HELPURL="https://www.december.com/html/spec/colorpercompact.html",T.Msg.COLOUR_RGB_RED="vermello",T.Msg.COLOUR_RGB_TITLE="colorar con",T.Msg.COLOUR_RGB_TOOLTIP="Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.",T.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL="https://github.com/google/blockly/wiki/Loops#loop-termination-blocks",T.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK="break out of loop",T.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE="continue with next iteration of loop",T.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK="Break out of the containing loop.",T.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE="Skip the rest of this loop, and continue with the next iteration.",T.Msg.CONTROLS_FLOW_STATEMENTS_WARNING="Warning: This block may only be used within a loop.",T.Msg.CONTROLS_FOREACH_HELPURL="https://github.com/google/blockly/wiki/Loops#for-each",T.Msg.CONTROLS_FOREACH_TITLE="for each item %1 in list %2",T.Msg.CONTROLS_FOREACH_TOOLTIP="For each item in a list, set the variable '%1' to the item, and then do some statements.",T.Msg.CONTROLS_FOR_HELPURL="https://github.com/google/blockly/wiki/Loops#count-with",T.Msg.CONTROLS_FOR_TITLE="count with %1 from %2 to %3 by %4",T.Msg.CONTROLS_FOR_TOOLTIP="Have the variable '%1' take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.",T.Msg.CONTROLS_IF_ELSEIF_TOOLTIP="Add a condition to the if block.",T.Msg.CONTROLS_IF_ELSE_TOOLTIP="Add a final, catch-all condition to the if block.",T.Msg.CONTROLS_IF_HELPURL="https://github.com/google/blockly/wiki/IfElse",T.Msg.CONTROLS_IF_IF_TOOLTIP="Add, remove, or reorder sections to reconfigure this if block.",T.Msg.CONTROLS_IF_MSG_ELSE="senón",T.Msg.CONTROLS_IF_MSG_ELSEIF="mais se",T.Msg.CONTROLS_IF_MSG_IF="se",T.Msg.CONTROLS_IF_TOOLTIP_1="If a value is true, then do some statements.",T.Msg.CONTROLS_IF_TOOLTIP_2="If a value is true, then do the first block of statements. Otherwise, do the second block of statements.",T.Msg.CONTROLS_IF_TOOLTIP_3="If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.",T.Msg.CONTROLS_IF_TOOLTIP_4="If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.",T.Msg.CONTROLS_REPEAT_HELPURL="https://en.wikipedia.org/wiki/For_loop",T.Msg.CONTROLS_REPEAT_INPUT_DO="facer",T.Msg.CONTROLS_REPEAT_TITLE="repeat %1 times",T.Msg.CONTROLS_REPEAT_TOOLTIP="Faga algunhas instrucións varias veces.",T.Msg.CONTROLS_WHILEUNTIL_HELPURL="https://github.com/google/blockly/wiki/Loops#repeat",T.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL="repetir ata",T.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE="repetir mentres",T.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL="While a value is false, then do some statements.",T.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE="While a value is true, then do some statements.",T.Msg.DELETE_ALL_BLOCKS="Queres eliminar os %1 bloques?",T.Msg.DELETE_BLOCK="Borrar o bloque",T.Msg.DELETE_VARIABLE="Delete the '%1' variable",T.Msg.DELETE_VARIABLE_CONFIRMATION="Delete %1 uses of the '%2' variable?",T.Msg.DELETE_X_BLOCKS="Borrar %1 bloques",T.Msg.DIALOG_CANCEL="Cancelar",T.Msg.DIALOG_OK="Aceptar",T.Msg.DISABLE_BLOCK="Desactivar o bloque",T.Msg.DUPLICATE_BLOCK="Duplicar",T.Msg.DUPLICATE_COMMENT="Duplicar o comentario",T.Msg.ENABLE_BLOCK="Activar o bloque",T.Msg.EXPAND_ALL="Expandir os bloques",T.Msg.EXPAND_BLOCK="Expandir o bloque",T.Msg.EXTERNAL_INPUTS="Entradas externas",T.Msg.HELP="Axuda",T.Msg.INLINE_INPUTS="Entradas en liña",T.Msg.LISTS_CREATE_EMPTY_HELPURL="https://github.com/google/blockly/wiki/Lists#create-empty-list",T.Msg.LISTS_CREATE_EMPTY_TITLE="create empty list",T.Msg.LISTS_CREATE_EMPTY_TOOLTIP="Returns a list, of length 0, containing no data records",T.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD="listaxe",T.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP="Add, remove, or reorder sections to reconfigure this list block.",T.Msg.LISTS_CREATE_WITH_HELPURL="https://github.com/google/blockly/wiki/Lists#create-list-with",T.Msg.LISTS_CREATE_WITH_INPUT_WITH="create list with",T.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP="Add an item to the list.",T.Msg.LISTS_CREATE_WITH_TOOLTIP="Create a list with any number of items.",T.Msg.LISTS_GET_INDEX_FIRST="primeiro",T.Msg.LISTS_GET_INDEX_FROM_END="# from end",T.Msg.LISTS_GET_INDEX_FROM_START="#",T.Msg.LISTS_GET_INDEX_GET="get",T.Msg.LISTS_GET_INDEX_GET_REMOVE="get and remove",T.Msg.LISTS_GET_INDEX_LAST="derradeiro",T.Msg.LISTS_GET_INDEX_RANDOM="ó chou",T.Msg.LISTS_GET_INDEX_REMOVE="remove",T.Msg.LISTS_GET_INDEX_TAIL="",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST="Returns the first item in a list.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM="Returns the item at the specified position in a list.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST="Returns the last item in a list.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM="Returns a random item in a list.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST="Removes and returns the first item in a list.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM="Removes and returns the item at the specified position in a list.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST="Removes and returns the last item in a list.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM="Removes and returns a random item in a list.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST="Removes the first item in a list.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM="Removes the item at the specified position in a list.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST="Removes the last item in a list.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM="Removes a random item in a list.",T.Msg.LISTS_GET_SUBLIST_END_FROM_END="to # from end",T.Msg.LISTS_GET_SUBLIST_END_FROM_START="to #",T.Msg.LISTS_GET_SUBLIST_END_LAST="to last",T.Msg.LISTS_GET_SUBLIST_HELPURL="https://github.com/google/blockly/wiki/Lists#getting-a-sublist",T.Msg.LISTS_GET_SUBLIST_START_FIRST="get sub-list from first",T.Msg.LISTS_GET_SUBLIST_START_FROM_END="get sub-list from # from end",T.Msg.LISTS_GET_SUBLIST_START_FROM_START="get sub-list from #",T.Msg.LISTS_GET_SUBLIST_TAIL="",T.Msg.LISTS_GET_SUBLIST_TOOLTIP="Creates a copy of the specified portion of a list.",T.Msg.LISTS_INDEX_FROM_END_TOOLTIP="%1 é o derradeiro elemento.",T.Msg.LISTS_INDEX_FROM_START_TOOLTIP="%1 é o primeiro elemento.",T.Msg.LISTS_INDEX_OF_FIRST="find first occurrence of item",T.Msg.LISTS_INDEX_OF_HELPURL="https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list",T.Msg.LISTS_INDEX_OF_LAST="find last occurrence of item",T.Msg.LISTS_INDEX_OF_TOOLTIP="Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.",T.Msg.LISTS_INLIST="na listaxe",T.Msg.LISTS_ISEMPTY_HELPURL="https://github.com/google/blockly/wiki/Lists#is-empty",T.Msg.LISTS_ISEMPTY_TITLE="%1 atópase baleira",T.Msg.LISTS_ISEMPTY_TOOLTIP="Retona verdadeiro se a listaxe atópase baleira.",T.Msg.LISTS_LENGTH_HELPURL="https://github.com/google/blockly/wiki/Lists#length-of",T.Msg.LISTS_LENGTH_TITLE="length of %1",T.Msg.LISTS_LENGTH_TOOLTIP="Returns the length of a list.",T.Msg.LISTS_REPEAT_HELPURL="https://github.com/google/blockly/wiki/Lists#create-list-with",T.Msg.LISTS_REPEAT_TITLE="create list with item %1 repeated %2 times",T.Msg.LISTS_REPEAT_TOOLTIP="Creates a list consisting of the given value repeated the specified number of times.",T.Msg.LISTS_REVERSE_HELPURL="https://github.com/google/blockly/wiki/Lists#reversing-a-list",T.Msg.LISTS_REVERSE_MESSAGE0="reverse %1",T.Msg.LISTS_REVERSE_TOOLTIP="Reverse a copy of a list.",T.Msg.LISTS_SET_INDEX_HELPURL="https://github.com/google/blockly/wiki/Lists#in-list--set",T.Msg.LISTS_SET_INDEX_INPUT_TO="como",T.Msg.LISTS_SET_INDEX_INSERT="inserir en",T.Msg.LISTS_SET_INDEX_SET="definir",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST="Inserts the item at the start of a list.",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM="Inserts the item at the specified position in a list.",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST="Append the item to the end of a list.",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM="Inserts the item randomly in a list.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST="Sets the first item in a list.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM="Sets the item at the specified position in a list.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST="Sets the last item in a list.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM="Sets a random item in a list.",T.Msg.LISTS_SORT_HELPURL="https://github.com/google/blockly/wiki/Lists#sorting-a-list",T.Msg.LISTS_SORT_ORDER_ASCENDING="ascendente",T.Msg.LISTS_SORT_ORDER_DESCENDING="descendente",T.Msg.LISTS_SORT_TITLE="sort %1 %2 %3",T.Msg.LISTS_SORT_TOOLTIP="Ordear unha copia dunha listaxe.",T.Msg.LISTS_SORT_TYPE_IGNORECASE="alfabética, iñorar maiúsculas/minúsculas",T.Msg.LISTS_SORT_TYPE_NUMERIC="numérica",T.Msg.LISTS_SORT_TYPE_TEXT="alfabética",T.Msg.LISTS_SPLIT_HELPURL="https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists",T.Msg.LISTS_SPLIT_LIST_FROM_TEXT="make list from text",T.Msg.LISTS_SPLIT_TEXT_FROM_LIST="make text from list",T.Msg.LISTS_SPLIT_TOOLTIP_JOIN="Join a list of texts into one text, separated by a delimiter.",T.Msg.LISTS_SPLIT_TOOLTIP_SPLIT="Split text into a list of texts, breaking at each delimiter.",T.Msg.LISTS_SPLIT_WITH_DELIMITER="with delimiter",T.Msg.LOGIC_BOOLEAN_FALSE="falso",T.Msg.LOGIC_BOOLEAN_HELPURL="https://github.com/google/blockly/wiki/Logic#values",T.Msg.LOGIC_BOOLEAN_TOOLTIP="Returns either true or false.",T.Msg.LOGIC_BOOLEAN_TRUE="verdadeiro",T.Msg.LOGIC_COMPARE_HELPURL="https://en.wikipedia.org/wiki/Inequality_(mathematics)",T.Msg.LOGIC_COMPARE_TOOLTIP_EQ="Return true if both inputs equal each other.",T.Msg.LOGIC_COMPARE_TOOLTIP_GT="Return true if the first input is greater than the second input.",T.Msg.LOGIC_COMPARE_TOOLTIP_GTE="Return true if the first input is greater than or equal to the second input.",T.Msg.LOGIC_COMPARE_TOOLTIP_LT="Return true if the first input is smaller than the second input.",T.Msg.LOGIC_COMPARE_TOOLTIP_LTE="Return true if the first input is smaller than or equal to the second input.",T.Msg.LOGIC_COMPARE_TOOLTIP_NEQ="Return true if both inputs are not equal to each other.",T.Msg.LOGIC_NEGATE_HELPURL="https://github.com/google/blockly/wiki/Logic#not",T.Msg.LOGIC_NEGATE_TITLE="non %1",T.Msg.LOGIC_NEGATE_TOOLTIP="Returns true if the input is false. Returns false if the input is true.",T.Msg.LOGIC_NULL="nulo",T.Msg.LOGIC_NULL_HELPURL="https://en.wikipedia.org/wiki/Nullable_type",T.Msg.LOGIC_NULL_TOOLTIP="Retornar nulo.",T.Msg.LOGIC_OPERATION_AND="e",T.Msg.LOGIC_OPERATION_HELPURL="https://github.com/google/blockly/wiki/Logic#logical-operations",T.Msg.LOGIC_OPERATION_OR="ou",T.Msg.LOGIC_OPERATION_TOOLTIP_AND="Return true if both inputs are true.",T.Msg.LOGIC_OPERATION_TOOLTIP_OR="Return true if at least one of the inputs is true.",T.Msg.LOGIC_TERNARY_CONDITION="proba",T.Msg.LOGIC_TERNARY_HELPURL="https://en.wikipedia.org/wiki/%3F:",T.Msg.LOGIC_TERNARY_IF_FALSE="se falso",T.Msg.LOGIC_TERNARY_IF_TRUE="se verdadeiro",T.Msg.LOGIC_TERNARY_TOOLTIP="Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.",T.Msg.MATH_ADDITION_SYMBOL="+",T.Msg.MATH_ARITHMETIC_HELPURL="https://gl.wikipedia.org/wiki/Aritmética",T.Msg.MATH_ARITHMETIC_TOOLTIP_ADD="Retorna a suma de dous números.",T.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE="Retorna o cociente da división de dous números.",T.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS="Retorna a diferenza de dous números.",T.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY="Retorna o produto de dous números.",T.Msg.MATH_ARITHMETIC_TOOLTIP_POWER="Retorna o primeiro número elevado á potencia do segundo número.",T.Msg.MATH_ATAN2_HELPURL="https://en.wikipedia.org/wiki/Atan2",T.Msg.MATH_ATAN2_TITLE="atan2 of X:%1 Y:%2",T.Msg.MATH_ATAN2_TOOLTIP="Return the arctangent of point (X, Y) in degrees from -180 to 180.",T.Msg.MATH_CHANGE_HELPURL="https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter",T.Msg.MATH_CHANGE_TITLE="mudar %1 por %2",T.Msg.MATH_CHANGE_TOOLTIP="Suma un número á variábel '%1'.",T.Msg.MATH_CONSTANT_HELPURL="https://gl.wikipedia.org/wiki/Constante_matemática",T.Msg.MATH_CONSTANT_TOOLTIP="Retorna unha das constantes comúns: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), ou ∞ (infinito).",T.Msg.MATH_CONSTRAIN_HELPURL="https://en.wikipedia.org/wiki/Clamping_(graphics)",T.Msg.MATH_CONSTRAIN_TITLE="constrain %1 low %2 high %3",T.Msg.MATH_CONSTRAIN_TOOLTIP="Constrain a number to be between the specified limits (inclusive).",T.Msg.MATH_DIVISION_SYMBOL="÷",T.Msg.MATH_IS_DIVISIBLE_BY="é divisíbel por",T.Msg.MATH_IS_EVEN="é par",T.Msg.MATH_IS_NEGATIVE="é negativo",T.Msg.MATH_IS_ODD="é impar",T.Msg.MATH_IS_POSITIVE="é positivo",T.Msg.MATH_IS_PRIME="é primo",T.Msg.MATH_IS_TOOLTIP="Verifica se un número é par, impar, primo, enteiro, positivo, negativo, ou se é divisíbel por outro número.  Retorna verdadeiro ou falso.",T.Msg.MATH_IS_WHOLE="é enteiro",T.Msg.MATH_MODULO_HELPURL="https://en.wikipedia.org/wiki/Modulo_operation",T.Msg.MATH_MODULO_TITLE="remainder of %1 ÷ %2",T.Msg.MATH_MODULO_TOOLTIP="Return the remainder from dividing the two numbers.",T.Msg.MATH_MULTIPLICATION_SYMBOL="×",T.Msg.MATH_NUMBER_HELPURL="https://en.wikipedia.org/wiki/Number",T.Msg.MATH_NUMBER_TOOLTIP="Un número.",T.Msg.MATH_ONLIST_HELPURL="",T.Msg.MATH_ONLIST_OPERATOR_AVERAGE="media dunha listaxe",T.Msg.MATH_ONLIST_OPERATOR_MAX="maior dunha listaxe",T.Msg.MATH_ONLIST_OPERATOR_MEDIAN="median of list",T.Msg.MATH_ONLIST_OPERATOR_MIN="menor dunha listaxe",T.Msg.MATH_ONLIST_OPERATOR_MODE="modes of list",T.Msg.MATH_ONLIST_OPERATOR_RANDOM="random item of list",T.Msg.MATH_ONLIST_OPERATOR_STD_DEV="standard deviation of list",T.Msg.MATH_ONLIST_OPERATOR_SUM="suma da listaxe",T.Msg.MATH_ONLIST_TOOLTIP_AVERAGE="Return the average (arithmetic mean) of the numeric values in the list.",T.Msg.MATH_ONLIST_TOOLTIP_MAX="Retorna o maior número da listaxe",T.Msg.MATH_ONLIST_TOOLTIP_MEDIAN="Return the median number in the list.",T.Msg.MATH_ONLIST_TOOLTIP_MIN="Retorna o menor número da listaxe.",T.Msg.MATH_ONLIST_TOOLTIP_MODE="Return a list of the most common item(s) in the list.",T.Msg.MATH_ONLIST_TOOLTIP_RANDOM="Return a random element from the list.",T.Msg.MATH_ONLIST_TOOLTIP_STD_DEV="Return the standard deviation of the list.",T.Msg.MATH_ONLIST_TOOLTIP_SUM="Retorna a suma de tódolos números da listaxe.",T.Msg.MATH_POWER_SYMBOL="^",T.Msg.MATH_RANDOM_FLOAT_HELPURL="https://en.wikipedia.org/wiki/Random_number_generation",T.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM="random fraction",T.Msg.MATH_RANDOM_FLOAT_TOOLTIP="Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).",T.Msg.MATH_RANDOM_INT_HELPURL="https://en.wikipedia.org/wiki/Random_number_generation",T.Msg.MATH_RANDOM_INT_TITLE="random integer from %1 to %2",T.Msg.MATH_RANDOM_INT_TOOLTIP="Return a random integer between the two specified limits, inclusive.",T.Msg.MATH_ROUND_HELPURL="https://gl.wikipedia.org/wiki/Arredondamento",T.Msg.MATH_ROUND_OPERATOR_ROUND="arredonda",T.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN="arredonda cara abaixo",T.Msg.MATH_ROUND_OPERATOR_ROUNDUP="arredonda cara arriba",T.Msg.MATH_ROUND_TOOLTIP="Arredonda un número cara enriba ou cara abaixo.",T.Msg.MATH_SINGLE_HELPURL="https://gl.wikipedia.org/wiki/Raíz_cadrada",T.Msg.MATH_SINGLE_OP_ABSOLUTE="absoluto",T.Msg.MATH_SINGLE_OP_ROOT="raíz cadrada",T.Msg.MATH_SINGLE_TOOLTIP_ABS="Retorna o valor absoluto dun número.",T.Msg.MATH_SINGLE_TOOLTIP_EXP="Retorna o número e elevado á potencia dun número.",T.Msg.MATH_SINGLE_TOOLTIP_LN="Retorna o logarítmo natural dun número.",T.Msg.MATH_SINGLE_TOOLTIP_LOG10="Retorna o logarítmo en base 10 dun número.",T.Msg.MATH_SINGLE_TOOLTIP_NEG="Retorna o oposto dun número.",T.Msg.MATH_SINGLE_TOOLTIP_POW10="Retorna 10 elevado á potencia dun número.",T.Msg.MATH_SINGLE_TOOLTIP_ROOT="Retorna a raíz cadrada dun número.",T.Msg.MATH_SUBTRACTION_SYMBOL="-",T.Msg.MATH_TRIG_ACOS="acos",T.Msg.MATH_TRIG_ASIN="asin",T.Msg.MATH_TRIG_ATAN="atan",T.Msg.MATH_TRIG_COS="cos",T.Msg.MATH_TRIG_HELPURL="https://gl.m.wikipedia.org/wiki/Función_trigonométrica",T.Msg.MATH_TRIG_SIN="sin",T.Msg.MATH_TRIG_TAN="tan",T.Msg.MATH_TRIG_TOOLTIP_ACOS="Retorna o arco coseno dun número.",T.Msg.MATH_TRIG_TOOLTIP_ASIN="Retorna o arco seno dum número.",T.Msg.MATH_TRIG_TOOLTIP_ATAN="Retorna o arco tanxente dun número.",T.Msg.MATH_TRIG_TOOLTIP_COS="Retorna o coseno dun grao (non radiano).",T.Msg.MATH_TRIG_TOOLTIP_SIN="Retorna o seno dun grao (non radiano).",T.Msg.MATH_TRIG_TOOLTIP_TAN="Retorna a tanxente dun grao (non radiano).",T.Msg.NEW_COLOUR_VARIABLE="Create colour variable...",T.Msg.NEW_NUMBER_VARIABLE="Create number variable...",T.Msg.NEW_STRING_VARIABLE="Crar unha variábel de cadea...",T.Msg.NEW_VARIABLE="Crear a variable...",T.Msg.NEW_VARIABLE_TITLE="Nome da nova variable:",T.Msg.NEW_VARIABLE_TYPE_TITLE="New variable type:",T.Msg.ORDINAL_NUMBER_SUFFIX="",T.Msg.PROCEDURES_ALLOW_STATEMENTS="allow statements",T.Msg.PROCEDURES_BEFORE_PARAMS="con:",T.Msg.PROCEDURES_CALLNORETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",T.Msg.PROCEDURES_CALLNORETURN_TOOLTIP="Run the user-defined function '%1'.",T.Msg.PROCEDURES_CALLRETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",T.Msg.PROCEDURES_CALLRETURN_TOOLTIP="Run the user-defined function '%1' and use its output.",T.Msg.PROCEDURES_CALL_BEFORE_PARAMS="con:",T.Msg.PROCEDURES_CREATE_DO="Create '%1'",T.Msg.PROCEDURES_DEFNORETURN_COMMENT="Describe this function...",T.Msg.PROCEDURES_DEFNORETURN_DO="",T.Msg.PROCEDURES_DEFNORETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",T.Msg.PROCEDURES_DEFNORETURN_PROCEDURE="facer algo",T.Msg.PROCEDURES_DEFNORETURN_TITLE="cara",T.Msg.PROCEDURES_DEFNORETURN_TOOLTIP="Creates a function with no output.",T.Msg.PROCEDURES_DEFRETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",T.Msg.PROCEDURES_DEFRETURN_RETURN="retornar",T.Msg.PROCEDURES_DEFRETURN_TOOLTIP="Creates a function with an output.",T.Msg.PROCEDURES_DEF_DUPLICATE_WARNING="Warning: This function has duplicate parameters.",T.Msg.PROCEDURES_HIGHLIGHT_DEF="Highlight function definition",T.Msg.PROCEDURES_IFRETURN_HELPURL="http://c2.com/cgi/wiki?GuardClause",T.Msg.PROCEDURES_IFRETURN_TOOLTIP="If a value is true, then return a second value.",T.Msg.PROCEDURES_IFRETURN_WARNING="Warning: This block may be used only within a function definition.",T.Msg.PROCEDURES_MUTATORARG_TITLE="input name:",T.Msg.PROCEDURES_MUTATORARG_TOOLTIP="Add an input to the function.",T.Msg.PROCEDURES_MUTATORCONTAINER_TITLE="entradas",T.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP="Add, remove, or reorder inputs to this function.",T.Msg.REDO="Refacer",T.Msg.REMOVE_COMMENT="Eliminar o comentario",T.Msg.RENAME_VARIABLE="Renomear a variable...",T.Msg.RENAME_VARIABLE_TITLE='Renomear todas as variables "%1" a:',T.Msg.TEXT_APPEND_HELPURL="https://github.com/google/blockly/wiki/Text#text-modification",T.Msg.TEXT_APPEND_TITLE="to %1 append text %2",T.Msg.TEXT_APPEND_TOOLTIP="Append some text to variable '%1'.",T.Msg.TEXT_CHANGECASE_HELPURL="https://github.com/google/blockly/wiki/Text#adjusting-text-case",T.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE="to lower case",T.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE="to Title Case",T.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE="to UPPER CASE",T.Msg.TEXT_CHANGECASE_TOOLTIP="Return a copy of the text in a different case.",T.Msg.TEXT_CHARAT_FIRST="get first letter",T.Msg.TEXT_CHARAT_FROM_END="get letter # from end",T.Msg.TEXT_CHARAT_FROM_START="get letter #",T.Msg.TEXT_CHARAT_HELPURL="https://github.com/google/blockly/wiki/Text#extracting-text",T.Msg.TEXT_CHARAT_LAST="get last letter",T.Msg.TEXT_CHARAT_RANDOM="get random letter",T.Msg.TEXT_CHARAT_TAIL="",T.Msg.TEXT_CHARAT_TITLE="in text %1 %2",T.Msg.TEXT_CHARAT_TOOLTIP="Returns the letter at the specified position.",T.Msg.TEXT_COUNT_HELPURL="https://github.com/google/blockly/wiki/Text#counting-substrings",T.Msg.TEXT_COUNT_MESSAGE0="count %1 in %2",T.Msg.TEXT_COUNT_TOOLTIP="Count how many times some text occurs within some other text.",T.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP="Add an item to the text.",T.Msg.TEXT_CREATE_JOIN_TITLE_JOIN="unir",T.Msg.TEXT_CREATE_JOIN_TOOLTIP="Add, remove, or reorder sections to reconfigure this text block.",T.Msg.TEXT_GET_SUBSTRING_END_FROM_END="to letter # from end",T.Msg.TEXT_GET_SUBSTRING_END_FROM_START="to letter #",T.Msg.TEXT_GET_SUBSTRING_END_LAST="to last letter",T.Msg.TEXT_GET_SUBSTRING_HELPURL="https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text",T.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT="no texto",T.Msg.TEXT_GET_SUBSTRING_START_FIRST="get substring from first letter",T.Msg.TEXT_GET_SUBSTRING_START_FROM_END="get substring from letter # from end",T.Msg.TEXT_GET_SUBSTRING_START_FROM_START="get substring from letter #",T.Msg.TEXT_GET_SUBSTRING_TAIL="",T.Msg.TEXT_GET_SUBSTRING_TOOLTIP="Returns a specified portion of the text.",T.Msg.TEXT_INDEXOF_HELPURL="https://github.com/google/blockly/wiki/Text#finding-text",T.Msg.TEXT_INDEXOF_OPERATOR_FIRST="find first occurrence of text",T.Msg.TEXT_INDEXOF_OPERATOR_LAST="find last occurrence of text",T.Msg.TEXT_INDEXOF_TITLE="in text %1 %2 %3",T.Msg.TEXT_INDEXOF_TOOLTIP="Returns the index of the first/last occurrence of the first text in the second text. Returns %1 if text is not found.",T.Msg.TEXT_ISEMPTY_HELPURL="https://github.com/google/blockly/wiki/Text#checking-for-empty-text",T.Msg.TEXT_ISEMPTY_TITLE="%1 is empty",T.Msg.TEXT_ISEMPTY_TOOLTIP="Returns true if the provided text is empty.",T.Msg.TEXT_JOIN_HELPURL="https://github.com/google/blockly/wiki/Text#text-creation",T.Msg.TEXT_JOIN_TITLE_CREATEWITH="create text with",T.Msg.TEXT_JOIN_TOOLTIP="Create a piece of text by joining together any number of items.",T.Msg.TEXT_LENGTH_HELPURL="https://github.com/google/blockly/wiki/Text#text-modification",T.Msg.TEXT_LENGTH_TITLE="length of %1",T.Msg.TEXT_LENGTH_TOOLTIP="Returns the number of letters (including spaces) in the provided text.",T.Msg.TEXT_PRINT_HELPURL="https://github.com/google/blockly/wiki/Text#printing-text",T.Msg.TEXT_PRINT_TITLE="imprime %1",T.Msg.TEXT_PRINT_TOOLTIP="Print the specified text, number or other value.",T.Msg.TEXT_PROMPT_HELPURL="https://github.com/google/blockly/wiki/Text#getting-input-from-the-user",T.Msg.TEXT_PROMPT_TOOLTIP_NUMBER="Prompt for user for a number.",T.Msg.TEXT_PROMPT_TOOLTIP_TEXT="Prompt for user for some text.",T.Msg.TEXT_PROMPT_TYPE_NUMBER="prompt for number with message",T.Msg.TEXT_PROMPT_TYPE_TEXT="prompt for text with message",T.Msg.TEXT_REPLACE_HELPURL="https://github.com/google/blockly/wiki/Text#replacing-substrings",T.Msg.TEXT_REPLACE_MESSAGE0="replace %1 with %2 in %3",T.Msg.TEXT_REPLACE_TOOLTIP="Replace all occurances of some text within some other text.",T.Msg.TEXT_REVERSE_HELPURL="https://github.com/google/blockly/wiki/Text#reversing-text",T.Msg.TEXT_REVERSE_MESSAGE0="reverse %1",T.Msg.TEXT_REVERSE_TOOLTIP="Reverses the order of the characters in the text.",T.Msg.TEXT_TEXT_HELPURL="https://en.wikipedia.org/wiki/String_(computer_science)",T.Msg.TEXT_TEXT_TOOLTIP="A letter, word, or line of text.",T.Msg.TEXT_TRIM_HELPURL="https://github.com/google/blockly/wiki/Text#trimming-removing-spaces",T.Msg.TEXT_TRIM_OPERATOR_BOTH="trim spaces from both sides of",T.Msg.TEXT_TRIM_OPERATOR_LEFT="trim spaces from left side of",T.Msg.TEXT_TRIM_OPERATOR_RIGHT="trim spaces from right side of",T.Msg.TEXT_TRIM_TOOLTIP="Return a copy of the text with spaces removed from one or both ends.",T.Msg.TODAY="Hoxe",T.Msg.UNDO="Desfacer",T.Msg.UNNAMED_KEY="innominada",T.Msg.VARIABLES_DEFAULT_NAME="elemento",T.Msg.VARIABLES_GET_CREATE_SET="Create 'set %1'",T.Msg.VARIABLES_GET_HELPURL="https://github.com/google/blockly/wiki/Variables#get",T.Msg.VARIABLES_GET_TOOLTIP="Returns the value of this variable.",T.Msg.VARIABLES_SET="set %1 to %2",T.Msg.VARIABLES_SET_CREATE_GET="Create 'get %1'",T.Msg.VARIABLES_SET_HELPURL="https://github.com/google/blockly/wiki/Variables#set",T.Msg.VARIABLES_SET_TOOLTIP="Sets this variable to be equal to the input.",T.Msg.VARIABLE_ALREADY_EXISTS="A variable named '%1' already exists.",T.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE="A variable named '%1' already exists for another type: '%2'.",T.Msg.WORKSPACE_ARIA_LABEL="Blockly Workspace",T.Msg.WORKSPACE_COMMENT_DEFAULT_TEXT="Say something...",T.Msg.CONTROLS_FOREACH_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_FOR_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF=T.Msg.CONTROLS_IF_MSG_ELSEIF,T.Msg.CONTROLS_IF_ELSE_TITLE_ELSE=T.Msg.CONTROLS_IF_MSG_ELSE,T.Msg.CONTROLS_IF_IF_TITLE_IF=T.Msg.CONTROLS_IF_MSG_IF,T.Msg.CONTROLS_IF_MSG_THEN=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_WHILEUNTIL_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.LISTS_CREATE_WITH_ITEM_TITLE=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.LISTS_GET_INDEX_HELPURL=T.Msg.LISTS_INDEX_OF_HELPURL,T.Msg.LISTS_GET_INDEX_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_INDEX_OF_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_SET_INDEX_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.MATH_CHANGE_TITLE_ITEM=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.PROCEDURES_DEFRETURN_COMMENT=T.Msg.PROCEDURES_DEFNORETURN_COMMENT,T.Msg.PROCEDURES_DEFRETURN_DO=T.Msg.PROCEDURES_DEFNORETURN_DO,T.Msg.PROCEDURES_DEFRETURN_PROCEDURE=T.Msg.PROCEDURES_DEFNORETURN_PROCEDURE,T.Msg.PROCEDURES_DEFRETURN_TITLE=T.Msg.PROCEDURES_DEFNORETURN_TITLE,T.Msg.TEXT_APPEND_VARIABLE=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.MATH_HUE="230",T.Msg.LOOPS_HUE="120",T.Msg.LISTS_HUE="260",T.Msg.LOGIC_HUE="210",T.Msg.VARIABLES_HUE="330",T.Msg.TEXTS_HUE="160",T.Msg.PROCEDURES_HUE="290",T.Msg.COLOUR_HUE="20",T.Msg.VARIABLES_DYNAMIC_HUE="310",T.Msg})?_.apply(e,t):_)||(T.exports=s)}}]);