$(function(){
    var address = $("#user_info").data("address")
    
    // 买入
    $('#buyIn').click(function () {
        var price=$('#buy-price').val();
        var num=$('#buy-num').val();
        if(!price){
            layer_msg("请输入价格！");
            return;
        }
        if(!num){
            layer_msg('请输入数量！');
            return;
        }
        layer_loading()
        $.ajax({
            type:'POST',
            url:laravel_api+"/transaction/in",
            data:{
                user_id:address,
                price:price,
                num:num,
            },
            dataType:'json',
            success:function(res){
                layer_close()
                layer_msg(res.message)
                if (res.type == "ok"){
                    $('#buy-price').val(0)
                    $('#buy-num').val(0)
                    $('#buy-total').val(0)
                }
            }
        })
    })

    // 卖出
    $('#sellOut').click(function () {
        var price=$('#sell-price').val();
        var num=$('#sell-num').val();
        if(!price){
            layer_msg("请输入价格！");
            return;
        }
        if(!num){
            layer_msg('请输入数量！');
            return;
        }
        layer_loading()
        $.ajax({
            type:'POST',
            url:laravel_api+"/transaction/out",
            data:{
                user_id:address,
                price:price,
                num:num,
            },
            dataType:'json',
            success:function(res){
                layer_close()
                layer_msg(res.message)
                if (res.type == "ok"){
                    $('#sell-price').val(0)
                    $('#sell-num').val(0)
                    $('#sell-total').val(0)
                }
            }
        })
    })
})
