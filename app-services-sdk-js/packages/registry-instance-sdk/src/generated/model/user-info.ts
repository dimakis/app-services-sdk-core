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
 * Information about a single user.
 * @export
 * @interface UserInfo
 */
export interface UserInfo {
    /**
     * 
     * @type {string}
     * @memberof UserInfo
     */
    'username'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserInfo
     */
    'displayName'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserInfo
     */
    'admin'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserInfo
     */
    'developer'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserInfo
     */
    'viewer'?: boolean;
}

