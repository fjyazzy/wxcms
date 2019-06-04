## 本手册用于以下班级提交作业之说明<br>
** 适用班级：计算机1732，计算机1733 <br>
---
**1. 注册Github<br>**
   1). 登录https://github.com 注册自己的 gitHub帐号 。 (点首页sign up功能即可注册)<br>
   2). 搜索fjyazzy/wxTest 远程数据仓库。 （在github网站任意网页，点左上角的搜索框，输入 "fjyazzy/wxTest"）即可搜索<br>
   3). 找到fjyazzy/wxTest 远程数据仓库后，打开该仓库，点击页面右上角的"Fork" 按钮，即可克隆本仓库到自己的远程仓库。<br>
   4). 这里假设你的账号为fjyazzy163,那么你就拥有了fjyazzy163/wxTest这个远程代码仓库，目前这个仓库代码和fjyazzy/wxTest上面的代码完全一样。<br>
**2. 下载本地代码仓库管理<br>**
   1). 下载git-2.21.0-64-bit.exe<br>
   2). 一路next 安装git-2.21.0-64-bit.exe文件, 安装成功后，右键点任何文件夹，都会多出现一行菜单 "Git Bash Here"<br>
   3). 在你的D盘新建wxTest文件夹。<br>
   4). 打开wxTest文件夹。<br>
   5). 右键点击文件夹的空白区域，选择 "Git Bash Here"命令，弹出一个命令行对话窗口（黑色的）。<br>
   6). 在命令框中，首先输入:  git init<br>
   7). 执行完成后，会在wxTest文件夹里面，多出一个.git的文件夹<br>
   8). 继续输入： git remote add wx https://github.com/fjyazzy163/wxTest<br>
      **特别注意： 要把命令行中的<font color=red>fjyazzy163</font>换成你的github帐号<br>**
       本行输入完成后，系统没有任何提示,表示执行成功。<br>
   9). 继续输入：git pull wx master<br>
       git程序开始重服务器上下载代码，下载成功后就是一个完整的微信小程序项目代码。
**3. 第一次作业提交(本次作业占期末总成绩5分)<br>**
    1). 作业内容：收集10个微信小程序或者APP首页<br>
    2). 操作步骤：<br>
        a). 在各个网站收集10个微信小程序,然后分别以 "首页1.jpg", "首页2.jpg",... "首页10.jpg"的形式存放到d:\wxTest\images文件夹下面。<br>
        b). 调出git命令执行框（就是那个黑框框），输入命令：git add . (注意点不要漏了)<br>
           本行输入完成后，系统没有任何提示,表示执行成功。<br>
        c). 继续输入：git commit -m "第一次作业，提交图片"<br>
           本行输入正确，系统会在屏幕上提示最新修改的十个文件，因为不支持中文，你可能看到个别乱码，但没有影响<br>
        d). 由于本地Git仓库和Github仓库之间的传输是通过SSH加密的，所以连接时需要设置一下：首先创建SSH KEY。先看一下你C:\users\Admnistrator用户目录下有没有.ssh目录，有的话看下里面有没有id_rsa和id_rsa.pub这两个文件，有就跳到下一步，没有就通过下面命令创建:<br>
         $ ssh-keygen -t rsa -C "youremail@example.com" <br>
         **注意："youremail@example.com"是你注册github帐号的邮箱，命令行字母有区分大小写！！<br>**
          然后一路回车。这时你就会在用户下的.ssh目录里找到id_rsa和id_rsa.pub这两个文件<br>
        e). 登录Github,找到右上角的图标，打开点进里面的Settings，再选中里面的SSH and GPG KEYS，点击右上角的New SSH key，然后Title里面随便填，再把刚才id_rsa.pub里面的内容复制到Title下面的Key内容框里面，最后点击Add SSH key，这样就完成了SSH Key的加密。<br>
          
          
        继续输入：git push wx master<br>
       
   
   


