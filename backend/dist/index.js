"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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

// node_modules/dotenv/lib/main.js
var require_main = __commonJS({
  "node_modules/dotenv/lib/main.js"(exports, module2) {
    var fs2 = require("fs");
    var path = require("path");
    function log(message) {
      console.log(`[dotenv][DEBUG] ${message}`);
    }
    __name(log, "log");
    var NEWLINE = "\n";
    var RE_INI_KEY_VAL = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/;
    var RE_NEWLINES = /\\n/g;
    var NEWLINES_MATCH = /\n|\r|\r\n/;
    function parse(src, options) {
      const debug = Boolean(options && options.debug);
      const obj = {};
      src.toString().split(NEWLINES_MATCH).forEach(function(line, idx) {
        const keyValueArr = line.match(RE_INI_KEY_VAL);
        if (keyValueArr != null) {
          const key = keyValueArr[1];
          let val = keyValueArr[2] || "";
          const end = val.length - 1;
          const isDoubleQuoted = val[0] === '"' && val[end] === '"';
          const isSingleQuoted = val[0] === "'" && val[end] === "'";
          if (isSingleQuoted || isDoubleQuoted) {
            val = val.substring(1, end);
            if (isDoubleQuoted) {
              val = val.replace(RE_NEWLINES, NEWLINE);
            }
          } else {
            val = val.trim();
          }
          obj[key] = val;
        } else if (debug) {
          log(`did not match key and value when parsing line ${idx + 1}: ${line}`);
        }
      });
      return obj;
    }
    __name(parse, "parse");
    function config(options) {
      let dotenvPath = path.resolve(process.cwd(), ".env");
      let encoding = "utf8";
      let debug = false;
      if (options) {
        if (options.path != null) {
          dotenvPath = options.path;
        }
        if (options.encoding != null) {
          encoding = options.encoding;
        }
        if (options.debug != null) {
          debug = true;
        }
      }
      try {
        const parsed = parse(fs2.readFileSync(dotenvPath, {
          encoding
        }), {
          debug
        });
        Object.keys(parsed).forEach(function(key) {
          if (!Object.prototype.hasOwnProperty.call(process.env, key)) {
            process.env[key] = parsed[key];
          } else if (debug) {
            log(`"${key}" is already defined in \`process.env\` and will not be overwritten`);
          }
        });
        return {
          parsed
        };
      } catch (e) {
        return {
          error: e
        };
      }
    }
    __name(config, "config");
    module2.exports.config = config;
    module2.exports.parse = parse;
  }
});

// server/index.ts
var import_reflect_metadata = require("reflect-metadata");
var import_express = __toESM(require("express"));
var import_apollo_server_express = require("apollo-server-express");
var import_type_graphql22 = require("type-graphql");

// server/Resolvers/categories-resolvers.ts
var import_type_graphql3 = require("type-graphql");

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
__decorate([
  (0, import_type_graphql.Field)(),
  __metadata("design:type", Number)
], CategoriesModel.prototype, "id", void 0);
CategoriesModel = __decorate([
  (0, import_type_graphql.ObjectType)()
], CategoriesModel);
var CreateCategoryModel = /* @__PURE__ */ __name(class CreateCategoryModel2 {
}, "CreateCategoryModel");
__decorate([
  (0, import_type_graphql.Field)(),
  __metadata("design:type", Boolean)
], CreateCategoryModel.prototype, "status", void 0);
CreateCategoryModel = __decorate([
  (0, import_type_graphql.ObjectType)()
], CreateCategoryModel);
var CategoryNameModel = /* @__PURE__ */ __name(class CategoryNameModel2 {
}, "CategoryNameModel");
__decorate([
  (0, import_type_graphql.Field)(),
  __metadata("design:type", String)
], CategoryNameModel.prototype, "slug", void 0);
__decorate([
  (0, import_type_graphql.Field)(),
  __metadata("design:type", String)
], CategoryNameModel.prototype, "thumb", void 0);
CategoryNameModel = __decorate([
  (0, import_type_graphql.ObjectType)()
], CategoryNameModel);

// server/Resolvers/categories-resolvers.ts
var import_client = require("@prisma/client");

// server/dtos/inputs/category-input.ts
var import_class_validator = require("class-validator");
var import_type_graphql2 = require("type-graphql");
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
var CategoryNameInput = /* @__PURE__ */ __name(class CategoryNameInput2 {
}, "CategoryNameInput");
__decorate2([
  (0, import_type_graphql2.Field)(),
  (0, import_class_validator.MaxLength)(30),
  __metadata2("design:type", String)
], CategoryNameInput.prototype, "categoryName", void 0);
CategoryNameInput = __decorate2([
  (0, import_type_graphql2.InputType)()
], CategoryNameInput);

// server/Resolvers/categories-resolvers.ts
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata3 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var __param = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var prisma = new import_client.PrismaClient();
var CategoriesResolver = /* @__PURE__ */ __name(class CategoriesResolver2 {
  async getAllCategories() {
    try {
      let categoryResults = await prisma.cats.findMany({});
      return categoryResults;
    } catch (error) {
      console.log(error);
    }
  }
  async createCategory(newCategoryName) {
    try {
      let isAddedCategory = await prisma.cats.create({
        data: {
          name: newCategoryName
        }
      });
      if (isAddedCategory)
        return true;
    } catch (error) {
    }
  }
  async deleteCategory(id) {
    try {
      let isdeletedCategory = await prisma.cats.delete({
        where: {
          id
        }
      });
      if (isdeletedCategory)
        return true;
    } catch (error) {
    }
  }
}, "CategoriesResolver");
__decorate3([
  (0, import_type_graphql3.Query)(() => [
    CategoriesModel
  ]),
  __metadata3("design:type", Function),
  __metadata3("design:paramtypes", [])
], CategoriesResolver.prototype, "getAllCategories", null);
__decorate3([
  (0, import_type_graphql3.Mutation)(() => Boolean),
  __param(0, (0, import_type_graphql3.Arg)("newCategoryName")),
  __metadata3("design:type", Function),
  __metadata3("design:paramtypes", [
    String
  ])
], CategoriesResolver.prototype, "createCategory", null);
__decorate3([
  (0, import_type_graphql3.Mutation)(() => Boolean),
  __param(0, (0, import_type_graphql3.Arg)("deleteCategoryId")),
  __metadata3("design:type", Function),
  __metadata3("design:paramtypes", [
    Number
  ])
], CategoriesResolver.prototype, "deleteCategory", null);
CategoriesResolver = __decorate3([
  (0, import_type_graphql3.Resolver)()
], CategoriesResolver);
var CategoryNameResolver = /* @__PURE__ */ __name(class CategoryNameResolver2 {
  async categoryName(data) {
    const { categoryName } = data;
    try {
      let categoryResults = await prisma.post.findMany({
        where: {
          category: categoryName
        },
        select: {
          slug: true,
          thumb: true
        }
      });
      return categoryResults;
    } catch (error) {
    }
  }
}, "CategoryNameResolver");
__decorate3([
  (0, import_type_graphql3.Query)(() => [
    CategoryNameModel
  ]),
  __param(0, (0, import_type_graphql3.Arg)("input")),
  __metadata3("design:type", Function),
  __metadata3("design:paramtypes", [
    typeof CategoryNameInput === "undefined" ? Object : CategoryNameInput
  ])
], CategoryNameResolver.prototype, "categoryName", null);
CategoryNameResolver = __decorate3([
  (0, import_type_graphql3.Resolver)()
], CategoryNameResolver);

// server/Resolvers/home-resolvers.ts
var import_type_graphql8 = require("type-graphql");

// server/dtos/models/middle-models.ts
var import_type_graphql4 = require("type-graphql");
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata4 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var MiddleModel = /* @__PURE__ */ __name(class MiddleModel2 {
}, "MiddleModel");
__decorate4([
  (0, import_type_graphql4.Field)(),
  __metadata4("design:type", String)
], MiddleModel.prototype, "name", void 0);
__decorate4([
  (0, import_type_graphql4.Field)(),
  __metadata4("design:type", String)
], MiddleModel.prototype, "thumb", void 0);
__decorate4([
  (0, import_type_graphql4.Field)(),
  __metadata4("design:type", String)
], MiddleModel.prototype, "slug", void 0);
MiddleModel = __decorate4([
  (0, import_type_graphql4.ObjectType)()
], MiddleModel);

// server/Resolvers/home-resolvers.ts
var import_client2 = require("@prisma/client");

// server/dtos/models/gameplay-models.ts
var import_type_graphql5 = require("type-graphql");
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata5 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var GameplayModel = /* @__PURE__ */ __name(class GameplayModel2 {
}, "GameplayModel");
__decorate5([
  (0, import_type_graphql5.Field)(),
  __metadata5("design:type", String)
], GameplayModel.prototype, "name", void 0);
__decorate5([
  (0, import_type_graphql5.Field)(),
  __metadata5("design:type", String)
], GameplayModel.prototype, "thumb", void 0);
__decorate5([
  (0, import_type_graphql5.Field)(),
  __metadata5("design:type", String)
], GameplayModel.prototype, "slug", void 0);
GameplayModel = __decorate5([
  (0, import_type_graphql5.ObjectType)()
], GameplayModel);

// server/dtos/models/midSection-models.ts
var import_type_graphql6 = require("type-graphql");
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata6 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var MidSectionModel = /* @__PURE__ */ __name(class MidSectionModel2 {
}, "MidSectionModel");
__decorate6([
  (0, import_type_graphql6.Field)(),
  __metadata6("design:type", String)
], MidSectionModel.prototype, "name", void 0);
__decorate6([
  (0, import_type_graphql6.Field)(),
  __metadata6("design:type", String)
], MidSectionModel.prototype, "thumb", void 0);
__decorate6([
  (0, import_type_graphql6.Field)(),
  __metadata6("design:type", String)
], MidSectionModel.prototype, "slug", void 0);
MidSectionModel = __decorate6([
  (0, import_type_graphql6.ObjectType)()
], MidSectionModel);

// server/dtos/models/slides-models.ts
var import_type_graphql7 = require("type-graphql");
var __decorate7 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata7 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var SlidesModel = /* @__PURE__ */ __name(class SlidesModel2 {
}, "SlidesModel");
__decorate7([
  (0, import_type_graphql7.Field)(),
  __metadata7("design:type", String)
], SlidesModel.prototype, "name", void 0);
__decorate7([
  (0, import_type_graphql7.Field)(),
  __metadata7("design:type", String)
], SlidesModel.prototype, "thumb", void 0);
__decorate7([
  (0, import_type_graphql7.Field)(),
  __metadata7("design:type", String)
], SlidesModel.prototype, "slug", void 0);
SlidesModel = __decorate7([
  (0, import_type_graphql7.ObjectType)()
], SlidesModel);

// server/Resolvers/home-resolvers.ts
var __decorate8 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata8 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var prisma2 = new import_client2.PrismaClient();
var MiddleResolver = /* @__PURE__ */ __name(class MiddleResolver2 {
  async getAllMiddle() {
    try {
      let getAllMiddle = await prisma2.post.findMany({
        where: {
          middle: true
        }
      });
      if (getAllMiddle) {
        return getAllMiddle;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async getAllGameplay() {
    try {
      let gameplay = await prisma2.post.findMany({
        where: {
          gameplay: true
        }
      });
      if (gameplay) {
        return gameplay;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async getMidSection() {
    try {
      let midSection = await prisma2.post.findMany({
        where: {
          midSection: true
        }
      });
      if (midSection) {
        return midSection;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async getAllSlides() {
    try {
      let allSlides = await prisma2.post.findMany({
        where: {
          slide: true
        }
      });
      if (allSlides) {
        return allSlides;
      }
    } catch (error) {
    }
  }
}, "MiddleResolver");
__decorate8([
  (0, import_type_graphql8.Query)(() => [
    MiddleModel
  ]),
  __metadata8("design:type", Function),
  __metadata8("design:paramtypes", [])
], MiddleResolver.prototype, "getAllMiddle", null);
__decorate8([
  (0, import_type_graphql8.Query)(() => [
    GameplayModel
  ]),
  __metadata8("design:type", Function),
  __metadata8("design:paramtypes", [])
], MiddleResolver.prototype, "getAllGameplay", null);
__decorate8([
  (0, import_type_graphql8.Query)(() => [
    MidSectionModel
  ]),
  __metadata8("design:type", Function),
  __metadata8("design:paramtypes", [])
], MiddleResolver.prototype, "getMidSection", null);
__decorate8([
  (0, import_type_graphql8.Query)(() => [
    SlidesModel
  ]),
  __metadata8("design:type", Function),
  __metadata8("design:paramtypes", [])
], MiddleResolver.prototype, "getAllSlides", null);
MiddleResolver = __decorate8([
  (0, import_type_graphql8.Resolver)()
], MiddleResolver);

// server/Resolvers/signIn-resolvers.ts
var import_type_graphql11 = require("type-graphql");
var import_client3 = require("@prisma/client");

// server/dtos/inputs/signIn-inputs.ts
var import_class_validator2 = require("class-validator");
var import_type_graphql9 = require("type-graphql");
var __decorate9 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata9 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var SignInInput = /* @__PURE__ */ __name(class SignInInput2 {
}, "SignInInput");
__decorate9([
  (0, import_type_graphql9.Field)(),
  (0, import_class_validator2.MaxLength)(30),
  __metadata9("design:type", String)
], SignInInput.prototype, "email", void 0);
__decorate9([
  (0, import_type_graphql9.Field)(),
  (0, import_class_validator2.MaxLength)(30),
  __metadata9("design:type", String)
], SignInInput.prototype, "password", void 0);
SignInInput = __decorate9([
  (0, import_type_graphql9.InputType)()
], SignInInput);

// server/dtos/models/signIn-models.ts
var import_class_validator3 = require("class-validator");
var import_type_graphql10 = require("type-graphql");
var __decorate10 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata10 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var SignInModel = /* @__PURE__ */ __name(class SignInModel2 {
}, "SignInModel");
__decorate10([
  (0, import_type_graphql10.Field)(),
  __metadata10("design:type", String)
], SignInModel.prototype, "token", void 0);
__decorate10([
  (0, import_type_graphql10.Field)(),
  __metadata10("design:type", Boolean)
], SignInModel.prototype, "auth", void 0);
__decorate10([
  (0, import_type_graphql10.Field)(),
  (0, import_class_validator3.MaxLength)(30),
  __metadata10("design:type", String)
], SignInModel.prototype, "message", void 0);
SignInModel = __decorate10([
  (0, import_type_graphql10.ObjectType)()
], SignInModel);

// server/Resolvers/signIn-resolvers.ts
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
var __decorate11 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata11 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var __param2 = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
require_main().config({
  path: __dirname + "/.env"
});
var prisma3 = new import_client3.PrismaClient();
var SignInResolver = /* @__PURE__ */ __name(class SignInResolver2 {
  async signIn(data) {
    const { email, password } = data;
    try {
      let signInfo = await prisma3.users.findUnique({
        where: {
          email
        }
      });
      if (signInfo?.password == password) {
        const id = signInfo?.id;
        const email2 = signInfo?.email;
        const name = signInfo?.name;
        const token = import_jsonwebtoken.default.sign({
          id,
          email: email2,
          name
        }, process.env.SECRET, {
          expiresIn: 300
        });
        return {
          auth: true,
          token,
          message: ""
        };
      } else {
        return {
          auth: false,
          token: "",
          message: "Email e/ou senha incorretas"
        };
      }
    } catch (error) {
      console.log(error);
    }
  }
}, "SignInResolver");
__decorate11([
  (0, import_type_graphql11.Query)(() => SignInModel),
  __param2(0, (0, import_type_graphql11.Arg)("input")),
  __metadata11("design:type", Function),
  __metadata11("design:paramtypes", [
    typeof SignInInput === "undefined" ? Object : SignInInput
  ])
], SignInResolver.prototype, "signIn", null);
SignInResolver = __decorate11([
  (0, import_type_graphql11.Resolver)()
], SignInResolver);

// server/Resolvers/search-resolvers.ts
var import_type_graphql14 = require("type-graphql");
var import_client4 = require("@prisma/client");

// server/dtos/inputs/search-inputs.ts
var import_class_validator4 = require("class-validator");
var import_type_graphql12 = require("type-graphql");
var __decorate12 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata12 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var SearchInput = /* @__PURE__ */ __name(class SearchInput2 {
}, "SearchInput");
__decorate12([
  (0, import_type_graphql12.Field)(),
  (0, import_class_validator4.MaxLength)(30),
  __metadata12("design:type", String)
], SearchInput.prototype, "term", void 0);
SearchInput = __decorate12([
  (0, import_type_graphql12.InputType)()
], SearchInput);

// server/dtos/models/search-models.ts
var import_type_graphql13 = require("type-graphql");
var __decorate13 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata13 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var SearchModel = /* @__PURE__ */ __name(class SearchModel2 {
}, "SearchModel");
__decorate13([
  (0, import_type_graphql13.Field)(),
  __metadata13("design:type", String)
], SearchModel.prototype, "slug", void 0);
__decorate13([
  (0, import_type_graphql13.Field)(),
  __metadata13("design:type", String)
], SearchModel.prototype, "thumb", void 0);
__decorate13([
  (0, import_type_graphql13.Field)(),
  __metadata13("design:type", String)
], SearchModel.prototype, "name", void 0);
__decorate13([
  (0, import_type_graphql13.Field)(),
  __metadata13("design:type", String)
], SearchModel.prototype, "category", void 0);
SearchModel = __decorate13([
  (0, import_type_graphql13.ObjectType)()
], SearchModel);

// server/Resolvers/search-resolvers.ts
var __decorate14 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata14 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var __param3 = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var prisma4 = new import_client4.PrismaClient();
var searchResolver = /* @__PURE__ */ __name(class searchResolver2 {
  async searchQuery(data) {
    const { term } = data;
    try {
      let searchResults = await prisma4.post.findMany({
        where: {
          name: {
            contains: term
          }
        },
        select: {
          slug: true,
          thumb: true,
          name: true,
          category: true
        }
      });
      return searchResults;
    } catch (error) {
    }
  }
}, "searchResolver");
__decorate14([
  (0, import_type_graphql14.Query)(() => [
    SearchModel
  ]),
  __param3(0, (0, import_type_graphql14.Arg)("input")),
  __metadata14("design:type", Function),
  __metadata14("design:paramtypes", [
    typeof SearchInput === "undefined" ? Object : SearchInput
  ])
], searchResolver.prototype, "searchQuery", null);
searchResolver = __decorate14([
  (0, import_type_graphql14.Resolver)()
], searchResolver);

// server/Resolvers/images-resolvers.ts
var import_type_graphql16 = require("type-graphql");

// server/dtos/models/images-models.ts
var import_type_graphql15 = require("type-graphql");
var __decorate15 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata15 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var ImagesModel = /* @__PURE__ */ __name(class ImagesModel2 {
}, "ImagesModel");
__decorate15([
  (0, import_type_graphql15.Field)(),
  __metadata15("design:type", String)
], ImagesModel.prototype, "name", void 0);
ImagesModel = __decorate15([
  (0, import_type_graphql15.ObjectType)()
], ImagesModel);

// server/Resolvers/images-resolvers.ts
var import_client5 = require("@prisma/client");
var __decorate16 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata16 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var prisma5 = new import_client5.PrismaClient();
var ImagesResolver = /* @__PURE__ */ __name(class ImagesResolver2 {
  async getAllImages() {
    try {
      let allImages = await prisma5.images.findMany();
      if (allImages) {
        return allImages;
      }
    } catch (error) {
    }
  }
}, "ImagesResolver");
__decorate16([
  (0, import_type_graphql16.Query)(() => [
    ImagesModel
  ]),
  __metadata16("design:type", Function),
  __metadata16("design:paramtypes", [])
], ImagesResolver.prototype, "getAllImages", null);
ImagesResolver = __decorate16([
  (0, import_type_graphql16.Resolver)()
], ImagesResolver);

// server/Resolvers/posts-resolvers.ts
var import_type_graphql19 = require("type-graphql");

// server/dtos/models/posts-models.ts
var import_type_graphql17 = require("type-graphql");
var __decorate17 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata17 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var PostsModel = /* @__PURE__ */ __name(class PostsModel2 {
}, "PostsModel");
__decorate17([
  (0, import_type_graphql17.Field)(),
  __metadata17("design:type", Number)
], PostsModel.prototype, "id", void 0);
__decorate17([
  (0, import_type_graphql17.Field)(),
  __metadata17("design:type", String)
], PostsModel.prototype, "name", void 0);
__decorate17([
  (0, import_type_graphql17.Field)(),
  __metadata17("design:type", String)
], PostsModel.prototype, "content", void 0);
__decorate17([
  (0, import_type_graphql17.Field)(),
  __metadata17("design:type", String)
], PostsModel.prototype, "category", void 0);
__decorate17([
  (0, import_type_graphql17.Field)(),
  __metadata17("design:type", String)
], PostsModel.prototype, "slug", void 0);
__decorate17([
  (0, import_type_graphql17.Field)(),
  __metadata17("design:type", Boolean)
], PostsModel.prototype, "scheduled", void 0);
__decorate17([
  (0, import_type_graphql17.Field)(),
  __metadata17("design:type", typeof Date === "undefined" ? Object : Date)
], PostsModel.prototype, "schedule", void 0);
__decorate17([
  (0, import_type_graphql17.Field)(),
  __metadata17("design:type", Boolean)
], PostsModel.prototype, "slide", void 0);
__decorate17([
  (0, import_type_graphql17.Field)(),
  __metadata17("design:type", Boolean)
], PostsModel.prototype, "middle", void 0);
__decorate17([
  (0, import_type_graphql17.Field)(),
  __metadata17("design:type", Boolean)
], PostsModel.prototype, "gameplay", void 0);
__decorate17([
  (0, import_type_graphql17.Field)(),
  __metadata17("design:type", Boolean)
], PostsModel.prototype, "publicPost", void 0);
__decorate17([
  (0, import_type_graphql17.Field)(),
  __metadata17("design:type", Boolean)
], PostsModel.prototype, "midSection", void 0);
__decorate17([
  (0, import_type_graphql17.Field)(),
  __metadata17("design:type", String)
], PostsModel.prototype, "thumb", void 0);
PostsModel = __decorate17([
  (0, import_type_graphql17.ObjectType)()
], PostsModel);
var CreateSavePostModel = /* @__PURE__ */ __name(class CreateSavePostModel2 {
}, "CreateSavePostModel");
__decorate17([
  (0, import_type_graphql17.Field)(),
  __metadata17("design:type", Number)
], CreateSavePostModel.prototype, "id", void 0);
__decorate17([
  (0, import_type_graphql17.Field)(),
  __metadata17("design:type", String)
], CreateSavePostModel.prototype, "success", void 0);
CreateSavePostModel = __decorate17([
  (0, import_type_graphql17.ObjectType)()
], CreateSavePostModel);

// server/Resolvers/posts-resolvers.ts
var import_client6 = require("@prisma/client");

// server/dtos/inputs/post-inputs.ts
var import_class_validator5 = require("class-validator");
var import_type_graphql18 = require("type-graphql");
var __decorate18 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata18 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var PostInput = /* @__PURE__ */ __name(class PostInput2 {
}, "PostInput");
__decorate18([
  (0, import_type_graphql18.Field)(),
  (0, import_class_validator5.MaxLength)(30),
  __metadata18("design:type", String)
], PostInput.prototype, "id", void 0);
PostInput = __decorate18([
  (0, import_type_graphql18.InputType)()
], PostInput);
var DeletePostInput = /* @__PURE__ */ __name(class DeletePostInput2 {
}, "DeletePostInput");
__decorate18([
  (0, import_type_graphql18.Field)(),
  __metadata18("design:type", Number)
], DeletePostInput.prototype, "id", void 0);
DeletePostInput = __decorate18([
  (0, import_type_graphql18.InputType)()
], DeletePostInput);
var OptionPostInput = /* @__PURE__ */ __name(class OptionPostInput2 {
}, "OptionPostInput");
__decorate18([
  (0, import_type_graphql18.Field)(),
  (0, import_class_validator5.MaxLength)(30),
  __metadata18("design:type", String)
], OptionPostInput.prototype, "id", void 0);
__decorate18([
  (0, import_type_graphql18.Field)(),
  (0, import_class_validator5.MaxLength)(100),
  __metadata18("design:type", String)
], OptionPostInput.prototype, "option", void 0);
__decorate18([
  (0, import_type_graphql18.Field)(),
  __metadata18("design:type", Boolean)
], OptionPostInput.prototype, "info", void 0);
OptionPostInput = __decorate18([
  (0, import_type_graphql18.InputType)()
], OptionPostInput);
var NamePostInput = /* @__PURE__ */ __name(class NamePostInput2 {
}, "NamePostInput");
__decorate18([
  (0, import_type_graphql18.Field)(),
  (0, import_class_validator5.MaxLength)(30),
  __metadata18("design:type", String)
], NamePostInput.prototype, "slug", void 0);
NamePostInput = __decorate18([
  (0, import_type_graphql18.InputType)()
], NamePostInput);
var IdPostInput = /* @__PURE__ */ __name(class IdPostInput2 {
}, "IdPostInput");
__decorate18([
  (0, import_type_graphql18.Field)(),
  (0, import_class_validator5.MaxLength)(30),
  __metadata18("design:type", String)
], IdPostInput.prototype, "id", void 0);
IdPostInput = __decorate18([
  (0, import_type_graphql18.InputType)()
], IdPostInput);
var PostUpdateCreateInput = /* @__PURE__ */ __name(class PostUpdateCreateInput2 {
}, "PostUpdateCreateInput");
__decorate18([
  (0, import_type_graphql18.Field)(),
  (0, import_class_validator5.MaxLength)(30),
  __metadata18("design:type", String)
], PostUpdateCreateInput.prototype, "id", void 0);
__decorate18([
  (0, import_type_graphql18.Field)(),
  (0, import_class_validator5.MaxLength)(30),
  __metadata18("design:type", String)
], PostUpdateCreateInput.prototype, "name", void 0);
__decorate18([
  (0, import_type_graphql18.Field)(),
  (0, import_class_validator5.MaxLength)(3e5),
  __metadata18("design:type", String)
], PostUpdateCreateInput.prototype, "content", void 0);
__decorate18([
  (0, import_type_graphql18.Field)(),
  (0, import_class_validator5.MaxLength)(30),
  __metadata18("design:type", String)
], PostUpdateCreateInput.prototype, "category", void 0);
__decorate18([
  (0, import_type_graphql18.Field)(),
  (0, import_class_validator5.MaxLength)(30),
  __metadata18("design:type", String)
], PostUpdateCreateInput.prototype, "slug", void 0);
__decorate18([
  (0, import_type_graphql18.Field)(),
  __metadata18("design:type", Boolean)
], PostUpdateCreateInput.prototype, "scheduled", void 0);
__decorate18([
  (0, import_type_graphql18.Field)(),
  __metadata18("design:type", typeof Date === "undefined" ? Object : Date)
], PostUpdateCreateInput.prototype, "schedule", void 0);
__decorate18([
  (0, import_type_graphql18.Field)(),
  __metadata18("design:type", Boolean)
], PostUpdateCreateInput.prototype, "slide", void 0);
__decorate18([
  (0, import_type_graphql18.Field)(),
  __metadata18("design:type", Boolean)
], PostUpdateCreateInput.prototype, "middle", void 0);
__decorate18([
  (0, import_type_graphql18.Field)(),
  __metadata18("design:type", Boolean)
], PostUpdateCreateInput.prototype, "gameplay", void 0);
__decorate18([
  (0, import_type_graphql18.Field)(),
  __metadata18("design:type", Boolean)
], PostUpdateCreateInput.prototype, "publicPost", void 0);
__decorate18([
  (0, import_type_graphql18.Field)(),
  __metadata18("design:type", Boolean)
], PostUpdateCreateInput.prototype, "midSection", void 0);
__decorate18([
  (0, import_type_graphql18.Field)(),
  (0, import_class_validator5.MaxLength)(30),
  __metadata18("design:type", String)
], PostUpdateCreateInput.prototype, "thumb", void 0);
PostUpdateCreateInput = __decorate18([
  (0, import_type_graphql18.InputType)()
], PostUpdateCreateInput);

// server/Resolvers/posts-resolvers.ts
var __decorate19 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata19 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var __param4 = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var prisma6 = new import_client6.PrismaClient();
var PostsResolver = /* @__PURE__ */ __name(class PostsResolver2 {
  async getAllPosts() {
    try {
      let allPosts = await prisma6.post.findMany({});
      if (allPosts) {
        return allPosts;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async getOnePost(data) {
    const { slug } = data;
    try {
      let uniquePost = await prisma6.post.findFirst({
        where: {
          slug
        }
      });
      console.log("post: ", uniquePost);
      if (uniquePost) {
        return uniquePost;
      }
    } catch (error) {
    }
  }
  async getOneUpdatePost(data) {
    try {
      let uniquePost = await prisma6.post.findUnique({
        where: {
          id: Number(data.id)
        }
      });
      if (uniquePost) {
        return uniquePost;
      }
    } catch (error) {
    }
  }
  async getRandomPosts() {
    try {
      const postsCount = await prisma6.post.count();
      const skip = Math.floor(Math.random() * postsCount);
      let randomPosts = await prisma6.post.findMany({
        take: 3,
        skip
      });
      if (randomPosts) {
        return randomPosts;
      }
    } catch (error) {
    }
  }
}, "PostsResolver");
__decorate19([
  (0, import_type_graphql19.Query)(() => [
    PostsModel
  ]),
  __metadata19("design:type", Function),
  __metadata19("design:paramtypes", [])
], PostsResolver.prototype, "getAllPosts", null);
__decorate19([
  (0, import_type_graphql19.Query)(() => PostsModel),
  __param4(0, (0, import_type_graphql19.Arg)("data")),
  __metadata19("design:type", Function),
  __metadata19("design:paramtypes", [
    typeof NamePostInput === "undefined" ? Object : NamePostInput
  ])
], PostsResolver.prototype, "getOnePost", null);
__decorate19([
  (0, import_type_graphql19.Query)(() => PostsModel),
  __param4(0, (0, import_type_graphql19.Arg)("input")),
  __metadata19("design:type", Function),
  __metadata19("design:paramtypes", [
    typeof IdPostInput === "undefined" ? Object : IdPostInput
  ])
], PostsResolver.prototype, "getOneUpdatePost", null);
__decorate19([
  (0, import_type_graphql19.Query)(() => [
    PostsModel
  ]),
  __metadata19("design:type", Function),
  __metadata19("design:paramtypes", [])
], PostsResolver.prototype, "getRandomPosts", null);
PostsResolver = __decorate19([
  (0, import_type_graphql19.Resolver)()
], PostsResolver);
var OptionPostResolver = /* @__PURE__ */ __name(class OptionPostResolver2 {
  async optionUpdatePost(data) {
    const { id, option, info } = data;
    try {
      let isUpdated = await prisma6.post.update({
        where: {
          id: Number(id)
        },
        data: {
          [option]: {
            set: info
          }
        }
      });
      if (isUpdated)
        return true;
    } catch (error) {
      console.log(error);
    }
  }
  async deletePost(data) {
    const { id } = data;
    try {
      let isUpdated = await prisma6.post.delete({
        where: {
          id: Number(id)
        }
      });
      if (isUpdated)
        return true;
    } catch (error) {
      console.log(error);
    }
  }
}, "OptionPostResolver");
__decorate19([
  (0, import_type_graphql19.Mutation)(() => Boolean),
  __param4(0, (0, import_type_graphql19.Arg)("data")),
  __metadata19("design:type", Function),
  __metadata19("design:paramtypes", [
    typeof OptionPostInput === "undefined" ? Object : OptionPostInput
  ])
], OptionPostResolver.prototype, "optionUpdatePost", null);
__decorate19([
  (0, import_type_graphql19.Mutation)(() => Boolean),
  __param4(0, (0, import_type_graphql19.Arg)("data")),
  __metadata19("design:type", Function),
  __metadata19("design:paramtypes", [
    typeof DeletePostInput === "undefined" ? Object : DeletePostInput
  ])
], OptionPostResolver.prototype, "deletePost", null);
OptionPostResolver = __decorate19([
  (0, import_type_graphql19.Resolver)()
], OptionPostResolver);
var PostResolver = /* @__PURE__ */ __name(class PostResolver2 {
  async postQuery(data) {
    const { id } = data;
    try {
      let uniquePost = await prisma6.post.findUnique({
        where: {
          id: Number(id)
        }
      });
      if (uniquePost) {
        return uniquePost;
      }
    } catch (error) {
    }
  }
}, "PostResolver");
__decorate19([
  (0, import_type_graphql19.Query)(() => PostsModel),
  __param4(0, (0, import_type_graphql19.Arg)("input")),
  __metadata19("design:type", Function),
  __metadata19("design:paramtypes", [
    typeof PostInput === "undefined" ? Object : PostInput
  ])
], PostResolver.prototype, "postQuery", null);
PostResolver = __decorate19([
  (0, import_type_graphql19.Resolver)()
], PostResolver);
var CreateSavePostResolver = /* @__PURE__ */ __name(class CreateSavePostResolver2 {
  async createSavePost(data) {
    const { id, ...dataInfo } = data;
    try {
      let CreateUpdatePost = await prisma6.post.upsert({
        where: {
          id: Number(id)
        },
        update: {
          ...dataInfo
        },
        create: {
          ...dataInfo
        }
      });
      if (CreateUpdatePost) {
        return {
          id: CreateUpdatePost.id,
          success: CreateUpdatePost
        };
      }
    } catch (error) {
      console.log(error);
    }
  }
}, "CreateSavePostResolver");
__decorate19([
  (0, import_type_graphql19.Mutation)(() => CreateSavePostModel),
  __param4(0, (0, import_type_graphql19.Arg)("input")),
  __metadata19("design:type", Function),
  __metadata19("design:paramtypes", [
    typeof PostUpdateCreateInput === "undefined" ? Object : PostUpdateCreateInput
  ])
], CreateSavePostResolver.prototype, "createSavePost", null);
CreateSavePostResolver = __decorate19([
  (0, import_type_graphql19.Resolver)()
], CreateSavePostResolver);

// server/Resolvers/file-resolvers.ts
var import_type_graphql21 = require("type-graphql");
var import_convert_base64_to_image = require("convert-base64-to-image");
var import_fs = __toESM(require("fs"));
var import_client7 = require("@prisma/client");

// server/dtos/inputs/file-inputs.ts
var import_type_graphql20 = require("type-graphql");
var import_class_validator6 = require("class-validator");
var __decorate20 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata20 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var FileInput = /* @__PURE__ */ __name(class FileInput2 {
}, "FileInput");
__decorate20([
  (0, import_type_graphql20.Field)(() => String),
  __metadata20("design:type", Boolean)
], FileInput.prototype, "saveToDB", void 0);
__decorate20([
  (0, import_type_graphql20.Field)(() => String),
  (0, import_class_validator6.MaxLength)(3e5),
  __metadata20("design:type", String)
], FileInput.prototype, "base64", void 0);
__decorate20([
  (0, import_type_graphql20.Field)(() => String),
  (0, import_class_validator6.MaxLength)(30),
  __metadata20("design:type", String)
], FileInput.prototype, "name", void 0);
FileInput = __decorate20([
  (0, import_type_graphql20.InputType)()
], FileInput);
var DeleteFileInput = /* @__PURE__ */ __name(class DeleteFileInput2 {
}, "DeleteFileInput");
__decorate20([
  (0, import_type_graphql20.Field)(() => Number),
  __metadata20("design:type", Number)
], DeleteFileInput.prototype, "id", void 0);
DeleteFileInput = __decorate20([
  (0, import_type_graphql20.InputType)()
], DeleteFileInput);

// server/Resolvers/file-resolvers.ts
var __decorate21 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata21 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var __param5 = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var prisma7 = new import_client7.PrismaClient();
var UploadFileResolver = /* @__PURE__ */ __name(class UploadFileResolver2 {
  async uploadFile(file) {
    const { base64, name, saveToDB } = file;
    const pathToImage = `./files/${name}`;
    try {
      if (saveToDB) {
        const isImageAdded = await prisma7.images.create({
          data: {
            name
          }
        });
        if (isImageAdded) {
          (0, import_convert_base64_to_image.converBase64ToImage)(base64, pathToImage);
          return true;
        }
      } else {
        (0, import_convert_base64_to_image.converBase64ToImage)(base64, pathToImage);
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async deleteImage(file) {
    const { id } = file;
    try {
      const imageDeleted = await prisma7.images.delete({
        where: {
          id
        },
        select: {
          name: true
        }
      });
      if (imageDeleted) {
        import_fs.default.unlinkSync(`./files/${imageDeleted}`);
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }
}, "UploadFileResolver");
__decorate21([
  (0, import_type_graphql21.Mutation)(() => Boolean),
  __param5(0, (0, import_type_graphql21.Arg)("input")),
  __metadata21("design:type", Function),
  __metadata21("design:paramtypes", [
    typeof FileInput === "undefined" ? Object : FileInput
  ])
], UploadFileResolver.prototype, "uploadFile", null);
__decorate21([
  (0, import_type_graphql21.Mutation)(() => Boolean),
  __param5(0, (0, import_type_graphql21.Arg)("input")),
  __metadata21("design:type", Function),
  __metadata21("design:paramtypes", [
    typeof DeleteFileInput === "undefined" ? Object : DeleteFileInput
  ])
], UploadFileResolver.prototype, "deleteImage", null);
UploadFileResolver = __decorate21([
  (0, import_type_graphql21.Resolver)()
], UploadFileResolver);

// server/index.ts
var main = /* @__PURE__ */ __name(async () => {
  const schema = await (0, import_type_graphql22.buildSchema)({
    resolvers: [
      CategoriesResolver,
      CategoryNameResolver,
      MiddleResolver,
      SignInResolver,
      PostsResolver,
      OptionPostResolver,
      PostsResolver,
      CreateSavePostResolver,
      searchResolver,
      ImagesResolver,
      UploadFileResolver,
      PostResolver
    ]
  });
  const apolloServer = new import_apollo_server_express.ApolloServer({
    schema,
    cache: "bounded"
  });
  const app = (0, import_express.default)();
  app.use("/files", import_express.default.static("files"));
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app
  });
  app.listen(4e3, () => {
    console.log(`\u{1F680} Server ready at port 4000`);
  });
}, "main");
main();
