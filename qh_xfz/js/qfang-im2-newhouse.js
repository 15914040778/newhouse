var contactsCookieKey="contacts_newhouse";var toolsMsgRemindKey="toolsMsgRemind_newhouse";var rongConnectionStatus=null;var userName,pictureUrl,imUserId,appKey,qchatRcUserId,qchatRcUserToken,qchatNickName,userPhone;var brokerHouseData=[];(function(h){var a=ctx+"/themes/default/images/frontend/no-broker-88x117.jpg";var k=ctx+"/themes/default/images/frontend/noPhoto_180x135.gif";var j=ctx+"/themes/default/images/frontend/details/im/no-photo-im.png";var e="this.src='"+ctx+"/themes/default/images/frontend/no-broker-88x117.jpg';";var f="this.src='"+ctx+"/themes/default/images/frontend/noPhoto_180x135.gif';";var b="this.src='"+ctx+"/themes/default/images/frontend/details/im/no-photo-im.png';";h.qfangIM={createTmpl:function(p,u,s,q,t,o,r,n){l(p,u,s,q,t,o,r,n);},receiveMsg:function(o,p,n){c(o,p,n);if(!p.history||!p.isScroll){h.qfangIM.scrollToFunc(o,p.timeout);}},sendMsg:function(o,n,p,q){m(o,n,p,q);if(!p.history||!p.isScroll){h.qfangIM.scrollToFunc(o,p.timeout);}},scrollToFunc:function(n,o){var p=o?o:200;setTimeout(function(){h("#"+"msgWrap"+n).scrollTop(999999999);},p);}};function l(w,v,B,F,D,n,I,J){var z=h("#"+v);var A=h("#"+B);var x=h("#"+F);var u=h("#"+D);var r=h("#"+n);var p=I.brokerInfo.rcUserId;var y=I.lastMsgTime;var E=I.brokerInfo.brokerPhoto?I.brokerInfo.brokerPhoto:a;var s='<li class="cater-tb-grp cur" id="'+J[0]+w+'" data-num="'+w+'" rcUserId="'+p+'" lastMsgTime="'+y+'"><p class="cater-tb-grp-photo fl"><img src="'+E+'"  onerror="'+e+'"/></p><p class="cater-tb-grp-name fl">'+I.brokerInfo.brokerName+'</p><i class="icon-im msg-remind"></i><p class="cater-tb-grp-close"><a class="icon-im" href="javascript:;">close</a></p></li>';z.prepend(s);var G='<p class="im-broker clearfix" id="'+J[1]+w+'"><span class="im-broker-name">当前经纪人：'+I.brokerInfo.brokerName+'</span><span class="typing-status"></span></p>';A.prepend(G);var t='<div class="msg-wrap-win" id="'+J[2]+w+'" data-num="'+w+'"></div>';x.prepend(t);var o='<div class="edit-iframe-div" id="'+J[3]+w+'" data-num="'+w+'"><div class="content-editable" contenteditable="true"></div></div>';u.prepend(o);var C="";C='<div id="'+J[4]+w+'">';if(I.houseInfo){C+='<p class="relevant-info-tbs clearfix"><span class="cur">当前房源</span><span>经纪人</span></p>';}else{C+='<p class="relevant-info-tbs clearfix"><span class="cur">经纪人</span></p>';}C+='<div class="settab-box-wrap">';if(I.houseInfo){var H=I.houseInfo.thumbnail?I.houseInfo.thumbnail:f;C+='<div class="settab-box-rlt"><p class="hs-pic"><a href="'+I.houseInfo.houseDetailWebsite+'" target="_blank"><img src="'+H+'" width="160" height="102" onerror="'+f+'"/></a></p><p class="hs-info-streamline"><a href="'+I.houseInfo.houseDetailWebsite+'" target="_blank">'+I.houseInfo.houseTitle+'</a></p> <p class="hs-info-type">'+I.houseInfo.houseType+"<span>"+"</span><span>"+'</span></p><p class="hs-info-pcice"><span>'+I.houseInfo.housePrice+"</span>"+I.houseInfo.houseUnit+'</p><p class="relevant-info-btn"><a href="'+I.houseInfo.houseDetailWebsite+'" target="_blank"><span>查看完整信息</span><i class="icon-im"></i></a></p></div>';}var q=I.houseInfo?"dn":"";if(city=="深圳"||city=="SHENZHEN"||city=="珠海"||city=="ZH"){C+='<div class="settab-box-rlt '+q+'"><p class="photo-broker"><a href="'+I.brokerInfo.brokerStoreWebSite+'" target="_blank"><img src="'+E+'" width="106" height="106" onerror="'+e+'" /></a></p><p class="name-broker"><a href="'+I.brokerInfo.brokerStoreWebSite+'" target="_blank"><span>'+I.brokerInfo.brokerName+"</span></a></p></div>";}else{C+='<div class="settab-box-rlt '+q+'"><p class="photo-broker"><img src="'+E+'" width="106" height="106" onerror="'+e+'" /></a></p><p class="name-broker"><span>'+I.brokerInfo.brokerName+'</span></p><p class="relevant-info-btn relevant-info-btn2"><i class="icon-im"></i></p></div>';}C+="</div></div>";r.prepend(C);}function d(n,o){if(n=="2"||n=="5"){return o+"元/月";}else{if(n=="1"||n=="3"||n=="4"){return parseInt(o)+"万元";}}}function g(o,n){var p=h("#"+n[0]+o);if(p.index()!=0){p.parent().children(":first").before(p);}}function c(s,y,o){var p=h("#"+o[2]+s);var t=new Date(y.createTime).format("yy/MM/dd hh:mm:ss");var v=y.brokerInfo.brokerPhoto?y.brokerInfo.brokerPhoto:a;var q='<div class="receive-msg-broker clearfix"><p class="receive-msg-date">'+t+'</p><p class="receive-msg-photo"><i class="icon-im receive-msg-arrow"></i><img src="'+v+'" width="20" height="20" onerror="'+e+'"/></p><div class="receive-msg-text">';if(y.msgType==10){if(y.content){q+='<img src="data:image/png;base64,'+y.content+'" url="'+y.message+'" style="max-width:230px"/>';}else{q+='<img src="'+y.message+'"/>';}}else{if(y.msgType==11){q+='<p class="voice-btn clearfix" base64="'+y.content+'" duration="'+y.duration+'"><i class="icon-im"></i><em class="icon-im voice-cle"></em></p>';}else{if(y.msgType==1){var u=y.message.replace(/\n/g,"<br>");q+=emojiStrtoHtml(u);}else{if(y.msgType==2){var n=["二手房","出租房","新房","出租写字楼","出售写字楼"];var r=y.house.type==1?"万元":"元/月";q+='<a class="hsinfo-link-con" href="'+y.house.url+'" target="_blank"><p class="hsinfo-link-pic fl"><img src="'+y.house.thumbnail.replace("{size}","180x135")+'" onerror="'+f+'" width="80" height="60" /></p><p class="hsinfo-link-text fl"><span class="hsinfo-link-hsname">'+y.house.title+'</span><span class="hsinfo-link-price">'+y.house.price+r+"<em></em></span></p></a>";}}}}q+="</div></div>";if(!p.find(".msg-box").length){p.append('<div class="msg-box"></div>');}if(y.history){p.find(".msg-box").prepend(q);}else{p.find(".msg-box").append(q);var x=h("#"+o[0]+s);var w=h("#imWrap");if(w.css("display")!="block"){x.find(".msg-remind").show();toolsMsgRemind(true);}else{if(x.hasClass("cur")){x.find(".msg-remind").hide();}else{x.find(".msg-remind").show();g(s,o);}}}}function m(s,p,B,o){var q=h("#"+p[2]+s);var t=new Date(B.createTime).format("yy/MM/dd hh:mm:ss");var D="";var w={"type":B.msgType,"receiver":o,"sender":qchatRcUserId,"accountLinkId":s};var A="";var u=true;if(B.msgType==1){w.message=B.message;A=B.message;var v=A.replace(/\n/g,"<br>");D='<div class="receive-msg-user clearfix"><p class="receive-msg-date">'+t+'</p><p class="receive-msg-photo"><i class="icon-im receive-msg-arrow"></i><img src="'+pictureUrl+'" onerror="'+b+'" width="20" height="20" /></p><div class="receive-msg-text">'+emojiStrtoHtml(v)+"</div></div>";}else{if(B.msgType==2){w.house=JSON.stringify(B.house);var n=["二手房","出租房","新房","出租写字楼","出售写字楼"];D='<div class="receive-msg-user clearfix"><p class="receive-msg-date">'+t+'</p><p class="receive-msg-photo"><i class="icon-im receive-msg-arrow"></i><img src="'+pictureUrl+'" onerror="'+b+'" width="20" height="20" /></p><div class="receive-msg-text"><a class="hsinfo-link-con" href="'+B.house.url+'" target="_blank"><p class="hsinfo-link-pic fl"><img src="'+B.house.thumbnail+'" onerror="'+f+'" width="80" height="60" /></p><p class="hsinfo-link-text fl"><span class="hsinfo-link-hsname">'+B.house.title+'</span><span class="hsinfo-link-price">'+B.house.price+B.house.houseUnit+"<em></em></span></p></a></div></div>";u=false;}else{if(B.msgType==3){w.userInfo=JSON.stringify(B.userInfo);}else{if(B.msgType==10){w.message=B.message;D='<div class="receive-msg-user clearfix"><p class="receive-msg-date">'+t+'</p><p class="receive-msg-photo"><i class="icon-im receive-msg-arrow"></i><img src="'+pictureUrl+'" onerror="'+b+'" width="20" height="20" /></p><div class="receive-msg-text"><img src="'+B.message+'" style="max-width:230px"/></div></div>';}}}}if(!B.history){var x="";var r;if(B.msgType==1){x='{"type":1,"message":"'+A+'"}';}else{if(B.msgType==2){B.house.url=webUrlToWapUrl(B.house.url);x='{"type":2,"house":'+JSON.stringify(B.house)+"}";}else{if(B.msgType==3){x='{"type":3,"userinfo":'+w.userInfo+"}";}}}if(B.msgType==10){r=new RongIMLib.ImageMessage({content:B.content,imageUri:B.url});}else{r=new RongIMLib.TextMessage({content:x});}var C=RongIMLib.ConversationType.PRIVATE;var z=o;var y=A=="你有一条新的消息"?null:A;RongIMClient.getInstance().sendMessage(C,z,r,{onSuccess:function(E){log("Send successfully");},onError:function(G,E){var F="";switch(G){case RongIMLib.ErrorCode.TIMEOUT:F="超时";break;case RongIMLib.ErrorCode.UNKNOWN_ERROR:F="未知错误";break;case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:F="在黑名单中，无法向对方发送消息";break;case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:F="不在讨论组中";break;case RongIMLib.ErrorCode.NOT_IN_GROUP:F="不在群组中";break;case RongIMLib.ErrorCode.NOT_IN_CHATROOM:F="不在聊天室中";break;default:F=G;break;}log("发送失败:"+F);}},null,y,null);}if(!q.find(".msg-box").length){q.append('<div class="msg-box"></div>');}if(!B.history){h.ajax({url:ctx+"/qchat/newhouse/sendMsg",dataType:"json",type:"POST",data:w,cache:false,async:u});if(B.msgType!=3){q.find(".msg-box").append(D);}}else{if(B.msgType!=3){q.find(".msg-box").prepend(D);}}}})(jQuery);$(function(){var $imWrap=$("#imWrap");var $imClose=$("#imClose");var $contacterTb=$("#contacterTb");var $cterTb=$("#cterTb");var $postMsgBtn=$("#postMsgBtn");var imPrefixName=["imTb","imBrokerName","msgWrap","imEditor","imTbBox"];var editorStr="请输入你想咨询的内容...";var $err=$("#err");var timer;var regClearAllExceptImg=/<(\/)?((?!img)\w)+([^>]*)?(\/)?>/gi;$("body").delegate(".im-start,#im-lanuch,.qchat-start","click",function(e){if(isLogin()){qfangLanuchIM($(this).attr("personid"));e.stopPropagation();}else{userLogin.login();}});var initedYTX=false;var loadedContcats=false;var base64Str;function isLogin(){var userName=$.cookie("userName");if(userName!=null&&userName!=""){return true;}else{return false;}}function initYTX(){RongIMClient.init(appKey);RongIMLib.RongIMVoice.init();connectRongIM();RongIMClient.setConnectionStatusListener({onChanged:function(status){rongConnectionStatus=status;switch(status){case RongIMLib.ConnectionStatus.CONNECTED:initedYTX=true;log("链接成功");break;case RongIMLib.ConnectionStatus.CONNECTING:log("正在链接");break;case RongIMLib.ConnectionStatus.DISCONNECTED:log("断开连接");break;case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:log("其他设备登陆");break;case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:log("网络不可用");break;}}});RongIMClient.setOnReceiveMessageListener({onReceived:function(message){switch(message.messageType){case RongIMClient.MessageType.TextMessage:msgTextReceive(message);break;case RongIMClient.MessageType.ImageMessage:msgImageReceive(message);break;case RongIMClient.MessageType.DiscussionNotificationMessage:break;case RongIMClient.MessageType.VoiceMessage:msgVoiceReceive(message);break;case RongIMClient.MessageType.LocationMessage:break;case RongIMClient.MessageType.RichContentMessage:break;case RongIMClient.MessageType.DiscussionNotificationMessage:break;case RongIMClient.MessageType.InformationNotificationMessage:break;case RongIMClient.MessageType.ContactNotificationMessage:break;case RongIMClient.MessageType.ProfileNotificationMessage:break;case RongIMClient.MessageType.CommandNotificationMessage:break;case RongIMClient.MessageType.CommandMessage:break;case RongIMClient.MessageType.UnknownMessage:break;default:}}});}function connectRongIM(){if(RongIMLib.ConnectionStatus.CONNECTED==rongConnectionStatus){return;}RongIMClient.connect(qchatRcUserToken,{onSuccess:function(qchatRcUserId){log("Login successfully."+qchatRcUserId);},onTokenIncorrect:function(){log("token无效");},onError:function(errorCode){var info="";switch(errorCode){case RongIMLib.ErrorCode.TIMEOUT:info="超时";break;case RongIMLib.ErrorCode.UNKNOWN_ERROR:info="未知错误";break;case RongIMLib.ErrorCode.UNACCEPTABLE_PaROTOCOL_VERSION:info="不可接受的协议版本";break;case RongIMLib.ErrorCode.IDENTIFIER_REJECTED:info="appkey不正确";break;case RongIMLib.ErrorCode.SERVER_UNAVAILABLE:info="服务器不可用";break;}log(errorCode+","+info);}});}if(!$.browser.msie||$.browser.version==10){$("#uploadFile").hide();}$("#icon-im").bind("click",function(){$("#uploadFile").trigger("click");});$("#uploadFile").bind("change",function(){$("#pictureUploadFrom").submit();});$("#pictureUploadFrom").submit(function(){$(this).ajaxSubmit({url:ctx+"/qchat/pictureUpload",type:"POST",data:$("#pictureUploadFrom").serialize(),dataType:"JSON",contentType:"multipart/form-data",success:function(data){var el=$cterTb.find("li.cur");var idx=el.attr("data-num");var rcUserId=el.attr("rcUserId");$("#uploadFile").val("");if(data&&data.url){base64Str=data.base64;var sendMsgData={createTime:new Date().getTime(),history:false,destination:"SEND",message:data.urlThumb,url:data.url,msgType:10,content:data.base64};}$.qfangIM.sendMsg(idx,imPrefixName,sendMsgData,rcUserId);},error:function(msg){var data=eval("("+msg.responseText+")");if(data&&data.code&&data.code==1){alert("请上传图片");}else{alert("服务器繁忙，清稍后再试");}$("#uploadFile").val("");}});return false;});$("#faceTriggerBtn").on("click",function(){var idx=$cterTb.find("li.cur").attr("data-num");var _thisId=$(this).attr("id");if($("#faceBox").length){$("#faceBox").toggle();}else{var faceStr='<div class="face-box" id="faceBox"><ul>';for(var i=0;i<=470;i++){var li="<li>";var src=ctx+"/themes/default/images/frontend/qchat/emoji/emoji_"+i+".png";var img='<img src="'+src+'" width="20px" emojiId="'+i+'" class="emoji">';li+=img+"</li>";faceStr+=li;}faceStr+="</ul></div>";$("#"+_thisId).parent().append(faceStr);}$("#imWrap").on("click",function(){$("#faceBox").hide();});return false;});$("body").on("click","#faceBox li",function(){var idx=$cterTb.find("li.cur").attr("data-num");var _curEditIframe=$("#"+imPrefixName[3]+idx);var $editorDiv=_curEditIframe.find(".content-editable");var emojiId=$(this).find(".emoji").attr("emojiId");var src=ctx+"/themes/default/images/frontend/qchat/emoji/emoji_"+emojiId+".png";var _faceImg='<img src="'+src+'" width="20px" emojiId="'+emojiId+'" class="emoji">';var _dftHtml=$.trim($editorDiv.html().replace(regClearAllExceptImg,""));if(_dftHtml===editorStr){$editorDiv.html("");}var html=$editorDiv.html()+_faceImg;$editorDiv.html(html).addClass("content-editable-focus");focusToEnd($editorDiv[0]);});function focusToEnd(el){el.focus();if($.browser.msie){var rng;el.focus();rng=document.selection.createRange();rng.moveStart("character",-el.innerText.length);var text=rng.text;for(var i=0;i<el.innerText.length;i++){if(el.innerText.substring(0,i+1)==text.substring(text.length-i-1,text.length)){result=i+1;}}}else{var range=document.createRange();range.selectNodeContents(el);range.collapse(false);var sel=window.getSelection();sel.removeAllRanges();sel.addRange(range);}}function msgTextReceive(obj){var msgContent=obj.content.content;var message=JSON.parse(msgContent);if(message.type==1){var brokerInfo=getPersonByRcUserId(obj.senderUserId);if(!brokerInfo){return;}var data={};data.brokerInfo=brokerInfo;data.message=message.message;data.destination="RECEIVE";data.createTime=parseInt(obj.sentTime);data.msgType=1;$.qfangIM.receiveMsg(brokerInfo.accountLinkId,data,imPrefixName);saveMsgToServer(obj,brokerInfo.accountLinkId);}else{if(message.type==2){var brokerInfo=getPersonByRcUserId(obj.senderUserId);if(!brokerInfo){return;}var data={};data.brokerInfo=brokerInfo;message.house.url=wapUrlToWebUrl(message.house.url);data.house=message.house;data.destination="RECEIVE";data.createTime=parseInt(obj.sentTime);data.msgType=2;$.qfangIM.receiveMsg(brokerInfo.accountLinkId,data,imPrefixName);saveMsgToServer(obj,brokerInfo.accountLinkId);}}}function msgVoiceReceive(obj){var brokerInfo=getPersonByRcUserId(obj.senderUserId);var data={brokerInfo:brokerInfo,content:obj.content.content,duration:obj.content.duration,destination:"RECEIVE",createTime:parseInt(obj.sentTime),msgType:11};$.qfangIM.receiveMsg(brokerInfo.accountLinkId,data,imPrefixName);saveMsgToServer(obj,brokerInfo.accountLinkId);}function msgImageReceive(obj){var url=obj.content.imageUri;var brokerInfo=getPersonByRcUserId(obj.senderUserId);var data={};data.brokerInfo=brokerInfo;data.message=url;data.destination="RECEIVE";data.createTime=parseInt(obj.sentTime);data.msgType=10;data.content=obj.content.content;$.qfangIM.receiveMsg(brokerInfo.accountLinkId,data,imPrefixName);saveMsgToServer(obj,brokerInfo.accountLinkId);}function saveMsgToServer(obj,accountLinkId){var msg={msgReceiver:qchatRcUserId,msgSender:obj.senderUserId,msgDateCreated:obj.sentTime};switch(obj.messageType){case RongIMClient.MessageType.TextMessage:var msgContent=obj.content.content;var message=JSON.parse(msgContent);msg.msgType=message.type;if(msg.msgType==2){message.house.url=wapUrlToWebUrl(message.house.url);msg.house=JSON.stringify(message.house);}else{msg.content=msgContent;}break;case RongIMClient.MessageType.ImageMessage:msg.msgType=10;msg.imageUri=obj.content.imageUri;msg.content=obj.content.content;break;case RongIMClient.MessageType.VoiceMessage:msg.msgType=11;msg.base64=obj.content.content;break;default:break;}var data={data:JSON.stringify(msg),accountLinkId:accountLinkId};$.ajax({url:ctx+"/qchat/newhouse/saveMsg",dataType:"json",type:"POST",data:data,cache:false}).then(function(tmplData){});}function getPersonByRcUserId(rcUserId){for(var i=0;i<brokerHouseData.length;i++){if(brokerHouseData[i].brokerInfo.rcUserId==rcUserId){return brokerHouseData[i].brokerInfo;}}return null;}function getHouseInfoByRcUserId(rcUserId){for(var i=0;i<brokerHouseData.length;i++){if(brokerHouseData[i].brokerInfo.rcUserId==rcUserId){return brokerHouseData[i].houseInfo;}}return null;}function sendedHouseInfo(rcUserId){for(var i=0;i<brokerHouseData.length;i++){if(brokerHouseData[i].brokerInfo.rcUserId==rcUserId){if(!brokerHouseData[i].brokerInfo.sendedHouseInfo||(brokerHouseData[i].houseInfo!=null&&brokerHouseData[i].brokerInfo.sendedHouseInfo.indexOf(brokerHouseData[i].houseInfo.houseId)==-1)){return false;}else{return true;}}}return false;}function sendedUserInfo(rcUserId){for(var i=0;i<brokerHouseData.length;i++){if(brokerHouseData[i].brokerInfo.rcUserId==rcUserId){return brokerHouseData[i].brokerInfo.sendedUserInfo;}}return false;}function updateSendedUserInfo(rcUserId){for(var i=0;i<brokerHouseData.length;i++){if(brokerHouseData[i].brokerInfo.rcUserId==rcUserId){brokerHouseData[i].brokerInfo.sendedUserInfo=true;break;}}}function updateSendedHouseInfo(rcUserId){for(var i=0;i<brokerHouseData.length;i++){if(brokerHouseData[i].brokerInfo.rcUserId==rcUserId){if(brokerHouseData[i].brokerInfo.sendedHouseInfo){brokerHouseData[i].brokerInfo.sendedHouseInfo+=","+brokerHouseData[i].houseInfo.houseId;}else{brokerHouseData[i].brokerInfo.sendedHouseInfo=brokerHouseData[i].houseInfo.houseId+"";}updateContactsToCookie(brokerHouseData[i].brokerInfo.brokerId,3,brokerHouseData[i].brokerInfo.sendedHouseInfo);break;}}}function getBrokerMsgHistory(rcUserId){for(var i=0;i<brokerHouseData.length;i++){if(brokerHouseData[i].brokerInfo.rcUserId==rcUserId){return brokerHouseData[i].brokerInfo.getBrokerMsgHistory;}}return false;}function updateBrokerMsgHistory(rcUserId){for(var i=0;i<brokerHouseData.length;i++){if(brokerHouseData[i].brokerInfo.rcUserId==rcUserId){brokerHouseData[i].brokerInfo.getBrokerMsgHistory=true;break;}}}function getQhcatForUser(){$.ajax({url:ctx+"/qchat/newhouse/queryQChatUser",type:"POST",cache:false,dataType:"JSON",async:false,success:function(data){if(data&&data.qchatPersonUser){userName=data.userName;imUserId=data.userId;appKey=data.appKey;userPhone=data.qchatUserPhone;pictureUrl=data.pictureUrl;qchatRcUserId=data.qchatPersonUser.rcUserId;qchatRcUserToken=data.qchatPersonUser.rcToken;qchatNickName=data.qchatNickName;}}});if(imUserId){return true;}else{return false;}}var lanuchedIM=false;function qfangLanuchIM(brokerId){if(lanuchedPerson(brokerId)){$("#imWrap").show();switchChatWin(brokerId);checkvisiblewin(brokerId);return;}if(!getQhcatForUser()){log("获取用户Q聊信息失败");alert("服务器繁忙，请稍后再试");return;}var curBrokerHouseData;if(typeof(pageType)!="undefined"&&pageType=="detail"&&typeof(rommcommentId)!="undefined"&&rommcommentId!=""){var houseId=rommcommentId;var bizType="NEWHOUSE";if(brokerId==""||brokerId==null||houseId==""||houseId==null||bizType==""||bizType==null){return;}curBrokerHouseData=getBrokerHouse(brokerId,houseId,bizType);}else{curBrokerHouseData=getBrokerHouseFromCookie(brokerId);if(!curBrokerHouseData){curBrokerHouseData=getBrokerHouse(brokerId,null,null);}}if(curBrokerHouseData==null){log("查询经纪人房源信息失败");alert("服务器繁忙，请稍后再试");return;}if(!loadedContcats){loadContcats(brokerId,curBrokerHouseData);}brokerHouseData.push(curBrokerHouseData);if(typeof(pageType)!="undefined"&&pageType=="detail"){sendHouseInfoToPerson(brokerId,curBrokerHouseData.brokerInfo.rcUserId);}$.qfangIM.createTmpl(brokerId,"cterTb","imMainHeader","msgWrap","editIframe","tabBoxWrap",curBrokerHouseData,imPrefixName);initEditor(brokerId);addBrokerToContacts(curBrokerHouseData);log(curBrokerHouseData.brokerInfo.sendedHouseInfo);if(!initedYTX){initYTX();}switchChatWin(brokerId);checkvisiblewin(brokerId);if(!getBrokerMsgHistory(curBrokerHouseData.brokerInfo.rcUserId)){var now=new Date().getTime();curBrokerHouseData.lastMsgTime=now;curBrokerHouseData.message="您好！我是Q房网的经纪人"+curBrokerHouseData.brokerInfo.brokerName+"，请问有什么可以帮您？";curBrokerHouseData.createTime=now;curBrokerHouseData.history=false;curBrokerHouseData.msgType=1;$.qfangIM.receiveMsg(brokerId,curBrokerHouseData,imPrefixName);}if($imWrap.is(":hidden")){$imWrap.show();$("#tools-msg-remind").hide();toolsMsgRemind(false);}$("#msgWrap").find(".msg-wrap-win").scroll(function(){getMsgHistory(true);});$.qfangDragDiv("#imWrap");$("#im-lanuch").show();lanuchedIM=true;}function sendHouseInfoToPerson(brokerId,brokerRcUserId){if(sendedHouseInfo(brokerRcUserId)){return;}var houseInfo=getHouseInfoByRcUserId(brokerRcUserId);if(!houseInfo){return;}var house={"type":houseInfo.type,"thumbnail":houseInfo.thumbnail,"title":houseInfo.houseTitle,"apartment":houseInfo.apartment,"livingRoom":houseInfo.livingRoom,"bedRoom":houseInfo.bedRoom,"area":houseInfo.area,"price":houseInfo.housePrice,"houseUnit":houseInfo.houseUnit,"url":houseInfo.houseDetailWebsite,"direction":houseInfo.houseDirection,"id":houseInfo.houseId};var sendHouseData={createTime:new Date().getTime(),history:false,destination:"SEND",house:house,msgType:2};console.log(sendHouseData);if((houseInfo.houseId+"").indexOf("0002")==-1){setTimeout(function(){$.qfangIM.sendMsg(brokerId,imPrefixName,sendHouseData,brokerRcUserId);updateSendedHouseInfo(brokerRcUserId,houseInfo.houseId);},2000);}}function lanuchedPerson(brokerId){for(var i=0;i<brokerHouseData.length;i++){if(brokerHouseData[i].brokerInfo.brokerId==brokerId){return true;}}return false;}function loadContcats(brokerId,tempData){var cookieValue=CookieUtil.getCookie(contactsCookieKey);var contacts=JSON.parse(cookieValue);if(contacts!=null){for(var i=0;i<contacts.length;i++){var arr=contacts[i].split("|");var idx=arr[0];if(brokerId!=idx){var brokerHouse=getBrokerHouse(arr[0],arr[1],arr[2]);if(brokerHouse){if(arr.length==4){brokerHouse.brokerInfo.sendedHouseInfo=arr[3];}else{brokerHouse.brokerInfo.sendedHouseInfo="";}brokerHouse.brokerInfo.sendedUserInfo=true;brokerHouseData.push(brokerHouse);$.qfangIM.createTmpl(idx,"cterTb","imMainHeader","msgWrap","editIframe","tabBoxWrap",brokerHouse,imPrefixName);}}else{if(arr.length==4&&arr[3]!="undefinded"){tempData.brokerInfo.sendedHouseInfo=arr[3];}}}}loadedContcats=true;}function getBrokerHouseFromCookie(brokerId){var cookieValue=CookieUtil.getCookie(contactsCookieKey);var contacts=JSON.parse(cookieValue);if(contacts!=null){for(var i=0;i<contacts.length;i++){var arr=contacts[i].split("|");var idx=arr[0];if(brokerId==idx){return getBrokerHouse(arr[0],arr[1],arr[2]);}}}return null;}function getBrokerHouse(accountId,houseId,rbizType){var data=null;var url=ctx+"/qchat/newhouse/getQchatPersonInfo?accountId="+accountId;if(houseId&&rbizType&&houseId!="null"&&rbizType!="null"){url+="&houseId="+houseId+"&bizType="+rbizType;}$.ajax({url:url,dataType:"json",type:"get",cache:false,async:false,success:function(tmplData){if(tmplData&&!tmplData.ret){tmplData.lastMsgTime=new Date().getTime();if(tmplData.houseInfo&&tmplData.houseInfo.thumbnail&&tmplData.houseInfo.thumbnail.indexOf("?style")!=-1){tmplData.houseInfo.thumbnail=tmplData.houseInfo.thumbnail.substr(0,tmplData.houseInfo.thumbnail.indexOf("?style"));}data=tmplData;}else{log(tmplData);}}});return data;}function addBrokerToContacts(data){var cookieValue=CookieUtil.getCookie(contactsCookieKey);var contacts=JSON.parse(cookieValue);if(contacts==null){contacts=[];}var newContacts=[];var brokerId=data.brokerInfo.brokerId;var houseId=rbizType=null;if(data.houseInfo){houseId=data.houseInfo.houseId;rbizType=data.houseInfo.bizType;}var sendedHouseInfo;for(var i=0;i<contacts.length;i++){var arr=contacts[i].split("|");var currBrokerId=arr[0];if(currBrokerId!=brokerId){newContacts.push(contacts[i]);}else{if(arr.length==4){sendedHouseInfo=arr[3];}}}var str=brokerId+"|"+houseId+"|"+rbizType;if(sendedHouseInfo){str+="|"+sendedHouseInfo;data.brokerInfo.sendedHouseInfo=sendedHouseInfo;}newContacts.push(str);var options={expires:60*60*24*360,path:"/"};cookieValue=JSON.stringify(newContacts);CookieUtil.setCookie(contactsCookieKey,cookieValue,options);}function removeContacts(brokerId){var cookieValue=CookieUtil.getCookie(contactsCookieKey);var contacts=JSON.parse(cookieValue);if(contacts==null){contacts=[];}var newContacts=[];for(var i=0;i<contacts.length;i++){var arr=contacts[i].split("|");var currBrokerId=arr[0];if(currBrokerId!=brokerId){newContacts.push(contacts[i]);}}var options={expires:60*60*24*360,path:"/"};cookieValue=JSON.stringify(newContacts);CookieUtil.setCookie(contactsCookieKey,cookieValue,options);for(var i=0;i<brokerHouseData.length;i++){if(brokerHouseData[i].brokerInfo.brokerId==brokerId){brokerHouseData=brokerHouseData.del(i);break;}}}function updateContactsToCookie(brokerId,index,val){var cookieValue=CookieUtil.getCookie(contactsCookieKey);var contacts=JSON.parse(cookieValue);if(contacts==null){return;}for(var i=0;i<contacts.length;i++){var arr=contacts[i].split("|");if(arr[0]==brokerId){arr[index]=val;contacts[i]=arr.join("|");break;}}var options={expires:60*60*24*360,path:"/"};cookieValue=JSON.stringify(contacts);CookieUtil.setCookie(contactsCookieKey,cookieValue,options);}function getMsgHistory(isScroll){var el=$cterTb.find("li.cur");var accountLinkId=el.attr("data-num");if(isScroll){var _h=$("#"+imPrefixName[2]+accountLinkId).find(".msg-box").height();var _sTop=$("#"+imPrefixName[2]+accountLinkId).scrollTop();var Flag=(_h>286)&&(_sTop===0)?true:"";if(!Flag){return false;}}var brokerRcUserId=el.attr("rcUserId");var req={accountLinkId:accountLinkId,qchatRcUserId:qchatRcUserId,time:el.attr("lastMsgTime")};$.ajax({url:ctx+"/qchat/newhouse/getMsgHistory",dataType:"json",type:"POST",data:req,cache:false}).then(function(tmplData){if(tmplData!=null){var lastMsgTime;var $curMsgWrap=$("#"+imPrefixName[2]+accountLinkId);var $firstChild=$curMsgWrap.find(".msg-box").find("div").first();for(var i=0;i<tmplData.length;i++){var msg=tmplData[i];msg.history=true;msg.isScroll=isScroll;msg.timeout=500;if(msg.destination=="RECEIVE"){var broker=getPersonByRcUserId(brokerRcUserId);msg.brokerInfo=broker;$.qfangIM.receiveMsg(accountLinkId,msg,imPrefixName);}else{if(msg.destination=="SEND"){$.qfangIM.sendMsg(accountLinkId,imPrefixName,msg,brokerRcUserId);}}lastMsgTime=msg.createTime;}if(lastMsgTime){el.attr("lastMsgTime",lastMsgTime);if($firstChild.position()){$curMsgWrap.scrollTop($firstChild.position().top);}}}});}var closeBrokerId=null;$cterTb.on("mouseover","li",function(){$(this).addClass("hover").find(".cater-tb-grp-close").show();}).on("mouseout","li",function(){$(this).removeClass("hover").find(".cater-tb-grp-close").hide();}).on("click","li",function(){var idx=$(this).attr("data-num");switchChatWin(idx);});$cterTb.on("click",".cater-tb-grp-close",function(e){e.stopPropagation();$.qfangDialog.DialogShow("dialogConfirm");closeBrokerId=$(this).parent().attr("data-num");});$("body").on("click","#sureDel",function(){if(closeBrokerId){var isCur=$("#"+imPrefixName[0]+closeBrokerId).hasClass("cur");$.qfangDialog.DialogClose("dialogConfirm");closeChatWin(closeBrokerId,isCur);removeContacts(closeBrokerId);}});$("#dialogConfirmClose, #cancelDel").on("click",function(){$.qfangDialog.DialogClose("dialogConfirm");$.qfangDragDiv("#imWrap");});$("#imWrap").delegate(".voice-btn","click",function(){var el=$(this);el.addClass("voice-play");var base64=el.attr("base64");var duration=base64.length/1024;RongIMLib.RongIMVoice.play(base64,duration);setTimeout(function(){el.removeClass("voice-play");},duration*1024);});$postMsgBtn.on("click",function(){initYTX();var el=$cterTb.find("li.cur");var idx=el.attr("data-num");var rcUserId=el.attr("rcUserId");var _curEditIframe=$("#"+imPrefixName[3]+idx);var $editorDiv=_curEditIframe.find(".content-editable");$editorDiv.find("img.emoji").each(function(){var emojiId=$(this).attr("emojiId");var emoji_value_unicode=getEmojiUnicodeByEmojiId(emojiId);$(this).replaceWith(emoji_value_unicode);});var _dftHtml=$.trim($editorDiv.html().replace(/<br>/gi,"\n").replace(/&nbsp;/gi,"").replace(regClearAllExceptImg,""));if(_dftHtml===editorStr){$editorDiv.html("");_dftHtml="";}var text=_dftHtml;if(text==""){alert("不允许发送空内容");return;}if(text!=editorStr){$editorDiv.html("").focus();var sendMsgData={createTime:new Date().getTime(),history:false,destination:"SEND",message:text,msgType:1};if(!sendedUserInfo(rcUserId)){var sendUserData={msgType:3,userInfo:{name:qchatNickName,phone:userPhone,latitude:-1,longitude:-1}};if(imUserId!=-1){sendUserData.userInfo.userid=imUserId;}setTimeout(function(){$.qfangIM.sendMsg(idx,imPrefixName,sendUserData,rcUserId);updateSendedUserInfo(rcUserId);},300);}$.qfangIM.sendMsg(idx,imPrefixName,sendMsgData,rcUserId);}else{$err.text(editorStr);checkEmptyVal();$editorDiv.addClass("content-editable-focus").html("").focus();}$("#faceBox").hide();});$("#tabBoxWrap").on("click",".relevant-info-tbs span",function(){var _idx=$(this).index();$(this).addClass("cur").siblings().removeClass("cur");$(this).parent().siblings(".settab-box-wrap").find(".settab-box-rlt").eq(_idx).removeClass("dn").siblings().addClass("dn");});function checkvisiblewin(idx){var _y=0;var _visibleWinHeight=410;var _curLi=$("#"+imPrefixName[0]+idx);var _jspScroll=$contacterTb.scrollTop();var bFlag=_visibleWinHeight+_jspScroll<_curLi.position().top+_curLi.outerHeight(true);var tFlag=_jspScroll>_curLi.position().top-5;if(bFlag){_y=_curLi.position().top+_curLi.outerHeight(true)-_visibleWinHeight;$contacterTb.animate({scrollTop:_y});}else{if(tFlag){_y=Math.abs(_curLi.position().top)-5;$contacterTb.animate({scrollTop:_y});}}}function closeChatWin(idx,isCur){var _length=$cterTb.find("li").length;if(isCur){if(_length>1){var _curTb=$("#"+imPrefixName[0]+idx);var idxNew;if(_curTb.next().length){idxNew=_curTb.next().attr("data-num");}else{idxNew=_curTb.prev().attr("data-num");}switchChatWin(idxNew);}else{$imClose.trigger("click");$("#im-lanuch").hide();}}$.each(imPrefixName,function(i,v){$("#"+v+idx).remove();});}var lineWarp=$("#keyChoose").find("a.cur").find("span").attr("data-txt");$("#keyChoose").on("click","a",function(){$(this).addClass("cur").siblings().removeClass("cur").parent().hide();lineWarp=$(this).find("span").attr("data-txt");$(".key-tip").text("小提示：按"+lineWarp+"可以快捷发送");log(lineWarp);});$("body").on("click",function(){$("#keyChoose").hide();$("#keyChooseBtn").removeClass("key-choose-btn-cur");});$("#keyChooseBtn").on("click",function(e){e.stopPropagation();$(this).addClass("key-choose-btn-cur");$("#keyChoose").show();});$imClose.on("click",function(){var idx=$cterTb.find("li.cur").attr("data-num");if($("#im-lanuch").length==0){$imWrap.hide();}else{closeIMWinAnimate(idx);initToolBar();}});function closeIMWinAnimate(idx){var _curTbPhoto=$("#"+imPrefixName[0]+idx).children(":first");var _aninateBrokerPhoto=_curTbPhoto.clone();_aninateBrokerPhoto.appendTo("body").css({"top":_curTbPhoto.offset().top,"left":_curTbPhoto.offset().left,"position":"absolute","z-index":999999}).animate({path:new $.path.bezier({start:{x:_aninateBrokerPhoto.offset().left,y:_aninateBrokerPhoto.offset().top,angle:-50},end:{x:$(".tool-im").offset().left+5,y:$(".tool-im").offset().top+5,angle:50}})},800,function(){$(this).fadeOut(function(){$(this).remove();});});$imWrap.hide();}function switchChatWin(idx){var el=$("#"+imPrefixName[0]+idx);var _msgRemind=el.find(".msg-remind");if(!_msgRemind.is(":hidden")){_msgRemind.hide();}$.each(imPrefixName,function(i,v){if(i!==0){$("#"+v+idx).show().siblings().hide();$err.text("");}else{$("#"+v+idx).addClass("cur").siblings().removeClass("cur");}});var rcUserId=el.attr("rcUserId");if(!getBrokerMsgHistory(rcUserId)){getMsgHistory(false);updateBrokerMsgHistory(rcUserId);}$("#faceBox").hide();}var EditDiv={focus:false};function initEditor(idx){var $editor=$("#"+imPrefixName[3]+idx);var timer;var $editorDiv=$editor.find(".content-editable");$editorDiv.append(editorStr);}$imWrap.delegate(".content-editable","focus",function(){var _dftHtml=$.trim($(this).html().replace(regClearAllExceptImg,""));if(_dftHtml===editorStr){$(this).empty().addClass("content-editable-focus");}EditDiv.focus=true;});$imWrap.delegate(".content-editable","blur",function(){var _dftHtml=$.trim($(this).html().replace(regClearAllExceptImg,"").replace(/&nbsp;/ig,""));if(_dftHtml===""){$(this).empty().html(editorStr).removeClass("content-editable-focus");}EditDiv.focus=false;});$imWrap.delegate(".content-editable","keydown",function(e){var newLineKey="";if(e.shiftKey&&e.keyCode==13){newLineKey="Shift+Enter";}else{if(e.keyCode==13){newLineKey="Enter";}}if(!newLineKey){return;}var ev=e||window.event;var key=ev.keyCode||ev.charCode;var sel,rang,br,fixbr,node,inner,tempRange,offset;if(ev.preventDefault){ev.preventDefault();}else{ev.returnValue=false;}if(window.getSelection){if(EditDiv.focus===false){return false;}br=document.createElement("br");sel=window.getSelection();rang=sel.rangeCount>0?sel.getRangeAt(0):null;if(rang===null){return false;}rang.deleteContents();node=sel.focusNode;inner=false;while(node.parentNode!=document.documentElement){if(node===this){inner=true;break;}else{node=node.parentNode;}}if(inner){if(browser.chrome||browser.safari||browser.firefox){tempRange=rang.cloneRange();tempRange.selectNodeContents(this);tempRange.setEnd(rang.endContainer,rang.endOffset);offset=tempRange.toString().length;if(offset==this.textContent.length&&this.querySelectorAll("#edit-div br[type='_moz']").length==0){fixbr=br.cloneNode();fixbr.setAttribute("type","_moz");rang.insertNode(fixbr);}}rang.insertNode(br);}if(document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("Range","2.0")){tempRange=document.createRange();tempRange.selectNodeContents(this);tempRange.setStart(rang.endContainer,rang.endOffset);tempRange.setEnd(rang.endContainer,rang.endOffset);sel.removeAllRanges();sel.addRange(tempRange);}}else{rang=document.selection.createRange();if(rang===null){return false;}rang.collapse(false);rang.pasteHTML("<br>");rang.select();}if(lineWarp==newLineKey){$postMsgBtn.trigger("click");log("post");}});function checkEmptyVal(){if(timer){clearTimeout(timer);}timer=setTimeout(function(){$err.text("");},2000);}initToolBar();function initToolBar(){var oneBrokerId=getOneBrokerId();if(oneBrokerId){var imstart=$(".im-start");if(imstart.length>0){$("#im-lanuch").attr("personid",imstart.eq(0).attr("personid"));}else{$("#im-lanuch").attr("personid",oneBrokerId);}$("#im-lanuch").show();}else{$("#im-lanuch").hide();}}function getOneBrokerId(){try{var cookieValue=CookieUtil.getCookie(contactsCookieKey);var contacts=JSON.parse(cookieValue);var brokerId;if(contacts==null){return brokerId;}for(var i=0;i<contacts.length;i++){var arr=contacts[i].split("|");brokerId=arr[0];return brokerId;}}catch(e){return 0;}}if(CookieUtil.getCookie(toolsMsgRemindKey)=="true"){toolsMsgRemind(true);}});function toolsMsgRemind(a){if(a){$("#tools-msg-remind").show();}else{$("#tools-msg-remind").hide();}var b={expires:60*60*24*360,path:"/"};CookieUtil.setCookie(toolsMsgRemindKey,a,b);}Date.prototype.format=function(b){var c={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),"S":this.getMilliseconds()};if(/(y+)/.test(b)||/(Y+)/.test(b)){b=b.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length));}for(var a in c){if(new RegExp("("+a+")").test(b)){b=b.replace(RegExp.$1,RegExp.$1.length==1?c[a]:("00"+c[a]).substr((""+c[a]).length));}}return b;};function log(a){if(window["console"]){console.log(a);}}function wapUrlToWebUrl(c){var d=c.indexOf("qfang.com");var b=c.substring(d);var a=b.split("/");var e="http://"+a[1]+".qfang.com/"+a[2]+"/"+a[3];if(a.length==5){e=e+"/"+a[4];}return e;}function webUrlToWapUrl(d){var f=d.replace("http://","");f=f.replace("https://","");f=f.replace("qfang-web/","");var e=f.indexOf("qfang.com");var g=f.substring(0,e-1);var c=f.substring(e);var b=c.split("/");var a="http://m.qfang.com/"+g+"/"+b[1]+"/"+b[2];if(b.length==4){a=a+"/"+b[3];}return a;}function emojiStrtoHtml(g){var e=toArray(g);var b="";for(var c=0;c<e.length;c++){var a=e[c].charCodeAt();var d=e[c];if(a>=57345&&a<=58679){var f=ctx+"/themes/default/images/frontend/qchat/emoji/emoji_"+getEmojiId(a)+".png";d='<img src="'+f+'" width="20px">';}b+=d;}return b;}function toArray(c){if(typeof c!="string"){return[];}var a=[];for(var b=0;b<c.length;b++){a.push(c.charAt(b));}return a;}function getEmojiId(b){var a=-1;if((b<57345)||(b>58679)){return a;}if((b>=57345)&&(b<=57434)){a=b-57345;}else{if((b>=57601)&&(b<=57690)){a=b+"Z".charCodeAt()-57601;}else{if((b>=57857)&&(b<=57939)){a=b+"´".charCodeAt()-57857;}else{if((b>=58113)&&(b<=58189)){a=b+"ć".charCodeAt()-58113;}else{if((b>=58369)&&(b<=58444)){a=b+"Ŕ".charCodeAt()-58369;}else{if((b>=58625)&&(b<=58679)){a=b+"Ơ".charCodeAt()-58625;}}}}}}return a;}function getEmojiUnicodeByEmojiId(c){var a=getCharCodeByEmojiId(c);var b=String.fromCharCode(a);return b;}Array.prototype.del=function(a){if(a<0){return this;}return this.slice(0,a).concat(this.slice(a+1,this.length));};function getCharCodeByEmojiId(b){b=parseInt(b);var a=-1;if(b<0||b>470){return a;}if(b>=0&&b<=89){a=57345+b-1+1;}else{if(b>=90&&b<=179){a=57601+b-"Z".charCodeAt();}else{if(b>=180&&b<=262){a=57857+b-"´".charCodeAt();}else{if(b>=263&&b<=339){a=58113+b-"ć".charCodeAt();}else{if(b>=340&&b<=415){a=58369+b-"Ŕ".charCodeAt();}else{if(b>=416&&b<=470){a=58625+b-"Ơ".charCodeAt();}}}}}}return a;}function preview(){var b=document.getElementById("edit-div").innerHTML;if(b){b='<div style="margin:0;padding:0;background:#bbb;">'+b+"</div>";var a=window.open("about:blank","view");a.document.open();a.document.write(b);a.document.close();}}(function(){window.browser={};if(navigator.userAgent.indexOf("MSIE")>0){browser.name="MSIE";browser.ie=true;}else{if(navigator.userAgent.indexOf("Firefox")>0){browser.name="Firefox";browser.firefox=true;}else{if(navigator.userAgent.indexOf("Chrome")>0){browser.name="Chrome";browser.chrome=true;}else{if(navigator.userAgent.indexOf("Safari")>0){browser.name="Safari";browser.safari=true;}else{if(navigator.userAgent.indexOf("Opera")>=0){browser.name="Opera";browser.opera=true;}else{browser.name="unknow";}}}}}})();var CookieUtil={d_seq:"^",q_seq:"|||",count:6,setCookie:function(b,g,j){var e={expires:24*60*60*1000,path:"/",domain:"",secure:false};for(i in e){if(typeof(j[i])==="undefined"){j[i]=e[i];}}if(typeof g==="undefined"||g===null){g="";j.expires=-1;}var c="";if(j.expires!=0&&typeof j.expires==="number"){var d=new Date();d.setTime(d.getTime()+(j.expires*1000));c="; expires="+d.toUTCString();}var h=j.path?"; path="+j.path:"";var f=j.domain?"; domain="+j.domain:"";var a=j.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(g),c,h,f,a].join("");},getCookie:function(a){if(!a){return"";}var e=null;if(document.cookie&&document.cookie!=""){var d=document.cookie.split(";");for(var c=0;c<d.length;c++){var b=d[c].replace(/^\s*|\s*$/g,"");if(b.substring(0,a.length+1)==(a+"=")){e=decodeURIComponent(b.substring(a.length+1));break;}}}return e;}};