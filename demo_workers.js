
    
self.onmessage = function (e) {
    // 接收从主线程发送的数据对象
    console.log('1');
    const dataReceived = e.data;

    // 访问数据对象中的各个值
    const value1 = dataReceived.sendActionTime;
    const value2 = dataReceived.sendActionTime2;
    const value3 = dataReceived.newName;
    const value4 = dataReceived.workTime;

    // 在 Web Worker 中处理数据
    console.log('从主线程接收到的值1：', value1);
    console.log('从主线程接收到的值2：', value2);
    console.log('从主线程接收到的值3：', value3);
    console.log('从主线程接收到的值4：', value4);

    // 在此处进行进一步的处理
    // ...

    setInterval(function(){
        date = new Date();
        h = date.getHours();
        m = date.getMinutes();
        s = date.getSeconds();
        dy = date.getFullYear();
        dm = date.getMonth()+1;
        dd = date.getDate();
        
        if(h < 10){
            h = '0'+h;
        }
        if(m < 10){
            m = '0'+m;
        }
        if(s <10){
            s = '0'+s;
        }
        
        var nowTime =h+':'+m+':'+s;
        console.log(nowTime);

        if(nowTime == value1){
            // var data = {
            //     // 'entry.177645717': newName,
            //     // 'entry.1923835392': '已到勤'
            //     'entry.1045651596': value3,
            //     'entry.805471108': '已到勤'
            // };
            // $.ajax({
            //     type: 'POST',
            //     // url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeuxlTKy7_I8oTChwDMMS1ZMM30FKwRO8Hfmrq0MBQUtzq0Dw/formResponse',
            //     url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfCz1tQxU9WT7hWWPkc5HG-CYDeZXb1N_kEqVKGHhbFOncfow/formResponse',
            //     data: data,
            //     contentType: 'application/json',
            //     dataType: 'jsonp',
            //     complete: function() {
            //         alert('上班資料已送出！');
            //     }
            // });
            // 创建一个 XMLHttpRequest 对象
            var xhr = new XMLHttpRequest();

            // 配置请求
            xhr.open('POST', 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfCz1tQxU9WT7hWWPkc5HG-CYDeZXb1N_kEqVKGHhbFOncfow/formResponse', true);

            // 设置请求头
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            // 创建要发送的数据字符串
            var data = 'entry.1045651596=' + encodeURIComponent(value3) +
                        '&entry.805471108=' + encodeURIComponent('已到勤');

            // 监听请求状态变化
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) { // 请求已完成
                    if (xhr.status === 200) { // 请求成功
                        alert('上班資料已送出！');
                    } else {
                        alert('上班資料送出失敗：' + xhr.status);
                    }
                }
            };

            // 发送请求
            xhr.send(data);

        }
        if(nowTime == value2){
            // 创建一个 XMLHttpRequest 对象
            var xhr = new XMLHttpRequest();

            // 配置请求
            xhr.open('POST', 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSc_gPgmqjnh-L5BgVZ94JFvtXrr98t5U3PWWtEK-Ez19rsUzg/formResponse', true);

            // 设置请求头
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            // 创建要发送的数据字符串
            var data_get_off_work = 'entry.1884793113=' + encodeURIComponent(value3) +
                                    '&entry.706129098=' + encodeURIComponent(value4);

            // 监听请求状态变化
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) { // 请求已完成
                    if (xhr.status === 200) { // 请求成功
                        alert('下班資料已送出！');
                    } else {
                        alert('下班資料送出失敗：' + xhr.status);
                    }
                }
            };

            // 发送请求
            xhr.send(data_get_off_work);
        }
    },1000);
};
    // if(nowTime == sendActionTime){
    //     var data = {
    //         'entry.177645717': newName,
    //         'entry.1923835392': '已到勤'
    //         // 'entry.1045651596': newName,
    //         // 'entry.805471108': '已到勤'
    //     };
    //     $.ajax({
    //         type: 'POST',
    //         url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeuxlTKy7_I8oTChwDMMS1ZMM30FKwRO8Hfmrq0MBQUtzq0Dw/formResponse',
    //         //url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfCz1tQxU9WT7hWWPkc5HG-CYDeZXb1N_kEqVKGHhbFOncfow/formResponse',
    //         data: data,
    //         contentType: 'application/json',
    //         dataType: 'jsonp',
    //         complete: function() {
    //             alert('上班資料已送出！');
    //         }
    //     });
    // }
    //
    // if(nowTime == sendActionTime2){
    //     var data_get_off_work = {
    //         'entry.658874879': newName,
    //         'entry.1229663160': workTime
    //     };
    //     $.ajax({
    //         type: 'POST',
    //         url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScM8Dx2IOpI6Ge9RYu5Diz3yotmzCvJp5UbIYAxPgpeIxIClA/formResponse',
    //         data: data_get_off_work,
    //         contentType: 'application/json',
    //         dataType: 'jsonp',
    //         complete: function() {
    //             alert('下班資料已送出！');
    //         }
    //     });
    // }
  
    
