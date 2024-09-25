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
 * Get detailed profile information about the current user
 * @param {Object} req - server request object
 * @returns {Object}
 */
const getProfile = async (req) => {
  const /** {Object} */ { data: currentProfile } = await getData(
      "/me",
      req.cookies.access_token
    );

  return currentProfile;
};

module.exports = {
  getProfile,
};
