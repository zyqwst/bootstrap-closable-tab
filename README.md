# bootstrap-closable-tab
基于bootstrap ，支持关闭的标签页
### 使用方法
1. 引入bootstrap-closable-tab.js文件
2. 在需要显示标签的位置如下代码
```
    <!-- 此处是相关代码 -->
    <ul class="nav nav-tabs" role="tablist">
    </ul>
    <div class="tab-content" style="width:100%;">
    </div>
    <!-- 相关代码结束 -->
```
3. 添加标签

> 执行bootstrap-closable-tab.js中的方法closableTab.addTab(item)<br> 
参数item是一个数组 {id,name,url,closable} <br>
id tab标签的id，不允许重复；<br>
name tab便签上面显示的标题；<br>
tab 标签页里面要加载的页面（不支持跨域访问);<br>
closalbe boolean类型，是否显示关闭图标。<br>
4. Example
```
    var item = {'id':'1','name':'首页','url':'son.html','closable':false};
    closableTab.addTab(item);
```
