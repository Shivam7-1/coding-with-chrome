(self.webpackChunkcoding_with_chrome=self.webpackChunkcoding_with_chrome||[]).push([[9863],{99863:function(T,_){var E,O,L;O=[],void 0===(L="function"==typeof(E=function(){"use strict";var T=T||{Msg:Object.create(null)};return T.Msg.ADD_COMMENT="加入註解",T.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE="無法刪除變數「%1」，因為這是功能「%2」定義的一部份內容",T.Msg.CHANGE_VALUE_TITLE="修改值：",T.Msg.CLEAN_UP="整理區塊",T.Msg.COLLAPSED_WARNINGS_WARNING="收合含有警告的區塊。",T.Msg.COLLAPSE_ALL="收合區塊",T.Msg.COLLAPSE_BLOCK="收合區塊",T.Msg.COLOUR_BLEND_COLOUR1="顏色 1",T.Msg.COLOUR_BLEND_COLOUR2="顏色 2",T.Msg.COLOUR_BLEND_HELPURL="https://meyerweb.com/eric/tools/color-blend/#:::rgbp",T.Msg.COLOUR_BLEND_RATIO="比例",T.Msg.COLOUR_BLEND_TITLE="混合",T.Msg.COLOUR_BLEND_TOOLTIP="用一個給定的比率（0.0-1.0）混合兩種顏色。",T.Msg.COLOUR_PICKER_HELPURL="https://zh.wikipedia.org/wiki/顏色",T.Msg.COLOUR_PICKER_TOOLTIP="從調色板中選擇一種顏色。",T.Msg.COLOUR_RANDOM_HELPURL="http://randomcolour.com",T.Msg.COLOUR_RANDOM_TITLE="隨機顏色",T.Msg.COLOUR_RANDOM_TOOLTIP="隨機選擇一種顏色。",T.Msg.COLOUR_RGB_BLUE="藍",T.Msg.COLOUR_RGB_GREEN="綠",T.Msg.COLOUR_RGB_HELPURL="https://www.december.com/html/spec/colorpercompact.html",T.Msg.COLOUR_RGB_RED="紅",T.Msg.COLOUR_RGB_TITLE="顏色",T.Msg.COLOUR_RGB_TOOLTIP="透過指定紅、綠、 藍色的值來建立一種顏色。所有的值必須介於 0 和 100 之間。",T.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL="https://github.com/google/blockly/wiki/Loops#loop-termination-blocks",T.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK="中斷循環",T.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE="繼續下一個循環",T.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK="中斷當前的循環。",T.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE="跳過這個循環的其餘步驟，並繼續下一次的循環。",T.Msg.CONTROLS_FLOW_STATEMENTS_WARNING="警告：此區塊僅可用於循環內。",T.Msg.CONTROLS_FOREACH_HELPURL="https://github.com/google/blockly/wiki/Loops#for-each",T.Msg.CONTROLS_FOREACH_TITLE="為列表 %2 裡的每一項 %1",T.Msg.CONTROLS_FOREACH_TOOLTIP="遍歷每個清單中的項目，將變數「%1」設定到該項目中，然後執行某些陳述式。",T.Msg.CONTROLS_FOR_HELPURL="https://github.com/google/blockly/wiki/Loops#count-with",T.Msg.CONTROLS_FOR_TITLE="循環計數 %1 從 %2 到 %3 每次增加 %4",T.Msg.CONTROLS_FOR_TOOLTIP="從起始數到結尾數中取出變數「%1」的值，按指定的時間間隔，執行指定的區塊。",T.Msg.CONTROLS_IF_ELSEIF_TOOLTIP="添加條件到「如果」積木。",T.Msg.CONTROLS_IF_ELSE_TOOLTIP="加入一個最終、所有條件都執行的部份到「如果」區塊中。",T.Msg.CONTROLS_IF_HELPURL="https://github.com/google/blockly/wiki/IfElse",T.Msg.CONTROLS_IF_IF_TOOLTIP="添加、刪除或重新排列各部份以重新配置這個「如果」區塊。",T.Msg.CONTROLS_IF_MSG_ELSE="否則",T.Msg.CONTROLS_IF_MSG_ELSEIF="否則，如果",T.Msg.CONTROLS_IF_MSG_IF="如果",T.Msg.CONTROLS_IF_TOOLTIP_1="當值為 true 時，執行一些陳述式。",T.Msg.CONTROLS_IF_TOOLTIP_2="值為是（true）就執行第一塊陳述式，否則執行第二塊。",T.Msg.CONTROLS_IF_TOOLTIP_3="如果第一個值為 true，則執行第一個陳述式。否則，當第二個值為 true 時，則執行第二個陳述式。",T.Msg.CONTROLS_IF_TOOLTIP_4="如果第一個值為 true，則執行第一個陳述式。否則當第二個值為 true 時，則執行第二個陳述式。如果前幾個敘述都不為 ture，則執行最後一個陳述式。",T.Msg.CONTROLS_REPEAT_HELPURL="https://zh.wikipedia.org/wiki/For迴圈",T.Msg.CONTROLS_REPEAT_INPUT_DO="執行",T.Msg.CONTROLS_REPEAT_TITLE="重複%1次",T.Msg.CONTROLS_REPEAT_TOOLTIP="重複執行指定的陳述式多次。",T.Msg.CONTROLS_WHILEUNTIL_HELPURL="https://github.com/google/blockly/wiki/Loops#repeat",T.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL="重複直到",T.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE="重複，當",T.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL="當值為 false 時，執行一些陳述式。",T.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE="當值為 true 時，執行一些陳述式。",T.Msg.DELETE_ALL_BLOCKS="刪除全部 %1 個區塊？",T.Msg.DELETE_BLOCK="刪除區塊",T.Msg.DELETE_VARIABLE="刪除變數「%1」",T.Msg.DELETE_VARIABLE_CONFIRMATION="刪除使用%1次的「%2」變數？",T.Msg.DELETE_X_BLOCKS="刪除%1個積木",T.Msg.DIALOG_CANCEL="取消",T.Msg.DIALOG_OK="確定",T.Msg.DISABLE_BLOCK="停用區塊",T.Msg.DUPLICATE_BLOCK="重複",T.Msg.DUPLICATE_COMMENT="複製註解",T.Msg.ENABLE_BLOCK="啟用積木",T.Msg.EXPAND_ALL="展開積木",T.Msg.EXPAND_BLOCK="展開區塊",T.Msg.EXTERNAL_INPUTS="外部輸入",T.Msg.HELP="說明",T.Msg.INLINE_INPUTS="單行輸入",T.Msg.LISTS_CREATE_EMPTY_HELPURL="https://github.com/google/blockly/wiki/Lists#create-empty-list",T.Msg.LISTS_CREATE_EMPTY_TITLE="建立空的清單",T.Msg.LISTS_CREATE_EMPTY_TOOLTIP="返回一個長度（項目數量）為 0 的清單，不包含任何資料記錄",T.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD="清單",T.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP="添加、刪除或重新排列各部份以重新配置這個清單區塊。",T.Msg.LISTS_CREATE_WITH_HELPURL="https://github.com/google/blockly/wiki/Lists#create-list-with",T.Msg.LISTS_CREATE_WITH_INPUT_WITH="使用這些值建立清單",T.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP="添加一個項目到清單裡。",T.Msg.LISTS_CREATE_WITH_TOOLTIP="建立一個具備任意數量項目的清單。",T.Msg.LISTS_GET_INDEX_FIRST="第一筆",T.Msg.LISTS_GET_INDEX_FROM_END="倒數第 # 筆",T.Msg.LISTS_GET_INDEX_FROM_START="#",T.Msg.LISTS_GET_INDEX_GET="取得",T.Msg.LISTS_GET_INDEX_GET_REMOVE="取得並移除",T.Msg.LISTS_GET_INDEX_LAST="最後一筆",T.Msg.LISTS_GET_INDEX_RANDOM="隨機",T.Msg.LISTS_GET_INDEX_REMOVE="移除",T.Msg.LISTS_GET_INDEX_TAIL="",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST="返回清單中的第一個項目。",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM="返回在清單中指定位置的項目。",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST="返回清單中的最後一個項目。",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM="返回清單中隨機一個項目。",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST="移除並返回清單中的第一個項目。",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM="移除並返回清單中的指定位置的項目。",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST="移除並返回清單中的最後一個項目。",T.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM="移除並返回清單中的隨機項目。",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST="移除清單中的第一個項目。",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM="移除在清單中指定位置的項目。",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST="移除清單中的最後一個項目。",T.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM="移除清單中隨機一個項目。",T.Msg.LISTS_GET_SUBLIST_END_FROM_END="到 # 倒數",T.Msg.LISTS_GET_SUBLIST_END_FROM_START="到 #",T.Msg.LISTS_GET_SUBLIST_END_LAST="到 最後面",T.Msg.LISTS_GET_SUBLIST_HELPURL="https://github.com/google/blockly/wiki/Lists#getting-a-sublist",T.Msg.LISTS_GET_SUBLIST_START_FIRST="取得子清單 從 最前面",T.Msg.LISTS_GET_SUBLIST_START_FROM_END="取得子清單 從 # 倒數",T.Msg.LISTS_GET_SUBLIST_START_FROM_START="取得子清單 從 #",T.Msg.LISTS_GET_SUBLIST_TAIL="",T.Msg.LISTS_GET_SUBLIST_TOOLTIP="複製清單中指定的部分。",T.Msg.LISTS_INDEX_FROM_END_TOOLTIP="%1 是最後一個項目。",T.Msg.LISTS_INDEX_FROM_START_TOOLTIP="%1 是第一個項目。",T.Msg.LISTS_INDEX_OF_FIRST="從 最前面 索引項目",T.Msg.LISTS_INDEX_OF_HELPURL="https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list",T.Msg.LISTS_INDEX_OF_LAST="從 最後面 索引項目",T.Msg.LISTS_INDEX_OF_TOOLTIP="在清單中檢索是否有包含項目，如果有，返回從頭/倒數算起的索引值。如果沒有則返回 %1。",T.Msg.LISTS_INLIST="自清單",T.Msg.LISTS_ISEMPTY_HELPURL="https://github.com/google/blockly/wiki/Lists#is-empty",T.Msg.LISTS_ISEMPTY_TITLE="%1 值為空",T.Msg.LISTS_ISEMPTY_TOOLTIP="如果該清單為空，則返回 true。",T.Msg.LISTS_LENGTH_HELPURL="https://github.com/google/blockly/wiki/Lists#length-of",T.Msg.LISTS_LENGTH_TITLE="長度 %1",T.Msg.LISTS_LENGTH_TOOLTIP="返回清單的長度（項目數）。",T.Msg.LISTS_REPEAT_HELPURL="https://github.com/google/blockly/wiki/Lists#create-list-with",T.Msg.LISTS_REPEAT_TITLE="建立清單使用項目 %1 重複 %2 次",T.Msg.LISTS_REPEAT_TOOLTIP="建立一個清單，項目中包含指定重複次數的值。",T.Msg.LISTS_REVERSE_HELPURL="https://github.com/google/blockly/wiki/Lists#reversing-a-list",T.Msg.LISTS_REVERSE_MESSAGE0="反轉%1",T.Msg.LISTS_REVERSE_TOOLTIP="反轉清單的複製內容。",T.Msg.LISTS_SET_INDEX_HELPURL="https://github.com/google/blockly/wiki/Lists#in-list--set",T.Msg.LISTS_SET_INDEX_INPUT_TO="為",T.Msg.LISTS_SET_INDEX_INSERT="添加",T.Msg.LISTS_SET_INDEX_SET="設定",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST="添加一個項目到清單中的第一個位置。",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM="添加一個項目到清單中的指定位置。",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST="添加一個項目到清單中的最後一個位置。",T.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM="添加一個項目到清單中的隨機位置。",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST="設定清單中的第一個項目。",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM="設定清單中指定位置的項目。",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST="設定清單中的最後一個項目。",T.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM="設定清單中隨機一個項目。",T.Msg.LISTS_SORT_HELPURL="https://github.com/google/blockly/wiki/Lists#sorting-a-list",T.Msg.LISTS_SORT_ORDER_ASCENDING="升序",T.Msg.LISTS_SORT_ORDER_DESCENDING="降序",T.Msg.LISTS_SORT_TITLE="排列 %1 %2 %3",T.Msg.LISTS_SORT_TOOLTIP="排序清單的複製內容。",T.Msg.LISTS_SORT_TYPE_IGNORECASE="依字母排序，忽略大小寫",T.Msg.LISTS_SORT_TYPE_NUMERIC="依數字",T.Msg.LISTS_SORT_TYPE_TEXT="依字母",T.Msg.LISTS_SPLIT_HELPURL="https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists",T.Msg.LISTS_SPLIT_LIST_FROM_TEXT="從文本製作清單",T.Msg.LISTS_SPLIT_TEXT_FROM_LIST="從清單拆出文本",T.Msg.LISTS_SPLIT_TOOLTIP_JOIN="串起清單項目成一個文本，並用分隔符號分開。",T.Msg.LISTS_SPLIT_TOOLTIP_SPLIT="將文本變成清單項目，按分隔符號拆分。",T.Msg.LISTS_SPLIT_WITH_DELIMITER="用分隔符",T.Msg.LOGIC_BOOLEAN_FALSE="假",T.Msg.LOGIC_BOOLEAN_HELPURL="https://github.com/google/blockly/wiki/Logic#values",T.Msg.LOGIC_BOOLEAN_TOOLTIP="返回真或假。",T.Msg.LOGIC_BOOLEAN_TRUE="真",T.Msg.LOGIC_COMPARE_HELPURL="https://zh.wikipedia.org/wiki/不等",T.Msg.LOGIC_COMPARE_TOOLTIP_EQ="如果這兩個輸入區塊的結果相等，返回 true。",T.Msg.LOGIC_COMPARE_TOOLTIP_GT="如果第一個輸入結果大於第二個，返回 true。",T.Msg.LOGIC_COMPARE_TOOLTIP_GTE="如果第一個輸入結果大於或等於第二個，返回 true。",T.Msg.LOGIC_COMPARE_TOOLTIP_LT="如果第一個輸入結果比第二個小，返回 true。",T.Msg.LOGIC_COMPARE_TOOLTIP_LTE="如果第一個輸入結果小於或等於第二個，返回 true。",T.Msg.LOGIC_COMPARE_TOOLTIP_NEQ="如果這兩個輸入區塊的結果不相等，返回 true。",T.Msg.LOGIC_NEGATE_HELPURL="https://github.com/google/blockly/wiki/Logic#not",T.Msg.LOGIC_NEGATE_TITLE="%1 不成立",T.Msg.LOGIC_NEGATE_TOOLTIP="如果輸入結果是 false，則返回 true。如果輸入結果是 true，則返回 false。",T.Msg.LOGIC_NULL="空",T.Msg.LOGIC_NULL_HELPURL="https://en.wikipedia.org/wiki/Nullable_type",T.Msg.LOGIC_NULL_TOOLTIP="返回空值。",T.Msg.LOGIC_OPERATION_AND="和",T.Msg.LOGIC_OPERATION_HELPURL="https://github.com/google/blockly/wiki/Logic#logical-operations",T.Msg.LOGIC_OPERATION_OR="或",T.Msg.LOGIC_OPERATION_TOOLTIP_AND="如果兩個輸入結果都為 true，則返回 true。",T.Msg.LOGIC_OPERATION_TOOLTIP_OR="如果至少一個輸入結果為 true，返回 true。",T.Msg.LOGIC_TERNARY_CONDITION="測試",T.Msg.LOGIC_TERNARY_HELPURL="https://en.wikipedia.org/wiki/%3F:",T.Msg.LOGIC_TERNARY_IF_FALSE="如果為假",T.Msg.LOGIC_TERNARY_IF_TRUE="如果為真",T.Msg.LOGIC_TERNARY_TOOLTIP="檢查「測試」中的條件。如果條件為真，將返回「如果為真」的值；否則，返回「如果為假」的值。",T.Msg.MATH_ADDITION_SYMBOL="+",T.Msg.MATH_ARITHMETIC_HELPURL="https://zh.wikipedia.org/wiki/算術",T.Msg.MATH_ARITHMETIC_TOOLTIP_ADD="返回兩個數字的總和。",T.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE="傳回兩數之商。",T.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS="傳回兩數之差。",T.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY="返回兩個數字的乘積。",T.Msg.MATH_ARITHMETIC_TOOLTIP_POWER="返回第二個數字的指數的第一個數字。",T.Msg.MATH_ATAN2_HELPURL="https://zh.wikipedia.org/wiki/Atan2",T.Msg.MATH_ATAN2_TITLE="X:%1 Y:%2 的 Atan2",T.Msg.MATH_ATAN2_TOOLTIP="回傳點（X，Y）從 -180 至 180 度的反正切值。",T.Msg.MATH_CHANGE_HELPURL="https://zh.wikipedia.org/wiki/加法",T.Msg.MATH_CHANGE_TITLE="修改 %1 自 %2",T.Msg.MATH_CHANGE_TOOLTIP="將數字加到變數「%1」。",T.Msg.MATH_CONSTANT_HELPURL="https://zh.wikipedia.org/wiki/數學常數",T.Msg.MATH_CONSTANT_TOOLTIP="返回一個的常見常量： π (3.141......)，e (2.718...)、 φ (1.618...)、 開方(2) (1.414......)、 開方(½) (0.707......) 或 ∞ （無窮大）。",T.Msg.MATH_CONSTRAIN_HELPURL="https://en.wikipedia.org/wiki/Clamping_(graphics)",T.Msg.MATH_CONSTRAIN_TITLE="限制數字 %1 介於（低）%2 到（高）%3",T.Msg.MATH_CONSTRAIN_TOOLTIP="限制數字介於兩個指定的數字之間（包含）。",T.Msg.MATH_DIVISION_SYMBOL="÷",T.Msg.MATH_IS_DIVISIBLE_BY="可被整除",T.Msg.MATH_IS_EVEN="是偶數",T.Msg.MATH_IS_NEGATIVE="是負數",T.Msg.MATH_IS_ODD="是奇數",T.Msg.MATH_IS_POSITIVE="是正值",T.Msg.MATH_IS_PRIME="是質數",T.Msg.MATH_IS_TOOLTIP="如果數字是偶數，奇數，非負整數，正數、 負數，或如果它是可被某數字整除，則返回 true 或 false。",T.Msg.MATH_IS_WHOLE="是整數",T.Msg.MATH_MODULO_HELPURL="https://zh.wikipedia.org/wiki/模除",T.Msg.MATH_MODULO_TITLE="%1 除以 %2 的餘數",T.Msg.MATH_MODULO_TOOLTIP="回傳兩個數字相除的餘數。",T.Msg.MATH_MULTIPLICATION_SYMBOL="×",T.Msg.MATH_NUMBER_HELPURL="https://zh.wikipedia.org/wiki/數",T.Msg.MATH_NUMBER_TOOLTIP="數字",T.Msg.MATH_ONLIST_HELPURL="",T.Msg.MATH_ONLIST_OPERATOR_AVERAGE="平均數 自清單",T.Msg.MATH_ONLIST_OPERATOR_MAX="最大值 自清單",T.Msg.MATH_ONLIST_OPERATOR_MEDIAN="中位數 自清單",T.Msg.MATH_ONLIST_OPERATOR_MIN="最小值 自清單",T.Msg.MATH_ONLIST_OPERATOR_MODE="比較眾數 自清單",T.Msg.MATH_ONLIST_OPERATOR_RANDOM="隨機抽取 自清單",T.Msg.MATH_ONLIST_OPERATOR_STD_DEV="標準差 自清單",T.Msg.MATH_ONLIST_OPERATOR_SUM="數字總和 自清單",T.Msg.MATH_ONLIST_TOOLTIP_AVERAGE="返回清單中數值的平均值（算術平均值）。",T.Msg.MATH_ONLIST_TOOLTIP_MAX="返回清單項目中最大的數字。",T.Msg.MATH_ONLIST_TOOLTIP_MEDIAN="返回清單中數值的中位數。",T.Msg.MATH_ONLIST_TOOLTIP_MIN="返回清單項目中最小的數字。",T.Msg.MATH_ONLIST_TOOLTIP_MODE="返回一個清單中的最常見的項目。",T.Msg.MATH_ONLIST_TOOLTIP_RANDOM="從清單中返回一個隨機的項目。",T.Msg.MATH_ONLIST_TOOLTIP_STD_DEV="返回清單中數字的標準差。",T.Msg.MATH_ONLIST_TOOLTIP_SUM="返回清單中的所有數字的總和。",T.Msg.MATH_POWER_SYMBOL="^",T.Msg.MATH_RANDOM_FLOAT_HELPURL="https://zh.wikipedia.org/wiki/隨機數生成器",T.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM="隨機取分數",T.Msg.MATH_RANDOM_FLOAT_TOOLTIP="在 0.0（包含）和 1.0（不包含）之間隨機取一個數。",T.Msg.MATH_RANDOM_INT_HELPURL="https://zh.wikipedia.org/wiki/隨機數生成器",T.Msg.MATH_RANDOM_INT_TITLE="隨機取數 %1 到 %2",T.Msg.MATH_RANDOM_INT_TOOLTIP="在指定二個數之間隨機取一個數（包含）。",T.Msg.MATH_ROUND_HELPURL="https://zh.wikipedia.org/wiki/數值簡化",T.Msg.MATH_ROUND_OPERATOR_ROUND="四捨五入",T.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN="無條件捨去",T.Msg.MATH_ROUND_OPERATOR_ROUNDUP="無條件進位",T.Msg.MATH_ROUND_TOOLTIP="上捨入或下捨入數字",T.Msg.MATH_SINGLE_HELPURL="https://zh.wikipedia.org/wiki/平方根",T.Msg.MATH_SINGLE_OP_ABSOLUTE="絕對值",T.Msg.MATH_SINGLE_OP_ROOT="開根號",T.Msg.MATH_SINGLE_TOOLTIP_ABS="返回指定數字的絕對值。",T.Msg.MATH_SINGLE_TOOLTIP_EXP="返回指定數字指數的e的冪次。",T.Msg.MATH_SINGLE_TOOLTIP_LN="返回指定數字的自然對數。",T.Msg.MATH_SINGLE_TOOLTIP_LOG10="返回指定數字的對數。",T.Msg.MATH_SINGLE_TOOLTIP_NEG="返回指定數字的相反數。",T.Msg.MATH_SINGLE_TOOLTIP_POW10="返回指定數字指數的10的冪次。",T.Msg.MATH_SINGLE_TOOLTIP_ROOT="返回指定數字的平方根。",T.Msg.MATH_SUBTRACTION_SYMBOL="-",T.Msg.MATH_TRIG_ACOS="反餘弦",T.Msg.MATH_TRIG_ASIN="反正弦",T.Msg.MATH_TRIG_ATAN="反正切",T.Msg.MATH_TRIG_COS="餘弦",T.Msg.MATH_TRIG_HELPURL="https://zh.wikipedia.org/wiki/三角函數",T.Msg.MATH_TRIG_SIN="正弦",T.Msg.MATH_TRIG_TAN="正切",T.Msg.MATH_TRIG_TOOLTIP_ACOS="返回指定角度的反餘弦值(非弧度）。",T.Msg.MATH_TRIG_TOOLTIP_ASIN="返回指定角度的反正弦值(非弧度）。",T.Msg.MATH_TRIG_TOOLTIP_ATAN="返回指定角度的反正切值。",T.Msg.MATH_TRIG_TOOLTIP_COS="返回指定角度的餘弦值(非弧度）。",T.Msg.MATH_TRIG_TOOLTIP_SIN="返回指定角度的正弦值(非弧度）。",T.Msg.MATH_TRIG_TOOLTIP_TAN="返回指定角度的正切值(非弧度）。",T.Msg.NEW_COLOUR_VARIABLE="建立顏色變數…",T.Msg.NEW_NUMBER_VARIABLE="建立數值變數……",T.Msg.NEW_STRING_VARIABLE="建立字串變數……",T.Msg.NEW_VARIABLE="建立變數…",T.Msg.NEW_VARIABLE_TITLE="新變數名稱：",T.Msg.NEW_VARIABLE_TYPE_TITLE="新變數類型：",T.Msg.ORDINAL_NUMBER_SUFFIX="",T.Msg.PROCEDURES_ALLOW_STATEMENTS="允許陳述式",T.Msg.PROCEDURES_BEFORE_PARAMS="與：",T.Msg.PROCEDURES_CALLNORETURN_HELPURL="https://zh.wikipedia.org/wiki/子程式",T.Msg.PROCEDURES_CALLNORETURN_TOOLTIP="執行使用者定義的函式「%1」。",T.Msg.PROCEDURES_CALLRETURN_HELPURL="https://zh.wikipedia.org/wiki/%E5%AD%90%E7%A8%8B%E5%BA%8F",T.Msg.PROCEDURES_CALLRETURN_TOOLTIP="執行使用者定義的函式「%1」，並使用它的回傳值。",T.Msg.PROCEDURES_CALL_BEFORE_PARAMS="與：",T.Msg.PROCEDURES_CREATE_DO="建立「%1」",T.Msg.PROCEDURES_DEFNORETURN_COMMENT="描述此函式...",T.Msg.PROCEDURES_DEFNORETURN_DO="",T.Msg.PROCEDURES_DEFNORETURN_HELPURL="https://zh.wikipedia.org/wiki/子程式",T.Msg.PROCEDURES_DEFNORETURN_PROCEDURE="做些什麼",T.Msg.PROCEDURES_DEFNORETURN_TITLE="到",T.Msg.PROCEDURES_DEFNORETURN_TOOLTIP="創建一個無回傳值的函式。",T.Msg.PROCEDURES_DEFRETURN_HELPURL="https://zh.wikipedia.org/wiki/子程式",T.Msg.PROCEDURES_DEFRETURN_RETURN="返回",T.Msg.PROCEDURES_DEFRETURN_TOOLTIP="創建一個有回傳值的的函式。",T.Msg.PROCEDURES_DEF_DUPLICATE_WARNING="警告: 此函式中有重複的參數。",T.Msg.PROCEDURES_HIGHLIGHT_DEF="反白顯示函式定義",T.Msg.PROCEDURES_IFRETURN_HELPURL="http://c2.com/cgi/wiki?GuardClause",T.Msg.PROCEDURES_IFRETURN_TOOLTIP="如果值為 true，則返回第二個值。",T.Msg.PROCEDURES_IFRETURN_WARNING="警告：這個區塊只可以在定義函式時使用。",T.Msg.PROCEDURES_MUTATORARG_TITLE="輸入名稱：",T.Msg.PROCEDURES_MUTATORARG_TOOLTIP="添加一個輸入區塊到函式。",T.Msg.PROCEDURES_MUTATORCONTAINER_TITLE="輸入",T.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP="添加、刪除或重新排列此函式的輸入。",T.Msg.REDO="重做",T.Msg.REMOVE_COMMENT="移除註解",T.Msg.RENAME_VARIABLE="重新命名變數...",T.Msg.RENAME_VARIABLE_TITLE="將所有「%1」變數重新命名為：",T.Msg.TEXT_APPEND_HELPURL="https://github.com/google/blockly/wiki/Text#text-modification",T.Msg.TEXT_APPEND_TITLE="至 %1 套用文字 %2",T.Msg.TEXT_APPEND_TOOLTIP="添加一些文字到變數「%1」之後。",T.Msg.TEXT_CHANGECASE_HELPURL="https://github.com/google/blockly/wiki/Text#adjusting-text-case",T.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE="轉成英文小寫",T.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE="轉成英文首字大寫",T.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE="轉成英文大寫",T.Msg.TEXT_CHANGECASE_TOOLTIP="使用不同的大小寫複製這段文字。",T.Msg.TEXT_CHARAT_FIRST="擷取首字元",T.Msg.TEXT_CHARAT_FROM_END="取得倒數第#字元",T.Msg.TEXT_CHARAT_FROM_START="取得 字元 #",T.Msg.TEXT_CHARAT_HELPURL="https://github.com/google/blockly/wiki/Text#extracting-text",T.Msg.TEXT_CHARAT_LAST="取得 最後一個字元",T.Msg.TEXT_CHARAT_RANDOM="取得 任意字元",T.Msg.TEXT_CHARAT_TAIL="",T.Msg.TEXT_CHARAT_TITLE="在文字 %1 %2",T.Msg.TEXT_CHARAT_TOOLTIP="返回位於指定位置的字元。",T.Msg.TEXT_COUNT_HELPURL="https://github.com/google/blockly/wiki/Text#counting-substrings",T.Msg.TEXT_COUNT_MESSAGE0="在%2計算%1",T.Msg.TEXT_COUNT_TOOLTIP="計算某些文字在內容裡的出現次數。",T.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP="添加一個項目到字串中。",T.Msg.TEXT_CREATE_JOIN_TITLE_JOIN="加入",T.Msg.TEXT_CREATE_JOIN_TOOLTIP="添加、刪除或重新排列各部份以重新配置這個文字區塊。",T.Msg.TEXT_GET_SUBSTRING_END_FROM_END="到倒數第#字元",T.Msg.TEXT_GET_SUBSTRING_END_FROM_START="到 字元 #",T.Msg.TEXT_GET_SUBSTRING_END_LAST="到尾個字元",T.Msg.TEXT_GET_SUBSTRING_HELPURL="https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text",T.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT="在字串",T.Msg.TEXT_GET_SUBSTRING_START_FIRST="取得首字元",T.Msg.TEXT_GET_SUBSTRING_START_FROM_END="取得 倒數第 # 個字元",T.Msg.TEXT_GET_SUBSTRING_START_FROM_START="取得 字元 #",T.Msg.TEXT_GET_SUBSTRING_TAIL="",T.Msg.TEXT_GET_SUBSTRING_TOOLTIP="返回指定的部分文字。",T.Msg.TEXT_INDEXOF_HELPURL="https://github.com/google/blockly/wiki/Text#finding-text",T.Msg.TEXT_INDEXOF_OPERATOR_FIRST="從 最前面 索引字串",T.Msg.TEXT_INDEXOF_OPERATOR_LAST="從 最後面 索引字串",T.Msg.TEXT_INDEXOF_TITLE="在文字 %1 %2 %3",T.Msg.TEXT_INDEXOF_TOOLTIP="在字串1中檢索是否有包含字串2，如果有，返回從頭/倒數算起的索引值。如果沒有則返回 %1。",T.Msg.TEXT_ISEMPTY_HELPURL="https://github.com/google/blockly/wiki/Text#checking-for-empty-text",T.Msg.TEXT_ISEMPTY_TITLE="%1 為空",T.Msg.TEXT_ISEMPTY_TOOLTIP="如果提供的字串為空，則返回 true。",T.Msg.TEXT_JOIN_HELPURL="https://github.com/google/blockly/wiki/Text#text-creation",T.Msg.TEXT_JOIN_TITLE_CREATEWITH="字串組合",T.Msg.TEXT_JOIN_TOOLTIP="通過連接任意數量的項目來建立一串文字。",T.Msg.TEXT_LENGTH_HELPURL="https://github.com/google/blockly/wiki/Text#text-modification",T.Msg.TEXT_LENGTH_TITLE="長度 %1",T.Msg.TEXT_LENGTH_TOOLTIP="返回這串文字的字元數（包含空格）。",T.Msg.TEXT_PRINT_HELPURL="https://github.com/google/blockly/wiki/Text#printing-text",T.Msg.TEXT_PRINT_TITLE="輸出 %1",T.Msg.TEXT_PRINT_TOOLTIP="輸出指定的文字、 數字或其他值。",T.Msg.TEXT_PROMPT_HELPURL="https://github.com/google/blockly/wiki/Text#getting-input-from-the-user",T.Msg.TEXT_PROMPT_TOOLTIP_NUMBER="輸入數字",T.Msg.TEXT_PROMPT_TOOLTIP_TEXT="輸入文字",T.Msg.TEXT_PROMPT_TYPE_NUMBER="輸入 數字 並顯示提示訊息",T.Msg.TEXT_PROMPT_TYPE_TEXT="輸入 文字 並顯示提示訊息",T.Msg.TEXT_REPLACE_HELPURL="https://github.com/google/blockly/wiki/Text#replacing-substrings",T.Msg.TEXT_REPLACE_MESSAGE0="在%3以%2取代%1",T.Msg.TEXT_REPLACE_TOOLTIP="取代在內容裡的全部某些文字。",T.Msg.TEXT_REVERSE_HELPURL="https://github.com/google/blockly/wiki/Text#reversing-text",T.Msg.TEXT_REVERSE_MESSAGE0="反轉%1",T.Msg.TEXT_REVERSE_TOOLTIP="反轉排序在文字裡的字元。",T.Msg.TEXT_TEXT_HELPURL="https://zh.wikipedia.org/wiki/字串",T.Msg.TEXT_TEXT_TOOLTIP="一粒字元、一個字詞或一行字",T.Msg.TEXT_TRIM_HELPURL="https://github.com/google/blockly/wiki/Text#trimming-removing-spaces",T.Msg.TEXT_TRIM_OPERATOR_BOTH="消除兩側空格",T.Msg.TEXT_TRIM_OPERATOR_LEFT="消除左側空格",T.Msg.TEXT_TRIM_OPERATOR_RIGHT="消除右側空格",T.Msg.TEXT_TRIM_TOOLTIP="複製這段文字，同時刪除兩端多餘的空格。",T.Msg.TODAY="今天",T.Msg.UNDO="還原",T.Msg.UNNAMED_KEY="未命名",T.Msg.VARIABLES_DEFAULT_NAME="項目",T.Msg.VARIABLES_GET_CREATE_SET="建立「賦值 %1」",T.Msg.VARIABLES_GET_HELPURL="https://github.com/google/blockly/wiki/Variables#get",T.Msg.VARIABLES_GET_TOOLTIP="返回此變數的值。",T.Msg.VARIABLES_SET="賦值 %1 成 %2",T.Msg.VARIABLES_SET_CREATE_GET="建立「取得 %1」",T.Msg.VARIABLES_SET_HELPURL="https://github.com/google/blockly/wiki/Variables#set",T.Msg.VARIABLES_SET_TOOLTIP="設定此變數，好和輸入結果相等。",T.Msg.VARIABLE_ALREADY_EXISTS="已存在變數「%1」。",T.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE="已存在名為「%1」，且用於其它類型「%2」的變數。",T.Msg.VARIABLE_ALREADY_EXISTS_FOR_A_PARAMETER="A variable named '%1' already exists as a parameter in the procedure '%2'.",T.Msg.WORKSPACE_ARIA_LABEL="Blockly工作區",T.Msg.WORKSPACE_COMMENT_DEFAULT_TEXT="來說些事情...",T.Msg.CONTROLS_FOREACH_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_FOR_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF=T.Msg.CONTROLS_IF_MSG_ELSEIF,T.Msg.CONTROLS_IF_ELSE_TITLE_ELSE=T.Msg.CONTROLS_IF_MSG_ELSE,T.Msg.CONTROLS_IF_IF_TITLE_IF=T.Msg.CONTROLS_IF_MSG_IF,T.Msg.CONTROLS_IF_MSG_THEN=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.CONTROLS_WHILEUNTIL_INPUT_DO=T.Msg.CONTROLS_REPEAT_INPUT_DO,T.Msg.LISTS_CREATE_WITH_ITEM_TITLE=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.LISTS_GET_INDEX_HELPURL=T.Msg.LISTS_INDEX_OF_HELPURL,T.Msg.LISTS_GET_INDEX_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_INDEX_OF_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.LISTS_SET_INDEX_INPUT_IN_LIST=T.Msg.LISTS_INLIST,T.Msg.MATH_CHANGE_TITLE_ITEM=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.PROCEDURES_DEFRETURN_COMMENT=T.Msg.PROCEDURES_DEFNORETURN_COMMENT,T.Msg.PROCEDURES_DEFRETURN_DO=T.Msg.PROCEDURES_DEFNORETURN_DO,T.Msg.PROCEDURES_DEFRETURN_PROCEDURE=T.Msg.PROCEDURES_DEFNORETURN_PROCEDURE,T.Msg.PROCEDURES_DEFRETURN_TITLE=T.Msg.PROCEDURES_DEFNORETURN_TITLE,T.Msg.TEXT_APPEND_VARIABLE=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM=T.Msg.VARIABLES_DEFAULT_NAME,T.Msg.LOGIC_HUE="210",T.Msg.LOOPS_HUE="120",T.Msg.MATH_HUE="230",T.Msg.TEXTS_HUE="160",T.Msg.LISTS_HUE="260",T.Msg.COLOUR_HUE="20",T.Msg.VARIABLES_HUE="330",T.Msg.VARIABLES_DYNAMIC_HUE="310",T.Msg.PROCEDURES_HUE="290",T.Msg})?E.apply(_,O):E)||(T.exports=L)}}]);