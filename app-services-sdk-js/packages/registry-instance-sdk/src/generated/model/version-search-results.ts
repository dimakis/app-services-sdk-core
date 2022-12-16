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


import { SearchedVersion } from './searched-version';

/**
 * Describes the response received when searching for artifacts.
 * @export
 * @interface VersionSearchResults
 */
export interface VersionSearchResults {
    /**
     * The total number of versions that matched the query (may be more than the number of versions returned in the result set).
     * @type {number}
     * @memberof VersionSearchResults
     */
    'count': number;
    /**
     * The collection of artifact versions returned in the result set.
     * @type {Array<SearchedVersion>}
     * @memberof VersionSearchResults
     */
    'versions': Array<SearchedVersion>;
}

