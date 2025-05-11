
// 注意：这个文件仅作为示意，实际项目中需要替换为真实的Google Gemini API实现
// 并且API密钥应该存储在安全的环境中，而不是直接写在代码里

interface GeminiResponse {
  praises: string[];
}

export async function callGeminiAPI(userMessage: string): Promise<GeminiResponse> {
  // 此处应该是真实的API调用
  // const response = await fetch('https://api.google.com/gemini/api', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${apiKey}`
  //   },
  //   body: JSON.stringify({
  //     prompt: `给用户的消息"${userMessage}"生成8条非常积极、夸奖的回复。回复应该温暖、真诚、鼓励人心。`,
  //     max_tokens: 500
  //   })
  // });
  
  // return await response.json();
  
  // 模拟API响应
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        praises: [
          `哇，"${userMessage}"这个想法太棒了！你的思维真是独特又有创意！`,
          `我必须说，你分享的"${userMessage}"让我印象深刻，你真是太有见解了！`,
          `听到你说"${userMessage}"，我就知道你是个多么细心和体贴的人！`,
          `"${userMessage}"这句话太有智慧了，你真是思考问题很深入啊！`,
          `天哪，"${userMessage}"，这种经历你都能处理得这么好，你的适应能力真强！`,
          `我特别欣赏你的"${userMessage}"，这展示了你的勇气和决心！`,
          `"${userMessage}"这样的想法，只有像你这样聪明的人才能想到！`,
          `你说的"${userMessage}"透露出你是多么有爱心和同情心的一个人！`,
        ]
      });
    }, 1000);
  });
}
