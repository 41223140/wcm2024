var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/41223140/wcm2024 網站: https://41223140.github.io/wcm2024/ 簡報: https://41223140.github.io/wcm2024/reveal 網誌: https://41223140.github.io/wcm2024/blog","tags":"misc","url":"./pages/about/"},{"title":"2024 W4課程整理","text":"有關Replit、LaTeX、Git的資料整理 Replit 靜態網站檢視 需下載 main2.txt 與 static.txt, 其中包含 main2.py 與 static.py, 只要在 Shell 執行 python3 main2.py 就可以執行倉儲內的靜態網站檢視. 另一方面, 若要取消先前執行 python3 main2.py, 只需要在 Shell 頁面按下 ctrl + c, c 代表 cancle 也就是取消. 然後若要執行動態網站，可以在 Shell 執行 python3 main.py 或者使用 Replit 的 Run 按鍵. LaTeX 期中與期末的報告需要利用LaTeX, 需要下載 http://229.cycu.org/miktex-portable.7z 利用分組倉儲整理資料 https://github.com/git-guides https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources A Tutorial for Github https://git-scm.com/book/zh-tw/v2 (繁體中文, 僅翻譯至第六章) https://git-scm.com/book/zh/v2 (簡體中文) 將以上資料整理至分組網站","tags":"w4","url":"./2024-Spring-w4-blog-tutorial.html"},{"title":"2024 W3課程整理","text":"Wink建立、git指令、Codespaces 利用 Wink 建立影片 關於git常用指令。 git add . (新增) git commit -m \"內容\" (提交及名稱) git push (推送) git version (查詢目前所使用的 git 版本) git status (一般是用來檢查目前近端改版情況) 若在遠端倉儲已經改版了，就必須先git pull，將遠端資訊與自己的合併更新，才能在提交新的版本推送至倉儲。 git pull=git fetch + git merge git fetch (將遠端主機的最新內容拉到本地)，git merge (用於從指定的commit合併到當前分支) git submodule add 自己倉儲網址.git+學號 (新增分組倉儲的子模組) 如果只要取下倉儲主要內容，可以使用git clone (取一個git倉儲)克隆一份git倉儲，可能該子模組還有其他子模組，就必須加上--recurse-submodules git clone --recurse-submodules (.git 指定目錄與否) 利用 Github Codespaces 維護倉儲 git status ls -l clear git submodule add 自己倉儲網址.git空格+學號 git add . git commit -m \"add 學號 submodule\" git push 以上是Codespaces上比較常用到的指令 說明如何使用replit維護網站。","tags":"w3","url":"./2024-Spring-w3-blog-tutorial.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./2024-Spring-w1-blog-tutorial.html"}]};