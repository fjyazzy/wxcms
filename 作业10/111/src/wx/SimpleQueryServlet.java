package wx;

//import java.beans.Statement;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.DriverManager;
import java.sql.ResultSet;

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.SQLException;

import java.util.logging.Level;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sun.istack.internal.logging.Logger;

/**
* Servlet implementation class SimpleQueryServlet
*/
@WebServlet("/SimpleQueryServlet")
public class SimpleQueryServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
     
  /**
   * @see HttpServlet#HttpServlet()
   */
  public SimpleQueryServlet() {
      super();
      // TODO Auto-generated constructor stub
  }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
  /**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset= UTF-8");	
		PrintWriter out = response.getWriter();
		Connection conn=null;
	    Statement st=null;
	    ResultSet rs=null;
	    
	    String url="jdbc:mysql://127.0.0.1:3306/test";
	    String driver= "com.mysql.jdbc.Driver";
		String user="root";
		String pass="root";

		try{
		Class.forName(driver);	
		conn=DriverManager.getConnection(url,user,pass);
		st=conn.createStatement();
		
		String sql ="select * from xscj";
		rs=st.executeQuery(sql);
		out. println("[");
		while (rs.next()){
		out.println("{");
		out.println("\"xh\":\""+rs.getString("xh") + "\",");
		out.println("\"zf\":\""+rs.getString("zf") + "\"");
		out. println("}");
		}
		out. println("]");
		rs.close();
		st.close();
		conn.close();
		}catch(SQLException ex){
			ex.printStackTrace();
		}catch(ClassNotFoundException ex){
			ex.printStackTrace();
		}finally{
			
			out.close();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
