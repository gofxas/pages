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

const app = new Vue({
    el: "#app",
    data: {
        list:list,
        active: "麻豆传媒",
        articles: [],
    },
    methods: {
        async changeHandler(e) {
            const res = await fetch('./json/'+e+".json").then(t => t.json())
            this.articles = res;
        }
    },
    created() {
        fetch('./json/麻豆传媒.json').then(t => t.json())
        .then(res => {
            this.articles = res;
        })
    }
})