/* Merge admin-managed overlay JSON into the static datasets.
   Loaded synchronously between the data files and main.js so every
   consumer sees the merged result. */
(function(){
  function loadJSON(u){
    try{
      var x=new XMLHttpRequest();
      x.open("GET",u+"?t="+Date.now(),false);
      x.send(null);
      if(x.status>=200&&x.status<300)return JSON.parse(x.responseText);
    }catch(e){}
    return null;
  }
  var n=loadJSON("assets/data/news-custom.json");
  if(n&&window.ADVO_NEWS){
    var hid={};(n.hidden||[]).forEach(function(i){hid[i]=1});
    var map={};window.ADVO_NEWS.forEach(function(x){map[x.id]=x});
    (n.items||[]).forEach(function(x){map[x.id]=x});
    var arr=Object.keys(map).map(function(k){return map[k]}).filter(function(x){return !hid[x.id]});
    arr.sort(function(a,b){return String(b.date||"").localeCompare(String(a.date||""))});
    window.ADVO_NEWS=arr;
  }
  var m=loadJSON("assets/data/members-custom.json");
  if(m&&window.ADVO_MEMBERS){
    var hid2={};(m.hidden||[]).forEach(function(i){hid2[i]=1});
    var ov=m.overrides||{};
    var list=window.ADVO_MEMBERS.map(function(x){
      var o=ov[x.id];if(!o)return x;
      var y={},k;for(k in x)y[k]=x[k];for(k in o)y[k]=o[k];return y;
    });
    (m.added||[]).forEach(function(x){list.push(x)});
    list=list.filter(function(x){return !hid2[x.id]});
    window.ADVO_MEMBERS=list;
  }
})();
