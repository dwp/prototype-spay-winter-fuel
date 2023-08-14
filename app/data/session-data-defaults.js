/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // Insert values here

  "default-user": "Alex Smith",
  "default-user-nino": "AB 12 34 56 C",
  "default-user-dob": "3 February 1953",
  "address-line-1-default": "70 Elmgrove Terrace",
  "address-town-default": "Newcastle-Upon-Tyne",
  "address-county-default": "Tyne & Wear",
  "address-postcode-default": "NE1 6XP",

  "default-partner": "Geoff Smith",

  "address-line-1-change": "12 High Street",
  "address-town-change": "Newcastle-Upon-Tyne",
  "address-county-change": "Tyne & Wear",
  "address-postcode-change": "NE1 2AP"

}
