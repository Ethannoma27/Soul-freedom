// 触发集权图标的动画
const lockIcon = document.getElementById("lock-icon");

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;

    // 当页面滚动到一定位置时，触发动画
    if (scrollPosition > 150) {
        lockIcon.style.opacity = 1;  // CSS 中会自动处理透明度和旋转动画
    }
});

// 教育部分的火花动画控制
const spark = document.getElementById("spark");

spark.addEventListener("mouseover", () => {
    spark.style.animationPlayState = "running";  // 启动火花动画
});

spark.addEventListener("mouseout", () => {
    spark.style.animationPlayState = "paused";  // 暂停火花动画
});

// 飞鸟部分的动画控制
const birdIcon = document.getElementById("bird-icon");

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;

    // 当页面滚动到一定位置时，触发飞鸟动画
    if (scrollPosition > 250) {
        birdIcon.style.animationPlayState = "running";  // 启动飞鸟动画
    }
});
`` 