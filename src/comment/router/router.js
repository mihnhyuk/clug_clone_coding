var express = require('express');
const router = express.Router({ mergeParams: true }); 
var cont = require('../controller/index') // 변수를 이렇게 축약할 필요는 없을 것 같아요! 오히려 가독성 + 정확한 의미 전달을 위해 controller라는 명칭 그대로 가져가는 것도 좋아보입니당

router.get('/', cont.getComment);
router.post('/',cont.postComment);
router.get('/like/:commentID', cont.commentLike);

module.exports = router;
