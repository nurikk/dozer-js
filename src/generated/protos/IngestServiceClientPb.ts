/**
 * @fileoverview gRPC-Web generated client stub for dozer.ingest
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.21.12
// source: protos/ingest.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as protos_ingest_pb from '../protos/ingest_pb';


export class IngestServiceClient {
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

  methodDescriptoringest = new grpcWeb.MethodDescriptor(
    '/dozer.ingest.IngestService/ingest',
    grpcWeb.MethodType.UNARY,
    protos_ingest_pb.IngestRequest,
    protos_ingest_pb.IngestResponse,
    (request: protos_ingest_pb.IngestRequest) => {
      return request.serializeBinary();
    },
    protos_ingest_pb.IngestResponse.deserializeBinary
  );

  ingest(
    request: protos_ingest_pb.IngestRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_ingest_pb.IngestResponse>;

  ingest(
    request: protos_ingest_pb.IngestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: protos_ingest_pb.IngestResponse) => void): grpcWeb.ClientReadableStream<protos_ingest_pb.IngestResponse>;

  ingest(
    request: protos_ingest_pb.IngestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: protos_ingest_pb.IngestResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/dozer.ingest.IngestService/ingest',
        request,
        metadata || {},
        this.methodDescriptoringest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/dozer.ingest.IngestService/ingest',
    request,
    metadata || {},
    this.methodDescriptoringest);
  }

  methodDescriptoringest_arrow = new grpcWeb.MethodDescriptor(
    '/dozer.ingest.IngestService/ingest_arrow',
    grpcWeb.MethodType.UNARY,
    protos_ingest_pb.IngestArrowRequest,
    protos_ingest_pb.IngestResponse,
    (request: protos_ingest_pb.IngestArrowRequest) => {
      return request.serializeBinary();
    },
    protos_ingest_pb.IngestResponse.deserializeBinary
  );

  ingest_arrow(
    request: protos_ingest_pb.IngestArrowRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_ingest_pb.IngestResponse>;

  ingest_arrow(
    request: protos_ingest_pb.IngestArrowRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: protos_ingest_pb.IngestResponse) => void): grpcWeb.ClientReadableStream<protos_ingest_pb.IngestResponse>;

  ingest_arrow(
    request: protos_ingest_pb.IngestArrowRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: protos_ingest_pb.IngestResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/dozer.ingest.IngestService/ingest_arrow',
        request,
        metadata || {},
        this.methodDescriptoringest_arrow,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/dozer.ingest.IngestService/ingest_arrow',
    request,
    metadata || {},
    this.methodDescriptoringest_arrow);
  }

}

