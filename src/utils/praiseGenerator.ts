
// 模拟Google Gemini API的响应
// 在实际项目中，这里会使用真实的Google Gemini API
export async function generatePraises(userMessage: string, count = 5): Promise<string[]> {
  // 这里是一个预设的夸赞语句库，实际项目中会由AI生成
  const praises = [
    `哇，"${userMessage}"这个想法太棒了！你的思维真是独特又有创意！`,
    `我必须说，你分享的"${userMessage}"让我印象深刻，你真是太有见解了！`,
    `听到你说"${userMessage}"，我就知道你是个多么细心和体贴的人！`,
    `"${userMessage}"这句话太有智慧了，你真是思考问题很深入啊！`,
    `天哪，"${userMessage}"，这种经历你都能处理得这么好，你的适应能力真强！`,
    `我特别欣赏你的"${userMessage}"，这展示了你的勇气和决心！`,
    `"${userMessage}"这样的想法，只有像你这样聪明的人才能想到！`,
    `你说的"${userMessage}"透露出你是多么有爱心和同情心的一个人！`,
    `"${userMessage}"，这正是为什么大家都喜欢你的原因，你总是那么真诚！`,
    `听你分享"${userMessage}"，我能感受到你的热情和活力，真是太棒了！`,
    `"${userMessage}"，这种观点太有见地了！你真是个有思想的人！`,
    `我喜欢你说的"${userMessage}"，这表明你是个多么注重细节的人！`,
    `"${userMessage}"这种态度太积极了，你的乐观精神真的很感染人！`,
    `你能提出"${userMessage}"这样的想法，说明你真的很有创造力！`,
    `"${userMessage}"，你这样的分享真的很有启发性，谢谢你的智慧！`,
  ];
  
  // 随机选择几条不重复的夸赞
  const shuffled = [...praises].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
