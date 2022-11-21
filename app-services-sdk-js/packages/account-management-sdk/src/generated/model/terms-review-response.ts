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
 * @interface TermsReviewResponse
 */
export interface TermsReviewResponse {
    /**
     * 
     * @type {string}
     * @memberof TermsReviewResponse
     */
    'account_id': string;
    /**
     * 
     * @type {string}
     * @memberof TermsReviewResponse
     */
    'organization_id': string;
    /**
     * 
     * @type {string}
     * @memberof TermsReviewResponse
     */
    'redirect_url'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TermsReviewResponse
     */
    'terms_available': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TermsReviewResponse
     */
    'terms_required': boolean;
}

