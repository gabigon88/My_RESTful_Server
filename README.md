# My_RESTful_Server
用Node.js 架本地server接收請求，並用python發請求測試 RESTful API

## 執行指令
需要開啟兩個終端機  
1. 一個用來執行server運行  
```node
  node .\MyRESTfulServer\index.js
```

2. 一個用來直接python程式碼，發起請求  
   (python 需要安裝requests套件)
```python
  pip install requests
  python RESTful_API_requests.py
```

兩者執行的先後順序不可倒(server沒服務，怎麼發請求XD)  
執行完python程式碼後，可以分別觀看兩個終端機上的log  

## 後記
為了用Node.js架簡易server，看文章把Node.js的知識快速惡補了一下  
內容是教科書式的土法煉鋼，幾乎沒有用到其他插建  
我覺得在基本觀念的理解上還蠻有幫助的  
本篇的Node.js server是用這篇的架構再稍加修改  
[Node入門](https://www.nodebeginner.org/index-zh-tw.html#javascript-and-nodejs)  

從以前就一直有個困擾是到底怎麼寫RESTful API測試的程式  
因為網上別人現成的API不可能公開讓你測試  
後來網路上終於翻到了寫的較詳細的文章  
參考了裡面模式才終於寫出自給自足版的簡易REST server  
[API 實作(一)：規劃 RESTful API 要注意什麼](https://noob.tw/restful-api/)  
這組文章的第二篇，作者有提到Koa的插建  
稍微看了一下，如果使用Koa插建可以更快速、方便的架起REST server  
如果有架server需求的話，就別用上面土法煉鋼的模式了XD  
