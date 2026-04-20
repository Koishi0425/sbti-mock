// src/data/mock.ts
// 数据与逻辑分离 - 包含所有题库、选项权重和结果定义

// ==================== 类型定义 ====================

/** 性格维度权重 */
export interface DimensionScore {
  dimension: string;
  score: number;
}

/** 测试选项 */
export interface Option {
  id: string;
  text: string;
  weights: DimensionScore[];
}

/** 测试题目 */
export interface Question {
  id: string;
  questionText: string;
  options: Option[];
}

/** 能力维度属性 */
export interface AbilityScore {
  dimension: string;
  label: string;
  score: number;
}

/** 测试结果 */
export interface Result {
  id: string;
  title: string;
  tags: string[];
  description: string;
  abilities: AbilityScore[];
  recommendations: string[];
}

// ==================== 维度定义 ====================

export const DIMENSIONS = ['E', 'I', 'S', 'N'] as const;
export const DIMENSION_LABELS: Record<string, string> = {
  E: '外向型',
  I: '内向型',
  S: '实感型',
  N: '直觉型',
};

// ==================== Mock 数据：12道测试题 ====================

export const questions: Question[] = [
  {
    id: 'q1',
    questionText: '周末你更想做什么？',
    options: [
      {
        id: 'q1_a',
        text: '约朋友去热闹的酒吧/餐厅聚会',
        weights: [{ dimension: 'E', score: 2 }, { dimension: 'I', score: -1 }],
      },
      {
        id: 'q1_b',
        text: '一个人窝在家里看书/打游戏',
        weights: [{ dimension: 'I', score: 2 }, { dimension: 'E', score: -1 }],
      },
      {
        id: 'q1_c',
        text: '去户外徒步或参加艺术展',
        weights: [{ dimension: 'S', score: 1 }, { dimension: 'N', score: 1 }],
      },
      {
        id: 'q1_d',
        text: '参加主题派对或认识新朋友',
        weights: [{ dimension: 'E', score: 1 }, { dimension: 'N', score: 1 }],
      },
    ],
  },
  {
    id: 'q2',
    questionText: '当你遇到一个新问题时，你倾向于？',
    options: [
      {
        id: 'q2_a',
        text: '依靠过去的经验和已有方法解决',
        weights: [{ dimension: 'S', score: 2 }, { dimension: 'N', score: -1 }],
      },
      {
        id: 'q2_b',
        text: '大胆尝试全新的解决思路',
        weights: [{ dimension: 'N', score: 2 }, { dimension: 'S', score: -1 }],
      },
      {
        id: 'q2_c',
        text: '先分析问题，再制定计划',
        weights: [{ dimension: 'I', score: 1 }, { dimension: 'S', score: 1 }],
      },
      {
        id: 'q2_d',
        text: '先听听大家的想法，再决定',
        weights: [{ dimension: 'E', score: 1 }, { dimension: 'N', score: 1 }],
      },
    ],
  },
  {
    id: 'q3',
    questionText: '你更喜欢什么样的工作环境？',
    options: [
      {
        id: 'q3_a',
        text: '安静独立的空间，可以专注思考',
        weights: [{ dimension: 'I', score: 2 }, { dimension: 'E', score: -1 }],
      },
      {
        id: 'q3_b',
        text: '开放协作的团队氛围',
        weights: [{ dimension: 'E', score: 2 }, { dimension: 'I', score: -1 }],
      },
      {
        id: 'q3_c',
        text: '有明确流程和规范的环境',
        weights: [{ dimension: 'S', score: 2 }, { dimension: 'N', score: -1 }],
      },
      {
        id: 'q3_d',
        text: '自由创新、没有太多限制的空间',
        weights: [{ dimension: 'N', score: 2 }, { dimension: 'S', score: -1 }],
      },
    ],
  },
  {
    id: 'q4',
    questionText: '和朋友聊天时，你更关注什么？',
    options: [
      {
        id: 'q4_a',
        text: '具体的事实和数据',
        weights: [{ dimension: 'S', score: 2 }, { dimension: 'N', score: -1 }],
      },
      {
        id: 'q4_b',
        text: '对方的感受和情绪',
        weights: [{ dimension: 'I', score: 1 }, { dimension: 'N', score: 1 }],
      },
      {
        id: 'q4_c',
        text: '未来的可能性和创意',
        weights: [{ dimension: 'N', score: 2 }, { dimension: 'S', score: -1 }],
      },
      {
        id: 'q4_d',
        text: '当下的热门话题和八卦',
        weights: [{ dimension: 'E', score: 1 }, { dimension: 'I', score: -1 }],
      },
    ],
  },
  {
    id: 'q5',
    questionText: '你做决定时更看重？',
    options: [
      {
        id: 'q5_a',
        text: '逻辑分析和客观事实',
        weights: [{ dimension: 'S', score: 1 }, { dimension: 'N', score: -1 }],
      },
      {
        id: 'q5_b',
        text: '个人价值观和情感因素',
        weights: [{ dimension: 'N', score: 1 }, { dimension: 'S', score: -1 }],
      },
      {
        id: 'q5_c',
        text: '多数人的意见和共识',
        weights: [{ dimension: 'E', score: 1 }, { dimension: 'I', score: -1 }],
      },
      {
        id: 'q5_d',
        text: '自己内心的真实想法',
        weights: [{ dimension: 'I', score: 1 }, { dimension: 'E', score: -1 }],
      },
    ],
  },
  {
    id: 'q6',
    questionText: '旅行时你更喜欢？',
    options: [
      {
        id: 'q6_a',
        text: '精心计划每一天的行程',
        weights: [{ dimension: 'S', score: 2 }, { dimension: 'N', score: -1 }],
      },
      {
        id: 'q6_b',
        text: '随心所欲，走到哪算哪',
        weights: [{ dimension: 'N', score: 2 }, { dimension: 'S', score: -1 }],
      },
      {
        id: 'q6_c',
        text: '热门打卡景点的社交旅行',
        weights: [{ dimension: 'E', score: 2 }, { dimension: 'I', score: -1 }],
      },
      {
        id: 'q6_d',
        text: '独自探索小众目的地的深度游',
        weights: [{ dimension: 'I', score: 2 }, { dimension: 'E', score: -1 }],
      },
    ],
  },
  {
    id: 'q7',
    questionText: '当别人向你倾诉烦恼时，你通常？',
    options: [
      {
        id: 'q7_a',
        text: '给出具体的解决方案',
        weights: [{ dimension: 'S', score: 1 }, { dimension: 'N', score: -1 }],
      },
      {
        id: 'q7_b',
        text: '倾听并给予情感支持',
        weights: [{ dimension: 'I', score: 1 }, { dimension: 'E', score: -1 }],
      },
      {
        id: 'q7_c',
        text: '分享自己类似的经历',
        weights: [{ dimension: 'E', score: 1 }, { dimension: 'I', score: -1 }],
      },
      {
        id: 'q7_d',
        text: '从新角度分析问题本质',
        weights: [{ dimension: 'N', score: 1 }, { dimension: 'S', score: -1 }],
      },
    ],
  },
  {
    id: 'q8',
    questionText: '你更愿意参加哪种活动？',
    options: [
      {
        id: 'q8_a',
        text: '学术讲座或专业研讨会',
        weights: [{ dimension: 'I', score: 1 }, { dimension: 'S', score: 1 }],
      },
      {
        id: 'q8_b',
        text: '音乐节或演唱会',
        weights: [{ dimension: 'E', score: 2 }, { dimension: 'I', score: -1 }],
      },
      {
        id: 'q8_c',
        text: '创意工作坊或艺术体验',
        weights: [{ dimension: 'N', score: 2 }, { dimension: 'S', score: -1 }],
      },
      {
        id: 'q8_d',
        text: '体育比赛或户外运动',
        weights: [{ dimension: 'E', score: 1 }, { dimension: 'S', score: 1 }],
      },
    ],
  },
  {
    id: 'q9',
    questionText: '你觉得自己更擅长？',
    options: [
      {
        id: 'q9_a',
        text: '执行既定计划，完成具体任务',
        weights: [{ dimension: 'S', score: 2 }, { dimension: 'N', score: -1 }],
      },
      {
        id: 'q9_b',
        text: '提出创新想法，规划长远目标',
        weights: [{ dimension: 'N', score: 2 }, { dimension: 'S', score: -1 }],
      },
      {
        id: 'q9_c',
        text: '组织协调，凝聚团队力量',
        weights: [{ dimension: 'E', score: 2 }, { dimension: 'I', score: -1 }],
      },
      {
        id: 'q9_d',
        text: '独立思考，深入研究问题',
        weights: [{ dimension: 'I', score: 2 }, { dimension: 'E', score: -1 }],
      },
    ],
  },
  {
    id: 'q10',
    questionText: '面对压力时，你通常会？',
    options: [
      {
        id: 'q10_a',
        text: '冷静分析问题根源',
        weights: [{ dimension: 'I', score: 1 }, { dimension: 'S', score: 1 }],
      },
      {
        id: 'q10_b',
        text: '找朋友倾诉或寻求支持',
        weights: [{ dimension: 'E', score: 2 }, { dimension: 'I', score: -1 }],
      },
      {
        id: 'q10_c',
        text: '相信直觉，快速做决定',
        weights: [{ dimension: 'N', score: 2 }, { dimension: 'S', score: -1 }],
      },
      {
        id: 'q10_d',
        text: '按照以往经验处理',
        weights: [{ dimension: 'S', score: 2 }, { dimension: 'N', score: -1 }],
      },
    ],
  },
  {
    id: 'q11',
    questionText: '你理想的生活方式是？',
    options: [
      {
        id: 'q11_a',
        text: '规律有序，充实而稳定',
        weights: [{ dimension: 'S', score: 2 }, { dimension: 'N', score: -1 }],
      },
      {
        id: 'q11_b',
        text: '充满惊喜，不断挑战自我',
        weights: [{ dimension: 'N', score: 2 }, { dimension: 'S', score: -1 }],
      },
      {
        id: 'q11_c',
        text: '社交广泛，人脉丰富',
        weights: [{ dimension: 'E', score: 2 }, { dimension: 'I', score: -1 }],
      },
      {
        id: 'q11_d',
        text: '内心平静，享受独处时光',
        weights: [{ dimension: 'I', score: 2 }, { dimension: 'E', score: -1 }],
      },
    ],
  },
  {
    id: 'q12',
    questionText: '你更看重自己的？',
    options: [
      {
        id: 'q12_a',
        text: '执行力和可靠性',
        weights: [{ dimension: 'S', score: 1 }, { dimension: 'N', score: -1 }],
      },
      {
        id: 'q12_b',
        text: '想象力和创造力',
        weights: [{ dimension: 'N', score: 1 }, { dimension: 'S', score: -1 }],
      },
      {
        id: 'q12_c',
        text: '领导力和影响力',
        weights: [{ dimension: 'E', score: 1 }, { dimension: 'I', score: -1 }],
      },
      {
        id: 'q12_d',
        text: '洞察力和分析力',
        weights: [{ dimension: 'I', score: 1 }, { dimension: 'E', score: -1 }],
      },
    ],
  },
];

// ==================== Mock 数据：测试结果 ====================

export const results: Result[] = [
  {
    id: 'r1',
    title: 'ENFP',
    tags: ['自由灵魂', '点子王', '社交蝴蝶', '热情洋溢'],
    description:
      '你是一个充满热情和创造力的自由灵魂！你拥有无限的想象力和好奇心，总能从平凡中发现不凡。你的能量场能够感染周围的人，是朋友中的气氛担当。但有时候你可能过于理想化，需要学会在创意和现实之间找到平衡。',
    abilities: [
      { dimension: 'E', label: '外向活跃', score: 92 },
      { dimension: 'N', label: '直觉洞察', score: 88 },
      { dimension: 'S', label: '务实稳定', score: 45 },
      { dimension: 'I', label: '内向沉稳', score: 38 },
    ],
    recommendations: [
      '适合从事需要创意和沟通的工作，如市场营销、策划、咨询',
      '找到一个能让你自由表达想法的工作环境',
      '学会给项目设定明确的截止日期',
      '给自己留一些独处的时间来沉淀想法',
    ],
  },
  {
    id: 'r2',
    title: 'INTJ',
    tags: ['策划大师', '理性思考者', '完美主义者', '独立自主'],
    description:
      '你是一个天生的战略家！拥有强大的逻辑思维能力和独立思考精神。你善于制定长期计划，追求卓越和完美。在你眼中，世界充满了等待被解决的有趣问题。你的洞察力极其敏锐，能够看到别人忽视的可能性。',
    abilities: [
      { dimension: 'I', label: '内向沉稳', score: 90 },
      { dimension: 'N', label: '直觉洞察', score: 94 },
      { dimension: 'S', label: '务实稳定', score: 42 },
      { dimension: 'E', label: '外向活跃', score: 35 },
    ],
    recommendations: [
      '适合从事需要深度思考和专业技能的工作，如科研、金融、战略咨询',
      '找一个能发挥你分析能力的平台',
      '学会欣赏过程中的不确定性，而不是只关注结果',
      '多参与团队协作，发掘合作的价值',
    ],
  },
  {
    id: 'r3',
    title: 'ESFJ',
    tags: ['暖心天使', '社交达人', '责任担当', '照顾者'],
    description:
      '你是一个温暖而有责任感的人！天生具有照顾他人的本能，总是乐于帮助别人。你的社交能力强，善于协调人际关系，是朋友圈中的润滑剂。你重视传统和秩序，喜欢按照计划行事。你的热情和真诚感染着身边的每一个人。',
    abilities: [
      { dimension: 'E', label: '外向活跃', score: 88 },
      { dimension: 'S', label: '务实稳定', score: 85 },
      { dimension: 'N', label: '直觉洞察', score: 40 },
      { dimension: 'I', label: '内向沉稳', score: 32 },
    ],
    recommendations: [
      '适合从事需要人际沟通和协调能力的工作，如人力资源、教育、医疗服务',
      '找一个能让你帮助他人、发挥价值的工作环境',
      '学会说"不"，给自己留一些私人空间',
      '接受不是每个人都会喜欢你这个事实，减少自我怀疑',
    ],
  },
  {
    id: 'r4',
    title: 'ISTP',
    tags: ['动手专家', '冷静分析', '实用主义者', '冒险家'],
    description:
      '你是一个务实的行动派！喜欢探究事物的运作原理，动手能力超强。你冷静理性，面对紧急情况能够保持镇定并快速反应。你享受独处和自由，不喜欢被规则束缚。你的逻辑思维和实际动手能力让你成为解决复杂问题的高手。',
    abilities: [
      { dimension: 'I', label: '内向沉稳', score: 86 },
      { dimension: 'S', label: '务实稳定', score: 90 },
      { dimension: 'E', label: '外向活跃', score: 38 },
      { dimension: 'N', label: '直觉洞察', score: 42 },
    ],
    recommendations: [
      '适合从事需要技术能力和动手操作的工作，如工程、机械、编程、设计',
      '找一个能让你独立工作、有灵活时间的工作环境',
      '学会表达自己的想法和感受，不要总是藏在心里',
      '多关注长期目标，而不仅仅是眼前的即时满足',
    ],
  },
];

// ==================== 计分算法 ====================

/**
 * 计算最终性格维度分数
 * @param answers 用户答案（题目ID -> 选项ID的映射）
 * @returns 各维度的最终分数 {dimension: score}
 */
export function calculateScores(
  answers: Record<string, string>
): Record<string, number> {
  const scores: Record<string, number> = { E: 0, I: 0, S: 0, N: 0 };

  Object.entries(answers).forEach(([questionId, optionId]) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return;

    const option = question.options.find((o) => o.id === optionId);
    if (!option) return;

    option.weights.forEach(({ dimension, score }) => {
      scores[dimension] = (scores[dimension] || 0) + score;
    });
  });

  return scores;
}

/**
 * 根据分数确定性格类型
 * @param scores 各维度分数
 * @returns 性格类型代码（如 "ENFP"）
 */
export function determinePersonalityType(
  scores: Record<string, number>
): string {
  const eOrI = scores.E >= scores.I ? 'E' : 'I';
  const sOrN = scores.S >= scores.N ? 'S' : 'N';
  const tOrF = scores.T >= scores.F ? 'T' : 'F';
  const jOrP = scores.J >= scores.P ? 'J' : 'P';
  return `${eOrI}${sOrN}${tOrF}${jOrP}`;
}

/**
 * 根据性格类型和实际分数获取对应结果
 * @param type 性格类型代码
 * @param scores 实际计算的维度分数
 * @returns 对应的Result对象，包含动态计算的能力值
 */
export function getResultByType(
  type: string,
  scores: Record<string, number>
): Result {
  // 找出主导维度
  const eOrI = (scores.E || 0) >= (scores.I || 0) ? 'E' : 'I';
  const sOrN = (scores.S || 0) >= (scores.N || 0) ? 'S' : 'N';

  // 根据主导维度选择最匹配的结果模板
  // E + S -> ESFJ, E + N -> ENFP, I + S -> ISTP, I + N -> INTJ
  let templateTitle = 'INTJ';
  if (eOrI === 'E' && sOrN === 'S') templateTitle = 'ESFJ';
  else if (eOrI === 'E' && sOrN === 'N') templateTitle = 'ENFP';
  else if (eOrI === 'I' && sOrN === 'S') templateTitle = 'ISTP';
  else if (eOrI === 'I' && sOrN === 'N') templateTitle = 'INTJ';

  const template = results.find((r) => r.title === templateTitle);

  // 计算动态的能力分数（0-100范围）
  const maxPossible = 24; // 12道题，每题最多+/-2
  const normalize = (raw: number) =>
    Math.max(0, Math.min(100, Math.round(((raw + maxPossible) / (maxPossible * 2)) * 100)));

  const dynamicAbilities: AbilityScore[] = [
    { dimension: 'E', label: '外向活跃', score: normalize(scores.E || 0) },
    { dimension: 'I', label: '内向沉稳', score: normalize(scores.I || 0) },
    { dimension: 'S', label: '务实稳定', score: normalize(scores.S || 0) },
    { dimension: 'N', label: '直觉洞察', score: normalize(scores.N || 0) },
  ];

  if (template) {
    return { ...template, abilities: dynamicAbilities };
  }

  return {
    id: 'default',
    title: type || '混合型',
    tags: ['多面手', '灵活适应', '平衡发展'],
    description: '你的性格具有多样性和适应性，能够根据不同情境灵活切换模式。',
    abilities: dynamicAbilities,
    recommendations: [
      '发挥你的适应性优势，在不同场景中展现不同面貌',
      '找到最能发挥你综合能力的工作角色',
      '不要迷失在"成为别人期待的样子"中',
      '培养一到两个核心优势',
    ],
  };
}
