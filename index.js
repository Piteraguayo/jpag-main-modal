var mainModal = {
    id : "jpgaMainModal",
    defaultAcceptLabel : "Continue",
    defaultCancelLabel : "Cancel",
    acceptLabel : "",
    cancelLabel : "",
    onAccept : null,
    onCancel : null,
    onLoad : null,
    showFooter : false,
    showCancel : false,
    params : {},

    helloWorld : function(){
        console.log("HELLO WORLD");
    },

    getContainerJQ : function(){
      return   $('#'+this.id)
    },

    getFooterDOM : function(){
        return document.getElementById("mainModalFooter");
    },

    getAcceptButtonDOM : function(){
        return document.getElementById("mainModalAcceptButton");
    },

    getCancelButtonDOM : function(){
        return document.getElementById("mainModalCancelButton");
    },

    getMainContentDOM : function(){
        return document.getElementById("mainContentModal");
    },

    onAcceptDo : function(){
        this.onAccept();
    },

    onCancelDo : function(){
        this.onCancel();
        this.hide();
    },

    onLoadDo : function(){
        if(this.onLoad!=null)  this.onLoad();
    },

    show : function(){
        this.get.modal('show');
        this.onLoadDo();
    },

    hide : function(){
        this.getContainerJQ().modal('hide');
    },

    setClickOutside : function(){
        this.getContainerJQ().modal({backdrop: true, keyboard: true, show:false});
    },

    disableClickOutside : function(){
        this.getContainerJQ().modal({backdrop: 'static', keyboard: false, show:false});
    },

    setContent : function(modalContent){
        this.getMainContentDOM().innerHTML=modalContent;
    },

    showWithContent : function(content){
        this.setContent(content);
        this.show();
    },

    showContentFromServer : function(urlServer, postData){
        $.post(urlServer, postData, function(data){
            mainModal.showWithContent(data);
        });
    },

    showFooterDo : function(){
        this.getFooterDOM().style.display="block";
    },

    hideFooter : function(){
        this.getFooterDOM().style.display="none";
    },

    showCancelDo : function(){
        this.getCancelButtonDOM().style.display="block";
    },

    hideCancel : function(){
        this.getCancelButtonDOM().style.display="none";
    }
};

mainModal.onAccept= mainModal.hide;
mainModal.onCancel= mainModal.hide;
mainModal.acceptLabel=mainModal.defaultAcceptLabel;

mainModal.getContainerJQ().on('hide.bs.modal', function (e) {
    mainModal.showFooter=false;
    mainModal.showCancel=false;
    mainModal.onAccept= mainModal.hide;
    mainModal.onCancel= mainModal.hide;
    mainModal.onLoad=null;
    mainModal.params={};
    mainModal.acceptLabel=mainModal.defaultAcceptLabel;
    mainModal.cancelLabel=mainModal.defaultCancelLabel;
});

mainModal.getContainerJQ().on('show.bs.modal', function (e) {
    mainModal.getAcceptButtonDOM().innerHTML=mainModal.acceptLabel;
    mainModal.getCancelButtonDOM().innerHTML=mainModal.cancelLabel;

    if(mainModal.showFooter){
        mainModal.showFooterDo();
    }else{
        mainModal.hideFooter();
    }

    if(mainModal.showCancel){
        mainModal.showCancelDo();
    }else{
        mainModal.hideCancel();
    }
});