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
 * @interface ClusterUpgrade
 */
export interface ClusterUpgrade {
    /**
     * 
     * @type {boolean}
     * @memberof ClusterUpgrade
     */
    'available'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ClusterUpgrade
     */
    'state'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClusterUpgrade
     */
    'updated_timestamp'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClusterUpgrade
     */
    'version'?: string;
}

