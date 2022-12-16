/* tslint:disable */
/* eslint-disable */
/**
 * Account Management Service API
 * Manage user subscriptions and clusters
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface CertificatesRequest
 */
export interface CertificatesRequest {
    /**
     * 
     * @type {string}
     * @memberof CertificatesRequest
     */
    'arch'?: CertificatesRequestArchEnum;
    /**
     * 
     * @type {string}
     * @memberof CertificatesRequest
     */
    'type': CertificatesRequestTypeEnum;
}

export const CertificatesRequestArchEnum = {
    X86: 'x86',
    X8664: 'x86_64',
    Ppc: 'ppc',
    Ppc64: 'ppc64',
    Ppc64le: 'ppc64le',
    S390: 's390',
    S390x: 's390x',
    Ia64: 'ia64',
    Aarch64: 'aarch64'
} as const;

export type CertificatesRequestArchEnum = typeof CertificatesRequestArchEnum[keyof typeof CertificatesRequestArchEnum];
export const CertificatesRequestTypeEnum = {
    Sca: 'sca'
} as const;

export type CertificatesRequestTypeEnum = typeof CertificatesRequestTypeEnum[keyof typeof CertificatesRequestTypeEnum];


