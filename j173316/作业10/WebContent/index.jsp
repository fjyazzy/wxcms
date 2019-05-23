<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
  <h1>对数据库进行写操作的练习</h1>
  <a href="ShowAIIPersonServlet">查看数据库中现有数据</a>
  <hr/>
  在PERSON表中插入一条记录，请输入该表的所有信息
  <form method="POST" action="InsertHandleServlet" name=frm1>
   ID:<input type="text" name="id" value=""/><br/>
   NAME:<input type="text" name="name" value=""/><br/>
   PWD:<input type="password" name="pwd" value=""/><br/>
   GENDER:<input type="radio" name="gender" value="男" checked/>男
          <input type="radio" name="gender" value="女" checked/>女
          <br>
          <input type="submit" value="插入记录"/>
  
  </form>
  <hr/>
   在PERSON表中修改一条记录，请输入该person的ID
   <form method="post" action="UpdateHandleServlet" name=frm2>
     ID:<input type="text" name="id" value=""/>
        <input type="submit" value="更新记录"/>
    
   </form>
   <hr/>
   在PERSON表中删除一条记录，请输入该person的ID
   <form method="post" action="DeleteHandleServlet" name=frm3>
     ID:<input type="text" name="id" value=""/>
        <input type="submit" value="删除记录"/>
    
   </form>
   
</body>
</html>