import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // render view from views/index.jade
  res.render('index', { title: 'Express - Book Library Project' });
});

export default router;
