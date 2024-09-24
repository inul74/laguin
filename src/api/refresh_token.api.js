/**
 * @license Apache-2.0
 * @copyright inuldev 2024
 */

"use strict";

/**
 * custom modules
 */
const axiosConfig = require("../config/axios.config");

/**
 * Refresh token is a security credential that allows application to obtain new access tokens without requiring user to reauthorize the application
 * @param {string} refreshToken - the refresh token returned from the authorization token request
 * @returns {Object}
 */
const getRefreshToken = async (refreshToken) => {
  try {
    const response = await axiosConfig.token.post("/token", {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getRefreshToken };
