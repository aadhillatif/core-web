/*! For license information please see editor.main.nls.zh-tw.js.LICENSE.txt */
define("vs/editor/editor.main.nls.zh-tw",{"vs/base/browser/ui/actionbar/actionbar":["{0} ({1})"],"vs/base/browser/ui/aria/aria":["{0} (再次出現)","{0} (出現 {1} 次)"],"vs/base/browser/ui/findinput/findInput":["輸入"],"vs/base/browser/ui/findinput/findInputCheckboxes":["大小寫須相符","全字拼寫須相符","使用規則運算式"],"vs/base/browser/ui/findinput/replaceInput":["輸入","保留案例"],"vs/base/browser/ui/inputbox/inputBox":["錯誤: {0}","警告: {0}","資訊: {0}"],"vs/base/browser/ui/keybindingLabel/keybindingLabel":["未繫結"],"vs/base/browser/ui/list/listWidget":["{0}。請使用導覽鍵來導覽。"],"vs/base/browser/ui/menu/menu":["{0} ({1})"],"vs/base/browser/ui/tree/abstractTree":["清除","在類型上停用篩選","在類型上啟用篩選","找不到任何元素","{1} 項元素中有 {0} 項相符"],"vs/base/common/keybindingLabels":["Ctrl","Shift","Alt","Windows","Ctrl","Shift","Alt","超級鍵","Control","Shift","Alt","命令","Control","Shift","Alt","Windows","Control","Shift","Alt","超級鍵"],"vs/base/common/severity":["錯誤","警告","資訊"],"vs/base/parts/quickopen/browser/quickOpenModel":["{0}，選擇器","選擇器"],"vs/base/parts/quickopen/browser/quickOpenWidget":["快速選擇器。輸入以縮小結果範圍。","快速選擇器","{0} 個結果"],"vs/editor/browser/controller/coreCommands":["全選(&&S)","復原(&&U)","取消復原(&&R)"],"vs/editor/browser/controller/textAreaHandler":["編輯器現在無法存取。按Alt+F1尋求選項"],"vs/editor/browser/widget/codeEditorWidget":["游標數已限制為 {0} 個。"],"vs/editor/browser/widget/diffEditorWidget":["因其中一個檔案過大而無法比較。"],"vs/editor/browser/widget/diffReview":["關閉","沒有任何行","1 個行","{0} 個行","{1} 的 {0} 不同: 原始為 {2}，{3}，修改後為 {4}，{5}","空白","原始 {0},修改後{1}: {2}","+ 修改後 {0}: {1}","- 原始 {0}: {1}","移至下一個差異","移至上一個差異"],"vs/editor/browser/widget/inlineDiffMargin":["複製已刪除的行","複製已刪除的行","複製已刪除的行 （{0}）","還原此變更","複製已刪除的行 （{0}）"],"vs/editor/common/config/commonEditorConfig":["編輯器","與 Tab 相等的空格數量。當 `#editor.detectIndentation#` 已開啟時，會根據檔案內容覆寫此設定。","在按 `Tab` 時插入空格。當 `#editor.detectIndentation#` 開啟時，會根據檔案內容覆寫此設定。","根據檔案內容，控制當檔案開啟時，是否自動偵測  `#editor.tabSize#` 和 `#editor.insertSpaces#`。","移除尾端自動插入的空白字元。","針對大型檔案停用部分高記憶體需求功能的特殊處理方式。","控制是否應根據文件中的單字計算自動完成。","Controls whether the semanticHighlighting is shown for the languages that support it.","即使按兩下內容或按 `Escape`，仍保持瞄孔編輯器開啟。","因效能的緣故，不會將超過此高度的行 Token 化","取消 Diff 計算前的逾時限制 (毫秒)。若無逾時，請使用 0。","控制 Diff 編輯器要並排或內嵌顯示 Diff。","控制 Diff 編輯器是否將開頭或尾端空白字元的變更顯示為 Diff。","控制 Diff 編輯器是否要為新增/移除的變更顯示 +/- 標記。"],"vs/editor/common/config/editorOptions":["編輯器將使用平台 API 以偵測螢幕助讀程式附加。","編輯器將會為螢幕助讀程式的使用方式永久地最佳化。","編輯器不會為螢幕助讀程式的使用方式進行最佳化。","控制編輯器是否應於已為螢幕助讀程式最佳化的模式中執行。","控制是否要在註解時插入空白字元。","控制複製時不選取任何項目是否會複製目前程式行。","控制 [尋找小工具] 中的搜尋字串是否來自編輯器選取項目。","永不自動開啟 [在選取範圍中尋找] (預設)","一律自動開啟 [在選取範圍中尋找]","選取多行內容時，自動開啟 [在選取範圍中尋找]。","控制尋找作業要對已選取文字或編輯器內的整個檔案執行。","控制尋找小工具是否在 macOS 上讀取或修改共用尋找剪貼簿。","控制尋找小工具是否應在編輯器頂端額外新增行。若為 true，當您可看到尋找小工具時，您的捲動範圍會超過第一行。","啟用/停用連字字型。","明確 font-feature-settings。","設定連字字型。","控制字型大小 (以像素為單位)。","顯示結果的預覽檢視 (預設)","移至主要結果並顯示預覽檢視","前往主要結果，並對其他人啟用無預覽瀏覽","此設定已淘汰，請改用 'editor.editor.gotoLocation.multipleDefinitions' 或 'editor.editor.gotoLocation.multipleImplementations' 等單獨設定。","控制 'Go to Definition' 命令在有多個目標位置存在時的行為。","控制 'Go to Type Definition' 命令在有多個目標位置存在時的行為。","控制 'Go to Declaration' 命令在有多個目標位置存在時的行為。","控制 'Go to Implementations' 命令在有多個目標位置存在時的行為。","控制 'Go to References' 命令在有多個目標位置存在時的行為。","當 'Go to Definition' 的結果為目前位置時，正在執行的替代命令識別碼。","當 'Go to Type Definition' 的結果為目前位置時，正在執行的替代命令識別碼。","當 'Go to Declaration' 的結果為目前位置時，正在執行的替代命令識別碼。","當 'Go to Implementation' 的結果為目前位置時，正在執行的替代命令識別碼。","當 'Go to Reference' 的結果為目前位置時，正在執行的替代命令識別碼。","控制是否顯示暫留。","控制暫留顯示的延遲時間 (以毫秒為單位)。","控制當滑鼠移過時，是否應保持顯示暫留。","在編輯器中啟用程式碼動作燈泡。","控制行高。使用 0 會從字型大小計算行高。","控制是否會顯示縮圖","控制要在哪端呈現縮圖。","控制何時顯示迷你地圖滑桿。","在迷你地圖中繪製的內容比例。","顯示行中的實際字元，而不是色彩區塊。","限制縮圖的寬度，最多顯示某個數目的列。","啟用快顯，在您鍵入的同時顯示參數文件和類型資訊。","控制提示功能表是否在清單結尾時循環或關閉。","允許在字串內顯示即時建議。","允許在註解中顯示即時建議。","允許在字串與註解以外之處顯示即時建議。","控制是否應在鍵入時自動顯示建議。","不顯示行號。","行號以絕對值顯示。","行號以目前游標的相對值顯示。","每 10 行顯示行號。","控制行號的顯示。","在某個數目的等寬字元之後顯示垂直尺規。如有多個尺規，就會使用多個值。若陣列空白，就不會繪製任何尺規。","插入建議而不覆寫游標旁的文字。","插入建議並覆寫游標旁的文字。","控制是否要在接受完成時覆寫字組。請注意，這取決於加入此功能的延伸模組。","控制接受完成時的非預期文字修改是否應醒目提示，例如: `insertMode` 為 `replace` 但完成只支援 `insert`。","控制對於拚錯字是否進行篩選和排序其建議","控制排序是否會偏好游標附近出現的字組。","控制記錄的建議選取項目是否在多個工作區和視窗間共用 (需要 `#editor.suggestSelection#`)。","控制程式碼片段啟用時，是否阻止啟動快速建議。","控制要在建議中顯示或隱藏圖示。","控制 IntelliSense 顯示捲軸前要顯示多少建議 (最多 15 個)。","此設定已淘汰，請改用 'editor.suggest.showKeywords' 或 'editor.suggest.showSnippets' 等單獨設定。","啟用時，IntelliSense 顯示「方法」建議。","啟用時，IntelliSense 顯示「函式」建議。","啟用時，IntelliSense 顯示「建構函式」建議。","啟用時，IntelliSense 顯示「欄位」建議。","啟用時，IntelliSense 顯示「變數」建議。","啟用時，IntelliSense 顯示「類別」建議。","啟用時，IntelliSense 顯示「結構」建議。","啟用時，IntelliSense 顯示「介面」建議。","啟用時，IntelliSense 顯示「模組」建議。","啟用時，IntelliSense 顯示「屬性」建議。","啟用時，IntelliSense 顯示「事件」建議。","啟用時，IntelliSense 顯示「運算子」建議。","啟用時，IntelliSense 顯示「單位」建議。","啟用時，IntelliSense 顯示「值」建議。","啟用時，IntelliSense 顯示「常數」建議。","啟用時，IntelliSense 顯示「列舉」建議。","啟用時，IntelliSense 顯示「enumMember」建議。","啟用時，IntelliSense 顯示「關鍵字」建議。","啟用時，IntelliSense 顯示「文字」建議。","啟用時，IntelliSense 顯示「色彩」建議。","啟用時，IntelliSense 顯示「檔案」建議。","啟用時，IntelliSense 顯示「參考」建議。","啟用時，IntelliSense 顯示「customcolor」建議。","啟用時，IntelliSense 顯示「資料夾」建議。","啟用時，IntelliSense 顯示「typeParameter」建議。","啟用時，IntelliSense 顯示「程式碼片段」建議。","控制建議小工具底下的狀態列可見度。","控制是否透過認可字元接受建議。例如在 JavaScript 中，分號 (';') 可以是接受建議並鍵入該字元的認可字元。","在建議進行文字變更時，僅透過 `Enter` 接受建議。","控制除了 'Tab' 外，是否也透過 'Enter' 接受建議。這有助於避免混淆要插入新行或接受建議。","控制編輯器中螢幕助讀程式可讀出的行數。警告: 大於預設的數目會對效能產生影響。","編輯器內容","使用語言配置確定何時自動關閉括號。","僅當游標位於空白的左側時自動關閉括號。","控制編輯器是否應在使用者新增左括弧後，自動加上右括弧。","僅在自動插入右引號或括號時，才在其上方鍵入。","控制編輯器是否應在右引號或括號上鍵入。","使用語言配置確定何時自動關閉引號。","僅當游標位於空白的左側時自動關閉引號。","控制編輯器是否應在使用者新增開始引號後，自動加上關閉引號。","編輯器不會自動插入縮排。","編輯器會保留目前行的縮排。","編輯器會保留目前行的縮排並接受語言定義的括號。","編輯器會目前行的縮排、接受語言定義的括號並叫用語言定義的特殊 onEnterRules。","編輯器會保留目前行的縮排、接受語言定義的括號並叫用語言定義的特殊 onEnterRules 並接受語言定義的 indentationRules。","控制編輯器是否應在使用者鍵入、貼上、移動或縮排行時自動調整縮排。","使用語言組態來決定何時自動環繞選取項目。","用引號括住，而非使用括弧。","用括弧括住，而非使用引號。 ","控制編輯器是否應自動環繞選取項目。","控制編輯器是否顯示 codelens。","控制編輯器是否應轉譯內嵌色彩裝飾項目與色彩選擇器。","控制語法醒目提示是否應複製到剪貼簿。","控制資料指標動畫樣式。","控制是否應啟用平滑插入點動畫。 ","控制資料指標樣式。","控制游標上下周圍的最少可見行數。在某些編輯器中稱為 'scrollOff' 或 `scrollOffset`。","只有通過鍵盤或 API 觸發時，才會施行 `cursorSurroundingLines`。","一律強制執行 `cursorSurroundingLines`","控制應施行 `cursorSurroundingLines` 的時機。","控制游標寬度，當 `#editor.cursorStyle#` 設定為 `line` 時。","控制編輯器是否允許透過拖放來移動選取項目。","按下 `Alt` 時的捲動速度乘數。","控制編輯器是否啟用程式碼摺疊功能。","控制摺疊範圍的計算方式。[自動] 會在可行的情況下使用語言專屬的摺疊策略。[縮排] 會使用以縮排為基礎的摺疊策略。","控制編輯器是否應將折疊的範圍醒目提示。","控制字型家族。","控制字型寬度。","控制編輯器是否應自動為貼上的內容設定格式。必須有可用的格式器，而且格式器應能夠為文件中的一個範圍設定格式。","控制編輯器是否應自動在鍵入後設定行的格式。","控制編輯器是否應轉譯垂直字符邊界。字符邊界最常用來進行偵錯。","控制游標是否應隱藏在概觀尺規中。","控制編輯器是否應醒目提示使用中的縮排輔助線。","控制字元間距 (以像素為單位)","控制編輯器是否應偵測連結並使其可供點選。","將符合的括號醒目提示。","要用於滑鼠滾輪捲動事件 `deltaX` 和 `deltaY` 的乘數。","使用滑鼠滾輪並按住 `Ctrl` 時，縮放編輯器的字型","在多個游標重疊時將其合併。","對應Windows和Linux的'Control'與對應 macOS 的'Command'。","對應Windows和Linux的'Alt'與對應macOS的'Option'。","用於在滑鼠新增多個游標的乘數。「移至定義」和「開啟連結」滑鼠手勢會加以適應，以避免與多個游標的乘數相衝突。[深入了解](https://code.visualstudio.com/docs/editor/codebasics#_multicursor-modifier)。","每個游標都會貼上一行文字。","每個游標都會貼上全文。","當已貼上文字的行數與游標數相符時控制貼上功能。","控制編輯器是否應醒目顯示出現的語意符號。","控制是否應在概觀尺規周圍繪製框線。","開啟預覽時聚焦樹狀","開啟時聚焦編輯器","控制要聚焦內嵌編輯器或預覽小工具中的樹系。","控制在快速建議顯示後的延遲 (以毫秒為單位)。","控制編輯器是否應顯示控制字元。","控制編輯器是否應顯示縮排輔助線。","在檔案結尾為新行時，呈現最後一行的號碼。","醒目提示裝訂邊和目前的行。","控制編輯器如何顯示目前行的醒目提示。","Render whitespace characters except for single spaces between words.","只轉譯所選文字的空白字元。","控制編輯器應如何轉譯空白字元。","控制選取範圍是否有圓角","控制編輯器水平捲動的額外字元數。","控制編輯器是否捲動到最後一行之外。","控制是否支援 Linux 主要剪貼簿。","控制編輯器是否應醒目提示與選取項目類似的相符項目。","自動隱藏摺疊控制向","控制未使用程式碼的淡出。","將程式碼片段建議顯示於其他建議的頂端。","將程式碼片段建議顯示於其他建議的下方。","將程式碼片段建議與其他建議一同顯示。","不顯示程式碼片段建議。","控制程式碼片段是否隨其他建議顯示，以及其排序方式。","控制編輯器是否會使用動畫捲動","建議小工具的字型大小。當設定為 `0` 時，則使用 `#editor.fontSize#` 值.","建議小工具的行高。當設定為 `0` 時，則使用 `#editor.lineHeight#` 值.","控制建議是否應在鍵入觸發字元時自動顯示。","一律選取第一個建議。","除非進一步鍵入選取了建議，否則選取最近的建議，例如 `console.| -> console.log`，原因是最近完成了 `log`。","根據先前已完成該建議的前置詞選取建議，例如 `co -> console` 和 `con -> const`。","控制在顯示建議清單時如何預先選取建議。","按 Tab 時，Tab 完成會插入最符合的建議。","停用 tab 鍵自動完成。","在程式碼片段的首碼相符時使用 Tab 完成。未啟用 'quickSuggestions' 時效果最佳。","啟用 tab 鍵自動完成。","插入和刪除接在定位停駐點後的空白字元。","在執行文字相關導覽或作業時要用作文字分隔符號的字元","一律不換行。","依檢視區寬度換行。","於 '#editor.wordWrapColumn#' 換行。","當檢視區縮至最小並設定 '#editor.wordWrapColumn#' 時換行。","控制如何換行。","當 `#editor.wordWrap#` 為 `wordWrapColumn` 或 `bounded` 時，控制編輯器中的資料行換行。","無縮排。換行從第 1 列開始。","換行的縮排會與父行相同。","換行的縮排為父行 +1。","換行縮排為父行 +2。","控制換行的縮排。","假設所有字元的寬度均相同。這是一種快速的演算法，適用於等寬字型，以及字符寬度相同的部分指令碼 (例如拉丁文字元)。","將外圍點計算委派給瀏覽器。這是緩慢的演算法，如果檔案較大可能會導致凍結，但在所有情況下都正常運作。","控制計算外圍點的演算法。"],"vs/editor/common/modes/modesRegistry":["純文字"],"vs/editor/common/standaloneStrings":["無選取項目","第 {0} 行，第 {1} 欄 (已選取 {2})","第 {0} 行，第 {1} 欄","{0} 個選取項目 (已選取 {1} 個字元)","{0} 個選取項目","立即將設定 `accessibilitySupport` 變更為 'on’。","立即開啟編輯器協助工具文件頁面。","在 Diff 編輯器的唯讀窗格中。","在 Diff 編輯器的窗格中。","在唯讀程式碼編輯器中","在程式碼編輯器中","若要為編輯器進行最能搭配螢幕助讀程式使用的設定，請立即按 Command+E。","若要將編輯器設定為針對搭配螢幕助讀程式使用最佳化，請立即按 Control+E。","編輯器已設定為針對搭配螢幕助讀程式使用最佳化。","已將此編輯器設定為永遠不針對搭配螢幕助讀程式使用最佳化，但目前不是此情況。","在目前的編輯器中按 Tab 鍵會將焦點移至下一個可設定焦點的元素。按 {0} 可切換此行為。","在目前的編輯器中按 Tab 鍵會將焦點移至下一個可設定焦點的元素。命令 {0} 目前無法由按鍵繫結關係觸發。","在目前的編輯器中按 Tab 鍵會插入定位字元。按 {0} 可切換此行為。","在目前的編輯器中按 Tab 鍵會插入定位字元。命令 {0} 目前無法由按鍵繫結關係觸發。","立即按 Command+H，以開啟提供編輯器協助工具相關詳細資訊的瀏覽器視窗。","立即按 Control+H，以開啟提供編輯器協助工具相關詳細資訊的瀏覽器視窗。","您可以按 Esc 鍵或 Shift+Esc 鍵來解除此工具提示並返回編輯器。","顯示協助工具說明","開發人員: 檢查權杖","移至行 {0} 和字元 {1}","移至第 {0} 行","輸入介於 1 到 {0} 之間要瀏覽的行號","鍵入 1 到 {0} 之間的字元，以瀏覽至","目前行號: {0}。前往第 {1} 行。","依序鍵入行號、選用冒號與字元號碼以瀏覽至","移至行...","{0}、{1}、命令","{0}，命令","鍵入要執行之動作的名稱","命令選擇區","{0}，符號","鍵入要瀏覽之目標識別碼的名稱","移至符號...","符號 ({0})","模組 ({0})","類別 ({0})","介面 ({0})","方法 ({0})","函式 ({0})","屬性 ({0})","變數 ({0})","變數 ({0})","建構函式 ({0})","呼叫 ({0})","編輯器內容","按 Ctrl+F1 可取得協助工具選項。","按 Alt+F1 可取得協助工具選項。","切換高對比佈景主題","已在 {1} 檔案中進行 {0} 項編輯"],"vs/editor/common/view/editorColorRegistry":["目前游標位置行的反白顯示背景色彩。","目前游標位置行之周圍框線的背景色彩。","醒目提示範圍的背景色彩，例如快速開啟並尋找功能。其不得為不透明色彩，以免隱藏底層裝飾。","反白顯示範圍周圍邊框的背景顏色。","醒目提示符號的背景色彩，相似於前往下一個定義或前往下一個/上一個符號。色彩必須透明，以免隱藏底層裝飾。","醒目提示周圍的邊界背景色彩。","編輯器游標的色彩。","編輯器游標的背景色彩。允許自訂區塊游標重疊的字元色彩。","編輯器中空白字元的色彩。","編輯器縮排輔助線的色彩。","使用中編輯器縮排輔助線的色彩。","編輯器行號的色彩。","編輯器使用中行號的色彩 ","Id 已取代。請改用 'editorLineNumber.activeForeground' 。","編輯器使用中行號的色彩 ","編輯器尺規的色彩","編輯器程式碼濾鏡的前景色彩","成對括號背景色彩","成對括號邊框色彩","預覽檢視編輯器尺規的邊框色彩.","編輯器邊框的背景顏色,包含行號與字形圖示的邊框.","編輯器中不必要 (未使用) 原始程式碼的框線色彩。","編輯器中不必要 (未使用) 原始程式碼的不透明度。例如 \"#000000c0” 會以 75% 的不透明度轉譯程式碼。針對高對比主題，使用 'editorUnnecessaryCode.border' 主題色彩可為不必要的程式碼加上底線，而不是將其變淡。","錯誤的概觀尺規標記色彩。","警示的概觀尺規標記色彩。","資訊的概觀尺規標記色彩。"],"vs/editor/contrib/bracketMatching/bracketMatching":["成對括弧的概觀尺規標記色彩。","移至方括弧","選取至括弧","前往括弧(&&B)"],"vs/editor/contrib/caretOperations/caretOperations":["將插入點左移","將插入點右移"],"vs/editor/contrib/caretOperations/transpose":["調換字母"],"vs/editor/contrib/clipboard/clipboard":["剪下","剪下(&&T)","複製","複製(&&C)","貼上","貼上(&&P)","隨語法醒目提示複製"],"vs/editor/contrib/codeAction/codeActionCommands":["要執行程式碼動作的種類。","控制要套用傳回動作的時機。","一律套用第一個傳回的程式碼動作。","如果傳回的程式碼動作是唯一動作，則加以套用。","不要套用傳回的程式碼動作。","控制是否僅應傳回偏好的程式碼動作。","套用程式碼動作時發生未知的錯誤","快速修復...","沒有可用的程式碼操作",'沒有 "{0}" 的偏好程式碼動作','沒有 "{0}" 可用的程式碼動作',"沒有可用的偏好程式碼動作","沒有可用的程式碼操作","重構...","沒有適用於 '{0}' 的偏好重構。",'沒有可用的 "{0}" 重構',"沒有可用的偏好重構","沒有可用的重構","來源動作...","沒有適用於 '{0}' 的偏好來源動作",'沒有 "{0}" 可用的來源動作',"沒有可用的偏好來源動作","沒有可用的來源動作","組織匯入","沒有任何可用的組織匯入動作","全部修正","沒有全部修正動作可用","自動修正...","沒有可用的自動修正"],"vs/editor/contrib/codeAction/lightBulbWidget":["顯示修正程式。偏好的修正程式可用 ({0})","顯示修正 ({0})","顯示修正"],"vs/editor/contrib/comment/comment":["切換行註解","切換行註解(&&T)","加入行註解","移除行註解","切換區塊註解","切換區塊註解(&&B)"],"vs/editor/contrib/contextmenu/contextmenu":["顯示編輯器內容功能表"],"vs/editor/contrib/cursorUndo/cursorUndo":["游標復原","游標重做"],"vs/editor/contrib/documentSymbols/outlineTree":["陣列符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","布林值符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","類別符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","色彩符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","常數符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","建構函式符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","列舉值符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","列舉值成員符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","事件符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","欄位符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","檔案符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","資料夾符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","函式符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","介面符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","索引鍵符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","關鍵字符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","方法符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","模組符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","命名空間符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","Null 符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","數字符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","物件符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","運算子符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","套件符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","屬性符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","參考符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","程式碼片段符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","字串符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","結構符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","文字符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","型別參數符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","單位符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。","變數符號的前景色彩。這些符號會出現在大綱、階層連結和建議小工具中。"],"vs/editor/contrib/find/findController":["尋找","尋找(&&F)","尋找選取項目","尋找下一個","尋找下一個","尋找上一個","尋找上一個","尋找下一個選取項目","尋找上一個選取項目","取代","取代(&&R)"],"vs/editor/contrib/find/findWidget":["尋找","尋找","上一個符合項目","下一個符合項目","在選取範圍中尋找","關閉","取代","取代","取代","全部取代","切換取代模式","僅反白顯示前 {0} 筆結果，但所有尋找作業會在完整文字上執行。","{1} 的 {0}","查無結果","找到 {0}","已找到 {1} 的 {0}","於 {2} 找到 {1} 的 {0}","已找到 {1} 的 {0}","Ctrl+Enter 現在會插入分行符號，而不會全部取代。您可以修改 editor.action.replaceAll 的按鍵繫結關係，以覆寫此行為。"],"vs/editor/contrib/folding/folding":["展開","以遞迴方式展開","摺疊","切換摺疊","以遞迴方式摺疊","摺疊全部區塊註解","摺疊所有區域","展開所有區域","全部摺疊","全部展開","摺疊層級 {0}","編輯器選取範圍的色彩。"],"vs/editor/contrib/fontZoom/fontZoom":["編輯器字體放大","編輯器字型縮小","編輯器字體重設縮放"],"vs/editor/contrib/format/format":["在行 {0} 編輯了 1 項格式","在行 {1} 編輯了 {0} 項格式","在行 {0} 與行 {1} 之間編輯了 1 項格式","在行 {1} 與行 {2} 之間編輯了 {0} 項格式"],"vs/editor/contrib/format/formatActions":["格式化文件","格式化選取範圍"],"vs/editor/contrib/gotoError/gotoError":["移至下一個問題 (錯誤, 警告, 資訊)","移至上一個問題 (錯誤, 警告, 資訊)","移至檔案裡面的下一個問題 (錯誤, 警告, 資訊)","移至檔案裡面的上一個問題 (錯誤, 警告, 資訊)","下一個問題(&&P)","前一個問題(&&P)"],"vs/editor/contrib/gotoError/gotoErrorWidget":["{0} 個問題 (共 {1} 個)","{0} 個問題 (共 {1} 個)","編輯器標記導覽小工具錯誤的色彩。","編輯器標記導覽小工具警告的色彩。","編輯器標記導覽小工具資訊的色彩","編輯器標記導覽小工具的背景。"],"vs/editor/contrib/gotoSymbol/goToCommands":["查看","定義","找不到 '{0}' 的定義","找不到任何定義","移至定義","移至定義(&&D)","在一側開啟定義","預覽定義","宣告","找不到 '{0}' 的宣告 ","找不到任何宣告","移至宣告","前往宣告(&&D)","找不到 '{0}' 的宣告 ","找不到任何宣告","預覽宣告","類型定義","找不到 '{0}' 的任何類型定義","找不到任何類型定義","移至類型定義","前往類型定義(&&T)","預覽類型定義","實作","找不到 '{0}' 的任何實作","找不到任何實作","前往實作","前往實作(&&I)","查看實作",'未找到 "{0}" 的參考',"未找到參考","前往參考","前往參考(&&R)","參考","預覽參考","參考","移至任何符號","位置",'"{0}" 無結果',"參考"],"vs/editor/contrib/gotoSymbol/link/goToDefinitionAtPosition":["按一下以顯示 {0} 項定義。"],"vs/editor/contrib/gotoSymbol/peek/referencesController":["正在載入...","{0} ({1})"],"vs/editor/contrib/gotoSymbol/peek/referencesTree":["無法解析檔案。","{0} 個參考","{0} 個參考"],"vs/editor/contrib/gotoSymbol/peek/referencesWidget":["無法預覽","參考","查無結果","參考"],"vs/editor/contrib/gotoSymbol/referencesModel":["個符號位於 {0} 中的第 {1} 行第 {2} 欄","1 個符號位於 {0}, 完整路徑 {1}","{0} 個符號位於 {1}, 完整路徑 {2}","找不到結果","在 {0} 中找到 1 個符號","在 {1} 中找到 {0} 個符號","在 {1} 個檔案中找到 {0} 個符號"],"vs/editor/contrib/gotoSymbol/symbolNavigation":["{1} 的符號 {0}，{2} 為下一個","{1} 的符號 {0}"],"vs/editor/contrib/hover/hover":["動態顯示","顯示定義預覽懸停"],"vs/editor/contrib/hover/modesContentHover":["正在載入...","瞄孔問題","正在檢查快速修正...","沒有可用的快速修正","快速修復..."],"vs/editor/contrib/inPlaceReplace/inPlaceReplace":["以上一個值取代","以下一個值取代"],"vs/editor/contrib/linesOperations/linesOperations":["將行向上複製","將行向上複製(&&C)","將行向下複製","將行向下複製(&&P)","重複選取項目","重複選取項目(&D)","上移一行","上移一行(&&V)","下移一行","下移一行(&&L)","遞增排序行","遞減排序行","修剪尾端空白","刪除行","縮排行","凸排行","在上方插入行","在下方插入行","左邊全部刪除","刪除所有右方項目","連接線","轉置游標周圍的字元數","轉換到大寫","轉換到小寫","轉換為字首大寫"],"vs/editor/contrib/links/links":["執行命令","追蹤連結","cmd + 按一下","ctrl + 按一下","選項 + 按一下","alt + 按一下","因為此連結的格式不正確，所以無法開啟: {0}","因為此連結目標遺失，所以無法開啟。","開啟連結"],"vs/editor/contrib/message/messageController":["無法在唯讀編輯器中編輯"],"vs/editor/contrib/multicursor/multicursor":["在上方加入游標","在上方新增游標(&&A)","在下方加入游標","在下方新增游標(&&D)","在行尾新增游標","在行尾新增游標(&&U)","將游標新增到底部 ","將游標新增到頂部","將選取項目加入下一個找到的相符項","新增下一個項目(&&N)","將選取項目加入前一個找到的相符項中","新增上一個項目(&&R)","將最後一個選擇項目移至下一個找到的相符項","將最後一個選擇項目移至前一個找到的相符項","選取所有找到的相符項目","選取所有項目(&&O)","變更所有發生次數"],"vs/editor/contrib/parameterHints/parameterHints":["觸發參數提示"],"vs/editor/contrib/parameterHints/parameterHintsWidget":["{0}，提示"],"vs/editor/contrib/peekView/peekView":["關閉","預覽檢視標題區域的背景色彩。","預覽檢視標題的色彩。","預覽檢視標題資訊的色彩。","預覽檢視之框線與箭頭的色彩。","預覽檢視中結果清單的背景色彩。","預覽檢視結果列表中行節點的前景色彩","預覽檢視結果列表中檔案節點的前景色彩","在預覽檢視之結果清單中選取項目時的背景色彩。","在預覽檢視之結果清單中選取項目時的前景色彩。","預覽檢視編輯器的背景色彩。","預覽檢視編輯器邊框(含行號或字形圖示)的背景色彩。","在預覽檢視編輯器中比對時的反白顯示色彩。","預覽檢視編輯器中比對時的反白顯示色彩。","在預覽檢視編輯器中比對時的反白顯示邊界。"],"vs/editor/contrib/rename/rename":["沒有結果。","解析重新命名位置時發生未知的錯誤","正在重新命名 '{0}'","已成功將 '{0}' 重新命名為 '{1}'。摘要: {2}","重命名無法套用編輯","重新命名無法計算編輯","重新命名符號","啟用/停用重新命名前先預覽變更的功能"],"vs/editor/contrib/rename/renameInputField":["為輸入重新命名。請鍵入新名稱，然後按 Enter 以認可。","{0} 以重新命名，{1} 以預覽"],"vs/editor/contrib/smartSelect/smartSelect":["展開選取項目","展開選取範圍(&&E)","縮小選取項目","壓縮選取範圍(&&S)"],"vs/editor/contrib/snippet/snippetVariables":["星期天","星期一","星期二","星期三","星期四","星期五","星期六","週日","週一","週二","週三","週四","週五","週六","一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月","1月","2月","3 月","4月","五月","6月","7 月","8 月","9 月","10 月","11 月","12 月"],"vs/editor/contrib/suggest/suggestController":["接受 ‘{0}’ 進行了其他 {1} 項編輯","觸發建議"],"vs/editor/contrib/suggest/suggestWidget":["建議小工具的背景色彩。","建議小工具的邊界色彩。","建議小工具的前景色彩。","建議小工具中所選項目的背景色彩。","建議小工具中相符醒目提示的色彩。","進一步了解...{0}","簡易說明...{0}","正在載入...","正在載入...","無建議。","{0} 以取得較少...","{0} 以獲得更多...","項目 {0}，文件: {1}","{0} 以插入，{1} 以取代","{0} 以取代，{1} 以插入","{0} 以接受"],"vs/editor/contrib/toggleTabFocusMode/toggleTabFocusMode":["切換 TAB 鍵移動焦點","按 Tab 現在會將焦點移至下一個可設定焦點的元素。","按 Tab 現在會插入定位字元。"],"vs/editor/contrib/tokenization/tokenization":["開發人員: 強制重新置放"],"vs/editor/contrib/wordHighlighter/wordHighlighter":["讀取權限期間 (如讀取變數) 符號的背景色彩。其不得為不透明色彩，以免隱藏底層裝飾。","寫入權限期間 (如寫入變數) 符號的背景色彩。其不得為不透明色彩，以免隱藏底層裝飾。","讀取存取期間 (例如讀取變數時) 符號的邊框顏色。","寫入存取期間 (例如寫入變數時) 符號的邊框顏色。 ","符號醒目提示的概觀尺規標記色彩。其不得為不透明色彩，以免隱藏底層裝飾。","寫入權限符號醒目提示的概觀尺規標記色彩。其不得為不透明色彩，以免隱藏底層裝飾。","移至下一個反白符號","移至上一個反白符號","觸發符號反白顯示"],"vs/platform/configuration/common/configurationRegistry":["預設組態覆寫","設定要針對語言覆寫的編輯器設定。","這個設定不支援以語言為根據的組態。","無法註冊 '{0}'。這符合用於描述語言專用編輯器設定的屬性模式 '\\\\[.*\\\\]$'。請使用 'configurationDefaults' 貢獻。","無法註冊 '{0}'。此屬性已經註冊。"],"vs/platform/keybinding/common/abstractKeybindingService":["已按下 ({0})。請等待第二個套索鍵...","按鍵組合 ({0}, {1}) 不是命令。"],"vs/platform/list/browser/listService":["工作台","對應Windows和Linux的'Control'與對應 macOS 的'Command'。","對應Windows和Linux的'Alt'與對應macOS的'Option'。","透過滑鼠多選，用於在樹狀目錄與清單中新增項目的輔助按鍵 (例如在總管中開啟編輯器 及 SCM 檢視)。'在側邊開啟' 滑鼠手勢 (若支援) 將會適應以避免和多選輔助按鍵衝突。","控制如何使用滑鼠在樹狀目錄與清單中開啟項目 (若有支援)。對於樹狀目錄中具子系的父系而言，此設定會控制應以滑鼠按一下或按兩下展開父系。注意，某些樹狀目錄或清單若不適用此設定則會予以忽略。","控制在工作台中，清單和樹狀結構是否支援水平捲動。","控制是否支援工作台中的水平滾動。","已淘汰此設定，請改用 ‘{0}’。","控制樹狀結構縮排 (像素)。","控制樹系是否應轉譯縮排輔助線。","比對按鍵輸入的簡易按鍵瀏覽焦點元素。僅比對前置詞。","醒目提示鍵盤瀏覽會醒目提示符合鍵盤輸入的元素。進一步向上或向下瀏覽只會周遊醒目提示的元素。","篩選鍵盤瀏覽會篩掉並隱藏不符合鍵盤輸入的所有元素。","控制 Workbench 中清單和樹狀結構的鍵盤瀏覽樣式。可以是簡易的、醒目提示和篩選。","控制是否只要鍵入即可自動觸發清單和樹狀結構中的鍵盤瀏覽。若設為 `false`，只有在執行 `list.toggleKeyboardNavigation` 命令時，才會觸發鍵盤瀏覽，您可為其指定鍵盤快速鍵。"],"vs/platform/markers/common/markers":["錯誤","警告","資訊"],"vs/platform/theme/common/colorRegistry":["整體的前景色彩。僅當未被任何元件覆疊時，才會使用此色彩。","整體錯誤訊息的前景色彩。僅當未被任何元件覆蓋時，才會使用此色彩。","焦點項目的整體框線色彩。只在沒有任何元件覆寫此色彩時，才會加以使用。","項目周圍的額外框線，可將項目從其他項目中區隔出來以提高對比。","使用中項目周圍的額外邊界，可將項目從其他項目中區隔出來以提高對比。","內文連結的前景色彩","文字區塊的背景顏色。","小工具的陰影色彩，例如編輯器中的尋找/取代。","輸入方塊的背景。","輸入方塊的前景。","輸入方塊的框線。","輸入欄位中可使用之項目的框線色彩。","在輸入欄位中所啟動選項的背景色彩。","資訊嚴重性的輸入驗證背景色彩。","資訊嚴重性的輸入驗證前景色彩。","資訊嚴重性的輸入驗證邊界色彩。","警告嚴重性的輸入驗證背景色彩。","警告嚴重性的輸入驗證前景色彩。","警告嚴重性的輸入驗證邊界色彩。","錯誤嚴重性的輸入驗證背景色彩。","錯誤嚴重性的輸入驗證前景色彩。","錯誤嚴重性的輸入驗證邊界色彩。","下拉式清單的背景。","下拉式清單的前景。","分組標籤的快速選擇器色彩。","分組邊界的快速選擇器色彩。","標記的背景顏色。標記為小型的訊息標籤,例如搜尋結果的數量。","標記的前景顏色。標記為小型的訊息標籤,例如搜尋結果的數量。","指出在捲動該檢視的捲軸陰影。","捲軸滑桿的背景顏色。","動態顯示時捲軸滑桿的背景顏色。","當點擊時捲軸滑桿的背景顏色。","長時間運行進度條的背景色彩.","編輯器內錯誤提示線的前景色彩.","編輯器中錯誤方塊的框線色彩。","編輯器內警告提示線的前景色彩.","編輯器中的警告方塊框線色彩。","編輯器內資訊提示線的前景色彩","編輯器中的資訊方塊框線色彩。","編輯器內提示訊息的提示線前景色彩","編輯器中的提示方塊框線色彩。","編輯器的背景色彩。","編輯器的預設前景色彩。","編輯器小工具的背景色彩，例如尋找/取代。","編輯器小工具 (例如尋找/取代) 的前景色彩。","編輯器小工具的邊界色彩。小工具選擇擁有邊界或色彩未被小工具覆寫時，才會使用色彩。","編輯器小工具之調整大小列的邊界色彩。只在小工具選擇具有調整大小邊界且未覆寫該色彩時，才使用該色彩。\n","編輯器選取範圍的色彩。","為選取的文字顏色高對比化","非使用中編輯器內的選取項目色彩。其不得為不透明色彩，以免隱藏底層裝飾。","與選取項目內容相同之區域的色彩。其不得為不透明色彩，以免隱藏底層裝飾。","選取時，內容相同之區域的框線色彩。","符合目前搜尋的色彩。","其他搜尋相符項目的色彩。其不得為不透明色彩，以免隱藏底層裝飾。","限制搜尋之範圍的色彩。其不得為不透明色彩，以免隱藏底層裝飾。","符合目前搜尋的框線色彩。","符合其他搜尋的框線色彩。","限制搜尋之範圍的框線色彩。其不得為不透明色彩，以免隱藏底層裝飾。","在顯示動態顯示的文字下醒目提示。其不得為不透明色彩，以免隱藏底層裝飾。","編輯器動態顯示的背景色彩。","編輯器動態顯示的前景色彩。","編輯器動態顯示的框線色彩。","編輯器暫留狀態列的背景色彩。","使用中之連結的色彩。","用於燈泡動作圖示的色彩。","用於燈泡自動修正動作圖示的色彩。","已插入文字的背景色彩。其不得為不透明色彩，以免隱藏底層裝飾。","已移除文字的背景色彩。其不得為不透明色彩，以免隱藏底層裝飾。","插入的文字外框色彩。","移除的文字外框色彩。","兩個文字編輯器之間的框線色彩。","當清單/樹狀為使用中狀態時，焦點項目的清單/樹狀背景色彩。使用中的清單/樹狀有鍵盤焦點，非使用中者則沒有。","當清單/樹狀為使用中狀態時，焦點項目的清單/樹狀前景色彩。使用中的清單/樹狀有鍵盤焦點，非使用中者則沒有。","當清單/樹狀為使用中狀態時，所選項目的清單/樹狀背景色彩。使用中的清單/樹狀有鍵盤焦點，非使用中者則沒有。","當清單/樹狀為使用中狀態時，所選項目的清單/樹狀前景色彩。使用中的清單/樹狀有鍵盤焦點，非使用中者則沒有。","當清單/樹狀為非使用中狀態時，所選項目的清單/樹狀背景色彩。使用中的清單/樹狀有鍵盤焦點，非使用中者則沒有。","當清單/樹狀為使用中狀態時，所選項目的清單/樹狀前景色彩。使用中的清單/樹狀有鍵盤焦點，非使用中則沒有。","當清單/樹狀為非使用中狀態時，焦點項目的清單/樹狀背景色彩。使用中的清單/樹狀有鍵盤焦點，非使用中者則沒有。","使用滑鼠暫留在項目時的清單/樹狀背景。","滑鼠暫留在項目時的清單/樹狀前景。","使用滑鼠四處移動項目時的清單/樹狀拖放背景。","在清單/樹狀內搜尋時，相符醒目提示的清單/樹狀前景色彩。","清單和樹狀結構中類型篩選小工具的背景色彩。","清單和樹狀結構中類型篩選小工具的大綱色彩。","在沒有相符項目時，清單和樹狀結構中類型篩選小工具的大綱色彩。","縮排輔助線的樹狀筆觸色彩。","功能表的邊框色彩。","功能表項目的前景色彩。","功能表項目的背景色彩。","功能表中所選功能表項目的前景色彩。","功能表中所選功能表項目的背景色彩。","功能表中所選功能表項目的框線色彩。","功能表中分隔線功能表項目的色彩。","程式碼片段定位停駐點的反白顯示背景色彩。","程式碼片段定位停駐點的反白顯示邊界色彩。","程式碼片段最終定位停駐點的反白顯示背景色彩。","程式碼片段最終定位停駐點的反白顯示邊界色彩。","尋找相符項目的概觀尺規標記色彩。其不得為不透明色彩，以免隱藏底層裝飾。","選取項目醒目提示的概觀尺規標記。其不得為不透明色彩，以免隱藏底層裝飾。","用於尋找相符項目的縮圖標記色彩。","編輯器選取範圍的迷你地圖標記色彩。","錯誤的縮圖標記色彩。","警告的縮圖標記色彩。","用於問題錯誤圖示的色彩。","用於問題警告圖示的色彩。","用於問題資訊圖示的色彩。"]});