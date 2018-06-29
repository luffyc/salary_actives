$(function () {
    //$.cookie.raw = true;
    //$.cookie('redirect_url', '/huodong/xzcp/', { expires: 7, path: '/' });



    var position = [
    { parent: "工程狮", text: "Java", code: "010118", salary: "7187", gains: "0.25" },
    { parent: "工程狮", text: "PHP", code: "010119", salary: "6788", gains: "0.24" },
    { parent: "工程狮", text: ".NET", code: "010120", salary: "7975", gains: "0.24" },
    { parent: "工程狮", text: "C++", code: "010122,010121", salary: "7725", gains: "0.26" },
    { parent: "工程狮", text: "android", code: "010124", salary: "6216", gains: "0.26" },
    { parent: "工程狮", text: "ios", code: "010125", salary: "6850", gains: "0.23" },
    { parent: "工程狮", text: "html5", code: "010123", salary: "6313", gains: "0.21" },
    { parent: "工程狮", text: "前端", code: "010113", salary: "5955", gains: "0.25" },
    { parent: "工程狮", text: "测试", code: "010401", salary: "5125", gains: "0.26" },
    { parent: "工程狮", text: "运维", code: "010206", salary: "4756", gains: "0.27" },
    { parent: "工程狮", text: "技术总监", code: "010503,010502", salary: "12855", gains: "0.25" },
    { parent: "产品锦鲤", text: "产品助理", code: "010303", salary: "5200", gains: "0.34" },
    { parent: "产品锦鲤", text: "产品经理", code: "010303", salary: "7500", gains: "0.21" },
    { parent: "产品锦鲤", text: "产品总监", code: "010303", salary: "13000", gains: "0.20" },
    { parent: "设计猿", text: "平面设计", code: "080204", salary: "5200", gains: "0.39" },
    { parent: "设计猿", text: "UI", code: "010114,010115", salary: "5200", gains: "0.28" },
    { parent: "设计猿", text: "UE", code: "010114", salary: "5442", gains: "0.25" },
    { parent: "运营狗", text: "运营总监", code: "010301", salary: "11500", gains: "0.25" },
    { parent: "运营狗", text: "运营经理", code: "010302", salary: "6107", gains: "0.22" },
    { parent: "运营狗", text: "运营专员", code: "010302", salary: "3667", gains: "0.37" },
    { parent: "运营狗", text: "文案/编辑", code: "010307", salary: "4576", gains: "0.29" },
    { parent: "运营狗", text: "策划", code: "010308,050314,050313", salary: "5037", gains: "0.27" },
    { parent: "运营狗", text: "SEO|SEM", code: "010309", salary: "4896", gains: "0.29" },
    { parent: "运营狗", text: "新媒体运营", code: "010311", salary: "5259", gains: "0.26" },
    { parent: "行政/人事/财务喵", text: "前台", code: "040305", salary: "3310", gains: "0.42" },
    { parent: "行政/人事/财务喵", text: "行政助理", code: "040303,040304", salary: "3667", gains: "0.37" },
    { parent: "行政/人事/财务喵", text: "行政经理", code: "040302", salary: "5500", gains: "0.30" },
    { parent: "行政/人事/财务喵", text: "行政总监", code: "040301", salary: "7875", gains: "0.20" },
    { parent: "行政/人事/财务喵", text: "人事专员", code: "040203", salary: "3511", gains: "0.39" },
    { parent: "行政/人事/财务喵", text: "人事经理", code: "040202", salary: "5444", gains: "0.23" },
    { parent: "行政/人事/财务喵", text: "人力资源总监", code: "040201", salary: "11125", gains: "0.24" },
    { parent: "行政/人事/财务喵", text: "会计", code: "040105", salary: "3419", gains: "0.41" },
    { parent: "行政/人事/财务喵", text: "出纳", code: "040106", salary: "3129", gains: "0.47" },
    { parent: "行政/人事/财务喵", text: "财务/会计经理", code: "040102,040104", salary: "5833", gains: "0.24" },
    { parent: "行政/人事/财务喵", text: "财务总监", code: "040101", salary: "14077", gains: "0.24" },
    { parent: "市场精鹰", text: "销售助理", code: "050103,050110,050109,050114", salary: "6861", gains: "0.23" },
    { parent: "市场精鹰", text: "销售经理", code: "050102", salary: "8817", gains: "0.22" },
    { parent: "市场精鹰", text: "销售总监", code: "050101", salary: "13659", gains: "0.20" },
    { parent: "市场精鹰", text: "媒介/公关", code: "0504", salary: "7133", gains: "0.25" },
    { parent: "市场精鹰", text: "品牌专员", code: "050310", salary: "4188", gains: "0.34" },
    { parent: "市场精鹰", text: "品牌经理", code: "050309", salary: "8400", gains: "0.27" }
    ];

    var sex = [
    { text: "男", weight1: "0.1", weight2: "1.00" },
    { text: "女", weight1: "0.1", weight2: "0.80" }
    ];

    var city = [
    { text: "郑州", weight1: "0.2", weight2: "1.00" },
    { text: "开封", weight1: "0.2", weight2: "0.95" },
    { text: "新乡", weight1: "0.2", weight2: "0.92" },
    { text: "洛阳", weight1: "0.2", weight2: "0.97" },
    { text: "商丘", weight1: "0.2", weight2: "0.90" },
    { text: "南阳", weight1: "0.2", weight2: "0.94" },
    { text: "焦作", weight1: "0.2", weight2: "0.93" },
    { text: "平顶山", weight1: "0.2", weight2: "0.91" },
    { text: "安阳", weight1: "0.2", weight2: "0.86" },
    { text: "周口", weight1: "0.2", weight2: "0.87" },
    { text: "信阳", weight1: "0.2", weight2: "0.90" },
    { text: "许昌", weight1: "0.2", weight2: "0.90" },
    { text: "其它", weight1: "0.2", weight2: "0.90" }
    ];

    var school = [{ text: "中专及以下", weight1: "0.13", weight2: "0.30" },
    { text: "大专", weight1: "0.13", weight2: "0.50" },
    { text: "本科", weight1: "0.13", weight2: "1.00" },
    { text: "研究生", weight1: "0.13", weight2: "1.50" }
    ];

    var experience = [{ text: "1-2年", weight1: "0.4", weight2: "0.30" },
    { text: "2-4年", weight1: "0.4", weight2: "0.80" },
    { text: "4-8年", weight1: "0.4", weight2: "1.30" },
    { text: "8年以上", weight1: "0.4", weight2: "2.50" }
    ];
    var department = [{ text: "1-50人", weight1: "0.17", weight2: "0.75" },
    { text: "51-100人", weight1: "0.17", weight2: "1.00" },
    { text: "101-200人", weight1: "0.17", weight2: "1.50" },
    { text: "200以上", weight1: "0.17", weight2: "2.50" }
    ];

    var cNumber, addNumber, salary, gains, people,positiontype;

    //乘法函数
    var accMul = function (arg1, arg2) {
        var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
        try { m += s1.split(".")[1].length } catch (e) { }
        try { m += s2.split(".")[1].length } catch (e) { }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
    };

    //加法函数
    var accAdd = function (arg1, arg2) {
        var r1, r2, m;
        try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
        try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
        m = Math.pow(10, Math.max(r1, r2))
        return (arg1 * m + arg2 * m) / m
    };


    //循环遍历
    var For = function (a, b, c) {
        for (var length = a.length, i = 0; i < length; i++) {
            if (a[i].text === b) {
                cNumber = accMul(a[i].weight1, a[i].weight2);
                if (addNumber) {
                    addNumber = accAdd(addNumber, cNumber);
                } else {
                    addNumber = cNumber;
                }
            }
        }
        $('#change').html(document.getElementById('step' + c).innerHTML);
        $('#change').find('.ren').addClass(people);
    };

    //开始测试
    $('body').on('click', '.start', function (e) {
        //
        // var access_token = $.cookie('access_token');
        
        // if (access_token == undefined) {
        //     $('#change').html(document.getElementById('login_box').innerHTML);
        //     $('.code_cover').hide();
        //     return false;
        // }
        $('#change').html(document.getElementById('step1').innerHTML);
    });

    var countdown = 60;
    var settime = function() {
        if (countdown === 0) {
            $(".code").text("获取验证码")    
            $('.code_cover').hide();   
          
            countdown = 60;
            return;
        } else {
            $(".code").text("(" + countdown + ")") 
            $('.code_cover').show();     
            countdown--;
        }
        setTimeout(function () { settime() }, 1000);
    }


    //短信登录
    $("body").on("click", '.code', function () {
        settime();
        var t = $("#mobile").val();
        if (/((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/.test(t) == false) {
            $('.warning_mobile').text('手机号码不正确');
            $('.warning_mobile').addClass('red');
            return false;
        }
        $('.warning_mobile').removeClass('red');
        $.post("/huodong/getsms?v=1", { mobile: t },
           function (data) {

           });
    });
    //登录
    $("body").on("click", '.login_btn', function () {
        var t = $("#mobile").val();

        var smscode = $("#smscode").val();
        if (/((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/.test(t) == false) {
            $('.warning_mobile').text('手机号码不正确');
            $('.warning_mobile').addClass('red');
            return false;
        }
        $('.warning_mobile').removeClass('red');
        if (smscode == "") {
            $('.warning_code').text('验证码未填写');
            $('.warning_code').addClass('red');
            return false;
        }
        $('.warning_code').removeClass('red');
        var model = { mobile: t, vcode: { mobile: t, vcode_text: smscode }, register_source:"xczp" };
        $.post("/huodong/login?v=1", model,
           function (data) {
               if (data.flag) {
                   window.location.href = "https://www.tianjihr.com/jump/redirect?client_id=55c958f85558f11d682085f9&code=" + data.Content + "&state=67&logintype=talent&jump_type=normal";
                   $('.warning_code').removeClass('red');
               } else {
                   $('.warning_code').text('验证码错误或过期');
                   $('.warning_code').addClass('red');
               }
               
           });
    });


    //第一步 性别选择
    $('body').on('click', '.box input[name="sex"]', function (e) {
        var choose = $(this).next().attr('text');
        people = $(this).val();
        For(sex, choose, '2');
    });

    //第二步 城市选择
    $('body').on('click', '.box input[name="city"]', function (e) {
        var choose = $(this).next().html();
        For(city, choose, '3');
        var name = $(this).val();
        $('#change').find('.backG').addClass(name);
        $('#change').find('.stepThree_font').addClass(name);
    });


    //第三步 点击行业分类进入职位选择
    $('body').on('click', '.box input[name="a"]', function () {
        var value = $('.box input[name="a"]:checked').val();
        $('#change').html(document.getElementById(value).innerHTML);
        $('#change').find('.ren').addClass(people);
    });

    //第四步 职位选择确定后进入下一页
    $('body').on('click', '.next', function () {
        var choose = $(this).html();
        for (var length = position.length, i = 0; i < length; i++) {
            if (position[i].text === choose) {
                salary = position[i].salary;
                gains = position[i].gains;
                positiontype = position[i].code;
            }
        }
        $('#change').html(document.getElementById('step5').innerHTML);
        $('#change').find('.ren').addClass(people);
    });

    //第五步 经历选择
    $('body').on('click', '.box input[name="experience"]', function (e) {
        var choose = $(this).next().attr('text');
        For(experience, choose, '6');
    });

    //第六步 学历选择
    $('body').on('click', '.box input[name="school"]', function (e) {
        var choose = $(this).next().attr('text');
        For(school, choose, '7');
        var name = $(this).val();
        $('#change').find('.backG').addClass(name);
    });

    //第七步 公司规模选择
    $('body').on('click', '.box input[name="department"]', function (e) {
        var choose = $(this).next().attr('text');
        For(department, choose, '8');
    });

    //第八步 boss
    $('body').on('click', '.boss_btn', function () {
        $('#change').html(document.getElementById('step9').innerHTML);
        $('#change').find('.ren').addClass(people);
    })

    //第九步 press
    $('body').on('click', '.press_btn', function () {
        $('#change').html(document.getElementById('step10').innerHTML);
        $('#change').find('.ren').addClass(people);
    })
    var postionsalary = 0;
    //第十步 chance
    $('body').on('click', '.chance_btn', function () {
        $('#change').html(document.getElementById('last').innerHTML);
        var salary_a = Math.round(accMul(salary, addNumber));
        postionsalary = salary_a;
        var gains_a = accMul(gains, addNumber);
        var salary_end = Math.round(accMul(salary_a, accAdd(gains_a, 1)));
        $('#change').html(document.getElementById('last').innerHTML);
        $('#change').find('.number_before').html(salary_a);
        $('#change').find('.number_after').html(salary_end);
        $('#change').find('.ren').addClass(people);




    })

    $('body').on('click', '.weixin', function () {
        $('.ewm_box').toggleClass('block');
    })
    $('body').on('click', '.ewm_close', function () {
        $('.ewm_box').toggleClass('block');
    })


    //再玩一次
    $('body').on('click', '.btn_left', function () {
        cNumber = 0; addNumber = 0; salary = 0; gains = 0; people = 0; positiontype="";
        $('#change').html(document.getElementById('start').innerHTML);
    })

    //返回 
    $('body').on('click', '.back', function(){
        cNumber = 0; addNumber = 0; salary = 0; gains = 0; people = 0; positiontype="";
        $('#change').html(document.getElementById('start').innerHTML);
    })

    var str = "";
    var getsalary = function(salary, reach_salary) {
        var s1 = parseInt(salary);
        var s2 = parseInt(reach_salary);
        if (s2 < 500 || s1 < 500) {
            str = "面议";
            return str;
        } else {
            str = (s1 / 1000) + "k-" + (s2 / 1000) + "k";
            return str;
        }


    }


    //跳槽  职位推荐
    $('body').on('click', '.btn_right', function () {

        //
        $.get("/huodong/getpositon", { salary: postionsalary, posttype: positiontype, limit: 6, industry: "01" },
          function (data) {
             
              if (data.count == 0) {
                  $('#change').html(document.getElementById('no_commend').innerHTML);
              } else {
                  
                  $('#change').html(document.getElementById('have_commend').innerHTML);
                  $(".positions").html("");
                  for (var i = 0; i < data.list.length; i++) {
                      getsalary(data.list[i].salary, data.list[i].reach_salary);
                      $(".positions").append("<a href=\"javascript:zhaopin('" + data.list[i].numberid + "')\" class=\"position\">  <h1>" + data.list[i].name + "<span>" + str + "</span></h1><h2>" + data.list[i].department_common_name + "</h2></a>");
                  }
                  $(".positions").append("<div class='back'>返回</div>");
              }


          });

        
    })

})



//职位详情页面
function zhaopin(id) {
    if (top.location != self.location) {
        var data = {
            numberId: id,
            type: 'firmhome'
        }
        window.parent.postMessage(data, '*');
    }
    else {
        window.open('/zhaopin/' + id + '.html');
    }
}