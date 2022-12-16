/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Instance API
 * API for interacting with Kafka Instance. Includes Produce, Consume and Admin APIs
 *
 * The version of the OpenAPI document: 0.13.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ConsumerGroup } from './consumer-group';

/**
 * A list of consumer groups
 * @export
 * @interface ConsumerGroupListAllOf
 */
export interface ConsumerGroupListAllOf {
    /**
     * 
     * @type {Array<ConsumerGroup>}
     * @memberof ConsumerGroupListAllOf
     */
    'items'?: Array<ConsumerGroup>;
}

