
export const avatarList = [
  {
    name: "小熊",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=bear&scale=90"
  },
  {
    name: "小猫",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=kitty&scale=90"
  },
  {
    name: "小兔",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=bunny&scale=90"
  },
  {
    name: "小狐",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=fox&scale=90"
  },
  {
    name: "小鹿",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=deer&scale=90"
  },
  {
    name: "小鸟",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=bird&scale=90"
  },
  {
    name: "小羊",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=sheep&scale=90"
  },
  {
    name: "小猴",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=monkey&scale=90"
  },
];

export function getRandomAvatar() {
  const randomIndex = Math.floor(Math.random() * avatarList.length);
  return avatarList[randomIndex];
}

export function getMultipleRandomAvatars(count: number) {
  // Shuffle array
  const shuffled = [...avatarList].sort(() => 0.5 - Math.random());
  
  // Get sub-array of first n elements after shuffled
  return shuffled.slice(0, count);
}
