const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  // postId: {
  //   type: String,
  //   unique: true, //유니크 값
  //   required: true, //필수 값
  // },
  title: {
    //게시글 제목
    type: String,
  },
  userId: {
    //사용자 이름
    type: String,
  },
  content: {
    //게시글 내용
    type: String,
  },
  category: {
    //카테고리
    type: String,
  },
  imageUrl: {
    //이미지
    type: String,
  },
  // author:{
  //   type:String,
  // }
  date: {
    type: String,
  },
});

module.exports = mongoose.model("Post", postSchema);
