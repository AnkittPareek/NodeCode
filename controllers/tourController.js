const fs = require('fs');
const Tour = require('../models/tourModel');

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: TOURS.length,
    data: { tours: TOURS },
  });
};

exports.getTour = (req, res) => {
  console.log(req.params);
  let id = req.params.id * 1;
  let tours = TOURS.find((tour) => tour.id == req.params.id);

  res.status(200).json({
    status: 'success',
    data: { tours },
  });
};
exports.createTour = async (req, res) => {
  // const newTour = new Tour({});
  // newTour.save();

  const newTour = awaitTour.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      tour: newTour,
    },
  });
};
exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated Tour Here>',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
