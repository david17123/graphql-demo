const { data: publisherData } = require('../data/publisher');

const getPublishers = () => {
  return publisherData;
};

const getPublisherById = (id) => {
  return publisherData.find(publisher => publisher.id === id);
};

module.exports = {
  getPublishers,
  getPublisherById,
};
