export function initialize(appInstance) {
  let emberLeafletService = appInstance.lookup("service:ember-leaflet");

  if (emberLeafletService) {
    emberLeafletService.registerComponent("draw-control", {
      as: "draw-control"
    });
  }
}

export default {
  initialize
};