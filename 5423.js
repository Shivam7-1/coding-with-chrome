(self.webpackChunkcoding_with_chrome=self.webpackChunkcoding_with_chrome||[]).push([[5423],{5423:function(T,_){var i,s,E;s=[],void 0===(E="function"==typeof(i=function(){"use strict";var T=T||{Msg:Object.create(null)};return T.Msg.ADD_COMMENT="Dodaj Komentarz",T.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE="Nie można usunąć zmiennej '%1', ponieważ jest częścią definicji funkcji '%2'",T.Msg.CHANGE_VALUE_TITLE="Zmień wartość:",T.Msg.CLEAN_UP="Uporządkuj Bloki",T.Msg.COLLAPSED_WARNINGS_WARNING="Zwinięte bloki zawierają ostrzeżenia.",T.Msg.COLLAPSE_ALL="Zwiń Bloki",T.Msg.COLLAPSE_BLOCK="Zwiń Klocek",T.Msg.COLOUR_BLEND_COLOUR1="kolor 1",T.Msg.COLOUR_BLEND_COLOUR2="kolor 2",T.Msg.COLOUR_BLEND_HELPURL="https://meyerweb.com/eric/tools/color-blend/#:::rgbp",T.Msg.COLOUR_BLEND_RATIO="proporcja",T.Msg.COLOUR_BLEND_TITLE="wymieszaj",T.Msg.COLOUR_BLEND_TOOLTIP="Miesza dwa kolory w danej proporcji (0.0 - 1.0).",T.Msg.COLOUR_PICKER_HELPURL="https://en.wikipedia.org/wiki/Color",T.Msg.COLOUR_PICKER_TOOLTIP="Wybierz kolor z palety.",T.Msg.COLOUR_RANDOM_HELPURL="http://randomcolour.com",T.Msg.COLOUR_RANDOM_TITLE="losowy kolor",T.Msg.COLOUR_RANDOM_TOOLTIP="Wybierz kolor w sposób losowy.",T.Msg.COLOUR_RGB_BLUE="niebieski",T.Msg.COLOUR_RGB_GREEN="zielony",T.Msg.COLOUR_RGB_HELPURL="https://www.december.com/html/spec/colorpercompact.html",T.Msg.COLOUR_RGB_RED="czerwony",T.Msg.COLOUR_RGB_TITLE="kolor z",T.Msg.COLOUR_RGB_TOOLTIP="Utwórz kolor składający sie z podanej ilości czerwieni, zieleni i błękitu. Zakres wartości: 0 do 100.",T.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL="https://github.com/google/blockly/wiki/Loops#loop-termination-blocks",T.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK="przerwij pętlę",T.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE="przejdź do kolejnej iteracji pętli",T.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK="Przerwij działanie pętli.",T.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE="Pomiń resztę pętli i kontynuuj w kolejnej iteracji.",T.Msg.CONTROLS_FLOW_STATEMENTS_WARNING="Uwaga: Ten klocek może być użyty tylko wewnątrz pętli.",T.Msg.CONTROLS_FOREACH_HELPURL="https://github.com/google/blockly/wiki/Loops#for-each",T.Msg.CONTROLS_FOREACH_TITLE="dla każdego elementu %1 listy %2",T.Msg.CONTROLS_FOREACH_TOOLTIP="Przypisz zmiennej '%1' kolejno wartość każdego elementu listy, a następnie wykonaj kilka instrukcji.",T.Msg.CONTROLS_FOR_HELPURL="https://github.com/google/blockly/wiki/Loops#count-with",T.Msg.CONTROLS_FOR_TITLE="licz z %1 od %2 do %3 co %4 (wartość kroku)",T.Msg.CONTROLS_FOR_TOOLTIP="Zmiennej '%1' przypisuje wartości z podanego zakresu z podanym interwałem i wykonuje zadane bloki.",T.Msg.CONTROLS_IF_ELSEIF_TOOLTIP="Dodaj warunek do klocka „jeśli”.",T.Msg.CONTROLS_IF_ELSE_TOOLTIP="Dodaj ostatni zawsze prawdziwy warunek do klocka „jeśli”.",T.Msg.CONTROLS_IF_HELPURL="https://github.com/google/blockly/wiki/IfElse",T.Msg.CONTROLS_IF_IF_TOOLTIP="Dodaj, usuń lub zmień kolejność czynności, żeby zmodyfikować ten klocek „jeśli”.",T.Msg.CONTROLS_IF_MSG_ELSE="w przeciwnym razie",T.Msg.CONTROLS_IF_MSG_ELSEIF="w przeciwnym razie, jeśli",T.Msg.CONTROLS_IF_MSG_IF="jeśli",T.Msg.CONTROLS_IF_TOOLTIP_1="Jeśli warunek jest spełniony, wykonaj zadane czynności.",T.Msg.CONTROLS_IF_TOOLTIP_2="Jeśli warunek jest spełniony, wykonaj pierwszy blok instrukcji.  W przeciwnym razie, wykonaj drugi blok instrukcji.",T.Msg.CONTROLS_IF_TOOLTIP_3="Jeśli pierwszy warunek jest spełniony, wykonaj pierwszy blok instrukcji.  W przeciwnym razie, jeśli drugi warunek jest spełniony, wykonaj drugi blok instrukcji.",T.Msg.CONTROLS_IF_TOOLTIP_4="Jeśli pierwszy warunek jest spełniony, wykonaj pierwszy blok czynności.  W przeciwnym razie jeśli drugi warunek jest spełniony, wykonaj drugi blok czynności.  Jeżeli żaden z warunków nie zostanie spełniony, wykonaj ostatni blok czynności.",T.Msg.CONTROLS_REPEAT_HELPURL="https://en.wikipedia.org/wiki/For_loop",T.Msg.CONTROLS_REPEAT_INPUT_DO="wykonaj",T.Msg.CONTROLS_REPEAT_TITLE="powtórz %1 razy",T.Msg.CONTROLS_REPEAT_TOOLTIP="Wykonaj niektóre instrukcje kilka razy.",T.Msg.CONTROLS_WHILEUNTIL_HELPURL="https://github.com/google/blockly/wiki/Loops#repeat",T.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL="powtarzaj aż do",T.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE="powtarzaj dopóki",T.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL="Dopóki wyrażenie jest nieprawdziwe, wykonaj zadane czynności.",T.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE="Dopóki wyrażenie jest prawdziwe, wykonaj zadane czynności.",T.Msg.DELETE_ALL_BLOCKS="Usunąć wszystkie klocki z %1?",T.Msg.DELETE_BLOCK="Usuń Klocek",T.Msg.DELETE_VARIABLE="Usuń zmienną '%1'",T.Msg.DELETE_VARIABLE_CONFIRMATION="Usunąć %1 wystąpień zmiennej '%2'?",T.Msg.DELETE_X_BLOCKS="Usuń %1 Bloki(ów)",T.Msg.DIALOG_CANCEL="Anuluj",T.Msg.DIALOG_OK="OK",T.Msg.DISABLE_BLOCK="Wyłącz Klocek",T.Msg.DUPLICATE_BLOCK="Duplikat",T.Msg.DUPLICATE_COMMENT="Zduplikowany komentarz",T.Msg.ENABLE_BLOCK="Włącz Blok",T.Msg.EXPAND_ALL="Rozwiń Bloki",T.Msg.EXPAND_BLOCK="Rozwiń Klocek",T.Msg.EXTERNAL_INPUTS="Zewnętrzne Wejścia",T.Msg.HELP="Pomoc",T.Msg.INLINE_INPUTS="Wbudowane Wejścia",T.Msg.LISTS_CREATE_EMPTY_HELPURL="https://github.com/google/blockly/wiki/Lists#create-empty-list",T.Msg.LISTS_CREATE_EMPTY_TITLE="utwórz pustą listę",T.Msg.LISTS_CREATE_EMPTY_TOOLTIP="Zwraca listę o długości 0, nie zawierającą danych",T.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD="lista",T.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP="Dodaj, usuń lub zmień kolejność sekcji aby przekonfigurować blok tej listy.",T.Msg.LISTS_CREATE_WITH_HELPURL="https://github.com/google/blockly/wiki/Lists#create-list-with",T.Msg.LISTS_CREATE_WITH_INPUT_WITH="utwórz listę z",T.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP="Dodaj element do listy.",T.Msg.LISTS_CREATE_WITH_TOOLTIP="Utwórz listę z dowolną ilością elementów.",T.Msg.LISTS_GET_INDEX_FIRST="pierwszy",T.Msg.LISTS_GET_INDEX_FROM_END="# od końca",T.Msg.LISTS_GET_INDEX_FROM_START="#",T.Msg.LISTS_GET_INDEX_GET="pobierz",T.Msg.LISTS_GET_INDEX_GET_REMOVE="zabierz",T.Msg.LISTS_GET_INDEX_LAST="ostatni",T.Msg.LISTS_GET_INDEX_RANDOM="losowy",T.Msg.LISTS_GET_INDEX_REMOVE="usuń",T.Msg.LISTS_GET_INDEX_TAIL="",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST="Zwraca pierwszy element z listy.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM="Zwraca element z konkretnej pozycji na liście.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST="Zwraca ostatni element z listy.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM="Zwraca losowy element z listy.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST="Usuwa i zwraca pierwszy element z listy.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM="Usuwa i zwraca element z określonej pozycji na liście.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST="Usuwa i zwraca ostatni element z listy.",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM="Usuwa i zwraca losowy element z listy.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST="Usuwa pierwszy element z listy.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM="Usuwa element z określonej pozycji na liście.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST="Usuwa ostatni element z listy.",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM="Usuwa losowy element z listy.",T.Msg.LISTS_GET_SUBLIST_END_FROM_END="do # od końca",T.Msg.LISTS_GET_SUBLIST_END_FROM_START="do #",T.Msg.LISTS_GET_SUBLIST_END_LAST="do ostatniego",T.Msg.LISTS_GET_SUBLIST_HELPURL="https://github.com/google/blockly/wiki/Lists#getting-a-sublist",T.Msg.LISTS_GET_SUBLIST_START_FIRST="utwórz listę podrzędną od pierwszego",T.Msg.LISTS_GET_SUBLIST_START_FROM_END="utwórz listę podrzędną z # od końca",T.Msg.LISTS_GET_SUBLIST_START_FROM_START="utwórz listę podrzędną z #",T.Msg.LISTS_GET_SUBLIST_TAIL="",T.Msg.LISTS_GET_SUBLIST_TOOLTIP="Tworzy kopię żądanej części listy.",T.Msg.LISTS_INDEX_FROM_END_TOOLTIP="%1 to ostatni element.",T.Msg.LISTS_INDEX_FROM_START_TOOLTIP="%1 to pierwszy element.",T.Msg.LISTS_INDEX_OF_FIRST="znajdź pierwsze wystąpienie elementu",T.Msg.LISTS_INDEX_OF_HELPURL="https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list",T.Msg.LISTS_INDEX_OF_LAST="znajdź ostatanie wystąpienie elementu",T.Msg.LISTS_INDEX_OF_TOOLTIP="Zwraca indeks pierwszego/ostatniego wystąpienia elementu z listy. Zwraca %1, jeśli nie zostanie znaleziony.",T.Msg.LISTS_INLIST="na liście",T.Msg.LISTS_ISEMPTY_HELPURL="https://github.com/google/blockly/wiki/Lists#is-empty",T.Msg.LISTS_ISEMPTY_TITLE="%1 jest pusta",T.Msg.LISTS_ISEMPTY_TOOLTIP='Zwraca "prawda" jeśli lista jest pusta.',T.Msg.LISTS_LENGTH_HELPURL="https://github.com/google/blockly/wiki/Lists#length-of",T.Msg.LISTS_LENGTH_TITLE="długość %1",T.Msg.LISTS_LENGTH_TOOLTIP="Zwraca długość listy.",T.Msg.LISTS_REPEAT_HELPURL="https://github.com/google/blockly/wiki/Lists#create-list-with",T.Msg.LISTS_REPEAT_TITLE="utwórz listę powtarzając %1 %2 razy.",T.Msg.LISTS_REPEAT_TOOLTIP="Tworzy listę zawierającą podaną wartość powtórzoną żądaną ilość razy.",T.Msg.LISTS_REVERSE_HELPURL="https://github.com/google/blockly/wiki/Lists#reversing-a-list",T.Msg.LISTS_REVERSE_MESSAGE0="odwróć %1",T.Msg.LISTS_REVERSE_TOOLTIP="Odwraca kolejność danych w kopii listy.",T.Msg.LISTS_SET_INDEX_HELPURL="https://github.com/google/blockly/wiki/Lists#in-list--set",T.Msg.LISTS_SET_INDEX_INPUT_TO="jako",T.Msg.LISTS_SET_INDEX_INSERT="wstaw w",T.Msg.LISTS_SET_INDEX_SET="ustaw",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST="Wstawia element na początku listy.",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM="Wstawia element na żądanej pozycji listy.",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST="Dodaj element na koniec listy.",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM="Wstawia element w losowym miejscu na liście.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST="Ustawia pierwszy element na liście.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM="Ustawia element w określonym miejscu na liście.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST="Ustawia ostatni element na liście.",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM="Ustawia losowy element na liście.",T.Msg.LISTS_SORT_HELPURL="https://github.com/google/blockly/wiki/Lists#sorting-a-list",T.Msg.LISTS_SORT_ORDER_ASCENDING="rosnąco",T.Msg.LISTS_SORT_ORDER_DESCENDING="malejąco",T.Msg.LISTS_SORT_TITLE="sortuj %1 %2 %3",T.Msg.LISTS_SORT_TOOLTIP="Sortuj kopię listy.",T.Msg.LISTS_SORT_TYPE_IGNORECASE="alfabetycznie, ignoruj wielkość liter",T.Msg.LISTS_SORT_TYPE_NUMERIC="numerycznie",T.Msg.LISTS_SORT_TYPE_TEXT="alfabetycznie",T.Msg.LISTS_SPLIT_HELPURL="https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists",T.Msg.LISTS_SPLIT_LIST_FROM_TEXT="utwórz listę z tekstu",T.Msg.LISTS_SPLIT_TEXT_FROM_LIST="utwórz tekst z listy",T.Msg.LISTS_SPLIT_TOOLTIP_JOIN="Łączy listę tekstów w jeden tekst, rozdzielany separatorem.",T.Msg.LISTS_SPLIT_TOOLTIP_SPLIT="Rozdziela tekst zgodnie z separatorem tworząc listę z powstałych elementów.",T.Msg.LISTS_SPLIT_WITH_DELIMITER="z separatorem",T.Msg.LOGIC_BOOLEAN_FALSE="fałsz",T.Msg.LOGIC_BOOLEAN_HELPURL="https://github.com/google/blockly/wiki/Logic#values",T.Msg.LOGIC_BOOLEAN_TOOLTIP="Zwraca 'prawda' lub 'fałsz'.",T.Msg.LOGIC_BOOLEAN_TRUE="prawda",T.Msg.LOGIC_COMPARE_HELPURL="https://pl.wikipedia.org/wiki/Nierówność",T.Msg.LOGIC_COMPARE_TOOLTIP_EQ='Zwraca "prawda", jeśli wejścia są identyczne.',T.Msg.LOGIC_COMPARE_TOOLTIP_GT='Zwraca "prawda" jeśli pierwsze wejście jest większe od drugiego.',T.Msg.LOGIC_COMPARE_TOOLTIP_GTE='Zwraca "prawda", jeśli pierwsze wejście jest większe lub równe drugiemu.',T.Msg.LOGIC_COMPARE_TOOLTIP_LT='Zwraca "prawda" jeśli pierwsze wejście jest mniejsze od drugiego.',T.Msg.LOGIC_COMPARE_TOOLTIP_LTE='Zwraca "prawda", jeśli pierwsze wejście jest mniejsze lub równe drugiemu.',T.Msg.LOGIC_COMPARE_TOOLTIP_NEQ='Zwraca "prawda", jeśli wejścia nie są identyczne.',T.Msg.LOGIC_NEGATE_HELPURL="https://github.com/google/blockly/wiki/Logic#not",T.Msg.LOGIC_NEGATE_TITLE="nie %1",T.Msg.LOGIC_NEGATE_TOOLTIP='Zwraca "prawda", jeśli wejściu jest "fałsz". Zwraca "fałsz", jeśli na wejściu jest "prawda".',T.Msg.LOGIC_NULL="nic",T.Msg.LOGIC_NULL_HELPURL="https://en.wikipedia.org/wiki/Nullable_type",T.Msg.LOGIC_NULL_TOOLTIP="Zwraca nic.",T.Msg.LOGIC_OPERATION_AND="i",T.Msg.LOGIC_OPERATION_HELPURL="https://github.com/google/blockly/wiki/Logic#logical-operations",T.Msg.LOGIC_OPERATION_OR="lub",T.Msg.LOGIC_OPERATION_TOOLTIP_AND='Zwraca "prawda" jeśli na obydwóch wejściach jest "prawda".',T.Msg.LOGIC_OPERATION_TOOLTIP_OR='Zwraca "prawda" jeśli co najmniej na jednyk wejściu jest "prawda".',T.Msg.LOGIC_TERNARY_CONDITION="test",T.Msg.LOGIC_TERNARY_HELPURL="https://en.wikipedia.org/wiki/%3F:",T.Msg.LOGIC_TERNARY_IF_FALSE="jeśli fałsz",T.Msg.LOGIC_TERNARY_IF_TRUE="jeśli prawda",T.Msg.LOGIC_TERNARY_TOOLTIP="Sprawdź warunek w „test”. Jeśli warunek jest prawdziwy, to zwróci „jeśli prawda”; jeśli nie jest prawdziwy to zwróci „jeśli fałsz”.",T.Msg.MATH_ADDITION_SYMBOL="+",T.Msg.MATH_ARITHMETIC_HELPURL="https://pl.wikipedia.org/wiki/Arytmetyka",T.Msg.MATH_ARITHMETIC_TOOLTIP_ADD="Zwróć sumę dwóch liczb.",T.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE="Zwróć iloraz dwóch liczb.",T.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS="Zwróć różnicę dwóch liczb.",T.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY="Zwróć iloczyn dwóch liczb.",T.Msg.MATH_ARITHMETIC_TOOLTIP_POWER="Zwróć pierwszą liczbę podniesioną do potęgi o wykładniku drugiej liczby.",T.Msg.MATH_ATAN2_HELPURL="https://en.wikipedia.org/wiki/Atan2",T.Msg.MATH_ATAN2_TITLE="atan2 z %X:%1 Y:%2",T.Msg.MATH_ATAN2_TOOLTIP="Zwraca arcus tangens punktu (X, Y) w stopniach od -180 do 180.",T.Msg.MATH_CHANGE_HELPURL="https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter",T.Msg.MATH_CHANGE_TITLE="zmień %1 o %2",T.Msg.MATH_CHANGE_TOOLTIP="Dodaj liczbę do zmiennej '%1'.",T.Msg.MATH_CONSTANT_HELPURL="https://pl.wikipedia.org/wiki/Stała_(matematyka)",T.Msg.MATH_CONSTANT_TOOLTIP="Zwróć jedną wspólną stałą: π (3.141), e (2.718...), φ (1.618...), sqrt(2) (1.414...), sqrt(½) (0.707...) lub ∞ (nieskończoność).",T.Msg.MATH_CONSTRAIN_HELPURL="https://en.wikipedia.org/wiki/Clamping_(graphics)",T.Msg.MATH_CONSTRAIN_TITLE="ogranicz %1 z dołu %2 z góry %3",T.Msg.MATH_CONSTRAIN_TOOLTIP="Ogranicz liczbę, aby była w określonych granicach (włącznie).",T.Msg.MATH_DIVISION_SYMBOL="/",T.Msg.MATH_IS_DIVISIBLE_BY="jest podzielna przez",T.Msg.MATH_IS_EVEN="jest parzysta",T.Msg.MATH_IS_NEGATIVE="jest ujemna",T.Msg.MATH_IS_ODD="jest nieparzysta",T.Msg.MATH_IS_POSITIVE="jest dodatnia",T.Msg.MATH_IS_PRIME="jest liczbą pierwszą",T.Msg.MATH_IS_TOOLTIP='Sprawdź, czy liczba jest parzysta, nieparzysta, pierwsza, całkowita, dodatnia, ujemna, lub czy jest podzielna przez podaną liczbę. Zwraca wartość "prawda" lub "fałsz".',T.Msg.MATH_IS_WHOLE="jest liczbą całkowitą",T.Msg.MATH_MODULO_HELPURL="https://pl.wikipedia.org/wiki/Modulo",T.Msg.MATH_MODULO_TITLE="reszta z dzielenia %1 przez %2",T.Msg.MATH_MODULO_TOOLTIP="Zwróć resztę z dzielenia dwóch liczb przez siebie.",T.Msg.MATH_MULTIPLICATION_SYMBOL="×",T.Msg.MATH_NUMBER_HELPURL="https://en.wikipedia.org/wiki/Number",T.Msg.MATH_NUMBER_TOOLTIP="Liczba.",T.Msg.MATH_ONLIST_HELPURL="",T.Msg.MATH_ONLIST_OPERATOR_AVERAGE="średnia elementów listy",T.Msg.MATH_ONLIST_OPERATOR_MAX="maksymalna wartość z listy",T.Msg.MATH_ONLIST_OPERATOR_MEDIAN="mediana listy",T.Msg.MATH_ONLIST_OPERATOR_MIN="minimalna wartość z listy",T.Msg.MATH_ONLIST_OPERATOR_MODE="dominanty listy",T.Msg.MATH_ONLIST_OPERATOR_RANDOM="losowy element z listy",T.Msg.MATH_ONLIST_OPERATOR_STD_DEV="odchylenie standardowe listy",T.Msg.MATH_ONLIST_OPERATOR_SUM="suma elementów listy",T.Msg.MATH_ONLIST_TOOLTIP_AVERAGE="Zwróć średnią (średnią arytmetyczną) wartości liczbowych z listy.",T.Msg.MATH_ONLIST_TOOLTIP_MAX="Zwróć największą liczbę w liście.",T.Msg.MATH_ONLIST_TOOLTIP_MEDIAN="Zwróć medianę listy.",T.Msg.MATH_ONLIST_TOOLTIP_MIN="Zwróć najmniejszą liczbę w liście.",T.Msg.MATH_ONLIST_TOOLTIP_MODE="Zwróć listę najczęściej występujących elementów w liście.",T.Msg.MATH_ONLIST_TOOLTIP_RANDOM="Zwróć losowy element z listy.",T.Msg.MATH_ONLIST_TOOLTIP_STD_DEV="Zwróć odchylenie standardowe listy.",T.Msg.MATH_ONLIST_TOOLTIP_SUM="Zwróć sumę wszystkich liczb z listy.",T.Msg.MATH_POWER_SYMBOL="^",T.Msg.MATH_RANDOM_FLOAT_HELPURL="https://en.wikipedia.org/wiki/Random_number_generation",T.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM="losowy ułamek",T.Msg.MATH_RANDOM_FLOAT_TOOLTIP="Zwróć losowy ułamek między 0.0 (włącznie), a 1.0 (wyłącznie).",T.Msg.MATH_RANDOM_INT_HELPURL="https://en.wikipedia.org/wiki/Random_number_generation",T.Msg.MATH_RANDOM_INT_TITLE="losowa liczba całkowita od %1 do %2",T.Msg.MATH_RANDOM_INT_TOOLTIP="Zwróć losową liczbę całkowitą w ramach dwóch wyznaczonych granic, włącznie.",T.Msg.MATH_ROUND_HELPURL="https://pl.wikipedia.org/wiki/Zaokrąglanie",T.Msg.MATH_ROUND_OPERATOR_ROUND="zaokrąglij",T.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN="zaokrąglij w dół",T.Msg.MATH_ROUND_OPERATOR_ROUNDUP="zaokrąglij w górę",T.Msg.MATH_ROUND_TOOLTIP="Zaokrąglij w górę lub w dół.",T.Msg.MATH_SINGLE_HELPURL="https://pl.wikipedia.org/wiki/Pierwiastek_kwadratowy",T.Msg.MATH_SINGLE_OP_ABSOLUTE="wartość bezwzględna",T.Msg.MATH_SINGLE_OP_ROOT="pierwiastek kwadratowy",T.Msg.MATH_SINGLE_TOOLTIP_ABS="Zwróć wartość bezwzględną danej liczby.",T.Msg.MATH_SINGLE_TOOLTIP_EXP="Zwróć e do potęgi danej liczby.",T.Msg.MATH_SINGLE_TOOLTIP_LN="Zwróć logarytm naturalny danej liczby.",T.Msg.MATH_SINGLE_TOOLTIP_LOG10="Zwraca logarytm dziesiętny danej liczby.",T.Msg.MATH_SINGLE_TOOLTIP_NEG="Zwróć negację danej liczby.",T.Msg.MATH_SINGLE_TOOLTIP_POW10="Zwróć 10 do potęgi danej liczby.",T.Msg.MATH_SINGLE_TOOLTIP_ROOT="Zwróć pierwiastek kwadratowy danej liczby.",T.Msg.MATH_SUBTRACTION_SYMBOL="-",T.Msg.MATH_TRIG_ACOS="arccos",T.Msg.MATH_TRIG_ASIN="arcsin",T.Msg.MATH_TRIG_ATAN="arctg",T.Msg.MATH_TRIG_COS="cos",T.Msg.MATH_TRIG_HELPURL="https://pl.wikipedia.org/wiki/Funkcje_trygonometryczne",T.Msg.MATH_TRIG_SIN="sin",T.Msg.MATH_TRIG_TAN="tg",T.Msg.MATH_TRIG_TOOLTIP_ACOS="Zwróć arcus cosinus danej liczby.",T.Msg.MATH_TRIG_TOOLTIP_ASIN="Zwróć arcus sinus danej liczby.",T.Msg.MATH_TRIG_TOOLTIP_ATAN="Zwróć arcus tangens danej liczby.",T.Msg.MATH_TRIG_TOOLTIP_COS="Zwróć wartość cosinusa o stopniu (nie w radianach).",T.Msg.MATH_TRIG_TOOLTIP_SIN="Zwróć wartość sinusa o stopniu (nie w radianach).",T.Msg.MATH_TRIG_TOOLTIP_TAN="Zwróć tangens o stopniu (nie w radianach).",T.Msg.NEW_COLOUR_VARIABLE="Utwórz zmienną colour",T.Msg.NEW_NUMBER_VARIABLE="Utwórz zmienną typu number",T.Msg.NEW_STRING_VARIABLE="Utwórz zmienną typu string",T.Msg.NEW_VARIABLE="Utwórz zmienną...",T.Msg.NEW_VARIABLE_TITLE="Nowa nazwa zmiennej:",T.Msg.NEW_VARIABLE_TYPE_TITLE="Nowy typ zmiennej:",T.Msg.ORDINAL_NUMBER_SUFFIX="",T.Msg.PROCEDURES_ALLOW_STATEMENTS="zezwól na czynności",T.Msg.PROCEDURES_BEFORE_PARAMS="z:",T.Msg.PROCEDURES_CALLNORETURN_HELPURL="https://pl.wikipedia.org/wiki/Podprogram",T.Msg.PROCEDURES_CALLNORETURN_TOOLTIP="Uruchom zdefiniowaną przez użytkownika funkcję '%1'.",T.Msg.PROCEDURES_CALLRETURN_HELPURL="https://pl.wikipedia.org/wiki/Podprogram",T.Msg.PROCEDURES_CALLRETURN_TOOLTIP="Uruchom zdefiniowaną przez użytkownika funkcję '%1' i użyj jej wyjścia.",T.Msg.PROCEDURES_CALL_BEFORE_PARAMS="z:",T.Msg.PROCEDURES_CREATE_DO="Utwórz '%1'",T.Msg.PROCEDURES_DEFNORETURN_COMMENT="Opisz tę funkcję...",T.Msg.PROCEDURES_DEFNORETURN_DO="",T.Msg.PROCEDURES_DEFNORETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",T.Msg.PROCEDURES_DEFNORETURN_PROCEDURE="zrób coś",T.Msg.PROCEDURES_DEFNORETURN_TITLE="do",T.Msg.PROCEDURES_DEFNORETURN_TOOLTIP="Tworzy funkcję nie posiadającą wyjścia.",T.Msg.PROCEDURES_DEFRETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",T.Msg.PROCEDURES_DEFRETURN_RETURN="zwróć",T.Msg.PROCEDURES_DEFRETURN_TOOLTIP="Tworzy funkcję posiadającą wyjście.",T.Msg.PROCEDURES_DEF_DUPLICATE_WARNING="Uwaga: Ta funkcja ma powtórzone parametry.",T.Msg.PROCEDURES_HIGHLIGHT_DEF="Podświetl definicję funkcji",T.Msg.PROCEDURES_IFRETURN_HELPURL="http://c2.com/cgi/wiki?GuardClause",T.Msg.PROCEDURES_IFRETURN_TOOLTIP="Jeśli warunek jest spełniony zwróć drugą wartość.",T.Msg.PROCEDURES_IFRETURN_WARNING="Uwaga: Ten klocek może być używany tylko w definicji funkcji.",T.Msg.PROCEDURES_MUTATORARG_TITLE="nazwa wejścia:",T.Msg.PROCEDURES_MUTATORARG_TOOLTIP="Dodaj wejście do funkcji.",T.Msg.PROCEDURES_MUTATORCONTAINER_TITLE="wejścia",T.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP="Dodaj, usuń lub zmień kolejność wejść tej funkcji.",T.Msg.REDO="Ponów",T.Msg.REMOVE_COMMENT="Usuń komentarz",T.Msg.RENAME_VARIABLE="Zmień nazwę zmiennej...",T.Msg.RENAME_VARIABLE_TITLE="Zmień nazwy wszystkich '%1' zmiennych na:",T.Msg.TEXT_APPEND_HELPURL="https://github.com/google/blockly/wiki/Text#text-modification",T.Msg.TEXT_APPEND_TITLE="dodaj tekst %2 do %1",T.Msg.TEXT_APPEND_TOOLTIP="Dołącz tekst do zmiennej '%1'.",T.Msg.TEXT_CHANGECASE_HELPURL="https://github.com/google/blockly/wiki/Text#adjusting-text-case",T.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE="na małe litery",T.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE="na Pierwsza Duża",T.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE="na WIELKIE LITERY",T.Msg.TEXT_CHANGECASE_TOOLTIP="Zwraca kopię tekstu z odwruconą wielkością liter.",T.Msg.TEXT_CHARAT_FIRST="pobierz pierwszą literę",T.Msg.TEXT_CHARAT_FROM_END="pobierz literę # od końca",T.Msg.TEXT_CHARAT_FROM_START="pobierz literę #",T.Msg.TEXT_CHARAT_HELPURL="https://github.com/google/blockly/wiki/Text#extracting-text",T.Msg.TEXT_CHARAT_LAST="pobierz ostatnią literę",T.Msg.TEXT_CHARAT_RANDOM="pobierz losową literę",T.Msg.TEXT_CHARAT_TAIL="",T.Msg.TEXT_CHARAT_TITLE="w tekście %1 %2",T.Msg.TEXT_CHARAT_TOOLTIP="Zwraca literę z określonej pozycji.",T.Msg.TEXT_COUNT_HELPURL="https://github.com/google/blockly/wiki/Text#counting-substrings",T.Msg.TEXT_COUNT_MESSAGE0="policz %1 w %2",T.Msg.TEXT_COUNT_TOOLTIP="Liczy ile razy dany tekst występuje w innym tekście.",T.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP="Dodaj element do tekstu.",T.Msg.TEXT_CREATE_JOIN_TITLE_JOIN="połącz",T.Msg.TEXT_CREATE_JOIN_TOOLTIP="Dodaj, usuń lub zmień kolejność sekcji, aby zmodyfikować klocek tekstowy.",T.Msg.TEXT_GET_SUBSTRING_END_FROM_END="do # litery od końca",T.Msg.TEXT_GET_SUBSTRING_END_FROM_START="do # litery",T.Msg.TEXT_GET_SUBSTRING_END_LAST="do ostatniej litery",T.Msg.TEXT_GET_SUBSTRING_HELPURL="https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text",T.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT="w tekście",T.Msg.TEXT_GET_SUBSTRING_START_FIRST="pobierz podciąg od pierwszej litery",T.Msg.TEXT_GET_SUBSTRING_START_FROM_END="pobierz podciąg od # litery od końca",T.Msg.TEXT_GET_SUBSTRING_START_FROM_START="pobierz podciąg od # litery",T.Msg.TEXT_GET_SUBSTRING_TAIL="",T.Msg.TEXT_GET_SUBSTRING_TOOLTIP="Zwraca określoną część tekstu.",T.Msg.TEXT_INDEXOF_HELPURL="https://github.com/google/blockly/wiki/Text#finding-text",T.Msg.TEXT_INDEXOF_OPERATOR_FIRST="znajdź pierwsze wystąpienie tekstu",T.Msg.TEXT_INDEXOF_OPERATOR_LAST="znajdź ostatnie wystąpienie tekstu",T.Msg.TEXT_INDEXOF_TITLE="w tekście %1 %2 %3",T.Msg.TEXT_INDEXOF_TOOLTIP="Zwraca indeks pierwszego/ostatniego wystąpienia pierwszego tekstu w drugim tekście. Zwraca wartość %1, jeśli tekst nie został znaleziony.",T.Msg.TEXT_ISEMPTY_HELPURL="https://github.com/google/blockly/wiki/Text#checking-for-empty-text",T.Msg.TEXT_ISEMPTY_TITLE="%1 jest pusty",T.Msg.TEXT_ISEMPTY_TOOLTIP="Zwraca prawda (true), jeśli podany tekst jest pusty.",T.Msg.TEXT_JOIN_HELPURL="https://github.com/google/blockly/wiki/Text#text-creation",T.Msg.TEXT_JOIN_TITLE_CREATEWITH="utwórz tekst z",T.Msg.TEXT_JOIN_TOOLTIP="Tworzy fragment tekstu, łącząc ze sobą dowolną liczbę tekstów.",T.Msg.TEXT_LENGTH_HELPURL="https://github.com/google/blockly/wiki/Text#text-modification",T.Msg.TEXT_LENGTH_TITLE="długość %1",T.Msg.TEXT_LENGTH_TOOLTIP="Zwraca liczbę liter (łącznie ze spacjami) w podanym tekście.",T.Msg.TEXT_PRINT_HELPURL="https://github.com/google/blockly/wiki/Text#printing-text",T.Msg.TEXT_PRINT_TITLE="wydrukuj %1",T.Msg.TEXT_PRINT_TOOLTIP="Wyświetl określony tekst, liczbę lub inną wartość.",T.Msg.TEXT_PROMPT_HELPURL="https://github.com/google/blockly/wiki/Text#getting-input-from-the-user",T.Msg.TEXT_PROMPT_TOOLTIP_NUMBER="Zapytaj użytkownika  o liczbę.",T.Msg.TEXT_PROMPT_TOOLTIP_TEXT="Zapytaj użytkownika o jakiś tekst.",T.Msg.TEXT_PROMPT_TYPE_NUMBER="poproś o liczbę z tą wiadomością",T.Msg.TEXT_PROMPT_TYPE_TEXT="poproś o tekst z tą wiadomością",T.Msg.TEXT_REPLACE_HELPURL="https://github.com/google/blockly/wiki/Text#replacing-substrings",T.Msg.TEXT_REPLACE_MESSAGE0="zamień %1 na %2 w %3",T.Msg.TEXT_REPLACE_TOOLTIP="Zastąp wszystkie wystąpienia danego tekstu innym.",T.Msg.TEXT_REVERSE_HELPURL="https://github.com/google/blockly/wiki/Text#reversing-text",T.Msg.TEXT_REVERSE_MESSAGE0="odwróć %1",T.Msg.TEXT_REVERSE_TOOLTIP="Odwraca kolejność znaków w tekście.",T.Msg.TEXT_TEXT_HELPURL="https://pl.wikipedia.org/wiki/Tekstowy_typ_danych",T.Msg.TEXT_TEXT_TOOLTIP="Litera, wyraz lub linia tekstu.",T.Msg.TEXT_TRIM_HELPURL="https://github.com/google/blockly/wiki/Text#trimming-removing-spaces",T.Msg.TEXT_TRIM_OPERATOR_BOTH="usuń spacje po obu stronach",T.Msg.TEXT_TRIM_OPERATOR_LEFT="usuń spacje z lewej strony",T.Msg.TEXT_TRIM_OPERATOR_RIGHT="usuń spacje z prawej strony",T.Msg.TEXT_TRIM_TOOLTIP="Zwraca kopię tekstu z usuniętymi spacjami z jednego lub z obu końców tekstu.",T.Msg.TODAY="Dzisiaj",T.Msg.UNDO="Cofnij",T.Msg.UNNAMED_KEY="bez nazwy",T.Msg.VARIABLES_DEFAULT_NAME="element",T.Msg.VARIABLES_GET_CREATE_SET="Utwórz klocek 'ustaw %1'",T.Msg.VARIABLES_GET_HELPURL="https://github.com/google/blockly/wiki/Variables#get",T.Msg.VARIABLES_GET_TOOLTIP="Zwraca wartość tej zmiennej.",T.Msg.VARIABLES_SET="przypisz %1 wartość %2",T.Msg.VARIABLES_SET_CREATE_GET="Utwórz klocek 'pobierz %1'",T.Msg.VARIABLES_SET_HELPURL="https://github.com/google/blockly/wiki/Variables#set",T.Msg.VARIABLES_SET_TOOLTIP="Wartości zmiennej i  wejście będą identyczne.",T.Msg.VARIABLE_ALREADY_EXISTS="Zmienna o nazwie '%1' już istnieje.",T.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE="Zmienna o nazwie '%1' już istnieje i jest typu '%2'.",T.Msg.WORKSPACE_ARIA_LABEL="Obszar roboczy Blockly",T.Msg.WORKSPACE_COMMENT_DEFAULT_TEXT="Powiedz coś...",T.Msg.CONTROLS_FOREACH_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_FOR_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF=T.Msg.CONTROLS_IF_MSG_ELSEIF,T.Msg.CONTROLS_IF_ELSE_TITLE_ELSE=T.Msg.CONTROLS_IF_MSG_ELSE,T.Msg.CONTROLS_IF_IF_TITLE_IF=T.Msg.CONTROLS_IF_MSG_IF,T.Msg.CONTROLS_IF_MSG_THEN=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_WHILEUNTIL_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.LISTS_CREATE_WITH_ITEM_TITLE=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.LISTS_GET_INDEX_HELPURL=T.Msg.LISTS_INDEX_OF_HELPURL,T.Msg.LISTS_GET_INDEX_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_INDEX_OF_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_SET_INDEX_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.MATH_CHANGE_TITLE_ITEM=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.PROCEDURES_DEFRETURN_COMMENT=T.Msg.PROCEDURES_DEFNORETURN_COMMENT,T.Msg.PROCEDURES_DEFRETURN_DO=T.Msg.PROCEDURES_DEFNORETURN_DO,T.Msg.PROCEDURES_DEFRETURN_PROCEDURE=T.Msg.PROCEDURES_DEFNORETURN_PROCEDURE,T.Msg.PROCEDURES_DEFRETURN_TITLE=T.Msg.PROCEDURES_DEFNORETURN_TITLE,T.Msg.TEXT_APPEND_VARIABLE=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.MATH_HUE="230",T.Msg.LOOPS_HUE="120",T.Msg.LISTS_HUE="260",T.Msg.LOGIC_HUE="210",T.Msg.VARIABLES_HUE="330",T.Msg.TEXTS_HUE="160",T.Msg.PROCEDURES_HUE="290",T.Msg.COLOUR_HUE="20",T.Msg.VARIABLES_DYNAMIC_HUE="310",T.Msg})?i.apply(_,s):i)||(T.exports=E)}}]);