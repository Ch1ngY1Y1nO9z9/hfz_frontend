// 各頁面按鈕
export const NavbarButtons = [
    { link: '/Arts/All', Message: 'Fan Arts', langId: 'ArtsTitle', id: '1' },
    { link: '/Wrestlers/All', Message: 'Wrestlers Profile', langId: 'ProfileTitle', id: '2' },
    { link: '/Previous', Message: 'Previous shows', langId: 'PreviousTitle', id: '3' },
    { link: '/Poll', Message: 'Poll', langId: 'PollTitle', id: '4' },
    // { link: '/RROL/main', Message: 'RROL', langId: 'RROLTitle', id: '5' }
]

export const SocialButtons = [
    { link: 'https://twitter.com/HoloFightZ', platform: 'twitter', color: '[#1da1f2]', id: '1' },
    { link: 'https://www.youtube.com/channel/UCGgJUUcCCg5dzRkyG8-fNBw', platform: 'youtube', color: '[#ff0000]', id: '2' },
    { link: 'https://www.twitch.tv/holofightz', platform: 'twitch', color: 'indigo-600', id: '3' }
]

export const Generations = [
    { link: 'Gen0', name: 'Gen 0', langId: 'Gen0', id: '1' },
    { link: 'Gen1', name: 'Gen 1', langId: 'Gen1', id: '2' },
    { link: 'Gen2', name: 'Gen 2', langId: 'Gen2', id: '3' },
    { link: 'GAMERS', name: 'GAMERS', langId: 'Gamers', id: '4' },
    { link: 'Gen3', name: 'Gen 3', langId: 'Gen3', id: '5' },
    { link: 'Gen4', name: 'Gen 4', langId: 'Gen4', id: '6' },
    { link: 'Gen5', name: 'Gen 5', langId: 'Gen5', id: '7' },
    { link: 'HoloX', name: 'HoloX', langId: 'HoloX', id: '8' },
    { link: 'HoloID', name: 'Holo Indeonesia', langId: 'HoloID', id: '9' },
    { link: 'HoloMyth', name: 'Holo Myth', langId: 'HoloMyth', id: '10' },
    { link: 'INNK', name: 'INoNaKa Music', langId: 'INNK', id: '11' },
    { link: 'ProjectHope', name: 'Project:HOPE', langId: 'ProjectHope', id: '12' },
    { link: 'HoloCouncil', name: 'Holo Council', langId: 'HoloCouncil', id: '13' }
]

export const NewsType = [
    { link: '/Arts/All/1', name: 'All', langId: 'Arts.All', id: '1' },
    // {link:'/News/news/1',name:'News',langId:'Arts.News',id:'2'},
    { link: '/Arts/fan_arts/1', name: 'Fan Arts', langId: 'Arts.FanArts', id: '3' },
    { link: '/Arts/Promote/1', name: 'Promote', langId: 'Arts.Promote', id: '4' }
]

export const MembersList = ['ホロライブ', 'ときのそら', 'ロボ子', 'さくらみこ', '星街すいせい', '赤井はあと', 'はあちゃま', '夜空メル', '夏色まつり', 'アキロゼ', '白上フブキ', '大空スバル', '湊あくあ', '百鬼あやめ ', '癒月ちょこ', '紫咲シオン', '大神ミオ', '戌神ころね', '猫又おかゆ', '宝鐘マリン', '兎田ぺこら', '潤羽るしあ ', '不知火フレア', '白銀ノエル', '桐生ココ', '天音かなた', '常闇トワ', '角巻わため', '姫森ルーナ', '獅白ぼたん', '雪花ラミィ', '尾丸ポルカ', '桃鈴ねね', '魔乃アロエ', 'Iofi', 'Moona', 'Risu', 'Anya', 'Ollie', 'Reine', 'Watson', 'Gura', 'Kiara', 'Calli', 'Ina', 'AZKi', 'IRyS', 'Baelz', 'Mumei', 'Kronii', 'Sana', '', 'ラプラス', '鷹嶺ルイ']


export const testData =
{
    id: 186,
    stream_id: 17,
    game: 3,
    type: '1v1',
    rule: 'Extreme Rules',
    paricipants: ["Anya,Matsuri"],
    result: 'Matsuri',
    bet: {
        id: 1,
        match_id: 18,
        betting_data: [{
            gen: 'Gen 1',
            name: 'Matsuri',
            img: '/images/wrestlers/matsuri.webp',
            winRate: 60,
            bet_user: [1, 2, 3]
        },
        {
            gen: 'Holo ID',
            name: 'Anya',
            img: '/images/wrestlers/anya.webp',
            winRate: 42,
            bet_user: [4, 5]
        },
        {
            name: 'DRAW',
            img: '/images/bigref4website.webp',
            bet_user: [6, 7]
        },
        {
            name: 'CRASH',
            img: '/images/OBS.webp',
            bet_user: [8]
        }],
        users: [
            {
                id: 1,
                bet: 10
            }, {
                id: 2,
                bet: 10
            }, {
                id: 3,
                bet: 10
            }, {
                id: 4,
                bet: 10
            }, {
                id: 5,
                bet: 10
            }, {
                id: 6,
                bet: 10
            }, {
                id: 7,
                bet: 10
            }, {
                id: 8,
                bet: 10
            }
        ],
        total_ber: 80,
        visible: 1,
        open: 0,
        plus: 2
    }
}

// export const testData =
// {}

