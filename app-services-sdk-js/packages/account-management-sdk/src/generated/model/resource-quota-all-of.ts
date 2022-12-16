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
 * @interface ResourceQuotaAllOf
 */
export interface ResourceQuotaAllOf {
    /**
     * 
     * @type {string}
     * @memberof ResourceQuotaAllOf
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceQuotaAllOf
     */
    'organization_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceQuotaAllOf
     */
    'sku'?: string;
    /**
     * 
     * @type {number}
     * @memberof ResourceQuotaAllOf
     */
    'sku_count': number;
    /**
     * 
     * @type {string}
     * @memberof ResourceQuotaAllOf
     */
    'type'?: ResourceQuotaAllOfTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ResourceQuotaAllOf
     */
    'updated_at'?: string;
}

export const ResourceQuotaAllOfTypeEnum = {
    Config: 'Config',
    Manual: 'Manual',
    Subscription: 'Subscription'
} as const;

export type ResourceQuotaAllOfTypeEnum = typeof ResourceQuotaAllOfTypeEnum[keyof typeof ResourceQuotaAllOfTypeEnum];


