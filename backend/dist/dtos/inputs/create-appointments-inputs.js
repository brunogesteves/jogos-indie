"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// server/dtos/inputs/create-appointments-inputs.ts
var create_appointments_inputs_exports = {};
__export(create_appointments_inputs_exports, {
  CreateAppointmentInput: () => CreateAppointmentInput
});
module.exports = __toCommonJS(create_appointments_inputs_exports);
var import_type_graphql = require("type-graphql");
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var CreateAppointmentInput = /* @__PURE__ */ __name(class CreateAppointmentInput2 {
}, "CreateAppointmentInput");
__decorate([
  (0, import_type_graphql.Field)(),
  __metadata("design:type", String)
], CreateAppointmentInput.prototype, "costumerId", void 0);
__decorate([
  (0, import_type_graphql.Field)(),
  __metadata("design:type", typeof Date === "undefined" ? Object : Date)
], CreateAppointmentInput.prototype, "startsAt", void 0);
__decorate([
  (0, import_type_graphql.Field)(),
  __metadata("design:type", typeof Date === "undefined" ? Object : Date)
], CreateAppointmentInput.prototype, "endsAt", void 0);
CreateAppointmentInput = __decorate([
  (0, import_type_graphql.InputType)()
], CreateAppointmentInput);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateAppointmentInput
});
