import p0 from '../img/profiles/building.png';
import p1 from '../img/profiles/face.png';
import p2 from '../img/profiles/ghost.png';
import p3 from '../img/profiles/map.png';
import p4 from '../img/profiles/owl.png';
import p5 from '../img/profiles/peacock.png';
import p6 from '../img/profiles/plant.png';
import p7 from '../img/profiles/squid.png';

function getRandomProfilePic(index) {
  let profilePics = [p0, p1, p2, p3, p4, p5, p5, p6, p7];
  if (index !== undefined) {
    return profilePics[index]
  }

  const roll8SidedDie = () => Math.floor(Math.random() * 8)
  let randomNum = roll8SidedDie()
  return {
    pic: profilePics[randomNum],
    picIndex: randomNum,
  }
};

export default getRandomProfilePic;