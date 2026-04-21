"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restriction = void 0;
const SHACL_1 = require("@_linked/core/shapes/SHACL");
const Shape_1 = require("@_linked/core/shapes/Shape");
const shapes_1 = require("lincd-rdfs/shapes");
const owl_js_1 = require("../ontologies/owl.js");
const package_js_1 = require("../package.js");
let Restriction = class Restriction extends Shape_1.Shape {
    get onProperty() {
        return null;
    }
    get hasValue() {
        return null;
    }
    restrictPropertyHasValue(_property, _value) {
        throw new Error('Restriction.restrictPropertyHasValue depends on legacy mutation and is not migrated');
    }
};
exports.Restriction = Restriction;
Restriction.targetClass = owl_js_1.owl.Restriction;
__decorate([
    (0, SHACL_1.objectProperty)({
        path: owl_js_1.owl.onProperty,
        maxCount: 1,
        shape: shapes_1.Property,
    }),
    __metadata("design:type", shapes_1.Property),
    __metadata("design:paramtypes", [])
], Restriction.prototype, "onProperty", null);
__decorate([
    (0, SHACL_1.objectProperty)({
        path: owl_js_1.owl.hasValue,
        maxCount: 1,
    }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Restriction.prototype, "hasValue", null);
exports.Restriction = Restriction = __decorate([
    package_js_1.linkedShape
], Restriction);
//# sourceMappingURL=Restriction.js.map