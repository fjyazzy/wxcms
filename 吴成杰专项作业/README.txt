代码分为两部分：
1. Orange Can是小程序主项目，直接使用微信Web开发者工具打开既可运行。

2. OrangeCanServer是Orange Can项目中微信开放接口事例的服务端配套PHP代码，包括微信支付、微信模板消息、微信登录、微信用户信息校验与获取。

3. 对于服务器PHP代码，请自行在本地搭建一个简单的PHP服务器,并将OrangeCanServer源码放置在网站根目录下，并将目录重命名为wxopen即可。

Orange Can项目访问本地服务器的基地址为localhost:8080/wxopen。


本套代码为V1.0初始代码，在当前小程序最新0.14.140900版本下测试通过

获取最新版本源代码请访问GitHub：
https://github.com/7insummer/orange-can
https://github.com/7insummer/orange-can-server
