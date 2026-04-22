// src/data/mock.ts
// 王菲歌曲推荐测试 - 数据与逻辑分离

// ==================== 类型定义 ====================

/** 歌曲数据结构 */
export interface Song {
  id: string;
  title: string;
  year: string;
  album: string;
  albumImage?: string; // 专辑封面图片路径
  music?: string; // 音乐文件路径
  originalArtist?: string;
  description: string;
  lyrics: string;
  priority: number; // 用于同分时的优先级
}

/** 歌曲权重项 */
export interface WeightItem {
  songId: string;
  score: number; // 加分分值
}

/** 测试选项 */
export interface Option {
  id: string;
  text: string;
  weights: WeightItem[]; // 对应歌曲ID及其加分
}

/** 测试题目 */
export interface Question {
  id: string;
  questionText: string;
  options: Option[];
}

/** 测试结果 */
export interface Result {
  primary: Song;
  secondaries: Song[];
}

// ==================== 歌曲数据 ====================

export const songs: Song[] = [
  {
    id: '胡思乱想',
    title: '《胡思乱想》',
    year: '1994',
    album: '《胡思乱想》',
    albumImage: '/albums/husiluanxiang.jpg',
    originalArtist: 'Bluebeard — Cocteau Twins',
    description: '就让情绪失控，任由自己想哭、想笑、也想跳',
    lyrics: '"无端想某人 想得天昏地暗"',
    priority: 1,
  },
  {
    id: '梦中人',
    title: '《梦中人》',
    year: '1994',
    album: '《胡思乱想》',
    albumImage: '/albums/husiluanxiang.jpg',
    originalArtist: 'Dreams — The Cranberries',
    description: '阿菲给自己造梦，攥着金鱼袋在空公寓摇头晃脑，自演一场热恋。再看次《重庆森林》吧!',
    lyrics: '"梦中人 一分钟抱紧 接十分钟的吻"',
    priority: 2,
  },
  {
    id: '讨好自己',
    title: '《讨好自己》',
    year: '1994',
    album: '《讨好自己》',
    albumImage: '/albums/taohaoziji.jpg',
    description: '讨好自己，明知不过是自欺',
    lyrics: '"漫天的是非 做我的真理"',
    priority: 3,
  },
  {
    id: '为非作歹',
    title: '《为非作歹》',
    year: '1994',
    album: '《讨好自己》',
    albumImage: '/albums/taohaoziji.jpg',
    originalArtist: "Here's Where the Story Ends — The Sundays",
    description: '不错，那是爱情',
    lyrics: '"如何是对 何谓做错 我不太清楚 沉迷地爱 宁愿犯错 错失却不可"',
    priority: 4,
  },
  {
    id: '假期',
    title: '《假期》',
    year: '1995',
    album: '《Di-Dar》',
    albumImage: '/albums/didar.jpg',
    description: '当作是某段意外假期，我爱上过你',
    lyrics: '"现在尽量放任吧 现在尽量快乐吧 现在尽量纪念吧 始终都需要回家"',
    priority: 5,
  },
  {
    id: 'Di-Dar',
    title: '《Di-Dar》',
    year: '1995',
    album: '《Di-Dar》',
    albumImage: '/albums/didar.jpg',
    description: '"Di-Dar"，很有意思的谐音，就当是又过了一秒',
    lyrics: '"不要偷看你一秒 是害怕突然会偷笑"',
    priority: 6,
  },
  {
    id: '浮躁',
    title: '《浮躁》',
    year: '1996',
    album: '《浮躁》',
    albumImage: '/albums/fuzao.jpg',
    description: '天高气爽，心旷神怡',
    lyrics: '"九月里 平淡无聊 一切都好 只缺烦恼"',
    priority: 7,
  },
  {
    id: '分裂',
    title: '《分裂》',
    year: '1996',
    album: '《浮躁》',
    albumImage: '/albums/fuzao.jpg',
    description: '一半热，一半冷；一半分享，一半留给自己',
    lyrics: '"一面笑得天真无邪 一面看破一切"',
    priority: 8,
  },
  {
    id: '末日',
    title: '《末日》',
    year: '1996',
    album: '《浮躁》',
    albumImage: '/albums/fuzao.jpg',
    description: '这不是末日，而是末日之后',
    lyrics: '"清规戒律 没有意义 三心二意 才是魅力"',
    priority: 9,
  },
  {
    id: '天空',
    title: '《天空》',
    year: '1994',
    album: '《天空》',
    albumImage: '/albums/tiankong.jpg',
    description: '同一片天空，何时才能再相连',
    lyrics: '"我的天空 为何挂满湿的泪 我的天空 为何总灰的脸"',
    priority: 10,
  },
  {
    id: '天使',
    title: '《天使》',
    year: '1994',
    album: '《天空》',
    albumImage: '/albums/tiankong.jpg',
    description: 'May you lovers finally become spouses!!',
    lyrics: '"我不相信 一瞬间的勇气 我只接受 一辈子的约定"',
    priority: 11,
  },
  {
    id: '但愿人长久',
    title: '《但愿人长久》',
    year: '1995',
    album: '《菲靡靡之音》',
    albumImage: '/albums/feimimi.jpg',
    originalArtist: '邓丽君',
    description: '人有悲欢离合 月有阴晴圆缺 此事古难全',
    lyrics: '"但愿人长久 千里共婵娟"',
    priority: 12,
  },
  {
    id: '不留',
    title: '《不留》',
    year: '2003',
    album: '《将爱》',
    albumImage: '/albums/jiangai.jpg',
    description: '如果我还有哀伤，让风吹散它',
    lyrics: '"情愿什么也不留下 再没有什么牵挂"',
    priority: 13,
  },
  {
    id: '乘客',
    title: '《乘客》',
    year: '2003',
    album: '《将爱》',
    albumImage: '/albums/jiangai.jpg',
    originalArtist: 'Going Home — Sophie Zelmani',
    description: '让我感谢你，赠我空欢喜——《Going Home》（粤语填词）',
    lyrics: '"坐你开的车 听你听的歌"',
    priority: 14,
  },
  {
    id: '脸',
    title: '《脸》',
    year: '1998',
    album: '《唱游》',
    albumImage: '/albums/changyou.jpg',
    description: '两个人的语言系统，外面的人听不懂，里面的人无需多说',
    lyrics: '"最好 没有人明白我说什么 只有你 听懂我想什么"',
    priority: 15,
  },
  {
    id: '醒不来',
    title: '《醒不来》',
    year: '1998',
    album: '《唱游》',
    albumImage: '/albums/changyou.jpg',
    description: '睡、悬浮、发呆',
    lyrics: '"分不清白天 看不见黑夜"',
    priority: 16,
  },
  {
    id: '你快乐所以我快乐',
    title: '《你快乐所以我快乐》',
    year: '1997',
    album: '《王菲》',
    albumImage: '/albums/wangfei.jpg',
    description: '没有什么"自己"，附随到心安理得',
    lyrics: '"你眉头开了 所以我笑了 你眼睛红了 我的天灰了"',
    priority: 17,
  },
  {
    id: '只爱陌生人',
    title: '《只爱陌生人》',
    year: '1999',
    album: '《只爱陌生人》',
    albumImage: '/albums/zhiaimoshengren.jpg',
    description: '你是谁都行，反正我不会记得',
    lyrics: '"当我需要的只是一个吻 就给我一个吻 我只爱陌生人"',
    priority: 18,
  },
  {
    id: '百年孤寂',
    title: '《百年孤寂》',
    year: '1999',
    album: '《只爱陌生人》',
    albumImage: '/albums/zhiaimoshengren.jpg',
    description: '空空如也啊，空空如也',
    lyrics: '"背影是真的 人是假的 没什么执着 一百年前 你不是你 我不是我"',
    priority: 19,
  },
  {
    id: '不得了',
    title: '《不得了》',
    year: '1997',
    album: '《敷衍》（2015）',
    albumImage: '/albums/fuyan.jpg',
    description: '可是我觉得这很不得了啊',
    lyrics: '"不得了 不需发烧 都不紧要 不需要叫嚣"',
    priority: 20,
  },
  {
    id: '新房客',
    title: '《新房客》',
    year: '2000',
    album: '《寓言》',
    albumImage: '/albums/yuyan.jpg',
    description: '一切都来得正好，不缺烦恼',
    lyrics: '"有人在吗 有谁来找 我说你好 你说打扰"',
    priority: 21,
  },
  {
    id: '彼岸花',
    title: '《彼岸花》',
    year: '2000',
    album: '《寓言》',
    albumImage: '/albums/yuyan.jpg',
    description: '关于被解构的"浪漫"的一地狼藉，王菲所选择的答案依然是相信美好',
    lyrics: '"他来 我对自己说 我不害怕 我很爱他"',
    priority: 22,
  },
];

// 歌曲ID到对象的映射
const songMap = new Map(songs.map(s => [s.id, s]));

// ==================== 12道测试题（来自文档） ====================

export const questions: Question[] = [
  {
    id: 'q1',
    questionText: '一个没有任何安排的周末下午，你更愿意？',
    options: [
      { id: 'q1_a', text: '拉上窗帘，躺在床上发呆，什么也不做', weights: [{ songId: '胡思乱想', score: 3 }, { songId: '分裂', score: 1 }, { songId: '醒不来', score: 1 }, { songId: '末日', score: 1 }] },
      { id: 'q1_b', text: '约最好的朋友，找个安静的咖啡馆坐一下午', weights: [{ songId: '天空', score: 1 }, { songId: '但愿人长久', score: 1 }, { songId: '你快乐所以我快乐', score: 1 }, { songId: '梦中人', score: 1 }] },
      { id: 'q1_c', text: '戴上耳机，脑子里想一些乱七八糟的事', weights: [{ songId: 'Di-Dar', score: 1 }, { songId: '只爱陌生人', score: 1 }, { songId: '百年孤寂', score: 1 }, { songId: '乘客', score: 1 }] },
      { id: 'q1_d', text: '找个借口推掉所有邀约，给自己放个假', weights: [{ songId: '假期', score: 3 }, { songId: '讨好自己', score: 1 }, { songId: '不留', score: 1 }, { songId: '脸', score: 1 }] },
    ],
  },
  {
    id: 'q2',
    questionText: '别人对你的负面评价，你通常会？',
    options: [
      { id: 'q2_a', text: '左耳进右耳出，根本不在乎', weights: [{ songId: '浮躁', score: 3 }, { songId: 'Di-Dar', score: 1 }, { songId: '只爱陌生人', score: 1 }, { songId: '百年孤寂', score: 1 }] },
      { id: 'q2_b', text: '表面不在意，心里会偷偷难过很久', weights: [{ songId: '天空', score: 3 }, { songId: '但愿人长久', score: 1 }, { songId: '你快乐所以我快乐', score: 1 }, { songId: '梦中人', score: 1 }] },
      { id: 'q2_c', text: '会反思，但不会改变自己', weights: [{ songId: '分裂', score: 3 }, { songId: '胡思乱想', score: 1 }, { songId: '醒不来', score: 1 }, { songId: '末日', score: 1 }] },
      { id: 'q2_d', text: '直接无视，我自己是什么样我最清楚', weights: [{ songId: '讨好自己', score: 3 }, { songId: '为非作歹', score: 1 }, { songId: '不留', score: 1 }, { songId: '不得了', score: 1 }] },
    ],
  },
  {
    id: 'q3',
    questionText: '家里来了完全不熟悉的客人，你会？',
    options: [
      { id: 'q3_a', text: '躲在房间里不出来', weights: [{ songId: '百年孤寂', score: 3 }, { songId: '只爱陌生人', score: 1 }, { songId: '浮躁', score: 1 }, { songId: 'Di-Dar', score: 1 }] },
      { id: 'q3_b', text: '礼貌地打个招呼，然后就去做自己的事', weights: [{ songId: '你快乐所以我快乐', score: 3 }, { songId: '天空', score: 1 }, { songId: '但愿人长久', score: 1 }, { songId: '梦中人', score: 1 }] },
      { id: 'q3_c', text: '硬着头皮陪聊，心里盼着他们快点走', weights: [{ songId: '醒不来', score: 3 }, { songId: '胡思乱想', score: 1 }, { songId: '分裂', score: 1 }, { songId: '末日', score: 1 }] },
      { id: 'q3_d', text: '找个借口立刻出门', weights: [{ songId: '为非作歹', score: 3 }, { songId: '讨好自己', score: 1 }, { songId: '不留', score: 1 }, { songId: '新房客', score: 1 }] },
    ],
  },
  {
    id: 'q4',
    questionText: '爱情里最美好的阶段可能是？',
    options: [
      { id: 'q4_a', text: '分开之后，回忆的时候', weights: [{ songId: '只爱陌生人', score: 3 }, { songId: '百年孤寂', score: 1 }, { songId: '乘客', score: 1 }, { songId: '新房客', score: 1 }] },
      { id: 'q4_b', text: '刚在一起，热恋的时候', weights: [{ songId: '梦中人', score: 3 }, { songId: '天空', score: 1 }, { songId: '但愿人长久', score: 1 }, { songId: '你快乐所以我快乐', score: 1 }] },
      { id: 'q4_c', text: '暧昧不清，互相试探的时候', weights: [{ songId: '末日', score: 3 }, { songId: '胡思乱想', score: 1 }, { songId: '分裂', score: 1 }, { songId: '醒不来', score: 1 }] },
      { id: 'q4_d', text: '平淡如水，互相陪伴的时候', weights: [{ songId: '不留', score: 3 }, { songId: '讨好自己', score: 1 }, { songId: '为非作歹', score: 1 }, { songId: '脸', score: 1 }] },
    ],
  },
  {
    id: 'q5',
    questionText: '假如你失恋了，你会怎么做？',
    options: [
      { id: 'q5_a', text: '一个人待着，谁也别来打扰', weights: [{ songId: '百年孤寂', score: 1 }, { songId: '只爱陌生人', score: 1 }, { songId: '浮躁', score: 1 }, { songId: 'Di-Dar', score: 1 }] },
      { id: 'q5_b', text: '找朋友倾诉，哭一场就好了', weights: [{ songId: '天空', score: 1 }, { songId: '但愿人长久', score: 1 }, { songId: '你快乐所以我快乐', score: 1 }, { songId: '梦中人', score: 1 }] },
      { id: 'q5_c', text: '把所有的情绪都写在日记里', weights: [{ songId: '胡思乱想', score: 1 }, { songId: '分裂', score: 1 }, { songId: '醒不来', score: 1 }, { songId: '末日', score: 1 }] },
      { id: 'q5_d', text: '删掉所有联系方式，再也不联系', weights: [{ songId: '不留', score: 1 }, { songId: '讨好自己', score: 1 }, { songId: '为非作歹', score: 1 }, { songId: '不得了', score: 1 }] },
    ],
  },
  {
    id: 'q6',
    questionText: '如果喜欢的人不喜欢你，你会？',
    options: [
      { id: 'q6_a', text: '立刻放弃，绝不纠缠', weights: [{ songId: '不得了', score: 3 }, { songId: '讨好自己', score: 1 }, { songId: '为非作歹', score: 1 }, { songId: '不留', score: 1 }] },
      { id: 'q6_b', text: '默默喜欢，直到忘记他', weights: [{ songId: '梦中人', score: 1 }, { songId: '天空', score: 1 }, { songId: '但愿人长久', score: 1 }, { songId: '你快乐所以我快乐', score: 1 }] },
      { id: 'q6_c', text: '勇敢表白，哪怕被拒绝', weights: [{ songId: '分裂', score: 1 }, { songId: '胡思乱想', score: 1 }, { songId: '醒不来', score: 1 }, { songId: '末日', score: 1 }] },
      { id: 'q6_d', text: '做朋友，一直陪在他身边', weights: [{ songId: '乘客', score: 3 }, { songId: '新房客', score: 1 }, { songId: 'Di-Dar', score: 1 }, { songId: '浮躁', score: 1 }] },
    ],
  },
  {
    id: 'q7',
    questionText: '难过的时候你会？',
    options: [
      { id: 'q7_a', text: '躺在床上发呆，什么也不想做', weights: [{ songId: '醒不来', score: 1 }, { songId: '胡思乱想', score: 1 }, { songId: '分裂', score: 1 }, { songId: '末日', score: 1 }] },
      { id: 'q7_b', text: '第一时间找朋友倾诉', weights: [{ songId: '天空', score: 1 }, { songId: '但愿人长久', score: 1 }, { songId: '你快乐所以我快乐', score: 1 }, { songId: '梦中人', score: 1 }] },
      { id: 'q7_c', text: '听歌，把音量开到最大', weights: [{ songId: '浮躁', score: 1 }, { songId: 'Di-Dar', score: 1 }, { songId: '只爱陌生人', score: 1 }, { songId: '百年孤寂', score: 1 }] },
      { id: 'q7_d', text: '出去走走，吹吹风就好了', weights: [{ songId: '新房客', score: 3 }, { songId: '乘客', score: 1 }, { songId: '讨好自己', score: 1 }, { songId: '不留', score: 1 }] },
    ],
  },
  {
    id: 'q8',
    questionText: '非要选一个的话，你觉得自己是一个？',
    options: [
      { id: 'q8_a', text: '矛盾的人，连自己都搞不懂自己', weights: [{ songId: '胡思乱想', score: 1 }, { songId: '分裂', score: 1 }, { songId: '醒不来', score: 1 }, { songId: '末日', score: 1 }] },
      { id: 'q8_b', text: '善良的人，总是忍不住帮助别人', weights: [{ songId: '但愿人长久', score: 3 }, { songId: '天空', score: 1 }, { songId: '你快乐所以我快乐', score: 1 }, { songId: '梦中人', score: 1 }] },
      { id: 'q8_c', text: '孤独的人，习惯了一个人', weights: [{ songId: '百年孤寂', score: 1 }, { songId: '只爱陌生人', score: 1 }, { songId: '乘客', score: 1 }, { songId: '新房客', score: 1 }] },
      { id: 'q8_d', text: '自私的人，只在乎自己的感受', weights: [{ songId: '脸', score: 3 }, { songId: '讨好自己', score: 1 }, { songId: '为非作歹', score: 1 }, { songId: '不留', score: 1 }] },
    ],
  },
  {
    id: 'q9',
    questionText: '你有很多秘密吗？',
    options: [
      { id: 'q9_a', text: '有很多，从来没有告诉过任何人', weights: [{ songId: '脸', score: 1 }, { songId: '百年孤寂', score: 1 }, { songId: '只爱陌生人', score: 1 }, { songId: '浮躁', score: 1 }] },
      { id: 'q9_b', text: '有一些，只告诉最信任的朋友', weights: [{ songId: '你快乐所以我快乐', score: 1 }, { songId: '天空', score: 1 }, { songId: '但愿人长久', score: 1 }, { songId: '梦中人', score: 1 }] },
      { id: 'q9_c', text: '很少，没什么不能说的', weights: [{ songId: '乘客', score: 1 }, { songId: '新房客', score: 1 }, { songId: '胡思乱想', score: 1 }, { songId: '分裂', score: 1 }] },
      { id: 'q9_d', text: '没有，我是一个很透明的人', weights: [{ songId: '不得了', score: 1 }, { songId: '为非作歹', score: 1 }, { songId: '讨好自己', score: 1 }, { songId: '不留', score: 1 }] },
    ],
  },
  {
    id: 'q10',
    questionText: '如果可以回到过去，你会？',
    options: [
      { id: 'q10_a', text: '回到和他相遇的那天', weights: [{ songId: '末日', score: 1 }, { songId: '梦中人', score: 1 }, { songId: '但愿人长久', score: 1 }, { songId: '醒不来', score: 1 }] },
      { id: 'q10_b', text: '回到小时候，重新来过', weights: [{ songId: '天空', score: 1 }, { songId: '你快乐所以我快乐', score: 1 }, { songId: '但愿人长久', score: 1 }, { songId: '醒不来', score: 1 }] },
      { id: 'q10_c', text: '什么都不改变，过去的就让它过去', weights: [{ songId: '新房客', score: 1 }, { songId: '乘客', score: 1 }, { songId: '分裂', score: 1 }, { songId: '胡思乱想', score: 1 }] },
      { id: 'q10_d', text: '不想回到过去，未来更值得期待', weights: [{ songId: '只爱陌生人', score: 3 }, { songId: '百年孤寂', score: 1 }, { songId: 'Di-Dar', score: 1 }, { songId: '浮躁', score: 1 }] },
    ],
  },
  {
    id: 'q11',
    questionText: '你相信有另一个世界吗？',
    options: [
      { id: 'q11_a', text: '相信，离开的人会在那里等我们', weights: [{ songId: '末日', score: 1 }, { songId: '醒不来', score: 1 }, { songId: '分裂', score: 1 }, { songId: '胡思乱想', score: 1 }] },
      { id: 'q11_b', text: '不相信，人死了就什么都没有了', weights: [{ songId: '讨好自己', score: 1 }, { songId: '为非作歹', score: 1 }, { songId: '不留', score: 1 }, { songId: '不得了', score: 1 }] },
      { id: 'q11_c', text: '不知道，希望有吧', weights: [{ songId: '天空', score: 1 }, { songId: '但愿人长久', score: 1 }, { songId: '你快乐所以我快乐', score: 1 }, { songId: '梦中人', score: 1 }] },
      { id: 'q11_d', text: '无所谓，和我没关系', weights: [{ songId: 'Di-Dar', score: 3 }, { songId: '浮躁', score: 1 }, { songId: '只爱陌生人', score: 1 }, { songId: '百年孤寂', score: 1 }] },
    ],
  },
  {
    id: 'q12',
    questionText: '如果明天就是世界末日，你会？',
    options: [
      { id: 'q12_a', text: '一个人待着，安静地等待', weights: [{ songId: '末日', score: 1 }, { songId: '百年孤寂', score: 1 }, { songId: '只爱陌生人', score: 1 }, { songId: '浮躁', score: 1 }] },
      { id: 'q12_b', text: '和自己爱的人在一起', weights: [{ songId: '你快乐所以我快乐', score: 1 }, { songId: '天空', score: 1 }, { songId: '但愿人长久', score: 1 }, { songId: '梦中人', score: 1 }] },
      { id: 'q12_c', text: '去做自己一直想做却没有做的事', weights: [{ songId: '不得了', score: 1 }, { songId: '为非作歹', score: 1 }, { songId: '讨好自己', score: 1 }, { songId: '不留', score: 1 }] },
      { id: 'q12_d', text: '无所谓，和平常一样', weights: [{ songId: 'Di-Dar', score: 1 }, { songId: '乘客', score: 1 }, { songId: '新房客', score: 1 }, { songId: '脸', score: 1 }] },
    ],
  },
];

// ==================== 计分和结果计算 ====================

/**
 * 计算各歌曲的得分
 * @param answers 用户答案（题目ID -> 选项ID的映射）
 * @returns 各歌曲的得分 {songId: score}
 */
export function calculateScores(answers: Record<string, string>): Record<string, number> {
  const scores: Record<string, number> = {};

  // 初始化所有歌曲为0分
  songs.forEach(s => scores[s.id] = 0);

  // 遍历用户答案，计算每首歌的得分
  Object.entries(answers).forEach(([questionId, optionId]) => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return;

    const option = question.options.find(o => o.id === optionId);
    if (!option) return;

    // 根据权重项的分数加分
    option.weights.forEach(({ songId, score }) => {
      if (!scores[songId]) scores[songId] = 0;
      scores[songId] = (scores[songId] || 0) + score;
    });
  });

  return scores;
}

/**
 * 检查是否触发顶级隐藏款《彼岸花》
 */
export function checkUltimateHidden(answers: Record<string, string>, scores: Record<string, number>): Song | null {
  const condition1 = answers['q7'] === 'q7_a';
  const condition2 = answers['q10'] === 'q10_a';
  const condition3 = answers['q11'] === 'q11_a';
  const condition4 = (scores['末日'] || 0) >= 6 || (scores['醒不来'] || 0) >= 6;
  
  if (condition1 && condition2 && condition3 && condition4) {
    return songMap.get('彼岸花') || null;
  }
  return null;
}

/**
 * 检查是否触发次级隐藏款《天使》
 */
export function checkAngelHidden(answers: Record<string, string>, scores: Record<string, number>): Song | null {
  const condition1 = answers['q6'] === 'q6_d';
  const condition2 = answers['q8'] === 'q8_b';
  const condition3 = answers['q12'] === 'q12_b';
  const condition4 = (scores['天空'] || 0) >= 5 || (scores['你快乐所以我快乐'] || 0) >= 5;
  
  if (condition1 && condition2 && condition3 && condition4) {
    return songMap.get('天使') || null;
  }
  return null;
}

/**
 * 根据得分获取测试结果
 */
export function determineResult(answers: Record<string, string>): { primary: Song; secondaries: Song[] } {
  const scores = calculateScores(answers);

  // 排序得分
  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1] || (songMap.get(a[0])?.priority || 0) - (songMap.get(b[0])?.priority || 0));

  // 检查隐藏款
  const ultimate = checkUltimateHidden(answers, scores);
  if (ultimate) {
    const primary = ultimate;
    const secondaries = sorted.slice(1, 3).map(([id]) => songMap.get(id)!).filter(Boolean);
    return { primary, secondaries };
  }

  const angel = checkAngelHidden(answers, scores);
  if (angel) {
    const primary = angel;
    const secondaries = sorted.slice(1, 3).map(([id]) => songMap.get(id)!).filter(Boolean);
    return { primary, secondaries };
  }

  // 普通结果
  const topN = sorted.slice(0, 4);
  const primary = songMap.get(topN[0][0]) || songs[0];
  const secondaries = topN.slice(1, 3).map(([id]) => songMap.get(id)!).filter(Boolean);

  return { primary, secondaries };
}

