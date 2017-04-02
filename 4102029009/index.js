divnode=document.getElementById("display");
var questions=[];
var answers=[];
function gogo(){
	questions=[];
	answers=[];
	divnode=document.getElementById("display");
	while (divnode.firstChild) {
		divnode.removeChild(divnode.firstChild);
	}
	pnodes=document.getElementsByTagName("p");
	for(var i=0;i<pnodes.length;i++){
		questions[i]=pnodes[i].firstChild.nodeValue;
		inputnodes=pnodes[i].getElementsByTagName("input");
		textareanodes=pnodes[i].getElementsByTagName("textarea");
		if(inputnodes.length){
			switch(inputnodes[0].getAttribute("type")){
				case "text":
					answers[i]=inputnodes[0].value;
					break;
				case "date":
					answers[i]=inputnodes[0].value;
					break;
				case "radio":
					for(var j=0;j<inputnodes.length;j++){
						if(inputnodes[j].checked) answers[i]=inputnodes[j].value;
					}
					break;
				case "checkbox":
					hobby="";
					for(var j=0;j<inputnodes.length;j++){
						if(inputnodes[j].checked) hobby+=inputnodes[j].value+" ";
					}
					answers[i]=hobby;
					break;
				default:
					answers[i]=inputnodes[0].value;
			}
		}else answers[i]=textareanodes[0].value;
	}
	err="";
	for(var i=0;i<questions.length;i++){
		if(answers[i]=="") err+="--請輸入"+questions[i]+"--<br>";
	}
	if(err=="")	gogo2();
	else document.getElementById("error").innerHTML=err;
}
function gogo2(){
	//questions=["姓名","生日","性別","興趣","自傳"];
	//answers=[form.name1.value,form.bir.value,form.gender.value,hobby,form.textarea.value];
	document.getElementById("error").innerHTML="";
	tablenode=document.createElement("table");
	divnode.appendChild(tablenode);
	tablenode.setAttribute("border", "1");
	for(var i=0;i<questions.length;i++){
		trnode=document.createElement("tr");
		td1=document.createElement("td");
		td1.setAttribute("onmouseover", "this.style.color='red',this.style.fontStyle='italic'");
		td1.setAttribute("onmouseout", "this.style.color='initial',this.style.fontStyle='initial'");
		tdx1=document.createTextNode(questions[i]);
		td2=document.createElement("td");
		td2.setAttribute("onmouseover", "this.style.color='blue',this.style.fontWeight='bold'");
		td2.setAttribute("onmouseout", "this.style.color='initial',this.style.fontWeight='initial'");
		tdx2=document.createTextNode(answers[i]);
		tablenode.appendChild(trnode);
		trnode.appendChild(td1);
		trnode.appendChild(td2);
		td1.appendChild(tdx1);
		td2.appendChild(tdx2);
	}
}
function add(){
	node=document.getElementById("form");
	bothernode=document.getElementById("button");
	pnode=document.createElement("p");
	textnode=document.createTextNode("電話");
	brnode=document.createElement("br");
	inputnode=document.createElement("input");
	inputnode.setAttribute("name","tel");
	inputnode.setAttribute("type","text");
	pnode.appendChild(textnode);
	pnode.appendChild(brnode);
	pnode.appendChild(inputnode);
	node.insertBefore(pnode,bothernode);
	butnode=document.getElementById("addordel");
	butnode.value="刪除電話欄位";
	butnode.setAttribute("onclick","del()");
}
function del(){
	node=document.getElementById("form");
	delnode=document.getElementsByTagName("p");
	node.removeChild(delnode[delnode.length-1]);
	butnode=document.getElementById("addordel");
	butnode.value="新增電話";
	butnode.setAttribute("onclick","add()");
}