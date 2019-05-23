<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ page import="java.sql.*" %>

<body>
<% 


String driver = "com.mysql.jdbc.Driver";

// URL指向要访问的数据库名test1

String url = "jdbc:mysql://127.0.0.1:3306/test";

// MySQL配置时的用户名

String user = "root";

// Java连接MySQL配置时的密码

String password = "root";

try {

// 1 加载驱动程序

Class.forName(driver);

// 2 连接数据库

Connection conn = DriverManager.getConnection(url, user, password);

// 3 用来执行SQL语句

Statement statement = conn.createStatement();

// 要执行的SQL语句

String sql = "select * from xscj";

ResultSet rs = statement.executeQuery(sql);

out.println("<table border=1>");
while (rs.next()) {
	out.println("<tr>");
out.println("<td>"+"\"xh\":\""+rs.getString("xh")+"\","+"</td>");
out.println("<td>"+"\"zf\":\""+rs.getInt("zf")+"\","+"</td>");
out.println("<td>"+"\"zy1\":\""+rs.getInt("zy1")+"\","+"</td>");
out.println("<td>"+"\"zy2\":\""+rs.getInt("zy2")+"\","+"</td>");			
out.println("<td>"+"\"zy3\":\""+rs.getInt("zy3")+"\""+"</td>");
out.println("</tr>");
}
out.println("</table>");
rs.close();
conn.close();
} catch (ClassNotFoundException e) {
System.out.println("Sorry,can`t find the Driver!");
e.printStackTrace();
} catch (SQLException e) {
e.printStackTrace();
} catch (Exception e) {
e.printStackTrace();
}

%>
</body>