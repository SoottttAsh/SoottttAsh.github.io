// 获取两个背景图层的元素
let bg1 = document.getElementById("bg1");
let bg2 = document.getElementById("bg2");
let showingFirst = true; // 初始显示的是第一张图

// 定义切换函数：每次调用都会在两张图之间切换
function showNext() {
    if (showingFirst) {
        // 显示 bg1，隐藏 bg2，添加轻微右移动画
        bg1.style.opacity = "1";
        bg2.style.opacity = "0";
        bg1.style.transform = "translateX(20px)";
        bg2.style.transform = "translateX(0)";
    } else {
        // 显示 bg2，隐藏 bg1，添加轻微右移动画
        bg1.style.opacity = "0";
        bg2.style.opacity = "1";
        bg2.style.transform = "translateX(20px)";
        bg1.style.transform = "translateX(0)";
    }
    showingFirst = !showingFirst;  // 翻转标记
}


// 初始进场动画
    bg1.style.opacity = "1";
    bg1.style.transform = "translateX(20px)";

    // ① 首次进场后 10 秒再开始轮播（可选：立即开始就注释掉 setTimeout）
setTimeout(showNext, 10000);

// ② 之后每隔 10 秒切换一次
setInterval(showNext, 10000);


// 页面加载完成后执行动画
window.addEventListener("load", () => {
  // 主标题动画：从左边飘出来、渐现
  gsap.to(".main-title", {
    duration: 1,         // 动画持续时间1秒
    x: 35,              // 向右移动100px
    opacity: 1,          // 渐显
    ease: "power2.out"   // 动画缓动效果
  });

  // 副标题动画：稍微延迟后跟上主标题
  gsap.to(".subtitle", {
    duration: 1,
    x: 35,
    opacity: 1,
    ease: "power2.out",
    delay: 0.3            // 延迟0.3秒后再出现
  });
 

});

