/*
  In the `final-solution` branch, we've moved to the “Two Pass
  Rendering” strategy. This strategy works just fine in Strict
  Mode, and so I've flipped the config back to true.

  (This is the default value, and so we don't actually need to set
  it, but I'm doing it here to be extra explicit.)
*/
module.exports = {
  reactStrictMode: true,
};
