const imagemin = require("imagemin");
const imageminPngquant = require("imagemin-pngquant");
const images = require("images");

// let jpg = "D:/github/imagesTest/ddd.jpg"; //目标图片地址
// let newjpg = "D:/github/imagesTest/ddd2.jpg"; //输出图片地址
//压缩jpg  此API为同步方法，可以遍历执行
// images(jpg).save(newjpg, { quality: 60 }); //压缩质量（0，100）

imagemin(['D:/github/imagesTest/*.{jpg,png}'], {
  destination: "D:/github/imagesTest/out",
  plugins: [
    imageminPngquant({
      quality: [0.6, 0.7], //压缩质量（0,1）
    }),
  ],
})
  .then(() => {
    console.log("压缩成功");
  })
  .catch((err) => {
    console.log("压缩失败：" + err);
  });
