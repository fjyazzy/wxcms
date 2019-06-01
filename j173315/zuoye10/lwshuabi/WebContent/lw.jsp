<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
response.setContentType("text/html;charset=utf-8");
String username=request.getParameter("username");
String userpass=request.getParameter("userpass");
Connection conn=null;
PreparedStatement prst=null;
ResultSet rs=null;

String url="jdbc:mysql://localhost:3306//FriendDb";
String user="root";
String pass="zd.2018";
String driver="com.mysql.jdbc.Driver";

try{
Class.forNmae(driver);
conn=DriverManager.getConnection(url,user,pass);
String sql="select * from tb_user where username=? and userpass=?";
prst=conn.preareStatement(sql);
prst.setString(1, username);
prst.setString(2, userpass);
rs=prst.executeQuery();
if(rs.next()){
request.getSession().setAttribute("username",username);
request.getRequestDispatcher("index.jsp").forward(request,response);
}else{
request.setAttribute("msg","用户或密码错误，请重新登录");
request.getRequestDispatcher("login.jsp").forward(request,response);
}
rs.close();
prst.close();
conn.close();
}
catch(Exception ex){
ex.prinStackTrace();
}
}

</body>
</html>