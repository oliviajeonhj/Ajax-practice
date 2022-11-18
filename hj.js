const pftDB = [
    {
    tabName : '부트스트랩',
    mainImg : './img/main/1.png',
    title : '부트스트랩 ver 5.2로 제작한 꽃차 브랜드 유고마이',
    subImg : ['./img/sub/1.jpg', './img/sub/2.png', './img/sub/3.png'],
    subP : '제작기간 1일 소요',
    siteLink : ['깃허브', '노션']
    },
    {
    tabName : '하드코딩',
    mainImg : './img/main/1.png',
    title : '부트스트랩 ver 5.2로 제작한 꽃차 브랜드 유고마이',
    subImg : ['./img/sub/1.jpg', './img/sub/2.png', './img/sub/3.png'],
    subP : '100% 하드코딩만으로 제작기간 1주일 소요',
    siteLink : ['깃허브', '피그마', '노션']
    },
    {
    tabName : '리액트',
    mainImg : './img/main/1.png',
    title : '부트스트랩 ver 5.2로 제작한 꽃차 브랜드 유고마이',
    subImg : ['./img/sub/1.jpg', './img/sub/2.png', './img/sub/3.png'],
    subP : '리액트를 배우고 처음으로 제작한 사이트 제작기간 3일 소요',
    siteLink : ['깃허브', '피그마', '노션']
    }
]

$(function(){
    var tabList = '';
    $.each(pftDB, function(index, item){
        tabList += `<li class="px-5"><a href="#none">${item.tabName}</a></li>`
    })  
    $('#sec1 .tabList').html(tabList);

    olivia(0);

    function olivia(나와){
        var subImg = '';
        var siteLink = '';
    
        $.each(pftDB[나와].subImg, function(index,item){
            subImg += `<li class="px-5"><img class="img-fluid" src="${item}"/></li>`
        })
    
        $.each(pftDB[나와].siteLink, function(index,item){
            siteLink += `<li class="px-3"><a href="#none">${item}</a></li>`
        })
    
        $('#sec1 .bImg img').attr('src', pftDB[나와].mainImg);
        $('#sec1 .textH h2').html(pftDB[나와].title);
        $('#sec1 .sImg').html(subImg);
        $('#sec1 .textP p').html(pftDB[나와].subP);
        $('#sec1 .siteList').html(siteLink);
    }


})