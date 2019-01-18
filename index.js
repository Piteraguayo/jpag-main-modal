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
        this.createHTML();
        this.getContainerJQ().modal('show');
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
    },

    createHTML : function(){
        if(!document.getElementById(this.id)){
            var HTMLmodal='<div class="modal fade" id="jpgaMainModal" tabindex="-1" role="dialog" aria-hidden="true">';
                                HTMLmodal +='<div class="modal-dialog" role="document">';
                                    HTMLmodal +='<div class="modal-content">';
                                        HTMLmodal +='<button type="button" class="close pull-right" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
                                        HTMLmodal +='<div class="clear_float"></div>';

                                        HTMLmodal +='<div id="mainModalHeader" class="modal-header">';
                                            HTMLmodal +='<h5 class="modal-title" id="mainModalTitle">Modal title</h5>';
                                        HTMLmodal +='</div>';

                                        HTMLmodal +='<div class="modal-body" id="mainContentModal"><!-- CONTENT FOR THE MODAL --></div>';

                                        HTMLmodal +='<div id="mainModalFooter" class="modal-footer">';
                                            HTMLmodal +='<button onclick="mainModal.onAcceptDo()" id="mainModalAcceptButton" type="button" class="btn btn-success pull-right">Continue</button>';
                                            HTMLmodal +='<button onclick="mainModal.onCancelDo()" id="mainModalCancelButton" type="button" class="btn btn-secondary pull-right">Cancel</button>';
                                        HTMLmodal +='</div>';
                                    HTMLmodal +='</div>';
                                HTMLmodal +='</div>';
                            HTMLmodal +='</div>';

            $('body').append(HTMLmodal);
        }
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

mainModal.createHTML();