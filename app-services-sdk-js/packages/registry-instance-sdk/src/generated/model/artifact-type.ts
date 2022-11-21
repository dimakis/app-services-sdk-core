/* tslint:disable */
/* eslint-disable */
/**
 * Service Registry API
 * Service Registry Instance API  NOTE: This API cannot be called directly from the portal.
 *
 * The version of the OpenAPI document: 2.2.5.Final
 * Contact: apicurio@lists.jboss.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @enum {string}
 */

export const ArtifactType = {
    Avro: 'AVRO',
    Protobuf: 'PROTOBUF',
    Json: 'JSON',
    Openapi: 'OPENAPI',
    Asyncapi: 'ASYNCAPI',
    Graphql: 'GRAPHQL',
    Kconnect: 'KCONNECT',
    Wsdl: 'WSDL',
    Xsd: 'XSD',
    Xml: 'XML'
} as const;

export type ArtifactType = typeof ArtifactType[keyof typeof ArtifactType];



