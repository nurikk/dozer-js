/**
 * @fileoverview gRPC-Web generated client stub for dozer.health
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.21.12
// source: protos/health.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as protos_health_pb from '../protos/health_pb';


export class HealthGrpcServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorhealthCheck = new grpcWeb.MethodDescriptor(
    '/dozer.health.HealthGrpcService/healthCheck',
    grpcWeb.MethodType.UNARY,
    protos_health_pb.HealthCheckRequest,
    protos_health_pb.HealthCheckResponse,
    (request: protos_health_pb.HealthCheckRequest) => {
      return request.serializeBinary();
    },
    protos_health_pb.HealthCheckResponse.deserializeBinary
  );

  healthCheck(
    request: protos_health_pb.HealthCheckRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_health_pb.HealthCheckResponse>;

  healthCheck(
    request: protos_health_pb.HealthCheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: protos_health_pb.HealthCheckResponse) => void): grpcWeb.ClientReadableStream<protos_health_pb.HealthCheckResponse>;

  healthCheck(
    request: protos_health_pb.HealthCheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: protos_health_pb.HealthCheckResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/dozer.health.HealthGrpcService/healthCheck',
        request,
        metadata || {},
        this.methodDescriptorhealthCheck,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/dozer.health.HealthGrpcService/healthCheck',
    request,
    metadata || {},
    this.methodDescriptorhealthCheck);
  }

  methodDescriptorhealthWatch = new grpcWeb.MethodDescriptor(
    '/dozer.health.HealthGrpcService/healthWatch',
    grpcWeb.MethodType.SERVER_STREAMING,
    protos_health_pb.HealthCheckRequest,
    protos_health_pb.HealthCheckResponse,
    (request: protos_health_pb.HealthCheckRequest) => {
      return request.serializeBinary();
    },
    protos_health_pb.HealthCheckResponse.deserializeBinary
  );

  healthWatch(
    request: protos_health_pb.HealthCheckRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<protos_health_pb.HealthCheckResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/dozer.health.HealthGrpcService/healthWatch',
      request,
      metadata || {},
      this.methodDescriptorhealthWatch);
  }

}

