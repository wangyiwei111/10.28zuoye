// 歌曲数据，JS对象数组
const musicData = [
    {name:"阳光彩虹小白马",singer:"大张伟",type:"happy"},
    {name:"快乐崇拜",singer:"潘玮柏",type:"happy"},
    {name:"稻香",singer:"周杰伦",type:"happy"},
    {name:"阿拉斯加海湾",singer:"蓝心羽",type:"sad"},
    {name:"水星记",singer:"郭顶",type:"sad"},
    {name:"还是分开",singer:"张叶蕾",type:"sad"},
    {name:"这世界那么多人",singer:"莫文蔚",type:"heal"},
    {name:"春风十里",singer:"鹿先森乐队",type:"heal"},
    {name:"小幸运",singer:"田馥甄",type:"heal"},
]
const listDom = document.getElementById('list')
const btns = document.querySelectorAll('.emo-tab button')

//渲染函数
function render(type){
    listDom.innerHTML = ''
    const filter = musicData.filter(item=>item.type === type)
    filter.forEach(song=>{
        listDom.innerHTML += `
        <div class="song-item">
            <h3>${song.name}</h3>
            <p>${song.singer}</p>
        </div>
        `
    })
}

//默认加载开心
render('happy')
btns.forEach(btn=>{
    btn.onclick = ()=>{
        btns.forEach(b=>b.classList.remove('active'))
        btn.classList.add('active')
        render(btn.dataset.type)
    }
})
