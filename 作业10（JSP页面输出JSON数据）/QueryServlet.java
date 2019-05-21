package com.fjsy1732.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fjsy1732.bean.Person;

/**
 * Servlet implementation class QueryServlet
 */
@WebServlet("/QueryServlet")
public class QueryServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public QueryServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset = UTF-8");
		PrintWriter out = response.getWriter();
		Connection conn = null;
		PreparedStatement pst = null;
		ResultSet  rs = null;
		String url = "jdbc:mysql://127.0.0.1:3306/test";
		String driver = "com.mysql.jdbc.Driver";
		String user = "root";
		String password = "root";
		try{
			Class.forName(driver);
			conn = DriverManager.getConnection(url,user,password);
			String sql="select * from xscj";
			pst = conn.prepareStatement(sql);
			rs = pst.executeQuery();
			List<Person> list = new ArrayList<Person>();
			while(rs.next()){
				out.println("{");
				out.println("\"xh\":\""+rs.getString("xh")+"\",");
				out.println("\"zf\":\""+rs.getString("zf")+"\"");
				out.println("}"); 
			}
			
			if(list.isEmpty()){
//				out.println("该用户不存在！");
				}else{
					request.setAttribute("plist",list);
					request.getRequestDispatcher("show.jsp").forward(request, response);
				}
				out.println("<table>");
			rs.close();
            pst.close();
			conn.close();
		}catch(SQLException ex){
			ex.printStackTrace();
		}catch(ClassNotFoundException ex){
			ex.printStackTrace();
		}finally{		
			}
			out.close();
	}
	}

