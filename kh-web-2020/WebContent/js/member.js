/**
 * 회원 관리에 관련된 스크립트
 * 작성자 : it여행자
 * 작성일 : 2020.12
 */
function getID(id){ return document.getElementById(id)}

var member = function(){
	let url = 'index.jsp?inc=./member/';
	
	var btnInsert = getID('btnInsert');
	var btnFind   = getID('btnFind');
	var btnSelect = getID('btnSelect');
	
	if(btnSelect != null){
		btnSelect.onclick = function(){
			var frm = document.frm_member;
			frm.action = url + 'select.jsp';
			frm.submit();
		}
	}
	
	
	if(btnFind != null){
		btnFind.onclick = function(){
			var frm = document.frm_member;
			frm.action = url + 'select.jsp';
			frm.nowPage.value = 1;
			frm.submit();
		}
	}
	
	
	//$('#btnInsert').on('click', function(){ ... });
	if(btnInsert != null){
		btnInsert.onclick = function(){
			var frm = document.frm_member;
			frm.action = url + 'insert.jsp';
			frm.submit();
		}
	}
}

function goPage(page){
	var frm = document.frm_member;
	frm.action = 'index.jsp?inc=./member/select.jsp';
	frm.nowPage.value = page;
	frm.submit();
}
function view(mid){
	var frm = document.frm_member;
	frm.action = 'index.jsp?inc=./member/view.jsp';
	frm.mid.value = mid;
	frm.submit();
}























