
var url=require('url');
var fs=require('fs');
var sys=require('util');
var http=require('http');
var efileTime;
var EMFILE='./Emergency.txt';


function gFileDate() {
fs.stat(EMFILE,function(err,stat) {
    efileTime=stat.mtime;
});
}

gFileDate();

var mbrs=new Array();
var ser=new Array();
function rf()
{
    fs.readFile(EMFILE,function(err,data) {
	if(err) throw err;
	rows=data.toString().split("\r\n");
	for(i=0;i<rows.length;i++) {
	    rec=rows[i].split(",");
	    if(!isNaN(rec[0])) {
		ser[rec[4]]=rec[0];
		mbrs[rec[0]]=rec;
	    }
	}
    });
}

rf();

function objectifyRec(key) {
        if(key[0]===".")  key=ser[key];
	rec={};
	rec.MemberNo=mbrs[key][0];
	//console.log(mbrs[key][0]);
	rec.Name=mbrs[key][1];
	rec.OwedTotal=mbrs[key][2];
	rec.Status=mbrs[key][3];
	rec.Serial=mbrs[key][4];
	rec.CtrType=mbrs[key][5];
	rec.NextDueAmt=mbrs[key][6];
	rec.NextDueDate=mbrs[key][7];
	rec.NextDueDesc=mbrs[key][8];
	rec.Type=mbrs[key][9];
        rec.FileDate=efileTime;
        return rec;
}

fs.watch(EMFILE,function(event,filename) {
    setTimeout(function(){
	mbrs=new Array();
	ser=new Array();
	gFileDate();
	rf();
    },6000);
});


http.createServer(function(req,res) {
    try {
	req.requrl=url.parse(req.url,true);
	key=req.requrl.query.mbr;
	rec=JSON.stringify(objectifyRec(key));
	res.writeHead(200,{'Content-Type':'application/json','Content-Length':rec.length });    
	res.end(rec);

    } catch( e) {
	console.log(e.toString());
	res.writeHead(404,{'Content-Type':'text/html'});
	res.end('Member Not Found or other Error');
    }

}).listen(3000,"127.0.0.1");
console.log("mbrserver running on 3000, " );
	 
