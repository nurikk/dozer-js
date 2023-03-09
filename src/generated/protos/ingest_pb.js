// source: protos/ingest.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var protos_types_pb = require('../protos/types_pb.js');
goog.object.extend(proto, protos_types_pb);
goog.exportSymbol('proto.dozer.ingest.IngestArrowRequest', null, global);
goog.exportSymbol('proto.dozer.ingest.IngestMetadata', null, global);
goog.exportSymbol('proto.dozer.ingest.IngestRequest', null, global);
goog.exportSymbol('proto.dozer.ingest.IngestResponse', null, global);
goog.exportSymbol('proto.dozer.ingest.OperationType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dozer.ingest.IngestRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dozer.ingest.IngestRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dozer.ingest.IngestRequest.displayName = 'proto.dozer.ingest.IngestRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dozer.ingest.IngestResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dozer.ingest.IngestResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dozer.ingest.IngestResponse.displayName = 'proto.dozer.ingest.IngestResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dozer.ingest.IngestArrowRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dozer.ingest.IngestArrowRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dozer.ingest.IngestArrowRequest.displayName = 'proto.dozer.ingest.IngestArrowRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dozer.ingest.IngestMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dozer.ingest.IngestMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dozer.ingest.IngestMetadata.displayName = 'proto.dozer.ingest.IngestMetadata';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dozer.ingest.IngestRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dozer.ingest.IngestRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dozer.ingest.IngestRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dozer.ingest.IngestRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    schemaName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    typ: jspb.Message.getFieldWithDefault(msg, 2, 0),
    old: (f = msg.getOld()) && protos_types_pb.Record.toObject(includeInstance, f),
    pb_new: (f = msg.getNew()) && protos_types_pb.Record.toObject(includeInstance, f),
    seqNo: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dozer.ingest.IngestRequest}
 */
proto.dozer.ingest.IngestRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dozer.ingest.IngestRequest;
  return proto.dozer.ingest.IngestRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dozer.ingest.IngestRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dozer.ingest.IngestRequest}
 */
proto.dozer.ingest.IngestRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchemaName(value);
      break;
    case 2:
      var value = /** @type {!proto.dozer.types.OperationType} */ (reader.readEnum());
      msg.setTyp(value);
      break;
    case 3:
      var value = new protos_types_pb.Record;
      reader.readMessage(value,protos_types_pb.Record.deserializeBinaryFromReader);
      msg.setOld(value);
      break;
    case 4:
      var value = new protos_types_pb.Record;
      reader.readMessage(value,protos_types_pb.Record.deserializeBinaryFromReader);
      msg.setNew(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSeqNo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dozer.ingest.IngestRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dozer.ingest.IngestRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dozer.ingest.IngestRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dozer.ingest.IngestRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchemaName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTyp();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getOld();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      protos_types_pb.Record.serializeBinaryToWriter
    );
  }
  f = message.getNew();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      protos_types_pb.Record.serializeBinaryToWriter
    );
  }
  f = message.getSeqNo();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional string schema_name = 1;
 * @return {string}
 */
proto.dozer.ingest.IngestRequest.prototype.getSchemaName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dozer.ingest.IngestRequest} returns this
 */
proto.dozer.ingest.IngestRequest.prototype.setSchemaName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional dozer.types.OperationType typ = 2;
 * @return {!proto.dozer.types.OperationType}
 */
proto.dozer.ingest.IngestRequest.prototype.getTyp = function() {
  return /** @type {!proto.dozer.types.OperationType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dozer.types.OperationType} value
 * @return {!proto.dozer.ingest.IngestRequest} returns this
 */
proto.dozer.ingest.IngestRequest.prototype.setTyp = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional dozer.types.Record old = 3;
 * @return {?proto.dozer.types.Record}
 */
proto.dozer.ingest.IngestRequest.prototype.getOld = function() {
  return /** @type{?proto.dozer.types.Record} */ (
    jspb.Message.getWrapperField(this, protos_types_pb.Record, 3));
};


/**
 * @param {?proto.dozer.types.Record|undefined} value
 * @return {!proto.dozer.ingest.IngestRequest} returns this
*/
proto.dozer.ingest.IngestRequest.prototype.setOld = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dozer.ingest.IngestRequest} returns this
 */
proto.dozer.ingest.IngestRequest.prototype.clearOld = function() {
  return this.setOld(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dozer.ingest.IngestRequest.prototype.hasOld = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional dozer.types.Record new = 4;
 * @return {?proto.dozer.types.Record}
 */
proto.dozer.ingest.IngestRequest.prototype.getNew = function() {
  return /** @type{?proto.dozer.types.Record} */ (
    jspb.Message.getWrapperField(this, protos_types_pb.Record, 4));
};


/**
 * @param {?proto.dozer.types.Record|undefined} value
 * @return {!proto.dozer.ingest.IngestRequest} returns this
*/
proto.dozer.ingest.IngestRequest.prototype.setNew = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dozer.ingest.IngestRequest} returns this
 */
proto.dozer.ingest.IngestRequest.prototype.clearNew = function() {
  return this.setNew(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dozer.ingest.IngestRequest.prototype.hasNew = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 seq_no = 5;
 * @return {number}
 */
proto.dozer.ingest.IngestRequest.prototype.getSeqNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dozer.ingest.IngestRequest} returns this
 */
proto.dozer.ingest.IngestRequest.prototype.setSeqNo = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dozer.ingest.IngestResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dozer.ingest.IngestResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dozer.ingest.IngestResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dozer.ingest.IngestResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    seqNo: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dozer.ingest.IngestResponse}
 */
proto.dozer.ingest.IngestResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dozer.ingest.IngestResponse;
  return proto.dozer.ingest.IngestResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dozer.ingest.IngestResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dozer.ingest.IngestResponse}
 */
proto.dozer.ingest.IngestResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSeqNo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dozer.ingest.IngestResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dozer.ingest.IngestResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dozer.ingest.IngestResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dozer.ingest.IngestResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeqNo();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 seq_no = 1;
 * @return {number}
 */
proto.dozer.ingest.IngestResponse.prototype.getSeqNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dozer.ingest.IngestResponse} returns this
 */
proto.dozer.ingest.IngestResponse.prototype.setSeqNo = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dozer.ingest.IngestArrowRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dozer.ingest.IngestArrowRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dozer.ingest.IngestArrowRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dozer.ingest.IngestArrowRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    schemaName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    records: msg.getRecords_asB64(),
    seqNo: jspb.Message.getFieldWithDefault(msg, 3, 0),
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, proto.dozer.ingest.IngestMetadata.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dozer.ingest.IngestArrowRequest}
 */
proto.dozer.ingest.IngestArrowRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dozer.ingest.IngestArrowRequest;
  return proto.dozer.ingest.IngestArrowRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dozer.ingest.IngestArrowRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dozer.ingest.IngestArrowRequest}
 */
proto.dozer.ingest.IngestArrowRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchemaName(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRecords(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSeqNo(value);
      break;
    case 4:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint32, jspb.BinaryReader.prototype.readMessage, proto.dozer.ingest.IngestMetadata.deserializeBinaryFromReader, 0, new proto.dozer.ingest.IngestMetadata());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dozer.ingest.IngestArrowRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dozer.ingest.IngestArrowRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dozer.ingest.IngestArrowRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dozer.ingest.IngestArrowRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchemaName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRecords_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSeqNo();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeUint32, jspb.BinaryWriter.prototype.writeMessage, proto.dozer.ingest.IngestMetadata.serializeBinaryToWriter);
  }
};


/**
 * optional string schema_name = 1;
 * @return {string}
 */
proto.dozer.ingest.IngestArrowRequest.prototype.getSchemaName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dozer.ingest.IngestArrowRequest} returns this
 */
proto.dozer.ingest.IngestArrowRequest.prototype.setSchemaName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes records = 2;
 * @return {!(string|Uint8Array)}
 */
proto.dozer.ingest.IngestArrowRequest.prototype.getRecords = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes records = 2;
 * This is a type-conversion wrapper around `getRecords()`
 * @return {string}
 */
proto.dozer.ingest.IngestArrowRequest.prototype.getRecords_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRecords()));
};


/**
 * optional bytes records = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRecords()`
 * @return {!Uint8Array}
 */
proto.dozer.ingest.IngestArrowRequest.prototype.getRecords_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRecords()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.dozer.ingest.IngestArrowRequest} returns this
 */
proto.dozer.ingest.IngestArrowRequest.prototype.setRecords = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional uint32 seq_no = 3;
 * @return {number}
 */
proto.dozer.ingest.IngestArrowRequest.prototype.getSeqNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dozer.ingest.IngestArrowRequest} returns this
 */
proto.dozer.ingest.IngestArrowRequest.prototype.setSeqNo = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * map<uint32, IngestMetadata> metadata = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.dozer.ingest.IngestMetadata>}
 */
proto.dozer.ingest.IngestArrowRequest.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.dozer.ingest.IngestMetadata>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.dozer.ingest.IngestMetadata));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.dozer.ingest.IngestArrowRequest} returns this
 */
proto.dozer.ingest.IngestArrowRequest.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
  return this;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dozer.ingest.IngestMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.dozer.ingest.IngestMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dozer.ingest.IngestMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dozer.ingest.IngestMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    typ: jspb.Message.getFieldWithDefault(msg, 1, 0),
    version: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dozer.ingest.IngestMetadata}
 */
proto.dozer.ingest.IngestMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dozer.ingest.IngestMetadata;
  return proto.dozer.ingest.IngestMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dozer.ingest.IngestMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dozer.ingest.IngestMetadata}
 */
proto.dozer.ingest.IngestMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.dozer.ingest.OperationType} */ (reader.readEnum());
      msg.setTyp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dozer.ingest.IngestMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dozer.ingest.IngestMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dozer.ingest.IngestMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dozer.ingest.IngestMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTyp();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional OperationType typ = 1;
 * @return {!proto.dozer.ingest.OperationType}
 */
proto.dozer.ingest.IngestMetadata.prototype.getTyp = function() {
  return /** @type {!proto.dozer.ingest.OperationType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.dozer.ingest.OperationType} value
 * @return {!proto.dozer.ingest.IngestMetadata} returns this
 */
proto.dozer.ingest.IngestMetadata.prototype.setTyp = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 version = 2;
 * @return {number}
 */
proto.dozer.ingest.IngestMetadata.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dozer.ingest.IngestMetadata} returns this
 */
proto.dozer.ingest.IngestMetadata.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.dozer.ingest.OperationType = {
  INSERT: 0,
  DELETE: 1,
  UPDATE: 2
};

goog.object.extend(exports, proto.dozer.ingest);
