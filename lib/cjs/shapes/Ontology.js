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
exports.Ontology = void 0;
const SHACL_1 = require("@_linked/core/shapes/SHACL");
const Prefix_1 = require("@_linked/core/utils/Prefix");
const shapes_1 = require("lincd-rdfs/shapes");
const owl_js_1 = require("../ontologies/owl.js");
const package_js_1 = require("../package.js");
const shacl_1 = require("@_linked/core/ontologies/shacl");
let Ontology = class Ontology extends shapes_1.Resource {
    get declare() {
        return null;
    }
    get declaredPrefix() {
        return '';
    }
    get prefix() {
        return Prefix_1.Prefix.getPrefix(this.id) || undefined;
    }
};
exports.Ontology = Ontology;
Ontology.targetClass = owl_js_1.owl.Ontology;
__decorate([
    (0, SHACL_1.objectProperty)({
        path: shacl_1.shacl.declare,
        maxCount: 1,
    }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Ontology.prototype, "declare", null);
__decorate([
    (0, SHACL_1.literalProperty)({
        path: shacl_1.shacl.prefix,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Ontology.prototype, "declaredPrefix", null);
exports.Ontology = Ontology = __decorate([
    package_js_1.linkedShape
], Ontology);
//# sourceMappingURL=Ontology.js.map