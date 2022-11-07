const cipherdict = {
    "印象国乐大曲": "qaEgCij57YJVAz0uUeOG",
    "瑶族舞曲": "itkXo4rCw0jmUd3nFVpb",
    "穿越时空的思念": "MQlDvnriRpb6du3HOfI9",
    "花好月圆": "XLptxAE1Z45uohqHcQr9",
    "台湾追想曲": "rsvgotidx7wDcHuJAbMF"
}

function CheckInput() {
    var RootAccount = "sjtudxer";
    var RootPwd = "dy/dx=f\'(x)";
    var acc = document.getElementById("acc").value;
    var pwd = document.getElementById("pwd").value;
    if (acc === RootAccount && pwd === RootPwd) {
        var storage = window.sessionStorage;
        storage.setItem("HasAccess", "OK");
        window.location.href = "query.html";
    } else {
        alert("Authentication Fail");
    }
}

function DownloadFiles() {
    var storage = window.sessionStorage;
    if (storage.getItem("HasAccess") == "OK") {
        // var zip = new JSZip();
        // prompt("Prepare zip");
        var pieceselectlist = document.getElementsByName("pieces");
        var pieceselect = "";
        //alert(pieceselectlist);
        for (var i = 0; i < pieceselectlist.length; i++) {
            // alert(pieceselectlist[i].checked);
            if (pieceselectlist[i].checked) {
                pieceselect = pieceselectlist[i].value; break;
            }
        }
        // alert(pieceselect);
        var insselectlist = document.getElementsByName("ins");
        var insselect = "";
        for (var i = 0; i < insselectlist.length; i++) {
            if (insselectlist[i].checked) {
                insselect = insselectlist[i].value; break;
            }
        }


        // var fs = require("fs");
        if (insselect == "总谱")
            window.location.href = "scores/" + cipherdict[pieceselect] + "/总谱/" + pieceselect + '-' + insselect + ".pdf";
        else {
            alert(`下载 ${pieceselect}-${insselect}的所有分谱`);
            var date = new Date();
            var time = '[' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDay()) + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ']';
            var file= new File([time], "../debug.log", {type: "text/plain;charset=utf-8"});
            saveAs(file);
            window.location.href = "scores/" + cipherdict[pieceselect] + "/" + insselect + ".zip";
            
        }



    } else {
        alert("No Access. Please log in through the index page.")
    }
}

function Displayref1() {
    $('#Wrapper').show();
    $('#Wrapper > .displayref1').show();
    $('#Wrapper > .displayref2').hide();
    $('#Wrapper > .displayref3').hide();
}

function Displayref2() {
    $('#Wrapper').show();
    $('#Wrapper > .displayref2').show();
    $('#Wrapper > .displayref1').hide();
    $('#Wrapper > .displayref3').hide();
}

function Displayref3() {
    $('#Wrapper').show();
    $('#Wrapper > .displayref3').show();
    $('#Wrapper > .displayref1').hide();
    $('#Wrapper > .displayref2').hide();
}