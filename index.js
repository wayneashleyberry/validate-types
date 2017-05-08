// @ts-check
const validate = require("validate.js");

validate.validators.inclusion.message = "is an invalid value";

validate.validators.string = function(value, options, key, attributes) {
	return validate.isString(value) === true ? null : "must be a string";
};

validate.formatters.custom = function(errors) {
	return errors.map(function(error) {
		return error.validator;
	});
};

const constraints = {
	username: {
		presence: true,
		exclusion: {
			within: ["nicklas"],
			message: "'%{value}' is not allowed"
		}
	},
	password: {
		presence: true,
		length: {
			minimum: 6,
			message: "must be at least 6 characters"
		}
	}
};

const errors = validate({ password: "bad" }, constraints, {
	format: "custom"
});

console.log(errors);
