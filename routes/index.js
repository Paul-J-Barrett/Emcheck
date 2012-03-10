/*
 * GET home page.
 */

exports.index = function(req, res){
console.log('index');
    res.render('index',{'Results':''});
};


/*
 * GET home page.
 */

exports.test = function(req, res){
console.log('test');
		    res.render('test',{});
};

/*
 * GET search page.
 */
http=require('http');

exports.search = function(req, res){
    if(req.query.mbr[0]==='.' || !isNaN(req.query.mbr))
    {

	var options= {
	    host:'localhost',
	    port:3000,
	    path:'/search?mbr='+req.query.mbr,
	    method:'GET'
	};
	var data='';

	var req2=http.request(options, function(res2) {
	    res2.on('error',function(){ res.render('index',{'Results':''});});
	    res2.on('data',function(chunk){data+=chunk;});
	    res2.on('end',function() {
		try {
		    console.log(data);
		    data=JSON.parse(data);
		
		    res.render('search',data);
		}
		catch(e) {
		    res.render('index',{'Results':'Member Not found or Invalid Card'});
		}
	    });

	});
	req2.end();

    }
    else
    {
	res.render('index',{'Results':''});
    }



};
