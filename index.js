require('jquery')

var mainModal = {
    helloWorld : function(){
        console.log("HELLO WORLD");
    },

    testJquery : function(){
        var container = $("#mainModal");
        container.css('display', 'none');
    }
}

module.exports = {
    mainModal
}