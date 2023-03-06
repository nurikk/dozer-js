"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for dozer.common
 * @enhanceable
 * @public
 */
exports.__esModule = true;
exports.CommonGrpcServiceClient = void 0;
// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.21.12
// source: protos/common.proto
/* eslint-disable */
// @ts-nocheck
var grpcWeb = require("grpc-web");
var protos_common_pb = require("../protos/common_pb");
var protos_types_pb = require("../protos/types_pb");
var CommonGrpcServiceClient = /** @class */ (function () {
    function CommonGrpcServiceClient(hostname, credentials, options) {
        this.methodDescriptorcount = new grpcWeb.MethodDescriptor('/dozer.common.CommonGrpcService/count', grpcWeb.MethodType.UNARY, protos_common_pb.QueryRequest, protos_common_pb.CountResponse, function (request) {
            return request.serializeBinary();
        }, protos_common_pb.CountResponse.deserializeBinary);
        this.methodDescriptorquery = new grpcWeb.MethodDescriptor('/dozer.common.CommonGrpcService/query', grpcWeb.MethodType.UNARY, protos_common_pb.QueryRequest, protos_common_pb.QueryResponse, function (request) {
            return request.serializeBinary();
        }, protos_common_pb.QueryResponse.deserializeBinary);
        this.methodDescriptorOnEvent = new grpcWeb.MethodDescriptor('/dozer.common.CommonGrpcService/OnEvent', grpcWeb.MethodType.SERVER_STREAMING, protos_common_pb.OnEventRequest, protos_types_pb.Operation, function (request) {
            return request.serializeBinary();
        }, protos_types_pb.Operation.deserializeBinary);
        this.methodDescriptorgetEndpoints = new grpcWeb.MethodDescriptor('/dozer.common.CommonGrpcService/getEndpoints', grpcWeb.MethodType.UNARY, protos_common_pb.GetEndpointsRequest, protos_common_pb.GetEndpointsResponse, function (request) {
            return request.serializeBinary();
        }, protos_common_pb.GetEndpointsResponse.deserializeBinary);
        this.methodDescriptorgetFields = new grpcWeb.MethodDescriptor('/dozer.common.CommonGrpcService/getFields', grpcWeb.MethodType.UNARY, protos_common_pb.GetFieldsRequest, protos_common_pb.GetFieldsResponse, function (request) {
            return request.serializeBinary();
        }, protos_common_pb.GetFieldsResponse.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'binary';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname.replace(/\/+$/, '');
        this.credentials_ = credentials;
        this.options_ = options;
    }
    CommonGrpcServiceClient.prototype.count = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/dozer.common.CommonGrpcService/count', request, metadata || {}, this.methodDescriptorcount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/dozer.common.CommonGrpcService/count', request, metadata || {}, this.methodDescriptorcount);
    };
    CommonGrpcServiceClient.prototype.query = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/dozer.common.CommonGrpcService/query', request, metadata || {}, this.methodDescriptorquery, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/dozer.common.CommonGrpcService/query', request, metadata || {}, this.methodDescriptorquery);
    };
    CommonGrpcServiceClient.prototype.onEvent = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/dozer.common.CommonGrpcService/OnEvent', request, metadata || {}, this.methodDescriptorOnEvent);
    };
    CommonGrpcServiceClient.prototype.getEndpoints = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/dozer.common.CommonGrpcService/getEndpoints', request, metadata || {}, this.methodDescriptorgetEndpoints, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/dozer.common.CommonGrpcService/getEndpoints', request, metadata || {}, this.methodDescriptorgetEndpoints);
    };
    CommonGrpcServiceClient.prototype.getFields = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/dozer.common.CommonGrpcService/getFields', request, metadata || {}, this.methodDescriptorgetFields, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/dozer.common.CommonGrpcService/getFields', request, metadata || {}, this.methodDescriptorgetFields);
    };
    return CommonGrpcServiceClient;
}());
exports.CommonGrpcServiceClient = CommonGrpcServiceClient;
