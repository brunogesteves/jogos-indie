"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server/index.ts
var import_express = __toESM(require("express"));
var import_apollo_server = require("apollo-server");
var import_reflect_metadata = require("reflect-metadata");
var import_type_graphql3 = require("type-graphql");

// server/Resvolvers/categories-resolvers.ts
var import_type_graphql2 = require("type-graphql");

// server/dtos/models/categories-models.ts
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
var CategoriesModel = /* @__PURE__ */ __name(class CategoriesModel2 {
}, "CategoriesModel");
__decorate([
  (0, import_type_graphql.Field)(),
  __metadata("design:type", String)
], CategoriesModel.prototype, "name", void 0);
CategoriesModel = __decorate([
  (0, import_type_graphql.ObjectType)()
], CategoriesModel);

// server/Resvolvers/categories-resolvers.ts
var import_client = require("@prisma/client");
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata2 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var prisma = new import_client.PrismaClient();
var CategoriesResolver = /* @__PURE__ */ __name(class CategoriesResolver2 {
  async getAllCategories() {
    try {
      console.log(1111);
      let allCats = await prisma.cats.findMany();
      if (allCats) {
        return allCats;
      }
    } catch (error) {
    }
  }
}, "CategoriesResolver");
__decorate2([
  (0, import_type_graphql2.Query)(() => [
    CategoriesModel
  ]),
  __metadata2("design:type", Function),
  __metadata2("design:paramtypes", [])
], CategoriesResolver.prototype, "getAllCategories", null);
CategoriesResolver = __decorate2([
  (0, import_type_graphql2.Resolver)()
], CategoriesResolver);

// server/index.ts
var router = (0, import_express.Router)();
var app = (0, import_express.default)();
async function server() {
  const schema = await (0, import_type_graphql3.buildSchema)({
    resolvers: [
      CategoriesResolver
    ]
  });
  const server2 = new import_apollo_server.ApolloServer({
    schema,
    cache: "bounded",
    persistedQueries: false
  });
  const { url } = await server2.listen();
}
__name(server, "server");
server();
app.listen(3e3, () => console.log(`Server running on port "4000"...`));
