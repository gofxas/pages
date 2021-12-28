let fs = require('fs')
let request = require('request')
let path = require('path')
const list = [
    "麻豆传媒",
    "麻豆番外篇",
    "麻豆花絮",
    "HongKongDoll",
    "PsychopornTW",
    "果冻传媒",
    "蜜桃影像",
    "天美传媒",
    "精东影业",
    "星空无限传媒",
    "杏吧",
    "皇家华人",
    "乐播传媒",
    "猫爪影像",
    "爱豆",
    "乌鸦传媒",
    "抖阴",
    "麻豆导演系列",
    "兔子先生",
    "大鸟十八",
    "女优淫娃培训营",
    "淫欲游戏王",
    "女神羞羞研究所",
    "突袭女优家",
    "情趣K歌房",
    "KISS糖果屋",
    "开心鬼传媒"
]

// 下载单张图片 src是图片的网上地址 dest是你将这图片放在本地的路径 callback可以是下载之后的事}
const downloadImage = (src, dest, callback) => {
  request.head(src, (err, res, body) => {
    if (err) { console.log(err); return }
    src && request(src).pipe(fs.createWriteStream(dest)).on('close', () => {
      callback && callback(null, dest)
    })
  })
}

const mutlDownload = async (name) => {
    let arts = await JSON.parse(fs.readFileSync(`./json/${name}.json`, 'utf-8'));
    arts.forEach(item => {
        downloadImage(
            item.thumb, 
            `./images/${item.name}.jpg`,
            (err, data) => { err ? console.log(err) : console.log(`下载成功！图片地址是：${path.resolve(data)}`)}
        )
    })
}


mutlDownload(list[3])