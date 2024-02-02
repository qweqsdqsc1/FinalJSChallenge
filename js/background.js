const images = ["0.jpg", "1.jpg", "2.jpg"]

const chosenImage = images[Math.floor(Math.random()*images.length)]

const bgImage = document.createElement("img")

bgImage.src = `img/${chosenImage}`

// 배경 이미지가 텍스트를 뒤덮도록 스타일을 설정합니다.
bgImage.style.position = "fixed";
bgImage.style.top = "0";
bgImage.style.left = "0";
bgImage.style.width = "100%";
bgImage.style.height = "100%";
bgImage.style.objectFit = "cover";
bgImage.style.zIndex = "-1";

document.body.appendChild(bgImage)