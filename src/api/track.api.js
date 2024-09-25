/**
 * @license Apache-2.0
 * @copyright inuldev 2024
 */

"use strict";

/**
 * custom modules
 */
const { getData } = require("../config/axios.config");

/**
 * Recommendations are generated based on the available information for a given seed entity and matched against similar artist and truck. If there is sufficient information about the provided seeds, a list of tracks will be returned together witch pool details
 *
 * @param {Object} req - server request object
 * @param {Object} seeds - object of artist or track seeds string
 * @param {number} itemLimit - the maximum number of items to return. default: 30
 * @returns {Object}
 */
const getRecommendedTrack = async (req, trackSeed, itemLimit) => {
  const {
    data: { tracks: recommendedTracks },
  } = await getData(
    `/recommendations?seed_tracks=${trackSeed}&limit=${itemLimit}`,
    req.cookies.access_token
  );

  return recommendedTracks;
};

module.exports = {
  getRecommendedTrack,
};
