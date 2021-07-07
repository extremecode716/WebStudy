package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;
import java.util.Map;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

import model.MemberBean;
import model.ZipcodeBean2;
import util.SqlMapLocator;

public class MemberDAOImpl {//ibatis 오라클 디비 연동 클래스
	
	Connection con=null;
	PreparedStatement pstmt=null;
	Statement stmt=null;
	ResultSet rs=null;
	DataSource ds=null;
	String sql=null; 
	
	public MemberDAOImpl(){
		try{
			Context initCtx=new InitialContext();
			Context envCtx=(Context)initCtx.lookup("java:comp/env");
			ds=(DataSource)envCtx.lookup("jdbc/orcl");
		}catch(Exception e){
			e.printStackTrace();
		}
     }

	/***** 아이디 중복 체크 *****/
	public int checkMemberId(String id){
		int re=-1;
		
		sql="select join_code from join_member where join_id=?";
		try{
			con=ds.getConnection();
			pstmt=con.prepareStatement(sql);
			pstmt.setString(1,id);
			rs=pstmt.executeQuery();
			if(rs.next()){//레코드가 있으면
				re=1;				
			}
			
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			try{
				if(rs != null) rs.close();
				if(pstmt != null) pstmt.close();
				if(con != null) con.close();
			}catch(Exception e){
				e.printStackTrace();
			}
		}
		return re;
	}
	/***** 아이디 중복 체크 끝 *****/

	/*우편 검색*/
	public List<ZipcodeBean2> findZipcode(String dong) throws SQLException{
		List<ZipcodeBean2> list=SqlMapLocator.getMapper().queryForList(
				"zipcodeList",dong);
		//월말평가:디비로부터 한개 이상 레코드를 검색 할때 사용하는 ibatis 메서드:queryForList()
		//디비로 부터 한개 레코드 검색할때 사용하는 ibatis 메서드:queryForObject()
		//레코드 삽입할때 사용하는 ibatis메서드:insert()
		//레코드 수정할때 사용하는 ibatis메서드:update()
		//레코드 삭제할때 사용하는 ibatis메서드:delete()
		return list;
	}

	/* 비번 검색 */
	public MemberBean findpwd(Map pm) throws SQLException{
	     return (MemberBean)SqlMapLocator.getMapper().queryForObject(
	    		 "pwd_find",pm);
		}

	/*회원저장*/
	public void insertMember(MemberBean m) throws SQLException{
	     SqlMapLocator.getMapper().insert("member_join",m);		
	}

	/*로그인 인증 체크 */
	public MemberBean userCheck(String id) throws SQLException{
		return (MemberBean)SqlMapLocator.getMapper().queryForObject(
				"login_check",id);
	}
    /*회원수정*/
	public void updateMember(MemberBean member) throws SQLException{
		SqlMapLocator.getMapper().update("member_edit",member);		
	}
	/*회원삭제*/
	public void deleteMember(MemberBean delm) throws SQLException{
		SqlMapLocator.getMapper().update("member_delete",delm);		
	}
}



