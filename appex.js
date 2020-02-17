
var appex={
    onRefresh:null,
    addEvent:function(callback){
      //ipcRenderer.sendToHost('onrefresh',{call:"nihao"});
      let that = this;
      that.onRefresh = callback;
    },
    fire:function(){
        ipcRenderer.sendToHost('fire','nihao');
    },
    refresh:function(){
        let that = this;
        that.onRefresh && that.onRefresh();
    },
    one:123,
}


window.appex = appex;

//module.exports = appex;