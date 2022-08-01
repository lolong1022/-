//  定义一个获取储存值的函数
 function getData() {
    // 定义变量储存返回值，如果localStorage 第一个返回是false
    // localStorage.getItem('todolist')获取有东西数true 返回第一个值
    // 没有则为false 就返回第二个值
    var data = localStorage.getItem('todolist')||'[]'
    return JSON.parse(data)
 }
//  定义一个存储数据的函数
function saveData(data) {
    localStorage.setItem('todolist', JSON.stringify(data))
}
// 给title绑定键盘弹起事件
$('#title').on('keyup',function(even){
    // 判断回车键的assall码
    if(even.keyCode==13) {
        // 判断input里面的内容是否为空
        if($(this).val().trim().length==0) {
            alert('请输入内容')
            return 
        }
        // 调用获取数据函数用变量表示
        var local = getData()
        // 把新增的数据用对象储存 在数组后面添加push
        local.push({
            title:$(this).val(),
            // 判断他的状态是否是已完成  done
            done:false
        })
        saveData(local)
        $(this).val('') 
        load()
    }
   
})


$('ol,ul').on('click','a',function(){
    var index = +$(this).prop('id')
    console.log(index);
    var data = getData()
    $(this).val('')
    data.splice(index,1)
    saveData(data)
    load()
})
// 正在进行切换
$('ol,ul').on('click','input',function(){
    var data = getData()
    var index = +$(this).siblings('a').prop('id')
    // console.log(index);
    data[index].done = $(this).prop('checked')
    saveData(data)
    load()
})
load()
//用来渲染数据到页面
function load () {
    var data = getData()
    // console.log(data);
     // 清空ol ul 里面的数据
    $('ul,ol').empty()

    var todoCount = 0 //正在进行的数量
    var doneCount = 0 //已完成的数量
    $.each(data,function(i,ele){

        // ele.done($('li input:checked'))
        if(ele.done) {
            doneCount++;
            // $('ol').remove()
            $('ul').prepend(`<li><input type="checkbox" checked/><p>${ele.title}</p>
            <a id="${i}" href="javascript:;"></a></li>`)
           
        }else {
            todoCount++
            $('ol').prepend(`<li><input type="checkbox"/><p>${ele.title}</p>
            <a id="${i}" href="javascript:;"></a></li>`)
            // li.slideDown()
        }
    })
    $('#todocount').html(todoCount)
    $('#donecount').html(doneCount)
}
