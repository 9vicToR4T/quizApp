const express = require("express");
const router = express.Router({mergeParams: true});

router.use("/js", require("./js.routes.js"))
router.use("/react", require("./react.routes.js"))
router.use("/htmlcss", require("./htmlcss.routes.js"))
module.exports = router;

