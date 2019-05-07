function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/**
 *  Point2D.js
 *  @module Point2D
 *  @copyright 2001-2019 Kevin Lindsey
 */

/**
 *  Point2D
 *
 *  @memberof module:kld-affine
 */
var Point2D =
/*#__PURE__*/
function () {
  /**
   *  Point2D
   *
   *  @param {number} x
   *  @param {number} y
   *  @returns {module:kld-affine.Point2D}
   */
  function Point2D(x, y) {
    _classCallCheck(this, Point2D);

    this.x = x !== undefined ? x : 0.0;
    this.y = y !== undefined ? y : 0.0;
  }
  /**
   *  clone
   *
   *  @returns {module:kld-affine.Point2D}
   */


  _createClass(Point2D, [{
    key: "clone",
    value: function clone() {
      return new this.constructor(this.x, this.y);
    }
    /**
     *  add
     *
     *  @param {Point2D|Vector2D} that
     *  @returns {module:kld-affine.Point2D}
     */

  }, {
    key: "add",
    value: function add(that) {
      return new this.constructor(this.x + that.x, this.y + that.y);
    }
    /**
     *  subtract
     *
     *  @param { Vector2D | Point2D } that
     *  @returns {module:kld-affine.Point2D}
     */

  }, {
    key: "subtract",
    value: function subtract(that) {
      return new this.constructor(this.x - that.x, this.y - that.y);
    }
    /**
     *  multiply
     *
     *  @param {number} scalar
     *  @returns {module:kld-affine.Point2D}
     */

  }, {
    key: "multiply",
    value: function multiply(scalar) {
      return new this.constructor(this.x * scalar, this.y * scalar);
    }
    /**
     *  divide
     *
     *  @param {number} scalar
     *  @returns {module:kld-affine.Point2D}
     */

  }, {
    key: "divide",
    value: function divide(scalar) {
      return new this.constructor(this.x / scalar, this.y / scalar);
    }
    /**
     *  equals
     *
     *  @param {module:kld-affine.Point2D} that
     *  @returns {boolean}
     */

  }, {
    key: "equals",
    value: function equals(that) {
      return this.x === that.x && this.y === that.y;
    }
    /**
     *  precisionEquals
     *
     *  @param {module:kld-affine.Point2D} that
     *  @param {number} precision
     *  @returns {boolean}
     */

  }, {
    key: "precisionEquals",
    value: function precisionEquals(that, precision) {
      return Math.abs(this.x - that.x) < precision && Math.abs(this.y - that.y) < precision;
    } // utility methods

    /**
     *  lerp
     *
     *  @param {module:kld-affine.Point2D} that
     *  @param {number} t
     *  @returns {module:kld-affine.Point2D}
     */

  }, {
    key: "lerp",
    value: function lerp(that, t) {
      var omt = 1.0 - t;
      return new this.constructor(this.x * omt + that.x * t, this.y * omt + that.y * t);
    }
    /**
     *  distanceFrom
     *
     *  @param {module:kld-affine.Point2D} that
     *  @returns {number}
     */

  }, {
    key: "distanceFrom",
    value: function distanceFrom(that) {
      var dx = this.x - that.x;
      var dy = this.y - that.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
    /**
     *  min
     *
     *  @param {module:kld-affine.Point2D} that
     *  @returns {number}
     */

  }, {
    key: "min",
    value: function min(that) {
      return new this.constructor(Math.min(this.x, that.x), Math.min(this.y, that.y));
    }
    /**
     *  max
     *
     *  @param {module:kld-affine.Point2D} that
     *  @returns {number}
     */

  }, {
    key: "max",
    value: function max(that) {
      return new this.constructor(Math.max(this.x, that.x), Math.max(this.y, that.y));
    }
    /**
     *  transform
     *
     *  @param {module:kld-affine.Matrix2D} matrix
     *  @returns {module:kld-affine.Point2D}
     */

  }, {
    key: "transform",
    value: function transform(matrix) {
      return new this.constructor(matrix.a * this.x + matrix.c * this.y + matrix.e, matrix.b * this.x + matrix.d * this.y + matrix.f);
    }
    /**
     *  toString
     *
     *  @returns {string}
     */

  }, {
    key: "toString",
    value: function toString() {
      return "point(" + this.x + "," + this.y + ")";
    }
  }]);

  return Point2D;
}();

/**
 *  Vector2D.js
 *  @module Vector2D
 *  @copyright 2001-2019 Kevin Lindsey
 */

/**
 *  Vector2D
 *
 *  @memberof module:kld-affine
 */
var Vector2D =
/*#__PURE__*/
function () {
  /**
   *  Vector2D
   *
   *  @param {number} x
   *  @param {number} y
   *  @returns {module:kld-affine.Vector2D}
   */
  function Vector2D(x, y) {
    _classCallCheck(this, Vector2D);

    this.x = x !== undefined ? x : 0.0;
    this.y = y !== undefined ? y : 0.0;
  }
  /**
   *  fromPoints
   *
   *  @param {module:kld-affine.Point2D} p1
   *  @param {module:kld-affine.Point2D} p2
   *  @returns {module:kld-affine.Vector2D}
   */


  _createClass(Vector2D, [{
    key: "length",

    /**
     *  length
     *
     *  @returns {number}
     */
    value: function length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    /**
     *  magnitude
     *
     *  @returns {number}
     */

  }, {
    key: "magnitude",
    value: function magnitude() {
      return this.x * this.x + this.y * this.y;
    }
    /**
     *  dot
     *
     *  @param {module:kld-affine.Vector2D} that
     *  @returns {number}
     */

  }, {
    key: "dot",
    value: function dot(that) {
      return this.x * that.x + this.y * that.y;
    }
    /**
     *  cross
     *
     *  @param {module:kld-affine.Vector2D} that
     *  @returns {number}
     */

  }, {
    key: "cross",
    value: function cross(that) {
      return this.x * that.y - this.y * that.x;
    }
    /**
     *  determinant
     *
     *  @param {module:kld-affine.Vector2D} that
     *  @returns {number}
     */

  }, {
    key: "determinant",
    value: function determinant(that) {
      return this.x * that.y - this.y * that.x;
    }
    /**
     *  unit
     *
     *  @returns {module:kld-affine.Vector2D}
     */

  }, {
    key: "unit",
    value: function unit() {
      return this.divide(this.length());
    }
    /**
     *  add
     *
     *  @param {module:kld-affine.Vector2D} that
     *  @returns {module:kld-affine.Vector2D}
     */

  }, {
    key: "add",
    value: function add(that) {
      return new this.constructor(this.x + that.x, this.y + that.y);
    }
    /**
     *  subtract
     *
     *  @param {module:kld-affine.Vector2D} that
     *  @returns {module:kld-affine.Vector2D}
     */

  }, {
    key: "subtract",
    value: function subtract(that) {
      return new this.constructor(this.x - that.x, this.y - that.y);
    }
    /**
     *  multiply
     *
     *  @param {number} scalar
     *  @returns {module:kld-affine.Vector2D}
     */

  }, {
    key: "multiply",
    value: function multiply(scalar) {
      return new this.constructor(this.x * scalar, this.y * scalar);
    }
    /**
     *  divide
     *
     *  @param {number} scalar
     *  @returns {module:kld-affine.Vector2D}
     */

  }, {
    key: "divide",
    value: function divide(scalar) {
      return new this.constructor(this.x / scalar, this.y / scalar);
    }
    /**
     *  angleBetween
     *
     *  @param {module:kld-affine.Vector2D} that
     *  @returns {number}
     */

  }, {
    key: "angleBetween",
    value: function angleBetween(that) {
      var cos = this.dot(that) / (this.length() * that.length());
      cos = Math.max(-1, Math.min(cos, 1));
      var radians = Math.acos(cos);
      return this.cross(that) < 0.0 ? -radians : radians;
    }
    /**
     *  Find a vector is that is perpendicular to this vector
     *
     *  @returns {module:kld-affine.Vector2D}
     */

  }, {
    key: "perp",
    value: function perp() {
      return new this.constructor(-this.y, this.x);
    }
    /**
     *  Find the component of the specified vector that is perpendicular to
     *  this vector
     *
     *  @param {module:kld-affine.Vector2D} that
     *  @returns {module:kld-affine.Vector2D}
     */

  }, {
    key: "perpendicular",
    value: function perpendicular(that) {
      return this.subtract(this.project(that));
    }
    /**
     *  project
     *
     *  @param {module:kld-affine.Vector2D} that
     *  @returns {module:kld-affine.Vector2D}
     */

  }, {
    key: "project",
    value: function project(that) {
      var percent = this.dot(that) / that.dot(that);
      return that.multiply(percent);
    }
    /**
     *  transform
     *
     *  @param {module:kld-affine.Matrix2D} matrix
     *  @returns {module:kld-affine.Vector2D}
     */

  }, {
    key: "transform",
    value: function transform(matrix) {
      return new this.constructor(matrix.a * this.x + matrix.c * this.y, matrix.b * this.x + matrix.d * this.y);
    }
    /**
     *  equals
     *
     *  @param {module:kld-affine.Vector2D} that
     *  @returns {boolean}
     */

  }, {
    key: "equals",
    value: function equals(that) {
      return this.x === that.x && this.y === that.y;
    }
    /**
     *  precisionEquals
     *
     *  @param {module:kld-affine.Vector2D} that
     *  @param {number} precision
     *  @returns {boolean}
     */

  }, {
    key: "precisionEquals",
    value: function precisionEquals(that, precision) {
      return Math.abs(this.x - that.x) < precision && Math.abs(this.y - that.y) < precision;
    }
    /**
     *  toString
     *
     *  @returns {string}
     */

  }, {
    key: "toString",
    value: function toString() {
      return "vector(" + this.x + "," + this.y + ")";
    }
  }], [{
    key: "fromPoints",
    value: function fromPoints(p1, p2) {
      return new Vector2D(p2.x - p1.x, p2.y - p1.y);
    }
  }]);

  return Vector2D;
}();

/**
 *  Matrix2D.js
 *  @module Matrix2D
 *  @copyright 2001-2019 Kevin Lindsey
 */

/**
 *  Matrix2D
 *
 *  @memberof module:kld-affine
 */
var Matrix2D =
/*#__PURE__*/
function () {
  /**
   *  Matrix2D
   *
   *  [a c e]
   *  [b d f]
   *  [0 0 1]
   *
   *  @param {number} a
   *  @param {number} b
   *  @param {number} c
   *  @param {number} d
   *  @param {number} e
   *  @param {number} f
   *  @returns {module:kld-affine.Matrix2D}
   */
  function Matrix2D(a, b, c, d, e, f) {
    _classCallCheck(this, Matrix2D);

    this.a = a !== undefined ? a : 1;
    this.b = b !== undefined ? b : 0;
    this.c = c !== undefined ? c : 0;
    this.d = d !== undefined ? d : 1;
    this.e = e !== undefined ? e : 0;
    this.f = f !== undefined ? f : 0;
  }
  /**
   *  translation
   *
   *  @param {number} tx
   *  @param {number} ty
   *  @returns {module:kld-affine.Matrix2D}
   */


  _createClass(Matrix2D, [{
    key: "multiply",

    /**
     *  multiply
     *
     *  @param {module:kld-affine.Matrix2D} that
     *  @returns {module:kld-affine.Matrix2D}
     */
    value: function multiply(that) {
      if (this.isIdentity()) {
        return that;
      }

      if (that.isIdentity()) {
        return this;
      }

      return new this.constructor(this.a * that.a + this.c * that.b, this.b * that.a + this.d * that.b, this.a * that.c + this.c * that.d, this.b * that.c + this.d * that.d, this.a * that.e + this.c * that.f + this.e, this.b * that.e + this.d * that.f + this.f);
    }
    /**
     *  inverse
     *
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "inverse",
    value: function inverse() {
      if (this.isIdentity()) {
        return this;
      }

      var det1 = this.a * this.d - this.b * this.c;

      if (det1 === 0.0) {
        throw new Error("Matrix is not invertible");
      }

      var idet = 1.0 / det1;
      var det2 = this.f * this.c - this.e * this.d;
      var det3 = this.e * this.b - this.f * this.a;
      return new this.constructor(this.d * idet, -this.b * idet, -this.c * idet, this.a * idet, det2 * idet, det3 * idet);
    }
    /**
     *  translate
     *
     *  @param {number} tx
     *  @param {number} ty
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "translate",
    value: function translate(tx, ty) {
      return new this.constructor(this.a, this.b, this.c, this.d, this.a * tx + this.c * ty + this.e, this.b * tx + this.d * ty + this.f);
    }
    /**
     *  scale
     *
     *  @param {number} scale
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "scale",
    value: function scale(_scale) {
      return new this.constructor(this.a * _scale, this.b * _scale, this.c * _scale, this.d * _scale, this.e, this.f);
    }
    /**
     *  scaleAt
     *
     *  @param {number} scale
     *  @param {module:kld-affine.Point2D} center
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "scaleAt",
    value: function scaleAt(scale, center) {
      var dx = center.x - scale * center.x;
      var dy = center.y - scale * center.y;
      return new this.constructor(this.a * scale, this.b * scale, this.c * scale, this.d * scale, this.a * dx + this.c * dy + this.e, this.b * dx + this.d * dy + this.f);
    }
    /**
     *  scaleNonUniform
     *
     *  @param {number} scaleX
     *  @param {number} scaleY
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "scaleNonUniform",
    value: function scaleNonUniform(scaleX, scaleY) {
      return new this.constructor(this.a * scaleX, this.b * scaleX, this.c * scaleY, this.d * scaleY, this.e, this.f);
    }
    /**
     *  scaleNonUniformAt
     *
     *  @param {number} scaleX
     *  @param {number} scaleY
     *  @param {module:kld-affine.Point2D} center
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "scaleNonUniformAt",
    value: function scaleNonUniformAt(scaleX, scaleY, center) {
      var dx = center.x - scaleX * center.x;
      var dy = center.y - scaleY * center.y;
      return new this.constructor(this.a * scaleX, this.b * scaleX, this.c * scaleY, this.d * scaleY, this.a * dx + this.c * dy + this.e, this.b * dx + this.d * dy + this.f);
    }
    /**
     *  rotate
     *
     *  @param {number} radians
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "rotate",
    value: function rotate(radians) {
      var c = Math.cos(radians);
      var s = Math.sin(radians);
      return new this.constructor(this.a * c + this.c * s, this.b * c + this.d * s, this.a * -s + this.c * c, this.b * -s + this.d * c, this.e, this.f);
    }
    /**
     *  rotateAt
     *
     *  @param {number} radians
     *  @param {module:kld-affine.Point2D} center
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "rotateAt",
    value: function rotateAt(radians, center) {
      var cos = Math.cos(radians);
      var sin = Math.sin(radians);
      var cx = center.x;
      var cy = center.y;
      var a = this.a * cos + this.c * sin;
      var b = this.b * cos + this.d * sin;
      var c = this.c * cos - this.a * sin;
      var d = this.d * cos - this.b * sin;
      return new this.constructor(a, b, c, d, (this.a - a) * cx + (this.c - c) * cy + this.e, (this.b - b) * cx + (this.d - d) * cy + this.f);
    }
    /**
     *  rotateFromVector
     *
     *  @param {module:kld-affine.Vector2D} vector
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "rotateFromVector",
    value: function rotateFromVector(vector) {
      var unit = vector.unit();
      var c = unit.x; // cos

      var s = unit.y; // sin

      return new this.constructor(this.a * c + this.c * s, this.b * c + this.d * s, this.a * -s + this.c * c, this.b * -s + this.d * c, this.e, this.f);
    }
    /**
     *  flipX
     *
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "flipX",
    value: function flipX() {
      return new this.constructor(-this.a, -this.b, this.c, this.d, this.e, this.f);
    }
    /**
     *  flipY
     *
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "flipY",
    value: function flipY() {
      return new this.constructor(this.a, this.b, -this.c, -this.d, this.e, this.f);
    }
    /**
     *  skewX
     *
     *  @param {number} radians
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "skewX",
    value: function skewX(radians) {
      var t = Math.tan(radians);
      return new this.constructor(this.a, this.b, this.c + this.a * t, this.d + this.b * t, this.e, this.f);
    } // TODO: skewXAt

    /**
     *  skewY
     *
     *  @param {number} radians
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "skewY",
    value: function skewY(radians) {
      var t = Math.tan(radians);
      return new this.constructor(this.a + this.c * t, this.b + this.d * t, this.c, this.d, this.e, this.f);
    } // TODO: skewYAt

    /**
     *  isIdentity
     *
     *  @returns {boolean}
     */

  }, {
    key: "isIdentity",
    value: function isIdentity() {
      return this.a === 1.0 && this.b === 0.0 && this.c === 0.0 && this.d === 1.0 && this.e === 0.0 && this.f === 0.0;
    }
    /**
     *  isInvertible
     *
     *  @returns {boolean}
     */

  }, {
    key: "isInvertible",
    value: function isInvertible() {
      return this.a * this.d - this.b * this.c !== 0.0;
    }
    /**
     *  getScale
     *
     *  @returns {{ scaleX: number, scaleY: number }}
     */

  }, {
    key: "getScale",
    value: function getScale() {
      return {
        scaleX: Math.sqrt(this.a * this.a + this.c * this.c),
        scaleY: Math.sqrt(this.b * this.b + this.d * this.d)
      };
    }
    /**
     *  getDecomposition
     *
     *  Calculates matrix Singular Value Decomposition
     *
     *  The resulting matrices, translation, rotation, scale, and rotation0, return
     *  this matrix when they are muliplied together in the listed order
     *
     *  @see Jim Blinn's article {@link http://dx.doi.org/10.1109/38.486688}
     *  @see {@link http://math.stackexchange.com/questions/861674/decompose-a-2d-arbitrary-transform-into-only-scaling-and-rotation}
     *
     *  @returns {{ translation: module:kld-affine.Matrix2D, rotation: module:kld-affine.Matrix2D, scale: module:kld-affine.Matrix2D, rotation0: module:kld-affine.Matrix2D }}
     */

  }, {
    key: "getDecomposition",
    value: function getDecomposition() {
      var E = (this.a + this.d) * 0.5;
      var F = (this.a - this.d) * 0.5;
      var G = (this.b + this.c) * 0.5;
      var H = (this.b - this.c) * 0.5;
      var Q = Math.sqrt(E * E + H * H);
      var R = Math.sqrt(F * F + G * G);
      var scaleX = Q + R;
      var scaleY = Q - R;
      var a1 = Math.atan2(G, F);
      var a2 = Math.atan2(H, E);
      var theta = (a2 - a1) * 0.5;
      var phi = (a2 + a1) * 0.5;
      return {
        translation: this.constructor.translation(this.e, this.f),
        rotation: this.constructor.rotation(phi),
        scale: this.constructor.nonUniformScaling(scaleX, scaleY),
        rotation0: this.constructor.rotation(theta)
      };
    }
    /**
     *  equals
     *
     *  @param {module:kld-affine.Matrix2D} that
     *  @returns {boolean}
     */

  }, {
    key: "equals",
    value: function equals(that) {
      return this.a === that.a && this.b === that.b && this.c === that.c && this.d === that.d && this.e === that.e && this.f === that.f;
    }
    /**
     *  precisionEquals
     *
     *  @param {module:kld-affine.Matrix2D} that
     *  @param {number} precision
     *  @returns {boolean}
     */

  }, {
    key: "precisionEquals",
    value: function precisionEquals(that, precision) {
      return Math.abs(this.a - that.a) < precision && Math.abs(this.b - that.b) < precision && Math.abs(this.c - that.c) < precision && Math.abs(this.d - that.d) < precision && Math.abs(this.e - that.e) < precision && Math.abs(this.f - that.f) < precision;
    }
    /**
     *  toString
     *
     *  @returns {string}
     */

  }, {
    key: "toString",
    value: function toString() {
      return "matrix(" + [this.a, this.b, this.c, this.d, this.e, this.f].join(",") + ")";
    }
  }], [{
    key: "translation",
    value: function translation(tx, ty) {
      return new Matrix2D(1, 0, 0, 1, tx, ty);
    }
    /**
     *  scaling
     *
     *  @param {number} scale
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "scaling",
    value: function scaling(scale) {
      return new Matrix2D(scale, 0, 0, scale, 0, 0);
    }
    /**
     *  scalingAt
     *
     *  @param {number} scale
     *  @param {module:kld-affine.Point2D} center
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "scalingAt",
    value: function scalingAt(scale, center) {
      return new Matrix2D(scale, 0, 0, scale, center.x - center.x * scale, center.y - center.y * scale);
    }
    /**
     *  nonUniformScaling
     *
     *  @param {number} scaleX
     *  @param {number} scaleY
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "nonUniformScaling",
    value: function nonUniformScaling(scaleX, scaleY) {
      return new Matrix2D(scaleX, 0, 0, scaleY, 0, 0);
    }
    /**
     *  nonUniformScalingAt
     *
     *  @param {number} scaleX
     *  @param {number} scaleY
     *  @param {module:kld-affine.Point2D} center
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "nonUniformScalingAt",
    value: function nonUniformScalingAt(scaleX, scaleY, center) {
      return new Matrix2D(scaleX, 0, 0, scaleY, center.x - center.x * scaleX, center.y - center.y * scaleY);
    }
    /**
     *  rotation
     *
     *  @param {number} radians
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "rotation",
    value: function rotation(radians) {
      var c = Math.cos(radians);
      var s = Math.sin(radians);
      return new Matrix2D(c, s, -s, c, 0, 0);
    }
    /**
     *  rotationAt
     *
     *  @param {number} radians
     *  @param {module:kld-affine.Point2D} center
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "rotationAt",
    value: function rotationAt(radians, center) {
      var c = Math.cos(radians);
      var s = Math.sin(radians);
      return new Matrix2D(c, s, -s, c, center.x - center.x * c + center.y * s, center.y - center.y * c - center.x * s);
    }
    /**
     *  rotationFromVector
     *
     *  @param {module:kld-affine.Vector2D} vector
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "rotationFromVector",
    value: function rotationFromVector(vector) {
      var unit = vector.unit();
      var c = unit.x; // cos

      var s = unit.y; // sin

      return new Matrix2D(c, s, -s, c, 0, 0);
    }
    /**
     *  xFlip
     *
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "xFlip",
    value: function xFlip() {
      return new Matrix2D(-1, 0, 0, 1, 0, 0);
    }
    /**
     *  yFlip
     *
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "yFlip",
    value: function yFlip() {
      return new Matrix2D(1, 0, 0, -1, 0, 0);
    }
    /**
     *  xSkew
     *
     *  @param {number} radians
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "xSkew",
    value: function xSkew(radians) {
      var t = Math.tan(radians);
      return new Matrix2D(1, 0, t, 1, 0, 0);
    }
    /**
     *  ySkew
     *
     *  @param {number} radians
     *  @returns {module:kld-affine.Matrix2D}
     */

  }, {
    key: "ySkew",
    value: function ySkew(radians) {
      var t = Math.tan(radians);
      return new Matrix2D(1, t, 0, 1, 0, 0);
    }
  }]);

  return Matrix2D;
}();
/**
 *  Identity matrix
 *
 *  @returns {module:kld-affine.Matrix2D}
 */


Matrix2D.IDENTITY = new Matrix2D();

Matrix2D.IDENTITY.isIdentity = function () {
  return true;
};

/**
 *  @module kld-affine
 */

/* eslint-disable camelcase, unicorn/prefer-type-error */

/**
 *  Polynomial.js
 *
 *  @module Polynomial
 *  @copyright 2002-2019 Kevin Lindsey<br>
 *  -<br>
 *  Contribution {@link http://github.com/Quazistax/kld-polynomial}<br>
 *  2015 Robert Benko (Quazistax) <quazistax@gmail.com><br>
 *  MIT license
 */

/**
 *  Sign of a number (+1, -1, +0, -0).
 *
 *  @param {number} x
 *  @returns {number}
 */
function sign(x) {
  // eslint-disable-next-line no-self-compare
  return typeof x === "number" ? x ? x < 0 ? -1 : 1 : x === x ? x : NaN : NaN;
}
/**
 *  Polynomial
 *
 *  @memberof module:kld-polynomial
 */


var Polynomial =
/*#__PURE__*/
function () {
  /**
   *  Polynomial
   *
   *  @param {Array<number>} coefs
   *  @returns {module:kld-polynomial.Polynomial}
   */
  function Polynomial() {
    _classCallCheck(this, Polynomial);

    this.coefs = [];

    for (var i = arguments.length - 1; i >= 0; i--) {
      this.coefs.push(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    }

    this._variable = "t";
    this._s = 0;
  }
  /**
   *  interpolate
   *
   *  Based on poloint in "Numerical Recipes in C, 2nd Edition", pages 109-110
   *
   *  @param {Array<number>} xs
   *  @param {Array<number>} ys
   *  @param {number} n
   *  @param {number} offset
   *  @param {number} x
   *
   *  @returns {{y: number, dy: number}}
   */


  _createClass(Polynomial, [{
    key: "clone",

    /**
     *  Clones this polynomial and return the clone.
     *
     *  @returns {module:kld-polynomial.Polynomial}
     */
    value: function clone() {
      var poly = new Polynomial();
      poly.coefs = this.coefs.slice();
      return poly;
    }
    /**
     *  eval
     *
     *  @param {number} x
     */

  }, {
    key: "eval",
    value: function _eval(x) {
      if (isNaN(x)) {
        throw new Error("Polynomial.eval: parameter must be a number, got '".concat(x, "'"));
      }

      var result = 0;

      for (var i = this.coefs.length - 1; i >= 0; i--) {
        result = result * x + this.coefs[i];
      }

      return result;
    }
    /**
     *  add
     *
     *  @param {module:kld-polynomial.Polynomial} that
     *  @returns {module:kld-polynomial.Polynomial}
     */

  }, {
    key: "add",
    value: function add(that) {
      var result = new Polynomial();
      var d1 = this.getDegree();
      var d2 = that.getDegree();
      var dmax = Math.max(d1, d2);

      for (var i = 0; i <= dmax; i++) {
        var v1 = i <= d1 ? this.coefs[i] : 0;
        var v2 = i <= d2 ? that.coefs[i] : 0;
        result.coefs[i] = v1 + v2;
      }

      return result;
    }
    /**
     *  multiply
     *
     *  @param {module:kld-polynomial.Polynomial} that
     *  @returns {module:kld-polynomial.Polynomial}
     */

  }, {
    key: "multiply",
    value: function multiply(that) {
      var result = new Polynomial();

      for (var i = 0; i <= this.getDegree() + that.getDegree(); i++) {
        result.coefs.push(0);
      }

      for (var _i = 0; _i <= this.getDegree(); _i++) {
        for (var j = 0; j <= that.getDegree(); j++) {
          result.coefs[_i + j] += this.coefs[_i] * that.coefs[j];
        }
      }

      return result;
    }
    /**
     *  divide_scalar
     *
     *  @param {number} scalar
     */

  }, {
    key: "divide_scalar",
    value: function divide_scalar(scalar) {
      for (var i = 0; i < this.coefs.length; i++) {
        this.coefs[i] /= scalar;
      }
    }
    /**
     *  simplify
     *
     *  @param {number} TOLERANCE
     */

  }, {
    key: "simplify",
    value: function simplify(TOLERANCE) {
      if (TOLERANCE === undefined) {
        TOLERANCE = 1e-12;
      }

      for (var i = this.getDegree(); i >= 0; i--) {
        if (Math.abs(this.coefs[i]) <= TOLERANCE) {
          this.coefs.pop();
        } else {
          break;
        }
      }
    }
    /**
     *  bisection
     *
     *  @param {number} min
     *  @param {number} max
     *
     *  @returns {number}
     */

  }, {
    key: "bisection",
    value: function bisection(min, max) {
      var minValue = this.eval(min);
      var maxValue = this.eval(max);
      var result;

      if (Math.abs(minValue) <= Polynomial.TOLERANCE) {
        result = min;
      } else if (Math.abs(maxValue) <= Polynomial.TOLERANCE) {
        result = max;
      } else if (minValue * maxValue <= 0) {
        var tmp1 = Math.log(max - min);
        var tmp2 = Math.LN10 * Polynomial.ACCURACY;
        var iters = Math.ceil((tmp1 + tmp2) / Math.LN2);

        for (var i = 0; i < iters; i++) {
          result = 0.5 * (min + max);
          var value = this.eval(result);

          if (Math.abs(value) <= Polynomial.TOLERANCE) {
            break;
          }

          if (value * minValue < 0) {
            max = result;
            maxValue = value;
          } else {
            min = result;
            minValue = value;
          }
        }
      }

      return result;
    }
    /**
     *  toString
     *
     *  @returns {string}
     */

  }, {
    key: "toString",
    value: function toString() {
      var coefs = [];
      var signs = [];

      for (var i = this.coefs.length - 1; i >= 0; i--) {
        var value = Math.round(this.coefs[i] * 1000) / 1000;

        if (value !== 0) {
          var signString = value < 0 ? " - " : " + ";
          value = Math.abs(value);

          if (i > 0) {
            if (value === 1) {
              value = this._variable;
            } else {
              value += this._variable;
            }
          }

          if (i > 1) {
            value += "^" + i;
          }

          signs.push(signString);
          coefs.push(value);
        }
      }

      signs[0] = signs[0] === " + " ? "" : "-";
      var result = "";

      for (var _i2 = 0; _i2 < coefs.length; _i2++) {
        result += signs[_i2] + coefs[_i2];
      }

      return result;
    }
    /**
     *  trapezoid
     *
     *  Based on trapzd in "Numerical Recipes in C, 2nd Edition", page 137
     *
     *  @param {number} min
     *  @param {number} max
     *  @param {number} n
     *  @returns {number}
     */

  }, {
    key: "trapezoid",
    value: function trapezoid(min, max, n) {
      if (isNaN(min) || isNaN(max) || isNaN(n)) {
        throw new Error("Polynomial.trapezoid: parameters must be numbers");
      }

      var range = max - min;

      if (n === 1) {
        var minValue = this.eval(min);
        var maxValue = this.eval(max);
        this._s = 0.5 * range * (minValue + maxValue);
      } else {
        var iter = 1 << n - 2;
        var delta = range / iter;
        var x = min + 0.5 * delta;
        var sum = 0;

        for (var i = 0; i < iter; i++) {
          sum += this.eval(x);
          x += delta;
        }

        this._s = 0.5 * (this._s + range * sum / iter);
      }

      if (isNaN(this._s)) {
        throw new Error("Polynomial.trapezoid: this._s is NaN");
      }

      return this._s;
    }
    /**
     *  simpson
     *
     *  Based on trapzd in "Numerical Recipes in C, 2nd Edition", page 139
     *
     *  @param {number} min
     *  @param {number} max
     *  @returns {number}
     */

  }, {
    key: "simpson",
    value: function simpson(min, max) {
      if (isNaN(min) || isNaN(max)) {
        throw new Error("Polynomial.simpson: parameters must be numbers");
      }

      var range = max - min;
      var st = 0.5 * range * (this.eval(min) + this.eval(max));
      var t = st;
      var s = 4.0 * st / 3.0;
      var os = s;
      var ost = st;
      var TOLERANCE = 1e-7;
      var iter = 1;

      for (var n = 2; n <= 20; n++) {
        var delta = range / iter;
        var x = min + 0.5 * delta;
        var sum = 0;

        for (var i = 1; i <= iter; i++) {
          sum += this.eval(x);
          x += delta;
        }

        t = 0.5 * (t + range * sum / iter);
        st = t;
        s = (4.0 * st - ost) / 3.0;

        if (Math.abs(s - os) < TOLERANCE * Math.abs(os)) {
          break;
        }

        os = s;
        ost = st;
        iter <<= 1;
      }

      return s;
    }
    /**
     *  romberg
     *
     *  @param {number} min
     *  @param {number} max
     *  @returns {number}
     */

  }, {
    key: "romberg",
    value: function romberg(min, max) {
      if (isNaN(min) || isNaN(max)) {
        throw new Error("Polynomial.romberg: parameters must be numbers");
      }

      var MAX = 20;
      var K = 3;
      var TOLERANCE = 1e-6;
      var s = new Array(MAX + 1);
      var h = new Array(MAX + 1);
      var result = {
        y: 0,
        dy: 0
      };
      h[0] = 1.0;

      for (var j = 1; j <= MAX; j++) {
        s[j - 1] = this.trapezoid(min, max, j);

        if (j >= K) {
          result = Polynomial.interpolate(h, s, K, j - K, 0.0);

          if (Math.abs(result.dy) <= TOLERANCE * result.y) {
            break;
          }
        }

        s[j] = s[j - 1];
        h[j] = 0.25 * h[j - 1];
      }

      return result.y;
    } // getters and setters

    /**
     *  get degree
     *
     *  @returns {number}
     */

  }, {
    key: "getDegree",
    value: function getDegree() {
      return this.coefs.length - 1;
    }
    /**
     *  getDerivative
     *
     *  @returns {module:kld-polynomial.Polynomial}
     */

  }, {
    key: "getDerivative",
    value: function getDerivative() {
      var derivative = new Polynomial();

      for (var i = 1; i < this.coefs.length; i++) {
        derivative.coefs.push(i * this.coefs[i]);
      }

      return derivative;
    }
    /**
     *  getRoots
     *
     *  @returns {Array<number>}
     */

  }, {
    key: "getRoots",
    value: function getRoots() {
      var result;
      this.simplify();

      switch (this.getDegree()) {
        case 0:
          result = [];
          break;

        case 1:
          result = this.getLinearRoot();
          break;

        case 2:
          result = this.getQuadraticRoots();
          break;

        case 3:
          result = this.getCubicRoots();
          break;

        case 4:
          result = this.getQuarticRoots();
          break;

        default:
          result = [];
      }

      return result;
    }
    /**
     *  getRootsInInterval
     *
     *  @param {number} min
     *  @param {number} max
     *  @returns {Array<number>}
     */

  }, {
    key: "getRootsInInterval",
    value: function getRootsInInterval(min, max) {
      var roots = [];
      /**
       *  @param {number} value
       */

      function push(value) {
        if (typeof value === "number") {
          roots.push(value);
        }
      }

      if (this.getDegree() === 0) {
        throw new Error("Polynomial.getRootsInInterval: Unexpected empty polynomial");
      } else if (this.getDegree() === 1) {
        push(this.bisection(min, max));
      } else {
        // get roots of derivative
        var deriv = this.getDerivative();
        var droots = deriv.getRootsInInterval(min, max);

        if (droots.length > 0) {
          // find root on [min, droots[0]]
          push(this.bisection(min, droots[0])); // find root on [droots[i],droots[i+1]] for 0 <= i <= count-2

          for (var i = 0; i <= droots.length - 2; i++) {
            push(this.bisection(droots[i], droots[i + 1]));
          } // find root on [droots[count-1],xmax]


          push(this.bisection(droots[droots.length - 1], max));
        } else {
          // polynomial is monotone on [min,max], has at most one root
          push(this.bisection(min, max));
        }
      }

      return roots;
    }
    /**
     *  getLinearRoot
     *
     *  @returns {number}
     */

  }, {
    key: "getLinearRoot",
    value: function getLinearRoot() {
      var result = [];
      var a = this.coefs[1];

      if (a !== 0) {
        result.push(-this.coefs[0] / a);
      }

      return result;
    }
    /**
     *  getQuadraticRoots
     *
     *  @returns {Array<number>}
     */

  }, {
    key: "getQuadraticRoots",
    value: function getQuadraticRoots() {
      var results = [];

      if (this.getDegree() === 2) {
        var a = this.coefs[2];
        var b = this.coefs[1] / a;
        var c = this.coefs[0] / a;
        var d = b * b - 4 * c;

        if (d > 0) {
          var e = Math.sqrt(d);
          results.push(0.5 * (-b + e));
          results.push(0.5 * (-b - e));
        } else if (d === 0) {
          // really two roots with same value, but we only return one
          results.push(0.5 * -b);
        }
      }

      return results;
    }
    /**
     *  getCubicRoots
     *
     *  This code is based on MgcPolynomial.cpp written by David Eberly.  His
     *  code along with many other excellent examples are avaiable at his site:
     *  http://www.geometrictools.com
     *
     *  @returns {Array<number>}
     */

  }, {
    key: "getCubicRoots",
    value: function getCubicRoots() {
      var results = [];

      if (this.getDegree() === 3) {
        var c3 = this.coefs[3];
        var c2 = this.coefs[2] / c3;
        var c1 = this.coefs[1] / c3;
        var c0 = this.coefs[0] / c3;
        var a = (3 * c1 - c2 * c2) / 3;
        var b = (2 * c2 * c2 * c2 - 9 * c1 * c2 + 27 * c0) / 27;
        var offset = c2 / 3;
        var discrim = b * b / 4 + a * a * a / 27;
        var halfB = b / 2;
        var ZEROepsilon = this.zeroErrorEstimate();

        if (Math.abs(discrim) <= ZEROepsilon) {
          discrim = 0;
        }

        if (discrim > 0) {
          var e = Math.sqrt(discrim);
          var root; // eslint-disable-line no-shadow

          var tmp = -halfB + e;

          if (tmp >= 0) {
            root = Math.pow(tmp, 1 / 3);
          } else {
            root = -Math.pow(-tmp, 1 / 3);
          }

          tmp = -halfB - e;

          if (tmp >= 0) {
            root += Math.pow(tmp, 1 / 3);
          } else {
            root -= Math.pow(-tmp, 1 / 3);
          }

          results.push(root - offset);
        } else if (discrim < 0) {
          var distance = Math.sqrt(-a / 3);
          var angle = Math.atan2(Math.sqrt(-discrim), -halfB) / 3;
          var cos = Math.cos(angle);
          var sin = Math.sin(angle);
          var sqrt3 = Math.sqrt(3);
          results.push(2 * distance * cos - offset);
          results.push(-distance * (cos + sqrt3 * sin) - offset);
          results.push(-distance * (cos - sqrt3 * sin) - offset);
        } else {
          var _tmp;

          if (halfB >= 0) {
            _tmp = -Math.pow(halfB, 1 / 3);
          } else {
            _tmp = Math.pow(-halfB, 1 / 3);
          }

          results.push(2 * _tmp - offset); // really should return next root twice, but we return only one

          results.push(-_tmp - offset);
        }
      }

      return results;
    }
    /**
     *  Calculates roots of quartic polynomial. <br/>
     *  First, derivative roots are found, then used to split quartic polynomial
     *  into segments, each containing one root of quartic polynomial.
     *  Segments are then passed to newton's method to find roots.
     *
     *  @returns {Array<number>} roots
     */

  }, {
    key: "getQuarticRoots",
    value: function getQuarticRoots() {
      var results = [];
      var n = this.getDegree();

      if (n === 4) {
        var poly = new Polynomial();
        poly.coefs = this.coefs.slice();
        poly.divide_scalar(poly.coefs[n]);
        var ERRF = 1e-15;

        if (Math.abs(poly.coefs[0]) < 10 * ERRF * Math.abs(poly.coefs[3])) {
          poly.coefs[0] = 0;
        }

        var poly_d = poly.getDerivative();
        var derrt = poly_d.getRoots().sort(function (a, b) {
          return a - b;
        });
        var dery = [];
        var nr = derrt.length - 1;
        var rb = this.bounds();
        var maxabsX = Math.max(Math.abs(rb.minX), Math.abs(rb.maxX));
        var ZEROepsilon = this.zeroErrorEstimate(maxabsX);

        for (var _i3 = 0; _i3 <= nr; _i3++) {
          dery.push(poly.eval(derrt[_i3]));
        }

        for (var _i4 = 0; _i4 <= nr; _i4++) {
          if (Math.abs(dery[_i4]) < ZEROepsilon) {
            dery[_i4] = 0;
          }
        }

        var i = 0;
        var dx = Math.max(0.1 * (rb.maxX - rb.minX) / n, ERRF);
        var guesses = [];
        var minmax = [];

        if (nr > -1) {
          if (dery[0] !== 0) {
            if (sign(dery[0]) !== sign(poly.eval(derrt[0] - dx) - dery[0])) {
              guesses.push(derrt[0] - dx);
              minmax.push([rb.minX, derrt[0]]);
            }
          } else {
            results.push(derrt[0], derrt[0]);
            i++;
          }

          for (; i < nr; i++) {
            if (dery[i + 1] === 0) {
              results.push(derrt[i + 1], derrt[i + 1]);
              i++;
            } else if (sign(dery[i]) !== sign(dery[i + 1])) {
              guesses.push((derrt[i] + derrt[i + 1]) / 2);
              minmax.push([derrt[i], derrt[i + 1]]);
            }
          }

          if (dery[nr] !== 0 && sign(dery[nr]) !== sign(poly.eval(derrt[nr] + dx) - dery[nr])) {
            guesses.push(derrt[nr] + dx);
            minmax.push([derrt[nr], rb.maxX]);
          }
        }
        /**
         *  @param {number} x
         *  @returns {number}
         */


        var f = function f(x) {
          return poly.eval(x);
        };
        /**
         *  @param {number} x
         *  @returns {number}
         */


        var df = function df(x) {
          return poly_d.eval(x);
        };

        if (guesses.length > 0) {
          for (i = 0; i < guesses.length; i++) {
            guesses[i] = Polynomial.newton_secant_bisection(guesses[i], f, df, 32, minmax[i][0], minmax[i][1]);
          }
        }

        results = results.concat(guesses);
      }

      return results;
    }
    /**
     *  Estimate what is the maximum polynomial evaluation error value under which polynomial evaluation could be in fact 0.
     *
     *  @param {number} maxabsX
     *  @returns {number}
     */

  }, {
    key: "zeroErrorEstimate",
    value: function zeroErrorEstimate(maxabsX) {
      var poly = this;
      var ERRF = 1e-15;

      if (typeof maxabsX === "undefined") {
        var rb = poly.bounds();
        maxabsX = Math.max(Math.abs(rb.minX), Math.abs(rb.maxX));
      }

      if (maxabsX < 0.001) {
        return 2 * Math.abs(poly.eval(ERRF));
      }

      var n = poly.coefs.length - 1;
      var an = poly.coefs[n];
      return 10 * ERRF * poly.coefs.reduce(function (m, v, i) {
        var nm = v / an * Math.pow(maxabsX, i);
        return nm > m ? nm : m;
      }, 0);
    }
    /**
     *  Calculates upper Real roots bounds. <br/>
     *  Real roots are in interval [negX, posX]. Determined by Fujiwara method.
     *  @see {@link http://en.wikipedia.org/wiki/Properties_of_polynomial_roots}
     *
     *  @returns {{ negX: number, posX: number }}
     */

  }, {
    key: "bounds_UpperReal_Fujiwara",
    value: function bounds_UpperReal_Fujiwara() {
      var a = this.coefs;
      var n = a.length - 1;
      var an = a[n];

      if (an !== 1) {
        a = this.coefs.map(function (v) {
          return v / an;
        });
      }

      var b = a.map(function (v, i) {
        return i < n ? Math.pow(Math.abs(i === 0 ? v / 2 : v), 1 / (n - i)) : v;
      });
      var coefSelectionFunc;

      var find2Max = function find2Max(acc, bi, i) {
        if (coefSelectionFunc(i)) {
          if (acc.max < bi) {
            acc.nearmax = acc.max;
            acc.max = bi;
          } else if (acc.nearmax < bi) {
            acc.nearmax = bi;
          }
        }

        return acc;
      };

      coefSelectionFunc = function coefSelectionFunc(i) {
        return i < n && a[i] < 0;
      }; // eslint-disable-next-line unicorn/no-fn-reference-in-iterator


      var max_nearmax_pos = b.reduce(find2Max, {
        max: 0,
        nearmax: 0
      });

      coefSelectionFunc = function coefSelectionFunc(i) {
        return i < n && (n % 2 === i % 2 ? a[i] < 0 : a[i] > 0);
      }; // eslint-disable-next-line unicorn/no-fn-reference-in-iterator


      var max_nearmax_neg = b.reduce(find2Max, {
        max: 0,
        nearmax: 0
      });
      return {
        negX: -2 * max_nearmax_neg.max,
        posX: 2 * max_nearmax_pos.max
      };
    }
    /**
     *  Calculates lower Real roots bounds. <br/>
     *  There are no Real roots in interval <negX, posX>. Determined by Fujiwara method.
     *  @see {@link http://en.wikipedia.org/wiki/Properties_of_polynomial_roots}
     *
     *  @returns {{ negX: number, posX: number }}
     */

  }, {
    key: "bounds_LowerReal_Fujiwara",
    value: function bounds_LowerReal_Fujiwara() {
      var poly = new Polynomial();
      poly.coefs = this.coefs.slice().reverse();
      var res = poly.bounds_UpperReal_Fujiwara();
      res.negX = 1 / res.negX;
      res.posX = 1 / res.posX;
      return res;
    }
    /**
     *  Calculates left and right Real roots bounds. <br/>
     *  Real roots are in interval [minX, maxX]. Combines Fujiwara lower and upper bounds to get minimal interval.
     *  @see {@link http://en.wikipedia.org/wiki/Properties_of_polynomial_roots}
     *
     *  @returns {{ minX: number, maxX: number }}
    */

  }, {
    key: "bounds",
    value: function bounds() {
      var urb = this.bounds_UpperReal_Fujiwara();
      var rb = {
        minX: urb.negX,
        maxX: urb.posX
      };

      if (urb.negX === 0 && urb.posX === 0) {
        return rb;
      }

      if (urb.negX === 0) {
        rb.minX = this.bounds_LowerReal_Fujiwara().posX;
      } else if (urb.posX === 0) {
        rb.maxX = this.bounds_LowerReal_Fujiwara().negX;
      }

      if (rb.minX > rb.maxX) {
        rb.minX = rb.maxX = 0;
      }

      return rb; // TODO: if sure that there are no complex roots
      // (maybe by using Sturm's theorem) use:
      // return this.bounds_Real_Laguerre();
    }
    /**
     *  Sets small coefficients to zero.
     *
     *  @returns {module:kld-polynomial.Polynomial}
     */

  }, {
    key: "modify_zeroSmallCoefs",
    value: function modify_zeroSmallCoefs() {
      var c = this.coefs;
      var ERRF = 1e-15;
      var err = 10 * ERRF * Math.abs(c.reduce(function (pv, cv) {
        return Math.abs(cv) > Math.abs(pv) ? cv : pv;
      }));

      for (var i = 0; i < c.length - 1; i++) {
        if (Math.abs(c[i]) < err) {
          c[i] = 0;
        }
      }

      return this;
    }
    /**
     *  Scales polynomial so that leading coefficient becomes 1.
     *
     *  @returns {module:kld-polynomial.Polynomial}
     */

  }, {
    key: "modify_toMonic",
    value: function modify_toMonic() {
      var c = this.coefs;

      if (c[c.length - 1] !== 1) {
        this.divide_scalar(c[c.length - 1]);
      }

      return this;
    }
    /**
     *  Calculates absolute upper roots bound. <br/>
     *  All (Complex and Real) roots magnitudes are &lt;= result. Determined by Rouche method.
     *  @see {@link http://en.wikipedia.org/wiki/Properties_of_polynomial_roots}
     *  @returns {number}
     */

  }, {
    key: "bound_UpperAbs_Rouche",
    value: function bound_UpperAbs_Rouche() {
      var a = this.coefs;
      var n = a.length - 1;
      var max = a.reduce(function (prev, curr, i) {
        if (i !== n) {
          curr = Math.abs(curr);
          return prev < curr ? curr : prev;
        }

        return prev;
      }, 0);
      return 1 + max / Math.abs(a[n]);
    }
    /**
     *  Calculates absolute lower roots bound. <br/>
     *  All (Complex and Real) roots magnitudes are &gt;= result. Determined by Rouche method.
     *  @see {@link http://en.wikipedia.org/wiki/Properties_of_polynomial_roots}
     *  @returns {number}
     */

  }, {
    key: "bound_LowerAbs_Rouche",
    value: function bound_LowerAbs_Rouche() {
      var a = this.coefs;
      var max = a.reduce(function (prev, curr, i) {
        if (i !== 0) {
          curr = Math.abs(curr);
          return prev < curr ? curr : prev;
        }

        return prev;
      }, 0);
      return Math.abs(a[0]) / (Math.abs(a[0]) + max);
    }
    /**
     *  Calculates left and right Real roots bounds. <br/>
     *  WORKS ONLY if all polynomial roots are Real.
     *  Real roots are in interval [minX, maxX]. Determined by Laguerre method.
     *  @see {@link http://en.wikipedia.org/wiki/Properties_of_polynomial_roots}
     *  @returns {{ minX: number, maxX: number }}
     */

  }, {
    key: "bounds_Real_Laguerre",
    value: function bounds_Real_Laguerre() {
      var a = this.coefs;
      var n = a.length - 1;
      var p1 = -a[n - 1] / (n * a[n]);
      var undersqrt = a[n - 1] * a[n - 1] - 2 * n / (n - 1) * a[n] * a[n - 2];
      var p2 = (n - 1) / (n * a[n]) * Math.sqrt(undersqrt);

      if (p2 < 0) {
        p2 = -p2;
      }

      return {
        minX: p1 - p2,
        maxX: p1 + p2
      };
    }
    /**
     *  Root count by Descartes rule of signs. <br/>
     *  Returns maximum number of positive and negative real roots and minimum number of complex roots.
     *  @see {@link http://en.wikipedia.org/wiki/Descartes%27_rule_of_signs}
     *  @returns {{maxRealPos: number, maxRealNeg: number, minComplex: number}}
     */

  }, {
    key: "countRoots_Descartes",
    value: function countRoots_Descartes() {
      var a = this.coefs;
      var n = a.length - 1;
      var accum = a.reduce(function (acc, ai, i) {
        if (acc.prev_a !== 0 && ai !== 0) {
          if (acc.prev_a < 0 === ai > 0) {
            acc.pos++;
          }

          if (i % 2 === 0 !== acc.prev_a < 0 === (i % 2 === 1 !== ai > 0)) {
            acc.neg++;
          }
        }

        acc.prev_a = ai;
        return acc;
      }, {
        pos: 0,
        neg: 0,
        prev_a: 0
      });
      return {
        maxRealPos: accum.pos,
        maxRealNeg: accum.neg,
        minComplex: n - (accum.pos + accum.neg)
      };
    }
  }], [{
    key: "interpolate",
    value: function interpolate(xs, ys, n, offset, x) {
      if (xs.constructor !== Array || ys.constructor !== Array) {
        throw new Error("Polynomial.interpolate: xs and ys must be arrays");
      }

      if (isNaN(n) || isNaN(offset) || isNaN(x)) {
        throw new Error("Polynomial.interpolate: n, offset, and x must be numbers");
      }

      var i;
      var y = 0;
      var dy = 0;
      var c = new Array(n);
      var d = new Array(n);
      var ns = 0;
      var diff = Math.abs(x - xs[offset]);

      for (i = 0; i < n; i++) {
        var dift = Math.abs(x - xs[offset + i]);

        if (dift < diff) {
          ns = i;
          diff = dift;
        }

        c[i] = d[i] = ys[offset + i];
      }

      y = ys[offset + ns];
      ns--;

      for (var m = 1; m < n; m++) {
        for (i = 0; i < n - m; i++) {
          var ho = xs[offset + i] - x;
          var hp = xs[offset + i + m] - x;
          var w = c[i + 1] - d[i];
          var den = ho - hp;

          if (den === 0.0) {
            throw new Error("Unable to interpolate polynomial. Two numbers in n were identical (to within roundoff)");
          }

          den = w / den;
          d[i] = hp * den;
          c[i] = ho * den;
        }

        dy = 2 * (ns + 1) < n - m ? c[ns + 1] : d[ns--];
        y += dy;
      }

      return {
        y: y,
        dy: dy
      };
    }
    /**
     *  Newton's (Newton-Raphson) method for finding Real roots on univariate function. <br/>
     *  When using bounds, algorithm falls back to secant if newton goes out of range.
     *  Bisection is fallback for secant when determined secant is not efficient enough.
     *  @see {@link http://en.wikipedia.org/wiki/Newton%27s_method}
     *  @see {@link http://en.wikipedia.org/wiki/Secant_method}
     *  @see {@link http://en.wikipedia.org/wiki/Bisection_method}
     *
     *  @param {number} x0 - Inital root guess
     *  @param {Function} f - Function which root we are trying to find
     *  @param {Function} df - Derivative of function f
     *  @param {number} max_iterations - Maximum number of algorithm iterations
     *  @param {number} [min] - Left bound value
     *  @param {number} [max] - Right bound value
     *  @returns {number} root
     */

  }, {
    key: "newton_secant_bisection",
    value: function newton_secant_bisection(x0, f, df, max_iterations, min, max) {
      var x,
          prev_dfx = 0,
          dfx,
          prev_x_ef_correction = 0,
          x_correction,
          x_new;
      var y, y_atmin, y_atmax;
      x = x0;
      var ACCURACY = 14;
      var min_correction_factor = Math.pow(10, -ACCURACY);
      var isBounded = typeof min === "number" && typeof max === "number";

      if (isBounded) {
        if (min > max) {
          throw new Error("newton root finding: min must be greater than max");
        }

        y_atmin = f(min);
        y_atmax = f(max);

        if (sign(y_atmin) === sign(y_atmax)) {
          throw new Error("newton root finding: y values of bounds must be of opposite sign");
        }
      }

      var isEnoughCorrection = function isEnoughCorrection() {
        // stop if correction is too small or if correction is in simple loop
        return Math.abs(x_correction) <= min_correction_factor * Math.abs(x) || prev_x_ef_correction === x - x_correction - x;
      };

      for (var i = 0; i < max_iterations; i++) {
        dfx = df(x);

        if (dfx === 0) {
          if (prev_dfx === 0) {
            // error
            throw new Error("newton root finding: df(x) is zero");
          } else {
            // use previous derivation value
            dfx = prev_dfx;
          } // or move x a little?
          // dfx = df(x != 0 ? x + x * 1e-15 : 1e-15);

        }

        prev_dfx = dfx;
        y = f(x);
        x_correction = y / dfx;
        x_new = x - x_correction;

        if (isEnoughCorrection()) {
          break;
        }

        if (isBounded) {
          if (sign(y) === sign(y_atmax)) {
            max = x;
            y_atmax = y;
          } else if (sign(y) === sign(y_atmin)) {
            min = x;
            y_atmin = y;
          } else {
            x = x_new;
            break;
          }

          if (x_new < min || x_new > max) {
            if (sign(y_atmin) === sign(y_atmax)) {
              break;
            }

            var RATIO_LIMIT = 50;
            var AIMED_BISECT_OFFSET = 0.25; // [0, 0.5)

            var dy = y_atmax - y_atmin;
            var dx = max - min;

            if (dy === 0) {
              x_correction = x - (min + dx * 0.5);
            } else if (Math.abs(dy / Math.min(y_atmin, y_atmax)) > RATIO_LIMIT) {
              x_correction = x - (min + dx * (0.5 + (Math.abs(y_atmin) < Math.abs(y_atmax) ? -AIMED_BISECT_OFFSET : AIMED_BISECT_OFFSET)));
            } else {
              x_correction = x - (min - y_atmin / dy * dx);
            }

            x_new = x - x_correction;

            if (isEnoughCorrection()) {
              break;
            }
          }
        }

        prev_x_ef_correction = x - x_new;
        x = x_new;
      }

      return x;
    }
  }]);

  return Polynomial;
}();

Polynomial.TOLERANCE = 1e-6;
Polynomial.ACCURACY = 15;

/**
 *  @module kld-polynomial
 */

/**
 * @memberof module:kld-intersections.Intersection~
 * @param {*} o
 * @returns {boolean}
 */

function isNullish(o) {
  return o === null || o === undefined;
}
/**
 *  closePolygon
 *  @memberof module:kld-intersections.Intersection~
 *  @param {Array<module:kld-intersections.Point2D>} points
 *  @returns {Array<module:kld-intersections.Point2D>}
 */


function closePolygon(points) {
  var copy = points.slice();
  copy.push(points[0]);
  return copy;
}
/**
 * Intersection
 * @memberof module:kld-intersections
 */


var Intersection =
/*#__PURE__*/
function () {
  /**
   *  @param {string} status
   *  @returns {module:kld-intersections.Intersection}
   */
  function Intersection(status) {
    _classCallCheck(this, Intersection);

    this.init(status);
  }
  /**
   *  init
   *
   *  @param {string} status
   *  @returns {module:kld-intersections.Intersection}
   */


  _createClass(Intersection, [{
    key: "init",
    value: function init(status) {
      this.status = status;
      this.points = [];
    }
    /**
     *  appendPoint
     *
     *  @param {module:kld-intersections.Point2D} point
     */

  }, {
    key: "appendPoint",
    value: function appendPoint(point) {
      this.points.push(point);
    }
    /**
     *  appendPoints
     *
     *  @param {Array<module:kld-intersections.Point2D>} points
     */

  }, {
    key: "appendPoints",
    value: function appendPoints(points) {
      this.points = this.points.concat(points);
    }
  }]);

  return Intersection;
}(); // static methods

/**
 *  intersect
 *
 *  @param {module:kld-intersections.IntersectionArgs} shape1
 *  @param {module:kld-intersections.IntersectionArgs} shape2
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersect = function (shape1, shape2) {
  var result;

  if (!isNullish(shape1) && !isNullish(shape2)) {
    if (shape1.name === "Path") {
      result = Intersection.intersectPathShape(shape1, shape2);
    } else if (shape2.name === "Path") {
      result = Intersection.intersectPathShape(shape2, shape1);
    } else {
      var method;
      var args;

      if (shape1.name < shape2.name) {
        method = "intersect" + shape1.name + shape2.name;
        args = shape1.args.concat(shape2.args);
      } else {
        method = "intersect" + shape2.name + shape1.name;
        args = shape2.args.concat(shape1.args);
      }

      if (!(method in Intersection)) {
        throw new Error("Intersection not available: " + method);
      }

      result = Intersection[method].apply(null, args);
    }
  } else {
    result = new Intersection("No Intersection");
  }

  return result;
};
/**
 *  intersectPathShape
 *
 *  @param {module:kld-intersections.IntersectionArgs} path
 *  @param {module:kld-intersections.IntersectionArgs} shape
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectPathShape = function (path, shape) {
  var result = new Intersection("No Intersection");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = path.args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var segment = _step.value;
      var inter = Intersection.intersect(segment, shape);
      result.appendPoints(inter.points);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (result.points.length > 0) {
    result.status = "Intersection";
  }

  return result;
};
/**
 *  intersectBezier2Bezier2
 *
 *  @param {module:kld-intersections.Point2D} a1
 *  @param {module:kld-intersections.Point2D} a2
 *  @param {module:kld-intersections.Point2D} a3
 *  @param {module:kld-intersections.Point2D} b1
 *  @param {module:kld-intersections.Point2D} b2
 *  @param {module:kld-intersections.Point2D} b3
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectBezier2Bezier2 = function (a1, a2, a3, b1, b2, b3) {
  var a, b;
  var result = new Intersection("No Intersection");
  a = a2.multiply(-2);
  var c12 = a1.add(a.add(a3));
  a = a1.multiply(-2);
  b = a2.multiply(2);
  var c11 = a.add(b);
  var c10 = new Point2D(a1.x, a1.y);
  a = b2.multiply(-2);
  var c22 = b1.add(a.add(b3));
  a = b1.multiply(-2);
  b = b2.multiply(2);
  var c21 = a.add(b);
  var c20 = new Point2D(b1.x, b1.y); // bezout

  a = c12.x * c11.y - c11.x * c12.y;
  b = c22.x * c11.y - c11.x * c22.y;
  var c = c21.x * c11.y - c11.x * c21.y;
  var d = c11.x * (c10.y - c20.y) + c11.y * (-c10.x + c20.x);
  var e = c22.x * c12.y - c12.x * c22.y;
  var f = c21.x * c12.y - c12.x * c21.y;
  var g = c12.x * (c10.y - c20.y) + c12.y * (-c10.x + c20.x); // determinant

  var poly = new Polynomial(-e * e, -2 * e * f, a * b - f * f - 2 * e * g, a * c - 2 * f * g, a * d - g * g);
  var roots = poly.getRoots();
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = roots[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var s = _step2.value;

      if (0 <= s && s <= 1) {
        var xp = new Polynomial(c12.x, c11.x, c10.x - c20.x - s * c21.x - s * s * c22.x);
        xp.simplify();
        var xRoots = xp.getRoots();
        var yp = new Polynomial(c12.y, c11.y, c10.y - c20.y - s * c21.y - s * s * c22.y);
        yp.simplify();
        var yRoots = yp.getRoots();

        if (xRoots.length > 0 && yRoots.length > 0) {
          var TOLERANCE = 1e-4;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            checkRoots: for (var _iterator3 = xRoots[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var xRoot = _step3.value;

              if (0 <= xRoot && xRoot <= 1) {
                for (var k = 0; k < yRoots.length; k++) {
                  if (Math.abs(xRoot - yRoots[k]) < TOLERANCE) {
                    result.points.push(c22.multiply(s * s).add(c21.multiply(s).add(c20)));
                    break checkRoots;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                _iterator3["return"]();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  if (result.points.length > 0) {
    result.status = "Intersection";
  }

  return result;
};
/**
 *  intersectBezier2Bezier3
 *
 *  @param {module:kld-intersections.Point2D} a1
 *  @param {module:kld-intersections.Point2D} a2
 *  @param {module:kld-intersections.Point2D} a3
 *  @param {module:kld-intersections.Point2D} b1
 *  @param {module:kld-intersections.Point2D} b2
 *  @param {module:kld-intersections.Point2D} b3
 *  @param {module:kld-intersections.Point2D} b4
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectBezier2Bezier3 = function (a1, a2, a3, b1, b2, b3, b4) {
  var a, b, c, d;
  var result = new Intersection("No Intersection");
  a = a2.multiply(-2);
  var c12 = a1.add(a.add(a3));
  a = a1.multiply(-2);
  b = a2.multiply(2);
  var c11 = a.add(b);
  var c10 = new Point2D(a1.x, a1.y);
  a = b1.multiply(-1);
  b = b2.multiply(3);
  c = b3.multiply(-3);
  d = a.add(b.add(c.add(b4)));
  var c23 = new Vector2D(d.x, d.y);
  a = b1.multiply(3);
  b = b2.multiply(-6);
  c = b3.multiply(3);
  d = a.add(b.add(c));
  var c22 = new Vector2D(d.x, d.y);
  a = b1.multiply(-3);
  b = b2.multiply(3);
  c = a.add(b);
  var c21 = new Vector2D(c.x, c.y);
  var c20 = new Vector2D(b1.x, b1.y);
  var c10x2 = c10.x * c10.x;
  var c10y2 = c10.y * c10.y;
  var c11x2 = c11.x * c11.x;
  var c11y2 = c11.y * c11.y;
  var c12x2 = c12.x * c12.x;
  var c12y2 = c12.y * c12.y;
  var c20x2 = c20.x * c20.x;
  var c20y2 = c20.y * c20.y;
  var c21x2 = c21.x * c21.x;
  var c21y2 = c21.y * c21.y;
  var c22x2 = c22.x * c22.x;
  var c22y2 = c22.y * c22.y;
  var c23x2 = c23.x * c23.x;
  var c23y2 = c23.y * c23.y;
  var poly = new Polynomial(-2 * c12.x * c12.y * c23.x * c23.y + c12x2 * c23y2 + c12y2 * c23x2, -2 * c12.x * c12.y * c22.x * c23.y - 2 * c12.x * c12.y * c22.y * c23.x + 2 * c12y2 * c22.x * c23.x + 2 * c12x2 * c22.y * c23.y, -2 * c12.x * c21.x * c12.y * c23.y - 2 * c12.x * c12.y * c21.y * c23.x - 2 * c12.x * c12.y * c22.x * c22.y + 2 * c21.x * c12y2 * c23.x + c12y2 * c22x2 + c12x2 * (2 * c21.y * c23.y + c22y2), 2 * c10.x * c12.x * c12.y * c23.y + 2 * c10.y * c12.x * c12.y * c23.x + c11.x * c11.y * c12.x * c23.y + c11.x * c11.y * c12.y * c23.x - 2 * c20.x * c12.x * c12.y * c23.y - 2 * c12.x * c20.y * c12.y * c23.x - 2 * c12.x * c21.x * c12.y * c22.y - 2 * c12.x * c12.y * c21.y * c22.x - 2 * c10.x * c12y2 * c23.x - 2 * c10.y * c12x2 * c23.y + 2 * c20.x * c12y2 * c23.x + 2 * c21.x * c12y2 * c22.x - c11y2 * c12.x * c23.x - c11x2 * c12.y * c23.y + c12x2 * (2 * c20.y * c23.y + 2 * c21.y * c22.y), 2 * c10.x * c12.x * c12.y * c22.y + 2 * c10.y * c12.x * c12.y * c22.x + c11.x * c11.y * c12.x * c22.y + c11.x * c11.y * c12.y * c22.x - 2 * c20.x * c12.x * c12.y * c22.y - 2 * c12.x * c20.y * c12.y * c22.x - 2 * c12.x * c21.x * c12.y * c21.y - 2 * c10.x * c12y2 * c22.x - 2 * c10.y * c12x2 * c22.y + 2 * c20.x * c12y2 * c22.x - c11y2 * c12.x * c22.x - c11x2 * c12.y * c22.y + c21x2 * c12y2 + c12x2 * (2 * c20.y * c22.y + c21y2), 2 * c10.x * c12.x * c12.y * c21.y + 2 * c10.y * c12.x * c21.x * c12.y + c11.x * c11.y * c12.x * c21.y + c11.x * c11.y * c21.x * c12.y - 2 * c20.x * c12.x * c12.y * c21.y - 2 * c12.x * c20.y * c21.x * c12.y - 2 * c10.x * c21.x * c12y2 - 2 * c10.y * c12x2 * c21.y + 2 * c20.x * c21.x * c12y2 - c11y2 * c12.x * c21.x - c11x2 * c12.y * c21.y + 2 * c12x2 * c20.y * c21.y, -2 * c10.x * c10.y * c12.x * c12.y - c10.x * c11.x * c11.y * c12.y - c10.y * c11.x * c11.y * c12.x + 2 * c10.x * c12.x * c20.y * c12.y + 2 * c10.y * c20.x * c12.x * c12.y + c11.x * c20.x * c11.y * c12.y + c11.x * c11.y * c12.x * c20.y - 2 * c20.x * c12.x * c20.y * c12.y - 2 * c10.x * c20.x * c12y2 + c10.x * c11y2 * c12.x + c10.y * c11x2 * c12.y - 2 * c10.y * c12x2 * c20.y - c20.x * c11y2 * c12.x - c11x2 * c20.y * c12.y + c10x2 * c12y2 + c10y2 * c12x2 + c20x2 * c12y2 + c12x2 * c20y2);
  var roots = poly.getRootsInInterval(0, 1);
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = roots[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var s = _step4.value;
      var xRoots = new Polynomial(c12.x, c11.x, c10.x - c20.x - s * c21.x - s * s * c22.x - s * s * s * c23.x).getRoots();
      var yRoots = new Polynomial(c12.y, c11.y, c10.y - c20.y - s * c21.y - s * s * c22.y - s * s * s * c23.y).getRoots();

      if (xRoots.length > 0 && yRoots.length > 0) {
        var TOLERANCE = 1e-4;
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          checkRoots: for (var _iterator5 = xRoots[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var xRoot = _step5.value;

            if (0 <= xRoot && xRoot <= 1) {
              for (var k = 0; k < yRoots.length; k++) {
                if (Math.abs(xRoot - yRoots[k]) < TOLERANCE) {
                  result.points.push(c23.multiply(s * s * s).add(c22.multiply(s * s).add(c21.multiply(s).add(c20))));
                  break checkRoots;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
              _iterator5["return"]();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  if (result.points.length > 0) {
    result.status = "Intersection";
  }

  return result;
};
/**
 *  intersectBezier2Circle
 *
 *  @param {module:kld-intersections.Point2D} p1
 *  @param {module:kld-intersections.Point2D} p2
 *  @param {module:kld-intersections.Point2D} p3
 *  @param {module:kld-intersections.Point2D} c
 *  @param {number} r
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectBezier2Circle = function (p1, p2, p3, c, r) {
  return Intersection.intersectBezier2Ellipse(p1, p2, p3, c, r, r);
};
/**
 *  intersectBezier2Ellipse
 *
 *  @param {module:kld-intersections.Point2D} p1
 *  @param {module:kld-intersections.Point2D} p2
 *  @param {module:kld-intersections.Point2D} p3
 *  @param {module:kld-intersections.Point2D} ec
 *  @param {number} rx
 *  @param {number} ry
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectBezier2Ellipse = function (p1, p2, p3, ec, rx, ry) {
  var a; // temporary variables
  // c2, c1, c0; // coefficients of quadratic

  var result = new Intersection("No Intersection");
  a = p2.multiply(-2);
  var c2 = p1.add(a.add(p3));
  a = p1.multiply(-2);
  var b = p2.multiply(2);
  var c1 = a.add(b);
  var c0 = new Point2D(p1.x, p1.y);
  var rxrx = rx * rx;
  var ryry = ry * ry;
  var roots = new Polynomial(ryry * c2.x * c2.x + rxrx * c2.y * c2.y, 2 * (ryry * c2.x * c1.x + rxrx * c2.y * c1.y), ryry * (2 * c2.x * c0.x + c1.x * c1.x) + rxrx * (2 * c2.y * c0.y + c1.y * c1.y) - 2 * (ryry * ec.x * c2.x + rxrx * ec.y * c2.y), 2 * (ryry * c1.x * (c0.x - ec.x) + rxrx * c1.y * (c0.y - ec.y)), ryry * (c0.x * c0.x + ec.x * ec.x) + rxrx * (c0.y * c0.y + ec.y * ec.y) - 2 * (ryry * ec.x * c0.x + rxrx * ec.y * c0.y) - rxrx * ryry).getRoots();
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = roots[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var t = _step6.value;

      if (0 <= t && t <= 1) {
        result.points.push(c2.multiply(t * t).add(c1.multiply(t).add(c0)));
      }
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
        _iterator6["return"]();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }

  if (result.points.length > 0) {
    result.status = "Intersection";
  }

  return result;
};
/**
 *  intersectBezier2Line
 *
 *  @param {module:kld-intersections.Point2D} p1
 *  @param {module:kld-intersections.Point2D} p2
 *  @param {module:kld-intersections.Point2D} p3
 *  @param {module:kld-intersections.Point2D} a1
 *  @param {module:kld-intersections.Point2D} a2
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectBezier2Line = function (p1, p2, p3, a1, a2) {
  var a; // temporary variables
  // let c2, c1, c0; // coefficients of quadratic
  // cl; // c coefficient for normal form of line
  // n; // normal for normal form of line

  var min = a1.min(a2); // used to determine if point is on line segment

  var max = a1.max(a2); // used to determine if point is on line segment

  var result = new Intersection("No Intersection");
  a = p2.multiply(-2);
  var c2 = p1.add(a.add(p3));
  a = p1.multiply(-2);
  var b = p2.multiply(2);
  var c1 = a.add(b);
  var c0 = new Point2D(p1.x, p1.y); // Convert line to normal form: ax + by + c = 0
  // Find normal to line: negative inverse of original line's slope

  var n = new Vector2D(a1.y - a2.y, a2.x - a1.x); // Determine new c coefficient

  var cl = a1.x * a2.y - a2.x * a1.y; // Transform cubic coefficients to line's coordinate system and find roots
  // of cubic

  var roots = new Polynomial(n.dot(c2), n.dot(c1), n.dot(c0) + cl).getRoots(); // Any roots in closed interval [0,1] are intersections on Bezier, but
  // might not be on the line segment.
  // Find intersections and calculate point coordinates

  var _iteratorNormalCompletion7 = true;
  var _didIteratorError7 = false;
  var _iteratorError7 = undefined;

  try {
    for (var _iterator7 = roots[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
      var t = _step7.value;

      if (0 <= t && t <= 1) {
        // We're within the Bezier curve
        // Find point on Bezier
        var p4 = p1.lerp(p2, t);
        var p5 = p2.lerp(p3, t);
        var p6 = p4.lerp(p5, t); // See if point is on line segment
        // Had to make special cases for vertical and horizontal lines due
        // to slight errors in calculation of p6

        if (a1.x == a2.x) {
          if (min.y <= p6.y && p6.y <= max.y) {
            result.status = "Intersection";
            result.appendPoint(p6);
          }
        } else if (a1.y == a2.y) {
          if (min.x <= p6.x && p6.x <= max.x) {
            result.status = "Intersection";
            result.appendPoint(p6);
          }
        } else if (min.x <= p6.x && p6.x <= max.x && min.y <= p6.y && p6.y <= max.y) {
          result.status = "Intersection";
          result.appendPoint(p6);
        }
      }
    }
  } catch (err) {
    _didIteratorError7 = true;
    _iteratorError7 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
        _iterator7["return"]();
      }
    } finally {
      if (_didIteratorError7) {
        throw _iteratorError7;
      }
    }
  }

  return result;
};
/**
 *  intersectBezier2Polygon
 *
 *  @param {module:kld-intersections.Point2D} p1
 *  @param {module:kld-intersections.Point2D} p2
 *  @param {module:kld-intersections.Point2D} p3
 *  @param {Array<module:kld-intersections.Point2D>} points
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectBezier2Polygon = function (p1, p2, p3, points) {
  return Intersection.intersectBezier2Polyline(p1, p2, p3, closePolygon(points));
};
/**
 *  intersectBezier2Polyline
 *
 *  @param {module:kld-intersections.Point2D} p1
 *  @param {module:kld-intersections.Point2D} p2
 *  @param {module:kld-intersections.Point2D} p3
 *  @param {Array<module:kld-intersections.Point2D>} points
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectBezier2Polyline = function (p1, p2, p3, points) {
  var result = new Intersection("No Intersection");
  var len = points.length;

  for (var i = 0; i < len - 1; i++) {
    var a1 = points[i];
    var a2 = points[i + 1];
    var inter = Intersection.intersectBezier2Line(p1, p2, p3, a1, a2);
    result.appendPoints(inter.points);
  }

  if (result.points.length > 0) {
    result.status = "Intersection";
  }

  return result;
};
/**
 *  intersectBezier2Rectangle
 *
 *  @param {module:kld-intersections.Point2D} p1
 *  @param {module:kld-intersections.Point2D} p2
 *  @param {module:kld-intersections.Point2D} p3
 *  @param {module:kld-intersections.Point2D} r1
 *  @param {module:kld-intersections.Point2D} r2
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectBezier2Rectangle = function (p1, p2, p3, r1, r2) {
  var min = r1.min(r2);
  var max = r1.max(r2);
  var topRight = new Point2D(max.x, min.y);
  var bottomLeft = new Point2D(min.x, max.y);
  var inter1 = Intersection.intersectBezier2Line(p1, p2, p3, min, topRight);
  var inter2 = Intersection.intersectBezier2Line(p1, p2, p3, topRight, max);
  var inter3 = Intersection.intersectBezier2Line(p1, p2, p3, max, bottomLeft);
  var inter4 = Intersection.intersectBezier2Line(p1, p2, p3, bottomLeft, min);
  var result = new Intersection("No Intersection");
  result.appendPoints(inter1.points);
  result.appendPoints(inter2.points);
  result.appendPoints(inter3.points);
  result.appendPoints(inter4.points);

  if (result.points.length > 0) {
    result.status = "Intersection";
  }

  return result;
};
/**
 *  intersectBezier3Bezier3
 *
 *  @param {module:kld-intersections.Point2D} a1
 *  @param {module:kld-intersections.Point2D} a2
 *  @param {module:kld-intersections.Point2D} a3
 *  @param {module:kld-intersections.Point2D} a4
 *  @param {module:kld-intersections.Point2D} b1
 *  @param {module:kld-intersections.Point2D} b2
 *  @param {module:kld-intersections.Point2D} b3
 *  @param {module:kld-intersections.Point2D} b4
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectBezier3Bezier3 = function (a1, a2, a3, a4, b1, b2, b3, b4) {
  var a, b, c, d; // temporary variables
  // c13, c12, c11, c10; // coefficients of cubic
  // c23, c22, c21, c20; // coefficients of cubic

  var result = new Intersection("No Intersection"); // Calculate the coefficients of cubic polynomial

  a = a1.multiply(-1);
  b = a2.multiply(3);
  c = a3.multiply(-3);
  d = a.add(b.add(c.add(a4)));
  var c13 = new Vector2D(d.x, d.y);
  a = a1.multiply(3);
  b = a2.multiply(-6);
  c = a3.multiply(3);
  d = a.add(b.add(c));
  var c12 = new Vector2D(d.x, d.y);
  a = a1.multiply(-3);
  b = a2.multiply(3);
  c = a.add(b);
  var c11 = new Vector2D(c.x, c.y);
  var c10 = new Vector2D(a1.x, a1.y);
  a = b1.multiply(-1);
  b = b2.multiply(3);
  c = b3.multiply(-3);
  d = a.add(b.add(c.add(b4)));
  var c23 = new Vector2D(d.x, d.y);
  a = b1.multiply(3);
  b = b2.multiply(-6);
  c = b3.multiply(3);
  d = a.add(b.add(c));
  var c22 = new Vector2D(d.x, d.y);
  a = b1.multiply(-3);
  b = b2.multiply(3);
  c = a.add(b);
  var c21 = new Vector2D(c.x, c.y);
  var c20 = new Vector2D(b1.x, b1.y); // bezout

  a = c13.x * c12.y - c12.x * c13.y;
  b = c13.x * c11.y - c11.x * c13.y;
  var c0 = c13.x * c10.y - c10.x * c13.y + c20.x * c13.y - c13.x * c20.y;
  var c1 = c21.x * c13.y - c13.x * c21.y;
  var c2 = c22.x * c13.y - c13.x * c22.y;
  var c3 = c23.x * c13.y - c13.x * c23.y;
  d = c13.x * c11.y - c11.x * c13.y;
  var e0 = c13.x * c10.y + c12.x * c11.y - c11.x * c12.y - c10.x * c13.y + c20.x * c13.y - c13.x * c20.y;
  var e1 = c21.x * c13.y - c13.x * c21.y;
  var e2 = c22.x * c13.y - c13.x * c22.y;
  var e3 = c23.x * c13.y - c13.x * c23.y;
  var f0 = c12.x * c10.y - c10.x * c12.y + c20.x * c12.y - c12.x * c20.y;
  var f1 = c21.x * c12.y - c12.x * c21.y;
  var f2 = c22.x * c12.y - c12.x * c22.y;
  var f3 = c23.x * c12.y - c12.x * c23.y;
  var g0 = c13.x * c10.y - c10.x * c13.y + c20.x * c13.y - c13.x * c20.y;
  var g1 = c21.x * c13.y - c13.x * c21.y;
  var g2 = c22.x * c13.y - c13.x * c22.y;
  var g3 = c23.x * c13.y - c13.x * c23.y;
  var h0 = c12.x * c10.y - c10.x * c12.y + c20.x * c12.y - c12.x * c20.y;
  var h1 = c21.x * c12.y - c12.x * c21.y;
  var h2 = c22.x * c12.y - c12.x * c22.y;
  var h3 = c23.x * c12.y - c12.x * c23.y;
  var i0 = c11.x * c10.y - c10.x * c11.y + c20.x * c11.y - c11.x * c20.y;
  var i1 = c21.x * c11.y - c11.x * c21.y;
  var i2 = c22.x * c11.y - c11.x * c22.y;
  var i3 = c23.x * c11.y - c11.x * c23.y; // determinant

  var poly = new Polynomial(-c3 * e3 * g3, -c3 * e3 * g2 - c3 * e2 * g3 - c2 * e3 * g3, -c3 * e3 * g1 - c3 * e2 * g2 - c2 * e3 * g2 - c3 * e1 * g3 - c2 * e2 * g3 - c1 * e3 * g3, -c3 * e3 * g0 - c3 * e2 * g1 - c2 * e3 * g1 - c3 * e1 * g2 - c2 * e2 * g2 - c1 * e3 * g2 - c3 * e0 * g3 - c2 * e1 * g3 - c1 * e2 * g3 - c0 * e3 * g3 + b * f3 * g3 + c3 * d * h3 - a * f3 * h3 + a * e3 * i3, -c3 * e2 * g0 - c2 * e3 * g0 - c3 * e1 * g1 - c2 * e2 * g1 - c1 * e3 * g1 - c3 * e0 * g2 - c2 * e1 * g2 - c1 * e2 * g2 - c0 * e3 * g2 + b * f3 * g2 - c2 * e0 * g3 - c1 * e1 * g3 - c0 * e2 * g3 + b * f2 * g3 + c3 * d * h2 - a * f3 * h2 + c2 * d * h3 - a * f2 * h3 + a * e3 * i2 + a * e2 * i3, -c3 * e1 * g0 - c2 * e2 * g0 - c1 * e3 * g0 - c3 * e0 * g1 - c2 * e1 * g1 - c1 * e2 * g1 - c0 * e3 * g1 + b * f3 * g1 - c2 * e0 * g2 - c1 * e1 * g2 - c0 * e2 * g2 + b * f2 * g2 - c1 * e0 * g3 - c0 * e1 * g3 + b * f1 * g3 + c3 * d * h1 - a * f3 * h1 + c2 * d * h2 - a * f2 * h2 + c1 * d * h3 - a * f1 * h3 + a * e3 * i1 + a * e2 * i2 + a * e1 * i3, -c3 * e0 * g0 - c2 * e1 * g0 - c1 * e2 * g0 - c0 * e3 * g0 + b * f3 * g0 - c2 * e0 * g1 - c1 * e1 * g1 - c0 * e2 * g1 + b * f2 * g1 - c1 * e0 * g2 - c0 * e1 * g2 + b * f1 * g2 - c0 * e0 * g3 + b * f0 * g3 + c3 * d * h0 - a * f3 * h0 + c2 * d * h1 - a * f2 * h1 + c1 * d * h2 - a * f1 * h2 + c0 * d * h3 - a * f0 * h3 + a * e3 * i0 + a * e2 * i1 + a * e1 * i2 - b * d * i3 + a * e0 * i3, -c2 * e0 * g0 - c1 * e1 * g0 - c0 * e2 * g0 + b * f2 * g0 - c1 * e0 * g1 - c0 * e1 * g1 + b * f1 * g1 - c0 * e0 * g2 + b * f0 * g2 + c2 * d * h0 - a * f2 * h0 + c1 * d * h1 - a * f1 * h1 + c0 * d * h2 - a * f0 * h2 + a * e2 * i0 + a * e1 * i1 - b * d * i2 + a * e0 * i2, -c1 * e0 * g0 - c0 * e1 * g0 + b * f1 * g0 - c0 * e0 * g1 + b * f0 * g1 + c1 * d * h0 - a * f1 * h0 + c0 * d * h1 - a * f0 * h1 + a * e1 * i0 - b * d * i1 + a * e0 * i1, -c0 * e0 * g0 + b * f0 * g0 + c0 * d * h0 - a * f0 * h0 - b * d * i0 + a * e0 * i0);
  poly.simplify();
  var roots = poly.getRootsInInterval(0, 1);
  var _iteratorNormalCompletion8 = true;
  var _didIteratorError8 = false;
  var _iteratorError8 = undefined;

  try {
    for (var _iterator8 = roots[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
      var s = _step8.value;
      var xp = new Polynomial(c13.x, c12.x, c11.x, c10.x - c20.x - s * c21.x - s * s * c22.x - s * s * s * c23.x);
      xp.simplify();
      var xRoots = xp.getRoots();
      var yp = new Polynomial(c13.y, c12.y, c11.y, c10.y - c20.y - s * c21.y - s * s * c22.y - s * s * s * c23.y);
      yp.simplify();
      var yRoots = yp.getRoots();

      if (xRoots.length > 0 && yRoots.length > 0) {
        var TOLERANCE = 1e-4;
        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          checkRoots: for (var _iterator9 = xRoots[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var xRoot = _step9.value;

            if (0 <= xRoot && xRoot <= 1) {
              for (var k = 0; k < yRoots.length; k++) {
                if (Math.abs(xRoot - yRoots[k]) < TOLERANCE) {
                  result.points.push(c23.multiply(s * s * s).add(c22.multiply(s * s).add(c21.multiply(s).add(c20))));
                  break checkRoots;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError9 = true;
          _iteratorError9 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
              _iterator9["return"]();
            }
          } finally {
            if (_didIteratorError9) {
              throw _iteratorError9;
            }
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError8 = true;
    _iteratorError8 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
        _iterator8["return"]();
      }
    } finally {
      if (_didIteratorError8) {
        throw _iteratorError8;
      }
    }
  }

  if (result.points.length > 0) {
    result.status = "Intersection";
  }

  return result;
};
/**
 *  intersectBezier3Circle
 *
 *  @param {module:kld-intersections.Point2D} p1
 *  @param {module:kld-intersections.Point2D} p2
 *  @param {module:kld-intersections.Point2D} p3
 *  @param {module:kld-intersections.Point2D} p4
 *  @param {module:kld-intersections.Point2D} c
 *  @param {number} r
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectBezier3Circle = function (p1, p2, p3, p4, c, r) {
  return Intersection.intersectBezier3Ellipse(p1, p2, p3, p4, c, r, r);
};
/**
 *  intersectBezier3Ellipse
 *
 *  @param {module:kld-intersections.Point2D} p1
 *  @param {module:kld-intersections.Point2D} p2
 *  @param {module:kld-intersections.Point2D} p3
 *  @param {module:kld-intersections.Point2D} p4
 *  @param {module:kld-intersections.Point2D} ec
 *  @param {number} rx
 *  @param {number} ry
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectBezier3Ellipse = function (p1, p2, p3, p4, ec, rx, ry) {
  var a, b, c, d; // temporary variables
  // c3, c2, c1, c0; // coefficients of cubic

  var result = new Intersection("No Intersection"); // Calculate the coefficients of cubic polynomial

  a = p1.multiply(-1);
  b = p2.multiply(3);
  c = p3.multiply(-3);
  d = a.add(b.add(c.add(p4)));
  var c3 = new Vector2D(d.x, d.y);
  a = p1.multiply(3);
  b = p2.multiply(-6);
  c = p3.multiply(3);
  d = a.add(b.add(c));
  var c2 = new Vector2D(d.x, d.y);
  a = p1.multiply(-3);
  b = p2.multiply(3);
  c = a.add(b);
  var c1 = new Vector2D(c.x, c.y);
  var c0 = new Vector2D(p1.x, p1.y);
  var rxrx = rx * rx;
  var ryry = ry * ry;
  var poly = new Polynomial(c3.x * c3.x * ryry + c3.y * c3.y * rxrx, 2 * (c3.x * c2.x * ryry + c3.y * c2.y * rxrx), 2 * (c3.x * c1.x * ryry + c3.y * c1.y * rxrx) + c2.x * c2.x * ryry + c2.y * c2.y * rxrx, 2 * c3.x * ryry * (c0.x - ec.x) + 2 * c3.y * rxrx * (c0.y - ec.y) + 2 * (c2.x * c1.x * ryry + c2.y * c1.y * rxrx), 2 * c2.x * ryry * (c0.x - ec.x) + 2 * c2.y * rxrx * (c0.y - ec.y) + c1.x * c1.x * ryry + c1.y * c1.y * rxrx, 2 * c1.x * ryry * (c0.x - ec.x) + 2 * c1.y * rxrx * (c0.y - ec.y), c0.x * c0.x * ryry - 2 * c0.y * ec.y * rxrx - 2 * c0.x * ec.x * ryry + c0.y * c0.y * rxrx + ec.x * ec.x * ryry + ec.y * ec.y * rxrx - rxrx * ryry);
  var roots = poly.getRootsInInterval(0, 1);
  var _iteratorNormalCompletion10 = true;
  var _didIteratorError10 = false;
  var _iteratorError10 = undefined;

  try {
    for (var _iterator10 = roots[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
      var t = _step10.value;
      result.points.push(c3.multiply(t * t * t).add(c2.multiply(t * t).add(c1.multiply(t).add(c0))));
    }
  } catch (err) {
    _didIteratorError10 = true;
    _iteratorError10 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
        _iterator10["return"]();
      }
    } finally {
      if (_didIteratorError10) {
        throw _iteratorError10;
      }
    }
  }

  if (result.points.length > 0) {
    result.status = "Intersection";
  }

  return result;
};
/**
 *  intersectBezier3Line
 *
 *  Many thanks to Dan Sunday at SoftSurfer.com.  He gave me a very thorough
 *  sketch of the algorithm used here.  Without his help, I'm not sure when I
 *  would have figured out this intersection problem.
 *
 *  @param {module:kld-intersections.Point2D} p1
 *  @param {module:kld-intersections.Point2D} p2
 *  @param {module:kld-intersections.Point2D} p3
 *  @param {module:kld-intersections.Point2D} p4
 *  @param {module:kld-intersections.Point2D} a1
 *  @param {module:kld-intersections.Point2D} a2
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectBezier3Line = function (p1, p2, p3, p4, a1, a2) {
  var a, b, c, d; // temporary variables
  // c3, c2, c1, c0; // coefficients of cubic
  // cl; // c coefficient for normal form of line
  // n; // normal for normal form of line

  var min = a1.min(a2); // used to determine if point is on line segment

  var max = a1.max(a2); // used to determine if point is on line segment

  var result = new Intersection("No Intersection"); // Start with Bezier using Bernstein polynomials for weighting functions:
  //     (1-t^3)P1 + 3t(1-t)^2P2 + 3t^2(1-t)P3 + t^3P4
  //
  // Expand and collect terms to form linear combinations of original Bezier
  // controls.  This ends up with a vector cubic in t:
  //     (-P1+3P2-3P3+P4)t^3 + (3P1-6P2+3P3)t^2 + (-3P1+3P2)t + P1
  //             /\                  /\                /\       /\
  //             ||                  ||                ||       ||
  //             c3                  c2                c1       c0
  // Calculate the coefficients

  a = p1.multiply(-1);
  b = p2.multiply(3);
  c = p3.multiply(-3);
  d = a.add(b.add(c.add(p4)));
  var c3 = new Vector2D(d.x, d.y);
  a = p1.multiply(3);
  b = p2.multiply(-6);
  c = p3.multiply(3);
  d = a.add(b.add(c));
  var c2 = new Vector2D(d.x, d.y);
  a = p1.multiply(-3);
  b = p2.multiply(3);
  c = a.add(b);
  var c1 = new Vector2D(c.x, c.y);
  var c0 = new Vector2D(p1.x, p1.y); // Convert line to normal form: ax + by + c = 0
  // Find normal to line: negative inverse of original line's slope

  var n = new Vector2D(a1.y - a2.y, a2.x - a1.x); // Determine new c coefficient

  var cl = a1.x * a2.y - a2.x * a1.y; // ?Rotate each cubic coefficient using line for new coordinate system?
  // Find roots of rotated cubic

  var roots = new Polynomial(n.dot(c3), n.dot(c2), n.dot(c1), n.dot(c0) + cl).getRoots(); // Any roots in closed interval [0,1] are intersections on Bezier, but
  // might not be on the line segment.
  // Find intersections and calculate point coordinates

  var _iteratorNormalCompletion11 = true;
  var _didIteratorError11 = false;
  var _iteratorError11 = undefined;

  try {
    for (var _iterator11 = roots[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
      var t = _step11.value;

      if (0 <= t && t <= 1) {
        // We're within the Bezier curve
        // Find point on Bezier
        var p5 = p1.lerp(p2, t);
        var p6 = p2.lerp(p3, t);
        var p7 = p3.lerp(p4, t);
        var p8 = p5.lerp(p6, t);
        var p9 = p6.lerp(p7, t);
        var p10 = p8.lerp(p9, t); // See if point is on line segment
        // Had to make special cases for vertical and horizontal lines due
        // to slight errors in calculation of p10

        if (a1.x == a2.x) {
          if (min.y <= p10.y && p10.y <= max.y) {
            result.status = "Intersection";
            result.appendPoint(p10);
          }
        } else if (a1.y == a2.y) {
          if (min.x <= p10.x && p10.x <= max.x) {
            result.status = "Intersection";
            result.appendPoint(p10);
          }
        } else if (min.x <= p10.x && p10.x <= max.x && min.y <= p10.y && p10.y <= max.y) {
          result.status = "Intersection";
          result.appendPoint(p10);
        }
      }
    }
  } catch (err) {
    _didIteratorError11 = true;
    _iteratorError11 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
        _iterator11["return"]();
      }
    } finally {
      if (_didIteratorError11) {
        throw _iteratorError11;
      }
    }
  }

  return result;
};
/**
 *  intersectBezier3Polygon
 *
 *  @param {module:kld-intersections.Point2D} p1
 *  @param {module:kld-intersections.Point2D} p2
 *  @param {module:kld-intersections.Point2D} p3
 *  @param {module:kld-intersections.Point2D} p4
 *  @param {Array<module:kld-intersections.Point2D>} points
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectBezier3Polygon = function (p1, p2, p3, p4, points) {
  return this.intersectBezier3Polyline(p1, p2, p3, p4, closePolygon(points));
};
/**
 *  intersectBezier3Polyline
 *
 *  @param {module:kld-intersections.Point2D} p1
 *  @param {module:kld-intersections.Point2D} p2
 *  @param {module:kld-intersections.Point2D} p3
 *  @param {module:kld-intersections.Point2D} p4
 *  @param {Array<module:kld-intersections.Point2D>} points
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectBezier3Polyline = function (p1, p2, p3, p4, points) {
  var result = new Intersection("No Intersection");
  var len = points.length;

  for (var i = 0; i < len - 1; i++) {
    var a1 = points[i];
    var a2 = points[i + 1];
    var inter = Intersection.intersectBezier3Line(p1, p2, p3, p4, a1, a2);
    result.appendPoints(inter.points);
  }

  if (result.points.length > 0) {
    result.status = "Intersection";
  }

  return result;
};
/**
 *  intersectBezier3Rectangle
 *
 *  @param {module:kld-intersections.Point2D} p1
 *  @param {module:kld-intersections.Point2D} p2
 *  @param {module:kld-intersections.Point2D} p3
 *  @param {module:kld-intersections.Point2D} p4
 *  @param {module:kld-intersections.Point2D} r1
 *  @param {module:kld-intersections.Point2D} r2
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectBezier3Rectangle = function (p1, p2, p3, p4, r1, r2) {
  var min = r1.min(r2);
  var max = r1.max(r2);
  var topRight = new Point2D(max.x, min.y);
  var bottomLeft = new Point2D(min.x, max.y);
  var inter1 = Intersection.intersectBezier3Line(p1, p2, p3, p4, min, topRight);
  var inter2 = Intersection.intersectBezier3Line(p1, p2, p3, p4, topRight, max);
  var inter3 = Intersection.intersectBezier3Line(p1, p2, p3, p4, max, bottomLeft);
  var inter4 = Intersection.intersectBezier3Line(p1, p2, p3, p4, bottomLeft, min);
  var result = new Intersection("No Intersection");
  result.appendPoints(inter1.points);
  result.appendPoints(inter2.points);
  result.appendPoints(inter3.points);
  result.appendPoints(inter4.points);

  if (result.points.length > 0) {
    result.status = "Intersection";
  }

  return result;
};
/**
 *  intersectCircleCircle
 *
 *  @param {module:kld-intersections.Point2D} c1
 *  @param {number} r1
 *  @param {module:kld-intersections.Point2D} c2
 *  @param {number} r2
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectCircleCircle = function (c1, r1, c2, r2) {
  var result; // Determine minimum and maximum radii where circles can intersect

  var r_max = r1 + r2;
  var r_min = Math.abs(r1 - r2); // Determine actual distance between circle circles

  var c_dist = c1.distanceFrom(c2);

  if (c_dist > r_max) {
    result = new Intersection("Outside");
  } else if (c_dist < r_min) {
    result = new Intersection("Inside");
  } else {
    result = new Intersection("Intersection");
    var a = (r1 * r1 - r2 * r2 + c_dist * c_dist) / (2 * c_dist);
    var h = Math.sqrt(r1 * r1 - a * a);
    var p = c1.lerp(c2, a / c_dist);
    var b = h / c_dist;
    result.points.push(new Point2D(p.x - b * (c2.y - c1.y), p.y + b * (c2.x - c1.x)));
    result.points.push(new Point2D(p.x + b * (c2.y - c1.y), p.y - b * (c2.x - c1.x)));
  }

  return result;
};
/**
 *  intersectCircleEllipse
 *
 *  @param {module:kld-intersections.Point2D} cc
 *  @param {number} r
 *  @param {module:kld-intersections.Point2D} ec
 *  @param {number} rx
 *  @param {number} ry
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectCircleEllipse = function (cc, r, ec, rx, ry) {
  return Intersection.intersectEllipseEllipse(cc, r, r, ec, rx, ry);
};
/**
 *  intersectCircleLine
 *
 *  @param {module:kld-intersections.Point2D} c
 *  @param {number} r
 *  @param {module:kld-intersections.Point2D} a1
 *  @param {module:kld-intersections.Point2D} a2
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectCircleLine = function (c, r, a1, a2) {
  var result;
  var a = (a2.x - a1.x) * (a2.x - a1.x) + (a2.y - a1.y) * (a2.y - a1.y);
  var b = 2 * ((a2.x - a1.x) * (a1.x - c.x) + (a2.y - a1.y) * (a1.y - c.y));
  var cc = c.x * c.x + c.y * c.y + a1.x * a1.x + a1.y * a1.y - 2 * (c.x * a1.x + c.y * a1.y) - r * r;
  var deter = b * b - 4 * a * cc;

  if (deter < 0) {
    result = new Intersection("Outside");
  } else if (deter == 0) {
    result = new Intersection("Tangent"); // NOTE: should calculate this point
  } else {
    var e = Math.sqrt(deter);
    var u1 = (-b + e) / (2 * a);
    var u2 = (-b - e) / (2 * a);

    if ((u1 < 0 || u1 > 1) && (u2 < 0 || u2 > 1)) {
      if (u1 < 0 && u2 < 0 || u1 > 1 && u2 > 1) {
        result = new Intersection("Outside");
      } else {
        result = new Intersection("Inside");
      }
    } else {
      result = new Intersection("Intersection");

      if (0 <= u1 && u1 <= 1) {
        result.points.push(a1.lerp(a2, u1));
      }

      if (0 <= u2 && u2 <= 1) {
        result.points.push(a1.lerp(a2, u2));
      }
    }
  }

  return result;
};
/**
 *  intersectCirclePolygon
 *
 *  @param {module:kld-intersections.Point2D} c
 *  @param {number} r
 *  @param {Array<module:kld-intersections.Point2D>} points
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectCirclePolygon = function (c, r, points) {
  return this.intersectCirclePolyline(c, r, closePolygon(points));
};
/**
 *  intersectCirclePolyline
 *
 *  @param {module:kld-intersections.Point2D} c
 *  @param {number} r
 *  @param {Array<module:kld-intersections.Point2D>} points
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectCirclePolyline = function (c, r, points) {
  var result = new Intersection("No Intersection");
  var len = points.length;
  var inter;

  for (var i = 0; i < len - 1; i++) {
    var a1 = points[i];
    var a2 = points[i + 1];
    inter = Intersection.intersectCircleLine(c, r, a1, a2);
    result.appendPoints(inter.points);
  }

  if (result.points.length > 0) {
    result.status = "Intersection";
  } else {
    result.status = inter.status;
  }

  return result;
};
/**
 *  intersectCircleRectangle
 *
 *  @param {module:kld-intersections.Point2D} c
 *  @param {number} r
 *  @param {module:kld-intersections.Point2D} r1
 *  @param {module:kld-intersections.Point2D} r2
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectCircleRectangle = function (c, r, r1, r2) {
  var min = r1.min(r2);
  var max = r1.max(r2);
  var topRight = new Point2D(max.x, min.y);
  var bottomLeft = new Point2D(min.x, max.y);
  var inter1 = Intersection.intersectCircleLine(c, r, min, topRight);
  var inter2 = Intersection.intersectCircleLine(c, r, topRight, max);
  var inter3 = Intersection.intersectCircleLine(c, r, max, bottomLeft);
  var inter4 = Intersection.intersectCircleLine(c, r, bottomLeft, min);
  var result = new Intersection("No Intersection");
  result.appendPoints(inter1.points);
  result.appendPoints(inter2.points);
  result.appendPoints(inter3.points);
  result.appendPoints(inter4.points);

  if (result.points.length > 0) {
    result.status = "Intersection";
  } else {
    result.status = inter1.status;
  }

  return result;
};
/**
 *  intersectEllipseEllipse
 *
 *  This code is based on MgcIntr2DElpElp.cpp written by David Eberly.  His
 *  code along with many other excellent examples are avaiable at his site:
 *  http://www.magic-software.com
 *
 *  NOTE: Rotation will need to be added to this function
 *
 *  @param {module:kld-intersections.Point2D} c1
 *  @param {number} rx1
 *  @param {number} ry1
 *  @param {module:kld-intersections.Point2D} c2
 *  @param {number} rx2
 *  @param {number} ry2
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectEllipseEllipse = function (c1, rx1, ry1, c2, rx2, ry2) {
  var a = [ry1 * ry1, 0, rx1 * rx1, -2 * ry1 * ry1 * c1.x, -2 * rx1 * rx1 * c1.y, ry1 * ry1 * c1.x * c1.x + rx1 * rx1 * c1.y * c1.y - rx1 * rx1 * ry1 * ry1];
  var b = [ry2 * ry2, 0, rx2 * rx2, -2 * ry2 * ry2 * c2.x, -2 * rx2 * rx2 * c2.y, ry2 * ry2 * c2.x * c2.x + rx2 * rx2 * c2.y * c2.y - rx2 * rx2 * ry2 * ry2];
  var yPoly = Intersection.bezout(a, b);
  var yRoots = yPoly.getRoots();
  var epsilon = 1e-3;
  var norm0 = (a[0] * a[0] + 2 * a[1] * a[1] + a[2] * a[2]) * epsilon;
  var norm1 = (b[0] * b[0] + 2 * b[1] * b[1] + b[2] * b[2]) * epsilon;
  var result = new Intersection("No Intersection");

  for (var y = 0; y < yRoots.length; y++) {
    var xPoly = new Polynomial(a[0], a[3] + yRoots[y] * a[1], a[5] + yRoots[y] * (a[4] + yRoots[y] * a[2]));
    var xRoots = xPoly.getRoots();

    for (var x = 0; x < xRoots.length; x++) {
      var tst = (a[0] * xRoots[x] + a[1] * yRoots[y] + a[3]) * xRoots[x] + (a[2] * yRoots[y] + a[4]) * yRoots[y] + a[5];

      if (Math.abs(tst) < norm0) {
        tst = (b[0] * xRoots[x] + b[1] * yRoots[y] + b[3]) * xRoots[x] + (b[2] * yRoots[y] + b[4]) * yRoots[y] + b[5];

        if (Math.abs(tst) < norm1) {
          result.appendPoint(new Point2D(xRoots[x], yRoots[y]));
        }
      }
    }
  }

  if (result.points.length > 0) {
    result.status = "Intersection";
  }

  return result;
};
/**
 *  intersectEllipseLine
 *
 *  NOTE: Rotation will need to be added to this function
 *
 *  @param {module:kld-intersections.Point2D} c
 *  @param {number} rx
 *  @param {number} ry
 *  @param {module:kld-intersections.Point2D} a1
 *  @param {module:kld-intersections.Point2D} a2
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectEllipseLine = function (c, rx, ry, a1, a2) {
  var result;
  var orign = new Vector2D(a1.x, a1.y);
  var dir = Vector2D.fromPoints(a1, a2);
  var center = new Vector2D(c.x, c.y);
  var diff = orign.subtract(center);
  var mDir = new Vector2D(dir.x / (rx * rx), dir.y / (ry * ry));
  var mDiff = new Vector2D(diff.x / (rx * rx), diff.y / (ry * ry));
  var a = dir.dot(mDir);
  var b = dir.dot(mDiff);
  c = diff.dot(mDiff) - 1.0;
  var d = b * b - a * c;

  if (d < 0) {
    result = new Intersection("Outside");
  } else if (d > 0) {
    var root = Math.sqrt(d); // eslint-disable-line no-shadow

    var t_a = (-b - root) / a;
    var t_b = (-b + root) / a;

    if ((t_a < 0 || 1 < t_a) && (t_b < 0 || 1 < t_b)) {
      if (t_a < 0 && t_b < 0 || t_a > 1 && t_b > 1) {
        result = new Intersection("Outside");
      } else {
        result = new Intersection("Inside");
      }
    } else {
      result = new Intersection("Intersection");

      if (0 <= t_a && t_a <= 1) {
        result.appendPoint(a1.lerp(a2, t_a));
      }

      if (0 <= t_b && t_b <= 1) {
        result.appendPoint(a1.lerp(a2, t_b));
      }
    }
  } else {
    var t = -b / a;

    if (0 <= t && t <= 1) {
      result = new Intersection("Intersection");
      result.appendPoint(a1.lerp(a2, t));
    } else {
      result = new Intersection("Outside");
    }
  }

  return result;
};
/**
 *  intersectEllipsePolygon
 *
 *  @param {module:kld-intersections.Point2D} c
 *  @param {number} rx
 *  @param {number} ry
 *  @param {Array<module:kld-intersections.Point2D>} points
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectEllipsePolygon = function (c, rx, ry, points) {
  return this.intersectEllipsePolyline(c, rx, ry, closePolygon(points));
};
/**
 *  intersectEllipsePolyline
 *
 *  @param {module:kld-intersections.Point2D} c
 *  @param {number} rx
 *  @param {number} ry
 *  @param {Array<module:kld-intersections.Point2D>} points
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectEllipsePolyline = function (c, rx, ry, points) {
  var result = new Intersection("No Intersection");
  var len = points.length;

  for (var i = 0; i < len - 1; i++) {
    var b1 = points[i];
    var b2 = points[i + 1];
    var inter = Intersection.intersectEllipseLine(c, rx, ry, b1, b2);
    result.appendPoints(inter.points);
  }

  if (result.points.length > 0) {
    result.status = "Intersection";
  }

  return result;
};
/**
 *  intersectEllipseRectangle
 *
 *  @param {module:kld-intersections.Point2D} c
 *  @param {number} rx
 *  @param {number} ry
 *  @param {module:kld-intersections.Point2D} r1
 *  @param {module:kld-intersections.Point2D} r2
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectEllipseRectangle = function (c, rx, ry, r1, r2) {
  var min = r1.min(r2);
  var max = r1.max(r2);
  var topRight = new Point2D(max.x, min.y);
  var bottomLeft = new Point2D(min.x, max.y);
  var inter1 = Intersection.intersectEllipseLine(c, rx, ry, min, topRight);
  var inter2 = Intersection.intersectEllipseLine(c, rx, ry, topRight, max);
  var inter3 = Intersection.intersectEllipseLine(c, rx, ry, max, bottomLeft);
  var inter4 = Intersection.intersectEllipseLine(c, rx, ry, bottomLeft, min);
  var result = new Intersection("No Intersection");
  result.appendPoints(inter1.points);
  result.appendPoints(inter2.points);
  result.appendPoints(inter3.points);
  result.appendPoints(inter4.points);

  if (result.points.length > 0) {
    result.status = "Intersection";
  }

  return result;
};
/**
 *  intersectLineLine
 *
 *  @param {module:kld-intersections.Point2D} a1
 *  @param {module:kld-intersections.Point2D} a2
 *  @param {module:kld-intersections.Point2D} b1
 *  @param {module:kld-intersections.Point2D} b2
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectLineLine = function (a1, a2, b1, b2) {
  var result;
  var ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
  var ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
  var u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);

  if (u_b != 0) {
    var ua = ua_t / u_b;
    var ub = ub_t / u_b;

    if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
      result = new Intersection("Intersection");
      result.points.push(new Point2D(a1.x + ua * (a2.x - a1.x), a1.y + ua * (a2.y - a1.y)));
    } else {
      result = new Intersection("No Intersection");
    }
  } else if (ua_t == 0 || ub_t == 0) {
    result = new Intersection("Coincident");
  } else {
    result = new Intersection("Parallel");
  }

  return result;
};
/**
 *  intersectLinePolygon
 *
 *  @param {module:kld-intersections.Point2D} a1
 *  @param {module:kld-intersections.Point2D} a2
 *  @param {Array<module:kld-intersections.Point2D>} points
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectLinePolygon = function (a1, a2, points) {
  return this.intersectLinePolyline(a1, a2, closePolygon(points));
};
/**
 *  intersectLinePolyline
 *
 *  @param {module:kld-intersections.Point2D} a1
 *  @param {module:kld-intersections.Point2D} a2
 *  @param {Array<module:kld-intersections.Point2D>} points
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectLinePolyline = function (a1, a2, points) {
  var result = new Intersection("No Intersection");
  var len = points.length;

  for (var i = 0; i < len - 1; i++) {
    var b1 = points[i];
    var b2 = points[i + 1];
    var inter = Intersection.intersectLineLine(a1, a2, b1, b2);
    result.appendPoints(inter.points);
  }

  if (result.points.length > 0) {
    result.status = "Intersection";
  }

  return result;
};
/**
 *  intersectLineRectangle
 *
 *  @param {module:kld-intersections.Point2D} a1
 *  @param {module:kld-intersections.Point2D} a2
 *  @param {module:kld-intersections.Point2D} r1
 *  @param {module:kld-intersections.Point2D} r2
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectLineRectangle = function (a1, a2, r1, r2) {
  var min = r1.min(r2);
  var max = r1.max(r2);
  var topRight = new Point2D(max.x, min.y);
  var bottomLeft = new Point2D(min.x, max.y);
  var inter1 = Intersection.intersectLineLine(min, topRight, a1, a2);
  var inter2 = Intersection.intersectLineLine(topRight, max, a1, a2);
  var inter3 = Intersection.intersectLineLine(max, bottomLeft, a1, a2);
  var inter4 = Intersection.intersectLineLine(bottomLeft, min, a1, a2);
  var result = new Intersection("No Intersection");
  result.appendPoints(inter1.points);
  result.appendPoints(inter2.points);
  result.appendPoints(inter3.points);
  result.appendPoints(inter4.points);

  if (result.points.length > 0) {
    result.status = "Intersection";
  }

  return result;
};
/**
 *  intersectPolygonPolygon
 *
 *  @param {Array<module:kld-intersections.Point2D>} points1
 *  @param {Array<module:kld-intersections.Point2D>} points2
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectPolygonPolygon = function (points1, points2) {
  return this.intersectPolylinePolyline(closePolygon(points1), closePolygon(points2));
};
/**
 *  intersectPolygonPolyline
 *
 *  @param {Array<module:kld-intersections.Point2D>} points1
 *  @param {Array<module:kld-intersections.Point2D>} points2
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectPolygonPolyline = function (points1, points2) {
  return this.intersectPolylinePolyline(closePolygon(points1), points2);
};
/**
 *  intersectPolygonRectangle
 *
 *  @param {Array<module:kld-intersections.Point2D>} points
 *  @param {module:kld-intersections.Point2D} r1
 *  @param {module:kld-intersections.Point2D} r2
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectPolygonRectangle = function (points, r1, r2) {
  return this.intersectPolylineRectangle(closePolygon(points), r1, r2);
};
/**
 *  intersectPolylinePolyline
 *
 *  @param {Array<module:kld-intersections.Point2D>} points1
 *  @param {Array<module:kld-intersections.Point2D>} points2
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectPolylinePolyline = function (points1, points2) {
  var result = new Intersection("No Intersection");
  var len = points1.length;

  for (var i = 0; i < len - 1; i++) {
    var a1 = points1[i];
    var a2 = points1[i + 1];
    var inter = Intersection.intersectLinePolyline(a1, a2, points2);
    result.appendPoints(inter.points);
  }

  if (result.points.length > 0) {
    result.status = "Intersection";
  }

  return result;
};
/**
 *  intersectPolylineRectangle
 *
 *  @param {Array<module:kld-intersections.Point2D>} points
 *  @param {module:kld-intersections.Point2D} r1
 *  @param {module:kld-intersections.Point2D} r2
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectPolylineRectangle = function (points, r1, r2) {
  var min = r1.min(r2);
  var max = r1.max(r2);
  var topRight = new Point2D(max.x, min.y);
  var bottomLeft = new Point2D(min.x, max.y);
  var inter1 = Intersection.intersectLinePolyline(min, topRight, points);
  var inter2 = Intersection.intersectLinePolyline(topRight, max, points);
  var inter3 = Intersection.intersectLinePolyline(max, bottomLeft, points);
  var inter4 = Intersection.intersectLinePolyline(bottomLeft, min, points);
  var result = new Intersection("No Intersection");
  result.appendPoints(inter1.points);
  result.appendPoints(inter2.points);
  result.appendPoints(inter3.points);
  result.appendPoints(inter4.points);

  if (result.points.length > 0) {
    result.status = "Intersection";
  }

  return result;
};
/**
 *  intersectRectangleRectangle
 *
 *  @param {module:kld-intersections.Point2D} a1
 *  @param {module:kld-intersections.Point2D} a2
 *  @param {module:kld-intersections.Point2D} b1
 *  @param {module:kld-intersections.Point2D} b2
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectRectangleRectangle = function (a1, a2, b1, b2) {
  var min = a1.min(a2);
  var max = a1.max(a2);
  var topRight = new Point2D(max.x, min.y);
  var bottomLeft = new Point2D(min.x, max.y);
  var inter1 = Intersection.intersectLineRectangle(min, topRight, b1, b2);
  var inter2 = Intersection.intersectLineRectangle(topRight, max, b1, b2);
  var inter3 = Intersection.intersectLineRectangle(max, bottomLeft, b1, b2);
  var inter4 = Intersection.intersectLineRectangle(bottomLeft, min, b1, b2);
  var result = new Intersection("No Intersection");
  result.appendPoints(inter1.points);
  result.appendPoints(inter2.points);
  result.appendPoints(inter3.points);
  result.appendPoints(inter4.points);

  if (result.points.length > 0) {
    result.status = "Intersection";
  }

  return result;
};
/**
 *  intersectRayRay
 *
 *  @param {module:kld-intersections.Point2D} a1
 *  @param {module:kld-intersections.Point2D} a2
 *  @param {module:kld-intersections.Point2D} b1
 *  @param {module:kld-intersections.Point2D} b2
 *  @returns {module:kld-intersections.Intersection}
 */


Intersection.intersectRayRay = function (a1, a2, b1, b2) {
  var result;
  var ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
  var ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
  var u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);

  if (u_b != 0) {
    var ua = ua_t / u_b;
    result = new Intersection("Intersection");
    result.points.push(new Point2D(a1.x + ua * (a2.x - a1.x), a1.y + ua * (a2.y - a1.y)));
  } else if (ua_t == 0 || ub_t == 0) {
    result = new Intersection("Coincident");
  } else {
    result = new Intersection("Parallel");
  }

  return result;
};
/**
 *  bezout
 *
 *  This code is based on MgcIntr2DElpElp.cpp written by David Eberly.  His
 *  code along with many other excellent examples are avaiable at his site:
 *  http://www.magic-software.com
 *
 *  @param {Array<module:kld-intersections.Point2D>} e1
 *  @param {Array<module:kld-intersections.Point2D>} e2
 *  @returns {external:Polynomial}
 */


Intersection.bezout = function (e1, e2) {
  var AB = e1[0] * e2[1] - e2[0] * e1[1];
  var AC = e1[0] * e2[2] - e2[0] * e1[2];
  var AD = e1[0] * e2[3] - e2[0] * e1[3];
  var AE = e1[0] * e2[4] - e2[0] * e1[4];
  var AF = e1[0] * e2[5] - e2[0] * e1[5];
  var BC = e1[1] * e2[2] - e2[1] * e1[2];
  var BE = e1[1] * e2[4] - e2[1] * e1[4];
  var BF = e1[1] * e2[5] - e2[1] * e1[5];
  var CD = e1[2] * e2[3] - e2[2] * e1[3];
  var DE = e1[3] * e2[4] - e2[3] * e1[4];
  var DF = e1[3] * e2[5] - e2[3] * e1[5];
  var BFpDE = BF + DE;
  var BEmCD = BE - CD;
  return new Polynomial(AB * BC - AC * AC, AB * BEmCD + AD * BC - 2 * AC * AE, AB * BFpDE + AD * BEmCD - AE * AE - 2 * AC * AF, AB * DF + AD * BFpDE - 2 * AE * AF, AD * DF - AF * AF);
};

/**
 *
 *   IntersectionArgs.js
 *
 *   @copyright 2002, 2017 Kevin Lindsey
 *
 */

/**
 *  IntersectionArgs
 * @memberof module:kld-intersections
 */
var IntersectionArgs =
/*#__PURE__*/
function () {
  /**
   *  @param {string} name
   *  @param {Array<module:kld-intersections.Point2D>} args
   *  @returns {module:kld-intersections.IntersectionArgs}
   */
  function IntersectionArgs(name, args) {
    _classCallCheck(this, IntersectionArgs);

    this.init(name, args);
  }
  /**
   *  init
   *
   *  @param {string} name
   *  @param {Array<module:kld-intersections.Point2D>} args
   */


  _createClass(IntersectionArgs, [{
    key: "init",
    value: function init(name, args) {
      this.name = name;
      this.args = args;
    }
  }]);

  return IntersectionArgs;
}();

/**
 *  Shapes
 *
 *  @copyright 2017, Kevin Lindsey
 *  @module Shapes
 */
/**
 * @namespace
 */

var Shapes = {};
/**
 *  quadraticBezier
 *
 *  @param {number} p1x
 *  @param {number} p1y
 *  @param {number} p2x
 *  @param {number} p2y
 *  @param {number} p3x
 *  @param {number} p3y
 *  @returns {module:kld-intersections.IntersectionArgs}
 */

Shapes.quadraticBezier = function (p1x, p1y, p2x, p2y, p3x, p3y) {
  return new IntersectionArgs("Bezier2", [new Point2D(p1x, p1y), new Point2D(p2x, p2y), new Point2D(p3x, p3y)]);
};
/**
 *  cubicBezier
 *
 *  @param {number} p1x
 *  @param {number} p1y
 *  @param {number} p2x
 *  @param {number} p2y
 *  @param {number} p3x
 *  @param {number} p3y
 *  @param {number} p4x
 *  @param {number} p4y
 *  @returns {module:kld-intersections.IntersectionArgs}
 */


Shapes.cubicBezier = function (p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) {
  return new IntersectionArgs("Bezier3", [new Point2D(p1x, p1y), new Point2D(p2x, p2y), new Point2D(p3x, p3y), new Point2D(p4x, p4y)]);
};
/**
 *  circle
 *
 *  @param {number} centerX
 *  @param {number} centerY
 *  @param {number} radius
 *  @returns {module:kld-intersections.IntersectionArgs}
 */


Shapes.circle = function (centerX, centerY, radius) {
  return new IntersectionArgs("Circle", [new Point2D(centerX, centerY), radius]);
};
/**
 *  ellipse
 *
 *  @param {number} centerX
 *  @param {number} centerY
 *  @param {number} radiusX
 *  @param {number} radiusY
 *  @returns {module:kld-intersections.IntersectionArgs}
 */


Shapes.ellipse = function (centerX, centerY, radiusX, radiusY) {
  return new IntersectionArgs("Ellipse", [new Point2D(centerX, centerY), radiusX, radiusY]);
};
/**
 *  line
 *
 *  @param {number} p1x
 *  @param {number} p1y
 *  @param {number} p2x
 *  @param {number} p2y
 *  @returns {module:kld-intersections.IntersectionArgs}
 */


Shapes.line = function (p1x, p1y, p2x, p2y) {
  return new IntersectionArgs("Line", [new Point2D(p1x, p1y), new Point2D(p2x, p2y)]);
};
/**
 *  path
 *
 *  @param {Array<module:kld-intersections.Shapes>} segments
 *  @returns {module:kld-intersections.IntersectionArgs}
 */


Shapes.path = function (segments) {
  return new IntersectionArgs("Path", segments);
};
/**
 *  polygon
 *
 *  @param {Array<number>} coords
 *  @returns {module:kld-intersections.IntersectionArgs}
 */


Shapes.polygon = function (coords) {
  var points = [];

  for (var i = 0; i < coords.length; i += 2) {
    points.push(new Point2D(coords[i], coords[i + 1]));
  }

  return new IntersectionArgs("Polygon", [points]);
};
/**
 *  polyline
 *
 *  @param {Array<number>} coords
 *  @returns {module:kld-intersections.IntersectionArgs}
 */


Shapes.polyline = function (coords) {
  var points = [];

  for (var i = 0; i < coords.length; i += 2) {
    points.push(new Point2D(coords[i], coords[i + 1]));
  }

  return new IntersectionArgs("Polyline", [points]);
};
/**
 *  rectangle
 *
 *  @param {number} x
 *  @param {number} y
 *  @param {number} width
 *  @param {number} height
 *  @returns {module:kld-intersections.IntersectionArgs}
 */


Shapes.rectangle = function (x, y, width, height) {
  return new IntersectionArgs("Rectangle", [new Point2D(x, y), new Point2D(x + width, y + height)]);
};

/**
 *  AffineShapes
 *
 *  @copyright 2017, Kevin Lindsey
 *  @module AffineShapes
 */
/**
 * @namespace
 */

var AffineShapes = {};
/**
 *  quadraticBezier
 *  @param {module:kld-intersections.Point2D} p1
 *  @param {module:kld-intersections.Point2D} p2
 *  @param {module:kld-intersections.Point2D} p3
 *  @returns {module:kld-intersections.IntersectionArgs}
 */

AffineShapes.quadraticBezier = function (p1, p2, p3) {
  return new IntersectionArgs("Bezier2", [p1, p2, p3]);
};
/**
 *  cubicBezier
 *
 *  @param {module:kld-intersections.Point2D} p1
 *  @param {module:kld-intersections.Point2D} p2
 *  @param {module:kld-intersections.Point2D} p3
 *  @param {module:kld-intersections.Point2D} p4
 *  @returns {module:kld-intersections.IntersectionArgs}
 */


AffineShapes.cubicBezier = function (p1, p2, p3, p4) {
  return new IntersectionArgs("Bezier3", [p1, p2, p3, p4]);
};
/**
 *  circle
 *
 *  @param {module:kld-intersections.Point2D} center
 *  @param {number} radius
 *  @returns {module:kld-intersections.IntersectionArgs}
 */


AffineShapes.circle = function (center, radius) {
  return new IntersectionArgs("Circle", [center, radius]);
};
/**
 *  ellipse
 *
 *  @param {module:kld-intersections.Point2D} center
 *  @param {number} radiusX
 *  @param {number} radiusY
 *  @returns {module:kld-intersections.IntersectionArgs}
 */


AffineShapes.ellipse = function (center, radiusX, radiusY) {
  return new IntersectionArgs("Ellipse", [center, radiusX, radiusY]);
};
/**
 *  line
 *
 *  @param {module:kld-intersections.Point2D} p1
 *  @param {module:kld-intersections.Point2D} p2
 *  @returns {module:kld-intersections.IntersectionArgs}
 */


AffineShapes.line = function (p1, p2) {
  return new IntersectionArgs("Line", [p1, p2]);
};
/**
 *  path
 *
 *  @param {Array<module:kld-intersections.AffineShapes>} segments
 *  @returns {module:kld-intersections.IntersectionArgs}
 */


AffineShapes.path = function (segments) {
  return new IntersectionArgs("Path", [segments]);
};
/**
 *  polygon
 *
 *  @param {Array<module:kld-intersections.Point2D>} points
 *  @returns {module:kld-intersections.IntersectionArgs}
 */


AffineShapes.polygon = function (points) {
  return new IntersectionArgs("Polygon", [points]);
};
/**
 *  polyline
 *
 *  @param {Array<module:kld-intersections.Point2D>} points
 *  @returns {module:kld-intersections.IntersectionArgs}
 */


AffineShapes.polyline = function (points) {
  return new IntersectionArgs("Polyline", [points]);
};
/**
 *  rectangle
 *
 *  @param {module:kld-intersections.Point2D} topLeft
 *  @param {module:kld-intersections.Vector2D} size
 *  @returns {module:kld-intersections.IntersectionArgs}
 */


AffineShapes.rectangle = function (topLeft, size) {
  return new IntersectionArgs("Rectangle", [topLeft, topLeft.add(size)]);
};

/**
 *
 *  IntersectionQuery.js
 *
 *  @copyright 2017 Kevin Lindsey
 * @module IntersectionQuery
 */
/**
 * @namespace
 */

var IntersectionQuery = {};
/**
 *  pointInCircle
 *
 *  @param {module:kld-intersections.Point2D} point
 *  @param {module:kld-intersections.Point2D} center
 *  @param {number} radius
 *  @returns {boolean}
 */

IntersectionQuery.pointInCircle = function (point, center, radius) {
  var v = Vector2D.fromPoints(center, point);
  return v.length() <= radius;
};
/**
 *  pointInEllipse
 *
 *  @param {module:kld-intersections.Point2D} point
 *  @param {module:kld-intersections.Point2D} center
 *  @param {number} radiusX
 *  @param {number} radiusY
 *  @returns {boolean}
 */


IntersectionQuery.pointInEllipse = function (point, center, radiusX, radiusY) {
  var len = point.subtract(center);
  return len.x * len.x / (radiusX * radiusX) + len.y * len.y / (radiusY * radiusY) <= 1;
};
/**
 *  pointInPolyline
 *
 *  @param {module:kld-intersections.Point2D} point
 *  @param {Array<module:kld-intersections.Point2D>} points
 */


IntersectionQuery.pointInPolyline = function (point, points) {
  var len = points.length;
  var counter = 0;
  var xInter;
  var p1 = points[0];

  for (var i = 1; i <= len; i++) {
    var p2 = points[i % len];
    var minY = Math.min(p1.y, p2.y);
    var maxY = Math.max(p1.y, p2.y);
    var maxX = Math.max(p1.x, p2.x);

    if (p1.y !== p2.y && minY < point.y && point.y <= maxY && point.x <= maxX) {
      xInter = (point.y - p1.y) * (p2.x - p1.x) / (p2.y - p1.y) + p1.x;

      if (p1.x === p2.x || point.x <= xInter) {
        counter++;
      }
    }

    p1 = p2;
  }

  return counter % 2 === 1;
};
/**
 *  pointInPolyline
 *
 *  @param {module:kld-intersections.Point2D} point
 *  @param {Array<module:kld-intersections.Point2D>} points
 */


IntersectionQuery.pointInPolygon = IntersectionQuery.pointInPolyline;
/**
 *  pointInRectangle
 *
 *  @param {module:kld-intersections.Point2D} point
 *  @param {module:kld-intersections.Point2D} topLeft
 *  @param {module:kld-intersections.Point2D} bottomRight
 *  @returns {boolean}
 */

IntersectionQuery.pointInRectangle = function (point, topLeft, bottomRight) {
  return topLeft.x <= point.x && point.x < bottomRight.x && topLeft.y <= point.y && point.y < bottomRight.y;
};

/**
 * @module kld-intersections
 */
/**
* @external Polynomial
*/

export { AffineShapes, Intersection, IntersectionArgs, IntersectionQuery, Matrix2D, Point2D, Shapes, Vector2D };