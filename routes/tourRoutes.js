const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');
const { getAllTours, createTour, getTour, updateTour, deleteTour } =
  tourController;

// router.param('id', (req, res, next, val) => {
//   checkId(req, res, next, val);
// });

router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
