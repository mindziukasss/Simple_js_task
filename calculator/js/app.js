var result = "";
$(document).ready(function(){
    $(".button").click(function(){
        var num = $(this).attr("value");
        if(num === "C"){
            result = "";
            $(".input").val("");
        }
        else if(num === "CE"){
            result = result.slice(0, -1);
            $(".input").val(result);
        }
        else if(num === "=") {
            result = eval(result);
            $(".input").val(result);
            result = "";
        }
        else if(num === "n"){
            result = eval(result) * -1;
            if (isNaN(result)){
                result = "";
            }
            $(".input").val(result);
        }
        else{
            if(num === "+"||num === "-" || num === "*" || num === "/"){
                if (isNaN(result)){
                    result = "";}
            }
            result += num;
            $(".input").val(result);
        }
    });
});

