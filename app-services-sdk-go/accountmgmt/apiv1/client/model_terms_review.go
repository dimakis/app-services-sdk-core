/*
 * Account Management Service API
 *
 * Manage user subscriptions and clusters
 *
 * API version: 0.0.1
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package accountmgmtclient

import (
	"encoding/json"
)

// TermsReview struct for TermsReview
type TermsReview struct {
	AccountUsername string `json:"account_username"`
	CheckOptionalTerms *bool `json:"check_optional_terms,omitempty"`
	EventCode *string `json:"event_code,omitempty"`
	SiteCode *string `json:"site_code,omitempty"`
}

// NewTermsReview instantiates a new TermsReview object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTermsReview(accountUsername string) *TermsReview {
	this := TermsReview{}
	this.AccountUsername = accountUsername
	var checkOptionalTerms bool = true
	this.CheckOptionalTerms = &checkOptionalTerms
	return &this
}

// NewTermsReviewWithDefaults instantiates a new TermsReview object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTermsReviewWithDefaults() *TermsReview {
	this := TermsReview{}
	var checkOptionalTerms bool = true
	this.CheckOptionalTerms = &checkOptionalTerms
	return &this
}

// GetAccountUsername returns the AccountUsername field value
func (o *TermsReview) GetAccountUsername() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.AccountUsername
}

// GetAccountUsernameOk returns a tuple with the AccountUsername field value
// and a boolean to check if the value has been set.
func (o *TermsReview) GetAccountUsernameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.AccountUsername, true
}

// SetAccountUsername sets field value
func (o *TermsReview) SetAccountUsername(v string) {
	o.AccountUsername = v
}

// GetCheckOptionalTerms returns the CheckOptionalTerms field value if set, zero value otherwise.
func (o *TermsReview) GetCheckOptionalTerms() bool {
	if o == nil || o.CheckOptionalTerms == nil {
		var ret bool
		return ret
	}
	return *o.CheckOptionalTerms
}

// GetCheckOptionalTermsOk returns a tuple with the CheckOptionalTerms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TermsReview) GetCheckOptionalTermsOk() (*bool, bool) {
	if o == nil || o.CheckOptionalTerms == nil {
		return nil, false
	}
	return o.CheckOptionalTerms, true
}

// HasCheckOptionalTerms returns a boolean if a field has been set.
func (o *TermsReview) HasCheckOptionalTerms() bool {
	if o != nil && o.CheckOptionalTerms != nil {
		return true
	}

	return false
}

// SetCheckOptionalTerms gets a reference to the given bool and assigns it to the CheckOptionalTerms field.
func (o *TermsReview) SetCheckOptionalTerms(v bool) {
	o.CheckOptionalTerms = &v
}

// GetEventCode returns the EventCode field value if set, zero value otherwise.
func (o *TermsReview) GetEventCode() string {
	if o == nil || o.EventCode == nil {
		var ret string
		return ret
	}
	return *o.EventCode
}

// GetEventCodeOk returns a tuple with the EventCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TermsReview) GetEventCodeOk() (*string, bool) {
	if o == nil || o.EventCode == nil {
		return nil, false
	}
	return o.EventCode, true
}

// HasEventCode returns a boolean if a field has been set.
func (o *TermsReview) HasEventCode() bool {
	if o != nil && o.EventCode != nil {
		return true
	}

	return false
}

// SetEventCode gets a reference to the given string and assigns it to the EventCode field.
func (o *TermsReview) SetEventCode(v string) {
	o.EventCode = &v
}

// GetSiteCode returns the SiteCode field value if set, zero value otherwise.
func (o *TermsReview) GetSiteCode() string {
	if o == nil || o.SiteCode == nil {
		var ret string
		return ret
	}
	return *o.SiteCode
}

// GetSiteCodeOk returns a tuple with the SiteCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TermsReview) GetSiteCodeOk() (*string, bool) {
	if o == nil || o.SiteCode == nil {
		return nil, false
	}
	return o.SiteCode, true
}

// HasSiteCode returns a boolean if a field has been set.
func (o *TermsReview) HasSiteCode() bool {
	if o != nil && o.SiteCode != nil {
		return true
	}

	return false
}

// SetSiteCode gets a reference to the given string and assigns it to the SiteCode field.
func (o *TermsReview) SetSiteCode(v string) {
	o.SiteCode = &v
}

func (o TermsReview) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["account_username"] = o.AccountUsername
	}
	if o.CheckOptionalTerms != nil {
		toSerialize["check_optional_terms"] = o.CheckOptionalTerms
	}
	if o.EventCode != nil {
		toSerialize["event_code"] = o.EventCode
	}
	if o.SiteCode != nil {
		toSerialize["site_code"] = o.SiteCode
	}
	return json.Marshal(toSerialize)
}

type NullableTermsReview struct {
	value *TermsReview
	isSet bool
}

func (v NullableTermsReview) Get() *TermsReview {
	return v.value
}

func (v *NullableTermsReview) Set(val *TermsReview) {
	v.value = val
	v.isSet = true
}

func (v NullableTermsReview) IsSet() bool {
	return v.isSet
}

func (v *NullableTermsReview) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTermsReview(val *TermsReview) *NullableTermsReview {
	return &NullableTermsReview{value: val, isSet: true}
}

func (v NullableTermsReview) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTermsReview) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


